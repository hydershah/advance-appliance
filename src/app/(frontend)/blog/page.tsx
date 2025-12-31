import { Metadata } from 'next'
import Link from 'next/link'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import { JsonLd } from '@/components/JsonLd'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'
import { truncateRichText } from '@/components/RichText'
import type { Media } from '@/payload-types'

// Import static design pages for fallback when CMS is unavailable
import { Blog as Design1Blog } from '@/designs/design1/pages'
import { Blog as Design2Blog } from '@/designs/design2/pages'
import Design3Blog from '@/designs/design3/pages/Blog'

/**
 * Blog Listing Page - Server Component
 */

// Prevent pre-rendering during build (database may not exist)
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read our latest articles about appliance repair, maintenance tips, and industry insights.',
}

export default async function BlogPage() {
  // Get current design theme
  const designTheme = getCurrentDesignTheme()

  try {
    const payload = await getPayloadClient()

    // Fetch all published blog posts
    const blogPostsResult = await payload.find({
      collection: 'blog-posts',
      where: {
        status: { equals: 'published' },
      },
      limit: 50,
      sort: '-publishedDate',
    })

    const posts = blogPostsResult.docs

    // Fetch site settings
    const settings = await payload.findGlobal({
      slug: 'settings',
    })

    const components = getDesignComponents(designTheme)
    const { Header, Footer } = components

  // Generate Blog schema
  const blogSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'Blog' as const,
    name: `${settings.siteName} Blog`,
    description: metadata.description,
    url: `${process.env.NEXT_PUBLIC_SERVER_URL}/blog`,
  }

  return (
    <>
      <JsonLd data={blogSchema} />

      <Header settings={settings} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Expert advice, maintenance tips, and industry insights for your
              appliances.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            {posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => {
                  const featuredImage =
                    typeof post.featuredImage === 'object' &&
                    post.featuredImage !== null
                      ? (post.featuredImage as Media).url
                      : post.featuredImage

                  const excerpt =
                    post.excerpt || truncateRichText(post.content, 150)

                  return (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {featuredImage && (
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        {/* Categories */}
                        {post.categories && post.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.categories.slice(0, 2).map((cat: { id?: string; category: string }, index: number) => (
                              <span
                                key={cat.id || index}
                                className="text-xs font-semibold px-3 py-1 bg-gold-100 text-gold-700 rounded-full"
                              >
                                {cat.category}
                              </span>
                            ))}
                          </div>
                        )}

                        <h2 className="text-2xl font-bold mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                          {post.title}
                        </h2>

                        {excerpt && (
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {excerpt}
                          </p>
                        )}

                        {/* Meta Info */}
                        <div className="flex items-center text-sm text-gray-500 space-x-4">
                          {post.author && <span>{post.author}</span>}
                          {post.publishedDate && (
                            <span>
                              {new Date(post.publishedDate).toLocaleDateString(
                                'en-US',
                                {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric',
                                }
                              )}
                            </span>
                          )}
                        </div>

                        <div className="mt-4 flex items-center text-gold-500 font-semibold">
                          Read More
                          <svg
                            className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </Link>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-semibold mb-4">No Blog Posts Yet</h2>
                <p className="text-gray-600 mb-8">
                  Check back soon for helpful articles and tips.
                </p>
                <Link
                  href="/services"
                  className="inline-block bg-gold-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Get the latest tips and insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button
                type="submit"
                className="bg-gold-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer settings={settings} />
    </>
  )
  } catch {
    // Database unavailable - fall back to static design
    return (
      <>
        {designTheme === '1' && <Design1Blog />}
        {designTheme === '2' && <Design2Blog />}
        {designTheme === '3' && <Design3Blog />}
      </>
    )
  }
}

