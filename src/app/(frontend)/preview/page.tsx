'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Design 1 - Elegant Minimalist
import { Home as Design1Home } from '@/designs/design1/pages';

// Design 2 - Modern Professional
import { Home as Design2Home } from '@/designs/design2/pages';

// Design 3 - Contemporary Elegance
import { Home as Design3Home } from '@/designs/design3/pages';

// Design 4 - Bamo Luxury Minimal
import { Home as Design4Home } from '@/designs/design4/pages';

// Design 5 - Rooof Clean Minimal
import { Home as Design5Home } from '@/designs/design5/pages';

// Design 6 - Villa Vista Mediterranean
import { Home as Design6Home } from '@/designs/design6/pages';

export default function DesignPreviewPage() {
  const [selectedDesign, setSelectedDesign] = useState<1 | 2 | 3 | 4 | 5 | 6>(4);

  return (
    <div className="min-h-screen">
      {/* Design Switcher Bar - z-[9999] to stay above all design headers */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md text-white py-4 px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg">Design Preview</span>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-300">Select a design to preview</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setSelectedDesign(1)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDesign === 1
                  ? 'bg-amber-500 text-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              D1: Elegant
            </button>
            <button
              onClick={() => setSelectedDesign(2)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDesign === 2
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              D2: Modern
            </button>
            <button
              onClick={() => setSelectedDesign(3)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDesign === 3
                  ? 'bg-green-600 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              D3: Contemporary
            </button>
            <button
              onClick={() => setSelectedDesign(4)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDesign === 4
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              D4: Bamo
            </button>
            <button
              onClick={() => setSelectedDesign(5)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDesign === 5
                  ? 'bg-teal-500 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              D5: Rooof
            </button>
            <button
              onClick={() => setSelectedDesign(6)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedDesign === 6
                  ? 'bg-red-700 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              D6: Villa Vista
            </button>
          </div>

          <Link
            href="/admin"
            className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all"
          >
            Go to CMS Admin
          </Link>
        </div>
      </div>

      {/* Design Content - with padding for fixed header and offset for design headers */}
      <div className="pt-16 [&_header]:!top-16 [&_nav]:!top-16">
        {selectedDesign === 1 && <Design1Home />}
        {selectedDesign === 2 && <Design2Home />}
        {selectedDesign === 3 && <Design3Home />}
        {selectedDesign === 4 && <Design4Home />}
        {selectedDesign === 5 && <Design5Home />}
        {selectedDesign === 6 && <Design6Home />}
      </div>

      {/* Design Info Footer - z-[9999] to stay above all design footers */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md text-white py-3 px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div>
            <span className="font-medium">Currently viewing: </span>
            {selectedDesign === 1 && <span className="text-amber-400">Design 1 - Elegant Minimalist (Gold + Black + White)</span>}
            {selectedDesign === 2 && <span className="text-blue-400">Design 2 - Modern Professional (Navy + Cream + Blue)</span>}
            {selectedDesign === 3 && <span className="text-green-400">Design 3 - Contemporary Elegance (Charcoal + Platinum + Gold)</span>}
            {selectedDesign === 4 && <span className="text-orange-400">Design 4 - Bamo Luxury Minimal (Warm Off-White + Burnt Orange)</span>}
            {selectedDesign === 5 && <span className="text-teal-400">Design 5 - Rooof Clean Minimal (Pure White + Teal)</span>}
            {selectedDesign === 6 && <span className="text-red-400">Design 6 - Villa Vista Mediterranean (Warm Cream + Terracotta)</span>}
          </div>
          <div className="text-gray-400">
            All designs are fully responsive and CMS-integrated
          </div>
        </div>
      </div>
    </div>
  );
}
