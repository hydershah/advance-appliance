import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from '../fields/slug'
// SEO fields added by SEO plugin

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  labels: {
    singular: 'Blog Post',
    plural: 'Blog Posts',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'author', 'status', 'publishedDate', 'updatedAt'],
    group: 'Content',
    description: 'Blog articles and news posts',
    livePreview: {
      url: ({ data }) => `${process.env.NEXT_PUBLIC_SERVER_URL}/blog/${data?.slug}`,
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
      label: 'Post Title',
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
      name: 'author',
      type: 'text',
      label: 'Author Name',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedDate',
      type: 'date',
      label: 'Published Date',
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
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
    },
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Excerpt',
      maxLength: 300,
      admin: {
        description: 'Brief summary for blog listings (auto-generated if empty)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
      label: 'Post Content',
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Categories',
      admin: {
        description: 'Post categories for organization',
      },
      fields: [
        {
          name: 'category',
          type: 'text',
          required: true,
          label: 'Category',
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      label: 'Tags',
      admin: {
        description: 'Keywords and tags for the post',
      },
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
          label: 'Tag',
        },
      ],
    },
    {
      name: 'relatedPosts',
      type: 'relationship',
      relationTo: 'blog-posts',
      hasMany: true,
      label: 'Related Posts',
      filterOptions: ({ id }) => ({
        id: {
          not_equals: id,
        },
      }),
      admin: {
        description: 'Select related blog posts to display',
      },
    },
    // SEO meta fields automatically added by plugin
  ],
  hooks: {
    afterChange: [
      async ({ doc, req }) => {
        // Trigger revalidation for blog posts
        if (doc.status === 'published' && process.env.REVALIDATION_SECRET) {
          try {
            await fetch(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate?path=/blog/${doc.slug}&secret=${process.env.REVALIDATION_SECRET}`,
            )
            // Also revalidate blog listing page
            await fetch(
              `${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate?path=/blog&secret=${process.env.REVALIDATION_SECRET}`,
            )
          } catch (err) {
            req.payload.logger.error(`Failed to revalidate blog post: ${err instanceof Error ? err.message : String(err)}`)
          }
        }
        return doc
      },
    ],
  },
}
