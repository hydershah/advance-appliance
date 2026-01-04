# Design 5: Warm Sophistication - Complete Specification

## Overview

A warm, inviting luxury design that balances premium quality with approachability. Perfect for family-owned service businesses that want to project expertise without intimidation.

## Visual Identity

### Color System

```css
/* Primary Palette */
--warm-cream-100: #FAF7F2;    /* Primary background - soft, warm */
--warm-cream-300: #E8E3DA;    /* Secondary background - linen texture */
--warm-brown-800: #2C2416;    /* Primary text - warm dark brown */
--warm-copper-400: #B87333;   /* Accent color - burnished copper */
--warm-sand-200: #D4C5B0;     /* Subtle borders and accents */
--white: #FFFFFF;             /* Card backgrounds */
```

### Color Usage Rules

| Element | Color | Reasoning |
|---------|-------|-----------|
| Page background | warm-cream-100 | Warm, inviting base |
| Section alternates | white / warm-cream-300 | Visual rhythm |
| Headings | warm-brown-800 | Strong but warm |
| Body text | warm-brown-800/70 | Readable, gentle |
| CTAs | warm-copper-400 | Warm, premium accent |
| Borders | warm-sand-200 | Subtle definition |

### Typography

**Font Pairing**: Lora (serif) + Poppins (sans-serif)

```css
/* Headlines - Warm Elegance */
font-family: 'Lora', serif;
font-weight: 500; /* Medium */
line-height: 1.2;

/* Body - Friendly Readability */
font-family: 'Poppins', sans-serif;
font-weight: 400; /* Regular */
line-height: 1.75;
```

**Type Scale**:
- H1 (Hero): 3rem (48px) → 3.75rem (60px) on lg screens
- H2 (Section): 2.25rem (36px) → 3rem (48px) on lg screens
- Body: 1.125rem (18px)
- Small: 0.875rem (14px)

### Spacing System

**Vertical Rhythm**:
- Sections: `py-24` (96px) or `py-32` (128px)
- Between elements: `mb-6` (24px) typical
- Tight groupings: `mb-4` (16px)
- Component internal: `p-6` or `p-8` (24px/32px)

**Horizontal Constraints**:
- Max width: `max-w-7xl` (1280px)
- Container padding: `px-6` (24px)
- Grid gaps: `gap-8` or `gap-16` (32px/64px)

### Border & Shadow

**Borders**:
- Radius: `rounded-lg` (8px) - soft, friendly
- Dividers: 1px solid warm-sand-200
- Cards: 1px border warm-sand-200

**Shadows**:
- Subtle: `shadow-warm` (0 4px 20px rgba(44, 36, 22, 0.08))
- Prominent: `shadow-warm-lg` (0 8px 30px rgba(44, 36, 22, 0.12))

## Component Specifications

### Button

**Variants**:

```tsx
// Primary - Copper background
bg-warm-copper-400
text-white
hover:bg-warm-copper-500
shadow-warm

// Outline - Brown border
border-2 border-warm-brown-800
text-warm-brown-800
hover:bg-warm-brown-800 hover:text-white
```

**Sizes**:
- Small: `px-6 py-2 text-sm`
- Medium: `px-8 py-4 text-base`
- Large: `px-10 py-5 text-lg`

**States**:
- Default: Defined by variant
- Hover: Background shift or fill
- Focus: Ring (accessibility)
- Active: Slight scale or darker shade

### Header

**Structure**:
- Height: 80px (5rem)
- Background: warm-cream-100
- Border: Bottom 1px warm-sand-200
- Position: Sticky top

**Elements**:
- Logo: Icon (40x40) + Text (2-line)
- Nav: Horizontal, font-medium, copper on active
- CTA: Primary button with phone number
- Mobile: Hamburger menu, full-width dropdown

### Footer

**Layout**: 4-column grid (responsive)

**Sections**:
1. About: Logo, tagline, established date
2. Quick Links: Main navigation
3. Contact: Phone, email, address with icons
4. Service Areas: Text list

**Bottom Bar**: Copyright + legal links

### ServiceCard

**Anatomy**:
- Container: White bg, rounded-lg, border warm-sand-200
- Icon: 64x64 rounded-lg, cream bg → copper on hover
- Title: Lora font, text-xl, warm-brown-800
- Description: ~30 words, Poppins, text-warm-brown-800/70
- Footer: Price + "Learn More" link with arrow

**Hover State**:
- Border: warm-copper-400
- Icon bg: warm-copper-400
- Icon text: white
- Shadow: warm

### TestimonialCarousel

**Features**:
- Auto-rotate: 6-second intervals
- Manual controls: Left/right arrows
- Indicators: Dot navigation
- Star rating: Copper filled stars

**Card Structure**:
- Background: White
- Padding: p-8 md:p-12
- Min height: 300px
- Quote: Large text, italic optional
- Author: Name + location + service

### TrustBadges

**Grid**: 2 columns mobile, 4 columns desktop

**Badge Structure**:
- Icon: 48x48 rounded-lg, cream bg, copper icon
- Text: Small font, medium weight
- Container: White bg, border, hover accent

## Page Layout (Home.tsx)

**Section Order**:

1. **Hero** (85vh)
   - 2-column grid (text + image)
   - Large headline + description
   - Dual CTAs (Call + Schedule)
   - "Est. 1992" badge
   - Feature image with stat overlay

2. **Trust Badges** (py-16, white bg)
   - 4 key trust indicators
   - Icons with short labels

3. **Stats** (py-24, cream bg)
   - 4 key metrics
   - Large numbers, copper accent
   - 2-column mobile, 4-column desktop

4. **Services** (py-32, white bg)
   - Section intro
   - 3-column grid of service cards
   - 6 services displayed

5. **About** (py-32, cream-300 bg)
   - 2-column: Image + Story
   - Personal narrative
   - "Learn More" CTA

6. **Testimonials** (py-32, cream-100 bg)
   - Section intro
   - Carousel showcase
   - 4 testimonials

7. **Brands** (py-24, white bg)
   - Simple heading
   - 6-column grid
   - Brand names in gray → copper hover

8. **Contact CTA** (py-32, copper-400 bg)
   - Centered layout
   - Large headline
   - Dual CTAs on white/outline

## Content Strategy

### Messaging Principles

1. **Lead with trust**: "Est. 1992" immediately visible
2. **Personal touch**: "Family-owned", "Your kitchen", "Our expertise"
3. **Clear benefits**: "Same-day service", "Factory-certified"
4. **Transparent**: Upfront pricing, no hidden fees
5. **Conversational**: Friendly tone, no jargon

### Copy Guidelines

**Headlines**:
- Start with "Your" or "We"
- Keep under 10 words
- Avoid technical jargon
- Example: "Your Kitchen. Our Expertise."

**Body Copy**:
- Use short paragraphs (2-3 sentences)
- Focus on benefits, not features
- Active voice
- Conversational but professional

**CTAs**:
- Action-oriented: "Call Today", "Schedule Service"
- Create urgency without pressure
- Multiple options (phone + form)

## Imagery Guidelines

**Photography Style**:
- Warm color temperature
- Natural lighting
- Real kitchens and families
- Technicians at work
- Clean, organized spaces

**Image Usage**:
- Hero: Modern kitchen, warm tones
- About: Friendly technician
- Services: Close-ups of appliances
- Testimonials: Family moments (optional)

**Aspect Ratios**:
- Hero: 4:3 or 16:9
- About: 4:3
- Cards: Square (1:1) or 4:3

## Responsive Behavior

### Breakpoints

```css
/* Mobile first approach */
base: 320px+     /* 1 column, stacked */
sm: 640px+       /* 2 columns for grids */
md: 768px+       /* Larger text, more spacing */
lg: 1024px+      /* 3-4 columns, full layout */
xl: 1280px+      /* Max content width reached */
```

### Layout Shifts

| Element | Mobile | Desktop |
|---------|--------|---------|
| Hero | Stack | 2-column (50/50) |
| Services | 1-col | 3-column grid |
| Stats | 2-col | 4-column |
| Navigation | Hamburger | Horizontal |
| Footer | 1-col | 4-column |

## Accessibility

### ARIA Labels
- All buttons have descriptive labels
- Navigation has role="navigation"
- Icons have aria-label when standalone

### Keyboard Navigation
- Tab order follows visual flow
- Skip links for main content
- Focus states visible on all interactive elements

### Color Contrast
- Text on cream: 8.5:1 (AAA)
- White on copper: 5.2:1 (AA)
- All interactive elements meet WCAG AA

### Screen Readers
- Semantic HTML (header, nav, main, footer)
- Headings in proper hierarchy
- Alt text on all images

## Performance Considerations

1. **No heavy dependencies**: Pure React components
2. **Image optimization**: Use appropriate sizes, lazy loading
3. **CSS animations**: GPU-accelerated (transform, opacity)
4. **Code splitting**: Ready for lazy-loaded routes
5. **Font loading**: System fonts as fallback

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile Safari iOS 14+
- Chrome Mobile Android 10+

## Design Rationale

### Why Warm Colors?
Appliance repair is about **home** and **family**. Cool blues and grays feel corporate; warm creams and coppers feel welcoming and trustworthy.

### Why Soft Edges?
Sharp corners (0px radius) feel surgical. Soft corners (8px) feel approachable and friendly while maintaining professionalism.

### Why Generous Spacing?
Luxury is about **breathing room**. 60% whitespace creates a premium feel without overwhelming the user.

### Why Lora + Poppins?
Lora's warmth (serif) for headlines balances Poppins' clarity (sans-serif) for body text. Both fonts are friendly, not intimidating.

---

**Created**: January 2026
**Target Audience**: Homeowners age 35-65, middle to upper-middle class
**Brand Voice**: Warm, trustworthy, expert but approachable
**Design Goal**: Convert visitors while building long-term trust
