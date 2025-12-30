import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import { JsonLd } from '@/components/JsonLd'
import { BlockRenderer } from '@/components/BlockRenderer'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'
import type { Media } from '@/payload-types'

/**
 * Dynamic Page Route - Server Component
 * Handles all CMS pages with dynamic slugs
 */

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateStaticParams() {
  const payload = await getPayloadClient()

  const pages = await payload.find({
    collection: 'pages',
    where: {
      status: { equals: 'published' },
      slug: { not_equals: 'home' }, // Exclude home page
    },
    limit: 100,
  })

  return pages.docs.map((page) => ({
    slug: [page.slug],
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const pageSlug = slug.join('/')

  const payload = await getPayloadClient()

  const pageResult = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: pageSlug },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  const page = pageResult.docs[0]

  if (!page) {
    return {
      title: 'Page Not Found',
    }
  }

  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  const title = page.meta?.seo?.title || page.title
  const description = page.meta?.seo?.description || ''
  const image =
    typeof page.meta?.seo?.image === 'object' && page.meta?.seo?.image !== null
      ? (page.meta.seo.image as Media).url
      : typeof settings.seo?.defaultImage === 'object' &&
        settings.seo?.defaultImage !== null
      ? (settings.seo.defaultImage as Media).url
      : undefined

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

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const pageSlug = slug.join('/')

  const payload = await getPayloadClient()

  // Fetch page content
  const pageResult = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: pageSlug },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  const page = pageResult.docs[0]

  if (!page) {
    notFound()
  }

  // Fetch site settings
  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  // Get current design theme
  const designTheme = getCurrentDesignTheme()
  const components = getDesignComponents(designTheme)
  const { Header, Footer } = components

  // Generate schema markup
  const webPageSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'WebPage' as const,
    name: page.title,
    description: page.meta?.seo?.description || undefined,
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${pageSlug}`,
    datePublished: page.createdAt,
    dateModified: page.updatedAt,
  }

  return (
    <>
      <JsonLd data={webPageSchema} />

      <Header settings={settings} />

      <main className="min-h-screen">
        {page.layout && page.layout.length > 0 ? (
          <BlockRenderer blocks={page.layout} designTheme={designTheme} />
        ) : (
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">{page.title}</h1>
            <p className="text-gray-600 text-lg">
              This page has no content blocks yet. Add content in the admin panel.
            </p>
          </div>
        )}
      </main>

      <Footer settings={settings} />
    </>
  )
}

// Enable static generation with ISR
export const revalidate = 3600 // Revalidate every hour
