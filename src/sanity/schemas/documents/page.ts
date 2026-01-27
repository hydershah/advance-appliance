import { defineType, defineField } from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
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
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'layout',
      title: 'Page Layout',
      type: 'array',
      of: [
        { type: 'heroBlock' },
        { type: 'contentBlock' },
        { type: 'ctaBlock' },
        { type: 'featuredServicesBlock' },
        { type: 'testimonialsBlock' },
        { type: 'teamMembersBlock' },
        { type: 'blogPostsBlock' },
        { type: 'serviceAreasBlock' },
        { type: 'faqBlock' },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: { title: 'title', status: 'status' },
    prepare({ title, status }) {
      return {
        title,
        subtitle: status === 'published' ? 'Published' : 'Draft',
      }
    },
  },
})
