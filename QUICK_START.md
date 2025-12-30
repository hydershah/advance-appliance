# Quick Start Guide

Get up and running with the Advance Appliance Repair project in minutes.

## Prerequisites

- **Node.js** 18.20.2 or higher
- **npm** 9.0.0 or higher
- **Git** (for cloning)

## 1. Initial Setup (5 minutes)

### Clone & Install

```bash
# Navigate to project directory
cd "/home/hyder/Advance Applaince"

# Install dependencies (already done if node_modules exists)
npm install
```

### Configure Environment

```bash
# Copy environment template
cp .env.example .env

# Edit with your values (use nano, vim, or any editor)
nano .env
```

**Minimum Required Variables**:
```env
PAYLOAD_SECRET=generate-a-random-secret-here
DATABASE_URI=file:./database.db
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
BLOG_API_KEYS=your-api-key-here
```

**Generate a secure secret**:
```bash
openssl rand -base64 32
```

### Generate Types

```bash
npm run generate:types
```

## 2. Start Development Server

```bash
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin

## 3. Create Admin User

1. Visit http://localhost:3000/admin
2. Create your first admin account
3. Login to the admin panel

## 4. Configure Site Settings

1. Go to **Admin > Globals > Settings**
2. Update:
   - Site name
   - Contact information
   - Business hours
   - Social media links

## 5. Create Your First Page

1. Go to **Admin > Collections > Pages**
2. Click "Create New"
3. Fill in:
   - Title: "Home"
   - Slug: "home"
   - Status: "Published"
4. Add content blocks
5. Save

## Next Steps

### Add Content

```
Admin Panel > Collections
├── Pages          # Create About, Services, Contact
├── Posts          # Add blog posts
├── Services       # Define your services
└── Media          # Upload images
```

### Customize Design

Three design variants are available in `/src/designs/`:

1. **Design 1**: Elegant Minimalist (Gold & Black)
2. **Design 2**: Bold Modern (Blue & Orange)
3. **Design 3**: Classic Premium (Burgundy & Cream)

### Development Workflow

```bash
# Watch for file changes (runs automatically)
npm run dev

# Check for errors
npm run lint
npm run type-check

# Format code
npm run format
```

## Troubleshooting

### Port Already in Use

```bash
# Change port
PORT=3001 npm run dev
```

### Database Connection Error

Using SQLite (default)? The database file will be created automatically at `./database.db`.

Using MongoDB/PostgreSQL? Check your `DATABASE_URI` connection string.

### Build Fails

```bash
# Clear cache and rebuild
npm run clean
npm install
npm run generate:types
npm run build
```

### Type Errors

```bash
# Regenerate PayloadCMS types
npm run generate:types
```

## Production Build

### Local Production Build

```bash
# Build the application
npm run build

# Start production server
npm run start
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for other deployment options.

## Docker Quick Start

### Using Docker Compose

```bash
# Start all services (app + database + nginx)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

### Using Docker Only

```bash
# Build image
docker build -t advance-appliance .

# Run container
docker run -p 3000:3000 \
  -e DATABASE_URI=your-db-uri \
  -e PAYLOAD_SECRET=your-secret \
  -e NEXT_PUBLIC_SERVER_URL=http://localhost:3000 \
  advance-appliance
```

## Project Structure

```
src/
├── app/
│   ├── (frontend)/      # Public pages (layout.tsx, page.tsx)
│   ├── (payload)/       # Admin panel
│   ├── api/             # API routes
│   └── globals.css      # Global styles
├── collections/         # PayloadCMS collections (Pages, Posts, etc.)
├── components/          # Reusable React components
├── designs/             # Three design variants
│   ├── design1/         # Elegant Minimalist
│   ├── design2/         # Bold Modern
│   └── design3/         # Classic Premium
├── lib/                 # Utility libraries
│   ├── api.ts          # API helpers
│   ├── payload.ts      # PayloadCMS utilities
│   └── utils.ts        # General utilities
└── payload.config.ts    # PayloadCMS configuration
```

## Available Scripts

```bash
npm run dev              # Development server
npm run build            # Production build
npm run start            # Production server
npm run lint             # ESLint
npm run type-check       # TypeScript check
npm run generate:types   # Generate Payload types
npm run clean            # Clean build files
npm run format           # Format with Prettier
```

## Common Tasks

### Add a New Page

1. Create in Admin Panel: **Collections > Pages > Create New**
2. Or create programmatically in code

### Add a New Blog Post

1. Admin Panel: **Collections > Posts > Create New**
2. Fill in title, content, featured image
3. Set status to "Published"

### Upload Images

1. Admin Panel: **Collections > Media > Upload**
2. Drag and drop or select files
3. Images are automatically optimized

### Update Site Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#your-color',
  }
}
```

### Change Fonts

Edit `src/app/(frontend)/layout.tsx` to load different Google Fonts.

## Resources

- **Full Documentation**: [PROJECT_SETUP.md](./PROJECT_SETUP.md)
- **Deployment Guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Configuration Reference**: [CONFIGURATION_SUMMARY.md](./CONFIGURATION_SUMMARY.md)

## Support

For issues:
1. Check the documentation
2. Review console/terminal errors
3. Check environment variables
4. Verify database connection

## Security Checklist

Before deploying to production:

- [ ] Change `PAYLOAD_SECRET` to a strong random string
- [ ] Update `BLOG_API_KEYS` with secure keys
- [ ] Use a production database (MongoDB/PostgreSQL)
- [ ] Enable HTTPS/SSL
- [ ] Set proper CORS headers
- [ ] Configure firewall rules
- [ ] Setup automated backups
- [ ] Enable error monitoring (Sentry)

## Performance Tips

- Use Next.js Image component for all images
- Enable caching headers
- Use CDN for static assets (Vercel, Cloudflare)
- Optimize database queries
- Enable gzip compression (nginx)
- Monitor with Lighthouse

---

**Ready to launch!** Visit http://localhost:3000 to see your site.

For detailed configuration options, see [PROJECT_SETUP.md](./PROJECT_SETUP.md).

For deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).
