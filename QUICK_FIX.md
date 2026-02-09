# ⚡ Quick Fix for Ice Maker Repair (and other missing services)

## 🎯 TL;DR - Get Ice Maker Repair showing in 5 minutes

### Step 1: Get Sanity Credentials (2 min)
1. Visit: https://www.sanity.io/manage
2. Find your project or create new one
3. Copy **Project ID**
4. Go to **API** → **Tokens** → Create token with **Editor** permissions
5. Copy the token

### Step 2: Add to Environment (1 min)
Create `.env.local`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
SANITY_API_TOKEN="your_write_token"
```

### Step 3: Import All Data (2 min)
```bash
npm run seed:sanity
```

Done! ✅ Visit: `http://localhost:3001/services`

---

## 📋 What This Fixes

### Missing Services
- ⭐ **Ice Maker Repair** (your main issue)
- All 9 services will be synced to CMS

### Missing Content
- 38 Service Areas (Monmouth & Middlesex Counties)
- 4 Blog Posts
- 9 Testimonials

---

## 🔍 Root Cause

Your website uses **Sanity CMS** to fetch content dynamically. The services are defined in your code (`content.ts`) but not in the CMS database.

**Code location:** `src/designs/design1/data/content.ts` (lines 672-758 for Ice Maker Repair)

**Website fetches from:** Sanity CMS → Only shows "published" content

**Solution:** Import static content to Sanity CMS

---

## 🚨 Common Errors & Fixes

### Error: "SANITY_API_TOKEN is not set"
```bash
# Fix: Create .env.local (NOT .env or .env.example)
touch .env.local
# Add credentials shown above
```

### Error: "npm run seed:sanity not found"
```bash
# Fix: I already added it to package.json
# Just run: npm install
```

### Services still not showing
1. Check Sanity Studio: `http://localhost:3001/studio`
2. Verify services are marked "Published" (not "Draft")
3. Clear cache: `rm -rf .next && npm run dev`

---

## 📱 Manual Alternative (If script fails)

1. Go to: `http://localhost:3001/studio`
2. Click **Services** → **Create**
3. Copy data from `src/designs/design1/data/content.ts` (lines 672-758)
4. Paste content for Ice Maker Repair
5. Set **Status** to **"Published"** ⚠️ CRITICAL!
6. Save

Repeat for other services if needed.

---

## ✅ Verify Success

```bash
# 1. Start dev server
npm run dev

# 2. Check services page
open http://localhost:3001/services

# 3. Check Ice Maker page
open http://localhost:3001/services/ice-maker-repair
```

---

## 🚀 For Production (Railway)

Add to Railway environment variables:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Then redeploy!

---

## 📖 Full Docs

- **Complete Setup:** See `SETUP_GUIDE.md`
- **Import Details:** See `SANITY_IMPORT_GUIDE.md`
- **Script Source:** `scripts/seed-sanity-data.ts`
