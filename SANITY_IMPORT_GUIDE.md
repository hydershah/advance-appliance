# Sanity CMS Data Import Guide

This guide will help you import all your services, service areas, blog posts, and testimonials into Sanity CMS.

## 🎯 What Will Be Imported

- ✅ **9 Services** (Including Ice Maker Repair)
  - Refrigerator Repair
  - Washer Repair
  - Dryer Repair
  - Dishwasher Repair
  - Oven & Range Repair
  - Cooktop Repair
  - Freezer Repair
  - Ice Maker Repair ⭐ (Was Missing!)
  - Stove Repair

- ✅ **38 Service Areas** (Monmouth & Middlesex Counties)
- ✅ **4 Blog Posts**
- ✅ **9 Testimonials**

## 📋 Prerequisites

1. **Sanity Write Token**
   - Go to: https://www.sanity.io/manage
   - Select your project
   - Go to **API** → **Tokens**
   - Click **Add API Token**
   - Name it: `Import Script`
   - Permissions: **Editor** or **Administrator**
   - Copy the token

2. **Environment Variable**
   Add to your `.env.local` file:
   ```bash
   SANITY_API_TOKEN=your_token_here
   ```

## 🚀 Running the Import

### Step 1: Install Dependencies (if needed)
```bash
npm install
```

### Step 2: Set Environment Variable
Create or update `.env.local`:
```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_write_token_here
```

### Step 3: Run the Import Script
```bash
npm run seed:sanity
```

You should see output like:
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
✅ Imported: Ice Maker Repair ⭐
✅ Imported: Stove Repair

📍 Importing Service Areas...
✅ Imported: Aberdeen, Monmouth County
...

✨ Data import completed successfully!

📊 Summary:
   - Services: 9
   - Service Areas: 38
   - Blog Posts: 4
   - Testimonials: 9
```

## 🖼️ After Import: Add Images

The script imports all text content, but images need to be uploaded manually in Sanity Studio:

1. Go to: `http://localhost:3000/studio` (or your Studio URL)
2. Navigate to **Services**
3. For each service, click to edit and upload the service image
4. Repeat for Blog Posts and Service Areas

## 🔍 Verify the Import

1. Open Sanity Studio: `http://localhost:3000/studio`
2. Check each content type:
   - **Services** → Should see 9 services, all marked "Published"
   - **Service Areas** → Should see 38 locations
   - **Blog Posts** → Should see 4 posts
   - **Testimonials** → Should see 9 reviews

3. Check your website:
   - Visit: `http://localhost:3000/services`
   - You should now see **Ice Maker Repair** listed!

## 🐛 Troubleshooting

### Error: "SANITY_API_TOKEN is not set"
- Make sure you created `.env.local` with the token
- Restart your terminal after adding environment variables

### Error: "Unauthorized" or "Permission denied"
- Your API token needs **Editor** or **Administrator** permissions
- Generate a new token with proper permissions

### Error: "Project ID not found"
- Check that `NEXT_PUBLIC_SANITY_PROJECT_ID` is correct in `.env.local`
- Find your project ID at: https://www.sanity.io/manage

### Services still not showing on website
- Make sure the services have `status: 'published'` in Sanity Studio
- Clear Next.js cache: `npm run clean && npm run dev`
- Check browser console for errors

## 🔄 Re-running the Import

The script uses `createOrReplace()` so it's safe to run multiple times. It will:
- ✅ Update existing documents
- ✅ Create missing documents
- ❌ Not duplicate content

## 📝 Manual Alternative

If the script doesn't work, you can manually add services in Sanity Studio:

1. Go to **Services** → **Create**
2. Copy data from: `src/designs/design1/data/content.ts`
3. For Ice Maker Repair, use lines 672-758
4. Set **Status** to **Published** ⚠️ (Critical!)
5. Save

---

## 🎉 Success!

Once imported, your website will display all services including the missing Ice Maker Repair service. All content will be managed through Sanity CMS going forward.
