# Quick Start Guide - Advance Appliance Repair CMS

## Get Started in 5 Minutes

### 1. Configure Environment

```bash
cd "/home/hyder/Advance Applaince"

# Copy environment example
cp .env.example .env

# Edit .env and set these required variables:
# PAYLOAD_SECRET=your-super-secret-key
# BLOG_API_KEYS=your-api-key-here
```

Generate secure keys:
```bash
# For PAYLOAD_SECRET
openssl rand -base64 32

# For BLOG_API_KEYS
openssl rand -hex 32
```

### 2. Start Development Server

```bash
npm run dev
```

Server will start at:
- **Frontend:** http://localhost:3000
- **Admin Panel:** http://localhost:3000/admin

### 3. Create Admin Account

1. Navigate to http://localhost:3000/admin
2. Fill in registration form
3. Important: Set **role** to "admin"
4. Click "Create First User"

### 4. Start Creating Content

#### Create Your First Page

1. Go to **Collections > Pages**
2. Click "Create New"
3. Set title: "Home"
4. Set slug: "home"
5. Add blocks:
   - Hero Section
   - Featured Services
   - Testimonials
   - CTA
6. Set status to "Published"
7. Click "Save"

#### Add Services

1. Go to **Collections > Services**
2. Click "Create New"
3. Fill in:
   - Name: "Refrigerator Repair"
   - Description: Service details
   - Upload image
   - Add features
4. Set status to "Published"
5. Click "Save"

#### Create Blog Posts

1. Go to **Collections > Blog Posts**
2. Click "Create New"
3. Fill in:
   - Title
   - Content (rich text)
   - Featured image
   - Categories and tags
4. Set status to "Published"
5. Click "Save"

#### Add Team Members

1. Go to **Collections > Team Members**
2. Click "Create New"
3. Fill in:
   - Name and position
   - Upload photo
   - Bio and specialties
   - Certifications
4. Set status to "Published"
5. Click "Save"

### 5. Test Blog API

#### Create Post via API

```bash
curl -X POST http://localhost:3000/api/blog \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key-here" \
  -d '{
    "title": "Test Blog Post",
    "content": {
      "root": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "This is a test blog post created via API"
              }
            ]
          }
        ]
      }
    },
    "status": "published"
  }'
```

#### List Posts

```bash
curl http://localhost:3000/api/blog?page=1&limit=10
```

#### Get Single Post

```bash
curl http://localhost:3000/api/blog/test-blog-post
```

### 6. Configure Site Settings

1. Go to **Globals > Settings**
2. Fill in:
   - Site name
   - Logo
   - Contact information
   - Social media links
   - SEO defaults
3. Click "Save"

## Key Features

### Collections (Content Types)

| Collection | Purpose | Admin Path |
|------------|---------|------------|
| Pages | Page builder | /admin/collections/pages |
| Services | Service offerings | /admin/collections/services |
| Blog Posts | Blog articles | /admin/collections/blog-posts |
| Testimonials | Customer reviews | /admin/collections/testimonials |
| Service Areas | Service locations | /admin/collections/service-areas |
| Team Members | Staff profiles | /admin/collections/team-members |
| Media | File uploads | /admin/collections/media |

### Content Blocks (for Pages)

- **Hero** - Large hero sections with CTAs
- **Content** - Rich text with column layouts
- **CTA** - Call-to-action sections
- **Featured Services** - Service showcases
- **Testimonials** - Customer reviews
- **Team Members** - Team member grids
- **Blog Posts** - Blog post listings
- **Service Areas** - Service area displays
- **FAQ** - Frequently asked questions

### Blog API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/blog` | Create blog post |
| GET | `/api/blog` | List posts |
| GET | `/api/blog/:slug` | Get single post |
| PUT | `/api/blog/:slug` | Update post |
| DELETE | `/api/blog/:slug` | Delete post |

**Authentication:** Include `X-API-Key` header with your API key

See `/home/hyder/Advance Applaince/src/endpoints/README.md` for complete API documentation.

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Generate TypeScript types
npm run generate:types
```

## Admin Panel Tips

### Live Preview

1. Edit any page or blog post
2. Click "Live Preview" in sidebar
3. See changes in real-time
4. Test different breakpoints (mobile, tablet, desktop)

### Draft/Publish Workflow

1. Create content with status "draft"
2. Preview draft (requires login)
3. Make edits
4. Change status to "published" when ready
5. Click "Save"

### Version History

1. Open any document
2. Click "Versions" tab
3. View previous versions
4. Click "Restore" to revert

### Media Library

1. Go to Collections > Media
2. Drag and drop to upload
3. Images are automatically optimized
4. Use alt text for SEO

## Next Steps

1. **Customize Design:** Update components in `src/components/`
2. **Add More Blocks:** Create custom blocks in `src/blocks/`
3. **Configure SEO:** Update SEO defaults in Global Settings
4. **Set Up Email:** Configure SMTP in `.env`
5. **Deploy:** Follow deployment guide in `PAYLOAD_SETUP.md`

## Documentation

- **Full Setup Guide:** `/home/hyder/Advance Applaince/PAYLOAD_SETUP.md`
- **Blog API Docs:** `/home/hyder/Advance Applaince/src/endpoints/README.md`
- **API Client Example:** `/home/hyder/Advance Applaince/examples/blog-api-client.ts`
- **Project Instructions:** `/home/hyder/Advance Applaince/CLAUDE.md`

## Troubleshooting

### Server won't start

```bash
# Check if port 3000 is in use
lsof -ti:3000 | xargs kill

# Clear Next.js cache
rm -rf .next
npm run dev
```

### Database errors

```bash
# Reset database (development only)
rm database.db
npm run dev
```

### TypeScript errors

```bash
# Regenerate types
npm run generate:types
```

## Support

- **PayloadCMS Docs:** https://payloadcms.com/docs
- **Next.js Docs:** https://nextjs.org/docs

## File Locations Reference

### Configuration
- Main config: `/home/hyder/Advance Applaince/src/payload.config.ts`
- Environment: `/home/hyder/Advance Applaince/.env`

### Collections
- All collections: `/home/hyder/Advance Applaince/src/collections/`

### Blocks
- All blocks: `/home/hyder/Advance Applaince/src/blocks/`

### API
- Blog endpoints: `/home/hyder/Advance Applaince/src/endpoints/blog-api.ts`
- Access control: `/home/hyder/Advance Applaince/src/access/isAdmin.ts`

### Examples
- API client: `/home/hyder/Advance Applaince/examples/blog-api-client.ts`
