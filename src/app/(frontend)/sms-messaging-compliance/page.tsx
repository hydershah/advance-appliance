import { Metadata } from 'next'
import { SMSCompliance as Design1SMSCompliance } from '@/designs/design1/pages'

export const metadata: Metadata = {
  title: 'SMS / Messaging Compliance - Advanced Appliance Repair Service',
  description: 'SMS messaging terms and compliance information for Advanced Appliance Repair Service text message communications.',
}

export default function SMSCompliancePage() {
  return <Design1SMSCompliance />
}
