import { defineType, defineField } from 'sanity'

export const faqBlockType = defineType({
  name: 'faqBlock',
  title: 'FAQ',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'answer', title: 'Answer', type: 'text', validation: (Rule) => Rule.required() },
          ],
          preview: { select: { title: 'question' } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title || 'FAQ Block', subtitle: 'FAQ' }
    },
  },
})
