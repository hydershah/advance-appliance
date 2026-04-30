import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { checkRateLimit } from '@/lib/api'

export const dynamic = 'force-dynamic'

type LeadType = 'service' | 'newsletter'

// Cap request body length per field. Without these caps a bot can submit
// 100kB strings to exhaust Resend send credits.
const MAX = {
  name: 100,
  email: 254,
  phone: 30,
  applianceType: 100,
  brandName: 100,
  message: 2000,
} as const

// HTML-entity escape — prevents recipient inbox HTML injection / phishing.
function escHtml(s: string): string {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

const PHONE_RE = /^\+?[\d\s\-().]{7,20}$/
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function bound(value: unknown, max: number): string {
  if (typeof value !== 'string') return ''
  return value.trim().slice(0, max)
}

export async function POST(request: NextRequest) {
  try {
    // Rate limit: 5 submissions per IP per minute. The contact form is the
    // primary spam vector — anything above this is bot traffic.
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    const rl = checkRateLimit(`contact:${ip}`, 5, 60_000)
    if (!rl.allowed) {
      return NextResponse.json({ error: 'Too many requests, try again shortly' }, { status: 429 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const recipientEmails = (process.env.CONTACT_EMAILS || '').split(',').map(e => e.trim()).filter(Boolean)

    if (recipientEmails.length === 0) {
      console.error('No recipient emails configured. Set CONTACT_EMAILS in .env.local')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    const body = await request.json()

    // Honeypot: any submission with the `website` field filled is a bot.
    // Real users never see this hidden field; bots autofill all inputs.
    if (typeof body.website === 'string' && body.website.trim() !== '') {
      // Pretend success so bots don't iterate — but skip the email send.
      return NextResponse.json({ success: true })
    }

    const type: LeadType = body.type === 'newsletter' ? 'newsletter' : 'service'
    const fromAddress = `Advance Appliance <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`

    if (type === 'newsletter') {
      const email = bound(body.email, MAX.email)
      if (!EMAIL_RE.test(email)) {
        return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
      }

      const { error } = await resend.emails.send({
        from: fromAddress,
        to: recipientEmails,
        subject: 'New Newsletter Subscription',
        replyTo: email,
        html: `
          <h2>New Newsletter Subscription</h2>
          <p>A visitor subscribed to the newsletter on the Advance Appliance website.</p>
          <p><strong>Email:</strong> <a href="mailto:${escHtml(email)}">${escHtml(email)}</a></p>
        `,
        text: `New Newsletter Subscription\n\nEmail: ${email}`,
      })

      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }

      return NextResponse.json({ success: true })
    }

    const name = bound(body.name, MAX.name)
    const email = bound(body.email, MAX.email)
    const phone = bound(body.phone, MAX.phone)
    const applianceType = bound(body.applianceType, MAX.applianceType)
    const brandName = bound(body.brandName, MAX.brandName)
    // `message` is now optional — empty messages should still convert.
    // The agent will follow up with a phone call.
    const message =
      bound(body.message, MAX.message) ||
      'No additional message provided — please contact me to schedule service.'

    if (!name || !email || !phone || !applianceType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }
    if (!PHONE_RE.test(phone)) {
      return NextResponse.json({ error: 'Valid phone number required' }, { status: 400 })
    }

    const textBody = [
      'New Service Request',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Appliance: ${applianceType}`,
      brandName ? `Brand: ${brandName}` : null,
      `Message: ${message}`,
    ].filter(Boolean).join('\n')

    const e = {
      name: escHtml(name),
      email: escHtml(email),
      phone: escHtml(phone),
      applianceType: escHtml(applianceType),
      brandName: escHtml(brandName),
      message: escHtml(message),
    }

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: recipientEmails,
      subject: `New Service Request: ${applianceType}${brandName ? ` - ${brandName}` : ''}`,
      replyTo: email,
      html: `
        <h2>New Service Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${e.name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${e.email}">${e.email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${e.phone}">${e.phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Appliance</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${e.applianceType}</td></tr>
          ${brandName ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Brand</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${e.brandName}</td></tr>` : ''}
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${e.message}</td></tr>
        </table>
      `,
      text: textBody,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
