import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const ContentBlock: Block = {
  slug: 'content',
  labels: {
    singular: 'Content Block',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'columns',
      type: 'select',
      defaultValue: 'one',
      options: [
        { label: 'One Column', value: 'one' },
        { label: 'Two Columns', value: 'two' },
        { label: 'Three Columns', value: 'three' },
      ],
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
      label: 'Content',
    },
  ],
}
