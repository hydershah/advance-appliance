import { Metadata } from 'next'
import Design1Brands from '@/designs/design1/pages/Brands'
import { fetchAllBrands } from '@/sanity/fetchers'
import { adaptBrand } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Our Brands - Advanced Appliance Repair Service',
  description: 'We service all major appliance brands including Sub-Zero, Viking, Thermador, Miele, Wolf, Samsung, LG, Bosch, KitchenAid, and more. Professional appliance repair in NJ.',
  keywords: ['Sub-Zero repair NJ', 'Viking appliance repair', 'Wolf repair', 'Thermador repair', 'Miele repair', 'Samsung appliance repair', 'LG appliance repair', 'Bosch repair NJ'],
  alternates: { canonical: '/our-brands' },
  openGraph: {
    title: 'Our Brands - Advanced Appliance Repair Service',
    description: 'We service all major appliance brands including Sub-Zero, Viking, Thermador, Miele, Wolf, Samsung, LG, Bosch, KitchenAid, and more.',
    images: [{ url: '/api/og?title=Our+Brands&subtitle=Professional+Service+for+All+Major+Brands&category=Brands', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Brands - Advanced Appliance Repair Service',
    description: 'We service all major appliance brands including Sub-Zero, Viking, Thermador, Miele, Wolf, and more.',
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
