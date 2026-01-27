import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchBlogPostBySlug } from '@/sanity/fetchers'

// Import static design pages for fallback when CMS is unavailable
import { BlogPost as Design1BlogPost } from '@/designs/design1/pages'
import { blogPosts as staticBlogPosts } from '@/designs/design1/data/content'

/**
 * Blog Post Detail Page - Server Component
 * Falls back to static design when CMS is unavailable
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

  // Check static blog posts first
  const staticPost = findStaticBlogPostBySlug(slug)
  if (staticPost) {
    return {
      title: `${staticPost.title} - Advanced Appliance Repair Service`,
      description: staticPost.excerpt,
      openGraph: {
        title: staticPost.title,
        description: staticPost.excerpt,
        type: 'article',
        publishedTime: staticPost.date,
        authors: staticPost.author ? [staticPost.author] : undefined,
        images: staticPost.image ? [{ url: staticPost.image }] : undefined,
      },
    }
  }

  // Try CMS
  try {
    const post = await fetchBlogPostBySlug(slug)

    if (!post) {
      return {
        title: 'Post Not Found',
      }
    }

    const title = post.meta?.seo?.title || post.seo?.title || post.title
    const description = post.meta?.seo?.description || post.seo?.description || post.excerpt || ''

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: 'article',
        publishedTime: post.publishedDate || post._createdAt,
      },
    }
  } catch {
    return {
      title: 'Post Not Found',
    }
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  // Check static blog posts first - this is the primary fallback
  const staticPost = findStaticBlogPostBySlug(slug)
  if (staticPost) {
    return <Design1BlogPost postSlug={slug} />
  }

  // Try CMS if no static post found
  try {
    const post = await fetchBlogPostBySlug(slug)

    if (!post) {
      notFound()
    }

    // If CMS has the post, use the static design component for now
    return <Design1BlogPost postSlug={slug} />
  } catch {
    // CMS error - show not found
    notFound()
  }
}
