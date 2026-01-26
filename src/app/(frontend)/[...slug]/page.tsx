import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import { JsonLd } from '@/components/JsonLd'
import { BlockRenderer } from '@/components/BlockRenderer'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'
import type { Media } from '@/payload-types'

// Import static page components for fallbacks
import { BrandPage as Design1BrandPage, AreaPage as Design1AreaPage, BlogPost as Design1BlogPost } from '@/designs/design1/pages'
import { brands, serviceAreas, blogPosts } from '@/designs/design1/data/content'

/**
 * Dynamic Page Route - Server Component
 * Handles all CMS pages with dynamic slugs, plus static brand/location pages
 */

interface PageProps {
  params: Promise<{
    slug: string[]
  }>
}

// Helper to find brand by slug
function findBrandBySlug(slug: string) {
  return brands.find(b => b.slug === slug)
}

// Helper to find service area by slug
function findAreaBySlug(slug: string) {
  return serviceAreas.find(a => a.slug === slug)
}

// Helper to find blog post by slug
function findBlogPostBySlug(slug: string) {
  return blogPosts.find(p => p.slug === slug)
}

export async function generateStaticParams() {
  try {
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
  } catch {
    // Database may not exist during build (e.g., Docker)
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const pageSlug = slug.join('/')

  // Check for static brand page
  const brand = findBrandBySlug(pageSlug)
  if (brand) {
    return {
      title: `${brand.name} Appliance Repair Service in NJ - Advanced Appliance`,
      description: `Expert ${brand.name} appliance repair in Monmouth & Middlesex Counties, NJ. Factory-trained technicians, genuine parts, 90-180 day warranty. Call (732) 416-7430.`,
      openGraph: {
        title: `${brand.name} Appliance Repair Service in NJ`,
        description: `Expert ${brand.name} appliance repair throughout Central New Jersey.`,
      },
    }
  }

  // Check for static location page
  const area = findAreaBySlug(pageSlug)
  if (area) {
    return {
      title: `Appliance Repair in ${area.name}, NJ - Advanced Appliance`,
      description: `Professional appliance repair in ${area.name}, ${area.county} County, NJ. Same-day service, all major brands. Call (732) 416-7430.`,
      openGraph: {
        title: `Appliance Repair in ${area.name}, NJ`,
        description: `Professional appliance repair services in ${area.name}, New Jersey.`,
      },
    }
  }

  // Check for static blog post
  const blogPost = findBlogPostBySlug(pageSlug)
  if (blogPost) {
    return {
      title: `${blogPost.title} - Advanced Appliance`,
      description: blogPost.excerpt,
      openGraph: {
        title: blogPost.title,
        description: blogPost.excerpt,
        images: blogPost.image ? [{ url: blogPost.image }] : undefined,
      },
    }
  }

  // Try CMS page
  try {
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
  } catch {
    return {
      title: 'Page Not Found',
    }
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const pageSlug = slug.join('/')

  // Check for static brand page first
  const brand = findBrandBySlug(pageSlug)
  if (brand) {
    return <Design1BrandPage brand={brand} />
  }

  // Check for static location/area page
  const area = findAreaBySlug(pageSlug)
  if (area) {
    return <Design1AreaPage area={area} />
  }

  // Check for static blog post
  const blogPost = findBlogPostBySlug(pageSlug)
  if (blogPost) {
    return <Design1BlogPost post={blogPost} />
  }

  // Try CMS page
  try {
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
  } catch {
    // Database error - show not found
    notFound()
  }
}

// Enable static generation with ISR
export const revalidate = 3600 // Revalidate every hour
