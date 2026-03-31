import { Metadata } from 'next'
import Design1SMSCompliance from '@/designs/design1/pages/SMSCompliance'

export const metadata: Metadata = {
  title: 'SMS / Messaging Compliance - Advanced Appliance Repair Service',
  description: 'SMS messaging terms and compliance information for Advanced Appliance Repair Service text message communications.',
  alternates: { canonical: '/sms-messaging-compliance' },
  openGraph: {
    title: 'SMS / Messaging Compliance - Advanced Appliance Repair Service',
    description: 'SMS messaging terms and compliance information for Advanced Appliance Repair Service.',
  },
  twitter: {
    card: 'summary',
    title: 'SMS / Messaging Compliance - Advanced Appliance Repair Service',
    description: 'SMS messaging terms and compliance information for Advanced Appliance Repair Service.',
  },
}

export default function SMSCompliancePage() {
  return <Design1SMSCompliance />
}
