import { Metadata } from 'next'
import { About as Design1About } from '@/designs/design1/pages'
import { fetchAllCertifications } from '@/sanity/fetchers'
import { adaptCertification } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'About Us - Advanced Appliance Repair Service',
  description:
    'Learn about our professional appliance repair services, expert technicians, and commitment to excellence in Monmouth and Middlesex Counties, NJ.',
  openGraph: {
    title: 'About Us - Advanced Appliance Repair Service',
    description:
      'For over 25 years, Advanced Appliance Repair Service has been the trusted choice for premier appliance care.',
  },
}

export default async function AboutPage() {
  try {
    const cmsCertifications = await fetchAllCertifications()
    return <Design1About certifications={cmsCertifications?.length ? cmsCertifications.map(adaptCertification) : undefined} />
  } catch {
    return <Design1About />
  }
}
