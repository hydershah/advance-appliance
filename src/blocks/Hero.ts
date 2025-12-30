import type { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  labels: {
    singular: 'Hero Section',
    plural: 'Hero Sections',
  },
  imageURL: '/admin/hero-block.png',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Main Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
    },
    {
      type: 'row',
      fields: [
        {
          name: 'ctaText',
          type: 'text',
          label: 'Primary CTA Text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'ctaLink',
          type: 'text',
          label: 'Primary CTA Link',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'secondaryCtaText',
          type: 'text',
          label: 'Secondary CTA Text',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'secondaryCtaLink',
          type: 'text',
          label: 'Secondary CTA Link',
          admin: {
            width: '50%',
          },
        },
      ],
    },
  ],
}
