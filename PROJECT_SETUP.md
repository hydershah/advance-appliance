# Project Setup & Configuration Guide

Complete reference for all configuration files and setup procedures for the Advance Appliance Repair project.

## Project Structure

```
advance-appliance/
├── .github/
│   └── workflows/          # GitHub Actions CI/CD
│       ├── ci.yml
│       └── deploy.yml
├── public/
│   └── media/              # User uploaded media
├── src/
│   ├── app/
│   │   ├── (frontend)/     # Public-facing pages
│   │   ├── (payload)/      # PayloadCMS admin
│   │   ├── api/            # API routes
│   │   └── globals.css     # Global styles
│   ├── blocks/             # PayloadCMS blocks
│   ├── collections/        # PayloadCMS collections
│   ├── components/         # Reusable React components
│   ├── designs/            # Three design variants
│   │   ├── design1/        # Elegant Minimalist
│   │   ├── design2/        # Bold Modern
│   │   └── design3/        # Classic Premium
│   ├── fields/             # PayloadCMS field configs
│   ├── globals/            # PayloadCMS globals
│   ├── lib/                # Utility libraries
│   │   ├── api.ts          # API helpers
│   │   ├── payload.ts      # PayloadCMS utilities
│   │   └── utils.ts        # General utilities
│   ├── utilities/          # Helper functions
│   ├── payload.config.ts   # PayloadCMS configuration
│   └── payload-types.ts    # Generated types
├── .editorconfig           # Editor configuration
├── .env.example            # Environment variables template
├── .gitignore              # Git ignore rules
├── .prettierrc             # Prettier configuration
├── docker-compose.yml      # Docker orchestration
├── Dockerfile              # Docker build instructions
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── nginx.conf              # Nginx configuration
├── package.json            # Dependencies & scripts
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vercel.json             # Vercel deployment config
```

## Configuration Files Overview

### 1. package.json

**Purpose**: Defines project dependencies, scripts, and metadata.

**Key Dependencies**:
- `next`: React framework
- `react` & `react-dom`: UI library
- `payload`: Headless CMS
- `@payloadcms/*`: PayloadCMS plugins and adapters
- `tailwindcss`: Utility-first CSS framework
- `typescript`: Type safety
- `sharp`: Image optimization

**Scripts**:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checker
npm run generate:types  # Generate PayloadCMS types
npm run clean        # Clean build artifacts
npm run format       # Format code with Prettier
```

### 2. tsconfig.json

**Purpose**: TypeScript compiler configuration with strict type checking.

**Key Features**:
- Strict mode enabled
- Path aliases configured (@/*, @payload-config)
- Next.js plugin integration
- No unused variables/parameters enforcement

**Path Aliases**:
```typescript
import { Component } from '@/components/Component'
import { helper } from '@/lib/utils'
import config from '@payload-config'
```

### 3. tailwind.config.ts

**Purpose**: Tailwind CSS theme configuration with custom design tokens.

**Custom Color Palettes**:
- **Design 1**: Elegant gold (#D4AF37) and black
- **Design 2**: Bold blue (#3b82f6) and orange (#f97316)
- **Design 3**: Classic burgundy (#8B2635) and cream (#F4EFE0)

**Custom Fonts**:
- Playfair Display, Inter (Design 1)
- Bebas Neue, Poppins (Design 2)
- Cormorant Garamond, Source Serif Pro (Design 3)

**Custom Utilities**:
- Animations (fade-in, slide-up, etc.)
- Custom shadows
- Extended spacing
- Typography scale

**Plugins**:
- @tailwindcss/typography
- @tailwindcss/forms
- @tailwindcss/aspect-ratio

### 4. next.config.ts

**Purpose**: Next.js framework configuration.

**Key Features**:
- PayloadCMS integration via `withPayload()`
- Image optimization for external domains
- Security headers (CSP, X-Frame-Options, etc.)
- Automatic redirects
- Webpack customizations
- Performance optimizations

**Image Domains Allowed**:
- images.pexels.com
- images.unsplash.com
- *.amazonaws.com (S3)
- *.cloudinary.com

### 5. postcss.config.mjs

**Purpose**: PostCSS configuration for CSS processing.

**Plugins**:
- `tailwindcss`: Process Tailwind utilities
- `autoprefixer`: Add vendor prefixes

### 6. .env.example

**Purpose**: Template for environment variables.

**Categories**:
- PayloadCMS configuration (PAYLOAD_SECRET)
- Database connection (DATABASE_URI)
- Application URLs (NEXT_PUBLIC_SERVER_URL)
- API authentication (BLOG_API_KEYS)
- Email configuration (SMTP)
- Cloud storage (AWS S3, Cloudinary)
- Analytics (Google Analytics, Sentry)
- Third-party integrations

**Security Notes**:
- Never commit `.env` to version control
- Use strong random strings for secrets
- Rotate API keys regularly

### 7. .gitignore

**Purpose**: Exclude files from Git version control.

**Excluded**:
- Dependencies (node_modules)
- Build outputs (.next, out)
- Environment files (.env*)
- Database files (*.db)
- IDE configs (.vscode, .idea)
- OS files (.DS_Store)
- Logs (*.log)

### 8. Dockerfile

**Purpose**: Multi-stage Docker build for production deployment.

**Stages**:
1. **base**: Node.js Alpine base image
2. **deps**: Install dependencies
3. **builder**: Build application
4. **runner**: Production runtime

**Features**:
- Non-root user for security
- Optimized layer caching
- Standalone output mode
- Small image size (~150MB)

### 9. docker-compose.yml

**Purpose**: Multi-container Docker orchestration.

**Services**:
- **app**: Next.js application
- **mongodb**: MongoDB database
- **postgres**: PostgreSQL (alternative)
- **nginx**: Reverse proxy

**Volumes**:
- Persistent database storage
- Media uploads
- Build cache

**Networks**:
- Isolated app network

### 10. nginx.conf

**Purpose**: Nginx reverse proxy configuration.

**Features**:
- SSL/TLS termination
- Gzip compression
- Rate limiting
- Caching rules
- Security headers
- Load balancing ready

### 11. vercel.json

**Purpose**: Vercel platform deployment configuration.

**Features**:
- Environment variables
- Security headers
- Cache rules
- Redirects & rewrites
- Region selection

### 12. GitHub Actions Workflows

**ci.yml**: Continuous Integration
- Lint & type check
- Build application
- Security audit
- Run on push/PR

**deploy.yml**: Deployment
- Deploy to Vercel/Docker/AWS
- Environment-specific builds
- Notifications

### 13. .prettierrc

**Purpose**: Code formatting rules.

**Settings**:
- No semicolons
- Single quotes
- 2-space indentation
- 100 character line width
- Trailing commas (ES5)
- Tailwind plugin for class sorting

### 14. .editorconfig

**Purpose**: Editor-agnostic coding style.

**Settings**:
- UTF-8 charset
- LF line endings
- 2-space indentation
- Trim trailing whitespace
- Insert final newline

## Design System

### Design 1: Elegant Minimalist

**Theme**:
- Sophisticated, luxury aesthetic
- Generous whitespace
- Premium serif typography

**Colors**:
- Primary: Gold (#D4AF37)
- Secondary: Black (#000000)
- Background: White (#FFFFFF)

**Fonts**:
- Headings: Playfair Display
- Body: Inter

**Use Case**: High-end appliance brands, luxury market

### Design 2: Bold Modern

**Theme**:
- Contemporary, energetic
- Strong visual hierarchy
- Dynamic animations

**Colors**:
- Primary: Blue (#3b82f6)
- Accent: Orange (#f97316)
- Background: Navy (#1a202c)

**Fonts**:
- Headings: Bebas Neue
- Body: Poppins

**Use Case**: Modern brands, tech-forward companies

### Design 3: Classic Premium

**Theme**:
- Traditional, trustworthy
- Timeless elegance
- Professional credibility

**Colors**:
- Primary: Burgundy (#8B2635)
- Secondary: Cream (#F4EFE0)
- Accent: Bronze (#C19A6B)

**Fonts**:
- Headings: Cormorant Garamond
- Body: Source Serif Pro

**Use Case**: Established businesses, heritage brands

## Library Files

### src/lib/utils.ts

**Purpose**: General utility functions.

**Functions**:
- `cn()`: Merge Tailwind classes
- `formatDate()`: Date formatting
- `formatCurrency()`: Currency formatting
- `truncate()`: Text truncation
- `debounce()`: Function debouncing
- `throttle()`: Function throttling
- Validation helpers
- Array utilities
- DOM helpers

### src/lib/api.ts

**Purpose**: API route helpers and type-safe responses.

**Features**:
- Standard HTTP status codes
- Success/error response builders
- API key validation
- Pagination helpers
- Rate limiting
- CORS headers
- Input sanitization

### src/lib/payload.ts

**Purpose**: PayloadCMS client utilities.

**Functions**:
- `getPayloadClient()`: Get cached instance
- `queryCollection()`: Type-safe queries
- `findBySlug()`: Find by slug
- `findById()`: Find by ID
- `getGlobal()`: Get global data
- `searchCollections()`: Multi-collection search
- Cache tag utilities

## Development Workflow

### Initial Setup

```bash
# Clone repository
git clone https://github.com/your-repo/advance-appliance.git
cd advance-appliance

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit environment variables
nano .env

# Generate PayloadCMS types
npm run generate:types

# Start development server
npm run dev
```

### Adding New Features

1. **Create feature branch**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make changes**
   - Add components in `src/components/`
   - Add pages in `src/app/`
   - Add utilities in `src/lib/`

3. **Test locally**
   ```bash
   npm run dev
   npm run lint
   npm run type-check
   ```

4. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```

5. **Create Pull Request**
   - CI will run automatically
   - Review and merge

### Code Quality

**Pre-commit Checklist**:
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] Code formatted with Prettier
- [ ] No console.log statements
- [ ] Tests passing (if applicable)

**Commands**:
```bash
npm run lint          # Check for linting errors
npm run type-check    # Check TypeScript types
npm run format        # Format code
```

## Environment-Specific Configurations

### Development (.env.development)

```env
NODE_ENV=development
DATABASE_URI=file:./database.db
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Production (.env.production)

```env
NODE_ENV=production
DATABASE_URI=mongodb+srv://...
NEXT_PUBLIC_SERVER_URL=https://your-domain.com
```

### Testing (.env.test)

```env
NODE_ENV=test
DATABASE_URI=file:./test.db
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

## Performance Optimization

### Build Optimization

```bash
# Analyze bundle
npm run analyze

# Check bundle size
npm run build
```

### Image Optimization

- Use Next.js Image component
- Compress images before upload
- Use WebP/AVIF formats
- Lazy load images

### Caching Strategy

- Static assets: 1 year cache
- API routes: No cache
- Pages: ISR with revalidation

## Security Best Practices

1. **Environment Variables**
   - Never commit .env files
   - Use secrets management (Vercel, AWS Secrets Manager)
   - Rotate keys regularly

2. **Dependencies**
   - Regular updates: `npm audit`
   - Use lock files
   - Monitor vulnerabilities

3. **Headers**
   - CSP, X-Frame-Options, HSTS
   - CORS configuration
   - Rate limiting

4. **Database**
   - Use connection pooling
   - Enable authentication
   - Regular backups

## Troubleshooting

### Common Issues

**Build fails**: Clear cache and rebuild
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Type errors**: Regenerate types
```bash
npm run generate:types
```

**Port already in use**: Change port
```bash
PORT=3001 npm run dev
```

**Database connection fails**: Check URI and network
```bash
# Test MongoDB connection
mongosh "YOUR_DATABASE_URI"
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [PayloadCMS Documentation](https://payloadcms.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Last Updated**: 2025-12-31
