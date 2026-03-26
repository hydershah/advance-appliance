/**
 * Fix Sanity CMS content:
 * 1. Remove "Fords" and "Oakhurst" service areas
 * 2. Update "365-Day Warranty" trust badge to "1 Year Warranty"
 *
 * Run: npx tsx scripts/fix-sanity-content.ts
 * (source .env.local first, or use: set -a && source .env.local && set +a)
 */

import { createClient } from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_API_TOKEN

if (!projectId || !token) {
  console.error('Missing required env vars: NEXT_PUBLIC_SANITY_PROJECT_ID and SANITY_API_TOKEN')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  token,
})

async function removeServiceAreas() {
  const areasToRemove = ['Fords', 'Oakhurst']
  console.log('--- Removing service areas ---')

  for (const areaName of areasToRemove) {
    const docs = await client.fetch(
      `*[_type == "serviceArea" && name == $name]{ _id, name }`,
      { name: areaName }
    )

    if (docs.length === 0) {
      console.log(`  "${areaName}" not found — skipping`)
      continue
    }

    for (const doc of docs) {
      console.log(`  Deleting "${doc.name}" (${doc._id})...`)
      await client.delete(doc._id)
      console.log(`  Deleted "${doc.name}"`)
    }
  }
}

async function fixWarrantyBadge() {
  console.log('\n--- Fixing warranty trust badge ---')

  const badges = await client.fetch(
    `*[_type == "trustBadge" && title match "365*"]{ _id, title, description }`
  )

  if (badges.length === 0) {
    console.log('  No "365-Day" trust badge found — skipping')
    return
  }

  for (const badge of badges) {
    console.log(`  Updating "${badge.title}" (${badge._id}) → "1 Year Warranty"`)
    await client
      .patch(badge._id)
      .set({
        title: 'Up to 1-Year Warranty',
        description: 'Parts warranty based on brand with matching labor warranty coverage.',
      })
      .commit()
    console.log(`  Updated to "Up to 1-Year Warranty"`)
  }
}

async function main() {
  await removeServiceAreas()
  await fixWarrantyBadge()
  console.log('\nDone! Changes will reflect on the website after revalidation (~5 min).')
}

main().catch((err) => {
  console.error('Error:', err)
  process.exit(1)
})
