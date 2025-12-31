import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import { JsonLd, generateServiceSchema } from '@/components/JsonLd'
import { RichText } from '@/components/RichText'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'
import type { Media, Service } from '@/payload-types'

/**
 * Service Area Detail Page - Server Component
 */

interface ServiceAreaPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  try {
    const payload = await getPayloadClient()

    const areas = await payload.find({
      collection: 'service-areas',
      where: {
        status: { equals: 'published' },
      },
      limit: 100,
    })

    return areas.docs.map((area) => ({
      slug: area.slug,
    }))
  } catch {
    // Database may not exist during build (e.g., Docker)
    return []
  }
}

export async function generateMetadata({
  params,
}: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params
  const payload = await getPayloadClient()

  const areaResult = await payload.find({
    collection: 'service-areas',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
  })

  const area = areaResult.docs[0]

  if (!area) {
    return {
      title: 'Area Not Found',
    }
  }

  const title = area.meta?.seo?.title || `${area.name} - Service Area`
  const description = area.meta?.seo?.description || area.excerpt || ''
  const image =
    typeof area.meta?.seo?.image === 'object' && area.meta?.seo?.image !== null
      ? (area.meta.seo.image as Media).url
      : typeof area.image === 'object' && area.image !== null
      ? (area.image as Media).url
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

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params
  const payload = await getPayloadClient()

  // Fetch service area
  const areaResult = await payload.find({
    collection: 'service-areas',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  const area = areaResult.docs[0]

  if (!area) {
    notFound()
  }

  // Fetch services for this area
  const areaServices =
    area.services
      ?.map((s: string | Service) => (typeof s === 'object' ? (s as Service) : null))
      .filter((s: Service | null): s is Service => s !== null) || []

  // Fetch site settings
  const settings = await payload.findGlobal({
    slug: 'settings',
  })

  // Get current design theme
  const designTheme = getCurrentDesignTheme()
  const components = getDesignComponents(designTheme)
  const { Header, Footer, ServiceCard } = components

  // Generate Service schema for the area
  const serviceSchema = generateServiceSchema({
    name: `Appliance Repair in ${area.name}`,
    description: area.excerpt || undefined,
    providerName: settings.siteName,
    areaServed: area.name,
  })

  const areaImage =
    typeof area.image === 'object' && area.image !== null
      ? (area.image as Media).url
      : area.image

  return (
    <>
      <JsonLd data={serviceSchema} />

      <Header settings={settings} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
          {areaImage && (
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(${areaImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          )}
          <div className="container mx-auto relative z-10">
            <div className="max-w-4xl">
              <div className="inline-block bg-gold-500 text-black px-4 py-2 rounded-lg mb-6 font-semibold">
                Service Area
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Appliance Repair in {area.name}
              </h1>
              {area.excerpt && (
                <p className="text-xl md:text-2xl text-gray-300">{area.excerpt}</p>
              )}
            </div>
          </div>
        </section>

        {/* Area Image */}
        {areaImage && (
          <section className="container mx-auto px-4 -mt-12 relative z-20">
            <div className="rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto">
              <img
                src={areaImage}
                alt={area.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </section>
        )}

        {/* Area Description */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <RichText content={area.description} />
          </div>
        </section>

        {/* Neighborhoods */}
        {area.neighborhoods && area.neighborhoods.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Neighborhoods We Serve
              </h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {area.neighborhoods.map((neighborhood: { name: string; id?: string | null }, index: number) => (
                  <div
                    key={neighborhood.id || index}
                    className="bg-white rounded-lg p-6 shadow-md text-center hover:shadow-lg transition-shadow"
                  >
                    <svg
                      className="w-8 h-8 text-gold-500 mx-auto mb-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="font-semibold text-gray-800">
                      {neighborhood.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Available Services */}
        {areaServices.length > 0 && (
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Available Services in {area.name}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {areaServices.map((service: Service) => {
                  if (!service) return null

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
                        <img
                          src={serviceImage}
                          alt={service.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-gold-500 transition-colors">
                          {service.name}
                        </h3>
                        {service.excerpt && (
                          <p className="text-gray-600 line-clamp-2">
                            {service.excerpt}
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
              Need Service in {area.name}?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Contact us today for fast, reliable appliance repair service.
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
