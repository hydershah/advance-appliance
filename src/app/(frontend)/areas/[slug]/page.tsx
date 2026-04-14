import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchServiceAreaBySlug, fetchAllServiceAreas } from '@/sanity/fetchers'
import { urlFor } from '@/sanity/image'
import Design1AreaPage from '@/designs/design1/pages/AreaPage'
import { serviceAreas } from '@/designs/design1/data/content'

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
    return {
      title: `Appliance Repair in ${staticArea.name}, NJ - Advanced Appliance`,
      description: `Professional appliance repair in ${staticArea.name}, ${staticArea.county} County, NJ. All major brands serviced. Call (732) 416-7430.`,
      alternates: { canonical: `/areas/${slug}` },
      openGraph: {
        title: `Appliance Repair in ${staticArea.name}, NJ`,
        description: `Professional appliance repair services in ${staticArea.name}, New Jersey.`,
        images: [{ url: `/api/og?title=Appliance+Repair+in+${encodeURIComponent(staticArea.name)},+NJ&category=Service+Area`, width: 1200, height: 630 }],
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

  return <Design1AreaPage area={staticArea} />
}

// Enable ISR
export const revalidate = 3600
