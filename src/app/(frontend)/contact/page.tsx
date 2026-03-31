import { Metadata } from 'next'
import Design1Contact from '@/designs/design1/pages/Contact'
import { fetchAllGeneralFaqs, fetchAllServiceAreas, fetchSettings } from '@/sanity/fetchers'
import { adaptGeneralFaq, adaptServiceArea } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Contact Us - Advanced Appliance Repair Service',
  description:
    'Get in touch with our appliance repair experts. Schedule service, ask questions, or request a quote. Call (732) 416-7430.',
  keywords: ['contact appliance repair NJ', 'schedule appliance repair', 'appliance repair quote', 'appliance repair Morganville NJ', 'appliance service phone number'],
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us - Advanced Appliance Repair Service',
    description:
      'Contact Advanced Appliance Repair Service for expert appliance repair in Monmouth and Middlesex Counties, NJ.',
    images: [{ url: '/api/og?title=Contact+Us&subtitle=Schedule+Your+Appliance+Repair+Today&category=Contact', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Advanced Appliance Repair Service',
    description: 'Contact Advanced Appliance Repair Service for expert appliance repair in Monmouth and Middlesex Counties, NJ.',
  },
}

export default async function ContactPage() {
  try {
    const [cmsFaqs, cmsAreas, settings] = await Promise.all([
      fetchAllGeneralFaqs(),
      fetchAllServiceAreas(),
      fetchSettings(),
    ])
    return (
      <Design1Contact
        generalFaqs={cmsFaqs?.length ? cmsFaqs.map(adaptGeneralFaq) : undefined}
        serviceAreas={cmsAreas?.length ? cmsAreas.map(adaptServiceArea) : undefined}
        mapEmbedUrl={settings?.mapEmbedUrl}
      />
    )
  } catch {
    return <Design1Contact />
  }
}
