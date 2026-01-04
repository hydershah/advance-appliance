# Design 6: Modern Minimalism - Design System

## Color System

```css
/* Background Tones */
minimal-white-50:  #FFFFFF  /* Pure white for cards */
minimal-white-100: #FAFAFA  /* Primary background (off-white) */
minimal-white-400: #E0E0E0  /* Borders and dividers */

/* Text Tones */
minimal-black-800: #1A1A1A  /* Primary text (rich black) */
minimal-black-400: #7A7A7A  /* Secondary text (medium grey) */

/* Interactive Blue */
minimal-blue-500:  #4A90E2  /* Primary CTA and accents */
minimal-blue-600:  #3B7BC7  /* Hover state */
```

## Typography Scale

```tsx
// Headlines (Light - 300 weight)
text-5xl  // 3rem / 48px - Main headlines
text-6xl  // 3.75rem / 60px - Hero headlines
text-4xl  // 2.25rem / 36px - Section headers

// Body (Regular - 400 weight)
text-base // 1rem / 16px - Default body text
text-lg   // 1.125rem / 18px - Large body text
text-sm   // 0.875rem / 14px - Small body/labels
text-xs   // 0.75rem / 12px - Tiny labels/tags

// Emphasis (Medium - 500 weight)
// Used for: Buttons, labels, nav items, card titles
```

## Spacing System

```tsx
// Section Padding
py-20  // 5rem / 80px - Standard section spacing
py-28  // 7rem / 112px - Large section spacing

// Component Padding
p-6    // 1.5rem / 24px - Small cards
p-8    // 2rem / 32px - Large cards

// Element Gaps
gap-6  // 1.5rem / 24px - Card grids
gap-8  // 2rem / 32px - Section grids
gap-12 // 3rem / 48px - Large spacing
```

## Border Radius

```tsx
rounded-none  // 0px - No radius
rounded-sm    // 2px - Subtle radius (primary)
```

## Shadows

```tsx
// Hover states only
shadow-minimal     // Subtle shadow on hover
shadow-minimal-lg  // Larger shadow for emphasis
```

## Component Patterns

### Button

```tsx
// Primary Button
bg-minimal-blue-500
text-white
px-6 py-3 (md size)
rounded-sm
hover:bg-minimal-blue-600

// Ghost Button
bg-transparent
text-minimal-blue-500
border border-minimal-blue-500
hover:bg-minimal-blue-500 hover:text-white
```

### Card

```tsx
// Base Card
bg-white
border border-minimal-white-400
rounded-sm
p-8

// Hover State
hover:border-minimal-blue-500
hover:shadow-minimal-lg
transition-all duration-300
```

### Input Field

```tsx
// Text Input
bg-white
border border-minimal-white-400
rounded-sm
px-4 py-3
focus:outline-none
focus:border-minimal-blue-500
```

### Section Container

```tsx
// Standard Container
max-w-6xl mx-auto
px-6
py-28
```

## Grid Layouts

### Services Grid
```tsx
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6
```

### Stats Grid
```tsx
grid grid-cols-1 md:grid-cols-3 gap-12
```

### Icon Grid (Trust Badges)
```tsx
grid grid-cols-3 gap-6
```

### Testimonials Grid
```tsx
grid grid-cols-1 md:grid-cols-3 gap-8
```

## Icon Style

- Line icons (stroke-based)
- Consistent stroke width: 1.5-2px
- Sizes: w-4 h-4 (small), w-6 h-6 (medium), w-8 h-8 (large)
- Colors: inherit from parent or minimal-blue-500

## Animation Guidelines

```tsx
// Transitions
transition-all duration-200  // Fast interactions
transition-all duration-300  // Standard transitions
transition-colors           // Color-only transitions

// No complex animations
// No motion except hover/focus states
```

## Breakpoints

```tsx
// Tailwind defaults
sm: 640px   // Small devices
md: 768px   // Tablets
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

## Accessibility

### Focus States
```tsx
focus:outline-none
focus:border-minimal-blue-500  // Blue border on focus
focus:ring-2 ring-minimal-blue-500  // Optional ring
```

### Color Contrast
- Text on white: minimal-black-800 (#1A1A1A) - WCAG AAA
- Secondary text: minimal-black-400 (#7A7A7A) - WCAG AA
- Blue on white: minimal-blue-500 (#4A90E2) - WCAG AA

### Semantic HTML
- Use `<nav>`, `<main>`, `<section>`, `<footer>`
- Proper heading hierarchy (h1 → h2 → h3)
- Accessible form labels

## Design Tokens

```typescript
export const DESIGN_TOKENS = {
  colors: {
    background: 'minimal-white-100',
    card: 'white',
    text: {
      primary: 'minimal-black-800',
      secondary: 'minimal-black-400',
    },
    accent: 'minimal-blue-500',
    border: 'minimal-white-400',
  },
  spacing: {
    section: 'py-28',
    card: 'p-8',
    container: 'px-6',
  },
  typography: {
    family: 'font-inter',
    heading: 'font-light',
    body: 'font-regular',
    emphasis: 'font-medium',
  },
  radius: 'rounded-sm',
};
```

## Usage Examples

### Hero Section
```tsx
<section className="min-h-screen flex items-center justify-center bg-minimal-white-100 px-6">
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="font-inter font-light text-6xl text-minimal-black-800 tracking-tight">
      Headline
    </h1>
    <p className="font-inter text-lg text-minimal-black-400">
      Subheadline
    </p>
  </div>
</section>
```

### Service Card
```tsx
<div className="bg-white border border-minimal-white-400 rounded-sm p-8
                hover:border-minimal-blue-500 hover:shadow-minimal-lg transition-all">
  <Icon className="w-8 h-8 text-minimal-black-800" />
  <h3 className="font-inter font-medium text-xl">Title</h3>
  <p className="font-inter text-sm text-minimal-black-400">Description</p>
</div>
```

---

**Last Updated**: 2026-01-04
**Version**: 1.0
**Status**: Production Ready
