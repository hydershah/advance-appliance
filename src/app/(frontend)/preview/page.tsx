'use client';

import React from 'react';
import Link from 'next/link';

// Design 1 - Elegant Minimalist
import { Home as Design1Home } from '@/designs/design1/pages';

export default function DesignPreviewPage() {
  return (
    <div className="min-h-screen">
      {/* Design Switcher Bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md text-white py-4 px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-bold text-lg">Design Preview</span>
            <span className="text-gray-400">|</span>
            <span className="text-sm text-gray-300">Elegant Minimalist Design</span>
          </div>

          <Link
            href="/admin"
            className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all"
          >
            Go to CMS Admin
          </Link>
        </div>
      </div>

      {/* Design Content */}
      <div className="pt-16 [&_header]:!top-16 [&_nav]:!top-16">
        <Design1Home />
      </div>

      {/* Design Info Footer */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-black/95 backdrop-blur-md text-white py-3 px-6 shadow-2xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-sm">
          <div>
            <span className="font-medium">Currently viewing: </span>
            <span className="text-amber-400">Design 1 - Elegant Minimalist (Gold + Black + White)</span>
          </div>
          <div className="text-gray-400">
            Fully responsive and CMS-integrated
          </div>
        </div>
      </div>
    </div>
  );
}
