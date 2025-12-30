/**
 * Server-side data fetching utilities for PayloadCMS
 * These functions are used in server components for data fetching
 */

import { getPayloadClient } from '@/utilities/getPayloadClient'
import type {
  Settings,
} from '@/payload-types'

/**
 * Fetch a single page by slug
 */
export async function fetchPageBySlug(slug: string) {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  return result.docs[0] || null
}

/**
 * Fetch all published pages for static generation
 */
export async function fetchAllPages() {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'pages',
    where: {
      status: { equals: 'published' },
    },
    limit: 100,
  })

  return result.docs
}

/**
 * Fetch a single service by slug
 */
export async function fetchServiceBySlug(slug: string) {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'services',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  return result.docs[0] || null
}

/**
 * Fetch all published services
 */
export async function fetchAllServices() {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'services',
    where: {
      status: { equals: 'published' },
    },
    limit: 100,
    sort: 'name',
  })

  return result.docs
}

/**
 * Fetch a single blog post by slug
 */
export async function fetchBlogPostBySlug(slug: string) {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'blog-posts',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  return result.docs[0] || null
}

/**
 * Fetch all published blog posts
 */
export async function fetchAllBlogPosts(options?: {
  limit?: number
  category?: string
}) {
  const payload = await getPayloadClient()

  const where: any = {
    status: { equals: 'published' },
  }

  if (options?.category) {
    where['categories.category'] = { equals: options.category }
  }

  const result = await payload.find({
    collection: 'blog-posts',
    where,
    limit: options?.limit || 100,
    sort: '-publishedDate',
  })

  return result.docs
}

/**
 * Fetch a single service area by slug
 */
export async function fetchServiceAreaBySlug(slug: string) {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'service-areas',
    where: {
      slug: { equals: slug },
      status: { equals: 'published' },
    },
    limit: 1,
    depth: 2,
  })

  return result.docs[0] || null
}

/**
 * Fetch all published service areas
 */
export async function fetchAllServiceAreas() {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection: 'service-areas',
    where: {
      status: { equals: 'published' },
    },
    limit: 100,
    sort: 'name',
  })

  return result.docs
}

/**
 * Fetch all published testimonials
 */
export async function fetchTestimonials(options?: { featured?: boolean }) {
  const payload = await getPayloadClient()

  const where: any = {
    status: { equals: 'published' },
  }

  if (options?.featured) {
    where.featured = { equals: true }
  }

  const result = await payload.find({
    collection: 'testimonials',
    where,
    limit: 50,
    sort: '-date',
  })

  return result.docs
}

/**
 * Fetch site settings
 */
export async function fetchSettings(): Promise<Settings> {
  const payload = await getPayloadClient()

  return await payload.findGlobal({
    slug: 'settings',
  })
}

/**
 * Search across all content types
 */
export async function searchContent(query: string) {
  const payload = await getPayloadClient()

  const [pages, services, blogPosts] = await Promise.all([
    payload.find({
      collection: 'pages',
      where: {
        status: { equals: 'published' },
        title: { contains: query },
      },
      limit: 10,
    }),
    payload.find({
      collection: 'services',
      where: {
        status: { equals: 'published' },
        name: { contains: query },
      },
      limit: 10,
    }),
    payload.find({
      collection: 'blog-posts',
      where: {
        status: { equals: 'published' },
        title: { contains: query },
      },
      limit: 10,
    }),
  ])

  return {
    pages: pages.docs,
    services: services.docs,
    blogPosts: blogPosts.docs,
  }
}
