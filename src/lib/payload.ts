/**
 * Payload CMS Client Utilities
 *
 * This file provides utilities for interacting with PayloadCMS
 * including cached client instances and helper functions.
 */

import { getPayload } from 'payload'
import config from '@payload-config'

/**
 * Get the Payload client instance
 * Uses a cached instance in development to avoid multiple instances
 */
export const getPayloadClient = async () => {
  return await getPayload({ config })
}

/**
 * Type-safe collection query helper
 */
export async function queryCollection<T = any>(
  collection: string,
  options?: {
    where?: any
    limit?: number
    page?: number
    depth?: number
    sort?: string
  }
) {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection,
    where: options?.where,
    limit: options?.limit || 10,
    page: options?.page || 1,
    depth: options?.depth || 1,
    sort: options?.sort,
  })

  return result as unknown as {
    docs: T[]
    totalDocs: number
    totalPages: number
    page: number
    limit: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

/**
 * Find a single document by slug
 */
export async function findBySlug<T = any>(
  collection: string,
  slug: string,
  depth: number = 2
) {
  const payload = await getPayloadClient()

  const result = await payload.find({
    collection,
    where: {
      slug: { equals: slug },
    },
    limit: 1,
    depth,
  })

  return result.docs[0] as T | undefined
}

/**
 * Find a single document by ID
 */
export async function findById<T = any>(
  collection: string,
  id: string | number,
  depth: number = 2
) {
  const payload = await getPayloadClient()

  const result = await payload.findByID({
    collection,
    id,
    depth,
  })

  return result as T
}

/**
 * Get global data
 */
export async function getGlobal<T = any>(
  slug: string,
  depth: number = 2
) {
  const payload = await getPayloadClient()

  const result = await payload.findGlobal({
    slug,
    depth,
  })

  return result as T
}

/**
 * Search across collections
 */
export async function searchCollections(
  query: string,
  collections: string[] = ['pages', 'posts', 'services']
) {
  const payload = await getPayloadClient()
  const results = []

  for (const collection of collections) {
    try {
      const result = await payload.find({
        collection,
        where: {
          or: [
            {
              title: {
                contains: query,
              },
            },
            {
              description: {
                contains: query,
              },
            },
          ],
        },
        limit: 5,
        depth: 0,
      })

      if (result.docs.length > 0) {
        results.push({
          collection,
          docs: result.docs,
        })
      }
    } catch (error) {
      console.error(`Error searching ${collection}:`, error)
    }
  }

  return results
}

/**
 * Revalidate paths after content updates
 */
export async function revalidateContent(paths: string[]) {
  if (typeof window === 'undefined') {
    const { revalidatePath } = await import('next/cache')

    for (const path of paths) {
      try {
        revalidatePath(path)
      } catch (error) {
        console.error(`Error revalidating ${path}:`, error)
      }
    }
  }
}

/**
 * Cache tags for on-demand revalidation
 */
export const CACHE_TAGS = {
  pages: 'pages',
  posts: 'posts',
  services: 'services',
  settings: 'settings',
  media: 'media',
} as const

/**
 * Generate cache tags for a collection
 */
export function getCacheTags(collection: string, id?: string | number) {
  const tags = [collection]

  if (id) {
    tags.push(`${collection}-${id}`)
  }

  return tags
}
