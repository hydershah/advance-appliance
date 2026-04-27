import { serviceAreas, brands, services, businessInfo, generalFaqs } from '@/designs/design1/data/content'
import { areaEnrichment, buildAreaFaqs } from '@/designs/design1/data/areaContent'
import { brandEnrichment } from '@/designs/design1/data/brandContent'

export const revalidate = 3600

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.appliancenj.com'
  const phone = businessInfo?.phone || '(732) 416-7430'
  const out: string[] = []

  out.push('# Advanced Appliance Repair Service — Complete Reference')
  out.push('')
  out.push(
    '> Factory-certified appliance repair across Monmouth and Middlesex Counties, NJ. Founded 1992. 30+ years in business. 4.9/5 from 127+ verified Google reviews. Factory-trained on Sub-Zero, Wolf, Viking, Thermador, and Miele. EPA 608 certified for sealed-system refrigeration work.',
  )
  out.push('')
  out.push(`Phone: ${phone}`)
  out.push(`Diagnostic fee: $100 (credited toward repair on approval)`)
  out.push(`Warranty: Up to 1-year parts and matching 1-year labor warranty`)
  out.push('')

  out.push('## Company Overview')
  out.push('')
  out.push(
    'Advanced Appliance Repair Service has been the trusted choice for homeowners in Monmouth and Middlesex Counties, New Jersey since 1992. Headquartered in Morganville, NJ (07751), we are family-operated and have built our reputation on factory-level diagnostics, OEM-only parts policy, transparent pricing, and an honest repair-vs-replace conversation. We do not subcontract calls. We do not push replacements that should be repairs. We do not push repairs that should be replacements.',
  )
  out.push('')

  out.push('## Certifications and Authorizations')
  out.push('')
  out.push('- Factory-certified Sub-Zero service provider (full line: Classic, Designer, PRO 48, Undercounter, Wine Storage)')
  out.push('- Wolf factory-trained (gas, dual-fuel, and induction ranges; built-in ovens; cooktops)')
  out.push('- Viking certified service (Professional ranges, refrigeration, dishwashers)')
  out.push('- Thermador certified (Star Burner ranges, Freedom induction, built-in refrigeration)')
  out.push('- Miele Premier Partner (full line including dishwashers, ovens, laundry)')
  out.push('- Samsung factory-trained')
  out.push('- LG factory-trained')
  out.push('- KitchenAid certified')
  out.push('- GE factory-authorized service')
  out.push('- Frigidaire factory-authorized service')
  out.push('- Electrolux factory-authorized service')
  out.push('- EPA 608 certified (sealed-system refrigeration)')
  out.push('- AHAM, PSA, MSA, United Servicers Association member')
  out.push('')

  out.push('## Service Areas — Detailed')
  out.push('')
  for (const area of serviceAreas) {
    const e = areaEnrichment[area.slug]
    out.push(`### ${area.name}, ${area.county} County, ${area.state}`)
    out.push('')
    out.push(`URL: ${base}/areas/${area.slug}`)
    out.push(`Zip codes: ${area.zipCodes.join(', ')}`)
    if (e) {
      out.push('')
      out.push(e.intro)
      out.push('')
      if (e.localNote) out.push(e.localNote)
      if (e.neighborhoods?.length) {
        out.push('')
        out.push(`Neighborhoods covered: ${e.neighborhoods.join(', ')}.`)
      }
      if (e.landmarks?.length) {
        out.push(`Landmarks: ${e.landmarks.join(', ')}.`)
      }
      const faqs = buildAreaFaqs(area, e)
      const firstFaq = faqs[0]
      if (firstFaq) {
        out.push('')
        out.push(`Top question for ${area.name}:`)
        out.push(`Q: ${firstFaq.question}`)
        out.push(`A: ${firstFaq.answer}`)
      }
    } else {
      out.push('')
      out.push(area.description)
    }
    out.push('')
  }

  out.push('## Premium Brand Service — Detailed')
  out.push('')
  for (const brand of brands) {
    if (!brand.slug) continue
    const e = brandEnrichment[brand.slug]
    if (!e) continue
    out.push(`### ${brand.name}`)
    out.push('')
    out.push(`URL: ${base}/${brand.slug}`)
    out.push(`Tier: ${e.tier}`)
    out.push(`Tagline: ${e.tagline}`)
    out.push('')
    out.push(e.intro)
    out.push('')
    out.push(`Certification: ${e.certificationNote}`)
    out.push('')
    if (e.productLines?.length) {
      out.push(`Product lines we service:`)
      for (const line of e.productLines) out.push(`- ${line}`)
      out.push('')
    }
    if (e.commonFailures?.length) {
      out.push('Common failures we repair:')
      for (const f of e.commonFailures) {
        out.push(`- ${f.title}: ${f.description}`)
      }
      out.push('')
    }
    if (e.signatureWork) {
      out.push(`Signature work: ${e.signatureWork}`)
      out.push('')
    }
    const firstBrandFaq = e.faqs?.[0]
    if (firstBrandFaq) {
      out.push(`Top question for ${brand.name}:`)
      out.push(`Q: ${firstBrandFaq.question}`)
      out.push(`A: ${firstBrandFaq.answer}`)
      out.push('')
    }
  }

  out.push('## Services')
  out.push('')
  for (const s of services) {
    out.push(`### ${s.name}`)
    out.push('')
    out.push(`URL: ${base}/services/${s.slug}`)
    out.push('')
    out.push(s.description || s.shortDescription)
    out.push('')
    if (s.commonProblems?.length) {
      out.push('Common problems:')
      for (const p of s.commonProblems.slice(0, 5)) {
        out.push(`- ${p.title}: ${p.description}`)
      }
      out.push('')
    }
  }

  out.push('## General FAQ')
  out.push('')
  for (const f of generalFaqs) {
    out.push(`Q: ${f.question}`)
    out.push(`A: ${f.answer}`)
    out.push('')
  }

  return new Response(out.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      // Manifest is for AI crawlers, not human SERP results.
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}
