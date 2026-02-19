import { Metadata } from 'next'
import { Home as Design1Home } from '@/designs/design1/pages'
import { fetchAllServices, fetchTestimonials, fetchFeaturedBrands, fetchAllTrustBadges, fetchAllServiceAreas } from '@/sanity/fetchers'
import { adaptService, adaptTestimonial, adaptBrand, adaptTrustBadge, adaptServiceArea } from '@/lib/sanityAdapters'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Advanced Appliance Repair Service | Expert Repair in NJ',
    description: 'Professional premier appliance repair services in Monmouth & Middlesex Counties, NJ. Expert technicians, reliable service.',
  }
}

export default async function HomePage() {
  try {
    const [cmsServices, cmsTestimonials, cmsBrands, cmsTrustBadges, cmsServiceAreas] = await Promise.all([
      fetchAllServices(),
      fetchTestimonials({ featured: true }),
      fetchFeaturedBrands(),
      fetchAllTrustBadges(),
      fetchAllServiceAreas(),
    ])

    return (
      <Design1Home
        services={cmsServices?.length ? cmsServices.map(adaptService) : undefined}
        testimonials={cmsTestimonials?.length ? cmsTestimonials.map(adaptTestimonial) : undefined}
        brands={cmsBrands?.length ? cmsBrands.map(adaptBrand) : undefined}
        trustBadges={cmsTrustBadges?.length ? cmsTrustBadges.map(adaptTrustBadge) : undefined}
        serviceAreas={cmsServiceAreas?.length ? cmsServiceAreas.map(adaptServiceArea) : undefined}
      />
    )
  } catch {
    return <Design1Home />
  }
}
