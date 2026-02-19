import { defineType, defineField } from 'sanity'

export const brandType = defineType({
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Brand Name',
      type: 'string',
      description: 'e.g., "Sub-Zero", "Viking"',
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload brand logo image',
    }),
    defineField({
      name: 'logoUrl',
      title: 'External Logo URL',
      type: 'url',
      description: 'External URL for brand logo (used if no uploaded logo)',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brand-specific repair description',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Brand',
      type: 'boolean',
      initialValue: false,
      description: 'Show in premium brands section',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  orderings: [
    { title: 'Name', name: 'nameAsc', by: [{ field: 'name', direction: 'asc' }] },
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
  preview: {
    select: { title: 'name', featured: 'featured', media: 'logo' },
    prepare({ title, featured, media }) {
      return {
        title,
        subtitle: featured ? 'Featured' : 'Standard',
        media,
      }
    },
  },
})
