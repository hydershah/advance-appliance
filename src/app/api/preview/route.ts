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

  // Enable draft mode
  const draft = await draftMode()
  draft.enable()

  // Determine redirect path based on collection
  let redirectPath = '/'

  switch (collection) {
    case 'pages':
      redirectPath = slug === 'home' ? '/' : `/${slug}`
      break
    case 'services':
      redirectPath = `/services/${slug}`
      break
    case 'service-areas':
      redirectPath = `/service-areas/${slug}`
      break
    case 'blog-posts':
      redirectPath = `/blog/${slug}`
      break
    default:
      redirectPath = `/${slug}`
  }

  // Redirect to the page
  redirect(redirectPath)
}
