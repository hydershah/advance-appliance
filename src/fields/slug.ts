import type { Field } from 'payload'

/**
 * Generates a URL-friendly slug from a string
 */
export const formatSlug = (value: string): string => {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
}

/**
 * Slug field with auto-generation from title/name field
 */
export const slugField = (sourceField: string = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  required: true,
  unique: true,
  admin: {
    position: 'sidebar',
    description: 'URL-friendly identifier. Auto-generated from title if left empty.',
  },
  hooks: {
    beforeValidate: [
      ({ value, data }) => {
        if (typeof value === 'string' && value.length > 0) {
          return formatSlug(value)
        }
        const sourceValue = data?.[sourceField]
        if (typeof sourceValue === 'string' && sourceValue.length > 0) {
          return formatSlug(sourceValue)
        }
        return value
      },
    ],
  },
})
