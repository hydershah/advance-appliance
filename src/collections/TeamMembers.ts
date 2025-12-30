import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { isAdmin, isLoggedIn } from '../access'

export const TeamMembers: CollectionConfig = {
  slug: 'team-members',
  labels: {
    singular: 'Team Member',
    plural: 'Team Members',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'position', 'status', 'order'],
    group: 'Content',
    description: 'Manage team member profiles',
  },
  access: {
    read: () => true, // Public access for team member listings
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'position',
      type: 'text',
      required: true,
      label: 'Position/Title',
      admin: {
        description: 'e.g., "Senior Appliance Technician", "Service Manager"',
      },
    },
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
      name: 'photo',
      type: 'upload',
      relationTo: 'media',
      label: 'Profile Photo',
      required: true,
      admin: {
        description: 'Professional headshot photo',
      },
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'bio',
      type: 'richText',
      editor: lexicalEditor({}),
      label: 'Biography',
      admin: {
        description: 'Professional background and expertise',
      },
    },
    {
      name: 'shortBio',
      type: 'textarea',
      label: 'Short Bio',
      maxLength: 200,
      admin: {
        description: 'Brief summary for team member cards',
      },
    },
    {
      name: 'specialties',
      type: 'array',
      label: 'Specialties',
      admin: {
        description: 'Areas of expertise',
      },
      fields: [
        {
          name: 'specialty',
          type: 'text',
          required: true,
          label: 'Specialty',
        },
      ],
    },
    {
      name: 'certifications',
      type: 'array',
      label: 'Certifications',
      admin: {
        description: 'Professional certifications and credentials',
      },
      fields: [
        {
          name: 'certification',
          type: 'text',
          required: true,
          label: 'Certification',
        },
        {
          name: 'issuedBy',
          type: 'text',
          label: 'Issued By',
        },
        {
          name: 'year',
          type: 'number',
          label: 'Year Obtained',
        },
      ],
    },
    {
      name: 'yearsOfExperience',
      type: 'number',
      label: 'Years of Experience',
      admin: {
        description: 'Total years in appliance repair',
      },
    },
    {
      name: 'socialLinks',
      type: 'group',
      label: 'Social Media Links',
      fields: [
        {
          name: 'linkedin',
          type: 'text',
          label: 'LinkedIn URL',
        },
        {
          name: 'twitter',
          type: 'text',
          label: 'Twitter URL',
        },
      ],
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        description: 'Lower numbers appear first',
      },
    },
  ],
}
