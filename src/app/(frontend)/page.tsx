import { Metadata } from 'next'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import { JsonLd } from '@/components/JsonLd'
import { BlockRenderer } from '@/components/BlockRenderer'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'
import type { Media } from '@/payload-types'

// Import static design pages for fallback when no CMS content exists
import { Home as Design1Home } from '@/designs/design1/pages'
import { Home as Design2Home } from '@/designs/design2/pages'
import Design3Home from '@/designs/design3/pages/Home'

/**
 * Homepage - Server Component
 * Renders the home page with content from PayloadCMS
 */

// Prevent pre-rendering during build (database may not exist)
export const dynamic = 'force-dynamic'

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayloadClient()

  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  const pageResult = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  const page = pageResult.docs[0]

  // Use page meta if available, otherwise fall back to settings
  const title = page?.meta?.seo?.title || settings.seo?.defaultTitle || settings.siteName
  const description =
    page?.meta?.seo?.description ||
    settings.seo?.defaultDescription ||
    settings.tagline ||
    ''

  const image =
    typeof page?.meta?.seo?.image === 'object' && page?.meta?.seo?.image !== null
      ? (page.meta.seo.image as Media).url
      : typeof settings.seo?.defaultImage === 'object' &&
        settings.seo?.defaultImage !== null
      ? (settings.seo.defaultImage as Media).url
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
}

export default async function HomePage() {
  const payload = await getPayloadClient()

  // Fetch home page content
  const pageResult = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: 'home' },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  // Fetch site settings
  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  const page = pageResult.docs[0]

  // Get current design theme
  const designTheme = getCurrentDesignTheme()
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
        // Show static design when no CMS content - designs include their own Header/Footer
        <>
          {designTheme === '1' && <Design1Home />}
          {designTheme === '2' && <Design2Home />}
          {designTheme === '3' && <Design3Home />}
        </>
      )}
    </>
  )
}
