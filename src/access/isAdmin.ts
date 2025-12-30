import type { Access } from 'payload'

/**
 * Check if user is an admin
 * Used for administrative access control
 */
export const isAdmin: Access = ({ req: { user } }) => {
  // Allow if user is logged in and has admin role
  if (user?.role === 'admin') {
    return true
  }

  return false
}

/**
 * Check if user is logged in (admin or editor)
 */
export const isLoggedIn: Access = ({ req: { user } }) => {
  return Boolean(user)
}

/**
 * Allow admins full access, or users to manage their own content
 */
export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false

  if (user.role === 'admin') {
    return true
  }

  // Return query constraint to filter by user ID
  return {
    id: {
      equals: user.id,
    },
  }
}

/**
 * Published content is public, drafts require authentication
 */
export const isAdminOrPublished: Access = ({ req: { user } }) => {
  if (user) {
    return true
  }

  return {
    status: {
      equals: 'published',
    },
  }
}

/**
 * Verify API key for external API access
 */
export const verifyAPIKey = (apiKey: string | undefined): boolean => {
  if (!apiKey) return false

  const validAPIKeys = process.env.BLOG_API_KEYS?.split(',') || []
  return validAPIKeys.includes(apiKey)
}
