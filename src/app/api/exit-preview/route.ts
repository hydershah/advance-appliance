import { draftMode } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

/**
 * GET /api/exit-preview
 * Disable draft mode and return to published content
 */
export async function GET(request: NextRequest) {
  const draft = await draftMode()
  draft.disable()

  // Open-redirect defense: only accept relative same-origin paths.
  // `//evil.com` and `https://evil.com` would otherwise issue a 302 off-site.
  const raw = request.nextUrl.searchParams.get('redirect') || '/'
  const redirectUrl = raw.startsWith('/') && !raw.startsWith('//') ? raw : '/'

  return NextResponse.redirect(new URL(redirectUrl, request.url))
}
