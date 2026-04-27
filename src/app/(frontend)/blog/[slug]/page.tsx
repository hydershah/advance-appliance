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

  // Try CMS first
  try {
    const post = await fetchBlogPostBySlug(slug)
    if (post) {
      const title = post.meta?.seo?.title || post.seo?.title || post.title
      const description = post.meta?.seo?.description || post.seo?.description || post.excerpt || ''
      return {
        title: `${title} - Advanced Appliance Repair Service`,
        description,
        alternates: { canonical: `/blog/${slug}` },
        openGraph: {
          title,
          description,
          type: 'article',
          publishedTime: post.publishedDate || post._createdAt,
          images: [{ url: `/api/og?title=${encodeURIComponent(title)}&category=Blog`, width: 1200, height: 630 }],
        },
      }
    }
  } catch {
    // CMS unavailable, fall through to static
  }

  // Fallback to static blog posts
  const staticPost = findStaticBlogPostBySlug(slug)
  if (staticPost) {
    return {
      title: `${staticPost.title} - Advanced Appliance Repair Service`,
      description: staticPost.excerpt,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        title: staticPost.title,
        description: staticPost.excerpt,
        type: 'article',
        publishedTime: staticPost.date,
        authors: staticPost.author ? [staticPost.author] : undefined,
        images: [{ url: `/api/og?title=${encodeURIComponent(staticPost.title)}&category=Blog`, width: 1200, height: 630 }],
      },
    }
  }

  return { title: 'Post Not Found' }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  // Try CMS first
  try {
    const cmsPost = await fetchBlogPostBySlug(slug)
    if (cmsPost) {
      const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
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

      // Emit HowTo schema even when serving from CMS — pulls structured
      // step data from the static how-to library matched by slug. Sanity
      // schema for blog posts does not (yet) carry howToSteps, so this
      // keeps HowTo eligibility consistent regardless of content source.
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
    // CMS unavailable, fall through to static
  }

  // Fallback to static blog post
  const staticPost = findStaticBlogPostBySlug(slug)
  if (staticPost) {
    const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
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
        <Design1BlogPost postSlug={slug} />
      </>
    )
  }

  notFound()
}
