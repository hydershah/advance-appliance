import { defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.max(70),
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'OG Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Comma-separated keywords',
    },
  ],
})
