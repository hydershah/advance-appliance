import type { Field } from 'payload'

/**
 * SEO meta fields group for collections
 */
export const seoFields: Field = {
  name: 'meta',
  type: 'group',
  label: 'SEO & Meta',
  admin: {
    description: 'Search engine optimization and social sharing settings',
  },
  fields: [
    {
      name: 'seo',
      type: 'group',
      label: 'SEO Settings',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Meta Title',
          admin: {
            description: 'Title for search engines (50-60 characters recommended)',
          },
          maxLength: 70,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Meta Description',
          admin: {
            description: 'Description for search engines (150-160 characters recommended)',
          },
          maxLength: 200,
        },
        {
          name: 'keywords',
          type: 'text',
          label: 'Keywords',
          admin: {
            description: 'Comma-separated keywords (optional, less important for SEO now)',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'SEO Image',
          admin: {
            description: 'Default image for search results and social sharing',
          },
        },
      ],
    },
    {
      name: 'openGraph',
      type: 'group',
      label: 'Open Graph (Social Sharing)',
      admin: {
        description: 'Override defaults for social media sharing',
      },
      fields: [
        {
          name: 'ogTitle',
          type: 'text',
          label: 'OG Title',
          admin: {
            description: 'Title for social media (uses Meta Title if empty)',
          },
        },
        {
          name: 'ogDescription',
          type: 'textarea',
          label: 'OG Description',
          admin: {
            description: 'Description for social media (uses Meta Description if empty)',
          },
        },
        {
          name: 'ogImage',
          type: 'upload',
          relationTo: 'media',
          label: 'OG Image',
          admin: {
            description: 'Image for social sharing (1200x630 recommended)',
          },
        },
      ],
    },
  ],
}

/**
 * Simple SEO fields without Open Graph (for smaller collections)
 */
export const simpleSeoFields: Field = {
  name: 'meta',
  type: 'group',
  label: 'SEO',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Meta Title',
      maxLength: 70,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Meta Description',
      maxLength: 200,
    },
  ],
}
