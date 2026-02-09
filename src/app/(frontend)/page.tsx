import { Metadata } from 'next'
import { fetchPageBySlug, fetchSettings } from '@/sanity/fetchers'
import { urlFor } from '@/sanity/image'
import { JsonLd } from '@/components/JsonLd'
import { BlockRenderer } from '@/components/BlockRenderer'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'

// Import static design pages for fallback when no CMS content exists
import { Home as Design1Home } from '@/designs/design1/pages'

/**
 * Homepage - Server Component
 * Renders the home page with content from Sanity CMS
 */

export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = await fetchSettings()
    const page = await fetchPageBySlug('home')

    // Use page meta if available, otherwise fall back to settings
    const title = page?.seo?.title || page?.meta?.seo?.title || settings.seo?.defaultTitle || settings.siteName
    const description =
      page?.seo?.description ||
      page?.meta?.seo?.description ||
      settings.seo?.defaultDescription ||
      settings.tagline ||
      ''

    const seoImage = page?.seo?.image || page?.meta?.seo?.image
    const defaultImage = settings.seo?.defaultImage

    const image = seoImage
      ? urlFor(seoImage).url()
      : defaultImage
      ? urlFor(defaultImage).url()
      : '/og-image.jpg'

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: image ? [{ url: image }] : undefined,
      },
      twitter: {
        title,
        description,
        images: image ? [image] : undefined,
      },
    }
  } catch {
    // CMS unavailable - return default metadata
    return {
      title: 'Advanced Appliance Repair Service | Expert Repair in NJ',
      description: 'Professional luxury appliance repair services in Monmouth & Middlesex Counties, NJ. Expert technicians, same-day service available.',
    }
  }
}

export default async function HomePage() {
  // TEMPORARY: Use static content directly for urgent client review
  // TODO: Switch back to Sanity CMS after credentials are configured
  // To revert: See git history for Sanity CMS version
  return <Design1Home />
}
