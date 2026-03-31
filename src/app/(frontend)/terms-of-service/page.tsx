import { Metadata } from 'next'
import Design1TermsOfService from '@/designs/design1/pages/TermsOfService'

export const metadata: Metadata = {
  title: 'Terms of Service - Advanced Appliance Repair Service',
  description: 'Terms of Service for Advanced Appliance Repair Service. Review our service terms, warranty information, and policies.',
  alternates: { canonical: '/terms-of-service' },
  openGraph: {
    title: 'Terms of Service - Advanced Appliance Repair Service',
    description: 'Review our service terms, warranty information, and policies.',
  },
  twitter: {
    card: 'summary',
    title: 'Terms of Service - Advanced Appliance Repair Service',
    description: 'Review our service terms, warranty information, and policies.',
  },
}

export default function TermsOfServicePage() {
  return <Design1TermsOfService />
}
