import type {
  LocalBusinessSchema,
  ServiceSchema,
  BlogPostingSchema,
  FAQPageSchema,
} from '@/payload-types'

type JsonLdData =
  | LocalBusinessSchema
  | ServiceSchema
  | BlogPostingSchema
  | FAQPageSchema
  | Record<string, unknown>

interface JsonLdProps {
  data: JsonLdData
}

/**
 * JSON-LD structured data component for Schema.org
 * Renders a script tag with JSON-LD structured data for SEO
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  )
}

/**
 * Helper to generate LocalBusiness schema
 */
export function generateLocalBusinessSchema(options: {
  name: string
  description?: string
  phone?: string
  email?: string
  address?: {
    street?: string
    city?: string
    state?: string
    zip?: string
    country?: string
  }
  hours?: string[]
  socialLinks?: string[]
  imageUrl?: string
  url?: string
}): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: options.name,
    description: options.description,
    telephone: options.phone,
    email: options.email,
    address: options.address?.street
      ? {
          '@type': 'PostalAddress',
          streetAddress: options.address.street,
          addressLocality: options.address.city,
          addressRegion: options.address.state,
          postalCode: options.address.zip,
          addressCountry: options.address.country || 'US',
        }
      : undefined,
    openingHours: options.hours,
    sameAs: options.socialLinks,
    image: options.imageUrl,
    url: options.url,
  }
}

/**
 * Helper to generate Service schema
 */
export function generateServiceSchema(options: {
  name: string
  description?: string
  providerName: string
  areaServed?: string | string[]
  serviceType?: string
}): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    description: options.description,
    provider: {
      '@type': 'LocalBusiness',
      name: options.providerName,
    },
    areaServed: options.areaServed,
    serviceType: options.serviceType,
  }
}

/**
 * Helper to generate BlogPosting schema
 */
export function generateBlogPostingSchema(options: {
  headline: string
  description?: string
  authorName?: string
  publishedDate?: string
  modifiedDate?: string
  imageUrl?: string
  publisherName: string
  publisherLogoUrl?: string
}): BlogPostingSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: options.headline,
    description: options.description,
    author: options.authorName
      ? {
          '@type': 'Person',
          name: options.authorName,
        }
      : undefined,
    datePublished: options.publishedDate,
    dateModified: options.modifiedDate,
    image: options.imageUrl,
    publisher: {
      '@type': 'Organization',
      name: options.publisherName,
      logo: options.publisherLogoUrl
        ? {
            '@type': 'ImageObject',
            url: options.publisherLogoUrl,
          }
        : undefined,
    },
  }
}

/**
 * Helper to generate FAQPage schema
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>,
): FAQPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
