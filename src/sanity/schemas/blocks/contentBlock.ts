import { defineType, defineField } from 'sanity'

export const contentBlockType = defineType({
  name: 'contentBlock',
  title: 'Content',
  type: 'object',
  fields: [
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'string',
      options: {
        list: [
          { title: 'One Column', value: 'one' },
          { title: 'Two Columns', value: 'two' },
          { title: 'Three Columns', value: 'three' },
        ],
      },
      initialValue: 'one',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Content Block', subtitle: 'Content' }
    },
  },
})
