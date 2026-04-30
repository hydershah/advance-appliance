import { Metadata } from 'next'
import Design1PrivacyPolicy from '@/designs/design1/pages/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Advanced Appliance Repair Service. Learn how we collect, use, and protect your personal information.',
  alternates: { canonical: '/privacy-policy' },
  // Legal/compliance pages should not consume crawl budget or compete for
  // brand SERP impressions. Available via direct link, not indexed.
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Privacy Policy',
    description: 'Learn how we collect, use, and protect your personal information.',
  },
  twitter: {
    card: 'summary',
    title: 'Privacy Policy',
    description: 'Learn how we collect, use, and protect your personal information.',
  },
}

export default function PrivacyPolicyPage() {
  return <Design1PrivacyPolicy />
}
