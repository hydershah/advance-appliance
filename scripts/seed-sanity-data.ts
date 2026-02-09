#!/usr/bin/env ts-node
/**
 * Seed Sanity CMS with data from static content.ts
 *
 * Usage: npm run seed:sanity
 *
 * This script imports:
 * - Services (9 services including Ice Maker Repair)
 * - Service Areas (38 locations)
 * - Blog Posts (4 posts)
 * - Testimonials (9 reviews)
 */

import { createClient } from '@sanity/client'
import { services, serviceAreas, blogPosts, testimonials } from '../src/designs/design1/data/content'

// Initialize Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_WRITE_TOKEN || '',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Helper to convert text to portable text blocks
function textToPortableText(text: string) {
  // Split by double newlines to create paragraphs
  const paragraphs = text.split('\n\n').filter(p => p.trim())

  return paragraphs.map(para => {
    // Check if it's a heading (starts with ##)
    if (para.startsWith('## ')) {
      return {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: para.replace('## ', '') }],
      }
    }

    // Check if it's a list item (starts with -)
    if (para.startsWith('- ')) {
      const items = para.split('\n').filter(item => item.startsWith('- '))
      return items.map(item => ({
        _type: 'block',
        style: 'normal',
        listItem: 'bullet',
        children: [{ _type: 'span', text: item.replace('- ', '') }],
      }))
    }

    // Regular paragraph
    return {
      _type: 'block',
      style: 'normal',
      children: [{ _type: 'span', text: para }],
    }
  }).flat()
}

// Import Services
async function importServices() {
  console.log('\n📦 Importing Services...')

  for (const service of services) {
    try {
      const doc = {
        _type: 'service',
        _id: `service-${service.id}`,
        name: service.name,
        slug: {
          _type: 'slug',
          current: service.slug,
        },
        status: 'published',
        excerpt: service.shortDescription,
        description: textToPortableText(service.longDescription),
        icon: service.icon,
        features: service.features,
        faqs: service.faqs.map(faq => ({
          _type: 'object',
          question: faq.question,
          answer: faq.answer,
        })),
        // Note: Images will need to be uploaded separately
        // or provide external URLs
      }

      await client.createOrReplace(doc)
      console.log(`✅ Imported: ${service.name}`)
    } catch (error) {
      console.error(`❌ Failed to import ${service.name}:`, error)
    }
  }
}

// Import Service Areas
async function importServiceAreas() {
  console.log('\n📍 Importing Service Areas...')

  for (const area of serviceAreas) {
    try {
      const doc = {
        _type: 'serviceArea',
        _id: `area-${area.id}`,
        name: area.name,
        slug: {
          _type: 'slug',
          current: area.slug,
        },
        status: 'published',
        county: area.county,
        state: area.state,
        excerpt: area.description,
        zipCodes: area.zipCodes,
      }

      await client.createOrReplace(doc)
      console.log(`✅ Imported: ${area.name}, ${area.county} County`)
    } catch (error) {
      console.error(`❌ Failed to import ${area.name}:`, error)
    }
  }
}

// Import Blog Posts
async function importBlogPosts() {
  console.log('\n📝 Importing Blog Posts...')

  for (const post of blogPosts) {
    try {
      const doc = {
        _type: 'blogPost',
        _id: `post-${post.id}`,
        title: post.title,
        slug: {
          _type: 'slug',
          current: post.slug,
        },
        status: 'published',
        excerpt: post.excerpt,
        body: textToPortableText(post.content),
        author: post.author,
        publishedDate: post.date,
        category: post.category,
        tags: post.tags,
        readTime: post.readTime,
      }

      await client.createOrReplace(doc)
      console.log(`✅ Imported: ${post.title}`)
    } catch (error) {
      console.error(`❌ Failed to import ${post.title}:`, error)
    }
  }
}

// Import Testimonials
async function importTestimonials() {
  console.log('\n⭐ Importing Testimonials...')

  for (const testimonial of testimonials) {
    try {
      const doc = {
        _type: 'testimonial',
        _id: `testimonial-${testimonial.id}`,
        customerName: testimonial.name,
        content: testimonial.text,
        rating: testimonial.rating,
        location: testimonial.location,
        serviceName: testimonial.service,
        date: testimonial.date,
        status: 'published',
        featured: true, // Mark all as featured
      }

      await client.createOrReplace(doc)
      console.log(`✅ Imported: ${testimonial.name} - ${testimonial.service}`)
    } catch (error) {
      console.error(`❌ Failed to import ${testimonial.name}:`, error)
    }
  }
}

// Main function
async function main() {
  console.log('🚀 Starting Sanity CMS Data Import...\n')

  // Check if we have the required environment variables
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    console.error('❌ Error: NEXT_PUBLIC_SANITY_PROJECT_ID is not set')
    process.exit(1)
  }

  if (!process.env.SANITY_API_TOKEN && !process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: SANITY_API_TOKEN or SANITY_WRITE_TOKEN is required')
    console.error('   Get your token from: https://www.sanity.io/manage')
    process.exit(1)
  }

  try {
    await importServices()
    await importServiceAreas()
    await importBlogPosts()
    await importTestimonials()

    console.log('\n✨ Data import completed successfully!')
    console.log('\n📊 Summary:')
    console.log(`   - Services: ${services.length}`)
    console.log(`   - Service Areas: ${serviceAreas.length}`)
    console.log(`   - Blog Posts: ${blogPosts.length}`)
    console.log(`   - Testimonials: ${testimonials.length}`)
    console.log('\n💡 Note: Images need to be uploaded separately in Sanity Studio')
  } catch (error) {
    console.error('\n❌ Error during import:', error)
    process.exit(1)
  }
}

// Run the script
main()
