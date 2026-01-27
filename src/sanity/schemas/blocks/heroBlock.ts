import { defineType, defineField } from 'sanity'

export const heroBlockType = defineType({
  name: 'heroBlock',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({ name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'string' }),
    defineField({ name: 'secondaryCtaText', title: 'Secondary CTA Text', type: 'string' }),
    defineField({ name: 'secondaryCtaLink', title: 'Secondary CTA Link', type: 'string' }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title || 'Hero Block', subtitle: 'Hero' }
    },
  },
})
