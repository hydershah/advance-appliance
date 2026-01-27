import { defineType, defineField } from 'sanity'

export const ctaBlockType = defineType({
  name: 'ctaBlock',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
    defineField({ name: 'buttonText', title: 'Button Text', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'buttonLink', title: 'Button Link', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [
          { title: 'Primary', value: 'primary' },
          { title: 'Secondary', value: 'secondary' },
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title || 'CTA Block', subtitle: 'Call to Action' }
    },
  },
})
