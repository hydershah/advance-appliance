import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemas'
import { apiVersion, dataset, projectId } from './src/sanity/env'

// Custom structure for singleton documents
const structure = (S: any) =>
  S.list()
    .title('Content')
    .items([
      // Singleton: Settings
      S.listItem()
        .title('Site Settings')
        .id('settings')
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      // Content types
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('service').title('Services'),
      S.documentTypeListItem('serviceArea').title('Service Areas'),
      S.documentTypeListItem('blogPost').title('Blog Posts'),
      S.documentTypeListItem('testimonial').title('Testimonials'),
      S.documentTypeListItem('teamMember').title('Team Members'),
    ])

export default defineConfig({
  name: 'advance-appliance',
  title: 'Advance Appliance CMS',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
  schema: {
    types: schemaTypes,
  },
})
