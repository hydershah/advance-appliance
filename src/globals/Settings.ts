import type { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Site Settings',
  admin: {
    group: 'Admin',
    description: 'Global site settings including contact info, hours, and social links',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General',
          fields: [
            {
              name: 'siteName',
              type: 'text',
              required: true,
              label: 'Site Name',
              defaultValue: 'Advance Appliance Repair',
            },
            {
              name: 'tagline',
              type: 'text',
              label: 'Tagline',
              admin: {
                description: 'Short tagline or slogan',
              },
            },
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
              label: 'Site Logo',
            },
          ],
        },
        {
          label: 'Contact',
          fields: [
            {
              name: 'contact',
              type: 'group',
              label: 'Contact Information',
              fields: [
                {
                  name: 'phone',
                  type: 'text',
                  required: true,
                  label: 'Phone Number',
                  admin: {
                    description: 'Primary contact phone number',
                  },
                },
                {
                  name: 'email',
                  type: 'email',
                  required: true,
                  label: 'Email Address',
                },
                {
                  name: 'address',
                  type: 'text',
                  label: 'Street Address',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'city',
                      type: 'text',
                      label: 'City',
                      admin: {
                        width: '40%',
                      },
                    },
                    {
                      name: 'state',
                      type: 'text',
                      label: 'State',
                      admin: {
                        width: '30%',
                      },
                    },
                    {
                      name: 'zip',
                      type: 'text',
                      label: 'ZIP Code',
                      admin: {
                        width: '30%',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Business Hours',
          fields: [
            {
              name: 'hours',
              type: 'group',
              label: 'Business Hours',
              fields: [
                {
                  name: 'monday',
                  type: 'text',
                  label: 'Monday',
                  defaultValue: '8:00 AM - 6:00 PM',
                },
                {
                  name: 'tuesday',
                  type: 'text',
                  label: 'Tuesday',
                  defaultValue: '8:00 AM - 6:00 PM',
                },
                {
                  name: 'wednesday',
                  type: 'text',
                  label: 'Wednesday',
                  defaultValue: '8:00 AM - 6:00 PM',
                },
                {
                  name: 'thursday',
                  type: 'text',
                  label: 'Thursday',
                  defaultValue: '8:00 AM - 6:00 PM',
                },
                {
                  name: 'friday',
                  type: 'text',
                  label: 'Friday',
                  defaultValue: '8:00 AM - 6:00 PM',
                },
                {
                  name: 'saturday',
                  type: 'text',
                  label: 'Saturday',
                  defaultValue: '9:00 AM - 4:00 PM',
                },
                {
                  name: 'sunday',
                  type: 'text',
                  label: 'Sunday',
                  defaultValue: 'Closed',
                },
                {
                  name: 'emergencyNote',
                  type: 'textarea',
                  label: 'Emergency Service Note',
                  admin: {
                    description: 'Note about emergency/after-hours service availability',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Social Media',
          fields: [
            {
              name: 'social',
              type: 'group',
              label: 'Social Media Links',
              fields: [
                {
                  name: 'facebook',
                  type: 'text',
                  label: 'Facebook URL',
                },
                {
                  name: 'instagram',
                  type: 'text',
                  label: 'Instagram URL',
                },
                {
                  name: 'twitter',
                  type: 'text',
                  label: 'Twitter/X URL',
                },
                {
                  name: 'youtube',
                  type: 'text',
                  label: 'YouTube URL',
                },
                {
                  name: 'linkedin',
                  type: 'text',
                  label: 'LinkedIn URL',
                },
                {
                  name: 'yelp',
                  type: 'text',
                  label: 'Yelp URL',
                },
                {
                  name: 'googleBusiness',
                  type: 'text',
                  label: 'Google Business URL',
                },
              ],
            },
          ],
        },
        {
          label: 'Default SEO',
          fields: [
            {
              name: 'seo',
              type: 'group',
              label: 'Default SEO Settings',
              admin: {
                description: 'Fallback SEO values when pages do not have their own',
              },
              fields: [
                {
                  name: 'defaultTitle',
                  type: 'text',
                  label: 'Default Meta Title',
                  maxLength: 70,
                },
                {
                  name: 'defaultDescription',
                  type: 'textarea',
                  label: 'Default Meta Description',
                  maxLength: 200,
                },
                {
                  name: 'defaultImage',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Default OG Image',
                  admin: {
                    description: 'Default image for social sharing (1200x630 recommended)',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
