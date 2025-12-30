# SEO Quick Reference Guide

Quick copy-paste examples for common SEO tasks.

---

## Import Statements

```typescript
// Utilities
import { generateMetadata, getServiceKeywords, BUSINESS_INFO } from '@/lib/seo'

// Schemas
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateArticleSchema,
  generateFAQPageSchema,
  generateBreadcrumbSchema,
  generateHomepageSchema,
  generateWebSiteSchema,
} from '@/lib/schema'

// Components
import { JsonLd, Breadcrumbs } from '@/components/SEO'
```

---

## Page Templates

### Homepage

```tsx
import { JsonLd } from '@/components/SEO'
import { generateHomepageSchema, generateWebSiteSchema } from '@/lib/schema'
import { generateMetadata } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Advanced Appliance Repair Service | Expert Repair in NJ',
  description: 'Professional luxury appliance repair in Monmouth & Middlesex Counties. Same-day service. Call (732) 416-7430',
  keywords: ['appliance repair NJ', 'luxury appliance service'],
})

export default function HomePage() {
  const schemas = [
    generateWebSiteSchema(),
    generateHomepageSchema({ aggregateRating: { ratingValue: 4.8, reviewCount: 127 } })
  ]

  return (
    <>
      <JsonLd data={schemas} />
      {/* Content */}
    </>
  )
}
```

### Service Page

```tsx
import { JsonLd, Breadcrumbs } from '@/components/SEO'
import { generateServiceSchema, generateFAQPageSchema } from '@/lib/schema'
import { generateMetadata, getServiceKeywords } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Fetch service data
  const service = await getService(params.slug)

  return generateMetadata({
    title: `${service.name} in Monmouth County, NJ`,
    description: service.description,
    keywords: getServiceKeywords(service.name, 'Monmouth County NJ'),
    canonical: `/services/${params.slug}`,
  })
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug)

  const breadcrumbs = [
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${params.slug}` }
  ]

  const schemas = [
    generateServiceSchema({
      name: service.name,
      description: service.description,
      serviceType: service.type,
      url: `/services/${params.slug}`,
    }),
    generateFAQPageSchema(service.faqs || [])
  ]

  return (
    <>
      <JsonLd data={schemas} />
      <Breadcrumbs items={breadcrumbs} className="py-4 container mx-auto" />
      {/* Content */}
    </>
  )
}
```

### Blog Post

```tsx
import { JsonLd, Breadcrumbs } from '@/components/SEO'
import { generateArticleSchema } from '@/lib/schema'
import { generateMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  return generateMetadata({
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    canonical: `/blog/${params.slug}`,
    ogType: 'article',
    publishedTime: post.publishedDate,
    modifiedTime: post.updatedAt,
    author: post.author,
  })
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  const breadcrumbs = [
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${params.slug}` }
  ]

  const schema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    url: `/blog/${params.slug}`,
    imageUrl: post.image,
    datePublished: post.publishedDate,
    dateModified: post.updatedAt,
    author: post.author,
    keywords: post.tags,
  })

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={breadcrumbs} className="py-4 container mx-auto" />
      <article>{/* Content */}</article>
    </>
  )
}
```

### Service Area Page

```tsx
import { JsonLd, Breadcrumbs } from '@/components/SEO'
import { generateLocalBusinessSchema } from '@/lib/schema'
import { generateMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const area = await getServiceArea(params.slug)

  return generateMetadata({
    title: `Appliance Repair in ${area.name} | Same-Day Service`,
    description: `Professional appliance repair in ${area.name}. Expert service for all major brands. Call (732) 416-7430`,
    keywords: [`appliance repair ${area.name}`, `${area.name} appliance service`],
    canonical: `/service-areas/${params.slug}`,
  })
}

export default async function ServiceAreaPage({ params }: { params: { slug: string } }) {
  const area = await getServiceArea(params.slug)

  const breadcrumbs = [
    { name: 'Service Areas', url: '/service-areas' },
    { name: area.name, url: `/service-areas/${params.slug}` }
  ]

  const schema = generateLocalBusinessSchema()

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={breadcrumbs} className="py-4 container mx-auto" />
      {/* Content */}
    </>
  )
}
```

### Contact Page

```tsx
import { JsonLd } from '@/components/SEO'
import { generateLocalBusinessSchema } from '@/lib/schema'
import { generateMetadata, BUSINESS_INFO } from '@/lib/seo'

export const metadata = generateMetadata({
  title: 'Contact Us | Advanced Appliance Repair Service',
  description: `Get in touch with Advanced Appliance Repair. Call ${BUSINESS_INFO.phone} or visit us in ${BUSINESS_INFO.address.city}, NJ`,
  canonical: '/contact',
})

export default function ContactPage() {
  const schema = generateLocalBusinessSchema()

  return (
    <>
      <JsonLd data={schema} />
      {/* Contact form */}
    </>
  )
}
```

---

## Common Schemas

### FAQs

```tsx
const faqSchema = generateFAQPageSchema([
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes, we offer same-day service for most repairs in Monmouth and Middlesex Counties.'
  },
  {
    question: 'What brands do you service?',
    answer: 'We service all major brands including Sub-Zero, Wolf, Viking, Miele, and more.'
  }
])

<JsonLd data={faqSchema} />
```

### Reviews/Ratings

```tsx
import { generateAggregateRatingSchema } from '@/lib/schema'

const ratingSchema = generateAggregateRatingSchema({
  ratingValue: 4.8,
  reviewCount: 127,
  bestRating: 5,
  worstRating: 1,
})
```

### How-To Guides

```tsx
import { generateHowToSchema } from '@/lib/schema'

const howToSchema = generateHowToSchema({
  name: 'How to Reset Your Refrigerator',
  description: 'Step-by-step guide to resetting your refrigerator',
  totalTime: 'PT10M', // 10 minutes in ISO 8601
  steps: [
    { name: 'Step 1', text: 'Unplug the refrigerator' },
    { name: 'Step 2', text: 'Wait 5 minutes' },
    { name: 'Step 3', text: 'Plug back in' }
  ]
})
```

---

## Dynamic OG Images

```tsx
import { generateOgImageUrl } from '@/components/SEO'

// In your metadata
export const metadata = generateMetadata({
  title: 'Refrigerator Repair',
  ogImage: generateOgImageUrl({
    title: 'Refrigerator Repair',
    subtitle: 'Expert Service in NJ',
    category: 'Service'
  })
})
```

---

## Common Keywords

```typescript
import { getServiceKeywords, COMMON_KEYWORDS } from '@/lib/seo'

// Service-specific
const keywords = getServiceKeywords('refrigerator', 'Monmouth County NJ')

// Pre-defined sets
const allKeywords = [
  ...COMMON_KEYWORDS.services,
  ...COMMON_KEYWORDS.appliances,
  ...COMMON_KEYWORDS.brands,
  ...COMMON_KEYWORDS.locations,
]
```

---

## Business Info

```typescript
import { BUSINESS_INFO } from '@/lib/seo'

// Use throughout your app
<a href={`tel:${BUSINESS_INFO.phone}`}>{BUSINESS_INFO.phone}</a>

<address>
  {BUSINESS_INFO.address.street}<br />
  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
</address>
```

---

## Testing URLs

After deployment, test these:

- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- Manifest: `/manifest.json`
- Dynamic OG: `/api/og?title=Test`

---

## Validation Tools

- **Rich Results:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org/
- **OG Debugger:** https://www.opengraph.xyz/
- **Twitter Card:** https://cards-dev.twitter.com/validator
- **Mobile-Friendly:** https://search.google.com/test/mobile-friendly

---

## Tips

1. Always include breadcrumbs on non-homepage pages
2. Use `getServiceKeywords()` for consistent service page keywords
3. Add location to titles and descriptions for local SEO
4. Update `dateModified` when content changes
5. Include phone number in descriptions for click-to-call
6. Test schemas before deploying
7. Keep titles under 60 characters
8. Keep descriptions under 155 characters
