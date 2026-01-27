import { defineType, defineField } from 'sanity'

export const blogPostType = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
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
      name: 'author',
      title: 'Author Name',
      type: 'string',
    }),
    defineField({
      name: 'publishedDate',
      title: 'Published Date',
      type: 'datetime',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'Brief summary for blog listings (auto-generated if empty)',
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'content',
      title: 'Post Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'relatedPosts',
      title: 'Related Posts',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'blogPost' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
  preview: {
    select: { title: 'title', author: 'author', media: 'featuredImage', status: 'status' },
    prepare({ title, author, media, status }) {
      return {
        title,
        subtitle: `${author || 'No author'} | ${status === 'published' ? 'Published' : 'Draft'}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date (Newest)',
      name: 'publishedDateDesc',
      by: [{ field: 'publishedDate', direction: 'desc' }],
    },
  ],
})
