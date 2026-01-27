import { NextResponse } from 'next/server'
import type { APIErrorResponse as APIError, APISuccessResponse } from '@/lib/api'

/**
 * Standard HTTP status codes
 */
export const HttpStatus = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const

/**
 * Create a success response
 */
export function successResponse<T>(
  data: T,
  meta?: APISuccessResponse<T>['meta'],
  status: number = HttpStatus.OK,
): NextResponse<APISuccessResponse<T>> {
  const response: APISuccessResponse<T> = { data }
  if (meta) {
    response.meta = meta
  }
  return NextResponse.json(response, { status })
}

/**
 * Create an error response
 */
export function errorResponse(
  code: string,
  message: string,
  status: number,
  details?: APIError['error']['details'],
): NextResponse<APIError> {
  const error: APIError = {
    error: {
      code,
      message,
    },
  }
  if (details) {
    error.error.details = details
  }
  return NextResponse.json(error, { status })
}

/**
 * Validate API key authentication
 * Supports multiple API keys (comma-separated in BLOG_API_KEYS env var)
 */
export function validateApiKey(request: Request): boolean {
  const apiKey = request.headers.get('x-api-key')
  const apiKeysEnv = process.env.BLOG_API_KEYS

  if (!apiKeysEnv) {
    console.warn('BLOG_API_KEYS environment variable is not set')
    return false
  }

  if (!apiKey) {
    return false
  }

  // Support multiple API keys (comma-separated)
  const validKeys = apiKeysEnv.split(',').map(key => key.trim())
  return validKeys.includes(apiKey)
}

/**
 * Parse pagination parameters from request URL
 */
export function getPaginationParams(searchParams: URLSearchParams): {
  page: number
  limit: number
} {
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '10', 10)))
  return { page, limit }
}

/**
 * Generate a URL-friendly slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Validate required fields in request body
 */
export function validateRequiredFields<T extends object>(
  body: T,
  requiredFields: (keyof T)[],
): { valid: boolean; missing: string[] } {
  const missing: string[] = []

  for (const field of requiredFields) {
    const value = body[field]
    if (value === undefined || value === null || value === '') {
      missing.push(String(field))
    }
  }

  return {
    valid: missing.length === 0,
    missing,
  }
}
