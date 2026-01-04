# Design 5: Warm Sophistication - Quick Start Guide

## Installation & Setup

### Prerequisites

Ensure you have the following fonts loaded in your project:

```html
<!-- In your HTML head or _document.tsx -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
```

### Tailwind Configuration

The warm color palette is already configured in `tailwind.config.ts`:

```javascript
// tailwind.config.ts
warm: {
  cream: { 100: '#FAF7F2', 300: '#E8E3DA', ... },
  brown: { 800: '#2C2416', ... },
  copper: { 400: '#B87333', ... },
  sand: { 200: '#D4C5B0', ... },
}
```

Fonts are also configured:
```javascript
fontFamily: {
  lora: ['Lora', 'serif'],
  poppins: ['Poppins', 'sans-serif'],
}
```

## Basic Usage

### Import the Home Page

```tsx
import { Home } from '@/designs/design5';

function App() {
  return <Home />;
}
```

That's it! The Home component includes all sections.

## Using Individual Components

### Button Component

```tsx
import { Button } from '@/designs/design5';

// Primary button
<Button variant="primary" size="lg" href="/contact">
  Get Started
</Button>

// Outline button
<Button variant="outline" size="md" onClick={handleClick}>
  Learn More
</Button>

// With icon
<Button
  variant="primary"
  icon={<PhoneIcon />}
  iconPosition="left"
>
  Call Now
</Button>
```

**Props**:
- `variant`: 'primary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `href`: string (renders as <a>)
- `onClick`: function (renders as <button>)
- `icon`: React.ReactNode
- `iconPosition`: 'left' | 'right'

### Header Component

```tsx
import { Header } from '@/designs/design5';

<Header currentPage="home" />
```

**Props**:
- `currentPage`: 'home' | 'services' | 'about' | 'contact'

The header automatically highlights the current page in navigation.

### Footer Component

```tsx
import { Footer } from '@/designs/design5';

<Footer />
```

No props needed. Uses constants from `utils/constants.ts`.

### ServiceCard Component

```tsx
import { ServiceCard } from '@/designs/design5';

const service = {
  id: 'refrigerator',
  name: 'Refrigerator Repair',
  description: 'Expert repair for all brands...',
  icon: 'snowflake',
  price: 'From $185',
};

<ServiceCard service={service} />
```

**Service Object**:
```typescript
{
  id: string;
  name: string;
  description: string;
  icon: string; // 'snowflake' | 'droplet' | 'flame' | 'wind' | 'sun' | 'zap'
  price?: string;
}
```

### TestimonialCarousel Component

```tsx
import { TestimonialCarousel } from '@/designs/design5';
import { TESTIMONIALS } from '@/designs/design5/utils';

<TestimonialCarousel testimonials={TESTIMONIALS} />
```

**Features**:
- Auto-rotates every 6 seconds
- Manual navigation with arrows
- Dot indicators for position
- Pause on hover (optional future enhancement)

### TrustBadges Component

```tsx
import { TrustBadges } from '@/designs/design5';
import { TRUST_BADGES } from '@/designs/design5/utils';

<TrustBadges badges={TRUST_BADGES} />
```

**Badge Object**:
```typescript
{
  icon: string; // 'shield' | 'certificate' | 'clock' | 'star'
  text: string;
}
```

## Customizing Constants

All business information, services, testimonials, etc. are in:

```
src/designs/design5/utils/constants.ts
```

### Update Business Info

```typescript
export const BUSINESS_INFO = {
  name: 'Your Business Name',
  tagline: 'Your tagline here',
  phone: '(XXX) XXX-XXXX',
  phoneClean: 'XXXXXXXXXX',
  email: 'email@example.com',
  address: '123 Main St, City, State ZIP',
  hours: {
    weekday: '8:00 AM - 6:00 PM',
    weekend: '9:00 AM - 5:00 PM',
  },
};
```

### Add/Edit Services

```typescript
export const SERVICES = [
  {
    id: 'new-service',
    name: 'New Service Name',
    description: 'A friendly 30-word description...',
    icon: 'zap', // Choose from available icons
    price: 'From $XXX',
  },
  // ... more services
];
```

**Available Icons**:
- `snowflake`: Refrigeration
- `droplet`: Water-related (dishwasher, washer)
- `flame`: Heat-related (oven, dryer)
- `wind`: Air circulation
- `sun`: General appliance
- `zap`: Electric/microwave

### Add Testimonials

```typescript
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Customer Name',
    location: 'City, State',
    rating: 5, // 1-5 stars
    text: 'The testimonial quote goes here...',
    service: 'Service Name',
  },
  // ... more testimonials
];
```

### Update Images

```typescript
export const IMAGES = {
  hero: 'https://example.com/hero.jpg',
  kitchen: 'https://example.com/kitchen.jpg',
  technician: 'https://example.com/tech.jpg',
  family: 'https://example.com/family.jpg',
  appliance: 'https://example.com/appliance.jpg',
};
```

**Image Guidelines**:
- Use warm-toned photography
- High quality (1920px wide minimum)
- Compressed for web (use tinypng.com or similar)
- Natural lighting preferred
- Show real people/kitchens when possible

## Creating New Pages

### Example: Services Page

```tsx
import React from 'react';
import { Header, Footer, ServiceCard } from '@/designs/design5';
import { SERVICES } from '@/designs/design5/utils';

export const Services: React.FC = () => (
  <div className="min-h-screen bg-warm-cream-100 font-poppins">
    <Header currentPage="services" />

    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <h1 className="font-lora text-5xl font-medium text-warm-brown-800 mb-6">
          Our Services
        </h1>
        <p className="text-lg text-warm-brown-800/70 font-poppins mb-16 max-w-2xl">
          Professional repair for all major appliances.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);
```

## Color Reference

Use these Tailwind classes throughout your components:

### Backgrounds
```tsx
bg-warm-cream-100      // Primary page background
bg-warm-cream-300      // Secondary sections (linen)
bg-white               // Card backgrounds
bg-warm-copper-400     // Accent CTAs
```

### Text
```tsx
text-warm-brown-800           // Primary text
text-warm-brown-800/70        // Secondary text (70% opacity)
text-warm-copper-400          // Accent text (links, highlights)
```

### Borders
```tsx
border-warm-sand-200          // Subtle borders
border-warm-copper-400        // Accent borders (hover)
```

### Shadows
```tsx
shadow-warm                   // Subtle shadow
shadow-warm-lg                // Prominent shadow
```

## Typography Reference

### Headlines
```tsx
className="font-lora text-5xl lg:text-6xl font-medium text-warm-brown-800"
```

### Section Titles
```tsx
className="font-lora text-4xl lg:text-5xl font-medium text-warm-brown-800"
```

### Body Text
```tsx
className="text-lg text-warm-brown-800/70 font-poppins leading-relaxed"
```

### Small Text / Labels
```tsx
className="text-sm font-poppins font-medium text-warm-copper-400 uppercase tracking-widest"
```

## Layout Reference

### Standard Section
```tsx
<section className="py-24 lg:py-32 bg-warm-cream-100">
  <div className="container mx-auto px-6 max-w-7xl">
    {/* Content */}
  </div>
</section>
```

### Two-Column Grid
```tsx
<div className="grid lg:grid-cols-2 gap-16 items-center">
  <div>{/* Left column */}</div>
  <div>{/* Right column */}</div>
</div>
```

### Service Grid (3 columns)
```tsx
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Cards */}
</div>
```

## Common Patterns

### Section with Intro
```tsx
<div className="text-center mb-16">
  <p className="text-warm-copper-400 uppercase tracking-widest text-sm font-poppins font-medium mb-4">
    Section Label
  </p>
  <h2 className="font-lora text-4xl lg:text-5xl font-medium text-warm-brown-800 mb-6">
    Section Headline
  </h2>
  <p className="text-lg text-warm-brown-800/70 font-poppins max-w-2xl mx-auto">
    Section description text.
  </p>
</div>
```

### Image with Overlay Card
```tsx
<div className="relative">
  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-warm-lg">
    <img src={IMAGE_URL} alt="Description" className="w-full h-full object-cover" />
  </div>
  <div className="absolute -bottom-6 -left-6 bg-warm-copper-400 text-white p-6 rounded-lg shadow-warm max-w-[200px]">
    <div className="text-3xl font-lora font-medium mb-1">30+</div>
    <div className="text-sm font-poppins">Years Experience</div>
  </div>
</div>
```

## Troubleshooting

### Fonts Not Loading
Check that Google Fonts link is in your HTML head and fonts are spelled correctly in Tailwind classes.

### Colors Not Applying
Verify `tailwind.config.ts` includes the `warm.*` color definitions and content paths include `src/designs/**/*.{ts,tsx}`.

### Components Not Rendering
Check import paths and ensure you're using absolute imports (`@/designs/design5`) or adjust to relative paths.

### Mobile Menu Not Working
Ensure React state is being properly updated. Check console for errors.

## Best Practices

1. **Consistent Spacing**: Use py-24 or py-32 for sections
2. **Max Width**: Always use max-w-7xl on containers
3. **Color Hierarchy**: warm-brown-800 for primary, /70 for secondary
4. **Hover States**: Always include hover states on interactive elements
5. **Responsive**: Mobile-first, test at 320px, 768px, 1024px
6. **Accessibility**: Include aria-labels on icon-only buttons

## Support & Documentation

- Full specification: `DESIGN_SPEC.md`
- Design comparison: `../DESIGN_COMPARISON.md`
- Component docs: Check individual component files

---

Happy building with Warm Sophistication!
