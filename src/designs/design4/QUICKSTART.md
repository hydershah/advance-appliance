# Design 4: Surgical Precision - Quick Start Guide

## 5-Minute Setup

### 1. Import the Design

```tsx
// In your page or app component
import { Home } from '@/designs/design4';

function App() {
  return <Home />;
}
```

That's it! The design is ready to use.

### 2. View Individual Pages

```tsx
// Home page
import { Home } from '@/designs/design4/pages/Home';

// Services page
import { Services } from '@/designs/design4/pages/Services';

// Contact page
import { Contact } from '@/designs/design4/pages/Contact';
```

### 3. Use Components Individually

```tsx
import {
  Navigation,
  Footer,
  Button,
  ServiceCard,
  TestimonialCard,
  Divider
} from '@/designs/design4/components';

function CustomPage() {
  return (
    <>
      <Navigation currentPath="/custom" />

      <section className="py-32 px-6">
        <Divider width="md" className="mx-auto mb-12" />
        <h1 className="font-cormorant font-light text-6xl text-center">
          Custom Page
        </h1>
      </section>

      <Footer />
    </>
  );
}
```

## Essential Patterns

### Creating a New Page

```tsx
import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Divider } from '../components/Divider';

export const YourPage: React.FC = () => {
  return (
    <div className="bg-surgical-white">
      <Navigation currentPath="/your-page" />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <Divider width="md" className="mb-12" />
        <h1 className="font-cormorant font-light text-6xl lg:text-7xl text-surgical-black text-center mb-8">
          YOUR TITLE
        </h1>
        <p className="font-inter text-lg text-surgical-black/60 text-center max-w-2xl">
          Your tagline (15-25 words max)
        </p>
      </section>

      {/* Your content sections */}

      <Footer />
    </div>
  );
};
```

### Adding a Section

```tsx
<section className="py-32 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-24">
      <Divider width="md" className="mx-auto mb-8" />
      <h2 className="font-cormorant font-light text-5xl lg:text-6xl text-surgical-black mb-6">
        Section Title
      </h2>
      <p className="font-inter text-lg text-surgical-black/60 max-w-2xl mx-auto">
        Brief description
      </p>
    </div>

    {/* Your content */}
  </div>
</section>
```

### Creating a Grid

```tsx
{/* 3-column grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map((item) => (
    <div key={item.id} className="bg-white p-12 border border-surgical-grey-200">
      {/* Card content */}
    </div>
  ))}
</div>
```

## Customization

### Updating Business Info

Edit `/Users/hyder/advance applaonce/src/designs/design4/utils/constants.ts`:

```tsx
export const BUSINESS_INFO = {
  name: 'Your Business Name',
  tagline: 'Your tagline',
  phone: '(XXX) XXX-XXXX',
  // ... etc
};
```

### Adding More Services

```tsx
export const SERVICES = [
  // ... existing services
  {
    id: 'new-service',
    name: 'Service Name',
    description: 'Brief description',
    icon: 'circle', // or snowflake, droplet, wind, dish, flame
  },
];
```

### Changing Colors

All colors are in Tailwind config. Use the `surgical.*` namespace:

```tsx
// In your components
className="bg-surgical-white text-surgical-black border-surgical-copper-400"
```

## Common Tasks

### Add a New Navigation Link

Edit `Navigation.tsx`:

```tsx
const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Your Link', href: '/your-page' }, // Add here
];
```

### Change Hero Height

```tsx
// Full screen
className="min-h-screen"

// 60% screen
className="min-h-[60vh]"

// 80% screen
className="min-h-[80vh]"
```

### Add Alternating Background

```tsx
{/* White background */}
<section className="py-32 px-6">
  {/* ... */}
</section>

{/* Grey background */}
<section className="py-32 px-6 bg-surgical-grey-50">
  {/* ... */}
</section>
```

### Adjust Spacing

```tsx
{/* More whitespace */}
className="py-40"  // Instead of py-32

{/* Less whitespace */}
className="py-24"  // Instead of py-32

{/* Card padding */}
className="p-16"   // Extra generous
className="p-12"   // Standard (recommended)
className="p-8"    // Tighter
```

## Typography Tips

### Headline Hierarchy

```tsx
{/* Page Title (H1) */}
<h1 className="font-cormorant font-light text-6xl lg:text-7xl">

{/* Section Title (H2) */}
<h2 className="font-cormorant font-light text-5xl lg:text-6xl">

{/* Subsection Title (H3) */}
<h3 className="font-cormorant font-light text-3xl lg:text-4xl">

{/* Card Title (H4) */}
<h4 className="font-cormorant font-light text-2xl lg:text-3xl">
```

### Body Text

```tsx
{/* Large body */}
<p className="font-inter text-lg text-surgical-black/60">

{/* Regular body */}
<p className="font-inter text-base text-surgical-black/60">

{/* Small text */}
<p className="font-inter text-sm text-surgical-black/40">
```

### Labels/Buttons

```tsx
{/* Uppercase labels */}
<span className="font-inter font-medium text-sm tracking-widest uppercase text-surgical-black">

{/* Button text */}
<span className="font-inter font-medium tracking-wide">
```

## Responsive Design

### Mobile-First Approach

```tsx
{/* Mobile: text-4xl, Desktop: text-6xl */}
className="text-4xl lg:text-6xl"

{/* Mobile: 1 column, Tablet: 2, Desktop: 3 */}
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

{/* Mobile: py-24, Desktop: py-32 */}
className="py-24 lg:py-32"
```

### Hidden on Mobile

```tsx
className="hidden md:block"  // Hide on mobile, show on tablet+
className="block md:hidden"  // Show on mobile, hide on tablet+
```

## Testing Checklist

Before deploying:

- [ ] Test on mobile (375px width minimum)
- [ ] Test on tablet (768px)
- [ ] Test on desktop (1440px)
- [ ] Verify all links work
- [ ] Check phone number is clickable
- [ ] Test form submission
- [ ] Verify navigation scroll behavior
- [ ] Check mobile menu functionality
- [ ] Test keyboard navigation
- [ ] Verify all hover states
- [ ] Check text readability (contrast)
- [ ] Ensure whitespace ratios feel right

## Troubleshooting

### Fonts not loading?
Verify the layout includes font variables:
```tsx
className={`${inter.variable} ${cormorant.variable}`}
```

### Colors not working?
Ensure Tailwind config includes `surgical.*` colors. They're already in the config.

### Navigation overlapping content?
Add `pt-20` to first section after navigation.

### Card hover not smooth?
Ensure transition classes are present:
```tsx
className="transition-all duration-500"
```

## Performance Tips

1. Lazy load below-fold sections
2. Optimize any images you add (WebP format, proper sizing)
3. Keep JavaScript minimal (only scroll detection needed)
4. Use font-display: swap (already configured)

## Next Steps

1. **Customize content** in `constants.ts`
2. **Add your brand voice** to copy
3. **Test on real devices**
4. **Gather user feedback** on whitespace balance
5. **Monitor metrics** (bounce rate, time on site)
6. **Consider adding** About page (follow same patterns)

## Support Resources

- **Full Design Guide**: `README.md`
- **Technical Specs**: `DESIGN_SPECS.md`
- **Design Comparison**: `COMPARISON.md`
- **Component Docs**: Check individual component files

## Design Philosophy Reminder

Before adding anything:
1. Does this element EARN its place?
2. Can we use MORE whitespace?
3. Can we say this with FEWER words?
4. Does it maintain surgical precision?
5. Is copper used ONLY for accents/CTAs?

---

**You're ready to go!** Start with the Home page and customize from there.
