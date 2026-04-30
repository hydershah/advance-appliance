import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchServiceAreaBySlug, fetchAllServiceAreas } from '@/sanity/fetchers'
import { urlFor } from '@/sanity/image'
import { JsonLd } from '@/components/JsonLd'
import Design1AreaPage from '@/designs/design1/pages/AreaPage'
import { serviceAreas, testimonials } from '@/designs/design1/data/content'
import { areaEnrichment, buildAreaFaqs } from '@/designs/design1/data/areaContent'

// Helper to find static area by slug
function findStaticAreaBySlug(slug: string) {
  return serviceAreas.find(a => a.slug === slug)
}

/**
 * Service Area Detail Page - Server Component
 */

interface ServiceAreaPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  // Start with static area slugs
  const staticParams = serviceAreas.map((area) => ({
    slug: area.slug,
  }))

  try {
    const areas = await fetchAllServiceAreas()

    const dbParams = areas.map((area) => ({
      slug: typeof area.slug === 'object' ? area.slug.current : area.slug,
    }))

    // Merge, preferring DB entries but including all static ones
    const allSlugs = new Set(dbParams.map(p => p.slug))
    const merged = [...dbParams]
    for (const param of staticParams) {
      if (!allSlugs.has(param.slug)) {
        merged.push(param)
      }
    }
    return merged
  } catch {
    // CMS may not be available during build
    return staticParams
  }
}

export async function generateMetadata({
  params,
}: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params

  // Static title/description are the canonical SEO targets — they are
  // versioned in code, reviewed in PRs, and free of stale phrasing
  // (e.g. "Factory-Authorized" still in legacy Sanity documents). Static
  // wins for title/desc; CMS still supplies the OG image when available.
  const staticArea = findStaticAreaBySlug(slug)
  if (!staticArea) {
    return { title: 'Area Not Found' }
  }

  const enrichment = areaEnrichment[staticArea.slug]
  const neighborhoodPhrase = enrichment?.neighborhoods.slice(0, 3).join(', ')
  const metaTitle = `Appliance Repair in ${staticArea.name}, NJ | Factory-Certified | Advanced Appliance`
  const metaDescription = neighborhoodPhrase
    ? `Factory-certified appliance repair in ${staticArea.name}, NJ (${staticArea.zipCodes.join(', ')}) — serving ${neighborhoodPhrase}. Sub-Zero, Wolf, Thermador, LG, Samsung & all major brands. 30+ years in ${staticArea.county} County. Call (732) 416-7430.`
    : `Professional appliance repair in ${staticArea.name}, ${staticArea.county} County, NJ (${staticArea.zipCodes.join(', ')}). All major brands — same-day service available. Call (732) 416-7430.`

  // Try CMS for OG image only — if Sanity supplies a custom hero image,
  // use it. Title and description are NOT taken from CMS to prevent
  // legacy "Factory-Authorized" phrasing from leaking into SERPs.
  let ogImage: string | undefined
  try {
    const cmsArea = await fetchServiceAreaBySlug(slug)
    if (cmsArea) {
      const seoImage = cmsArea.meta?.seo?.image || cmsArea.seo?.image
      ogImage = seoImage
        ? urlFor(seoImage).url()
        : cmsArea.image
          ? urlFor(cmsArea.image).url()
          : undefined
    }
  } catch {
    // CMS unavailable — no problem, we have a generated OG fallback below.
  }

  const fallbackOg = `/api/og?title=Appliance+Repair+in+${encodeURIComponent(staticArea.name)},+NJ&category=Service+Area`

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical: `/areas/${slug}` },
    openGraph: {
      title: `Appliance Repair in ${staticArea.name}, NJ`,
      description: metaDescription,
      images: [{ url: ogImage || fallbackOg, width: 1200, height: 630 }],
    },
    twitter: {
      title: metaTitle,
      description: metaDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params

  const staticArea = findStaticAreaBySlug(slug)
  if (!staticArea) {
    notFound()
  }

  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.appliancenj.com'
  const enrichment = areaEnrichment[staticArea.slug]

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${BASE_URL}/areas/${staticArea.slug}#service`,
    name: `Appliance Repair in ${staticArea.name}, NJ`,
    serviceType: 'Appliance Repair',
    description: enrichment?.intro || staticArea.description,
    url: `${BASE_URL}/areas/${staticArea.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#organization`,
      name: 'Advanced Appliance',
      telephone: '(732) 416-7430',
    },
    areaServed: {
      '@type': 'City',
      name: staticArea.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${staticArea.county} County, ${staticArea.state}`,
      },
    },
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
    },
  }

  const faqs = enrichment ? buildAreaFaqs(staticArea, enrichment) : []
  const faqSchema = faqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': `${BASE_URL}/areas/${staticArea.slug}#faq`,
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null

  // Per-area LocalBusiness + AggregateRating + city-tagged reviews.
  // Anchored to avoid "Amboy" false-positives.
  const areaNameLc = staticArea.name.toLowerCase()
  const areaReviews = testimonials.filter((t) => {
    const loc = t.location.toLowerCase()
    return loc === `${areaNameLc}, nj` || loc.startsWith(`${areaNameLc},`)
  })

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/areas/${staticArea.slug}#localbusiness`,
    name: `Advanced Appliance Repair — ${staticArea.name}, NJ`,
    image: `${BASE_URL}/logo.png`,
    url: `${BASE_URL}/areas/${staticArea.slug}`,
    telephone: '(732) 416-7430',
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: staticArea.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: `${staticArea.county} County, ${staticArea.state}`,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    ...(areaReviews.length > 0 && {
      review: areaReviews.slice(0, 3).map((t) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: t.name },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: String(t.rating),
          bestRating: '5',
          worstRating: '1',
        },
        reviewBody: t.text,
        datePublished: t.date,
      })),
    }),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={localBusinessSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Design1AreaPage area={staticArea} />
    </>
  )
}

// Enable ISR
export const revalidate = 3600
