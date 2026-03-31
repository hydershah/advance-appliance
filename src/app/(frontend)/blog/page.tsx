import { Metadata } from 'next'
import Design1Blog from '@/designs/design1/pages/Blog'
import { fetchAllBlogPosts } from '@/sanity/fetchers'
import { adaptBlogPost } from '@/lib/sanityAdapters'

export const metadata: Metadata = {
  title: 'Blog - Advanced Appliance Repair Service',
  description:
    'Read our latest articles about appliance repair, maintenance tips, and industry insights.',
  keywords: ['appliance repair tips', 'appliance maintenance blog', 'refrigerator troubleshooting', 'washer dryer maintenance', 'appliance care guide NJ'],
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog - Advanced Appliance Repair Service',
    description:
      'Expert advice, maintenance tips, and industry insights for your appliances.',
    images: [{ url: '/api/og?title=Our+Blog&subtitle=Expert+Advice+%26+Maintenance+Tips&category=Blog', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Advanced Appliance Repair Service',
    description: 'Expert advice, maintenance tips, and industry insights for your appliances.',
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
