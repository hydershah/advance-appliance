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

      return (
        <>
          <JsonLd data={articleSchema} />
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

    // Emit HowTo schema for posts with structured steps (rich result eligibility)
    const howToSchema = staticPost.howToSteps && staticPost.howToSteps.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          '@id': `${BASE_URL}/blog/${slug}#howto`,
          name: staticPost.title,
          description: staticPost.excerpt,
          image: staticPost.image
            ? `${BASE_URL}${staticPost.image.startsWith('/') ? '' : '/'}${staticPost.image}`
            : `${BASE_URL}/og-image.jpg`,
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
            url: `${BASE_URL}/blog/${slug}#step-${i + 1}`,
            ...(s.image && {
              image: s.image.startsWith('http') ? s.image : `${BASE_URL}${s.image.startsWith('/') ? '' : '/'}${s.image}`,
            }),
          })),
        }
      : null

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
