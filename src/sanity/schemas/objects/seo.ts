import { defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      description: 'Recommended: 50-60 characters',
      validation: (Rule) => Rule.max(70),
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Recommended: 120-160 characters',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'OG Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility and SEO (max 125 chars)',
          validation: (Rule) => Rule.max(125),
        },
      ],
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
      description: 'Comma-separated keywords (5-7 recommended, max 150 chars)',
      validation: (Rule) => Rule.max(150),
    },
    {
      name: 'canonical',
      title: 'Canonical URL',
      type: 'url',
      description: 'Override the default canonical URL (leave blank to use page URL)',
    },
    {
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent this page from being indexed by search engines',
      initialValue: false,
    },
  ],
})
