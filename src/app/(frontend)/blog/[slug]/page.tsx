import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchBlogPostBySlug } from '@/sanity/fetchers'
import { adaptBlogPost } from '@/lib/sanityAdapters'

// Import static design pages for fallback when CMS is unavailable
import Design1BlogPost from '@/designs/design1/pages/BlogPost'
import { blogPosts as staticBlogPosts } from '@/designs/design1/data/content'
import { generateArticleSchema } from '@/lib/schema'
import { JsonLd } from '@/components/JsonLd'
import { urlFor } from '@/sanity/image'

/**
 * Blog Post Detail Page - Server Component
 * CMS-first with static fallback
 */

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

// Helper to find static blog post by slug
function findStaticBlogPostBySlug(slug: string) {
  return staticBlogPosts.find(p => p.slug === slug)
}

/**
 * Build HowTo JSON-LD from a static blog post entry that has howToSteps
 * populated. Returns null when the post is not a structured how-to.
 *
 * Used in BOTH the CMS branch and the static-fallback branch — when a
 * post is served from Sanity, we still emit HowTo if its slug matches a
 * known static post with steps. This keeps HowTo schema consistent
 * regardless of content source.
 */
function buildHowToSchema(slug: string, baseUrl: string) {
  const staticPost = findStaticBlogPostBySlug(slug)
  if (!staticPost?.howToSteps || staticPost.howToSteps.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${baseUrl}/blog/${slug}#howto`,
    name: staticPost.title,
    description: staticPost.excerpt,
    image: staticPost.image
      ? `${baseUrl}${staticPost.image.startsWith('/') ? '' : '/'}${staticPost.image}`
      : `${baseUrl}/og-image.jpg`,
    ...(staticPost.howToTotalTime && { totalTime: staticPost.howToTotalTime }),
    ...(staticPost.howToEstimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: staticPost.howToEstimatedCost.currency,
        value: staticPost.howToEstimatedCost.value,
      },
    }),
    ...(staticPost.howToTools && staticPost.howToTools.length > 0 && {
      tool: staticPost.howToTools.map((t) => ({ '@type': 'HowToTool', name: t })),
    }),
    ...(staticPost.howToSupplies && staticPost.howToSupplies.length > 0 && {
      supply: staticPost.howToSupplies.map((s) => ({ '@type': 'HowToSupply', name: s })),
    }),
    step: staticPost.howToSteps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      url: `${baseUrl}/blog/${slug}#step-${i + 1}`,
      ...(s.image && {
        image: s.image.startsWith('http')
          ? s.image
          : `${baseUrl}${s.image.startsWith('/') ? '' : '/'}${s.image}`,
      }),
    })),
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params

  // Resolve title/description from static when slug matches; otherwise
  // fall back to CMS fields. Static is authoritative when both exist —
  // prevents legacy CMS phrasing from leaking into SERPs. Bare titles
  // (no manual "- Advanced Appliance" suffix) so the layout template
  // appends the brand exactly once.
  const staticPost = findStaticBlogPostBySlug(slug)

  let title: string | undefined
  let description: string | undefined
  let publishedTime: string | undefined
  let author: string | undefined
  let cmsImage: string | undefined

  try {
    const cmsPost = await fetchBlogPostBySlug(slug)
    if (cmsPost) {
      title = cmsPost.title
      description =
        cmsPost.meta?.seo?.description || cmsPost.seo?.description || cmsPost.excerpt || ''
      publishedTime = cmsPost.publishedDate || cmsPost._createdAt
      author = cmsPost.author
      // CMS may have a custom hero image; only use as OG override.
      cmsImage = cmsPost.featuredImage
        ? `/api/og?title=${encodeURIComponent(cmsPost.title)}&category=Blog`
        : undefined
    }
  } catch {
    // CMS unavailable — fall through to static.
  }

  if (staticPost) {
    title = staticPost.title
    description = staticPost.excerpt
    publishedTime = staticPost.date
    author = staticPost.author
  }

  if (!title) {
    return { title: 'Post Not Found' }
  }

  // Trim description to ≤155 chars (Google truncates at ~160).
  if (description && description.length > 155) {
    description = `${description.slice(0, 152).trimEnd()}…`
  }

  const ogImage =
    cmsImage || `/api/og?title=${encodeURIComponent(title)}&category=Blog`

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      authors: author ? [author] : undefined,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const BASE_URL =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    (process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://www.appliancenj.com')

  // STATIC-FIRST: try the in-code blog post array before hitting Sanity.
  // Earlier the CMS fetch was awaited first, which made every static post
  // pay the Sanity round-trip. When Sanity was slow, Next.js triggered the
  // route-level loading.tsx and SSR'd a "Loading..." spinner instead of the
  // article body — Googlebot's first crawl saw the spinner, not the post.
  const staticPost = findStaticBlogPostBySlug(slug)
  if (staticPost) {
    const articleSchema = generateArticleSchema({
      headline: staticPost.title,
      description: staticPost.excerpt || '',
      url: `${BASE_URL}/blog/${slug}`,
      imageUrl: staticPost.image || `${BASE_URL}/og-image.jpg`,
      datePublished: staticPost.date,
      dateModified: staticPost.date,
      author: staticPost.author || 'Advanced Appliance Repair',
    })
    const howToSchema = buildHowToSchema(slug, BASE_URL)

    return (
      <>
        <JsonLd data={articleSchema} />
        {howToSchema && <JsonLd data={howToSchema} />}
        <Design1BlogPost post={staticPost} />
      </>
    )
  }

  // Only hit CMS when no static match (CMS-only posts in Sanity).
  try {
    const cmsPost = await fetchBlogPostBySlug(slug)
    if (cmsPost) {
      const imageUrl = cmsPost.featuredImage ? urlFor(cmsPost.featuredImage)?.url() : `${BASE_URL}/og-image.jpg`
      const articleSchema = generateArticleSchema({
        headline: cmsPost.title,
        description: cmsPost.excerpt || '',
        url: `${BASE_URL}/blog/${slug}`,
        imageUrl: imageUrl || `${BASE_URL}/og-image.jpg`,
        datePublished: cmsPost.publishedDate || cmsPost._createdAt,
        dateModified: cmsPost._updatedAt || cmsPost.publishedDate || cmsPost._createdAt,
        author: cmsPost.author || 'Advanced Appliance Repair',
      })
      const howToSchema = buildHowToSchema(slug, BASE_URL)

      return (
        <>
          <JsonLd data={articleSchema} />
          {howToSchema && <JsonLd data={howToSchema} />}
          <Design1BlogPost post={adaptBlogPost(cmsPost)} />
        </>
      )
    }
  } catch {
    // CMS unavailable
  }

  notFound()
}
