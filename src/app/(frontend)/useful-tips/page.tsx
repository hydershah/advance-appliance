import { Metadata } from 'next'
import Design1UsefulTips from '@/designs/design1/pages/UsefulTips'
import { fetchAllBlogPosts } from '@/sanity/fetchers'
import { adaptBlogPost } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Useful Tips - Advanced Appliance Repair Service',
  description: 'Expert appliance maintenance tips and troubleshooting guides. Learn how to keep your appliances running smoothly and prevent costly repairs.',
  keywords: ['appliance maintenance tips', 'appliance troubleshooting', 'refrigerator maintenance', 'washer dryer tips', 'appliance care guide'],
  alternates: { canonical: '/useful-tips' },
  openGraph: {
    title: 'Useful Tips - Advanced Appliance Repair Service',
    description: 'Expert appliance maintenance tips and troubleshooting guides.',
    images: [{ url: '/api/og?title=Useful+Tips&subtitle=Expert+Appliance+Maintenance+Guides&category=Tips', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Useful Tips - Advanced Appliance Repair Service',
    description: 'Expert appliance maintenance tips and troubleshooting guides.',
  },
}

export default async function UsefulTipsPage() {
  try {
    const cmsPosts = await fetchAllBlogPosts()
    return <Design1UsefulTips blogPosts={cmsPosts?.length ? cmsPosts.map(adaptBlogPost) : undefined} />
  } catch {
    return <Design1UsefulTips />
  }
}
