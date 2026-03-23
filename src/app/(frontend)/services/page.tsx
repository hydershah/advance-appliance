import { Metadata } from 'next'
import Design1Services from '@/designs/design1/pages/Services'

export const revalidate = 300 // revalidate every 5 minutes
import { fetchAllServices, fetchAllBrands } from '@/sanity/fetchers'
import { adaptService, adaptBrand } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional appliance repair services for all major brands. Factory-trained technicians serving parts of Monmouth and Middlesex Counties.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Our Services - Advanced Appliance Repair Service',
    description:
      'Professional appliance repair services for all major brands. Factory-trained technicians serving parts of Monmouth and Middlesex Counties.',
    images: [{ url: '/api/og?title=Our+Services&subtitle=Professional+Appliance+Repair+for+All+Major+Brands&category=Services', width: 1200, height: 630 }],
  },
}

export default async function ServicesPage() {
  try {
    const [cmsServices, cmsBrands] = await Promise.all([
      fetchAllServices(),
      fetchAllBrands(),
    ])

    return (
      <Design1Services
        services={cmsServices?.length ? cmsServices.map(adaptService) : undefined}
        brands={cmsBrands?.length ? cmsBrands.map(adaptBrand) : undefined}
      />
    )
  } catch {
    return <Design1Services />
  }
}
