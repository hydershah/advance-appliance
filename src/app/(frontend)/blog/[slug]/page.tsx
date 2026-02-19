import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchBlogPostBySlug } from '@/sanity/fetchers'
import { adaptBlogPost } from '@/lib/sanityAdapters'

// Import static design pages for fallback when CMS is unavailable
import { BlogPost as Design1BlogPost } from '@/designs/design1/pages'
import { blogPosts as staticBlogPosts } from '@/designs/design1/data/content'

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
        openGraph: {
          title,
          description,
          type: 'article',
          publishedTime: post.publishedDate || post._createdAt,
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

  return { title: 'Post Not Found' }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  // Try CMS first
  try {
    const cmsPost = await fetchBlogPostBySlug(slug)
    if (cmsPost) {
      return <Design1BlogPost post={adaptBlogPost(cmsPost)} />
    }
  } catch {
    // CMS unavailable, fall through to static
  }

  // Fallback to static blog post
  const staticPost = findStaticBlogPostBySlug(slug)
  if (staticPost) {
    return <Design1BlogPost postSlug={slug} />
  }

  notFound()
}
