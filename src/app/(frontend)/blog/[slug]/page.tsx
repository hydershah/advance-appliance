import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import { JsonLd, generateBlogPostingSchema } from '@/components/JsonLd'
import { RichText, truncateRichText } from '@/components/RichText'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'
import type { Media, BlogPost } from '@/payload-types'

/**
 * Blog Post Detail Page - Server Component
 */

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const payload = await getPayloadClient()

  const posts = await payload.find({
    collection: 'blog-posts',
    where: {
      status: { equals: 'published' },
    },
    limit: 100,
  })

  return posts.docs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayloadClient()

  const postResult = await payload.find({
    collection: 'blog-posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  const post = postResult.docs[0]

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  const title = post.meta?.seo?.title || post.title
  const description =
    post.meta?.seo?.description ||
    post.excerpt ||
    truncateRichText(post.content, 160)

  const image =
    typeof post.meta?.seo?.image === 'object' && post.meta?.seo?.image !== null
      ? (post.meta.seo.image as Media).url
      : typeof post.featuredImage === 'object' && post.featuredImage !== null
      ? (post.featuredImage as Media).url
      : undefined

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: post.publishedDate || post.createdAt,
      modifiedTime: post.updatedAt,
      authors: post.author ? [post.author] : undefined,
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      images: image ? [image] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const payload = await getPayloadClient()

  // Fetch blog post
  const postResult = await payload.find({
    collection: 'blog-posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  const post = postResult.docs[0]

  if (!post) {
    notFound()
  }

  // Fetch related posts
  const relatedPosts =
    post.relatedPosts
      ?.map((p) => (typeof p === 'object' ? (p as BlogPost) : null))
      .filter(Boolean) || []

  // Fetch site settings
  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  // Get current design theme
  const designTheme = getCurrentDesignTheme()
  const components = getDesignComponents(designTheme)
  const { Header, Footer } = components

  // Generate BlogPosting schema
  const featuredImage =
    typeof post.featuredImage === 'object' && post.featuredImage !== null
      ? (post.featuredImage as Media).url
      : post.featuredImage

  const blogPostingSchema = generateBlogPostingSchema({
    headline: post.title,
    description: post.excerpt || truncateRichText(post.content, 160),
    authorName: post.author || undefined,
    publishedDate: post.publishedDate || post.createdAt,
    modifiedDate: post.updatedAt,
    imageUrl: featuredImage || undefined,
    publisherName: settings.siteName,
  })

  return (
    <>
      <JsonLd data={blogPostingSchema} />

      <Header settings={settings} />

      <main className="min-h-screen">
        {/* Article Header */}
        <article>
          <header className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories.map((cat, index) => (
                    <span
                      key={cat.id || index}
                      className="text-sm font-semibold px-4 py-2 bg-gold-500 text-black rounded-full"
                    >
                      {cat.category}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                {post.author && (
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{post.author}</span>
                  </div>
                )}
                {post.publishedDate && (
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <time dateTime={post.publishedDate}>
                      {new Date(post.publishedDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {featuredImage && (
            <div className="container mx-auto px-4 -mt-12 relative z-10">
              <div className="rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
                <img
                  src={featuredImage}
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          )}

          {/* Article Content */}
          <div className="container mx-auto px-4 py-16 max-w-4xl">
            <RichText content={post.content} />

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-sm font-semibold text-gray-500 mb-4">TAGS</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={tag.id || index}
                      className="text-sm px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      #{tag.tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-7xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => {
                  if (!relatedPost) return null

                  const relatedImage =
                    typeof relatedPost.featuredImage === 'object' &&
                    relatedPost.featuredImage !== null
                      ? (relatedPost.featuredImage as Media).url
                      : relatedPost.featuredImage

                  const relatedExcerpt =
                    relatedPost.excerpt ||
                    truncateRichText(relatedPost.content, 100)

                  return (
                    <Link
                      key={relatedPost.id}
                      href={`/blog/${relatedPost.slug}`}
                      className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      {relatedImage && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedImage}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-gold-500 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        {relatedExcerpt && (
                          <p className="text-gray-600 line-clamp-2">
                            {relatedExcerpt}
                          </p>
                        )}
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gold-500 text-black py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Expert Help?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Our professional technicians are here to help with all your appliance
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${settings.contact?.phone}`}
                className="inline-block bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Call {settings.contact?.phone}
              </a>
              <Link
                href="/contact"
                className="inline-block bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Schedule Service
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer settings={settings} />
    </>
  )
}

// Enable ISR
export const revalidate = 3600
