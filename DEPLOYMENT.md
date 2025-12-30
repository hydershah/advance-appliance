# Deployment Guide

This document provides detailed instructions for deploying the Advance Appliance Repair website to various hosting platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Deployment Options](#deployment-options)
  - [Vercel (Recommended for Quick Deploy)](#vercel)
  - [Docker + VPS](#docker--vps)
  - [AWS](#aws)
  - [Other Platforms](#other-platforms)
- [Database Setup](#database-setup)
- [Post-Deployment](#post-deployment)
- [Monitoring & Maintenance](#monitoring--maintenance)

---

## Prerequisites

Before deploying, ensure you have:

1. **Node.js 18+** installed
2. **Database** (MongoDB, PostgreSQL, or SQLite for local)
3. **Domain name** (optional but recommended)
4. **SSL certificate** (Let's Encrypt recommended)

---

## Environment Variables

Copy `.env.example` to `.env.production` and configure:

### Required Variables

```bash
# PayloadCMS Secret (generate with: openssl rand -base64 32)
PAYLOAD_SECRET=your-super-secret-key

# Database Connection
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/advance-appliance

# Application URL
NEXT_PUBLIC_SERVER_URL=https://your-domain.com

# API Authentication
BLOG_API_KEYS=your-api-key-1,your-api-key-2
```

### Optional Variables

```bash
# Email (for contact forms)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Cloud Storage (S3, Cloudinary)
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
AWS_BUCKET=your-bucket-name

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

---

## Deployment Options

### Vercel

**Best for**: Quick deployment, serverless, automatic CI/CD

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

4. **Configure Environment Variables**
   - Go to Vercel Dashboard > Project Settings > Environment Variables
   - Add all required environment variables from `.env.example`

5. **Configure Database**
   - Use MongoDB Atlas (recommended) or Vercel Postgres
   - Update `DATABASE_URI` in Vercel environment variables

#### vercel.json Configuration

The included `vercel.json` file includes:
- Automatic deployments
- Security headers
- Caching rules
- Redirects

---

### Docker + VPS

**Best for**: Full control, self-hosted, cost-effective at scale

#### Prerequisites:
- VPS with Docker & Docker Compose installed
- Domain pointed to VPS IP
- SSH access

#### Steps:

1. **Clone Repository on VPS**
   ```bash
   git clone https://github.com/your-repo/advance-appliance.git
   cd advance-appliance
   ```

2. **Configure Environment**
   ```bash
   cp .env.example .env
   nano .env  # Edit with your values
   ```

3. **Build and Start Containers**
   ```bash
   docker-compose up -d
   ```

4. **Setup SSL with Let's Encrypt**
   ```bash
   # Install Certbot
   sudo apt install certbot python3-certbot-nginx

   # Generate SSL certificate
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

5. **Configure Nginx**
   - Edit `nginx.conf` to uncomment HTTPS section
   - Update domain name
   - Restart Nginx:
     ```bash
     docker-compose restart nginx
     ```

6. **Setup Automatic Backups**
   ```bash
   # Add to crontab
   0 2 * * * docker exec advance-appliance-mongodb mongodump --out /backup
   ```

#### Docker Commands

```bash
# View logs
docker-compose logs -f app

# Restart services
docker-compose restart

# Stop all services
docker-compose down

# Rebuild after code changes
docker-compose up -d --build

# Access MongoDB shell
docker exec -it advance-appliance-mongodb mongosh
```

---

### AWS

**Best for**: Enterprise-grade, high scalability, AWS ecosystem integration

#### Option 1: AWS Elastic Beanstalk

1. **Install EB CLI**
   ```bash
   pip install awsebcli
   ```

2. **Initialize Elastic Beanstalk**
   ```bash
   eb init -p node.js advance-appliance
   ```

3. **Create Environment**
   ```bash
   eb create production
   ```

4. **Configure Environment Variables**
   ```bash
   eb setenv PAYLOAD_SECRET=xxx DATABASE_URI=xxx
   ```

5. **Deploy**
   ```bash
   eb deploy
   ```

#### Option 2: AWS ECS (Fargate)

1. **Build and Push Docker Image**
   ```bash
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin
   docker build -t advance-appliance .
   docker tag advance-appliance:latest your-ecr-repo:latest
   docker push your-ecr-repo:latest
   ```

2. **Create ECS Task Definition** (use AWS Console or CLI)

3. **Create ECS Service**
   - Configure load balancer
   - Set environment variables
   - Configure auto-scaling

#### Database: AWS DocumentDB (MongoDB-compatible)

1. Create DocumentDB cluster
2. Configure VPC and security groups
3. Update `DATABASE_URI` with DocumentDB connection string

---

### Other Platforms

#### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod
```

#### Railway

1. Connect GitHub repository
2. Configure environment variables
3. Deploy automatically on push

#### DigitalOcean App Platform

1. Connect GitHub repository
2. Configure build settings
3. Add environment variables
4. Deploy

---

## Database Setup

### MongoDB Atlas (Recommended)

1. **Create Cluster**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Create free tier cluster

2. **Configure Network Access**
   - Add your IP or `0.0.0.0/0` for all IPs (less secure)

3. **Create Database User**
   - Create user with read/write permissions

4. **Get Connection String**
   ```
   mongodb+srv://username:password@cluster.mongodb.net/advance-appliance
   ```

### PostgreSQL (Alternative)

1. **Create Database**
   ```sql
   CREATE DATABASE advance_appliance;
   ```

2. **Update package.json**
   ```json
   {
     "dependencies": {
       "@payloadcms/db-postgres": "^3.14.0"
     }
   }
   ```

3. **Update payload.config.ts**
   ```typescript
   import { postgresAdapter } from '@payloadcms/db-postgres'

   export default buildConfig({
     db: postgresAdapter({
       pool: {
         connectionString: process.env.DATABASE_URI,
       },
     }),
   })
   ```

---

## Post-Deployment

### 1. Initial Setup

```bash
# Access your site
https://your-domain.com

# Login to admin panel
https://your-domain.com/admin

# Create first admin user
```

### 2. Configure Site Settings

1. Go to Admin Panel > Globals > Settings
2. Update:
   - Site name
   - Contact information
   - Social media links
   - Business hours

### 3. Create Content

1. Create pages (Home, About, Services, Contact)
2. Add blog posts
3. Upload media

### 4. SEO Setup

1. Submit sitemap to Google Search Console:
   ```
   https://your-domain.com/sitemap.xml
   ```

2. Configure robots.txt:
   ```
   https://your-domain.com/robots.txt
   ```

3. Add structured data verification

---

## Monitoring & Maintenance

### Health Checks

```bash
# Application health
curl https://your-domain.com/api/health

# Database connectivity
curl https://your-domain.com/api/db-health
```

### Logging

**Vercel:**
- View logs in Vercel Dashboard
- Use Vercel CLI: `vercel logs`

**Docker:**
```bash
docker-compose logs -f app
docker-compose logs -f mongodb
```

### Backups

**MongoDB:**
```bash
# Manual backup
docker exec advance-appliance-mongodb mongodump --out /backup

# Automated (cron job)
0 2 * * * docker exec advance-appliance-mongodb mongodump --gzip --archive=/backup/db-$(date +\%Y\%m\%d).gz
```

**PostgreSQL:**
```bash
# Manual backup
docker exec advance-appliance-postgres pg_dump -U postgres advance_appliance > backup.sql

# Automated
0 2 * * * docker exec advance-appliance-postgres pg_dump -U postgres advance_appliance | gzip > /backup/db-$(date +\%Y\%m\%d).sql.gz
```

### Performance Monitoring

- **Uptime**: [UptimeRobot](https://uptimerobot.com)
- **Performance**: [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- **Error Tracking**: [Sentry](https://sentry.io)
- **Analytics**: Google Analytics 4

### Security

1. **Enable HTTPS** (Let's Encrypt)
2. **Configure CSP headers**
3. **Regular dependency updates**:
   ```bash
   npm audit
   npm update
   ```
4. **Database backups** (daily)
5. **Firewall configuration** (UFW on Linux)

---

## Troubleshooting

### Build Failures

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Database Connection Issues

```bash
# Test connection
node -e "require('mongodb').MongoClient.connect('YOUR_URI', (err) => console.log(err || 'Connected'))"
```

### Memory Issues

```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

---

## Support

For deployment issues:
1. Check logs first
2. Review environment variables
3. Verify database connectivity
4. Check firewall/security group settings

For questions: Create an issue on GitHub or contact support.

---

## Scaling

### Horizontal Scaling (Docker)

```yaml
# docker-compose.yml
services:
  app:
    deploy:
      replicas: 3
```

### Vertical Scaling

- Increase VPS resources
- Use larger AWS instance types
- Upgrade database tier

### CDN Integration

- Use Cloudflare for static assets
- Configure Vercel Edge Network
- Setup AWS CloudFront

---

**Last Updated**: 2025-12-31
