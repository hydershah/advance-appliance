import { Metadata } from 'next'
import { Contact as Design1Contact } from '@/designs/design1/pages'
import { fetchAllGeneralFaqs, fetchAllServiceAreas } from '@/sanity/fetchers'
import { adaptGeneralFaq, adaptServiceArea } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Contact Us - Advanced Appliance Repair Service',
  description:
    'Get in touch with our appliance repair experts. Schedule service, ask questions, or request a quote.',
  openGraph: {
    title: 'Contact Us - Advanced Appliance Repair Service',
    description:
      'Contact Advanced Appliance Repair Service for expert appliance repair in Monmouth and Middlesex Counties, NJ.',
  },
}

export default async function ContactPage() {
  try {
    const [cmsFaqs, cmsAreas] = await Promise.all([
      fetchAllGeneralFaqs(),
      fetchAllServiceAreas(),
    ])
    return (
      <Design1Contact
        generalFaqs={cmsFaqs?.length ? cmsFaqs.map(adaptGeneralFaq) : undefined}
        serviceAreas={cmsAreas?.length ? cmsAreas.map(adaptServiceArea) : undefined}
      />
    )
  } catch {
    return <Design1Contact />
  }
}
