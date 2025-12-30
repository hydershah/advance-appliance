'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Design 1 - Elegant Minimalist
import { Home as Design1Home } from '@/designs/design1/pages';

// Design 2 - Bold Modern
import { Home as Design2Home } from '@/designs/design2/pages';

// Design 3 - Classic Premium
import { Home as Design3Home } from '@/designs/design3/pages';

export default function DesignPreviewPage() {
  const [selectedDesign, setSelectedDesign] = useState<1 | 2 | 3>(1);

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

          <div className="flex items-center gap-3">
            <button
              onClick={() => setSelectedDesign(1)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDesign === 1
                  ? 'bg-amber-500 text-black'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Design 1: Elegant
            </button>
            <button
              onClick={() => setSelectedDesign(2)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDesign === 2
                  ? 'bg-blue-500 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Design 2: Bold
            </button>
            <button
              onClick={() => setSelectedDesign(3)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedDesign === 3
                  ? 'bg-green-800 text-white'
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}
            >
              Design 3: Classic
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

      {/* Design Content - with padding for fixed header */}
      <div className="pt-16">
        {selectedDesign === 1 && <Design1Home />}
        {selectedDesign === 2 && <Design2Home />}
        {selectedDesign === 3 && <Design3Home />}
      </div>

      {/* Design Info Footer - z-[9999] to stay above all design footers */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md text-white py-3 px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div>
            <span className="font-medium">Currently viewing: </span>
            {selectedDesign === 1 && <span className="text-amber-400">Design 1 - Elegant Minimalist (Gold, White, Serif fonts)</span>}
            {selectedDesign === 2 && <span className="text-blue-400">Design 2 - Bold Modern (Navy, Blue, Sans-serif)</span>}
            {selectedDesign === 3 && <span className="text-green-400">Design 3 - Classic Premium (Green, Burgundy, Traditional)</span>}
          </div>
          <div className="text-gray-400">
            All designs are fully responsive and CMS-integrated
          </div>
        </div>
      </div>
    </div>
  );
}
