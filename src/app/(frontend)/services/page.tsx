import { Metadata } from 'next'
import Link from 'next/link'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import { JsonLd } from '@/components/JsonLd'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'
import type { Media } from '@/payload-types'

/**
 * Services Listing Page - Server Component
 */

// Prevent pre-rendering during build (database may not exist)
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional appliance repair services for all major brands. Expert technicians, same-day service available.',
}

export default async function ServicesPage() {
  const payload = await getPayloadClient()

  // Fetch all published services
  const servicesResult = await payload.find({
    collection: 'services',
    where: {
      status: { equals: 'published' },
    },
    limit: 50,
    sort: 'name',
  })

  const services = servicesResult.docs

  // Fetch site settings
  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  // Get current design theme
  const designTheme = getCurrentDesignTheme()
  const components = getDesignComponents(designTheme)
  const { Header, Footer, ServiceCard } = components

  // Generate ItemList schema for SEO
  const itemListSchema = {
    '@context': 'https://schema.org' as const,
    '@type': 'ItemList' as const,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem' as const,
      position: index + 1,
      item: {
        '@type': 'Service' as const,
        name: service.name,
        description: service.excerpt || undefined,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/services/${service.slug}`,
      },
    })),
  }

  return (
    <>
      <JsonLd data={itemListSchema} />

      <Header settings={settings} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Professional appliance repair for all major brands. Expert technicians
              ready to help.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {services.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                  const serviceImage =
                    typeof service.image === 'object' && service.image !== null
                      ? (service.image as Media).url
                      : service.image

                  return ServiceCard ? (
                    <ServiceCard
                      key={service.id}
                      title={service.name}
                      description={service.excerpt || ''}
                      image={serviceImage || undefined}
                      href={`/services/${service.slug}`}
                      icon={service.icon || undefined}
                    />
                  ) : (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}`}
                      className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      {serviceImage && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={serviceImage}
                            alt={service.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3 group-hover:text-gold-500 transition-colors">
                          {service.name}
                        </h3>
                        {service.excerpt && (
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {service.excerpt}
                          </p>
                        )}
                        <div className="flex items-center text-gold-500 font-semibold">
                          Learn More
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
                <h2 className="text-2xl font-semibold mb-4">No Services Available</h2>
                <p className="text-gray-600 mb-8">
                  Check back soon or contact us for more information.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gold-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gold-500 text-black py-16 px-4">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Emergency Service?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Our expert technicians are available 24/7 for emergency repairs.
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
      </main>

      <Footer settings={settings} />
    </>
  )
}

