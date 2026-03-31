import { Metadata } from 'next'
import Design1PrivacyPolicy from '@/designs/design1/pages/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy - Advanced Appliance Repair Service',
  description: 'Privacy Policy for Advanced Appliance Repair Service. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy - Advanced Appliance Repair Service',
    description: 'Learn how we collect, use, and protect your personal information.',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy - Advanced Appliance Repair Service',
    description: 'Learn how we collect, use, and protect your personal information.',
  },
}

export default function PrivacyPolicyPage() {
  return <Design1PrivacyPolicy />
}
