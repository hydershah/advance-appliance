import type { Endpoint } from 'payload'
import { verifyAPIKey } from '../access'

/**
 * Blog API Endpoints for External Posting
 *
 * These endpoints allow external applications to manage blog posts
 * via API key authentication.
 *
 * Endpoints:
 * - POST   /api/blog - Create new blog post
 * - GET    /api/blog - List all posts with pagination
 * - GET    /api/blog/:slug - Get single post by slug
 * - PUT    /api/blog/:slug - Update post by slug
 * - DELETE /api/blog/:slug - Delete post by slug
 *
 * Authentication: X-API-Key header
 */

interface BlogPostCreate {
  title: string
  slug?: string
  content: any
  excerpt?: string
  status?: 'draft' | 'published'
  author?: string
  featuredImage?: string | number
  categories?: Array<{ category: string }>
  tags?: Array<{ tag: string }>
  publishedDate?: string
}

interface BlogPostUpdate extends Partial<BlogPostCreate> {}

/**
 * Verify API key middleware
 */
const authenticateAPIKey = (req: any): boolean => {
  const apiKey = req.headers['x-api-key']
  return verifyAPIKey(apiKey)
}

/**
 * Create blog post endpoint
 * POST /api/blog
 */
export const createBlogPost: Endpoint = {
  path: '/blog',
  method: 'post',
  handler: async (req) => {
    try {
      // Verify API key
      if (!authenticateAPIKey(req)) {
        return Response.json(
          {
            error: {
              code: 'UNAUTHORIZED',
              message: 'Invalid or missing API key',
            },
          },
          { status: 401 }
        )
      }

      const body: BlogPostCreate = await req.json()

      // Validate required fields
      if (!body.title || !body.content) {
        return Response.json(
          {
            error: {
              code: 'VALIDATION_ERROR',
              message: 'Missing required fields',
              details: [
                { field: 'title', message: 'Title is required' },
                { field: 'content', message: 'Content is required' },
              ],
            },
          },
          { status: 400 }
        )
      }

      // Create the blog post
      const post = await req.payload.create({
        collection: 'blog-posts',
        data: {
          title: body.title,
          slug: body.slug,
          content: body.content,
          excerpt: body.excerpt,
          status: body.status || 'draft',
          author: body.author,
          featuredImage: body.featuredImage,
          categories: body.categories,
          tags: body.tags,
          publishedDate: body.publishedDate || (body.status === 'published' ? new Date().toISOString() : undefined),
        },
      })

      return Response.json(
        {
          data: post,
          meta: {
            message: 'Blog post created successfully',
          },
        },
        { status: 201 }
      )
    } catch (error) {
      req.payload.logger.error('Error creating blog post:', error)
      return Response.json(
        {
          error: {
            code: 'INTERNAL_ERROR',
            message: error instanceof Error ? error.message : 'Failed to create blog post',
          },
        },
        { status: 500 }
      )
    }
  },
}

/**
 * List blog posts endpoint
 * GET /api/blog?page=1&limit=10&status=published
 */
export const listBlogPosts: Endpoint = {
  path: '/blog',
  method: 'get',
  handler: async (req) => {
    try {
      // API key required for listing all posts (including drafts)
      const isAuthenticated = authenticateAPIKey(req)

      const url = new URL(req.url)
      const page = parseInt(url.searchParams.get('page') || '1')
      const limit = parseInt(url.searchParams.get('limit') || '10')
      const status = url.searchParams.get('status')

      // Build query
      const where: any = {}

      if (status) {
        where.status = { equals: status }
      } else if (!isAuthenticated) {
        // Non-authenticated requests only see published posts
        where.status = { equals: 'published' }
      }

      const posts = await req.payload.find({
        collection: 'blog-posts',
        where,
        page,
        limit,
        sort: '-publishedDate',
      })

      return Response.json(
        {
          data: posts.docs,
          meta: {
            page: posts.page,
            limit: posts.limit,
            totalPages: posts.totalPages,
            totalDocs: posts.totalDocs,
            hasNextPage: posts.hasNextPage,
            hasPrevPage: posts.hasPrevPage,
          },
        },
        { status: 200 }
      )
    } catch (error) {
      req.payload.logger.error('Error listing blog posts:', error)
      return Response.json(
        {
          error: {
            code: 'INTERNAL_ERROR',
            message: error instanceof Error ? error.message : 'Failed to list blog posts',
          },
        },
        { status: 500 }
      )
    }
  },
}

/**
 * Get single blog post endpoint
 * GET /api/blog/:slug
 */
export const getBlogPost: Endpoint = {
  path: '/blog/:slug',
  method: 'get',
  handler: async (req) => {
    try {
      const isAuthenticated = authenticateAPIKey(req)
      const slug = req.routeParams?.slug

      if (!slug) {
        return Response.json(
          {
            error: {
              code: 'BAD_REQUEST',
              message: 'Slug parameter is required',
            },
          },
          { status: 400 }
        )
      }

      // Build query
      const where: any = { slug: { equals: slug } }

      if (!isAuthenticated) {
        where.status = { equals: 'published' }
      }

      const posts = await req.payload.find({
        collection: 'blog-posts',
        where,
        limit: 1,
      })

      if (!posts.docs.length) {
        return Response.json(
          {
            error: {
              code: 'NOT_FOUND',
              message: 'Blog post not found',
            },
          },
          { status: 404 }
        )
      }

      return Response.json(
        {
          data: posts.docs[0],
        },
        { status: 200 }
      )
    } catch (error) {
      req.payload.logger.error('Error getting blog post:', error)
      return Response.json(
        {
          error: {
            code: 'INTERNAL_ERROR',
            message: error instanceof Error ? error.message : 'Failed to get blog post',
          },
        },
        { status: 500 }
      )
    }
  },
}

/**
 * Update blog post endpoint
 * PUT /api/blog/:slug
 */
export const updateBlogPost: Endpoint = {
  path: '/blog/:slug',
  method: 'put',
  handler: async (req) => {
    try {
      // Verify API key
      if (!authenticateAPIKey(req)) {
        return Response.json(
          {
            error: {
              code: 'UNAUTHORIZED',
              message: 'Invalid or missing API key',
            },
          },
          { status: 401 }
        )
      }

      const slug = req.routeParams?.slug

      if (!slug) {
        return Response.json(
          {
            error: {
              code: 'BAD_REQUEST',
              message: 'Slug parameter is required',
            },
          },
          { status: 400 }
        )
      }

      const body: BlogPostUpdate = await req.json()

      // Find the post by slug
      const posts = await req.payload.find({
        collection: 'blog-posts',
        where: {
          slug: { equals: slug },
        },
        limit: 1,
      })

      if (!posts.docs.length) {
        return Response.json(
          {
            error: {
              code: 'NOT_FOUND',
              message: 'Blog post not found',
            },
          },
          { status: 404 }
        )
      }

      const postId = posts.docs[0].id

      // Update the blog post
      const updatedPost = await req.payload.update({
        collection: 'blog-posts',
        id: postId,
        data: body,
      })

      return Response.json(
        {
          data: updatedPost,
          meta: {
            message: 'Blog post updated successfully',
          },
        },
        { status: 200 }
      )
    } catch (error) {
      req.payload.logger.error('Error updating blog post:', error)
      return Response.json(
        {
          error: {
            code: 'INTERNAL_ERROR',
            message: error instanceof Error ? error.message : 'Failed to update blog post',
          },
        },
        { status: 500 }
      )
    }
  },
}

/**
 * Delete blog post endpoint
 * DELETE /api/blog/:slug
 */
export const deleteBlogPost: Endpoint = {
  path: '/blog/:slug',
  method: 'delete',
  handler: async (req) => {
    try {
      // Verify API key
      if (!authenticateAPIKey(req)) {
        return Response.json(
          {
            error: {
              code: 'UNAUTHORIZED',
              message: 'Invalid or missing API key',
            },
          },
          { status: 401 }
        )
      }

      const slug = req.routeParams?.slug

      if (!slug) {
        return Response.json(
          {
            error: {
              code: 'BAD_REQUEST',
              message: 'Slug parameter is required',
            },
          },
          { status: 400 }
        )
      }

      // Find the post by slug
      const posts = await req.payload.find({
        collection: 'blog-posts',
        where: {
          slug: { equals: slug },
        },
        limit: 1,
      })

      if (!posts.docs.length) {
        return Response.json(
          {
            error: {
              code: 'NOT_FOUND',
              message: 'Blog post not found',
            },
          },
          { status: 404 }
        )
      }

      const postId = posts.docs[0].id

      // Delete the blog post
      await req.payload.delete({
        collection: 'blog-posts',
        id: postId,
      })

      return Response.json(
        {
          meta: {
            message: 'Blog post deleted successfully',
          },
        },
        { status: 204 }
      )
    } catch (error) {
      req.payload.logger.error('Error deleting blog post:', error)
      return Response.json(
        {
          error: {
            code: 'INTERNAL_ERROR',
            message: error instanceof Error ? error.message : 'Failed to delete blog post',
          },
        },
        { status: 500 }
      )
    }
  },
}

// Export all endpoints
export const blogEndpoints = [
  createBlogPost,
  listBlogPosts,
  getBlogPost,
  updateBlogPost,
  deleteBlogPost,
]
