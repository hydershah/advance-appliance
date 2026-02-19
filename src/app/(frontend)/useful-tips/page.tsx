import { Metadata } from 'next'
import { UsefulTips as Design1UsefulTips } from '@/designs/design1/pages'
import { fetchAllBlogPosts } from '@/sanity/fetchers'
import { adaptBlogPost } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Useful Tips - Advanced Appliance Repair Service',
  description: 'Expert appliance maintenance tips and troubleshooting guides. Learn how to keep your appliances running smoothly and prevent costly repairs.',
  openGraph: {
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
