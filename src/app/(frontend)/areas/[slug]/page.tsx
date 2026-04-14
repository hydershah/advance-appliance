import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchServiceAreaBySlug, fetchAllServiceAreas } from '@/sanity/fetchers'
import { urlFor } from '@/sanity/image'
import { JsonLd } from '@/components/JsonLd'
import Design1AreaPage from '@/designs/design1/pages/AreaPage'
import { serviceAreas } from '@/designs/design1/data/content'
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

  // Try Sanity first
  try {
    const area = await fetchServiceAreaBySlug(slug)

    if (area) {
      const title = area.meta?.seo?.title || area.seo?.title || `${area.name} - Service Area`
      const description = area.meta?.seo?.description || area.seo?.description || area.excerpt || ''

      const seoImage = area.meta?.seo?.image || area.seo?.image
      const image = seoImage
        ? urlFor(seoImage).url()
        : area.image
        ? urlFor(area.image).url()
        : undefined

      return {
        title,
        description,
        alternates: { canonical: `/areas/${slug}` },
        openGraph: {
          title,
          description,
          images: image ? [{ url: image }] : [{ url: `/api/og?title=${encodeURIComponent(String(area.name))}&subtitle=Appliance+Repair+Service&category=Service+Area`, width: 1200, height: 630 }],
        },
        twitter: {
          title,
          description,
          images: image ? [image] : undefined,
        },
      }
    }
  } catch {
    // CMS unavailable, fall through to static
  }

  // Fallback to static data
  const staticArea = findStaticAreaBySlug(slug)
  if (staticArea) {
    const enrichment = areaEnrichment[staticArea.slug]
    const neighborhoodPhrase = enrichment?.neighborhoods.slice(0, 3).join(', ')
    const metaTitle = `Appliance Repair in ${staticArea.name}, NJ | Same-Day Service | Advanced Appliance`
    const metaDescription = neighborhoodPhrase
      ? `Factory-trained appliance repair in ${staticArea.name}, NJ (${staticArea.zipCodes.join(', ')}) — serving ${neighborhoodPhrase}. Sub-Zero, Wolf, Thermador, LG, Samsung & all major brands. 30+ years in ${staticArea.county} County. Call (732) 416-7430.`
      : `Professional appliance repair in ${staticArea.name}, ${staticArea.county} County, NJ (${staticArea.zipCodes.join(', ')}). All major brands — same-day service available. Call (732) 416-7430.`
    return {
      title: metaTitle,
      description: metaDescription,
      alternates: { canonical: `/areas/${slug}` },
      openGraph: {
        title: `Appliance Repair in ${staticArea.name}, NJ`,
        description: metaDescription,
        images: [{ url: `/api/og?title=Appliance+Repair+in+${encodeURIComponent(staticArea.name)},+NJ&category=Service+Area`, width: 1200, height: 630 }],
      },
      twitter: {
        title: metaTitle,
        description: metaDescription,
      },
    }
  }

  return {
    title: 'Area Not Found',
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

  return (
    <>
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Design1AreaPage area={staticArea} />
    </>
  )
}

// Enable ISR
export const revalidate = 3600
