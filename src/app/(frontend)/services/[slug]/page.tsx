import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import { JsonLd, generateServiceSchema } from '@/components/JsonLd'
import { RichText } from '@/components/RichText'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'
import type { Media, Service } from '@/payload-types'

/**
 * Service Detail Page - Server Component
 */

interface ServicePageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    const payload = await getPayloadClient()

    const services = await payload.find({
      collection: 'services',
      where: {
        status: { equals: 'published' },
      },
      limit: 100,
    })

    return services.docs.map((service) => ({
      slug: service.slug,
    }))
  } catch {
    // Database may not exist during build (e.g., Docker)
    return []
  }
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayloadClient()

  const serviceResult = await payload.find({
    collection: 'services',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  const service = serviceResult.docs[0]

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  const title = service.meta?.seo?.title || service.name
  const description = service.meta?.seo?.description || service.excerpt || ''
  const image =
    typeof service.meta?.seo?.image === 'object' && service.meta?.seo?.image !== null
      ? (service.meta.seo.image as Media).url
      : typeof service.image === 'object' && service.image !== null
      ? (service.image as Media).url
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
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const payload = await getPayloadClient()

  // Fetch service
  const serviceResult = await payload.find({
    collection: 'services',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  const service = serviceResult.docs[0]

  if (!service) {
    notFound()
  }

  // Fetch related services
  const relatedServices =
    service.relatedServices
      ?.map((s: string | Service) => (typeof s === 'object' ? (s as Service) : null))
      .filter((s: Service | null): s is Service => s !== null) || []

  // Fetch site settings
  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  // Get current design theme
  const designTheme = getCurrentDesignTheme()
  const components = getDesignComponents(designTheme)
  const { Header, Footer, ServiceCard, FAQAccordion } = components

  // Generate Service schema
  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.excerpt || undefined,
    providerName: settings.siteName,
    serviceType: service.name,
  })

  const serviceImage =
    typeof service.image === 'object' && service.image !== null
      ? (service.image as Media).url
      : service.image

  return (
    <>
      <JsonLd data={serviceSchema} />

      <Header settings={settings} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          {serviceImage && (
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${serviceImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.name}</h1>
              {service.excerpt && (
                <p className="text-xl md:text-2xl text-gray-300">{service.excerpt}</p>
              )}
            </div>
          </div>
        </section>

        {/* Service Image */}
        {serviceImage && (
          <section className="container mx-auto px-4 -mt-12 relative z-20">
            <div className="rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <img
                src={serviceImage}
                alt={service.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </section>
        )}

        {/* Service Description */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <RichText content={service.description} />
          </div>
        </section>

        {/* Features */}
        {service.features && service.features.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                What We Offer
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature: { id?: string; title: string; description: string; feature?: string }, index: number) => (
                  <div
                    key={feature.id || index}
                    className="flex items-start bg-white rounded-lg p-6 shadow-md"
                  >
                    <svg
                      className="w-6 h-6 text-gold-500 mr-4 flex-shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-lg font-semibold">{feature.title}</p>
                      {feature.description && <p className="text-gray-600 mt-1">{feature.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Frequently Asked Questions
              </h2>
              {FAQAccordion ? (
                <FAQAccordion faqs={service.faqs} />
              ) : (
                <div className="space-y-4">
                  {service.faqs.map((faq: { id?: string; question: string; answer: string }, index: number) => (
                    <details
                      key={faq.id || index}
                      className="bg-white rounded-lg shadow-md overflow-hidden"
                    >
                      <summary className="px-6 py-4 font-semibold cursor-pointer hover:bg-gray-50 transition-colors">
                        {faq.question}
                      </summary>
                      <div className="px-6 py-4 border-t bg-gray-50">
                        <p className="text-gray-700">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Related Services
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedServices.map((relatedService: Service) => {
                  if (!relatedService) return null

                  const relatedImage =
                    typeof relatedService.image === 'object' &&
                    relatedService.image !== null
                      ? (relatedService.image as Media).url
                      : relatedService.image

                  return ServiceCard ? (
                    <ServiceCard
                      key={relatedService.id}
                      title={relatedService.name}
                      description={relatedService.excerpt || ''}
                      image={relatedImage || undefined}
                      href={`/services/${relatedService.slug}`}
                      icon={relatedService.icon || undefined}
                    />
                  ) : (
                    <Link
                      key={relatedService.id}
                      href={`/services/${relatedService.slug}`}
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                    >
                      {relatedImage && (
                        <img
                          src={relatedImage}
                          alt={relatedService.name}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">
                          {relatedService.name}
                        </h3>
                        {relatedService.excerpt && (
                          <p className="text-gray-600 line-clamp-2">
                            {relatedService.excerpt}
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
              Ready to Get Started?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Contact us today to schedule your {service.name.toLowerCase()} service.
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

// Enable ISR
export const revalidate = 3600
