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
  // Get current design theme
  const designTheme = getCurrentDesignTheme()

  try {
    // Fetch home page content and settings from Sanity
    const [page, settings] = await Promise.all([
      fetchPageBySlug('home'),
      fetchSettings(),
    ])

    const components = getDesignComponents(designTheme)
    const { Header, Footer } = components

    // Build LocalBusiness schema
    const localBusinessSchema = {
      '@context': 'https://schema.org' as const,
      '@type': 'LocalBusiness' as const,
      name: settings.siteName,
      description: settings.tagline || undefined,
      telephone: settings.contact?.phone,
      email: settings.contact?.email,
      address: settings.contact?.address
        ? {
            '@type': 'PostalAddress' as const,
            streetAddress: settings.contact.address,
            addressLocality: settings.contact.city || undefined,
            addressRegion: settings.contact.state || undefined,
            postalCode: settings.contact.zip || undefined,
            addressCountry: 'US',
          }
        : undefined,
      openingHours: settings.hours
        ? [
            settings.hours.monday ? `Mo ${settings.hours.monday}` : null,
            settings.hours.tuesday ? `Tu ${settings.hours.tuesday}` : null,
            settings.hours.wednesday ? `We ${settings.hours.wednesday}` : null,
            settings.hours.thursday ? `Th ${settings.hours.thursday}` : null,
            settings.hours.friday ? `Fr ${settings.hours.friday}` : null,
            settings.hours.saturday ? `Sa ${settings.hours.saturday}` : null,
            settings.hours.sunday ? `Su ${settings.hours.sunday}` : null,
          ].filter(Boolean) as string[]
        : undefined,
      sameAs: settings.social
        ? [
            settings.social.facebook,
            settings.social.instagram,
            settings.social.twitter,
            settings.social.youtube,
            settings.social.linkedin,
            settings.social.yelp,
            settings.social.googleBusiness,
          ].filter(Boolean) as string[]
        : undefined,
      url: process.env.NEXT_PUBLIC_SERVER_URL,
    }

    return (
      <>
        <JsonLd data={localBusinessSchema} />

        {page && page.layout ? (
          // CMS-driven content with dynamic Header/Footer
          <>
            <Header settings={settings} />
            <main className="min-h-screen">
              <BlockRenderer blocks={page.layout} designTheme={designTheme} />
            </main>
            <Footer settings={settings} />
          </>
        ) : (
          <Design1Home />
        )}
      </>
    )
  } catch {
    // CMS unavailable - fall back to static design
    return <Design1Home />
  }
}
