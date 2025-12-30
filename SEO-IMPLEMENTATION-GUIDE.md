# SEO Implementation Guide
## Advanced Appliance Repair Service

This guide explains the complete SEO implementation for the luxury appliance repair website.

---

## Table of Contents

1. [Overview](#overview)
2. [Files Created](#files-created)
3. [Core Utilities](#core-utilities)
4. [Components](#components)
5. [Usage Examples](#usage-examples)
6. [Business Information](#business-information)
7. [Implementation Checklist](#implementation-checklist)

---

## Overview

This SEO implementation provides:

- **Dynamic sitemap generation** from PayloadCMS
- **Comprehensive JSON-LD schemas** (LocalBusiness, Service, Article, FAQ, etc.)
- **Metadata helpers** for consistent SEO across pages
- **Breadcrumb components** with schema markup
- **OpenGraph & Twitter Card** optimization
- **Web app manifest** for PWA support
- **Robots.txt** configuration

---

## Files Created

### Core Files

```
src/
├── lib/
│   ├── seo.ts              # SEO utility functions
│   └── schema.ts           # JSON-LD schema generators
├── components/
│   └── SEO/
│       ├── JsonLd.tsx      # Schema injection component
│       ├── Breadcrumbs.tsx # Breadcrumb component with schema
│       ├── OpenGraph.tsx   # OG meta tags component
│       └── index.ts        # Barrel exports
└── app/
    ├── sitemap.ts          # Dynamic sitemap
    ├── robots.ts           # Robots.txt config
    └── (frontend)/
        ├── layout.tsx      # Updated with enhanced metadata
        └── examples/
            └── seo-usage.tsx # Complete usage examples

public/
├── manifest.json           # PWA manifest
└── browserconfig.xml       # Microsoft tile config
```

---

## Core Utilities

### `/src/lib/seo.ts`

**Purpose:** Centralized SEO utilities and business information

**Key Functions:**

```typescript
// Generate page metadata
generateMetadata(config: SEOConfig): Metadata

// Generate OG image URL
generateOgImageUrl(options: { title, subtitle?, category? }): string

// Get service-specific keywords
getServiceKeywords(service: string, location?: string): string[]

// Generate breadcrumbs
generateBreadcrumbs(items: Array<{name, url}>)
```

**Constants:**

- `BUSINESS_INFO` - Complete business details (name, phone, address, hours, etc.)
- `COMMON_KEYWORDS` - Pre-defined keyword sets for services, appliances, brands, locations

### `/src/lib/schema.ts`

**Purpose:** JSON-LD schema generators for all page types

**Available Schemas:**

| Function | Schema Type | Usage |
|----------|-------------|-------|
| `generateLocalBusinessSchema()` | LocalBusiness | Homepage, contact page |
| `generateServiceSchema()` | Service | Service pages |
| `generateArticleSchema()` | Article | Blog posts |
| `generateFAQPageSchema()` | FAQPage | FAQ sections |
| `generateBreadcrumbSchema()` | BreadcrumbList | Navigation trails |
| `generateAggregateRatingSchema()` | AggregateRating | Reviews |
| `generateReviewSchema()` | Review | Individual reviews |
| `generateHomepageSchema()` | Complete homepage | Homepage with ratings |
| `generateWebSiteSchema()` | WebSite | Site search |
| `generateHowToSchema()` | HowTo | Repair guides |
| `generateVideoSchema()` | VideoObject | Video content |

---

## Components

### JsonLd Component

**Location:** `/src/components/SEO/JsonLd.tsx`

**Usage:**

```tsx
import { JsonLd } from '@/components/SEO'
import { generateLocalBusinessSchema } from '@/lib/schema'

export default function Page() {
  const schema = generateLocalBusinessSchema()

  return (
    <>
      <JsonLd data={schema} />
      {/* Page content */}
    </>
  )
}
```

**Multiple Schemas:**

```tsx
<JsonLd data={[schema1, schema2, schema3]} />
```

### Breadcrumbs Component

**Location:** `/src/components/SEO/Breadcrumbs.tsx`

**Features:**
- Automatic schema.org markup
- Mobile-friendly variant
- Customizable styling
- Auto-includes "Home" link

**Usage:**

```tsx
import { Breadcrumbs } from '@/components/SEO'

export default function ServicePage() {
  const items = [
    { name: 'Services', url: '/services' },
    { name: 'Refrigerator Repair', url: '/services/refrigerator-repair' }
  ]

  return (
    <>
      <Breadcrumbs items={items} className="py-4" />
      {/* Page content */}
    </>
  )
}
```

### OpenGraph Component

**Location:** `/src/components/SEO/OpenGraph.tsx`

**Purpose:** Manual OG tags (use only when metadata API is insufficient)

```tsx
import { OpenGraph } from '@/components/SEO'

<OpenGraph
  title="Page Title"
  description="Page description"
  url="/page-url"
  image="/custom-og-image.jpg"
  type="article"
/>
```

---

## Usage Examples

### 1. Homepage

```tsx
// page.tsx
import { JsonLd } from '@/components/SEO'
import { generateHomepageSchema, generateWebSiteSchema } from '@/lib/schema'

export default function HomePage() {
  const websiteSchema = generateWebSiteSchema()
  const businessSchema = generateHomepageSchema({
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 127
    }
  })

  return (
    <>
      <JsonLd data={[websiteSchema, businessSchema]} />
      {/* Page content */}
    </>
  )
}

// Metadata
export const metadata = generateMetadata({
  title: 'Advanced Appliance Repair Service | Expert Repair in NJ',
  description: 'Professional luxury appliance repair...',
  keywords: ['appliance repair NJ', 'luxury appliance service'],
})
```

### 2. Service Page

```tsx
// services/[slug]/page.tsx
import { JsonLd, Breadcrumbs } from '@/components/SEO'
import { generateServiceSchema, generateFAQPageSchema } from '@/lib/schema'
import { generateMetadata, getServiceKeywords } from '@/lib/seo'

export async function generateMetadata({ params }) {
  return generateMetadata({
    title: `${service.name} in Monmouth County, NJ`,
    description: service.description,
    keywords: getServiceKeywords(service.name, 'Monmouth County NJ'),
    canonical: `/services/${params.slug}`,
  })
}

export default function ServicePage({ service }) {
  const breadcrumbs = [
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` }
  ]

  const serviceSchema = generateServiceSchema({
    name: service.name,
    description: service.description,
    serviceType: service.type,
    url: `/services/${service.slug}`,
  })

  const faqSchema = generateFAQPageSchema(service.faqs)

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />
      <Breadcrumbs items={breadcrumbs} />
      {/* Service content */}
    </>
  )
}
```

### 3. Blog Post

```tsx
// blog/[slug]/page.tsx
import { JsonLd, Breadcrumbs } from '@/components/SEO'
import { generateArticleSchema } from '@/lib/schema'
import { generateMetadata } from '@/lib/seo'

export async function generateMetadata({ params }) {
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

export default function BlogPost({ post }) {
  const breadcrumbs = [
    { name: 'Blog', url: '/blog' },
    { name: post.title, url: `/blog/${post.slug}` }
  ]

  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    url: `/blog/${post.slug}`,
    imageUrl: post.image,
    datePublished: post.publishedDate,
    dateModified: post.updatedAt,
    author: post.author,
    keywords: post.tags,
  })

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={breadcrumbs} />
      <article>{/* Post content */}</article>
    </>
  )
}
```

### 4. Service Area Page

```tsx
// service-areas/[slug]/page.tsx
import { JsonLd } from '@/components/SEO'
import { generateLocalBusinessSchema } from '@/lib/schema'
import { generateMetadata } from '@/lib/seo'

export async function generateMetadata({ params }) {
  return generateMetadata({
    title: `Appliance Repair in ${area.name} | Same-Day Service`,
    description: `Professional appliance repair in ${area.name}. Call (732) 416-7430`,
    keywords: [`appliance repair ${area.name}`, `${area.name} appliance service`],
    canonical: `/service-areas/${params.slug}`,
  })
}

export default function ServiceAreaPage({ area }) {
  const schema = generateLocalBusinessSchema()

  return (
    <>
      <JsonLd data={schema} />
      {/* Area content */}
    </>
  )
}
```

---

## Business Information

All business details are centralized in `/src/lib/seo.ts`:

```typescript
export const BUSINESS_INFO = {
  name: 'Advanced Appliance Repair Service',
  legalName: 'Advanced Appliance Repair Service LLC',
  phone: '(732) 416-7430',
  email: 'info@advanceappliancerepair.com',
  address: {
    street: '23 Reids Hill Road',
    city: 'Morganville',
    state: 'NJ',
    zip: '07751',
    country: 'US',
  },
  geo: {
    latitude: 40.3565,
    longitude: -74.2532,
  },
  hours: 'Mo-Su 08:00-21:00',
  areasServed: [
    'Monmouth County, NJ',
    'Middlesex County, NJ',
    'Morganville, NJ',
    'Marlboro, NJ',
    'Colts Neck, NJ',
    // ... more areas
  ],
  services: [
    'Refrigerator Repair',
    'Washer Repair',
    'Dryer Repair',
    // ... more services
  ],
  brands: [
    'Sub-Zero',
    'Wolf',
    'Viking',
    // ... more brands
  ],
}
```

---

## Implementation Checklist

### Immediate Setup

- [ ] Add verification codes to `/src/app/(frontend)/layout.tsx`:
  - [ ] Google Search Console verification code
  - [ ] Bing Webmaster Tools verification code
  - [ ] Yandex verification code

- [ ] Create required image assets in `/public/`:
  - [ ] `/og-image.jpg` (1200x630) - Default OG image
  - [ ] `/logo.png` (600x60) - Business logo
  - [ ] `/icon-192.png` - PWA icon 192x192
  - [ ] `/icon-512.png` - PWA icon 512x512
  - [ ] `/apple-touch-icon.png` - Apple touch icon 180x180
  - [ ] `/favicon.ico` - Favicon
  - [ ] Microsoft tiles (mstile-*.png)

### PayloadCMS Collections

Ensure these collections exist and have `_status` field:

- [ ] `services` - Service offerings
- [ ] `posts` - Blog posts
- [ ] `service-areas` - Service area pages
- [ ] `brands` - Manufacturer pages
- [ ] `pages` - Custom pages

### Page Implementation

For each page type, implement:

- [ ] **Homepage**
  - [ ] WebSite schema
  - [ ] LocalBusiness schema with ratings
  - [ ] Optimized metadata

- [ ] **Service Pages**
  - [ ] Service schema
  - [ ] FAQ schema
  - [ ] Breadcrumbs
  - [ ] Location-specific keywords

- [ ] **Blog Posts**
  - [ ] Article schema
  - [ ] Breadcrumbs
  - [ ] Author information
  - [ ] Published/modified dates

- [ ] **Service Area Pages**
  - [ ] LocalBusiness schema
  - [ ] Location-specific content
  - [ ] Local keywords

- [ ] **Contact Page**
  - [ ] LocalBusiness schema
  - [ ] Complete contact information

### Testing

- [ ] Test sitemap: `http://localhost:3000/sitemap.xml`
- [ ] Test robots.txt: `http://localhost:3000/robots.txt`
- [ ] Validate schemas: [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test OG tags: [OpenGraph Debugger](https://www.opengraph.xyz/)
- [ ] Test Twitter cards: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Mobile-friendly test: [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] Page speed: [Google PageSpeed Insights](https://pagespeed.web.dev/)

### Google Search Console Setup

1. Verify ownership using verification code
2. Submit sitemap URL: `https://yourdomain.com/sitemap.xml`
3. Monitor:
   - Indexing coverage
   - Core Web Vitals
   - Mobile usability
   - Rich results (schemas)

### Ongoing Maintenance

- [ ] Update `dateModified` when content changes
- [ ] Add new pages to sitemap (automatic via PayloadCMS)
- [ ] Monitor search performance in Google Search Console
- [ ] Update aggregate ratings regularly
- [ ] Add new service areas as you expand
- [ ] Create regular blog content with proper schemas

---

## SEO Best Practices Applied

1. **Title Optimization**
   - Include primary keyword
   - Include location (NJ, Monmouth County)
   - Include business name
   - Keep under 60 characters

2. **Description Optimization**
   - Include phone number for click-to-call
   - Include location
   - Include call-to-action
   - Keep under 155 characters

3. **Structured Data**
   - LocalBusiness for NAP (Name, Address, Phone)
   - Service schemas for each offering
   - FAQ schemas for rich snippets
   - Article schemas for blog posts
   - Breadcrumbs for navigation
   - AggregateRating for social proof

4. **Local SEO**
   - Geographic coordinates in schema
   - Service areas clearly defined
   - Location-based keywords
   - Business hours in schema
   - Local citations (NAP consistency)

5. **Technical SEO**
   - Dynamic sitemap generation
   - Proper robots.txt
   - Canonical URLs
   - Mobile-friendly design
   - Fast page loads
   - HTTPS (ensure in production)

---

## Support & Resources

- **Schema.org Documentation:** https://schema.org/
- **Google Search Central:** https://developers.google.com/search
- **Next.js Metadata API:** https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- **Structured Data Testing:** https://search.google.com/test/rich-results

---

## Contact

For questions about this SEO implementation, review the example files in:
- `/src/app/(frontend)/examples/seo-usage.tsx`

All configurations are centralized and type-safe, making updates and maintenance straightforward.
