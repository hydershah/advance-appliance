'use client';

import React, { useState } from 'react';
import { BRANDS } from '../utils/constants';

interface BrandCarouselProps {
  brands?: readonly string[];
  speed?: number;
}

export const BrandCarousel: React.FC<BrandCarouselProps> = ({ brands = BRANDS, speed = 30 }) => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 bg-white overflow-hidden border-t border-gray-200">
      <div className="container mx-auto px-6 mb-10">
        <div className="text-center">
          <span className="text-modern-navy-700 font-openSans font-bold text-sm uppercase tracking-widest mb-2 block">Trusted Brands</span>
          <h2 className="text-3xl md:text-4xl font-lora font-bold text-modern-navy-900 mb-4">Factory Authorized Service</h2>
          <p className="text-modern-charcoal/70 max-w-2xl mx-auto font-openSans">Certified to repair premium appliance brands with genuine parts and careful, warranty-safe workmanship.</p>
        </div>
      </div>
      <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className={`flex ${isPaused ? '' : 'animate-scroll'}`} style={{ animation: isPaused ? 'none' : `scroll ${speed}s linear infinite` }}>
          {[...brands, ...brands].map((brand, index) => (
            <div key={`${brand}-${index}`} className="flex-shrink-0 px-8 md:px-12">
              <div className="w-40 h-20 flex items-center justify-center bg-modern-cream-300/30 border border-gray-200 rounded-xl hover:bg-modern-gold-500/10 hover:border-modern-gold-500 group transition-all duration-300 hover:shadow-lg cursor-pointer">
                <span className="text-xl font-lora font-bold text-modern-charcoal/70 group-hover:text-modern-navy-900 transition-colors tracking-wide">{brand}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`@keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } } .animate-scroll { animation: scroll 30s linear infinite; } .animate-scroll:hover { animation-play-state: paused; }`}</style>
    </section>
  );
};

interface BrandGridProps {
  brands?: readonly string[];
}

export const BrandGrid: React.FC<BrandGridProps> = ({ brands = BRANDS }) => {
  return (
    <section className="py-16 bg-modern-cream-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-modern-navy-700 font-openSans font-bold text-sm uppercase tracking-widest mb-2 block">Trusted Brands</span>
          <h2 className="text-3xl md:text-4xl font-lora font-bold text-modern-navy-900 mb-4">We Service All Major Brands</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div key={brand} className="bg-white rounded-xl p-6 flex items-center justify-center shadow-sm hover:shadow-lg hover:border-modern-gold-500 border-2 border-transparent transition-all duration-300 group cursor-pointer">
              <span className="text-lg font-lora font-bold text-modern-charcoal/70 group-hover:text-modern-navy-900 transition-colors">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
