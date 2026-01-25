import { Metadata } from 'next'
import { PrivacyPolicy as Design1PrivacyPolicy } from '@/designs/design1/pages'

export const metadata: Metadata = {
  title: 'Privacy Policy - Advanced Appliance Repair Service',
  description: 'Privacy Policy for Advanced Appliance Repair Service. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return <Design1PrivacyPolicy />
}
