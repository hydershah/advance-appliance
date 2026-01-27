import { defineType, defineField } from 'sanity'

export const blogPostsBlockType = defineType({
  name: 'blogPostsBlock',
  title: 'Blog Posts',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string' }),
    defineField({ name: 'subheading', title: 'Subheading', type: 'string' }),
    defineField({
      name: 'displayMode',
      title: 'Display Mode',
      type: 'string',
      options: {
        list: [
          { title: 'Recent', value: 'recent' },
          { title: 'Featured', value: 'featured' },
          { title: 'By Category', value: 'category' },
        ],
      },
      initialValue: 'recent',
    }),
    defineField({
      name: 'featuredPosts',
      title: 'Featured Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
      hidden: ({ parent }) => parent?.displayMode !== 'featured',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      hidden: ({ parent }) => parent?.displayMode !== 'category',
    }),
    defineField({
      name: 'limit',
      title: 'Limit',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(12),
      initialValue: 3,
    }),
    defineField({ name: 'showExcerpt', title: 'Show Excerpt', type: 'boolean', initialValue: true }),
    defineField({ name: 'ctaText', title: 'CTA Text', type: 'string' }),
    defineField({ name: 'ctaLink', title: 'CTA Link', type: 'string' }),
  ],
  preview: {
    select: { title: 'heading' },
    prepare({ title }) {
      return { title: title || 'Blog Posts', subtitle: 'Blog Posts' }
    },
  },
})
