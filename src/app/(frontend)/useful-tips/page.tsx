import { Metadata } from 'next'
import { UsefulTips as Design1UsefulTips } from '@/designs/design1/pages'

export const metadata: Metadata = {
  title: 'Useful Tips - Advanced Appliance Repair Service',
  description: 'Expert appliance maintenance tips and troubleshooting guides. Learn how to keep your appliances running smoothly and prevent costly repairs.',
  openGraph: {
    title: 'Useful Tips - Advanced Appliance Repair Service',
    description: 'Expert appliance maintenance tips and troubleshooting guides.',
  },
}

export default function UsefulTipsPage() {
  return <Design1UsefulTips />
}
