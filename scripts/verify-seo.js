#!/usr/bin/env node

/**
 * SEO Implementation Verification Script
 * Checks that all required SEO files and configurations are in place
 */

const fs = require('fs')
const path = require('path')

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
}

const log = {
  success: (msg) => console.log(`${colors.green}✓${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✗${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  section: (msg) => console.log(`\n${colors.blue}${msg}${colors.reset}`),
}

let hasErrors = false
let hasWarnings = false

// Check if file exists
function fileExists(filePath) {
  const fullPath = path.join(process.cwd(), filePath)
  return fs.existsSync(fullPath)
}

// Read file content
function readFile(filePath) {
  const fullPath = path.join(process.cwd(), filePath)
  try {
    return fs.readFileSync(fullPath, 'utf8')
  } catch (error) {
    return null
  }
}

// Check required files
log.section('Checking Required Files...')

const requiredFiles = [
  'src/lib/seo.ts',
  'src/lib/schema.ts',
  'src/components/SEO/JsonLd.tsx',
  'src/components/SEO/Breadcrumbs.tsx',
  'src/components/SEO/OpenGraph.tsx',
  'src/components/SEO/index.ts',
  'src/app/sitemap.ts',
  'src/app/robots.ts',
  'src/app/api/og/route.tsx',
  'public/manifest.json',
  'public/browserconfig.xml',
]

requiredFiles.forEach((file) => {
  if (fileExists(file)) {
    log.success(file)
  } else {
    log.error(`Missing: ${file}`)
    hasErrors = true
  }
})

// Check environment variables
log.section('Checking Environment Variables...')

const envFile = readFile('.env')
if (envFile) {
  if (envFile.includes('NEXT_PUBLIC_SERVER_URL')) {
    log.success('NEXT_PUBLIC_SERVER_URL defined')
  } else {
    log.error('Missing: NEXT_PUBLIC_SERVER_URL in .env')
    hasErrors = true
  }
} else {
  log.warning('.env file not found (using defaults)')
  hasWarnings = true
}

// Check layout.tsx for verification codes
log.section('Checking Verification Codes...')

const layoutFile = readFile('src/app/(frontend)/layout.tsx')
if (layoutFile) {
  if (layoutFile.includes('verification:')) {
    if (layoutFile.includes('your-google-verification-code')) {
      log.warning(
        'Google verification code is placeholder - update with actual code',
      )
      hasWarnings = true
    } else {
      log.success('Google verification code appears to be set')
    }

    if (layoutFile.includes('your-bing-verification-code')) {
      log.warning(
        'Bing verification code is placeholder - update with actual code',
      )
      hasWarnings = true
    } else {
      log.success('Bing verification code appears to be set')
    }
  } else {
    log.error('Verification section not found in layout.tsx')
    hasErrors = true
  }
}

// Check required image assets
log.section('Checking Image Assets...')

const requiredImages = [
  { path: 'public/og-image.jpg', desc: 'Default OG image (1200x630)' },
  { path: 'public/logo.png', desc: 'Business logo (600x60)' },
  { path: 'public/icon-192.png', desc: 'PWA icon 192x192' },
  { path: 'public/icon-512.png', desc: 'PWA icon 512x512' },
  { path: 'public/apple-touch-icon.png', desc: 'Apple touch icon (180x180)' },
  { path: 'public/favicon.ico', desc: 'Favicon' },
]

requiredImages.forEach(({ path, desc }) => {
  if (fileExists(path)) {
    log.success(`${path} - ${desc}`)
  } else {
    log.warning(`Missing: ${path} - ${desc}`)
    hasWarnings = true
  }
})

// Check BUSINESS_INFO configuration
log.section('Checking Business Information...')

const seoFile = readFile('src/lib/seo.ts')
if (seoFile) {
  const businessInfo = {
    name: 'Advanced Appliance Repair Service',
    phone: '(732) 416-7430',
    address: '23 Reids Hill Road',
    city: 'Morganville',
    state: 'NJ',
    zip: '07751',
  }

  Object.entries(businessInfo).forEach(([key, value]) => {
    if (seoFile.includes(value)) {
      log.success(`${key}: ${value}`)
    } else {
      log.warning(`Check ${key} in BUSINESS_INFO`)
      hasWarnings = true
    }
  })
}

// Check schema generators
log.section('Checking Schema Generators...')

const schemaFile = readFile('src/lib/schema.ts')
if (schemaFile) {
  const schemas = [
    'generateLocalBusinessSchema',
    'generateServiceSchema',
    'generateArticleSchema',
    'generateFAQPageSchema',
    'generateBreadcrumbSchema',
    'generateAggregateRatingSchema',
    'generateReviewSchema',
    'generateHomepageSchema',
    'generateWebSiteSchema',
    'generateHowToSchema',
    'generateVideoSchema',
  ]

  schemas.forEach((schema) => {
    if (schemaFile.includes(`export function ${schema}`)) {
      log.success(schema)
    } else {
      log.error(`Missing schema: ${schema}`)
      hasErrors = true
    }
  })
}

// Check manifest.json
log.section('Checking PWA Manifest...')

const manifestFile = readFile('public/manifest.json')
if (manifestFile) {
  try {
    const manifest = JSON.parse(manifestFile)
    if (manifest.name) {
      log.success(`App name: ${manifest.name}`)
    }
    if (manifest.short_name) {
      log.success(`Short name: ${manifest.short_name}`)
    }
    if (manifest.icons && manifest.icons.length > 0) {
      log.success(`Icons: ${manifest.icons.length} defined`)
    } else {
      log.warning('No icons defined in manifest')
      hasWarnings = true
    }
  } catch (error) {
    log.error('Invalid JSON in manifest.json')
    hasErrors = true
  }
}

// Final summary
log.section('Summary')

if (hasErrors) {
  log.error('Found errors that must be fixed before deployment')
  process.exit(1)
} else if (hasWarnings) {
  log.warning('Found warnings - review before deployment')
  log.info('See SEO-IMPLEMENTATION-GUIDE.md for details')
  process.exit(0)
} else {
  log.success('All SEO files and configurations are in place!')
  log.info('Next steps:')
  console.log('  1. Add verification codes to layout.tsx')
  console.log('  2. Create required image assets')
  console.log('  3. Set NEXT_PUBLIC_SERVER_URL in .env')
  console.log('  4. Test with: npm run dev')
  console.log('  5. Visit /sitemap.xml and /robots.txt')
  console.log('  6. Validate schemas with Google Rich Results Test')
  console.log('\n  See SEO-TESTING-CHECKLIST.md for complete testing guide')
  process.exit(0)
}
