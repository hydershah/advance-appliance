/**
 * Server-side data fetching utilities for Sanity CMS
 * These functions replace the PayloadCMS fetchers with the same signatures
 */

import { client } from './client'
import {
  settingsQuery,
  pageBySlugQuery,
  allPagesQuery,
  serviceBySlugQuery,
  allServicesQuery,
  serviceAreaBySlugQuery,
  allServiceAreasQuery,
  blogPostBySlugQuery,
  allBlogPostsQuery,
  blogPostsByCategoryQuery,
  allTestimonialsQuery,
  featuredTestimonialsQuery,
  searchPagesQuery,
  searchServicesQuery,
  searchBlogPostsQuery,
} from './queries'
import type {
  Settings,
  Page,
  Service,
  ServiceArea,
  BlogPost,
  Testimonial,
} from './types'

/**
 * Fetch site settings
 */
export async function fetchSettings(): Promise<Settings> {
  return await client.fetch<Settings>(settingsQuery)
}

/**
 * Fetch a single page by slug
 */
export async function fetchPageBySlug(slug: string): Promise<Page | null> {
  return await client.fetch<Page | null>(pageBySlugQuery, { slug })
}

/**
 * Fetch all published pages
 */
export async function fetchAllPages(): Promise<Page[]> {
  return await client.fetch<Page[]>(allPagesQuery)
}

/**
 * Fetch a single service by slug
 */
export async function fetchServiceBySlug(slug: string): Promise<Service | null> {
  return await client.fetch<Service | null>(serviceBySlugQuery, { slug })
}

/**
 * Fetch all published services
 */
export async function fetchAllServices(): Promise<Service[]> {
  return await client.fetch<Service[]>(allServicesQuery)
}

/**
 * Fetch a single service area by slug
 */
export async function fetchServiceAreaBySlug(slug: string): Promise<ServiceArea | null> {
  return await client.fetch<ServiceArea | null>(serviceAreaBySlugQuery, { slug })
}

/**
 * Fetch all published service areas
 */
export async function fetchAllServiceAreas(): Promise<ServiceArea[]> {
  return await client.fetch<ServiceArea[]>(allServiceAreasQuery)
}

/**
 * Fetch a single blog post by slug
 */
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return await client.fetch<BlogPost | null>(blogPostBySlugQuery, { slug })
}

/**
 * Fetch all published blog posts
 */
export async function fetchAllBlogPosts(options?: {
  limit?: number
  category?: string
}): Promise<BlogPost[]> {
  const limit = options?.limit || 100

  if (options?.category) {
    return await client.fetch<BlogPost[]>(blogPostsByCategoryQuery, {
      category: options.category,
      limit,
    })
  }

  return await client.fetch<BlogPost[]>(allBlogPostsQuery, { limit })
}

/**
 * Fetch all published testimonials
 */
export async function fetchTestimonials(options?: {
  featured?: boolean
}): Promise<Testimonial[]> {
  if (options?.featured) {
    return await client.fetch<Testimonial[]>(featuredTestimonialsQuery)
  }
  return await client.fetch<Testimonial[]>(allTestimonialsQuery)
}

/**
 * Search across all content types
 */
export async function searchContent(query: string) {
  const [pages, services, blogPosts] = await Promise.all([
    client.fetch(searchPagesQuery, { searchTerm: query }),
    client.fetch(searchServicesQuery, { searchTerm: query }),
    client.fetch(searchBlogPostsQuery, { searchTerm: query }),
  ])

  return { pages, services, blogPosts }
}
