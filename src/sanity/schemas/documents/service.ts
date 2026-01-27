import { defineType, defineField } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Service Name',
      type: 'string',
      description: 'e.g., "Refrigerator Repair", "Washing Machine Service"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief description for service cards and previews',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Service Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'icon',
      title: 'Icon Name',
      type: 'string',
      description: 'Icon identifier for frontend display (e.g., "refrigerator", "washer")',
    }),
    defineField({
      name: 'features',
      title: 'Service Features',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key features and benefits of this service',
    }),
    defineField({
      name: 'faqs',
      title: 'Service FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'answer', title: 'Answer', type: 'text', validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    }),
    defineField({
      name: 'relatedServices',
      title: 'Related Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: { title: 'name', status: 'status', media: 'image' },
    prepare({ title, status, media }) {
      return {
        title,
        subtitle: status === 'published' ? 'Published' : 'Draft',
        media,
      }
    },
  },
})
