import { NextRequest } from 'next/server'
import type { Where } from 'payload'
import { getPayloadClient } from '@/utilities/getPayloadClient'
import {
  successResponse,
  errorResponse,
  HttpStatus,
  validateApiKey,
} from '@/utilities/apiHelpers'
import type { BlogPostDetail, BlogPostListItem, BlogPost } from '@/payload-types'

type RouteParams = {
  params: Promise<{ slug: string }>
}

/**
 * GET /api/blog/[slug]
 * Get a single blog post by slug
 *
 * Path Parameters:
 * - slug: The blog post slug
 *
 * Query Parameters:
 * - draft: Include draft posts (requires API key auth)
 *
 * Response: Full blog post with content and related posts
 */
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params

    if (!slug) {
      return errorResponse(
        'MISSING_SLUG',
        'Blog post slug is required',
        HttpStatus.BAD_REQUEST,
      )
    }

    const payload = await getPayloadClient()

    // Check if requesting draft
    const includeDrafts =
      request.nextUrl.searchParams.get('draft') === 'true' && validateApiKey(request)

    // Build query
    const where: Where = {
      slug: { equals: slug },
    }

    if (!includeDrafts) {
      where.status = { equals: 'published' }
    }

    const result = await payload.find({
      collection: 'blog-posts',
      where,
      depth: 2,
      limit: 1,
    })

    if (result.docs.length === 0) {
      return errorResponse(
        'NOT_FOUND',
        `Blog post with slug "${slug}" not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    const doc = result.docs[0]

    // Transform related posts
    const relatedPosts: BlogPostListItem[] = ((doc.relatedPosts || []) as (string | BlogPost)[])
      .filter((post): post is BlogPost => typeof post === 'object' && post !== null && 'id' in post)
      .map((post) => ({
        id: post.id,
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt,
        author: post.author,
        publishedDate: post.publishedDate,
        featuredImage: post.featuredImage
          ? {
              url: typeof post.featuredImage === 'object' ? post.featuredImage.url : null,
              alt: typeof post.featuredImage === 'object' ? post.featuredImage.alt : '',
            }
          : null,
        categories: post.categories?.map((c) => c.category) || [],
        tags: post.tags?.map((t) => t.tag) || [],
      }))

    // Build response
    const blogPost: BlogPostDetail = {
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
      content: doc.content,
      meta: doc.meta,
      relatedPosts,
    }

    return successResponse(blogPost)
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return errorResponse(
      'INTERNAL_ERROR',
      'An error occurred while fetching the blog post',
      HttpStatus.INTERNAL_SERVER_ERROR,
    )
  }
}

/**
 * PATCH /api/blog/[slug]
 * Update an existing blog post
 *
 * Headers:
 * - x-api-key: API key for authentication (required)
 *
 * Path Parameters:
 * - slug: The blog post slug
 *
 * Body: Partial blog post fields to update
 *
 * Response: Updated blog post
 */
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    // Validate API key
    if (!validateApiKey(request)) {
      return errorResponse(
        'UNAUTHORIZED',
        'Invalid or missing API key',
        HttpStatus.UNAUTHORIZED,
      )
    }

    const { slug } = await params

    if (!slug) {
      return errorResponse(
        'MISSING_SLUG',
        'Blog post slug is required',
        HttpStatus.BAD_REQUEST,
      )
    }

    // Parse request body
    let body: Record<string, unknown>
    try {
      body = await request.json()
    } catch {
      return errorResponse(
        'INVALID_JSON',
        'Request body must be valid JSON',
        HttpStatus.BAD_REQUEST,
      )
    }

    const payload = await getPayloadClient()

    // Find the existing post
    const existing = await payload.find({
      collection: 'blog-posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (existing.docs.length === 0) {
      return errorResponse(
        'NOT_FOUND',
        `Blog post with slug "${slug}" not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    const postId = existing.docs[0].id

    // Build update data
    const updateData: Record<string, unknown> = {}

    if (body.title !== undefined) updateData.title = body.title
    if (body.author !== undefined) updateData.author = body.author
    if (body.excerpt !== undefined) updateData.excerpt = body.excerpt
    if (body.status !== undefined) updateData.status = body.status
    if (body.publishedDate !== undefined) updateData.publishedDate = body.publishedDate

    // Handle content update
    if (body.content !== undefined && typeof body.content === 'string') {
      updateData.content = {
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
      }
    }

    // Handle categories update
    if (body.categories !== undefined && Array.isArray(body.categories)) {
      updateData.categories = body.categories.map((category: string) => ({ category }))
    }

    // Handle tags update
    if (body.tags !== undefined && Array.isArray(body.tags)) {
      updateData.tags = body.tags.map((tag: string) => ({ tag }))
    }

    // Handle meta update
    if (body.meta !== undefined && typeof body.meta === 'object') {
      const meta = body.meta as Record<string, unknown>
      updateData.meta = {
        seo: {
          title: meta.title,
          description: meta.description,
          keywords: meta.keywords,
        },
      }
    }

    // Update the post
    const updated = await payload.update({
      collection: 'blog-posts',
      id: postId,
      data: updateData,
    })

    return successResponse({
      id: updated.id,
      title: updated.title,
      slug: updated.slug,
      status: updated.status,
      publishedDate: updated.publishedDate,
      updatedAt: updated.updatedAt,
    })
  } catch (error) {
    console.error('Error updating blog post:', error)
    return errorResponse(
      'INTERNAL_ERROR',
      'An error occurred while updating the blog post',
      HttpStatus.INTERNAL_SERVER_ERROR,
    )
  }
}

/**
 * DELETE /api/blog/[slug]
 * Delete a blog post
 *
 * Headers:
 * - x-api-key: API key for authentication (required)
 *
 * Path Parameters:
 * - slug: The blog post slug
 *
 * Response: 204 No Content on success
 */
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    // Validate API key
    if (!validateApiKey(request)) {
      return errorResponse(
        'UNAUTHORIZED',
        'Invalid or missing API key',
        HttpStatus.UNAUTHORIZED,
      )
    }

    const { slug } = await params

    if (!slug) {
      return errorResponse(
        'MISSING_SLUG',
        'Blog post slug is required',
        HttpStatus.BAD_REQUEST,
      )
    }

    const payload = await getPayloadClient()

    // Find the existing post
    const existing = await payload.find({
      collection: 'blog-posts',
      where: { slug: { equals: slug } },
      limit: 1,
    })

    if (existing.docs.length === 0) {
      return errorResponse(
        'NOT_FOUND',
        `Blog post with slug "${slug}" not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    const postId = existing.docs[0].id

    // Delete the post
    await payload.delete({
      collection: 'blog-posts',
      id: postId,
    })

    return new Response(null, { status: HttpStatus.NO_CONTENT })
  } catch (error) {
    console.error('Error deleting blog post:', error)
    return errorResponse(
      'INTERNAL_ERROR',
      'An error occurred while deleting the blog post',
      HttpStatus.INTERNAL_SERVER_ERROR,
    )
  }
}
