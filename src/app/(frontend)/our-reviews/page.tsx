import { Metadata } from 'next'
import { Reviews as Design1Reviews } from '@/designs/design1/pages'

export const metadata: Metadata = {
  title: 'Our Reviews - Advanced Appliance Repair Service',
  description: 'Read customer reviews and testimonials. We have satisfied local customers throughout Monmouth and Middlesex Counties, NJ.',
  openGraph: {
    title: 'Our Reviews - Advanced Appliance Repair Service',
    description: 'Read customer reviews and testimonials from satisfied homeowners in parts of Monmouth and Middlesex Counties.',
  },
}

export default function ReviewsPage() {
  return <Design1Reviews />
}
