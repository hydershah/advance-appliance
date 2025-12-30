# PayloadCMS Setup Guide - Advance Appliance Repair

## Overview

This project uses PayloadCMS 3.x with Next.js 15 for a luxury appliance repair website. It includes a complete CMS setup with visual editing, blog management, and external API access.

## Features

### Collections

1. **Pages** - Visual page builder with flexible content blocks
2. **Services** - Appliance repair service offerings
3. **Blog Posts** - Blog articles with rich content, categories, and tags
4. **Testimonials** - Customer reviews and testimonials
5. **Service Areas** - Geographic service coverage
6. **Team Members** - Staff profiles with credentials
7. **Media** - Image and file uploads
8. **Users** - Admin and editor accounts

### Global Settings

- **Site Settings** - Global site configuration (logo, contact info, social links, etc.)

### Content Blocks (for Pages)

- **Hero** - Large hero sections with images and CTAs
- **Content** - Rich text content with column layouts
- **CTA** - Call-to-action sections
- **Featured Services** - Service showcase
- **Testimonials** - Customer review displays
- **Team Members** - Team member grids
- **Blog Posts** - Blog post listings
- **Service Areas** - Service area displays
- **FAQ** - Frequently asked questions

### Features

- SEO Plugin integration for all content types
- Live Preview for visual editing
- Draft/Publish workflow with version history
- Automatic slug generation
- API endpoints for external blog posting
- API key authentication
- Image optimization with Sharp
- Responsive admin interface

## Installation

### Prerequisites

- Node.js 18.20.2 or higher
- npm or yarn

### Setup Steps

1. **Clone and Install**

```bash
cd "/home/hyder/Advance Applaince"
npm install
```

2. **Configure Environment Variables**

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and set the following required variables:

```env
# Required
PAYLOAD_SECRET=your-super-secret-key-change-in-production
DATABASE_URI=file:./database.db
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Blog API Keys (comma-separated for multiple keys)
BLOG_API_KEYS=your-blog-api-key-here

# Optional but recommended
REVALIDATION_SECRET=your-revalidation-secret
PREVIEW_SECRET=your-preview-secret
```

Generate secure secrets:

```bash
# For PAYLOAD_SECRET
openssl rand -base64 32

# For BLOG_API_KEYS
openssl rand -hex 32
```

3. **Generate TypeScript Types**

```bash
npm run generate:types
```

4. **Start Development Server**

```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3000/admin

## First-Time Setup

### Create Admin User

1. Navigate to http://localhost:3000/admin
2. Fill in the admin registration form
3. Set role to "admin" (this is important for full access)

### Seed Initial Data (Optional)

If you have a seed script:

```bash
npm run seed
```

## Configuration Files

### Main Configuration

**File:** `/home/hyder/Advance Applaince/src/payload.config.ts`

Main PayloadCMS configuration including:
- Database adapter
- Admin panel settings
- Live preview configuration
- SEO plugin settings
- CORS and CSRF settings
- Blog API endpoints

### Collections

All collections are in `/home/hyder/Advance Applaince/src/collections/`:

- `Pages.ts` - Page builder
- `Services.ts` - Service offerings
- `BlogPosts.ts` - Blog articles
- `Testimonials.ts` - Customer reviews
- `ServiceAreas.ts` - Service locations
- `TeamMembers.ts` - Staff profiles
- `Media.ts` - File uploads
- `Users.ts` - User accounts

### Blocks

Reusable content blocks in `/home/hyder/Advance Applaince/src/blocks/`:

- `Hero.ts` - Hero sections
- `Content.ts` - Content blocks
- `CTA.ts` - Call-to-action
- `FeaturedServices.ts` - Service showcases
- `Testimonials.ts` - Testimonial displays
- `TeamMembers.ts` - Team displays
- `BlogPosts.ts` - Blog listings
- `ServiceAreas.ts` - Service area displays
- `FAQ.ts` - FAQ sections

### Globals

Global settings in `/home/hyder/Advance Applaince/src/globals/`:

- `Settings.ts` - Site-wide settings

### Access Control

Access control functions in `/home/hyder/Advance Applaince/src/access/`:

- `isAdmin.ts` - Admin-only access
- `isLoggedIn.ts` - Authenticated user access
- `isAdminOrSelf.ts` - Admin or own content
- `isAdminOrPublished.ts` - Admin or published content
- `verifyAPIKey.ts` - API key verification

## Blog API

### Overview

External blog posting API with API key authentication.

**Base URL:** `http://localhost:3000/api` (or your production URL)

### Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/blog` | Create blog post | Yes |
| GET | `/api/blog` | List blog posts | Optional* |
| GET | `/api/blog/:slug` | Get single post | Optional* |
| PUT | `/api/blog/:slug` | Update blog post | Yes |
| DELETE | `/api/blog/:slug` | Delete blog post | Yes |

*Unauthenticated requests only see published posts

### Authentication

Include API key in request header:

```
X-API-Key: your-api-key-here
```

### Example Usage

**Create a blog post:**

```bash
curl -X POST http://localhost:3000/api/blog \
  -H "Content-Type: application/json" \
  -H "X-API-Key: your-api-key" \
  -d '{
    "title": "Blog Post Title",
    "content": {
      "root": {
        "type": "root",
        "children": [
          {
            "type": "paragraph",
            "children": [
              {
                "type": "text",
                "text": "Your blog content here"
              }
            ]
          }
        ]
      }
    },
    "status": "published"
  }'
```

**List blog posts:**

```bash
curl http://localhost:3000/api/blog?page=1&limit=10
```

**Get single post:**

```bash
curl http://localhost:3000/api/blog/your-post-slug
```

See `/home/hyder/Advance Applaince/src/endpoints/README.md` for complete API documentation.

## Admin Panel Features

### Dashboard

Access at http://localhost:3000/admin

- Content management for all collections
- Media library
- Global settings
- User management

### Visual Editing

Pages and content support live preview:

1. Edit a page in the admin panel
2. Click "Live Preview" in the sidebar
3. See changes in real-time
4. Preview at different breakpoints (mobile, tablet, desktop)

### Draft/Publish Workflow

All content types support draft/publish workflow:

1. Create content with status "draft"
2. Preview draft content (requires login)
3. Publish when ready by changing status to "published"
4. Revert to draft if needed

### Version History

Content maintains version history:

- View previous versions
- Compare changes
- Restore previous versions
- Auto-save drafts every 375ms

## SEO Features

All content types include SEO fields:

- Meta Title
- Meta Description
- Meta Image (Open Graph)
- Auto-generated from content if not set

Configure in the SEO plugin settings in `payload.config.ts`.

## Media Management

### Upload Settings

- Image optimization with Sharp
- Automatic responsive image generation
- Supported formats: JPEG, PNG, WebP, GIF
- Max file size: Configure in Media collection

### Best Practices

1. Use descriptive filenames
2. Upload high-quality source images
3. Let PayloadCMS handle optimization
4. Use alt text for accessibility

## Content Best Practices

### Pages

1. Use meaningful slugs (e.g., "about-us", "services")
2. Combine blocks for rich layouts
3. Preview before publishing
4. Set appropriate SEO metadata

### Blog Posts

1. Write compelling titles
2. Include featured images
3. Add relevant categories and tags
4. Use excerpts for better previews
5. Set publish dates appropriately

### Services

1. Clear service names
2. Detailed descriptions
3. Professional images
4. List key features
5. Add FAQs

### Team Members

1. Professional photos
2. Complete bios
3. List credentials and certifications
4. Use display order for arrangement

## Database

### SQLite (Development)

Default setup uses SQLite for easy development:

```env
DATABASE_URI=file:./database.db
```

Database file: `./database.db`

### MongoDB (Production Recommended)

For production, use MongoDB:

```env
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/advance-appliance
```

Update `payload.config.ts` to use MongoDB adapter.

### PostgreSQL (Alternative)

For PostgreSQL:

```env
DATABASE_URI=postgresql://username:password@localhost:5432/advance-appliance
```

Update `payload.config.ts` to use PostgreSQL adapter.

## Deployment

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Environment Variables

Ensure all production environment variables are set:

- `PAYLOAD_SECRET` - Secure random string
- `DATABASE_URI` - Production database URL
- `NEXT_PUBLIC_SERVER_URL` - Production domain
- `BLOG_API_KEYS` - Secure API keys
- `REVALIDATION_SECRET` - For ISR revalidation

### Vercel Deployment

1. Connect repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

### Other Platforms

Compatible with:
- AWS (EC2, Elastic Beanstalk, Lambda)
- Google Cloud Platform
- Azure
- DigitalOcean
- Heroku
- Docker containers

## Troubleshooting

### Database Errors

If you encounter database errors:

```bash
# Delete database and restart
rm database.db
npm run dev
```

### TypeScript Errors

Regenerate types:

```bash
npm run generate:types
```

### Port Already in Use

Change port in `package.json` or kill the process:

```bash
# macOS/Linux
lsof -ti:3000 | xargs kill

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Build Errors

Clear Next.js cache:

```bash
rm -rf .next
npm run build
```

## File Structure

```
/home/hyder/Advance Applaince/
├── src/
│   ├── access/          # Access control functions
│   ├── app/             # Next.js app directory
│   ├── blocks/          # Content blocks
│   ├── collections/     # PayloadCMS collections
│   ├── components/      # React components
│   ├── endpoints/       # API endpoints
│   ├── fields/          # Custom fields
│   ├── globals/         # Global settings
│   ├── utilities/       # Helper functions
│   └── payload.config.ts # Main Payload config
├── public/              # Static assets
├── .env                 # Environment variables (not in git)
├── .env.example         # Example environment variables
├── package.json         # Dependencies
└── next.config.ts       # Next.js configuration
```

## Support and Documentation

- **PayloadCMS Docs:** https://payloadcms.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Blog API Docs:** `/home/hyder/Advance Applaince/src/endpoints/README.md`
- **Project Instructions:** `/home/hyder/Advance Applaince/CLAUDE.md`

## Key Files Reference

### Collections
- Pages: `/home/hyder/Advance Applaince/src/collections/Pages.ts`
- Services: `/home/hyder/Advance Applaince/src/collections/Services.ts`
- Blog Posts: `/home/hyder/Advance Applaince/src/collections/BlogPosts.ts`
- Testimonials: `/home/hyder/Advance Applaince/src/collections/Testimonials.ts`
- Service Areas: `/home/hyder/Advance Applaince/src/collections/ServiceAreas.ts`
- Team Members: `/home/hyder/Advance Applaince/src/collections/TeamMembers.ts`
- Media: `/home/hyder/Advance Applaince/src/collections/Media.ts`

### Configuration
- Main Config: `/home/hyder/Advance Applaince/src/payload.config.ts`
- Blog API: `/home/hyder/Advance Applaince/src/endpoints/blog-api.ts`
- Access Control: `/home/hyder/Advance Applaince/src/access/isAdmin.ts`

### Blocks
- All blocks: `/home/hyder/Advance Applaince/src/blocks/`

### Environment
- Example: `/home/hyder/Advance Applaince/.env.example`
