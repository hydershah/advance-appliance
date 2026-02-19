import { Metadata } from 'next'
import { Blog as Design1Blog } from '@/designs/design1/pages'
import { fetchAllBlogPosts } from '@/sanity/fetchers'
import { adaptBlogPost } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Blog - Advanced Appliance Repair Service',
  description:
    'Read our latest articles about appliance repair, maintenance tips, and industry insights.',
  openGraph: {
    title: 'Blog - Advanced Appliance Repair Service',
    description:
      'Expert advice, maintenance tips, and industry insights for your appliances.',
  },
}

export default async function BlogPage() {
  try {
    const cmsPosts = await fetchAllBlogPosts({ limit: 50 })
    return <Design1Blog blogPosts={cmsPosts?.length ? cmsPosts.map(adaptBlogPost) : undefined} />
  } catch {
    return <Design1Blog />
  }
}
