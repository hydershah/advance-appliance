import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchAllPages, fetchPageBySlug, fetchSettings } from '@/sanity/fetchers'
import { urlFor } from '@/sanity/image'
import { JsonLd } from '@/components/JsonLd'
import { BlockRenderer } from '@/components/BlockRenderer'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'

// Import static page components for fallbacks
import Design1BrandPage from '@/designs/design1/pages/BrandPage'
import Design1AreaPage from '@/designs/design1/pages/AreaPage'
import Design1BlogPost from '@/designs/design1/pages/BlogPost'
import { brands, serviceAreas, blogPosts } from '@/designs/design1/data/content'
import { brandEnrichment, buildBrandFaqs } from '@/designs/design1/data/brandContent'

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
    const pages = await fetchAllPages()

    return pages
      .filter((page) => {
        const slug = typeof page.slug === 'object' ? page.slug.current : page.slug
        return slug !== 'home'
      })
      .map((page) => ({
        slug: [typeof page.slug === 'object' ? page.slug.current : page.slug],
      }))
  } catch {
    // CMS may not be available during build
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const pageSlug = slug.join('/')

  // Check for static brand page
  const brand = findBrandBySlug(pageSlug)
  if (brand) {
    const enrichment = brand.slug ? brandEnrichment[brand.slug] : undefined
    const title = enrichment
      ? `${brand.name} Appliance Repair NJ | ${enrichment.tagline} | Advanced Appliance`
      : `${brand.name} Appliance Repair Service in NJ - Advanced Appliance`
    const description = enrichment
      ? `${enrichment.tagline}. ${enrichment.certificationNote} Serving Monmouth & Middlesex Counties since 1993. Call (732) 416-7430.`
      : `Expert ${brand.name} appliance repair in Monmouth & Middlesex Counties, NJ. Factory-trained technicians, genuine parts, 1-year warranty. Call (732) 416-7430.`
    return {
      title,
      description,
      alternates: { canonical: `/${brand.slug}` },
      openGraph: {
        title: `${brand.name} Appliance Repair Service in NJ`,
        description,
      },
      twitter: {
        title,
        description,
      },
    }
  }

  // Check for static location page
  const area = findAreaBySlug(pageSlug)
  if (area) {
    return {
      title: `Appliance Repair in ${area.name}, NJ - Advanced Appliance`,
      description: `Professional appliance repair in ${area.name}, ${area.county} County, NJ. All major brands serviced. Call (732) 416-7430.`,
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
    const page = await fetchPageBySlug(pageSlug)

    if (!page) {
      return {
        title: 'Page Not Found',
      }
    }

    const settings = await fetchSettings()

    const seo = page.seo || page.meta?.seo
    const title = seo?.title || page.title
    const description = seo?.description || ''
    const image = seo?.image
      ? urlFor(seo.image).url()
      : settings.seo?.defaultImage
        ? urlFor(settings.seo.defaultImage).url()
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
    const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.appliancenj.com'
    const enrichment = brand.slug ? brandEnrichment[brand.slug] : undefined

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${BASE_URL}/${brand.slug}#service`,
      name: `${brand.name} Appliance Repair in NJ`,
      serviceType: `${brand.name} Appliance Repair`,
      description:
        enrichment?.intro ||
        `Factory-trained ${brand.name} appliance repair across Monmouth and Middlesex Counties, NJ.`,
      url: `${BASE_URL}/${brand.slug}`,
      brand: { '@type': 'Brand', name: brand.name },
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#organization`,
        name: 'Advanced Appliance',
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
      },
    }

    const brandFaqs = enrichment ? buildBrandFaqs(brand, enrichment) : []
    const faqSchema = brandFaqs.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${BASE_URL}/${brand.slug}#faq`,
          mainEntity: brandFaqs.map((f) => ({
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
        <Design1BrandPage brand={brand} />
      </>
    )
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
    // Fetch page content
    const page = await fetchPageBySlug(pageSlug)

    if (!page) {
      notFound()
    }

    // Fetch site settings
    const settings = await fetchSettings()

    // Get current design theme
    const designTheme = getCurrentDesignTheme()
    const components = getDesignComponents(designTheme)
    const { Header, Footer } = components

    // Generate schema markup
    const webPageSchema = {
      '@context': 'https://schema.org' as const,
      '@type': 'WebPage' as const,
      name: page.title,
      description: (page.seo || page.meta?.seo)?.description || undefined,
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/${pageSlug}`,
      datePublished: page._createdAt,
      dateModified: page._updatedAt,
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
    // CMS error - show not found
    notFound()
  }
}

// Enable static generation with ISR
export const revalidate = 3600 // Revalidate every hour
