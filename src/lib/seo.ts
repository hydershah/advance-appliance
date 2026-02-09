import type { Metadata } from 'next'

/**
 * SEO Utility Functions for Advanced Appliance Repair
 * Provides helpers for metadata generation, OG images, and canonical URLs
 */

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  ogImage?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  author?: string
}

const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'
const BUSINESS_NAME = 'Advanced Appliance Repair Service'
const PHONE = '(732) 416-7430'
const LOGO_URL = `${BASE_URL}/logo.png`

/**
 * Generate comprehensive metadata for a page
 */
export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonical,
    noindex = false,
    nofollow = false,
    ogImage = '/og-image.jpg',
    ogType = 'website',
    publishedTime,
    modifiedTime,
    author,
  } = config

  const fullTitle = title.includes(BUSINESS_NAME)
    ? title
    : `${title} | ${BUSINESS_NAME}`

  const canonicalUrl = canonical
    ? `${BASE_URL}${canonical}`
    : BASE_URL

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: author ? [{ name: author }] : [{ name: BUSINESS_NAME }],
    creator: BUSINESS_NAME,
    publisher: BUSINESS_NAME,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: !noindex,
      follow: !nofollow,
      googleBot: {
        index: !noindex,
        follow: !nofollow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl,
      siteName: BUSINESS_NAME,
      title: fullTitle,
      description,
      images: [
        {
          url: ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(ogType === 'article' && {
        publishedTime,
        modifiedTime,
        authors: author ? [author] : undefined,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`],
      creator: '@advanceappliance',
    },
  }
}

/**
 * Generate OG Image URL with dynamic text
 * Can be used with services like Vercel OG or custom implementation
 */
export function generateOgImageUrl(options: {
  title: string
  subtitle?: string
  category?: string
}): string {
  const params = new URLSearchParams({
    title: options.title,
    ...(options.subtitle && { subtitle: options.subtitle }),
    ...(options.category && { category: options.category }),
  })

  return `${BASE_URL}/api/og?${params.toString()}`
}

/**
 * Generate breadcrumb list items for navigation
 */
export function generateBreadcrumbs(items: Array<{ name: string; url: string }>) {
  return items.map((item, index) => ({
    '@type': 'ListItem' as const,
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
  }))
}

/**
 * Common SEO keywords for appliance repair
 */
export const COMMON_KEYWORDS = {
  services: [
    'appliance repair',
    'appliance service',
    'appliance maintenance',
    'emergency appliance repair',
    'same day appliance repair',
    'professional appliance technician',
  ],
  appliances: [
    'refrigerator repair',
    'washer repair',
    'dryer repair',
    'dishwasher repair',
    'oven repair',
    'stove repair',
    'range repair',
    'microwave repair',
  ],
  brands: [
    'Sub-Zero repair',
    'Wolf repair',
    'Viking repair',
    'Miele repair',
    'Thermador repair',
    'Bosch repair',
    'KitchenAid repair',
    'GE Monogram repair',
  ],
  locations: [
    'Monmouth County NJ',
    'Middlesex County NJ',
    'Morganville NJ',
    'Marlboro NJ',
    'Colts Neck NJ',
    'Holmdel NJ',
  ],
  luxury: [
    'luxury appliance repair',
    'high-end appliance service',
    'premium appliance technician',
    'commercial grade appliance repair',
  ],
}

/**
 * Generate service-specific keywords
 */
export function getServiceKeywords(service: string, location?: string): string[] {
  const baseKeywords = [
    `${service} repair`,
    `${service} service`,
    `${service} maintenance`,
    `professional ${service} repair`,
    `emergency ${service} repair`,
    `same day ${service} repair`,
  ]

  if (location) {
    return [
      ...baseKeywords.map(k => `${k} ${location}`),
      ...baseKeywords,
    ]
  }

  return baseKeywords
}

/**
 * Business contact information for schema
 */
export const BUSINESS_INFO = {
  name: BUSINESS_NAME,
  legalName: 'Advanced Appliance Repair Service LLC',
  phone: PHONE,
  email: 'service@appliancenj.com',
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
  hours: [
    'Monday 8:00 AM - 9:00 PM',
    'Tuesday 8:00 AM - 9:00 PM',
    'Wednesday 8:00 AM - 9:00 PM',
    'Thursday 8:00 AM - 9:00 PM',
    'Friday 8:00 AM - 9:00 PM',
    'Saturday 8:00 AM - 9:00 PM',
    'Sunday 8:00 AM - 9:00 PM',
  ],
  hoursSchema: 'Mo-Su 08:00-21:00',
  areasServed: [
    'Monmouth County, NJ',
    'Middlesex County, NJ',
    'Aberdeen, NJ',
    'Belford, NJ',
    'Colts Neck, NJ',
    'Deal, NJ',
    'Eatontown, NJ',
    'Edison, NJ',
    'Englishtown, NJ',
    'Fair Haven, NJ',
    'Farmingdale, NJ',
    'Fords, NJ',
    'Freehold, NJ',
    'Hazlet, NJ',
    'Holmdel, NJ',
    'Keansburg, NJ',
    'Keyport, NJ',
    'Leonardo, NJ',
    'Lincroft, NJ',
    'Little Silver, NJ',
    'Manalapan, NJ',
    'Marlboro, NJ',
    'Matawan, NJ',
    'Metuchen, NJ',
    'Middletown, NJ',
    'Morganville, NJ',
    'Neptune, NJ',
    'Ocean, NJ',
    'Oceanport, NJ',
    'Old Bridge, NJ',
    'Parlin, NJ',
    'Perth Amboy, NJ',
    'Port Monmouth, NJ',
    'Red Bank, NJ',
    'Rumson, NJ',
    'Sayreville, NJ',
    'Shrewsbury, NJ',
    'South Amboy, NJ',
    'Tinton Falls, NJ',
    'West Long Branch, NJ',
    'Woodbridge, NJ',
  ],
  services: [
    'Refrigerator Repair',
    'Washer Repair',
    'Dryer Repair',
    'Dishwasher Repair',
    'Oven Repair',
    'Cooktop Repair',
  ],
  brands: [
    'Sub-Zero',
    'Wolf',
    'Viking',
    'Miele',
    'Thermador',
    'Bosch',
    'KitchenAid',
    'GE',
    'GE Monogram',
    'GE Profile',
    'GE Cafe',
    'Samsung',
    'LG',
    'Whirlpool',
    'Maytag',
    'Kenmore',
    'Jenn-Air',
    'Electrolux',
    'Frigidaire',
    'Admiral',
    'Amana',
    'Asko',
    'Dacor',
    'DCS',
    'Fisher & Paykel',
    'Gaggenau',
    'Hotpoint',
    'Magic Chef',
    'Roper',
    'Speed Queen',
    'Tappan',
    'U Line',
    'Westinghouse',
  ],
  logo: LOGO_URL,
  url: BASE_URL,
  priceRange: '$$',
}

/**
 * Generate structured business hours for schema
 */
export function generateBusinessHours() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  return days.map(day => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: day,
    opens: '08:00',
    closes: '21:00',
  }))
}
