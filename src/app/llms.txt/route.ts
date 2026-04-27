import { serviceAreas, brands, services, businessInfo } from '@/designs/design1/data/content'
import { areaEnrichment } from '@/designs/design1/data/areaContent'
import { brandEnrichment } from '@/designs/design1/data/brandContent'

const CORE_AREA_SLUGS = new Set([
  'appliance-repair-in-morganville-nj',
  'appliance-repair-marlboro-nj',
  'appliance-repair-in-holmdel-nj',
  'appliance-repair-colts-neck-nj',
  'appliance-repair-in-red-bank-nj',
  'appliance-repair-in-shrewsbury-nj',
  'appliance-repair-in-manalapan-nj',
  'appliance-repair-in-freehold-nj',
  'appliance-repair-in-matawan-nj',
  'appliance-repair-in-aberdeen-nj',
  'appliance-repair-in-middletown-nj',
  'appliance-repair-in-old-bridge-nj',
  'appliance-repair-in-edison-nj',
  'appliance-repair-in-woodbridge-nj',
])

export const revalidate = 3600

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.appliancenj.com'
  const phone = businessInfo?.phone || '(732) 416-7430'

  const coreAreas = serviceAreas.filter((a) => CORE_AREA_SLUGS.has(a.slug))
  const otherAreas = serviceAreas.filter((a) => !CORE_AREA_SLUGS.has(a.slug))
  const enrichedBrands = brands.filter((b) => b.slug && brandEnrichment[b.slug])

  const lines: string[] = []
  lines.push('# Advanced Appliance Repair Service')
  lines.push('')
  lines.push(
    '> Factory-certified appliance repair across Monmouth and Middlesex Counties, NJ. In business since 1992 — 30+ years. 4.9 / 5 rating from 127+ verified Google reviews. Same-day and next-day service. OEM parts only. Up to 1-year parts and labor warranty.',
  )
  lines.push('')
  lines.push(`Phone: ${phone}`)
  lines.push(`Service area: Monmouth County and Middlesex County, New Jersey`)
  lines.push(`Diagnostic fee: $100 (credited toward repair on approval)`)
  lines.push('')

  lines.push('## What We Do')
  lines.push('')
  lines.push(
    'Advanced Appliance is a factory-trained appliance repair service. We diagnose and repair refrigerators, washers, dryers, dishwashers, ovens, ranges, and cooktops in residential homes. We are factory-certified on Sub-Zero, Wolf, Viking, Thermador, and Miele, and we service all major mainstream brands including LG, Samsung, Bosch, KitchenAid, GE, Whirlpool, Maytag, and Frigidaire.',
  )
  lines.push('')

  lines.push('## Core Service Areas (Primary Coverage)')
  lines.push('')
  for (const area of coreAreas) {
    const e = areaEnrichment[area.slug]
    const note = e ? ` — ${truncate(e.intro, 240)}` : ''
    lines.push(`- [${area.name}, NJ](${base}/areas/${area.slug})${note}`)
  }
  lines.push('')

  lines.push('## Additional Service Areas')
  lines.push('')
  for (const area of otherAreas) {
    lines.push(`- [${area.name}, NJ](${base}/areas/${area.slug})`)
  }
  lines.push('')

  lines.push('## Premium Brand Service (Factory-Certified)')
  lines.push('')
  for (const brand of enrichedBrands) {
    const e = brand.slug ? brandEnrichment[brand.slug] : undefined
    const note = e ? ` — ${e.tagline}` : ''
    lines.push(`- [${brand.name}](${base}/${brand.slug})${note}`)
  }
  lines.push('')

  lines.push('## Services')
  lines.push('')
  for (const s of services) {
    lines.push(`- [${s.name}](${base}/services/${s.slug}) — ${s.shortDescription}`)
  }
  lines.push('')

  lines.push('## Key Pages')
  lines.push('')
  lines.push(`- [About](${base}/about) — company history, technicians, certifications`)
  lines.push(`- [Reviews](${base}/our-reviews) — 4.9/5 from 127+ customers`)
  lines.push(`- [Contact](${base}/contact) — schedule service, emergency contact`)
  lines.push(`- [Service Area](${base}/our-service-area) — full coverage map`)
  lines.push(`- [Brands](${base}/our-brands) — every brand we service`)
  lines.push(`- [Blog](${base}/blog) — troubleshooting guides and how-to articles`)
  lines.push('')

  lines.push('## Common Questions')
  lines.push('')
  lines.push('Q: What areas do you serve?')
  lines.push(
    'A: Parts of Monmouth and Middlesex Counties in New Jersey, including Morganville, Marlboro, Holmdel, Colts Neck, Red Bank, Shrewsbury, Manalapan, Freehold, Matawan, Aberdeen, Middletown, Old Bridge, Edison, and Woodbridge as our core coverage.',
  )
  lines.push('')
  lines.push('Q: How much does a service call cost?')
  lines.push(
    'A: The diagnostic fee is $100, plus parts and labor. The diagnostic is credited toward the repair if you approve the work. There are no hidden fees and no travel surcharges within our service area.',
  )
  lines.push('')
  lines.push('Q: What brands do you repair?')
  lines.push(
    'A: We are factory-certified on Sub-Zero, Wolf, Viking, Thermador, and Miele. We also service all major mainstream brands including LG, Samsung, Bosch, KitchenAid, GE, GE Profile, GE Monogram, Whirlpool, Maytag, Kenmore, Jenn-Air, Electrolux, and Frigidaire.',
  )
  lines.push('')
  lines.push('Q: How fast can you get to me?')
  lines.push(
    'A: Next-day service is standard across our coverage area. Same-day service is frequently available when our morning route allows. Emergency refrigeration calls (food-loss risk) are triaged first.',
  )
  lines.push('')
  lines.push('Q: Do you offer a warranty?')
  lines.push(
    'A: Yes. Up to 1-year parts warranty (varies by brand) with a matching 1-year labor warranty.',
  )
  lines.push('')

  return new Response(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
      // Manifest is for AI crawlers, not human SERP results — keep crawlable
      // but out of Google/Bing index. AI bots ignore X-Robots-Tag, so this
      // affects only classic search engines.
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}

function truncate(s: string, n: number): string {
  if (!s) return ''
  if (s.length <= n) return s
  return s.slice(0, n - 1).trimEnd() + '…'
}
