# 🚀 Complete Setup Guide

## 🔍 Issues Identified

Based on your codebase analysis, here are the issues found:

### ❌ **Missing from Website:**
1. **Ice Maker Repair** service (defined in code but not in CMS)
2. Possibly other services not synced to Sanity CMS
3. Service Areas (38 locations) may not be in CMS
4. Blog Posts may not be published
5. Testimonials may not be in CMS

### ✅ **What's Working:**
- Static content exists in `src/designs/design1/data/content.ts`
- All service definitions are complete and ready
- Sanity CMS schema is properly configured

---

## 📦 Step-by-Step Setup

### Step 1: Set Up Sanity CMS Project

#### Option A: You Already Have a Sanity Project
1. Go to: https://www.sanity.io/manage
2. Find your project and copy the **Project ID**
3. Go to **API** → **Tokens** → **Add API Token**
4. Name: `Import Script`, Permissions: **Editor**
5. Copy the token

#### Option B: Create a New Sanity Project
```bash
# Install Sanity CLI
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Initialize project (in a temporary folder)
mkdir temp-sanity && cd temp-sanity
sanity init

# Follow prompts:
# - Create new project: Yes
# - Project name: Advance Appliance CMS
# - Dataset: production
# - Output path: .
# - Schema: Clean project

# Copy the Project ID shown
cd .. && rm -rf temp-sanity
```

### Step 2: Configure Environment Variables

Create `.env.local` file in the root directory:

```bash
# Copy the example
cp .env.example .env.local
```

Edit `.env.local` and add your Sanity credentials:

```env
# =============================================================================
# SANITY CMS (REQUIRED)
# =============================================================================
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2024-01-01"
SANITY_API_TOKEN="your_write_token_here"

# =============================================================================
# NEXT.JS
# =============================================================================
NEXT_PUBLIC_SERVER_URL="https://advance-appliance-production.up.railway.app"
NODE_ENV="production"

# =============================================================================
# EXISTING (Keep these)
# =============================================================================
DATABASE_URL="postgresql://postgres:vYRVQrfMIQivQrCiszFMXYaSQlKnaPpP@tramway.proxy.rlwy.net:53374/railway"
PAYLOAD_SECRET="ghDwxDsqznhRYeeDOLrAvF0p8cedUa7U0X2HRn/bFp0="
PREVIEW_SECRET="dev-preview-secret"
REVALIDATION_SECRET="dev-revalidation-secret"
BLOG_API_KEY="dev-blog-api-key-12345"
```

### Step 3: Import Data to Sanity CMS

```bash
# Make sure you're in the project directory
cd advance-appliance

# Run the import script
npm run seed:sanity
```

Expected output:
```
🚀 Starting Sanity CMS Data Import...

📦 Importing Services...
✅ Imported: Refrigerator Repair
✅ Imported: Washer Repair
✅ Imported: Dryer Repair
✅ Imported: Dishwasher Repair
✅ Imported: Oven & Range Repair
✅ Imported: Cooktop Repair
✅ Imported: Freezer Repair
✅ Imported: Ice Maker Repair ⭐ NEW!
✅ Imported: Stove Repair

📍 Importing Service Areas...
✅ Imported: Aberdeen, Monmouth County
✅ Imported: Belford, Monmouth County
... (38 total)

📝 Importing Blog Posts...
✅ Imported: Emergency Washer Repair Guide
... (4 total)

⭐ Importing Testimonials...
✅ Imported: Ira K. - Frigidaire Washer & Dryer Repair
... (9 total)

✨ Data import completed successfully!
```

### Step 4: Add Images in Sanity Studio

Images need to be uploaded manually:

1. Start dev server: `npm run dev`
2. Go to: `http://localhost:3001/studio`
3. Login with your Sanity credentials
4. For each **Service**, **Blog Post**, and **Service Area**:
   - Click to edit
   - Upload the corresponding image
   - Images are in the `/public` folder
5. Save each document

### Step 5: Verify Everything Works

1. **Check Sanity Studio:**
   - Services: Should see 9 services (including Ice Maker Repair)
   - All should be marked "Published"

2. **Check Website:**
   - Visit: `http://localhost:3001/services`
   - You should see all 9 services including Ice Maker Repair!
   - Visit: `http://localhost:3001/services/ice-maker-repair`

3. **Check Other Pages:**
   - Service Areas: `http://localhost:3001/our-service-area`
   - Blog: `http://localhost:3001/blog`
   - Reviews: `http://localhost:3001/our-reviews`

---

## 🔧 Troubleshooting

### Issue: "SANITY_API_TOKEN is not set"
**Solution:**
1. Make sure `.env.local` exists (not just `.env.example`)
2. Verify the token is correct
3. Restart terminal/IDE
4. Try: `source .env.local` (if on Mac/Linux)

### Issue: "Unauthorized" or "Permission denied"
**Solution:**
1. Go to https://www.sanity.io/manage
2. Select your project → API → Tokens
3. Create new token with **Editor** or **Administrator** permissions
4. Update `.env.local` with new token

### Issue: Services still not showing on website
**Solution:**
1. Check Sanity Studio - are services "Published"? (not "Draft")
2. Clear cache: `rm -rf .next && npm run dev`
3. Check browser console for errors
4. Verify `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct

### Issue: "Cannot find module 'ts-node'"
**Solution:**
```bash
npm install ts-node --save-dev
```

### Issue: Images not displaying
**Solution:**
1. Upload images in Sanity Studio manually
2. Images must be uploaded through Studio, not just file paths
3. Check `src/sanity/image.ts` configuration

---

## 📊 What Gets Imported

| Content Type | Count | Status |
|--------------|-------|--------|
| **Services** | 9 | ✅ All set to Published |
| **Service Areas** | 38 | ✅ Monmouth & Middlesex Counties |
| **Blog Posts** | 4 | ✅ Ready for images |
| **Testimonials** | 9 | ✅ Featured reviews |

---

## 🎯 Service List (After Import)

1. ✅ Refrigerator Repair
2. ✅ Washer Repair
3. ✅ Dryer Repair
4. ✅ Dishwasher Repair
5. ✅ Oven & Range Repair
6. ✅ Cooktop Repair
7. ✅ Freezer Repair
8. ✅ **Ice Maker Repair** ⭐ (Was Missing!)
9. ✅ Stove Repair

---

## 🚀 Deployment to Production

After everything works locally:

### Update Railway Environment Variables

1. Go to: https://railway.app (your Railway dashboard)
2. Select your project: `advance-appliance-production`
3. Go to **Variables** tab
4. Add these variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

5. Click **Deploy** to restart with new variables

### Run Import on Production (Optional)

If you want to import data directly to production:

```bash
# Set production dataset
NEXT_PUBLIC_SANITY_DATASET=production npm run seed:sanity
```

---

## 📚 Additional Resources

- **Sanity Documentation:** https://www.sanity.io/docs
- **Sanity Studio:** Access at `/studio` route
- **Import Script:** `scripts/seed-sanity-data.ts`
- **Content Data:** `src/designs/design1/data/content.ts`

---

## ✅ Success Checklist

- [ ] Sanity project created or located
- [ ] Project ID and API token obtained
- [ ] `.env.local` file created with credentials
- [ ] Import script run successfully (`npm run seed:sanity`)
- [ ] Images uploaded in Sanity Studio
- [ ] All services visible on `/services` page
- [ ] Ice Maker Repair page accessible at `/services/ice-maker-repair`
- [ ] Production environment variables updated
- [ ] Website deployed and working

---

## 🆘 Need Help?

If you encounter issues:

1. Check the console output for error messages
2. Verify all environment variables are set correctly
3. Try clearing Next.js cache: `npm run clean && npm run dev`
4. Check Sanity Studio for data presence
5. Review the `SANITY_IMPORT_GUIDE.md` for detailed steps

**Common fix:** Most issues are due to missing or incorrect environment variables!
