import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { fetchServiceAreaBySlug, fetchSettings, fetchAllServiceAreas } from '@/sanity/fetchers'
import { urlFor } from '@/sanity/image'
import type { Service } from '@/sanity/types'
import { JsonLd } from '@/components/JsonLd'
import { RichText } from '@/components/RichText'
import { getCurrentDesignTheme, getDesignComponents } from '@/lib/getDesignComponents'
import { AreaPage as Design1AreaPage } from '@/designs/design1/pages'
import { serviceAreas } from '@/designs/design1/data/content'

// Helper to find static area by slug
function findStaticAreaBySlug(slug: string) {
  return serviceAreas.find(a => a.slug === slug)
}

/**
 * Service Area Detail Page - Server Component
 */

interface ServiceAreaPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  // Start with static area slugs
  const staticParams = serviceAreas.map((area) => ({
    slug: area.slug,
  }))

  try {
    const areas = await fetchAllServiceAreas()

    const dbParams = areas.map((area) => ({
      slug: typeof area.slug === 'object' ? area.slug.current : area.slug,
    }))

    // Merge, preferring DB entries but including all static ones
    const allSlugs = new Set(dbParams.map(p => p.slug))
    const merged = [...dbParams]
    for (const param of staticParams) {
      if (!allSlugs.has(param.slug)) {
        merged.push(param)
      }
    }
    return merged
  } catch {
    // CMS may not be available during build
    return staticParams
  }
}

export async function generateMetadata({
  params,
}: ServiceAreaPageProps): Promise<Metadata> {
  const { slug } = await params

  // Try Sanity first
  try {
    const area = await fetchServiceAreaBySlug(slug)

    if (area) {
      const title = area.meta?.seo?.title || area.seo?.title || `${area.name} - Service Area`
      const description = area.meta?.seo?.description || area.seo?.description || area.excerpt || ''

      const seoImage = area.meta?.seo?.image || area.seo?.image
      const image = seoImage
        ? urlFor(seoImage).url()
        : area.image
        ? urlFor(area.image).url()
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
  } catch {
    // CMS unavailable, fall through to static
  }

  // Fallback to static data
  const staticArea = findStaticAreaBySlug(slug)
  if (staticArea) {
    return {
      title: `Appliance Repair in ${staticArea.name}, NJ - Advanced Appliance`,
      description: `Professional appliance repair in ${staticArea.name}, ${staticArea.county} County, NJ. All major brands serviced. Call (732) 416-7430.`,
      openGraph: {
        title: `Appliance Repair in ${staticArea.name}, NJ`,
        description: `Professional appliance repair services in ${staticArea.name}, New Jersey.`,
      },
    }
  }

  return {
    title: 'Area Not Found',
  }
}

export default async function ServiceAreaPage({ params }: ServiceAreaPageProps) {
  const { slug } = await params

  // Try Sanity first
  let area: any = null
  let settings: any = null
  try {
    area = await fetchServiceAreaBySlug(slug)
    if (area) {
      settings = await fetchSettings()
    }
  } catch {
    // CMS unavailable, fall through to static
  }

  // Fallback to static data
  if (!area) {
    const staticArea = findStaticAreaBySlug(slug)
    if (staticArea) {
      return <Design1AreaPage area={staticArea} />
    }
    notFound()
  }

  // Fetch services for this area
  const areaServices =
    area.services
      ?.filter((s: Service | null): s is Service => s !== null && typeof s === 'object')
      || []

  // Get current design theme
  const designTheme = getCurrentDesignTheme()
  const components = getDesignComponents(designTheme)
  const { Header, Footer, ServiceCard } = components

  // Generate Service schema for the area
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Appliance Repair in ${area.name}`,
    description: area.excerpt || undefined,
    provider: {
      '@type': 'LocalBusiness',
      name: settings.siteName,
    },
    areaServed: area.name,
  }

  const areaImage = area.image ? urlFor(area.image).url() : null

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
                {area.neighborhoods.map((neighborhood: { name: string; _key?: string }, index: number) => (
                  <div
                    key={neighborhood._key || index}
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

                  const serviceImage = service.image
                    ? urlFor(service.image).url()
                    : null

                  const serviceSlug = typeof service.slug === 'object'
                    ? service.slug.current
                    : service.slug

                  return ServiceCard ? (
                    <ServiceCard
                      key={service._id}
                      title={service.name}
                      description={service.excerpt || ''}
                      image={serviceImage || undefined}
                      href={`/services/${serviceSlug}`}
                      icon={service.icon || undefined}
                    />
                  ) : (
                    <Link
                      key={service._id}
                      href={`/services/${serviceSlug}`}
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
