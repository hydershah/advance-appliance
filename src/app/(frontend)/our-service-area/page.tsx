import { Metadata } from 'next'
import Design1ServiceAreas from '@/designs/design1/pages/ServiceAreas'
import { fetchAllServiceAreas } from '@/sanity/fetchers'
import { adaptServiceArea } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Our Service Area - Advanced Appliance Repair Service',
  description: 'We provide appliance repair services in parts of Monmouth and Middlesex Counties, NJ. Serving 38+ communities.',
  keywords: ['appliance repair service area NJ', 'Monmouth County appliance repair', 'Middlesex County appliance repair', 'appliance repair near me', 'local appliance service NJ'],
  alternates: { canonical: '/our-service-area' },
  openGraph: {
    title: 'Our Service Area - Advanced Appliance Repair Service',
    description: 'Serving Monmouth and Middlesex Counties, NJ with professional appliance repair services.',
    images: [{ url: '/api/og?title=Our+Service+Area&subtitle=Serving+38%2B+Communities+in+NJ&category=Service+Area', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Service Area - Advanced Appliance Repair Service',
    description: 'Serving Monmouth and Middlesex Counties, NJ with professional appliance repair services.',
  },
}

export default async function ServiceAreasPage() {
  try {
    const cmsAreas = await fetchAllServiceAreas()
    return <Design1ServiceAreas serviceAreas={cmsAreas?.length ? cmsAreas.map(adaptServiceArea) : undefined} />
  } catch {
    return <Design1ServiceAreas />
  }
}
