/**
 * SEO USAGE EXAMPLES
 * This file demonstrates how to use the SEO utilities and components
 * throughout the application for maximum search engine visibility.
 */

import { Metadata } from 'next'
import { generateMetadata, getServiceKeywords } from '@/lib/seo'
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateArticleSchema,
  generateFAQPageSchema,
  generateBreadcrumbSchema,
  generateHomepageSchema,
  generateWebSiteSchema,
} from '@/lib/schema'
import { JsonLd, Breadcrumbs } from '@/components/SEO'

/**
 * EXAMPLE 1: Homepage with complete schema
 */
export function HomePage() {
  // Generate all schemas for homepage
  const websiteSchema = generateWebSiteSchema()
  const businessSchema = generateHomepageSchema({
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 127,
    },
  })

  return (
    <>
      <JsonLd data={[websiteSchema, businessSchema]} />

      <main>
        <h1>Advanced Appliance Repair Service</h1>
        {/* Your homepage content */}
      </main>
    </>
  )
}

// Homepage metadata
export const homeMetadata: Metadata = generateMetadata({
  title: 'Advanced Appliance Repair Service | Expert Repair in Monmouth & Middlesex Counties, NJ',
  description:
    'Professional high-end appliance repair in parts of Monmouth & Middlesex Counties, NJ. Factory-trained technicians for Sub-Zero, Wolf, Viking & all major brands. Call (732) 416-7430',
  keywords: [
    'appliance repair NJ',
    'high-end appliance service',
    'Monmouth County appliance repair',
    'Middlesex County appliance repair',
  ],
})

/**
 * EXAMPLE 2: Service Page (e.g., Refrigerator Repair)
 */
export function ServicePage() {
  const breadcrumbItems = [
    { name: 'Services', url: '/services' },
    { name: 'Refrigerator Repair', url: '/services/refrigerator-repair' },
  ]

  const serviceSchema = generateServiceSchema({
    name: 'Refrigerator Repair Service',
    description:
      'Expert refrigerator repair for all major brands including Sub-Zero, Viking, and more.',
    serviceType: 'Refrigerator Repair',
    url: '/services/refrigerator-repair',
  })

  const faqSchema = generateFAQPageSchema([
    {
      question: 'How quickly can you repair my refrigerator?',
      answer:
        'We typically offer next-day service for most refrigerator repairs in parts of Monmouth and Middlesex Counties.',
    },
    {
      question: 'Do you repair Sub-Zero refrigerators?',
      answer:
        'Yes, we specialize in high-end brands including Sub-Zero, Viking, Wolf, and all major manufacturers.',
    },
  ])

  return (
    <>
      <JsonLd data={[serviceSchema, faqSchema]} />
      <Breadcrumbs items={breadcrumbItems} className="py-4" />

      <main>
        <h1>Refrigerator Repair Service</h1>
        {/* Your service page content */}
      </main>
    </>
  )
}

// Service page metadata
export const serviceMetadata: Metadata = generateMetadata({
  title: 'Refrigerator Repair Service in Monmouth & Middlesex Counties, NJ',
  description:
    'Expert refrigerator repair for Sub-Zero, Viking, Wolf & all brands. Factory-trained technicians. Call (732) 416-7430 for professional refrigerator repair in NJ.',
  keywords: getServiceKeywords('refrigerator', 'Monmouth County NJ'),
  canonical: '/services/refrigerator-repair',
})

/**
 * EXAMPLE 3: Blog Post / Article
 */
export function BlogPostPage() {
  const breadcrumbItems = [
    { name: 'Blog', url: '/blog' },
    { name: 'How to Maintain Your Refrigerator', url: '/blog/maintain-refrigerator' },
  ]

  const articleSchema = generateArticleSchema({
    headline: 'How to Maintain Your Refrigerator for Optimal Performance',
    description:
      'Expert tips on maintaining your refrigerator to extend its lifespan and prevent costly repairs.',
    url: '/blog/maintain-refrigerator',
    imageUrl: '/images/blog/refrigerator-maintenance.jpg',
    datePublished: '2025-01-15T10:00:00Z',
    dateModified: '2025-01-20T14:30:00Z',
    author: 'Advanced Appliance Repair Service',
    keywords: ['refrigerator maintenance', 'appliance care', 'refrigerator tips'],
  })

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={breadcrumbItems} className="py-4" />

      <article>
        <h1>How to Maintain Your Refrigerator for Optimal Performance</h1>
        {/* Your blog post content */}
      </article>
    </>
  )
}

// Blog post metadata
export const blogPostMetadata: Metadata = generateMetadata({
  title: 'How to Maintain Your Refrigerator for Optimal Performance',
  description:
    'Expert tips on maintaining your refrigerator to extend its lifespan and prevent costly repairs. Learn from professional technicians.',
  keywords: ['refrigerator maintenance', 'appliance care', 'refrigerator tips'],
  canonical: '/blog/maintain-refrigerator',
  ogType: 'article',
  publishedTime: '2025-01-15T10:00:00Z',
  modifiedTime: '2025-01-20T14:30:00Z',
  author: 'Advanced Appliance Repair Service',
})

/**
 * EXAMPLE 4: Service Area Page
 */
export function ServiceAreaPage() {
  const breadcrumbItems = [
    { name: 'Service Areas', url: '/service-areas' },
    { name: 'Morganville, NJ', url: '/service-areas/morganville-nj' },
  ]

  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <Breadcrumbs items={breadcrumbItems} className="py-4" />

      <main>
        <h1>Appliance Repair Service in Morganville, NJ</h1>
        {/* Your service area content */}
      </main>
    </>
  )
}

// Service area metadata
export const serviceAreaMetadata: Metadata = generateMetadata({
  title: 'Appliance Repair Service in Morganville, NJ | Expert Service',
  description:
    'Professional appliance repair in Morganville, NJ. We service all major brands with expert technicians. Call (732) 416-7430 for professional repair.',
  keywords: [
    'appliance repair Morganville NJ',
    'Morganville appliance service',
    'refrigerator repair Morganville',
  ],
  canonical: '/service-areas/morganville-nj',
})

/**
 * EXAMPLE 5: Contact Page
 */
export function ContactPage() {
  const localBusinessSchema = generateLocalBusinessSchema()

  return (
    <>
      <JsonLd data={localBusinessSchema} />

      <main>
        <h1>Contact Advanced Appliance Repair Service</h1>
        <p>Call us at (732) 416-7430</p>
        <address>
          23 Reids Hill Road<br />
          Morganville, NJ 07751
        </address>
        {/* Your contact form */}
      </main>
    </>
  )
}

// Contact page metadata
export const contactMetadata: Metadata = generateMetadata({
  title: 'Contact Us | Advanced Appliance Repair Service in NJ',
  description:
    'Get in touch with Advanced Appliance Repair Service. Call (732) 416-7430 or visit us at 23 Reids Hill Road, Morganville, NJ 07751. Expert service available.',
  keywords: ['contact appliance repair', 'appliance repair phone number', 'Morganville NJ'],
  canonical: '/contact',
})

/**
 * EXAMPLE 6: Using Multiple Schemas Together
 */
export function ComplexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Sub-Zero Repair', url: '/services/sub-zero-repair' },
  ])

  const serviceSchema = generateServiceSchema({
    name: 'Sub-Zero Refrigerator Repair',
    description: 'Certified Sub-Zero refrigerator repair service in NJ',
    serviceType: 'Refrigerator Repair',
    url: '/services/sub-zero-repair',
  })

  const faqSchema = generateFAQPageSchema([
    {
      question: 'Are you certified to repair Sub-Zero refrigerators?',
      answer: 'Yes, our technicians are trained and certified for Sub-Zero appliances.',
    },
  ])

  // Combine all schemas
  const allSchemas = [breadcrumbSchema, serviceSchema, faqSchema]

  return (
    <>
      <JsonLd data={allSchemas} />
      {/* Your page content */}
    </>
  )
}

/**
 * BEST PRACTICES:
 *
 * 1. Always include breadcrumbs on non-homepage pages
 * 2. Use specific, location-based keywords
 * 3. Include the phone number in descriptions for local SEO
 * 4. Add JSON-LD schema to every page type
 * 5. Keep titles under 60 characters
 * 6. Keep descriptions under 155 characters
 * 7. Use unique metadata for each page
 * 8. Include your business name in titles
 * 9. Add location information for local SEO
 * 10. Update dateModified when content changes
 */
