import { Metadata } from 'next'
import Design1About from '@/designs/design1/pages/About'
import { fetchAllCertifications, fetchAboutPage } from '@/sanity/fetchers'
import { adaptCertification } from '@/lib/sanityAdapters'
import { JsonLd } from '@/components/JsonLd'
import { businessInfo, certifications as staticCerts } from '@/designs/design1/data/content'

export const revalidate = 300 // revalidate every 5 minutes

export const metadata: Metadata = {
  title: 'About Us - Advanced Appliance Repair Service',
  description:
    'Learn about our professional appliance repair services, expert technicians, and commitment to excellence in Monmouth and Middlesex Counties, NJ.',
  keywords: ['about Advanced Appliance Repair', 'appliance repair company NJ', 'factory trained technicians', 'Morganville appliance repair', 'appliance repair since 1992'],
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us - Advanced Appliance Repair Service',
    description:
      'For over 30 years, Advanced Appliance Repair Service has been the trusted choice for premier appliance care.',
    images: [{ url: '/api/og?title=About+Us&subtitle=30%2B+Years+of+Excellence+in+Appliance+Repair&category=About', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Advanced Appliance Repair Service',
    description: 'For over 30 years, Advanced Appliance Repair Service has been the trusted choice for premier appliance care.',
  },
}

export default async function AboutPage() {
  const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'https://www.appliancenj.com'

  // E-E-A-T: emit Organization schema with founder, certifications, awards.
  // AI search engines (AI Overviews, ChatGPT, Perplexity) weight these signals
  // when deciding whether to cite a business in answer-style results.
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${BASE_URL}/#organization`,
    name: businessInfo.name,
    legalName: 'Advanced Appliance Repair Service',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    image: `${BASE_URL}/logo.png`,
    telephone: businessInfo.phone,
    email: businessInfo.email,
    foundingDate: '1992-01-01',
    description:
      'Factory-certified appliance repair across Monmouth and Middlesex Counties, NJ. Serving homeowners since 1992 with same-day and next-day service, OEM-only parts, and up to 1-year parts and labor warranty.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '23 Reids Hill Road',
      addressLocality: businessInfo.city,
      addressRegion: businessInfo.state,
      postalCode: businessInfo.zip,
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Monmouth County, NJ' },
      { '@type': 'AdministrativeArea', name: 'Middlesex County, NJ' },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [
      businessInfo.socialMedia.facebook,
      businessInfo.socialMedia.instagram,
      businessInfo.socialMedia.twitter,
      businessInfo.socialMedia.youtube,
    ],
    hasCredential: staticCerts.map((c) => ({
      '@type': 'EducationalOccupationalCredential',
      name: c.name,
      credentialCategory: 'certification',
      recognizedBy: { '@type': 'Organization', name: c.issuer },
    })),
    knowsAbout: [
      'Sub-Zero refrigeration repair',
      'Wolf range repair',
      'Viking appliance repair',
      'Thermador appliance repair',
      'Miele appliance repair',
      'EPA 608 sealed-system refrigeration',
      'Premium built-in appliance diagnostics',
      'Refrigerator repair',
      'Washer repair',
      'Dryer repair',
      'Dishwasher repair',
      'Oven repair',
      'Cooktop repair',
      'Range repair',
    ],
    slogan: businessInfo.tagline,
    priceRange: '$$',
  }

  try {
    const [cmsCertifications, aboutData] = await Promise.all([
      fetchAllCertifications(),
      fetchAboutPage(),
    ])

    const expertRepairs = aboutData ? {
      subtitle: aboutData.expertRepairsSubtitle,
      title: aboutData.expertRepairsTitle,
      paragraphs: aboutData.expertRepairsParagraphs,
    } : undefined

    return (
      <>
        <JsonLd data={organizationSchema} />
        <Design1About
          certifications={cmsCertifications?.length ? cmsCertifications.map(adaptCertification) : undefined}
          expertRepairs={expertRepairs}
        />
      </>
    )
  } catch {
    return (
      <>
        <JsonLd data={organizationSchema} />
        <Design1About />
      </>
    )
  }
}
