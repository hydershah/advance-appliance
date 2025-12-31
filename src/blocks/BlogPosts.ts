import type { Block } from 'payload'

export const BlogPostsBlock: Block = {
  slug: 'blog-posts',
  labels: {
    singular: 'Blog Posts Section',
    plural: 'Blog Posts Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Latest Articles',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Section Description',
    },
    {
      name: 'displayMode',
      type: 'select',
      defaultValue: 'recent',
      options: [
        { label: 'Recent Posts', value: 'recent' },
        { label: 'Featured Posts', value: 'featured' },
        { label: 'Category Posts', value: 'category' },
      ],
    },
    {
      name: 'featuredPosts',
      type: 'relationship',
      relationTo: 'blog-posts',
      hasMany: true,
      label: 'Featured Posts',
      admin: {
        condition: (_data, siblingData) => siblingData?.displayMode === 'featured',
        description: 'Select specific blog posts to display',
      },
    },
    {
      name: 'category',
      type: 'text',
      label: 'Category',
      admin: {
        condition: (_data, siblingData) => siblingData?.displayMode === 'category',
        description: 'Filter posts by category',
      },
    },
    {
      name: 'limit',
      type: 'number',
      label: 'Number of Posts',
      defaultValue: 3,
      min: 1,
      max: 12,
    },
    {
      name: 'showExcerpt',
      type: 'checkbox',
      label: 'Show Post Excerpts',
      defaultValue: true,
    },
    {
      name: 'ctaText',
      type: 'text',
      label: 'CTA Button Text',
      defaultValue: 'View All Articles',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'CTA Button Link',
      defaultValue: '/blog',
    },
  ],
}
