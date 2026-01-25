import { Metadata } from 'next'
import { TermsOfService as Design1TermsOfService } from '@/designs/design1/pages'

export const metadata: Metadata = {
  title: 'Terms of Service - Advanced Appliance Repair Service',
  description: 'Terms of Service for Advanced Appliance Repair Service. Review our service terms, warranty information, and policies.',
}

export default function TermsOfServicePage() {
  return <Design1TermsOfService />
}
