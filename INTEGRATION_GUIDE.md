# PayloadCMS Integration Layer - Complete Guide

## Overview

This integration layer connects all 3 design themes (Elegant Minimalist, Bold Modern, Classic Premium) with PayloadCMS, providing a complete, production-ready frontend for the Advance Appliance Repair website.

## Architecture

### Design System
The application supports 3 interchangeable design themes:
- **Design 1**: Elegant Minimalist (Gold & Black)
- **Design 2**: Bold Modern (Orange & Black)
- **Design 3**: Classic Premium (Navy & Brown)

### Key Features
- Server-side rendering (SSR) for optimal SEO
- Incremental Static Regeneration (ISR) for performance
- Static page generation for all CMS content
- Dynamic routing for pages, services, blog posts, and service areas
- Full TypeScript support
- Responsive design across all breakpoints
- Schema.org markup for rich search results
- Accessibility features (ARIA labels, keyboard navigation)

## File Structure

```
src/
├── app/(frontend)/
│   ├── layout.tsx                    # Root layout with fonts
│   ├── page.tsx                      # Homepage (✓)
│   ├── loading.tsx                   # Loading state (✓)
│   ├── error.tsx                     # Error boundary (✓)
│   ├── not-found.tsx                 # 404 page (✓)
│   ├── [...slug]/
│   │   └── page.tsx                  # Dynamic CMS pages (✓)
│   ├── services/
│   │   ├── page.tsx                  # Services listing (✓)
│   │   └── [slug]/page.tsx           # Service detail (✓)
│   ├── blog/
│   │   ├── page.tsx                  # Blog listing (✓)
│   │   └── [slug]/page.tsx           # Blog post detail (✓)
│   ├── areas/
│   │   └── [slug]/page.tsx           # Service area pages (✓)
│   ├── about/
│   │   └── page.tsx                  # About page (✓)
│   └── contact/
│       └── page.tsx                  # Contact page (✓)
├── components/
│   ├── BlockRenderer.tsx             # Renders CMS blocks (✓)
│   ├── DesignProvider.tsx            # Design theme context (✓)
│   ├── RichText.tsx                  # Rich text renderer (✓)
│   └── JsonLd.tsx                    # Schema.org markup (existing)
├── lib/
│   ├── getDesignComponents.ts        # Design component mapper (✓)
│   └── payloadFetchers.ts            # Server-side data fetching (✓)
├── hooks/
│   └── usePayloadData.ts             # Client-side data hooks (✓)
└── designs/
    ├── design1/                      # Elegant Minimalist theme
    ├── design2/                      # Bold Modern theme
    └── design3/                      # Classic Premium theme
```

## Configuration

### Environment Variables

Add to your `.env` file:

```env
# Design Theme Selection (1, 2, or 3)
NEXT_PUBLIC_DESIGN_THEME=1

# Server URL
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Design Theme Selection

You can switch between designs in 3 ways:

1. **Environment Variable** (recommended for production):
   ```env
   NEXT_PUBLIC_DESIGN_THEME=1
   ```

2. **Code Configuration** (edit `src/lib/getDesignComponents.ts`):
   ```typescript
   export function getCurrentDesignTheme(): DesignTheme {
     return '1' // Change to '2' or '3'
   }
   ```

3. **Query Parameter** (for testing):
   ```
   ?theme=2
   ```

## Component Usage

### BlockRenderer

Renders PayloadCMS page blocks using the appropriate design components:

```tsx
import { BlockRenderer } from '@/components/BlockRenderer'

<BlockRenderer blocks={page.layout} designTheme="1" />
```

Supported block types:
- `hero` - Hero section with background image and CTAs
- `content` - Rich text content with column layouts
- `cta` - Call-to-action section
- `featuredServices` - Grid of service cards
- `testimonials` - Customer testimonials
- `faq` - Frequently asked questions accordion

### DesignProvider

Provides design theme context to client components:

```tsx
'use client'
import { DesignProvider, useDesignComponents } from '@/components/DesignProvider'

export default function MyComponent() {
  return (
    <DesignProvider theme="1">
      <Content />
    </DesignProvider>
  )
}

function Content() {
  const { Header, Footer, ServiceCard } = useDesignComponents()

  return (
    <>
      <Header />
      <ServiceCard title="Refrigerator Repair" />
      <Footer />
    </>
  )
}
```

### RichText

Renders Lexical rich text content from PayloadCMS:

```tsx
import { RichText } from '@/components/RichText'

<RichText content={page.content} className="my-custom-class" />
```

Utility functions:
```tsx
import { extractPlainText, truncateRichText } from '@/components/RichText'

const text = extractPlainText(richTextContent)
const excerpt = truncateRichText(richTextContent, 160)
```

## Data Fetching

### Server Components (Recommended)

Use server-side data fetching for optimal performance:

```tsx
import { fetchServiceBySlug, fetchSettings } from '@/lib/payloadFetchers'

export default async function ServicePage({ params }) {
  const service = await fetchServiceBySlug(params.slug)
  const settings = await fetchSettings()

  return <div>{service.name}</div>
}
```

Available fetchers:
- `fetchPageBySlug(slug)`
- `fetchAllPages()`
- `fetchServiceBySlug(slug)`
- `fetchAllServices()`
- `fetchBlogPostBySlug(slug)`
- `fetchAllBlogPosts(options?)`
- `fetchServiceAreaBySlug(slug)`
- `fetchAllServiceAreas()`
- `fetchTestimonials(options?)`
- `fetchSettings()`
- `searchContent(query)`

### Client Components

Use custom hooks for client-side data fetching:

```tsx
'use client'
import { useServices, useBlogPosts } from '@/hooks/usePayloadData'

export default function MyComponent() {
  const { data, loading, error } = useServices()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return <div>{data?.docs.map(service => ...)}</div>
}
```

Available hooks:
- `useServices(limit?)`
- `useService(slug)`
- `useBlogPosts(params?)`
- `useBlogPost(slug)`
- `useTestimonials(featured?)`
- `useServiceAreas()`
- `useServiceArea(slug)`
- `usePage(slug)`
- `useSettings()`
- `usePaginatedData(baseUrl, initialLimit)`

## SEO & Metadata

### Page-Level Metadata

All pages implement `generateMetadata()` for dynamic SEO:

```tsx
export async function generateMetadata({ params }): Promise<Metadata> {
  const page = await fetchPageBySlug(params.slug)

  return {
    title: page.meta?.seo?.title || page.title,
    description: page.meta?.seo?.description || '',
    openGraph: {
      title: page.meta?.seo?.title || page.title,
      images: [{ url: page.meta?.seo?.image }],
    },
  }
}
```

### Schema.org Markup

Structured data for rich search results:

```tsx
import { JsonLd, generateServiceSchema } from '@/components/JsonLd'

const schema = generateServiceSchema({
  name: service.name,
  description: service.excerpt,
  providerName: settings.siteName,
})

<JsonLd data={schema} />
```

Available schema generators:
- `generateLocalBusinessSchema()`
- `generateServiceSchema()`
- `generateBlogPostingSchema()`
- `generateFAQPageSchema()`

## Static Site Generation

### Generate Static Pages

All pages are pre-rendered at build time using `generateStaticParams()`:

```tsx
export async function generateStaticParams() {
  const services = await fetchAllServices()

  return services.map((service) => ({
    slug: service.slug,
  }))
}
```

### Incremental Static Regeneration (ISR)

Pages are revalidated every hour:

```tsx
export const revalidate = 3600 // 1 hour
```

To rebuild a specific page on-demand:
```bash
curl -X POST http://localhost:3000/api/revalidate?path=/services/refrigerator-repair
```

## Styling

### Tailwind CSS Classes

All components use Tailwind CSS with custom configuration:

```typescript
// Key color classes
bg-gold-500      // Primary gold color
text-gold-500    // Gold text
hover:bg-gold-400 // Lighter gold on hover
```

### Custom CSS Variables

Design-specific fonts from layout:

```css
--font-playfair  /* Design 1 headings */
--font-inter     /* Design 1 body */
--font-bebas     /* Design 2 headings */
--font-poppins   /* Design 2 body */
--font-cormorant /* Design 3 headings */
--font-source    /* Design 3 body */
```

## Performance Optimization

### Image Optimization

Use Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image'

<Image
  src={imageUrl}
  alt={altText}
  width={800}
  height={600}
  priority // For above-fold images
/>
```

### Code Splitting

Dynamic imports for heavy components:

```tsx
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Loading />,
})
```

### Caching Strategy

- **Static Pages**: Pre-rendered at build time
- **ISR Pages**: Revalidated every hour
- **Dynamic Pages**: Server-rendered on demand

## Accessibility

All pages implement WCAG 2.1 Level AA standards:

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Skip to main content link
- Focus management
- Color contrast ratios

## Error Handling

### Error Boundaries

Custom error page at `app/(frontend)/error.tsx`:

```tsx
<Error error={error} reset={() => window.location.reload()} />
```

### 404 Pages

Custom 404 page at `app/(frontend)/not-found.tsx`:

```tsx
import { notFound } from 'next/navigation'

if (!page) {
  notFound()
}
```

### Loading States

Global loading component at `app/(frontend)/loading.tsx`:

```tsx
<Loading />
```

## Testing

### Manual Testing Checklist

- [ ] Homepage renders correctly with all blocks
- [ ] Service pages display with proper metadata
- [ ] Blog posts render with rich text content
- [ ] Service area pages show neighborhoods
- [ ] Contact form displays correctly
- [ ] About page renders (CMS or fallback)
- [ ] 404 page shows for invalid routes
- [ ] Error boundary catches errors gracefully
- [ ] Loading states display during navigation
- [ ] All 3 designs render correctly
- [ ] Mobile responsive on all pages
- [ ] SEO metadata present in page source
- [ ] Schema.org markup validates

### Switch Design Themes

1. Update `.env`:
   ```env
   NEXT_PUBLIC_DESIGN_THEME=2
   ```

2. Restart dev server:
   ```bash
   npm run dev
   ```

3. Verify design components load correctly

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Vercel Deployment

```bash
vercel --prod
```

### Environment Variables (Production)

Set in your hosting platform:
- `NEXT_PUBLIC_DESIGN_THEME=1`
- `NEXT_PUBLIC_SERVER_URL=https://yourdomain.com`
- `DATABASE_URI=your_database_uri`

## Troubleshooting

### Design Components Not Loading

Check that all design exports are available:
```bash
# Verify design exports
cat src/designs/design1/components/index.ts
```

### TypeScript Errors

Regenerate Payload types:
```bash
npm run generate:types
```

### Build Errors

Clear Next.js cache:
```bash
npm run clean
npm run build
```

### ISR Not Working

Verify revalidate is set:
```tsx
export const revalidate = 3600
```

Check API route exists:
```
/app/api/revalidate/route.ts
```

## Support

For issues or questions:
1. Check this guide
2. Review TypeScript errors
3. Check Next.js console output
4. Verify PayloadCMS admin content
5. Test in multiple browsers

## Next Steps

1. **Customize Designs**: Modify components in `src/designs/`
2. **Add More Blocks**: Extend `BlockRenderer.tsx`
3. **Custom Forms**: Implement form handling in contact page
4. **Analytics**: Add tracking to layout
5. **Search**: Implement site-wide search using `searchContent()`
6. **Newsletter**: Add email subscription
7. **Testimonials**: Create testimonials submission form
8. **Live Chat**: Integrate chat widget

---

**Version**: 1.0.0
**Last Updated**: December 31, 2025
**Framework**: Next.js 15 + PayloadCMS 3.14
