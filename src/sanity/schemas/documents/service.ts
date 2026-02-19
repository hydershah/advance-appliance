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
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      rows: 15,
      description: 'Extended marketing copy (2-3 paragraphs) for the service detail page',
    }),
    defineField({
      name: 'commonProblems',
      title: 'Common Problems',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Problem Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: 'Description', type: 'text', rows: 2, validation: (Rule) => Rule.required() },
          ],
          preview: { select: { title: 'title' } },
        },
      ],
      description: 'Common problems we fix for this appliance type',
    }),
    defineField({
      name: 'warningSigns',
      title: 'Warning Signs',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Signs your appliance needs repair',
    }),
    defineField({
      name: 'repairProcess',
      title: 'Repair Process Steps',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Our step-by-step repair process',
    }),
    defineField({
      name: 'preventionTips',
      title: 'Prevention Tips',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Maintenance tips to prevent issues',
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
