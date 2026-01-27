import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchServiceBySlug } from '@/sanity/fetchers'

// Import static design pages for fallback when CMS is unavailable
import { ServiceDetail as Design1ServiceDetail } from '@/designs/design1/pages'
import { services as staticServices } from '@/designs/design1/data/content'

/**
 * Service Detail Page - Server Component
 * Falls back to static design when CMS is unavailable
 */

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

// Helper to find static service by slug
function findStaticServiceBySlug(slug: string) {
  return staticServices.find(s => s.slug === slug)
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params

  // Check static services first
  const staticService = findStaticServiceBySlug(slug)
  if (staticService) {
    return {
      title: `${staticService.name} - Advanced Appliance Repair Service`,
      description: staticService.shortDescription,
      openGraph: {
        title: staticService.name,
        description: staticService.shortDescription,
        images: staticService.image ? [{ url: staticService.image }] : undefined,
      },
    }
  }

  // Try CMS
  try {
    const service = await fetchServiceBySlug(slug)

    if (!service) {
      return {
        title: 'Service Not Found',
      }
    }

    const title = service.meta?.seo?.title || service.seo?.title || service.name
    const description = service.meta?.seo?.description || service.seo?.description || service.excerpt || ''

    return {
      title,
      description,
      openGraph: {
        title,
        description,
      },
    }
  } catch {
    return {
      title: 'Service Not Found',
    }
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params

  // Check static services first - this is the primary fallback
  const staticService = findStaticServiceBySlug(slug)
  if (staticService) {
    return <Design1ServiceDetail serviceSlug={slug} />
  }

  // Try CMS if no static service found
  try {
    const service = await fetchServiceBySlug(slug)

    if (!service) {
      notFound()
    }

    // If CMS has the service, use the static design component for now
    // (The CMS rendering would require more setup)
    return <Design1ServiceDetail serviceSlug={slug} />
  } catch {
    // CMS error - show not found
    notFound()
  }
}
