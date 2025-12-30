# SEO Testing & Validation Checklist

Complete testing checklist for SEO implementation.

---

## Pre-Launch Testing (Local Development)

### 1. Verify Files Exist

```bash
# Check all SEO files are present
ls -la src/lib/seo.ts
ls -la src/lib/schema.ts
ls -la src/components/SEO/JsonLd.tsx
ls -la src/components/SEO/Breadcrumbs.tsx
ls -la src/components/SEO/OpenGraph.tsx
ls -la src/app/sitemap.ts
ls -la src/app/robots.ts
ls -la src/app/api/og/route.tsx
ls -la public/manifest.json
ls -la public/browserconfig.xml
```

### 2. Test Build

```bash
# Run type checking
npm run type-check

# Build the project
npm run build

# Check for errors
```

### 3. Test Routes

Start dev server:
```bash
npm run dev
```

Visit these URLs:

- [ ] `http://localhost:3000` - Homepage loads
- [ ] `http://localhost:3000/sitemap.xml` - Sitemap generates
- [ ] `http://localhost:3000/robots.txt` - Robots.txt displays
- [ ] `http://localhost:3000/manifest.json` - Manifest is valid JSON
- [ ] `http://localhost:3000/api/og?title=Test` - OG image generates

### 4. Inspect Page Source

View source on homepage:

- [ ] `<script type="application/ld+json">` tags present
- [ ] LocalBusiness schema visible
- [ ] WebSite schema visible
- [ ] Meta tags present (title, description, OG tags)
- [ ] Canonical URL set correctly

---

## Schema Validation

### Google Rich Results Test

Visit: https://search.google.com/test/rich-results

Test each page type:

- [ ] **Homepage** - LocalBusiness + WebSite schemas
  - Should detect: Organization, Local Business, Website

- [ ] **Service Page** - Service + FAQ schemas
  - Should detect: Service, FAQ

- [ ] **Blog Post** - Article schema
  - Should detect: Article/BlogPosting

- [ ] **Service Area** - LocalBusiness schema
  - Should detect: Local Business

### Schema.org Validator

Visit: https://validator.schema.org/

Paste JSON-LD from each page and verify:

- [ ] No errors
- [ ] All required properties present
- [ ] Warnings addressed (if any)

### Expected Results

**LocalBusiness Schema should include:**
- `@type: LocalBusiness`
- `name`
- `address` (full postal address)
- `geo` (latitude, longitude)
- `telephone`
- `openingHours`
- `url`
- `image`

**Service Schema should include:**
- `@type: Service`
- `name`
- `description`
- `provider`
- `areaServed`

**Article Schema should include:**
- `@type: Article`
- `headline`
- `datePublished`
- `dateModified`
- `author`
- `publisher`
- `image`

---

## Open Graph Testing

### Facebook Debugger

Visit: https://developers.facebook.com/tools/debug/

Test URLs:

- [ ] Homepage
- [ ] Service page
- [ ] Blog post

Verify:

- [ ] Image displays (1200x630)
- [ ] Title is correct
- [ ] Description is correct
- [ ] No errors or warnings

### OpenGraph.xyz

Visit: https://www.opengraph.xyz/

Test same URLs and verify:

- [ ] Image preview looks good
- [ ] Title under 60 characters
- [ ] Description under 155 characters
- [ ] All meta tags present

---

## Twitter Card Testing

Visit: https://cards-dev.twitter.com/validator

Test URLs:

- [ ] Homepage
- [ ] Service page
- [ ] Blog post

Verify:

- [ ] Card type: `summary_large_image`
- [ ] Image displays correctly
- [ ] Title and description correct
- [ ] `@advanceappliance` shown

---

## Sitemap Validation

### XML Sitemap Validator

Visit: https://www.xml-sitemaps.com/validate-xml-sitemap.html

Check your sitemap:

- [ ] Valid XML format
- [ ] All URLs accessible
- [ ] No 404 errors
- [ ] Proper lastmod dates
- [ ] Priority values 0.0-1.0
- [ ] Change frequency set

### Manual Inspection

View `/sitemap.xml`:

- [ ] Homepage (priority 1.0)
- [ ] Services (priority 0.9)
- [ ] Blog posts (priority 0.6-0.7)
- [ ] Service areas (priority 0.7)
- [ ] Contact page (priority 0.9)
- [ ] URLs are absolute (include domain)
- [ ] Dates are ISO 8601 format

---

## Robots.txt Validation

### Robots.txt Tester

Visit: https://www.google.com/webmasters/tools/robots-testing-tool

Or view `/robots.txt` and verify:

- [ ] `/` is allowed
- [ ] `/admin` is blocked
- [ ] `/api/*` is blocked
- [ ] Sitemap URL is present
- [ ] User-agent rules are correct

---

## Metadata Validation

### On Each Page Type

Use browser inspector (View > Developer > View Source):

**Required Meta Tags:**

- [ ] `<title>` present and unique
- [ ] `<meta name="description">` present
- [ ] `<link rel="canonical">` present
- [ ] `<meta property="og:title">`
- [ ] `<meta property="og:description">`
- [ ] `<meta property="og:image">`
- [ ] `<meta property="og:url">`
- [ ] `<meta property="og:type">`
- [ ] `<meta name="twitter:card">`
- [ ] `<meta name="twitter:title">`
- [ ] `<meta name="twitter:description">`
- [ ] `<meta name="twitter:image">`

**Title Length:**
- [ ] Homepage: ≤ 60 characters
- [ ] Service pages: ≤ 60 characters
- [ ] Blog posts: ≤ 60 characters

**Description Length:**
- [ ] Homepage: 150-155 characters
- [ ] Service pages: 150-155 characters
- [ ] Blog posts: 150-155 characters

---

## Mobile Testing

### Google Mobile-Friendly Test

Visit: https://search.google.com/test/mobile-friendly

Test each page type:

- [ ] Mobile-friendly
- [ ] Text readable without zooming
- [ ] No horizontal scrolling
- [ ] Tap targets appropriately sized

### Real Device Testing

Test on actual mobile devices:

- [ ] iPhone/iOS
- [ ] Android phone
- [ ] Tablet

Verify:

- [ ] Breadcrumbs display correctly
- [ ] Images load properly
- [ ] PWA manifest works
- [ ] Add to home screen works

---

## Performance Testing

### Google PageSpeed Insights

Visit: https://pagespeed.web.dev/

Test homepage:

**Target Scores:**
- [ ] Performance: ≥ 90
- [ ] Accessibility: ≥ 95
- [ ] Best Practices: ≥ 95
- [ ] SEO: 100

**Key Metrics:**
- [ ] LCP (Largest Contentful Paint): < 2.5s
- [ ] FID (First Input Delay): < 100ms
- [ ] CLS (Cumulative Layout Shift): < 0.1

### SEO Score

Should be 100/100. If not, check:

- [ ] Missing meta description
- [ ] Image alt attributes
- [ ] Crawlable links
- [ ] Valid robots.txt
- [ ] Valid sitemap

---

## Search Console Setup

### Google Search Console

Visit: https://search.google.com/search-console

**Initial Setup:**

1. [ ] Add property (Domain or URL prefix)
2. [ ] Verify ownership (add code to layout.tsx)
3. [ ] Submit sitemap (`/sitemap.xml`)
4. [ ] Request indexing for homepage

**Monitor (After 48 hours):**

- [ ] Coverage report - pages indexed
- [ ] Enhancements - structured data
- [ ] Mobile usability
- [ ] Core Web Vitals
- [ ] Rich results (FAQs, ratings, breadcrumbs)

### Bing Webmaster Tools

Visit: https://www.bing.com/webmasters

Repeat same process:

- [ ] Add site
- [ ] Verify ownership
- [ ] Submit sitemap
- [ ] Monitor indexing

---

## Content Validation

### Check Business Information

On every page with LocalBusiness schema:

- [ ] Phone: (732) 416-7430
- [ ] Address: 23 Reids Hill Road, Morganville, NJ 07751
- [ ] Hours: Mo-Su 08:00-21:00
- [ ] Coordinates: 40.3565, -74.2532

### Check Consistency

NAP (Name, Address, Phone) must be identical:

- [ ] In schema markup
- [ ] In footer
- [ ] In contact page
- [ ] In about page

### Verify Service Areas

In schemas and content:

- [ ] Monmouth County, NJ
- [ ] Middlesex County, NJ
- [ ] Morganville, NJ
- [ ] Marlboro, NJ
- [ ] Colts Neck, NJ
- [ ] Holmdel, NJ
- [ ] Freehold, NJ
- [ ] Old Bridge, NJ

---

## Competitor Analysis

### Compare to Competitors

Test 2-3 competitor sites:

**Check:**
- [ ] What schemas do they use?
- [ ] What's their Google Business Profile rating?
- [ ] How do their titles compare?
- [ ] What keywords do they target?
- [ ] Do they have rich snippets?

**Your Advantages:**
- [ ] More comprehensive schemas
- [ ] Better local SEO implementation
- [ ] FAQ rich snippets
- [ ] Breadcrumb navigation
- [ ] Dynamic OG images

---

## Post-Launch Monitoring

### Week 1

- [ ] Google Search Console - any indexing errors?
- [ ] Google Search Console - rich results detected?
- [ ] Check for crawl errors
- [ ] Verify sitemap processed

### Week 2-4

- [ ] Monitor search rankings
- [ ] Check for rich snippet display
- [ ] Review click-through rates
- [ ] Check mobile usability reports

### Monthly

- [ ] Review top search queries
- [ ] Check page rankings
- [ ] Monitor Core Web Vitals
- [ ] Update content based on performance
- [ ] Add new blog posts with schemas

---

## Common Issues & Fixes

### Issue: Schemas not detected

**Fix:**
- Validate JSON syntax in browser console
- Check for duplicate @context
- Ensure script tag is in `<head>` or `<body>`

### Issue: Sitemap not updating

**Fix:**
- Check PayloadCMS collections exist
- Verify `_status: 'published'` field
- Clear Next.js cache: `npm run clean && npm run build`

### Issue: OG images not generating

**Fix:**
- Check `/api/og/route.tsx` is deployed
- Verify edge runtime is enabled
- Test locally: `http://localhost:3000/api/og?title=Test`

### Issue: Breadcrumbs not showing in search

**Fix:**
- May take weeks to appear
- Ensure schema is valid
- Check Search Console > Enhancements

---

## Tools Reference

### Validation
- **Rich Results:** https://search.google.com/test/rich-results
- **Schema Validator:** https://validator.schema.org/
- **Markup Validator:** https://validator.w3.org/
- **Sitemap Validator:** https://www.xml-sitemaps.com/validate-xml-sitemap.html

### Social Media
- **Facebook Debugger:** https://developers.facebook.com/tools/debug/
- **Twitter Validator:** https://cards-dev.twitter.com/validator
- **LinkedIn Inspector:** https://www.linkedin.com/post-inspector/
- **OG Debugger:** https://www.opengraph.xyz/

### Performance
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **WebPageTest:** https://www.webpagetest.org/

### SEO
- **Google Search Console:** https://search.google.com/search-console
- **Bing Webmaster:** https://www.bing.com/webmasters
- **Ahrefs:** https://ahrefs.com/
- **SEMrush:** https://www.semrush.com/

### Mobile
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Responsive Design Checker:** https://responsivedesignchecker.com/

---

## Success Criteria

Your SEO implementation is successful when:

- [ ] **All schemas validate** with zero errors
- [ ] **Rich snippets appear** in search results (may take 2-4 weeks)
- [ ] **Sitemap indexed** by Google (check Search Console)
- [ ] **Mobile-friendly test passes** 100%
- [ ] **PageSpeed SEO score** is 100/100
- [ ] **OG images display** correctly on social media
- [ ] **Breadcrumbs visible** in search results (may take weeks)
- [ ] **Google Business Profile** linked to website
- [ ] **Core Web Vitals** pass (green)
- [ ] **No indexing errors** in Search Console

---

## Next Steps After Testing

1. [ ] Fix any errors found
2. [ ] Submit sitemap to Google Search Console
3. [ ] Submit sitemap to Bing Webmaster Tools
4. [ ] Create/verify Google Business Profile
5. [ ] Monitor rankings weekly
6. [ ] Create regular content with schemas
7. [ ] Build quality backlinks
8. [ ] Encourage customer reviews
9. [ ] Update schemas as business grows
10. [ ] Track conversions from organic search

---

## Notes

- Some features (rich snippets, breadcrumbs) may take 2-4 weeks to appear
- Google doesn't guarantee rich snippet display
- Monitor regularly and iterate based on data
- Keep schemas updated as business information changes
- Add new service areas as you expand

---

**Remember:** SEO is a long-term strategy. Full results may take 3-6 months to materialize.
