import { defineType, defineField } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'customerName',
      title: 'Customer Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'service',
      title: 'Service',
      type: 'reference',
      to: [{ type: 'service' }],
      description: 'The service this testimonial relates to',
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      description: 'Star rating from 1 to 5',
      validation: (Rule) => Rule.required().min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: 'content',
      title: 'Review Content',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'date',
      title: 'Review Date',
      type: 'date',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Manhattan, NY"',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show in featured testimonials section',
      initialValue: false,
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
  ],
  preview: {
    select: { title: 'customerName', rating: 'rating', status: 'status' },
    prepare({ title, rating, status }) {
      return {
        title,
        subtitle: `${'★'.repeat(rating || 0)}${'☆'.repeat(5 - (rating || 0))} | ${status === 'published' ? 'Published' : 'Draft'}`,
      }
    },
  },
})
