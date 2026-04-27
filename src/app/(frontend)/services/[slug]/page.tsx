import { Metadata } from 'next'
import { notFound } from 'next/navigation'

export const revalidate = 300 // revalidate every 5 minutes
import { fetchServiceBySlug } from '@/sanity/fetchers'
import { adaptService } from '@/lib/sanityAdapters'
import Design1ServiceDetail from '@/designs/design1/pages/ServiceDetail'
import { services as staticServices, brands as staticBrands } from '@/designs/design1/data/content'
import { generateServiceSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

function findStaticServiceBySlug(slug: string) {
  return staticServices.find(s => s.slug === slug)
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params

  // Try CMS first
  try {
    const service = await fetchServiceBySlug(slug)
    if (service) {
      const title = service.seo?.title || service.name
      const description = service.seo?.description || service.excerpt || ''
      return { title, description, alternates: { canonical: `/services/${slug}` }, openGraph: { title, description, images: [{ url: `/api/og?title=${encodeURIComponent(title)}&category=Service`, width: 1200, height: 630 }] } }
    }
  } catch {
    // CMS unavailable
  }

  // Fallback to static
  const staticService = findStaticServiceBySlug(slug)
  if (staticService) {
    return {
      title: `${staticService.name} - Advanced Appliance Repair Service`,
      description: staticService.shortDescription,
      alternates: { canonical: `/services/${slug}` },
      openGraph: {
        title: `${staticService.name} - Advanced Appliance Repair Service`,
        description: staticService.shortDescription,
        images: [{ url: `/api/og?title=${encodeURIComponent(staticService.name)}&category=Service`, width: 1200, height: 630 }],
      },
    }
  }

  return { title: 'Service Not Found' }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params

  // Try CMS first
  try {
    const cmsService = await fetchServiceBySlug(slug)
    if (cmsService) {
      const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
      const serviceSchema = generateServiceSchema({
        name: cmsService.name,
        description: cmsService.excerpt || cmsService.seo?.description || '',
        serviceType: 'Appliance Repair',
        url: `${BASE_URL}/services/${slug}`,
      })

      return (
        <>
          <JsonLd data={serviceSchema} />
          <Design1ServiceDetail service={adaptService(cmsService)} />
        </>
      )
    }
  } catch {
    // CMS unavailable
  }

  // Fallback to static
  const staticService = findStaticServiceBySlug(slug)
  if (staticService) {
    const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
    const featuredBrandNames = staticBrands.filter((b) => b.featured).map((b) => b.name)

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/services/${slug}#service`,
      name: staticService.name,
      serviceType: staticService.name,
      description: staticService.description || staticService.shortDescription,
      url: `${BASE_URL}/services/${slug}`,
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#organization`,
        name: 'Advanced Appliance Repair Service',
        telephone: '(732) 416-7430',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Monmouth County, NJ' },
        { '@type': 'AdministrativeArea', name: 'Middlesex County, NJ' },
      ],
      offers: {
        '@type': 'AggregateOffer',
        availability: 'https://schema.org/InStock',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '100.00',
          priceCurrency: 'USD',
          description: 'Diagnostic fee, credited toward repair on approval',
        },
      },
      brand: featuredBrandNames.map((n) => ({ '@type': 'Brand', name: n })),
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '127',
        bestRating: '5',
        worstRating: '1',
      },
    }

    return (
      <>
        <JsonLd data={serviceSchema} />
        <Design1ServiceDetail serviceSlug={slug} />
      </>
    )
  }

  notFound()
}
