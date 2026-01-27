import { NextRequest } from 'next/server'
import { client, writeClient } from '@/sanity/client'
import {
  successResponse,
  errorResponse,
  HttpStatus,
  validateApiKey,
} from '@/utilities/apiHelpers'

type RouteParams = {
  params: Promise<{ slug: string }>
}

/**
 * GET /api/blog/[slug]
 * Get a single blog post by slug
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

    const includeDrafts =
      request.nextUrl.searchParams.get('draft') === 'true' && validateApiKey(request)

    let filter = `_type == "blogPost" && slug.current == $slug`
    if (!includeDrafts) {
      filter += ` && status == "published"`
    }

    const doc = await client.fetch(
      `*[${filter}][0]{
        ...,
        featuredImage{..., asset->},
        relatedPosts[]->{
          _id, title, slug, excerpt, featuredImage{..., asset->}, publishedDate, author, categories, tags
        },
        seo{..., image{..., asset->}}
      }`,
      { slug },
    )

    if (!doc) {
      return errorResponse(
        'NOT_FOUND',
        `Blog post with slug "${slug}" not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    const relatedPosts = (doc.relatedPosts || []).map((post: Record<string, unknown>) => ({
      id: post._id,
      title: post.title,
      slug: typeof post.slug === 'object' && post.slug !== null ? (post.slug as { current: string }).current : post.slug,
      excerpt: post.excerpt,
      author: post.author,
      publishedDate: post.publishedDate,
      featuredImage: post.featuredImage
        ? {
            url: (post.featuredImage as { asset?: { url?: string } })?.asset?.url || null,
            alt: '',
          }
        : null,
      categories: (post.categories as string[]) || [],
      tags: (post.tags as string[]) || [],
    }))

    const blogPost = {
      id: doc._id,
      title: doc.title,
      slug: typeof doc.slug === 'object' ? doc.slug.current : doc.slug,
      excerpt: doc.excerpt,
      author: doc.author,
      publishedDate: doc.publishedDate,
      featuredImage: doc.featuredImage
        ? {
            url: doc.featuredImage?.asset?.url || null,
            alt: '',
          }
        : null,
      categories: doc.categories || [],
      tags: doc.tags || [],
      content: doc.content,
      seo: doc.seo,
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
 */
export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
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

    // Find the existing post
    const existing = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]{ _id }`,
      { slug },
    )

    if (!existing) {
      return errorResponse(
        'NOT_FOUND',
        `Blog post with slug "${slug}" not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    const postId = existing._id

    // Build patch operations
    const patch: Record<string, unknown> = {}

    if (body.title !== undefined) patch.title = body.title
    if (body.author !== undefined) patch.author = body.author
    if (body.excerpt !== undefined) patch.excerpt = body.excerpt
    if (body.status !== undefined) patch.status = body.status
    if (body.publishedDate !== undefined) patch.publishedDate = body.publishedDate

    // Handle content update (convert string to Portable Text)
    if (body.content !== undefined && typeof body.content === 'string') {
      patch.content = [
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
      ]
    }

    if (body.categories !== undefined && Array.isArray(body.categories)) {
      patch.categories = body.categories
    }

    if (body.tags !== undefined && Array.isArray(body.tags)) {
      patch.tags = body.tags
    }

    if (body.meta !== undefined && typeof body.meta === 'object') {
      const meta = body.meta as Record<string, unknown>
      patch.seo = {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
      }
    }

    const updated = await writeClient.patch(postId).set(patch).commit()

    return successResponse({
      id: updated._id,
      title: updated.title,
      slug: typeof updated.slug === 'object' ? updated.slug.current : updated.slug,
      status: updated.status,
      publishedDate: updated.publishedDate,
      updatedAt: updated._updatedAt,
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
 */
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
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

    const existing = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]{ _id }`,
      { slug },
    )

    if (!existing) {
      return errorResponse(
        'NOT_FOUND',
        `Blog post with slug "${slug}" not found`,
        HttpStatus.NOT_FOUND,
      )
    }

    await writeClient.delete(existing._id)

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
