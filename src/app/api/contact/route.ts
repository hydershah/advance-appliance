import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

type LeadType = 'service' | 'newsletter'

export async function POST(request: NextRequest) {
  try {
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
    const type: LeadType = body.type === 'newsletter' ? 'newsletter' : 'service'

    const fromAddress = `Advance Appliance <${process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'}>`

    if (type === 'newsletter') {
      const { email } = body
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        `,
        text: `New Newsletter Subscription\n\nEmail: ${email}`,
      })

      if (error) {
        console.error('Resend error:', error)
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
      }

      return NextResponse.json({ success: true })
    }

    const { name, email, phone, applianceType, brandName, message } = body

    if (!name || !email || !phone || !applianceType || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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

    const { error } = await resend.emails.send({
      from: fromAddress,
      to: recipientEmails,
      subject: `New Service Request: ${applianceType}${brandName ? ` - ${brandName}` : ''}`,
      replyTo: email,
      html: `
        <h2>New Service Request</h2>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Name</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Email</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone</td><td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Appliance</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${applianceType}</td></tr>
          ${brandName ? `<tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Brand</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${brandName}</td></tr>` : ''}
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Message</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${message}</td></tr>
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
