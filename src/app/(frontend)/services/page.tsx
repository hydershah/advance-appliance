import { Metadata } from 'next'
import { Services as Design1Services } from '@/designs/design1/pages'
import { fetchAllServices, fetchAllBrands } from '@/sanity/fetchers'
import { adaptService, adaptBrand } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Professional appliance repair services for all major brands. Factory-trained technicians serving parts of Monmouth and Middlesex Counties.',
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
