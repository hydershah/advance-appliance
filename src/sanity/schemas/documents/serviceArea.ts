import { defineType, defineField } from 'sanity'

export const serviceAreaType = defineType({
  name: 'serviceArea',
  title: 'Service Area',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Area Name',
      type: 'string',
      description: 'e.g., "Manhattan", "Brooklyn", "Queens"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Published', value: 'published' },
        ],
      },
      initialValue: 'draft',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'description',
      title: 'Area Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Area Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'services',
      title: 'Available Services',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'service' }] }],
      description: 'Services offered in this area',
    }),
    defineField({
      name: 'neighborhoods',
      title: 'Neighborhoods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Neighborhood Name', type: 'string', validation: (Rule) => Rule.required() },
          ],
          preview: { select: { title: 'name' } },
        },
      ],
    }),
    defineField({
      name: 'coordinates',
      title: 'Map Coordinates',
      type: 'object',
      fields: [
        { name: 'latitude', title: 'Latitude', type: 'number' },
        { name: 'longitude', title: 'Longitude', type: 'number' },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: { title: 'name', status: 'status', media: 'image' },
    prepare({ title, status, media }) {
      return {
        title,
        subtitle: status === 'published' ? 'Published' : 'Draft',
        media,
      }
    },
  },
})
