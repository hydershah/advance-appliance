import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  admin: {
    useAsTitle: 'customerName',
    defaultColumns: ['customerName', 'service', 'rating', 'featured', 'status'],
    group: 'Content',
    description: 'Customer reviews and testimonials',
  },
  access: {
    read: ({ req: { user } }) => {
      if (user) return true
      return {
        status: {
          equals: 'published',
        },
      }
    },
  },
  fields: [
    {
      name: 'customerName',
      type: 'text',
      required: true,
      label: 'Customer Name',
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services',
      label: 'Service',
      admin: {
        description: 'The service this testimonial relates to',
      },
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      defaultValue: 5,
      label: 'Rating (1-5)',
      admin: {
        description: 'Star rating from 1 to 5',
      },
    },
    {
      name: 'content',
      type: 'textarea',
      required: true,
      label: 'Review Content',
      maxLength: 500,
    },
    {
      name: 'date',
      type: 'date',
      label: 'Review Date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'location',
      type: 'text',
      label: 'Location',
      admin: {
        description: 'e.g., "Manhattan, NY"',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Show in featured testimonials section',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
