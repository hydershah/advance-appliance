import { defineType, defineField } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content', default: true },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'expertRepairsSubtitle',
      title: 'Expert Repairs Section Subtitle',
      type: 'string',
      initialValue: 'What We Do',
      group: 'content',
    }),
    defineField({
      name: 'expertRepairsTitle',
      title: 'Expert Repairs Section Title',
      type: 'string',
      initialValue: 'Expert Repairs for Every Brand',
      group: 'content',
    }),
    defineField({
      name: 'expertRepairsParagraphs',
      title: 'Expert Repairs Paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      description: 'Each item is a separate paragraph displayed in the "Expert Repairs" section.',
      group: 'content',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Page' }
    },
  },
})
