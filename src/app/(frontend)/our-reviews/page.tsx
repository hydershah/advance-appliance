import { Metadata } from 'next'
import { Reviews as Design1Reviews } from '@/designs/design1/pages'
import { fetchTestimonials } from '@/sanity/fetchers'
import { adaptTestimonial } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Our Reviews - Advanced Appliance Repair Service',
  description: 'Read customer reviews and testimonials. We have satisfied local customers throughout Monmouth and Middlesex Counties, NJ.',
  openGraph: {
    title: 'Our Reviews - Advanced Appliance Repair Service',
    description: 'Read customer reviews and testimonials from satisfied homeowners in parts of Monmouth and Middlesex Counties.',
  },
}

export default async function ReviewsPage() {
  try {
    const cmsTestimonials = await fetchTestimonials()
    return <Design1Reviews testimonials={cmsTestimonials?.length ? cmsTestimonials.map(adaptTestimonial) : undefined} />
  } catch {
    return <Design1Reviews />
  }
}
