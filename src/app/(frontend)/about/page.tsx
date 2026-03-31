import { Metadata } from 'next'
import Design1About from '@/designs/design1/pages/About'
import { fetchAllCertifications, fetchAboutPage } from '@/sanity/fetchers'
import { adaptCertification } from '@/lib/sanityAdapters'

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
      <Design1About
        certifications={cmsCertifications?.length ? cmsCertifications.map(adaptCertification) : undefined}
        expertRepairs={expertRepairs}
      />
    )
  } catch {
    return <Design1About />
  }
}
