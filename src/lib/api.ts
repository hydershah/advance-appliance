/**
 * API Helper Functions
 *
 * Utilities for building type-safe API routes and handling
 * requests/responses in Next.js API routes and Server Actions.
 */

import { NextResponse } from 'next/server'

/**
 * Standard HTTP status codes
 */
export const HttpStatus = {
  // Success
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,

  // Redirection
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  NOT_MODIFIED: 304,

  // Client Errors
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,

  // Server Errors
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
} as const

/**
 * API Response types
 */
export interface APISuccessResponse<T = any> {
  data: T
  meta?: {
    page?: number
    limit?: number
    totalPages?: number
    totalDocs?: number
    [key: string]: any
  }
}

export interface APIErrorResponse {
  error: {
    code: string
    message: string
    details?: any
  }
}

/**
 * Create a success response
 */
export function successResponse<T>(
  data: T,
  meta?: APISuccessResponse<T>['meta'],
  status: number = HttpStatus.OK
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
  status: number = HttpStatus.INTERNAL_SERVER_ERROR,
  details?: any
): NextResponse<APIErrorResponse> {
  const error: APIErrorResponse = {
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
 * Common error responses
 */
export const errors = {
  badRequest: (message = 'Bad request', details?: any) =>
    errorResponse('BAD_REQUEST', message, HttpStatus.BAD_REQUEST, details),

  unauthorized: (message = 'Unauthorized', details?: any) =>
    errorResponse('UNAUTHORIZED', message, HttpStatus.UNAUTHORIZED, details),

  forbidden: (message = 'Forbidden', details?: any) =>
    errorResponse('FORBIDDEN', message, HttpStatus.FORBIDDEN, details),

  notFound: (message = 'Not found', details?: any) =>
    errorResponse('NOT_FOUND', message, HttpStatus.NOT_FOUND, details),

  conflict: (message = 'Conflict', details?: any) =>
    errorResponse('CONFLICT', message, HttpStatus.CONFLICT, details),

  unprocessableEntity: (message = 'Unprocessable entity', details?: any) =>
    errorResponse('UNPROCESSABLE_ENTITY', message, HttpStatus.UNPROCESSABLE_ENTITY, details),

  tooManyRequests: (message = 'Too many requests', details?: any) =>
    errorResponse('TOO_MANY_REQUESTS', message, HttpStatus.TOO_MANY_REQUESTS, details),

  internalServerError: (message = 'Internal server error', details?: any) =>
    errorResponse('INTERNAL_SERVER_ERROR', message, HttpStatus.INTERNAL_SERVER_ERROR, details),

  serviceUnavailable: (message = 'Service unavailable', details?: any) =>
    errorResponse('SERVICE_UNAVAILABLE', message, HttpStatus.SERVICE_UNAVAILABLE, details),
}

/**
 * Validate API key authentication
 * Supports both single key and multiple keys (comma-separated)
 */
export function validateApiKey(request: Request): boolean {
  const apiKey = request.headers.get('x-api-key')
  const expectedKeys = process.env.BLOG_API_KEYS || process.env.BLOG_API_KEY

  if (!expectedKeys) {
    console.warn('API key environment variable is not set')
    return false
  }

  // Support multiple keys separated by comma
  const validKeys = expectedKeys.split(',').map((key) => key.trim())
  return apiKey ? validKeys.includes(apiKey) : false
}

/**
 * Parse pagination parameters from request URL
 */
export function getPaginationParams(
  searchParams: URLSearchParams
): {
  page: number
  limit: number
} {
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
  const limit = Math.min(
    100,
    Math.max(1, parseInt(searchParams.get('limit') || '10', 10))
  )
  return { page, limit }
}

/**
 * Parse sort parameters from request URL
 */
export function getSortParams(
  searchParams: URLSearchParams
): string | undefined {
  const sort = searchParams.get('sort')
  if (!sort) return undefined

  // Validate sort field (prevent injection)
  const validFields = ['createdAt', 'updatedAt', 'title', 'publishedAt', 'order']
  const parts = sort.split(':')
  const field = parts[0]
  const order = parts[1]

  if (!field || !validFields.includes(field)) {
    return undefined
  }

  return order === 'desc' ? `-${field}` : field
}

/**
 * Generate a URL-friendly slug from a string
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+/, '') // Remove leading hyphens
    .replace(/-+$/, '') // Remove trailing hyphens
}

/**
 * Validate required fields in request body
 */
export function validateRequiredFields<T extends Record<string, any>>(
  body: T,
  requiredFields: (keyof T)[]
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

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
}

/**
 * Parse JSON safely with error handling
 */
export async function parseJSON<T = any>(
  request: Request
): Promise<{ data?: T; error?: string }> {
  try {
    const data = await request.json()
    return { data }
  } catch {
    return { error: 'Invalid JSON' }
  }
}

/**
 * Rate limiting helper (simple in-memory implementation)
 */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

export function checkRateLimit(
  identifier: string,
  limit: number = 10,
  windowMs: number = 60000
): { allowed: boolean; remaining: number; resetAt: number } {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetAt) {
    const resetAt = now + windowMs
    rateLimitMap.set(identifier, { count: 1, resetAt })
    return { allowed: true, remaining: limit - 1, resetAt }
  }

  if (record.count >= limit) {
    return { allowed: false, remaining: 0, resetAt: record.resetAt }
  }

  record.count++
  return { allowed: true, remaining: limit - record.count, resetAt: record.resetAt }
}

/**
 * Clean up expired rate limit records
 */
export function cleanupRateLimits() {
  const now = Date.now()
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetAt) {
      rateLimitMap.delete(key)
    }
  }
}

// Clean up rate limits every 5 minutes
if (typeof window === 'undefined') {
  setInterval(cleanupRateLimits, 5 * 60 * 1000)
}

/**
 * CORS headers helper
 */
export function getCorsHeaders(origin?: string): Record<string, string> {
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [
    'http://localhost:3000',
  ]
  const defaultOrigin = allowedOrigins[0] ?? 'http://localhost:3000'

  const isAllowed = origin && allowedOrigins.includes(origin)

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : defaultOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-API-Key',
    'Access-Control-Max-Age': '86400',
  }
}

/**
 * Handle OPTIONS request for CORS
 */
export function handleCorsPreFlight(request: Request): NextResponse | null {
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: getCorsHeaders(request.headers.get('origin') || undefined),
    })
  }
  return null
}
