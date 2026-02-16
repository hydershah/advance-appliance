import { Metadata } from 'next'
import { ServiceAreas as Design1ServiceAreas } from '@/designs/design1/pages'

export const metadata: Metadata = {
  title: 'Our Service Area - Advanced Appliance Repair Service',
  description: 'We provide appliance repair services in parts of Monmouth and Middlesex Counties, NJ. Serving 38+ communities.',
  openGraph: {
    title: 'Our Service Area - Advanced Appliance Repair Service',
    description: 'Serving Monmouth and Middlesex Counties, NJ with professional appliance repair services.',
  },
}

export default function ServiceAreasPage() {
  return <Design1ServiceAreas />
}
