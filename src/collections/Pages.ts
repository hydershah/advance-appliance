import type { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
// SEO fields are added by the SEO plugin in payload.config.ts
import {
  HeroBlock,
  ContentBlock,
  CTABlock,
  FeaturedServicesBlock,
  TestimonialsBlock,
  FAQBlock,
  TeamMembersBlock,
  BlogPostsBlock,
  ServiceAreasBlock,
} from '../blocks'

export const Pages: CollectionConfig = {
  slug: 'pages',
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'status', 'updatedAt'],
    group: 'Content',
    description: 'Create and manage website pages with visual block editing',
    livePreview: {
      url: ({ data }) => {
        const path = data?.slug === 'home' ? '' : data?.slug
        return `${process.env.NEXT_PUBLIC_SERVER_URL}/${path}`
      },
    },
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        status: {
          equals: 'published',
        },
      }
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
    maxPerDoc: 10,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Page Title',
    },
    slugField('title'),
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData.status === 'published' && !value) {
              return new Date().toISOString()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      label: 'Page Layout',
      blocks: [
        HeroBlock,
        ContentBlock,
        CTABlock,
        FeaturedServicesBlock,
        TestimonialsBlock,
        TeamMembersBlock,
        BlogPostsBlock,
        ServiceAreasBlock,
        FAQBlock,
      ],
    },
    // SEO meta fields are automatically added by the SEO plugin
  ],
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        // Trigger revalidation for the page
        if (doc.status === 'published' && process.env.REVALIDATION_SECRET) {
          try {
            const path = doc.slug === 'home' ? '/' : `/${doc.slug}`
            await fetch(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate?path=${path}&secret=${process.env.REVALIDATION_SECRET}`,
            )
          } catch (err) {
            req.payload.logger.error(`Failed to revalidate page: ${err instanceof Error ? err.message : String(err)}`)
          }
        }
        return doc
      },
    ],
  },
}
