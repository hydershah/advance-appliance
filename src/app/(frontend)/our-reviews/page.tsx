import { Metadata } from 'next'
import Design1Reviews from '@/designs/design1/pages/Reviews'
import { fetchTestimonials } from '@/sanity/fetchers'
import { adaptTestimonial } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Our Reviews - Advanced Appliance Repair Service',
  description: 'Read customer reviews and testimonials. 4.9 star rating from 127+ satisfied customers throughout Monmouth and Middlesex Counties, NJ.',
  keywords: ['appliance repair reviews NJ', 'Advanced Appliance reviews', 'appliance repair testimonials', 'best appliance repair Monmouth County'],
  alternates: { canonical: '/our-reviews' },
  openGraph: {
    title: 'Our Reviews - Advanced Appliance Repair Service',
    description: 'Read customer reviews and testimonials from satisfied homeowners in parts of Monmouth and Middlesex Counties.',
    images: [{ url: '/api/og?title=Our+Reviews&subtitle=4.9+Star+Rating+from+127%2B+Reviews&category=Reviews', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Reviews - Advanced Appliance Repair Service',
    description: '4.9 star rating from 127+ satisfied customers in Monmouth and Middlesex Counties.',
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
