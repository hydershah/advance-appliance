import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from './env'

// Validate projectId format (a-z, 0-9, dashes only)
const isValidProjectId = /^[a-z0-9-]+$/.test(projectId)

function buildClient(options: Parameters<typeof createClient>[0]) {
  if (!isValidProjectId) {
    // Return a dummy client that throws descriptive errors on fetch
    return {
      fetch: async () => {
        console.warn('Sanity client not configured — set NEXT_PUBLIC_SANITY_PROJECT_ID in .env')
        return null
      },
      create: async () => {
        throw new Error('Sanity write client not configured — set NEXT_PUBLIC_SANITY_PROJECT_ID in .env')
      },
      patch: () => ({
        set: () => ({
          commit: async () => {
            throw new Error('Sanity write client not configured')
          },
        }),
      }),
      delete: async () => {
        throw new Error('Sanity write client not configured')
      },
    } as unknown as ReturnType<typeof createClient>
  }
  return createClient(options)
}

export const client = buildClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

// Client with auth token for mutations and draft content
export const writeClient = buildClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
})

// Client for preview/draft mode
export const previewClient = buildClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  perspective: 'previewDrafts',
})
