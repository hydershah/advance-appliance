import { defineType, defineField } from 'sanity'

export const settingsType = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // General
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    // Contact
    defineField({
      name: 'contact',
      title: 'Contact Information',
      type: 'object',
      fields: [
        { name: 'phone', title: 'Phone Number', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'email', title: 'Email Address', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'address', title: 'Street Address', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'zip', title: 'ZIP Code', type: 'string' },
      ],
    }),
    // Business Hours
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        { name: 'monday', title: 'Monday', type: 'string' },
        { name: 'tuesday', title: 'Tuesday', type: 'string' },
        { name: 'wednesday', title: 'Wednesday', type: 'string' },
        { name: 'thursday', title: 'Thursday', type: 'string' },
        { name: 'friday', title: 'Friday', type: 'string' },
        { name: 'saturday', title: 'Saturday', type: 'string' },
        { name: 'sunday', title: 'Sunday', type: 'string' },
        { name: 'emergencyNote', title: 'Emergency Service Note', type: 'text', rows: 2 },
      ],
    }),
    // Social Media
    defineField({
      name: 'social',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'twitter', title: 'Twitter/X URL', type: 'url' },
        { name: 'youtube', title: 'YouTube URL', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
        { name: 'yelp', title: 'Yelp URL', type: 'url' },
        { name: 'googleBusiness', title: 'Google Business URL', type: 'url' },
      ],
    }),
    // Default SEO
    defineField({
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'object',
      description: 'Fallback SEO values when pages do not have their own',
      fields: [
        { name: 'defaultTitle', title: 'Default Meta Title', type: 'string', validation: (Rule) => Rule.max(70) },
        { name: 'defaultDescription', title: 'Default Meta Description', type: 'text', rows: 3, validation: (Rule) => Rule.max(200) },
        { name: 'defaultImage', title: 'Default OG Image', type: 'image', options: { hotspot: true } },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' }
    },
  },
})
