import { defineType, defineField } from 'sanity'

export const featuredServicesBlockType = defineType({
  name: 'featuredServicesBlock',
  title: 'Featured Services',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title || 'Featured Services', subtitle: 'Featured Services' }
    },
  },
})
