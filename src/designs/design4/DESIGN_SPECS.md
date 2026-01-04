# Design 4: Surgical Precision - Technical Specifications

## Quick Reference

### Color Variables (Tailwind)
```css
bg-surgical-white          /* #FFFFFF - Main background */
text-surgical-black        /* #0A0A0A - Primary text */
text-surgical-copper-400   /* #C6A15B - Accent only */
border-surgical-grey-200   /* #E5E5E5 - Dividers */
```

### Typography Classes
```css
/* Headlines */
font-cormorant font-light text-6xl lg:text-7xl

/* Section Headings */
font-cormorant font-light text-5xl lg:text-6xl

/* Subheadings */
font-cormorant font-light text-3xl lg:text-4xl

/* Body Large */
font-inter text-lg

/* Body Regular */
font-inter text-base

/* Labels/Buttons */
font-inter font-medium text-sm tracking-widest uppercase
```

### Spacing Quick Picks
```css
/* Section Padding */
py-40    /* Hero sections */
py-32    /* Standard sections */
py-24    /* Moderate sections */

/* Card/Component Padding */
p-12     /* Generous internal spacing */

/* Gaps */
gap-8    /* Card grids */
gap-12   /* Navigation items */
gap-16   /* Section spacing */
```

### Component Patterns

#### Button Usage
```tsx
// Primary CTA
<Button variant="primary" size="lg">Schedule Service</Button>

// Secondary Action
<Button variant="secondary" size="md">Learn More</Button>

// Text Link
<Button variant="text" size="sm">View Details</Button>
```

#### Section Header Pattern
```tsx
<div className="text-center mb-24">
  <Divider width="md" className="mx-auto mb-8" />
  <h2 className="font-cormorant font-light text-5xl lg:text-6xl text-surgical-black mb-6">
    Section Title
  </h2>
  <p className="font-inter text-lg text-surgical-black/60 max-w-2xl mx-auto">
    Brief description
  </p>
</div>
```

#### Service Card Layout
```tsx
<ServiceCard
  name="Service Name"
  description="Brief description (15-25 words)"
  icon="iconName"
/>
```

#### Grid Layouts
```css
/* Services Grid */
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8

/* Testimonials Grid */
grid grid-cols-1 md:grid-cols-3 gap-8

/* Stats Grid */
grid grid-cols-2 md:grid-cols-4 gap-12
```

### Hover/Focus States
```css
/* Button Hover */
hover:bg-surgical-copper-500 hover:shadow-surgical

/* Link Hover */
hover:text-surgical-copper-400 transition-colors duration-300

/* Card Hover */
hover:border-surgical-copper-400 hover:shadow-surgical-lg transition-all duration-500

/* Input Focus */
focus:border-surgical-copper-400 focus:outline-none transition-colors
```

### Responsive Breakpoints
```css
/* Mobile First Approach */
base     /* 0px - 767px (mobile) */
md:      /* 768px+ (tablet) */
lg:      /* 1024px+ (desktop) */
```

### Shadow Utilities
```css
shadow-surgical       /* Subtle: 0 4px 24px rgba(0,0,0,0.04) */
shadow-surgical-lg    /* Prominent: 0 8px 32px rgba(0,0,0,0.08) */
```

## Page Templates

### Hero Section Template
```tsx
<section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
  <Divider width="md" className="mb-12" />
  <h1 className="font-cormorant font-light text-6xl lg:text-7xl text-surgical-black text-center mb-8 max-w-4xl">
    HEADLINE
  </h1>
  <p className="font-inter text-lg text-surgical-black/60 text-center max-w-2xl mb-12 leading-relaxed">
    Tagline
  </p>
  <Button variant="primary" size="lg">CTA</Button>
</section>
```

### Standard Section Template
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
        Description
      </p>
    </div>

    {/* Section Content */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Content items */}
    </div>
  </div>
</section>
```

### CTA Section Template
```tsx
<section className="py-40 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <Divider width="lg" className="mx-auto mb-12" />
    <h2 className="font-cormorant font-light text-5xl lg:text-6xl text-surgical-black mb-8">
      Call to Action
    </h2>
    <p className="font-inter text-lg text-surgical-black/60 mb-12 max-w-2xl mx-auto">
      Supporting text
    </p>
    <div className="flex flex-col sm:flex-row gap-6 justify-center">
      <Button variant="primary" size="lg">Primary CTA</Button>
      <Button variant="secondary" size="lg">Secondary CTA</Button>
    </div>
  </div>
</section>
```

## Icon Set

Available icons in ServiceCard:
- `snowflake` - Refrigeration
- `droplet` - Washing Machines
- `wind` - Dryers
- `dish` - Dishwashers
- `flame` - Ovens & Ranges
- `circle` - Microwaves (default)

All icons are 8×8 (w-8 h-8) and use surgical-copper-400 color.

## Animation Timing
```css
duration-300   /* Standard transitions (colors, opacity) */
duration-500   /* Card hovers */
ease          /* Default easing */
```

## Content Lengths

### Hero
- Headline: 5-8 words
- Tagline: 10-15 words

### Sections
- Section Title: 1-3 words
- Section Description: 10-20 words

### Cards
- Card Title: 1-3 words
- Card Description: 15-25 words

### Testimonials
- Quote: 10-20 words
- Name: Abbreviated (S. Johnson)
- Location: City only

## Accessibility Checklist

- [ ] All interactive elements have focus states
- [ ] Color contrast meets WCAG AA (4.5:1 minimum)
- [ ] Form inputs have associated labels
- [ ] Icon-only buttons have aria-labels
- [ ] Headings follow semantic hierarchy (h1 → h2 → h3)
- [ ] Links have descriptive text or aria-labels
- [ ] Images have alt text (when added)
- [ ] Keyboard navigation works throughout

## Performance Guidelines

1. **No heavy images** - Use SVG icons only
2. **Lazy load** - Below-fold sections can be lazy loaded
3. **Minimal JavaScript** - Only scroll detection for nav
4. **Font display: swap** - Already configured
5. **Preconnect fonts** - Already in layout

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

CSS Grid and Flexbox are used throughout, both well-supported in modern browsers.

---

**Development Tips:**
1. Start with mobile layout first
2. Add tablet/desktop refinements with md: and lg:
3. Test with real content (avoid Lorem Ipsum)
4. Verify whitespace ratios (70/30 rule)
5. Remove anything that doesn't earn its place
