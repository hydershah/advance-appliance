import { defineType, defineField } from 'sanity'

export const testimonialsBlockType = defineType({
  name: 'testimonialsBlock',
  title: 'Testimonials',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial' }] }],
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title || 'Testimonials', subtitle: 'Testimonials' }
    },
  },
})
