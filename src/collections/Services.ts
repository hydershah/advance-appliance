import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from '../fields/slug'
// SEO fields added by SEO plugin

export const Services: CollectionConfig = {
  slug: 'services',
  labels: {
    singular: 'Service',
    plural: 'Services',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'status', 'updatedAt'],
    group: 'Content',
    description: 'Appliance repair services offered',
    livePreview: {
      url: ({ data }) => `${process.env.NEXT_PUBLIC_SERVER_URL}/services/${data?.slug}`,
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
    drafts: true,
    maxPerDoc: 5,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Service Name',
      admin: {
        description: 'e.g., "Refrigerator Repair", "Washing Machine Service"',
      },
    },
    slugField('name'),
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
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Description',
      maxLength: 200,
      admin: {
        description: 'Brief description for service cards and previews',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
      label: 'Full Description',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Service Image',
    },
    {
      name: 'icon',
      type: 'text',
      label: 'Icon Name',
      admin: {
        description: 'Icon identifier for frontend display (e.g., "refrigerator", "washer")',
      },
    },
    {
      name: 'features',
      type: 'array',
      label: 'Service Features',
      admin: {
        description: 'Key features and benefits of this service',
      },
      fields: [
        {
          name: 'feature',
          type: 'text',
          required: true,
          label: 'Feature',
        },
      ],
    },
    {
      name: 'faqs',
      type: 'array',
      label: 'Service FAQs',
      admin: {
        description: 'Common questions about this service',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Question',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Answer',
        },
      ],
    },
    {
      name: 'relatedServices',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Related Services',
      filterOptions: ({ id }) => ({
        id: {
          not_equals: id,
        },
      }),
    },
    // SEO meta fields automatically added by plugin
  ],
}
