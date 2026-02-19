import { Metadata } from 'next'
import { ServiceAreas as Design1ServiceAreas } from '@/designs/design1/pages'
import { fetchAllServiceAreas } from '@/sanity/fetchers'
import { adaptServiceArea } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Our Service Area - Advanced Appliance Repair Service',
  description: 'We provide appliance repair services in parts of Monmouth and Middlesex Counties, NJ. Serving 38+ communities.',
  openGraph: {
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
