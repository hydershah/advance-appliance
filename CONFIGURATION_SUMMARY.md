# Configuration Files Summary

This document provides a quick reference to all configuration files created for the Advance Appliance Repair project.

## Core Configuration Files

### 1. package.json
**Location**: `/home/hyder/Advance Applaince/package.json`

**Purpose**: Project dependencies and npm scripts

**Key Features**:
- Next.js 15.1.0 with React 19
- PayloadCMS 3.14.0 with MongoDB/PostgreSQL/SQLite adapters
- Tailwind CSS 3.4.17 with plugins
- TypeScript 5.7.2 with strict mode
- Additional utilities: clsx, framer-motion, react-hook-form, zod

**Available Scripts**:
```bash
npm run dev              # Development server
npm run build            # Production build
npm run start            # Production server
npm run lint             # ESLint
npm run type-check       # TypeScript check
npm run generate:types   # Generate Payload types
npm run clean            # Clean build files
npm run format           # Prettier formatting
```

---

### 2. tsconfig.json
**Location**: `/home/hyder/Advance Applaince/tsconfig.json`

**Purpose**: TypeScript compiler configuration

**Key Features**:
- Strict mode enabled
- Path aliases for clean imports
- No unused variables/parameters
- Next.js compatibility

**Path Aliases**:
```typescript
@/*              -> ./src/*
@/components/*   -> ./src/components/*
@/lib/*          -> ./src/lib/*
@payload-config  -> ./src/payload.config.ts
```

---

### 3. tailwind.config.ts
**Location**: `/home/hyder/Advance Applaince/tailwind.config.ts`

**Purpose**: Tailwind CSS theme configuration

**Key Features**:
- Three complete design systems
- Custom color palettes
- Custom fonts (6 font families)
- Extended animations and keyframes
- Custom shadows and utilities

**Design Colors**:
- **Elegant**: Gold (#D4AF37), Black, White
- **Bold**: Blue (#3b82f6), Orange (#f97316), Navy
- **Classic**: Burgundy (#8B2635), Cream (#F4EFE0), Bronze

**Fonts**:
- Playfair Display, Inter (Elegant)
- Bebas Neue, Poppins (Bold)
- Cormorant Garamond, Source Serif Pro (Classic)

---

### 4. next.config.ts
**Location**: `/home/hyder/Advance Applaince/next.config.ts`

**Purpose**: Next.js configuration

**Key Features**:
- PayloadCMS integration
- Image optimization for external domains
- Security headers (X-Frame-Options, CSP, etc.)
- Automatic redirects
- Webpack customizations
- Compression enabled

**Image Domains**:
- images.pexels.com
- images.unsplash.com
- *.amazonaws.com
- *.cloudinary.com

---

### 5. postcss.config.mjs
**Location**: `/home/hyder/Advance Applaince/postcss.config.mjs`

**Purpose**: PostCSS configuration

**Plugins**:
- tailwindcss
- autoprefixer

---

### 6. .env.example
**Location**: `/home/hyder/Advance Applaince/.env.example`

**Purpose**: Environment variables template

**Categories**:
- PayloadCMS (PAYLOAD_SECRET)
- Database (DATABASE_URI - MongoDB/PostgreSQL/SQLite)
- Application URLs (NEXT_PUBLIC_SERVER_URL)
- API Keys (BLOG_API_KEYS)
- Email/SMTP
- Cloud Storage (AWS S3, Cloudinary)
- Analytics (Google Analytics, Sentry)
- Social Media URLs

---

### 7. .gitignore
**Location**: `/home/hyder/Advance Applaince/.gitignore`

**Purpose**: Git ignore rules

**Excludes**:
- node_modules
- .next, out, build
- .env files
- Database files (*.db)
- IDE configs
- Logs

---

## Application Files

### 8. src/app/globals.css
**Location**: `/home/hyder/Advance Applaince/src/app/globals.css`

**Purpose**: Global CSS styles with Tailwind

**Features**:
- CSS custom properties for all designs
- Base styles for typography
- Component classes (buttons, cards, badges)
- Utility classes
- Animations
- Accessibility styles
- Print styles
- Reduced motion support

---

### 9. src/app/(frontend)/layout.tsx
**Location**: `/home/hyder/Advance Applaince/src/app/(frontend)/layout.tsx`

**Purpose**: Root layout with fonts and metadata

**Features**:
- All 6 Google Fonts loaded
- Comprehensive SEO metadata
- OpenGraph & Twitter cards
- Accessibility features (skip links)
- Favicons and PWA support

---

### 10. src/lib/payload.ts
**Location**: `/home/hyder/Advance Applaince/src/lib/payload.ts`

**Purpose**: PayloadCMS client utilities

**Functions**:
- getPayloadClient()
- queryCollection()
- findBySlug()
- findById()
- getGlobal()
- searchCollections()
- revalidateContent()
- Cache tag utilities

---

### 11. src/lib/api.ts
**Location**: `/home/hyder/Advance Applaince/src/lib/api.ts`

**Purpose**: API helpers and type-safe responses

**Features**:
- HTTP status code constants
- Success/error response builders
- API key validation (supports multiple keys)
- Pagination helpers
- Rate limiting
- CORS headers
- Input sanitization
- JSON parsing with error handling

---

### 12. src/lib/utils.ts
**Location**: `/home/hyder/Advance Applaince/src/lib/utils.ts`

**Purpose**: General utility functions

**Categories**:
- Class name merging (cn)
- Date/time formatting
- String utilities
- Array utilities
- Number utilities
- DOM utilities
- Validation helpers
- File size formatting

---

## DevOps & Deployment

### 13. Dockerfile
**Location**: `/home/hyder/Advance Applaince/Dockerfile`

**Purpose**: Production Docker image

**Features**:
- Multi-stage build (deps, builder, runner)
- Non-root user for security
- Optimized layer caching
- ~150MB final image size

---

### 14. docker-compose.yml
**Location**: `/home/hyder/Advance Applaince/docker-compose.yml`

**Purpose**: Multi-container orchestration

**Services**:
- app (Next.js)
- mongodb (Database)
- postgres (Alternative database)
- nginx (Reverse proxy)

---

### 15. nginx.conf
**Location**: `/home/hyder/Advance Applaince/nginx.conf`

**Purpose**: Nginx configuration

**Features**:
- SSL/TLS support
- Gzip compression
- Rate limiting
- Caching rules
- Security headers
- Load balancing ready

---

### 16. vercel.json
**Location**: `/home/hyder/Advance Applaince/vercel.json`

**Purpose**: Vercel deployment configuration

**Features**:
- Environment variable management
- Security headers
- Cache rules
- Redirects

---

### 17. .github/workflows/ci.yml
**Location**: `/home/hyder/Advance Applaince/.github/workflows/ci.yml`

**Purpose**: Continuous Integration

**Jobs**:
- Lint & type check
- Build application
- Security audit

---

### 18. .github/workflows/deploy.yml
**Location**: `/home/hyder/Advance Applaince/.github/workflows/deploy.yml`

**Purpose**: Automated deployment

**Targets**:
- Vercel
- Docker Hub
- AWS

---

## Code Quality

### 19. .prettierrc
**Location**: `/home/hyder/Advance Applaince/.prettierrc`

**Purpose**: Code formatting rules

**Settings**:
- No semicolons
- Single quotes
- 2-space indentation
- 100 char line width
- Tailwind class sorting

---

### 20. .prettierignore
**Location**: `/home/hyder/Advance Applaince/.prettierignore`

**Purpose**: Files to exclude from Prettier

---

### 21. .editorconfig
**Location**: `/home/hyder/Advance Applaince/.editorconfig`

**Purpose**: Editor-agnostic coding style

**Settings**:
- UTF-8 charset
- LF line endings
- 2-space indentation
- Trim trailing whitespace

---

### 22. .dockerignore
**Location**: `/home/hyder/Advance Applaince/.dockerignore`

**Purpose**: Files to exclude from Docker build

---

## Documentation

### 23. DEPLOYMENT.md
**Location**: `/home/hyder/Advance Applaince/DEPLOYMENT.md`

**Purpose**: Complete deployment guide

**Platforms Covered**:
- Vercel
- Docker + VPS
- AWS (Elastic Beanstalk, ECS)
- Other platforms

---

### 24. PROJECT_SETUP.md
**Location**: `/home/hyder/Advance Applaince/PROJECT_SETUP.md`

**Purpose**: Comprehensive project documentation

**Topics**:
- Project structure
- Configuration files
- Design system
- Development workflow
- Performance optimization
- Security best practices
- Troubleshooting

---

## Quick Reference

### Development Commands

```bash
# Start development
npm run dev

# Build for production
npm run build

# Check types
npm run type-check

# Lint code
npm run lint

# Format code
npm run format

# Generate Payload types
npm run generate:types
```

### Docker Commands

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f app

# Rebuild after changes
docker-compose up -d --build

# Stop services
docker-compose down
```

### Environment Variables

**Required**:
- PAYLOAD_SECRET
- DATABASE_URI
- NEXT_PUBLIC_SERVER_URL

**Optional**:
- BLOG_API_KEYS
- SMTP_* (email)
- AWS_* (cloud storage)
- Analytics keys

### File Locations

All configuration files are in the project root:
```
/home/hyder/Advance Applaince/
```

Application code is in:
```
/home/hyder/Advance Applaince/src/
```

---

## Design System Quick Reference

### Colors

**Design 1 (Elegant)**:
- Primary: `bg-elegant-gold-400` (#D4AF37)
- Text: `text-elegant-black`
- Background: `bg-elegant-white`

**Design 2 (Bold)**:
- Primary: `bg-bold-blue-500` (#3b82f6)
- Accent: `bg-bold-orange-500` (#f97316)
- Background: `bg-bold-navy`

**Design 3 (Classic)**:
- Primary: `bg-classic-burgundy-500` (#8B2635)
- Secondary: `bg-classic-cream-400` (#F4EFE0)
- Accent: `bg-classic-bronze-400` (#C19A6B)

### Fonts

**Design 1**: `font-playfair` (headings), `font-inter` (body)
**Design 2**: `font-bebas` (headings), `font-poppins` (body)
**Design 3**: `font-cormorant` (headings), `font-source` (body)

---

**Created**: 2025-12-31
**Project**: Advance Appliance Repair - Next.js + PayloadCMS
**Location**: /home/hyder/Advance Applaince
