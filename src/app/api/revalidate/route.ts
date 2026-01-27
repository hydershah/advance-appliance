import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * On-demand revalidation endpoint for ISR pages
 *
 * GET /api/revalidate?path=/&secret=xxx
 * POST /api/revalidate (Sanity webhook payload)
 */

// GET handler for manual revalidation
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const path = searchParams.get('path')
  const secret = searchParams.get('secret')

  // Validate secret
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { error: 'Invalid revalidation secret' },
      { status: 401 },
    )
  }

  // Validate path
  if (!path) {
    return NextResponse.json(
      { error: 'Path parameter is required' },
      { status: 400 },
    )
  }

  try {
    revalidatePath(path)

    return NextResponse.json({
      revalidated: true,
      path,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { error: 'Failed to revalidate path' },
      { status: 500 },
    )
  }
}

// POST handler for Sanity webhook
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate webhook secret via header or body
    const secret = request.headers.get('x-sanity-webhook-secret') || body?.secret
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json(
        { error: 'Invalid revalidation secret' },
        { status: 401 },
      )
    }

    const { _type, slug } = body || {}

    // Determine which paths to revalidate based on document type
    const pathsToRevalidate: string[] = ['/']

    switch (_type) {
      case 'page':
        if (slug?.current && slug.current !== 'home') {
          pathsToRevalidate.push(`/${slug.current}`)
        }
        break
      case 'service':
        pathsToRevalidate.push('/services')
        if (slug?.current) {
          pathsToRevalidate.push(`/services/${slug.current}`)
        }
        break
      case 'serviceArea':
        pathsToRevalidate.push('/service-areas')
        if (slug?.current) {
          pathsToRevalidate.push(`/areas/${slug.current}`)
        }
        break
      case 'blogPost':
        pathsToRevalidate.push('/blog')
        if (slug?.current) {
          pathsToRevalidate.push(`/blog/${slug.current}`)
        }
        break
      case 'settings':
        // Settings affect all pages
        pathsToRevalidate.push('/services', '/blog', '/service-areas', '/contact', '/about')
        break
      default:
        // Revalidate home page for any unknown type
        break
    }

    // Revalidate all identified paths
    for (const path of pathsToRevalidate) {
      revalidatePath(path)
    }

    return NextResponse.json({
      revalidated: true,
      paths: pathsToRevalidate,
      timestamp: new Date().toISOString(),
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json(
      { error: 'Failed to revalidate' },
      { status: 500 },
    )
  }
}
