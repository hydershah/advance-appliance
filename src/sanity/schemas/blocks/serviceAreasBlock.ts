import { defineType, defineField } from 'sanity'

export const serviceAreasBlockType = defineType({
  name: 'serviceAreasBlock',
  title: 'Service Areas',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({
      name: 'displayMode',
      title: 'Display Mode',
      type: 'string',
      options: {
        list: [
          { title: 'All Areas', value: 'all' },
          { title: 'Featured Only', value: 'featured' },
        ],
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'featuredAreas',
      title: 'Featured Areas',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'serviceArea' }] }],
      hidden: ({ parent }) => parent?.displayMode !== 'featured',
    }),
    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Grid', value: 'grid' },
          { title: 'List', value: 'list' },
          { title: 'Map', value: 'map' },
        ],
      },
      initialValue: 'grid',
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title || 'Service Areas', subtitle: 'Service Areas' }
    },
  },
})
