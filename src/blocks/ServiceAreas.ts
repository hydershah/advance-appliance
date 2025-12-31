import type { Block } from 'payload'

export const ServiceAreasBlock: Block = {
  slug: 'service-areas',
  labels: {
    singular: 'Service Areas Section',
    plural: 'Service Areas Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Areas We Serve',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'displayMode',
      type: 'select',
      defaultValue: 'all',
      options: [
        { label: 'Show All Service Areas', value: 'all' },
        { label: 'Featured Service Areas', value: 'featured' },
      ],
    },
    {
      name: 'featuredAreas',
      type: 'relationship',
      relationTo: 'service-areas',
      hasMany: true,
      label: 'Featured Service Areas',
      admin: {
        condition: (_data, siblingData) => siblingData?.displayMode === 'featured',
        description: 'Select specific service areas to display',
      },
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        { label: 'Grid Layout', value: 'grid' },
        { label: 'List Layout', value: 'list' },
        { label: 'Map View', value: 'map' },
      ],
    },
  ],
}
