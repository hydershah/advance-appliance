import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from '../fields/slug'
// SEO fields added by SEO plugin

export const ServiceAreas: CollectionConfig = {
  slug: 'service-areas',
  labels: {
    singular: 'Service Area',
    plural: 'Service Areas',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'status', 'updatedAt'],
    group: 'Content',
    description: 'Locations and areas where services are provided',
    livePreview: {
      url: ({ data }) => `${process.env.NEXT_PUBLIC_SERVER_URL}/service-areas/${data?.slug}`,
    },
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
  versions: {
    drafts: true,
    maxPerDoc: 5,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Area Name',
      admin: {
        description: 'e.g., "Manhattan", "Brooklyn", "Queens"',
      },
    },
    slugField('name'),
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
    {
      name: 'excerpt',
      type: 'textarea',
      label: 'Short Description',
      maxLength: 200,
      admin: {
        description: 'Brief description for area cards and previews',
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      editor: lexicalEditor({}),
      label: 'Area Description',
      admin: {
        description: 'Detailed information about service in this area',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Area Image',
    },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      label: 'Available Services',
      admin: {
        description: 'Services offered in this area',
      },
    },
    {
      name: 'neighborhoods',
      type: 'array',
      label: 'Neighborhoods',
      admin: {
        description: 'Specific neighborhoods or sub-areas covered',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Neighborhood Name',
        },
      ],
    },
    {
      name: 'coordinates',
      type: 'group',
      label: 'Map Coordinates',
      admin: {
        description: 'Optional: For map display',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'latitude',
              type: 'number',
              label: 'Latitude',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'longitude',
              type: 'number',
              label: 'Longitude',
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
    // SEO meta fields automatically added by plugin
  ],
}
