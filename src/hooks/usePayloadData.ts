/**
 * Custom hooks for fetching data from PayloadCMS
 * Provides reusable data fetching logic with TypeScript support
 */

import { useEffect, useState } from 'react'
import type {
  Service,
  BlogPost,
  Testimonial,
  ServiceArea,
  Page,
  Settings,
  PaginatedResponse,
} from '@/payload-types'

interface FetchState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

/**
 * Generic fetch hook for client-side data fetching
 */
function useFetch<T>(url: string | null): FetchState<T> {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: true,
    error: null,
  })

  useEffect(() => {
    if (!url) {
      setState({ data: null, loading: false, error: null })
      return
    }

    let cancelled = false

    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }))

        const response = await fetch(url)

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        if (!cancelled) {
          setState({ data, loading: false, error: null })
        }
      } catch (error) {
        if (!cancelled) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error : new Error('Unknown error'),
          })
        }
      }
    }

    fetchData()

    return () => {
      cancelled = true
    }
  }, [url])

  return state
}

/**
 * Fetch all published services
 */
export function useServices(limit?: number) {
  const url = limit
    ? `/api/services?limit=${limit}&where[status][equals]=published`
    : '/api/services?where[status][equals]=published'

  return useFetch<PaginatedResponse<Service>>(url)
}

/**
 * Fetch a single service by slug
 */
export function useService(slug: string | null) {
  const url = slug
    ? `/api/services?where[slug][equals]=${slug}&where[status][equals]=published&limit=1`
    : null

  const result = useFetch<PaginatedResponse<Service>>(url)

  return {
    data: result.data?.docs[0] || null,
    loading: result.loading,
    error: result.error,
  }
}

/**
 * Fetch all published blog posts
 */
export function useBlogPosts(params?: { limit?: number; category?: string }) {
  let url = '/api/blog-posts?where[status][equals]=published&sort=-publishedDate'

  if (params?.limit) {
    url += `&limit=${params.limit}`
  }

  if (params?.category) {
    url += `&where[categories.category][equals]=${params.category}`
  }

  return useFetch<PaginatedResponse<BlogPost>>(url)
}

/**
 * Fetch a single blog post by slug
 */
export function useBlogPost(slug: string | null) {
  const url = slug
    ? `/api/blog-posts?where[slug][equals]=${slug}&where[status][equals]=published&limit=1`
    : null

  const result = useFetch<PaginatedResponse<BlogPost>>(url)

  return {
    data: result.data?.docs[0] || null,
    loading: result.loading,
    error: result.error,
  }
}

/**
 * Fetch all published testimonials
 */
export function useTestimonials(featured?: boolean) {
  let url = '/api/testimonials?where[status][equals]=published&sort=-date'

  if (featured) {
    url += '&where[featured][equals]=true'
  }

  return useFetch<PaginatedResponse<Testimonial>>(url)
}

/**
 * Fetch all published service areas
 */
export function useServiceAreas() {
  const url = '/api/service-areas?where[status][equals]=published'
  return useFetch<PaginatedResponse<ServiceArea>>(url)
}

/**
 * Fetch a single service area by slug
 */
export function useServiceArea(slug: string | null) {
  const url = slug
    ? `/api/service-areas?where[slug][equals]=${slug}&where[status][equals]=published&limit=1`
    : null

  const result = useFetch<PaginatedResponse<ServiceArea>>(url)

  return {
    data: result.data?.docs[0] || null,
    loading: result.loading,
    error: result.error,
  }
}

/**
 * Fetch a page by slug
 */
export function usePage(slug: string) {
  const url = `/api/pages?where[slug][equals]=${slug}&where[status][equals]=published&limit=1`

  const result = useFetch<PaginatedResponse<Page>>(url)

  return {
    data: result.data?.docs[0] || null,
    loading: result.loading,
    error: result.error,
  }
}

/**
 * Fetch site settings (global)
 */
export function useSettings() {
  return useFetch<Settings>('/api/globals/settings')
}

/**
 * Hook for paginated data with load more functionality
 */
export function usePaginatedData<T>(
  baseUrl: string,
  initialLimit: number = 10
) {
  const [page, setPage] = useState(1)
  const [allData, setAllData] = useState<T[]>([])
  const [hasMore, setHasMore] = useState(true)

  const url = `${baseUrl}&limit=${initialLimit}&page=${page}`
  const { data, loading, error } = useFetch<PaginatedResponse<T>>(url)

  useEffect(() => {
    if (data?.docs) {
      setAllData((prev) => (page === 1 ? data.docs : [...prev, ...data.docs]))
      setHasMore(data.hasNextPage)
    }
  }, [data, page])

  const loadMore = () => {
    if (hasMore && !loading) {
      setPage((prev) => prev + 1)
    }
  }

  const reset = () => {
    setPage(1)
    setAllData([])
    setHasMore(true)
  }

  return {
    data: allData,
    loading,
    error,
    hasMore,
    loadMore,
    reset,
  }
}
