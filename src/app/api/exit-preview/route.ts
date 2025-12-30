import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

/**
 * GET /api/exit-preview
 * Disable draft mode and return to published content
 */
export async function GET(request: NextRequest) {
  const draft = await draftMode()
  draft.disable()

  // Get the redirect URL from query params or default to home
  const redirectUrl = request.nextUrl.searchParams.get('redirect') || '/'

  return NextResponse.redirect(new URL(redirectUrl, request.url))
}
