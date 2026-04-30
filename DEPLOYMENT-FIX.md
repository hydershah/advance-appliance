# DEPLOYMENT FIX — `NEXT_PUBLIC_SERVER_URL` env-var (CRITICAL)

## TL;DR

The single biggest cause of broken SEO on this site is one wrong line in your
production environment. **The fix is one click.** It does not require a code
change.

---

## The bug

Production (Railway) has this env var set:

```
NEXT_PUBLIC_SERVER_URL=https://advance-appliance-production.up.railway.app
```

The code uses that env var to build:

- Every canonical URL on every page (`<link rel="canonical">`)
- Every Open Graph and Twitter URL (`og:url`, `twitter:url`, image URLs)
- Every JSON-LD `@id` and `url` (LocalBusiness, Service, BreadcrumbList,
  Article, Review, FAQPage — all of them)
- Every URL in `sitemap.xml` (392 URLs)
- The `Sitemap:` and `Host:` directives in `robots.txt`
- Every URL in `llms.txt` and `llms-full.txt`

So Google sees the entire site under `advance-appliance-production.up.railway.app`
instead of `www.appliancenj.com`. That's why:

1. **The SERP source label says "Railway"** (the Railway-app favicon/branding
   wins because the canonical points there)
2. **Schema entities are split** between two domains and Google can't
   reconcile them
3. **Old URLs in Google's index** don't redirect cleanly because Google has
   indexed the wrong canonical
4. **Every page's title/description is technically correct in the HTML**, but
   Google often replaces them with what it scraped from the Railway URL

---

## The fix (production)

In **Railway → Project → Variables** (or whatever the deployment platform's
env-var UI is called), change:

```
NEXT_PUBLIC_SERVER_URL=https://advance-appliance-production.up.railway.app
```

to:

```
NEXT_PUBLIC_SERVER_URL=https://www.appliancenj.com
```

**Then trigger a redeploy.** Railway: click "Redeploy" on the latest
deployment, or push a no-op commit to force a rebuild.

---

## How to verify the fix worked

After the redeploy completes, run these:

```sh
# 1. Sitemap should reference appliancenj.com only
curl -s https://www.appliancenj.com/sitemap.xml | head -20
# Look for <loc>https://www.appliancenj.com/...</loc> — NOT railway.app

# 2. Robots.txt should reference appliancenj.com
curl -s https://www.appliancenj.com/robots.txt | grep -E "Sitemap|Host"
# Should return: Sitemap: https://www.appliancenj.com/sitemap.xml

# 3. Homepage canonical
curl -s https://www.appliancenj.com | grep -i "canonical"
# Should reference https://www.appliancenj.com (not railway.app)

# 4. JSON-LD schema
curl -s https://www.appliancenj.com | grep -oE 'https://[^"]*' | sort -u | head -10
# All URLs should be www.appliancenj.com — none should be railway.app

# 5. llms.txt
curl -s https://www.appliancenj.com/llms.txt | head -20
# Linked URLs should be www.appliancenj.com
```

If any of those still show `railway.app`, the redeploy did not pick up the
new env var. Check:

- Did Railway actually rebuild? (Look at the deployment timestamp.)
- Is there an `.env.local` file checked into git that overrides the platform
  env? (There shouldn't be — `.env.local` is gitignored.)
- Is there a `process.env.NEXT_PUBLIC_SERVER_URL` set elsewhere in the build
  pipeline (`Dockerfile`, `vercel.json`)?

---

## Then ask Google to re-crawl

The env var change fixes the **future** crawls but Google's existing index
still has the old Railway URLs. To accelerate the cleanup:

1. Open **Google Search Console** at https://search.google.com/search-console
2. Verify the `https://www.appliancenj.com` property if not already
   verified.
3. **URL Inspection** for these priority pages and click **Request Indexing**:
   - `https://www.appliancenj.com/`
   - `https://www.appliancenj.com/about`
   - `https://www.appliancenj.com/areas/appliance-repair-in-morganville-nj`
   - `https://www.appliancenj.com/areas/appliance-repair-marlboro-nj`
   - `https://www.appliancenj.com/areas/appliance-repair-in-holmdel-nj`
   - `https://www.appliancenj.com/sub-zero-appliance-repair-service-nj`
   - `https://www.appliancenj.com/sub-zero-appliance-repair-in-holmdel-nj`
4. **Submit the sitemap**: in GSC → Sitemaps → add
   `https://www.appliancenj.com/sitemap.xml`. Confirm it shows 174+ URLs
   and zero errors.
5. Wait 2–7 days for high-priority pages to recrawl, 2–4 weeks for the full
   index to update.

The old Railway URL (if Google indexed it) will eventually drop out of the
index. You can also verify in GSC → Coverage → Indexed and search for
`up.railway.app` URLs to monitor decay.

---

## Why the env var was wrong

The repo's `.env.example` line 164 ships with:

```
NEXT_PUBLIC_SERVER_URL=https://advance-appliance-production.up.railway.app
```

Whoever set up Railway production likely copied that as-is. We've kept the
in-code fallback (`https://www.appliancenj.com` when `NODE_ENV !== 'development'`)
so even if the env var is deleted, prod still emits the correct domain.

But if the env var is explicitly set to the wrong value, it overrides the
fallback. **The env var has to actually be the right value, or unset.**

---

## What was already fixed in code (this commit's changes)

These do NOT require the env var change to take effect — they ship as soon
as production deploys this commit:

- `robots.ts` fallback now resolves to `www.appliancenj.com` instead of
  `localhost:3000` when env var is unset
- `provider.name` in area + combo schema corrected from "Advanced Appliance"
  → "Advanced Appliance Repair Service" (matches GBP entity)
- `sameAs` URLs in `lib/schema.ts` corrected (Facebook/Instagram URLs were
  pointing at non-existent slugs that 404)
- Blog post route now serves static-first to avoid Suspense fallback ("Loading...")
  rendering as the SSR HTML for crawlers
- Geo coordinates increased to 5-decimal precision (~1.1m accuracy)
- Removed duplicate `<LocalBusinessSchema />` from 13 page components — the
  global one in `(frontend)/layout.tsx` is now the single source of truth.
  Page-level review nodes now reference `#organization` instead of redefining
  a `#localbusiness` competing entity.

---

## Other deployment-side checks worth doing

While you're in Railway:

- Confirm `RESEND_API_KEY` is set (contact form delivery)
- Confirm `CONTACT_EMAILS` is set (where leads go)
- Confirm `PREVIEW_SECRET` is set if you use Sanity preview mode
- Confirm `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`
  are set if Sanity-driven content matters in production

And **DNS / domain**:

- Confirm `appliancenj.com` (apex, no www) issues a **301 redirect to**
  `https://www.appliancenj.com/`. Right now an audit found the apex returns
  a 405 Method Not Allowed. Set up a redirect rule at the DNS provider or
  Railway custom-domain settings.
