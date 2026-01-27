import { defineType, defineField } from 'sanity'

export const teamMembersBlockType = defineType({
  name: 'teamMembersBlock',
  title: 'Team Members',
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
          { title: 'All Members', value: 'all' },
          { title: 'Featured Only', value: 'featured' },
        ],
      },
      initialValue: 'all',
    }),
    defineField({
      name: 'featuredMembers',
      title: 'Featured Members',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
      hidden: ({ parent }) => parent?.displayMode !== 'featured',
    }),
    defineField({
      name: 'limit',
      title: 'Limit',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(12),
    }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title || 'Team Members', subtitle: 'Team' }
    },
  },
})
