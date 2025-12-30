import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

/**
 * GET /api/revalidate
 * On-demand revalidation endpoint for ISR pages
 *
 * Query Parameters:
 * - path: The path to revalidate (required)
 * - secret: Revalidation secret for authentication (required)
 *
 * Response: Success or error message
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const path = searchParams.get('path')
  const secret = searchParams.get('secret')

  // Validate secret
  if (secret !== process.env.REVALIDATION_SECRET) {
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
