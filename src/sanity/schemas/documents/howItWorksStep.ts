import { defineType, defineField } from 'sanity'

export const howItWorksStepType = defineType({
  name: 'howItWorksStep',
  title: 'How It Works Step',
  type: 'document',
  fields: [
    defineField({
      name: 'step',
      title: 'Step Number',
      type: 'number',
      description: 'e.g., 1, 2, 3',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., "Book", "Repair", "Relax"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon identifier for frontend display',
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
  orderings: [
    { title: 'Step', name: 'stepAsc', by: [{ field: 'step', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'title', step: 'step' },
    prepare({ title, step }) {
      return {
        title: `Step ${step}: ${title}`,
      }
    },
  },
})
