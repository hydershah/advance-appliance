import { Metadata } from 'next'
import { Brands as Design1Brands } from '@/designs/design1/pages'

export const metadata: Metadata = {
  title: 'Our Brands - Advanced Appliance Repair Service',
  description: 'We service all major appliance brands including Sub-Zero, Viking, Thermador, Miele, Wolf, Samsung, LG, Bosch, KitchenAid, and more. Factory-authorized repair in NJ.',
  openGraph: {
    title: 'Our Brands - Advanced Appliance Repair Service',
    description: 'We service all major appliance brands including Sub-Zero, Viking, Thermador, Miele, Wolf, Samsung, LG, Bosch, KitchenAid, and more.',
  },
}

export default function BrandsPage() {
  return <Design1Brands />
}
