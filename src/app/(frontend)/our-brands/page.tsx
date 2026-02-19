import { Metadata } from 'next'
import { Brands as Design1Brands } from '@/designs/design1/pages'
import { fetchAllBrands } from '@/sanity/fetchers'
import { adaptBrand } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Our Brands - Advanced Appliance Repair Service',
  description: 'We service all major appliance brands including Sub-Zero, Viking, Thermador, Miele, Wolf, Samsung, LG, Bosch, KitchenAid, and more. Professional appliance repair in NJ.',
  openGraph: {
    title: 'Our Brands - Advanced Appliance Repair Service',
    description: 'We service all major appliance brands including Sub-Zero, Viking, Thermador, Miele, Wolf, Samsung, LG, Bosch, KitchenAid, and more.',
  },
}

export default async function BrandsPage() {
  try {
    const cmsBrands = await fetchAllBrands()
    return <Design1Brands brands={cmsBrands?.length ? cmsBrands.map(adaptBrand) : undefined} />
  } catch {
    return <Design1Brands />
  }
}
