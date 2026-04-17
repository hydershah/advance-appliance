import { Metadata } from 'next'
import Design1Reviews from '@/designs/design1/pages/Reviews'
import { fetchTestimonials } from '@/sanity/fetchers'
import { adaptTestimonial } from '@/lib/sanityAdapters'
import { JsonLd } from '@/components/JsonLd'
import { testimonials as staticTestimonials } from '@/designs/design1/data/content'
import type { Testimonial } from '@/designs/design1/types'

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
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.appliancenj.com'

  let testimonials: Testimonial[] = staticTestimonials
  try {
    const cmsTestimonials = await fetchTestimonials()
    if (cmsTestimonials?.length) {
      testimonials = cmsTestimonials.map(adaptTestimonial)
    }
  } catch {
    // fall back to static
  }

  // Emit a Graph of per-review entities. LocalBusiness + AggregateRating is
  // already injected by LocalBusinessSchema inside Reviews.tsx; we avoid a
  // duplicate entity with the same @id and just add the Review list here.
  const reviewsSchema = {
    '@context': 'https://schema.org',
    '@graph': testimonials.slice(0, 10).map((t, i) => ({
      '@type': 'Review',
      '@id': `${BASE_URL}/our-reviews#review-${t.id || i}`,
      author: { '@type': 'Person', name: t.name },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: t.text,
      datePublished: t.date,
      itemReviewed: {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#organization`,
        name: 'Advanced Appliance',
      },
    })),
  }

  return (
    <>
      <JsonLd data={reviewsSchema} />
      <Design1Reviews testimonials={testimonials} />
    </>
  )
}
