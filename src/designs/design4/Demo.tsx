import React from 'react';
import { Home } from './pages/Home';

/**
 * Design 4: Bamo Luxury Minimal Demo
 *
 * Inspired by Bamo.com's luxury minimal aesthetic:
 * - Warm off-white background (#fffaf2)
 * - Deep charcoal text (#2d2926)
 * - Burnt orange accent (#e74c39)
 * - PILL-shaped buttons (rounded-full)
 * - NO borders on cards
 * - NO shadows (flat design)
 * - Massive whitespace (py-40 = 160px)
 * - Only 2 fonts: Lora (serif) + Inter (sans-serif)
 *
 * Usage:
 * ```tsx
 * import { Demo } from '@/designs/design4/Demo';
 *
 * function App() {
 *   return <Demo />;
 * }
 * ```
 */
export const Demo: React.FC = () => {
  return <Home />;
};

export default Demo;
