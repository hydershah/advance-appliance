import { Metadata } from 'next'
import Link from 'next/link'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import { JsonLd } from '@/components/JsonLd'
import { BlockRenderer } from '@/components/BlockRenderer'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'

// Import static design pages for fallback when CMS is unavailable
import { About as Design1About } from '@/designs/design1/pages'
import { About as Design2About } from '@/designs/design2/pages'

/**
 * About Page - Server Component
 */

// Prevent pre-rendering during build (database may not exist)
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about our professional appliance repair services, expert technicians, and commitment to excellence.',
}

export default async function AboutPage() {
  // Get current design theme
  const designTheme = getCurrentDesignTheme()

  try {
    const payload = await getPayloadClient()

    // Try to fetch an "about" page from CMS
    const pageResult = await payload.find({
      collection: 'pages',
      where: {
        slug: { equals: 'about' },
        status: { equals: 'published' },
      },
      limit: 1,
      depth: 2,
    })

    const page = pageResult.docs[0]

    // Fetch site settings
    const settings = await payload.findGlobal({
      slug: 'settings',
    })

    const components = getDesignComponents(designTheme)
    const { Header, Footer } = components

  // Generate Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'Organization' as const,
    name: settings.siteName,
    description: settings.tagline || undefined,
    url: process.env.NEXT_PUBLIC_SERVER_URL,
    telephone: settings.contact?.phone,
    email: settings.contact?.email,
    address: settings.contact?.address
      ? {
          '@type': 'PostalAddress' as const,
          streetAddress: settings.contact.address,
          addressLocality: settings.contact.city || undefined,
          addressRegion: settings.contact.state || undefined,
          postalCode: settings.contact.zip || undefined,
          addressCountry: 'US',
        }
      : undefined,
    sameAs: settings.social
      ? [
          settings.social.facebook,
          settings.social.instagram,
          settings.social.twitter,
          settings.social.youtube,
          settings.social.linkedin,
          settings.social.yelp,
          settings.social.googleBusiness,
        ].filter(Boolean) as string[]
      : undefined,
  }

  return (
    <>
      <JsonLd data={organizationSchema} />

      <Header settings={settings} />

      <main className="min-h-screen">
        {page && page.layout && page.layout.length > 0 ? (
          // Render CMS content if available
          <BlockRenderer blocks={page.layout} designTheme={designTheme} />
        ) : (
          // Fallback to default about page
          <>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
              <div className="container mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  About {settings.siteName}
                </h1>
                {settings.tagline && (
                  <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
                    {settings.tagline}
                  </p>
                )}
              </div>
            </section>

            {/* Main Content */}
            <section className="py-16 px-4">
              <div className="container mx-auto max-w-4xl">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    At {settings.siteName}, we pride ourselves on providing
                    exceptional appliance repair services to our community. With years
                    of experience and a team of certified technicians, we&apos;re committed
                    to keeping your appliances running smoothly.
                  </p>

                  <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Us?</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    <div className="bg-white border-l-4 border-gold-500 p-6 shadow-lg rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <svg
                          className="w-6 h-6 text-gold-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Expert Technicians
                      </h3>
                      <p className="text-gray-700">
                        Certified professionals with extensive training in all major
                        appliance brands.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-gold-500 p-6 shadow-lg rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <svg
                          className="w-6 h-6 text-gold-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Fast Service
                      </h3>
                      <p className="text-gray-700">
                        Same-day appointments available with prompt, reliable service.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-gold-500 p-6 shadow-lg rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <svg
                          className="w-6 h-6 text-gold-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Fair Pricing
                      </h3>
                      <p className="text-gray-700">
                        Transparent pricing with no hidden fees or surprise charges.
                      </p>
                    </div>

                    <div className="bg-white border-l-4 border-gold-500 p-6 shadow-lg rounded-r-lg">
                      <h3 className="text-xl font-bold mb-3 flex items-center">
                        <svg
                          className="w-6 h-6 text-gold-500 mr-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Guaranteed Work
                      </h3>
                      <p className="text-gray-700">
                        All repairs backed by our satisfaction guarantee and warranty.
                      </p>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold mb-6 mt-12">Contact Us</h2>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Ready to get your appliances back in working order? Contact us
                    today to schedule an appointment or learn more about our services.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gold-500 text-black py-16 px-4">
              <div className="container mx-auto text-center max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Experience the Difference?
                </h2>
                <p className="text-lg md:text-xl mb-8 opacity-90">
                  Join thousands of satisfied customers who trust us with their
                  appliance repair needs.
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
                    Schedule Appointment
                  </Link>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <Footer settings={settings} />
    </>
  )
  } catch {
    // Database unavailable - fall back to static design
    return designTheme === '2' ? <Design2About /> : <Design1About />
  }
}
