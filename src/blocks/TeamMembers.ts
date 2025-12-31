import type { Block } from 'payload'

export const TeamMembersBlock: Block = {
  slug: 'team-members',
  labels: {
    singular: 'Team Members Section',
    plural: 'Team Members Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Meet Our Expert Team',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'displayMode',
      type: 'select',
      defaultValue: 'featured',
      options: [
        { label: 'Show All Team Members', value: 'all' },
        { label: 'Featured Team Members Only', value: 'featured' },
      ],
    },
    {
      name: 'featuredMembers',
      type: 'relationship',
      relationTo: 'team-members',
      hasMany: true,
      label: 'Featured Team Members',
      admin: {
        condition: (_data, siblingData) => siblingData?.displayMode === 'featured',
        description: 'Select specific team members to display',
      },
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Maximum Number to Display',
      defaultValue: 4,
      admin: {
        condition: (_data, siblingData) => siblingData?.displayMode === 'all',
      },
    },
  ],
}
