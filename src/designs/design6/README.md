# Design 6: Modern Minimalism

**Apple-esque, Tech-Forward, Systematically Clean**

## Design Philosophy
Modern minimalism inspired by Apple Store aesthetics and luxury tech services. Clean, systematic, grid-based layouts with a single font family and minimal color palette.

## Color Palette
- **Background**: `minimal-white-100` (#FAFAFA) - Off-white for soft contrast
- **Text Primary**: `minimal-black-800` (#1A1A1A) - Rich black
- **Text Secondary**: `minimal-black-400` (#7A7A7A) - Medium grey
- **Accent**: `minimal-blue-500` (#4A90E2) - Clean blue for CTAs and interactive elements
- **Borders**: `minimal-white-400` (#E0E0E0) - Light grey borders (1px)

## Typography
- **Font Family**: Inter (single family for modern consistency)
- **Headlines**: `font-light` (300 weight) at 5xl/6xl sizes
- **Body**: `font-regular` (400 weight) at base/lg sizes
- **Emphasis**: `font-medium` (500 weight) for buttons and labels

## Key Design Principles

### 1. Grid-Based Precision
- Mathematical layouts with perfect alignment
- Consistent spacing (py-20, py-28 for sections)
- Max width of 6xl (72rem) for content

### 2. Minimal Edges
- `rounded-sm` (2px) or `rounded-none` (0px)
- Sharp, clean corners
- 1px borders throughout

### 3. Icon-First Design
- Simple line icons (Heroicons-style)
- Icons lead before text
- Minimal decorative elements

### 4. Whitespace as Design Element
- Generous padding (p-6, p-8)
- Large section spacing (py-28)
- Clean separation with subtle borders

### 5. Systematic Interactions
- Hover effects: border color change + shadow
- Transitions: 200-300ms duration
- States: clear visual feedback

## Components

### Navigation
- Fixed top bar, white background
- Minimal border bottom
- Clean blue CTA button
- Simple mobile hamburger menu

### Button
- Two variants: Primary (blue bg) and Ghost (blue border)
- Three sizes: sm, md, lg
- Sharp edges (rounded-sm)
- Single font family

### ServiceCard
- Icon-first layout
- Subtle border with hover state
- Features list with checkmarks
- Minimal padding and spacing

### IconGrid
- 3-column grid for trust badges
- Centered icons and text
- Hover border color change
- Clean, systematic layout

### Stats
- Large numbers with light font weight
- Accent color for suffixes
- Uppercase labels
- Clean separation with borders

### Footer
- Grid-based organization
- Minimal color (dark background)
- Systematic link layout
- Clean typography hierarchy

## Pages

### Home
- Full-screen hero with centered content
- Icon grid for trust elements
- Services in 4-column grid
- Minimal testimonials (3 max)
- Brand list with text only
- Clean CTA section

### Services
- Centered hero section
- Services grid (4 columns)
- Process steps (numbered circles)
- Single CTA

### Contact
- Two-column layout (info + form)
- Minimal form styling
- Clean input fields with blue focus
- Systematic spacing

## Usage

```tsx
import { Home } from '@/designs/design6/pages';

export default function Page() {
  return <Home />;
}
```

## Mobile Responsiveness
- Mobile-first approach
- Breakpoints: md (768px), lg (1024px)
- Stack to single column on mobile
- Maintain spacing proportions

## Accessibility
- Clear focus states (blue border)
- Semantic HTML
- ARIA labels on interactive elements
- Sufficient color contrast

## Performance
- Minimal animations
- System fonts (Inter)
- Clean CSS (Tailwind only)
- No heavy dependencies

---

**Design Completed**: 2026-01-04
**Tech Stack**: React, TypeScript, Tailwind CSS
**Inspiration**: Apple Store, Tesla, Stripe
