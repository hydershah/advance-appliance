import type { PortableTextBlock } from '@portabletext/react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any

// Base document fields
interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
}

// SEO fields
export interface SeoFields {
  title?: string
  description?: string
  image?: SanityImageSource
  keywords?: string
}

// Settings singleton
export interface Settings extends SanityDocument {
  _type: 'settings'
  siteName: string
  tagline?: string
  logo?: SanityImageSource
  contact?: {
    phone: string
    email: string
    address?: string
    city?: string
    state?: string
    zip?: string
  }
  hours?: {
    monday?: string
    tuesday?: string
    wednesday?: string
    thursday?: string
    friday?: string
    saturday?: string
    sunday?: string
    emergencyNote?: string
  }
  social?: {
    facebook?: string
    instagram?: string
    twitter?: string
    youtube?: string
    linkedin?: string
    yelp?: string
    googleBusiness?: string
  }
  seo?: {
    defaultTitle?: string
    defaultDescription?: string
    defaultImage?: SanityImageSource
  }
}

// Page
export interface Page extends SanityDocument {
  _type: 'page'
  title: string
  slug: { _type: 'slug'; current: string }
  status: 'draft' | 'published'
  publishedAt?: string
  layout?: PageBlock[]
  seo?: SeoFields
  // Payload compat alias
  meta?: { seo?: SeoFields }
}

// Service
export interface Service extends SanityDocument {
  _type: 'service'
  name: string
  slug: { _type: 'slug'; current: string }
  status: 'draft' | 'published'
  excerpt?: string
  description: PortableTextBlock[]
  image?: SanityImageSource
  icon?: string
  features?: string[]
  faqs?: Array<{ _key: string; question: string; answer: string }>
  relatedServices?: Service[]
  seo?: SeoFields
  meta?: { seo?: SeoFields }
}

// Service Area
export interface ServiceArea extends SanityDocument {
  _type: 'serviceArea'
  name: string
  slug: { _type: 'slug'; current: string }
  status: 'draft' | 'published'
  excerpt?: string
  description: PortableTextBlock[]
  image?: SanityImageSource
  services?: Service[]
  neighborhoods?: Array<{ _key: string; name: string }>
  coordinates?: {
    latitude?: number
    longitude?: number
  }
  seo?: SeoFields
  meta?: { seo?: SeoFields }
}

// Blog Post
export interface BlogPost extends SanityDocument {
  _type: 'blogPost'
  title: string
  slug: { _type: 'slug'; current: string }
  status: 'draft' | 'published'
  author?: string
  publishedDate?: string
  featuredImage?: SanityImageSource
  excerpt?: string
  content: PortableTextBlock[]
  categories?: string[]
  tags?: string[]
  relatedPosts?: BlogPost[]
  seo?: SeoFields
  meta?: { seo?: SeoFields }
}

// Testimonial
export interface Testimonial extends SanityDocument {
  _type: 'testimonial'
  customerName: string
  service?: Service
  rating: number
  content: string
  date?: string
  location?: string
  featured: boolean
  status: 'draft' | 'published'
}

// Team Member
export interface TeamMember extends SanityDocument {
  _type: 'teamMember'
  name: string
  position: string
  status: 'draft' | 'published'
  photo: SanityImageSource
  email?: string
  phone?: string
  bio?: PortableTextBlock[]
  shortBio?: string
  specialties?: string[]
  certifications?: Array<{
    _key: string
    certification: string
    issuedBy?: string
    year?: number
  }>
  yearsOfExperience?: number
  socialLinks?: {
    linkedin?: string
    twitter?: string
  }
  order: number
}

// Block types
export interface HeroBlock {
  _type: 'heroBlock'
  _key: string
  heading: string
  subheading?: string
  backgroundImage?: SanityImageSource
  ctaText?: string
  ctaLink?: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

export interface ContentBlock {
  _type: 'contentBlock'
  _key: string
  columns?: 'one' | 'two' | 'three'
  content?: PortableTextBlock[]
}

export interface CTABlock {
  _type: 'ctaBlock'
  _key: string
  heading: string
  description?: string
  buttonText: string
  buttonLink: string
  style?: 'primary' | 'secondary'
}

export interface FeaturedServicesBlock {
  _type: 'featuredServicesBlock'
  _key: string
  heading?: string
  services?: Service[]
}

export interface TestimonialsBlock {
  _type: 'testimonialsBlock'
  _key: string
  heading?: string
  testimonials?: Testimonial[]
}

export interface TeamMembersBlock {
  _type: 'teamMembersBlock'
  _key: string
  heading?: string
  subheading?: string
  displayMode?: 'all' | 'featured'
  featuredMembers?: TeamMember[]
  limit?: number
}

export interface BlogPostsBlock {
  _type: 'blogPostsBlock'
  _key: string
  heading?: string
  subheading?: string
  displayMode?: 'recent' | 'featured' | 'category'
  featuredPosts?: BlogPost[]
  category?: string
  limit?: number
  showExcerpt?: boolean
  ctaText?: string
  ctaLink?: string
}

export interface ServiceAreasBlock {
  _type: 'serviceAreasBlock'
  _key: string
  heading?: string
  subheading?: string
  displayMode?: 'all' | 'featured'
  featuredAreas?: ServiceArea[]
  layout?: 'grid' | 'list' | 'map'
}

export interface FAQBlock {
  _type: 'faqBlock'
  _key: string
  heading?: string
  faqs?: Array<{ _key: string; question: string; answer: string }>
}

export type PageBlock =
  | HeroBlock
  | ContentBlock
  | CTABlock
  | FeaturedServicesBlock
  | TestimonialsBlock
  | TeamMembersBlock
  | BlogPostsBlock
  | ServiceAreasBlock
  | FAQBlock

// Re-export PortableTextBlock for convenience
export type { PortableTextBlock }

// Legacy alias — used by components that imported RichTextContent from payload-types
export type RichTextContent = PortableTextBlock[]
