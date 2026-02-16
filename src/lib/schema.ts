import { BUSINESS_INFO, generateBusinessHours, generateBreadcrumbs } from './seo'

/**
 * JSON-LD Schema Generators for Advanced Appliance Repair
 * Complete structured data implementation for SEO
 */

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

/**
 * Generate comprehensive LocalBusiness schema with all details
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description:
      'Professional high-end appliance repair services in parts of Monmouth and Middlesex Counties, NJ. Factory-trained technicians specializing in Sub-Zero, Wolf, Viking, and all major appliance brands.',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: BUSINESS_INFO.logo,
      width: 600,
      height: 60,
    },
    image: [
      `${BASE_URL}/og-image.jpg`,
      `${BASE_URL}/images/service-van.jpg`,
      `${BASE_URL}/images/technician.jpg`,
    ],
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: generateBusinessHours(),
    areaServed: BUSINESS_INFO.areasServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_INFO.geo.latitude,
        longitude: BUSINESS_INFO.geo.longitude,
      },
      geoRadius: '50000', // 50km radius
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Appliance Repair Services',
      itemListElement: BUSINESS_INFO.services.map((service, _index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service,
          provider: {
            '@type': 'LocalBusiness',
            name: BUSINESS_INFO.name,
          },
        },
      })),
    },
    sameAs: [
      'https://www.facebook.com/advanceappliancerepair',
      'https://www.instagram.com/advanceappliancerepair',
      'https://www.linkedin.com/company/advanceappliancerepair',
    ],
  }
}

/**
 * Generate Service schema for specific appliance repair service
 */
export function generateServiceSchema(options: {
  name: string
  description: string
  serviceType: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${options.url}#service`,
    name: options.name,
    description: options.description,
    serviceType: options.serviceType,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#organization`,
      name: BUSINESS_INFO.name,
    },
    areaServed: BUSINESS_INFO.areasServed.map(area => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: options.name,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Emergency ${options.name}`,
            description: `Emergency ${options.name.toLowerCase()} available`,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Scheduled ${options.name}`,
            description: `Scheduled ${options.name.toLowerCase()} and maintenance`,
          },
        },
      ],
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: options.url,
      servicePhone: BUSINESS_INFO.phone,
    },
  }
}

/**
 * Generate FAQPage schema
 */
export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate Article/BlogPosting schema
 */
export function generateArticleSchema(options: {
  headline: string
  description: string
  url: string
  imageUrl: string
  datePublished: string
  dateModified?: string
  author?: string
  keywords?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${options.url}#article`,
    headline: options.headline,
    description: options.description,
    image: {
      '@type': 'ImageObject',
      url: options.imageUrl,
      width: 1200,
      height: 630,
    },
    datePublished: options.datePublished,
    dateModified: options.dateModified || options.datePublished,
    author: {
      '@type': 'Person',
      name: options.author || BUSINESS_INFO.name,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: BUSINESS_INFO.logo,
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': options.url,
    },
    keywords: options.keywords?.join(', '),
  }
}

/**
 * Generate BreadcrumbList schema
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: generateBreadcrumbs(items),
  }
}

/**
 * Generate AggregateRating schema
 */
export function generateAggregateRatingSchema(options: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    ratingValue: options.ratingValue,
    reviewCount: options.reviewCount,
    bestRating: options.bestRating || 5,
    worstRating: options.worstRating || 1,
  }
}

/**
 * Generate Review schema
 */
export function generateReviewSchema(options: {
  author: string
  datePublished: string
  reviewBody: string
  ratingValue: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: options.author,
    },
    datePublished: options.datePublished,
    reviewBody: options.reviewBody,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: options.ratingValue,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#organization`,
      name: BUSINESS_INFO.name,
    },
  }
}

/**
 * Generate complete homepage schema with organization + local business
 */
export function generateHomepageSchema(options?: {
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
}) {
  const baseSchema = generateLocalBusinessSchema()

  if (options?.aggregateRating) {
    return {
      ...baseSchema,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: options.aggregateRating.ratingValue,
        reviewCount: options.aggregateRating.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }
  }

  return baseSchema
}

/**
 * Generate WebSite schema with search action
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS_INFO.name,
    description:
      'Professional high-end appliance repair services in parts of Monmouth and Middlesex Counties, NJ',
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BASE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

/**
 * Generate HowTo schema for repair guides
 */
export function generateHowToSchema(options: {
  name: string
  description: string
  steps: Array<{
    name: string
    text: string
    image?: string
  }>
  totalTime?: string
  estimatedCost?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: options.name,
    description: options.description,
    totalTime: options.totalTime,
    estimatedCost: options.estimatedCost,
    step: options.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  }
}

/**
 * Generate VideoObject schema
 */
export function generateVideoSchema(options: {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration?: string
  contentUrl?: string
  embedUrl?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: options.name,
    description: options.description,
    thumbnailUrl: options.thumbnailUrl,
    uploadDate: options.uploadDate,
    duration: options.duration,
    contentUrl: options.contentUrl,
    embedUrl: options.embedUrl,
  }
}
