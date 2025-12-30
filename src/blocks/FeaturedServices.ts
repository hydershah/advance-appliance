import type { Block } from 'payload'

export const FeaturedServicesBlock: Block = {
  slug: 'featuredServices',
  labels: {
    singular: 'Featured Services',
    plural: 'Featured Services Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Our Services',
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Select Services',
      admin: {
        description: 'Choose services to feature in this section',
      },
    },
  ],
}
