# Design 4: Bamo Luxury Minimal

## Overview
Inspired by Bamo.com's luxury minimal aesthetic. Warm, sophisticated, and effortlessly elegant with massive whitespace and absolute restraint.

## Design Philosophy
- **Warm Minimalism** - Off-white background creates warmth without sacrificing clarity
- **Massive Whitespace** - py-40 (160px) section padding for breathing room
- **No Visual Noise** - No borders on cards, no shadows, pure flat design
- **Pill-Shaped CTAs** - Full rounded buttons (rounded-full) stand out elegantly
- **2 Fonts Only** - Lora (serif) for headlines, Inter (sans-serif) for body

## Color Palette
```
bamo-bg          #fffaf2    Warm off-white background (NOT pure white!)
bamo-text        #2d2926    Deep charcoal text (NOT black!)
bamo-accent      #e74c39    Burnt orange (ONLY for buttons/CTAs)
bamo-border      #E5E5E5    Barely visible hairline borders
bamo-white       #FFFFFF    Pure white for cards on warm background
```

**CRITICAL**: Background is #fffaf2 (warm off-white), NOT pure white!

## Typography

### Fonts
- **Headlines**: Lora (font-lora)
  - Weight: 600 (semibold)
  - Usage: Hero titles, section headings, stats

- **Body**: Inter (font-inter)
  - Weight: 400 (regular) for body text
  - Weight: 600 (semibold) for labels/buttons
  - Usage: All body copy, navigation, buttons

### Scale
```
Hero Headline:    text-5xl md:text-6xl lg:text-7xl (48-72px)
Section Heading:  text-4xl md:text-5xl (36-48px)
Subheading:       text-2xl lg:text-3xl (24-30px)
Body Large:       text-lg (18px)
Body Regular:     text-base (16px)
Small/Labels:     text-sm (14px)
```

### Line Heights
```
Headlines:        leading-tight (1.25)
Body text:        leading-relaxed (1.625)
Default:          1.6
```

## Spacing System

### Section Padding (MASSIVE)
```
Ultra-generous:   py-40 (160px)  ← This is the standard!
Moderate:         py-20 (80px)
Card internal:    p-12 (48px)
Card internal sm: p-10 (40px)
```

### Content Width
```
Max container:    max-w-6xl (1152px)  ← Smaller than other designs
Centered content: max-w-4xl (896px)
Text blocks:      max-w-2xl (672px)
```

### Grid Gaps
```
Standard:         gap-12 (3rem / 48px)
Compact:          gap-10 (2.5rem / 40px)
```

## Components

### Button (PILL SHAPED!)
- **Shape**: `rounded-full` (FULL PILL - this is critical!)
- **Primary**: Background #e74c39 (burnt orange), white text
- **Secondary**: 2px border with text, inverts on hover
- **Padding**: px-8 py-3 (md), px-10 py-4 (lg)
- **NO shadows**: Flat design only
- **Hover**: opacity-90 for primary, fill for secondary

### Navigation
- **Height**: 80px (h-20)
- **Background**: #fffaf2 (matches page background)
- **Border**: 1px solid #E5E5E5 (hairline only)
- **NO shadows**: Not even on scroll
- **Logo**: Lora font-semibold text-2xl
- **Links**: Inter text-sm, minimal spacing

### ServiceCard (NO BORDERS!)
- **Background**: White (#FFFFFF) on warm off-white page
- **Border**: NONE (no borders!)
- **Border-radius**: 0 (sharp corners, not rounded)
- **Padding**: p-12 (massive 48px internal padding)
- **Shadow**: NONE (flat design)
- **Hover**: Only subtle lift (-translate-y-1)
- **Icon**: 10×10, text color
- **Title**: Lora font-semibold text-2xl
- **Description**: Inter text-base, 70% opacity

### TestimonialCard
- **Background**: White on warm off-white
- **Border**: NONE except hairline divider at author section
- **Padding**: p-10 (40px)
- **Hover**: Subtle lift only
- **NO rating stars**: Keep it minimal
- **Quote**: Inter text-base, 80% opacity
- **Author**: Border-top with hairline, semibold name

### Footer
- **Background**: #fffaf2 (warm off-white)
- **Border**: Top hairline only
- **Layout**: 3 columns (Company, Hours, Location)
- **Spacing**: py-20 main, py-8 bottom bar
- **NO divider lines**: Hairlines only

## Pages

### Home
**Sections (all with massive spacing):**
1. **Hero** - Full screen, centered, minimal copy
2. **Stats** - 3 metrics in grid (removed 4th for minimalism)
3. **Services** - 2-column grid (NOT 3), warm background
4. **Brands** - Pure white background section
5. **Testimonials** - 3-column grid
6. **CTA** - Centered, dual pill buttons

### Services
**Sections:**
1. **Hero** - 60vh centered intro
2. **Services Grid** - 2-column layout
3. **Process** - White background, numbered steps with burnt orange
4. **CTA** - Simple centered pill button

### Contact
**Sections:**
1. **Hero** - 60vh centered intro
2. **Two-Column** - Contact info + Form
3. **Form** - Minimal inputs, burnt orange focus states

## Content Guidelines

### Copy Rules
- **Concise**: Remove every unnecessary word
- **Elegant**: Premium language, not salesy
- **Confident**: Direct statements, no hedging
- **Warm**: Professional but approachable

### Examples
```
Good: "Premium appliance repair for discerning homeowners"
Bad:  "We provide the best appliance repair services"

Good: "Expert service for Sub-Zero, Miele, and luxury cooling systems"
Bad:  "We fix all brands of refrigerators and freezers"
```

## Interaction Design

### Hover States (MINIMAL)
```
Pill Buttons:  opacity-90 (primary), fill effect (secondary)
Links:         Color → burnt orange
Cards:         Subtle lift -translate-y-1 (NO shadows!)
Form inputs:   Border → burnt orange
```

### Transitions
```
All:           300ms ease-in-out
Transform:     300ms ease-in-out
Colors:        300ms ease
```

## Key Differences from Bamo.com

This design is INSPIRED by Bamo.com but adapted for appliance repair:
- Same warm off-white background (#fffaf2)
- Same pill-shaped buttons (rounded-full)
- Same flat design (no shadows)
- Same massive whitespace (py-40)
- Same 2-font system (Lora + Inter)
- Adapted color accent from Bamo's palette

## Accessibility

### Contrast Ratios
- Charcoal on warm-white: 14:1 (AAA)
- Burnt orange on white: 4.6:1 (AA)
- All text meets WCAG AA standards

### Focus States
- Burnt orange focus ring on interactive elements
- Keyboard navigation fully supported
- Form labels properly associated

## Technical Implementation

### Fonts
Fonts are in Tailwind config:
- Lora (font-lora) - serif for headlines
- Inter (font-inter) - sans-serif for body

### Colors
All colors in Tailwind config under `bamo.*` namespace:
```typescript
bamo: {
  bg: '#fffaf2',
  text: '#2d2926',
  accent: '#e74c39',
  border: '#E5E5E5',
  white: '#FFFFFF',
}
```

### Responsive Breakpoints
```
Mobile:    < 768px (md)
Tablet:    768px - 1024px
Desktop:   > 1024px (lg)
```

## Usage Example

```tsx
import { Demo } from '@/designs/design4/Demo';

function App() {
  return <Demo />;
}
```

## File Structure
```
design4/
├── components/
│   ├── Button.tsx          ← PILL SHAPED
│   ├── Footer.tsx          ← Minimal, hairline border
│   ├── Navigation.tsx      ← 80px, warm bg, hairline
│   ├── ServiceCard.tsx     ← NO borders, massive padding
│   ├── TestimonialCard.tsx ← NO borders, minimal
│   └── index.ts
├── pages/
│   ├── Home.tsx            ← py-40 spacing
│   ├── Services.tsx        ← 2-column grid
│   ├── Contact.tsx         ← Clean form
│   └── index.ts
├── utils/
│   └── constants.ts
├── Demo.tsx
└── README.md
```

## Design Checklist

Before implementing any element:
- [ ] Is the background #fffaf2 (warm off-white)?
- [ ] Are buttons PILL SHAPED (rounded-full)?
- [ ] Do cards have NO borders?
- [ ] Are there NO shadows anywhere?
- [ ] Is section padding py-40 (160px)?
- [ ] Are we using max-w-6xl for containers?
- [ ] Are grid gaps gap-12 (3rem)?
- [ ] Are we only using 2 fonts (Lora + Inter)?
- [ ] Is the burnt orange ONLY for CTAs?
- [ ] Is line-height generous (1.6)?

---

**Remember**: This is luxury minimalism. Every pixel of whitespace earns the design's elegance. When in doubt, add MORE space, not less.
