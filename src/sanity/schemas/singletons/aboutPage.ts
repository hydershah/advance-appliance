import { defineType, defineField } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'expertRepairsSubtitle',
      title: 'Expert Repairs Section Subtitle',
      type: 'string',
      initialValue: 'What We Do',
    }),
    defineField({
      name: 'expertRepairsTitle',
      title: 'Expert Repairs Section Title',
      type: 'string',
      initialValue: 'Expert Repairs for Every Brand',
    }),
    defineField({
      name: 'expertRepairsParagraphs',
      title: 'Expert Repairs Paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 4 }],
      description: 'Each item is a separate paragraph displayed in the "Expert Repairs" section.',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'About Page' }
    },
  },
})
