import { NextRequest } from 'next/server'
import type { Where } from 'payload'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import {
  successResponse,
  errorResponse,
  HttpStatus,
  validateApiKey,
  getPaginationParams,
  generateSlug,
  validateRequiredFields,
} from '@/utilities/apiHelpers'
import type { CreateBlogPostInput, BlogPostListItem } from '@/payload-types'

/**
 * GET /api/blog
 * List blog posts with pagination and optional filtering
 *
 * Query Parameters:
 * - page: Page number (default: 1)
 * - limit: Items per page (default: 10, max: 100)
 * - category: Filter by category
 * - tag: Filter by tag
 * - status: Filter by status (published/draft) - requires auth
 *
 * Response: Paginated list of blog posts
 */
export async function GET(request: NextRequest) {
  try {
    const payload = await getPayloadClient()
    const searchParams = request.nextUrl.searchParams
    const { page, limit } = getPaginationParams(searchParams)

    const category = searchParams.get('category')
    const tag = searchParams.get('tag')

    // Build query conditions
    const where: Where = {
      status: { equals: 'published' },
    }

    // Only allow status filtering for authenticated requests
    const apiKey = request.headers.get('x-api-key')
    if (apiKey && validateApiKey(request)) {
      const statusFilter = searchParams.get('status')
      if (statusFilter === 'draft' || statusFilter === 'published') {
        where.status = { equals: statusFilter }
      } else if (statusFilter === 'all') {
        delete where.status
      }
    }

    // Category filter
    if (category) {
      where['categories.category'] = { contains: category }
    }

    // Tag filter
    if (tag) {
      where['tags.tag'] = { contains: tag }
    }

    const result = await payload.find({
      collection: 'blog-posts',
      where,
      page,
      limit,
      sort: '-publishedDate',
      depth: 1,
    })

    // Transform docs to list items
    const posts: BlogPostListItem[] = result.docs.map((doc) => ({
      id: doc.id,
      title: doc.title,
      slug: doc.slug,
      excerpt: doc.excerpt,
      author: doc.author,
      publishedDate: doc.publishedDate,
      featuredImage: doc.featuredImage
        ? {
            url: typeof doc.featuredImage === 'object' ? doc.featuredImage.url : null,
            alt: typeof doc.featuredImage === 'object' ? doc.featuredImage.alt : '',
          }
        : null,
      categories: doc.categories?.map((c: { category: string }) => c.category) || [],
      tags: doc.tags?.map((t: { tag: string }) => t.tag) || [],
    }))

    return successResponse(posts, {
      page: result.page,
      limit: result.limit,
      total: result.totalDocs,
    })
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return errorResponse(
      'INTERNAL_ERROR',
      'An error occurred while fetching blog posts',
      HttpStatus.INTERNAL_SERVER_ERROR,
    )
  }
}

/**
 * POST /api/blog
 * Create a new blog post
 *
 * Headers:
 * - x-api-key: API key for authentication (required)
 *
 * Body: CreateBlogPostInput
 *
 * Response: Created blog post
 */
export async function POST(request: NextRequest) {
  try {
    // Validate API key
    if (!validateApiKey(request)) {
      return errorResponse(
        'UNAUTHORIZED',
        'Invalid or missing API key',
        HttpStatus.UNAUTHORIZED,
      )
    }

    // Parse request body
    let body: CreateBlogPostInput
    try {
      body = await request.json()
    } catch {
      return errorResponse(
        'INVALID_JSON',
        'Request body must be valid JSON',
        HttpStatus.BAD_REQUEST,
      )
    }

    // Validate required fields
    const { valid, missing } = validateRequiredFields(body, ['title', 'content'])
    if (!valid) {
      return errorResponse(
        'VALIDATION_ERROR',
        'Missing required fields',
        HttpStatus.UNPROCESSABLE_ENTITY,
        missing.map((field) => ({ field, message: `${field} is required` })),
      )
    }

    const payload = await getPayloadClient()

    // Generate slug if not provided
    const slug = body.slug || generateSlug(body.title)

    // Check for duplicate slug
    const existingPost = await payload.find({
      collection: 'blog-posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (existingPost.docs.length > 0) {
      return errorResponse(
        'DUPLICATE_SLUG',
        'A blog post with this slug already exists',
        HttpStatus.CONFLICT,
        [{ field: 'slug', message: 'Slug must be unique' }],
      )
    }

    // Create the blog post
    const post = await payload.create({
      collection: 'blog-posts',
      data: {
        title: body.title,
        slug,
        author: body.author || null,
        excerpt: body.excerpt || null,
        content: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                version: 1,
                children: [
                  {
                    type: 'text',
                    text: body.content,
                    version: 1,
                  },
                ],
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        categories: body.categories?.map((category) => ({ category })) || [],
        tags: body.tags?.map((tag) => ({ tag })) || [],
        status: body.status || 'draft',
        publishedDate: body.publishedDate || (body.status === 'published' ? new Date().toISOString() : null),
        meta: body.meta
          ? {
              seo: {
                title: body.meta.title,
                description: body.meta.description,
                keywords: body.meta.keywords,
              },
            }
          : undefined,
      },
    })

    return successResponse(
      {
        id: post.id,
        title: post.title,
        slug: post.slug,
        status: post.status,
        publishedDate: post.publishedDate,
      },
      undefined,
      HttpStatus.CREATED,
    )
  } catch (error) {
    console.error('Error creating blog post:', error)
    return errorResponse(
      'INTERNAL_ERROR',
      'An error occurred while creating the blog post',
      HttpStatus.INTERNAL_SERVER_ERROR,
    )
  }
}
