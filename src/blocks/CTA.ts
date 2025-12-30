import type { Block } from 'payload'

export const CTABlock: Block = {
  slug: 'cta',
  labels: {
    singular: 'Call to Action',
    plural: 'Calls to Action',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'buttonText',
          type: 'text',
          required: true,
          label: 'Button Text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'buttonLink',
          type: 'text',
          required: true,
          label: 'Button Link',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'style',
      type: 'select',
      defaultValue: 'primary',
      options: [
        { label: 'Primary (Dark)', value: 'primary' },
        { label: 'Secondary (Light)', value: 'secondary' },
      ],
    },
  ],
}
