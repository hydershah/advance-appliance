import { NextRequest } from 'next/server'
import { client } from '@/sanity/client'
import { writeClient } from '@/sanity/client'
import {
  successResponse,
  errorResponse,
  HttpStatus,
  validateApiKey,
  getPaginationParams,
  generateSlug,
  validateRequiredFields,
} from '@/utilities/apiHelpers'

interface CreateBlogPostInput {
  title: string
  content: string
  slug?: string
  author?: string
  excerpt?: string
  categories?: string[]
  tags?: string[]
  status?: 'published' | 'draft'
  publishedDate?: string
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
}

/**
 * GET /api/blog
 * List blog posts with pagination and optional filtering
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const { page, limit } = getPaginationParams(searchParams)

    const category = searchParams.get('category')
    const tag = searchParams.get('tag')

    // Build GROQ filter
    let filter = `_type == "blogPost"`

    // Only allow status filtering for authenticated requests
    const apiKey = request.headers.get('x-api-key')
    if (apiKey && validateApiKey(request)) {
      const statusFilter = searchParams.get('status')
      if (statusFilter === 'draft') {
        filter += ` && status == "draft"`
      } else if (statusFilter === 'published') {
        filter += ` && status == "published"`
      }
      // 'all' = no status filter
    } else {
      filter += ` && status == "published"`
    }

    if (category) {
      filter += ` && "${category}" in categories`
    }

    if (tag) {
      filter += ` && "${tag}" in tags`
    }

    const start = (page - 1) * limit
    const end = start + limit

    const [posts, total] = await Promise.all([
      client.fetch(
        `*[${filter}] | order(publishedDate desc) [${start}...${end}]{
          _id, title, slug, excerpt, author, publishedDate,
          featuredImage{..., asset->}, categories, tags
        }`
      ),
      client.fetch(`count(*[${filter}])`),
    ])

    const transformedPosts = posts.map((doc: Record<string, unknown>) => ({
      id: doc._id,
      title: doc.title,
      slug: typeof doc.slug === 'object' && doc.slug !== null ? (doc.slug as { current: string }).current : doc.slug,
      excerpt: doc.excerpt,
      author: doc.author,
      publishedDate: doc.publishedDate,
      featuredImage: doc.featuredImage
        ? {
            url: (doc.featuredImage as { asset?: { url?: string } })?.asset?.url || null,
            alt: '',
          }
        : null,
      categories: (doc.categories as string[]) || [],
      tags: (doc.tags as string[]) || [],
    }))

    return successResponse(transformedPosts, {
      page,
      limit,
      total,
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
 */
export async function POST(request: NextRequest) {
  try {
    if (!validateApiKey(request)) {
      return errorResponse(
        'UNAUTHORIZED',
        'Invalid or missing API key',
        HttpStatus.UNAUTHORIZED,
      )
    }

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

    const { valid, missing } = validateRequiredFields(body, ['title', 'content'])
    if (!valid) {
      return errorResponse(
        'VALIDATION_ERROR',
        'Missing required fields',
        HttpStatus.UNPROCESSABLE_ENTITY,
        missing.map((field) => ({ field, message: `${field} is required` })),
      )
    }

    const slug = body.slug || generateSlug(body.title)

    // Check for duplicate slug
    const existing = await client.fetch(
      `count(*[_type == "blogPost" && slug.current == $slug])`,
      { slug },
    )

    if (existing > 0) {
      return errorResponse(
        'DUPLICATE_SLUG',
        'A blog post with this slug already exists',
        HttpStatus.CONFLICT,
        [{ field: 'slug', message: 'Slug must be unique' }],
      )
    }

    // Create the blog post via Sanity mutation
    const post = await writeClient.create({
      _type: 'blogPost',
      title: body.title,
      slug: { _type: 'slug', current: slug },
      author: body.author || null,
      excerpt: body.excerpt || null,
      content: [
        {
          _type: 'block',
          _key: Math.random().toString(36).substring(2, 9),
          style: 'normal',
          markDefs: [],
          children: [
            {
              _type: 'span',
              _key: Math.random().toString(36).substring(2, 9),
              text: body.content,
              marks: [],
            },
          ],
        },
      ],
      categories: body.categories || [],
      tags: body.tags || [],
      status: body.status || 'draft',
      publishedDate:
        body.publishedDate ||
        (body.status === 'published' ? new Date().toISOString() : null),
      seo: body.meta
        ? {
            title: body.meta.title,
            description: body.meta.description,
            keywords: body.meta.keywords,
          }
        : undefined,
    })

    return successResponse(
      {
        id: post._id,
        title: post.title,
        slug: slug,
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
