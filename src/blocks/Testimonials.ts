import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonials Section',
    plural: 'Testimonials Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'What Our Customers Say',
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
      label: 'Select Testimonials',
      admin: {
        description: 'Choose testimonials to display in this section',
      },
    },
  ],
}
