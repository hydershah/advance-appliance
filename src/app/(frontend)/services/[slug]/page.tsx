import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchServiceBySlug } from '@/sanity/fetchers'
import { adaptService } from '@/lib/sanityAdapters'
import { ServiceDetail as Design1ServiceDetail } from '@/designs/design1/pages'
import { services as staticServices } from '@/designs/design1/data/content'

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
      return { title, description, openGraph: { title, description } }
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
      return <Design1ServiceDetail service={adaptService(cmsService)} />
    }
  } catch {
    // CMS unavailable
  }

  // Fallback to static
  const staticService = findStaticServiceBySlug(slug)
  if (staticService) {
    return <Design1ServiceDetail serviceSlug={slug} />
  }

  notFound()
}
