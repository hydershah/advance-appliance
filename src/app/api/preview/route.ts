import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

/**
 * GET /api/preview
 * Enable draft mode for previewing unpublished content
 *
 * Query Parameters:
 * - secret: Preview secret for authentication (required)
 * - slug: The slug of the page to preview (required)
 * - collection: The collection type (optional, defaults to 'pages')
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const secret = searchParams.get('secret')
  const slug = searchParams.get('slug')
  const collection = searchParams.get('collection') || 'pages'

  // Validate secret
  if (secret !== process.env.PREVIEW_SECRET) {
    return new Response('Invalid preview secret', { status: 401 })
  }

  // Validate slug
  if (!slug) {
    return new Response('Slug parameter is required', { status: 400 })
  }

  // Sanitize slug: alphanumeric + hyphen + underscore only, max 100 chars.
  // Defense in depth: even though the route is gated by PREVIEW_SECRET, do
  // not let a slug like `../../admin` or `//evil.com/x` traverse paths or
  // build an off-origin redirect.
  const safeSlug = slug.replace(/[^a-zA-Z0-9\-_]/g, '').slice(0, 100)
  if (!safeSlug) {
    return new Response('Invalid slug', { status: 400 })
  }

  // Enable draft mode
  const draft = await draftMode()
  draft.enable()

  // Determine redirect path based on collection
  let redirectPath = '/'

  switch (collection) {
    case 'pages':
      redirectPath = safeSlug === 'home' ? '/' : `/${safeSlug}`
      break
    case 'services':
      redirectPath = `/services/${safeSlug}`
      break
    case 'service-areas':
      redirectPath = `/areas/${safeSlug}`
      break
    case 'blog-posts':
      redirectPath = `/blog/${safeSlug}`
      break
    default:
      redirectPath = `/${safeSlug}`
  }

  // Redirect to the page
  redirect(redirectPath)
}
