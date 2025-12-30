'use client';

import React, { useState, useEffect } from 'react';
import { businessInfo } from '../data/content';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
      { label: 'Washer Repair', href: '/services/washer-repair' },
      { label: 'Dryer Repair', href: '/services/dryer-repair' },
      { label: 'Dishwasher Repair', href: '/services/dishwasher-repair' },
      { label: 'Oven & Range Repair', href: '/services/oven-range-repair' },
      { label: 'Cooktop Repair', href: '/services/cooktop-repair' },
      { label: 'Freezer Repair', href: '/services/freezer-repair' },
      { label: 'Ice Maker Repair', href: '/services/ice-maker-repair' },
      { label: 'Stove Repair', href: '/services/stove-repair' },
    ],
  },
  {
    label: 'Service Areas',
    href: '/areas',
    children: [
      { label: 'Short Hills', href: '/areas/short-hills' },
      { label: 'Summit', href: '/areas/summit' },
      { label: 'Chatham', href: '/areas/chatham' },
      { label: 'Millburn', href: '/areas/millburn' },
      { label: 'Morganville', href: '/areas/morganville' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex justify-between items-center">
          <a href="/" className="flex items-center space-x-3">
            <div className={`font-serif transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}>
              <span className="text-2xl md:text-3xl font-light tracking-wide">Advanced</span>
              <span className="block text-xs md:text-sm tracking-[0.3em] uppercase text-[#D4AF37]">Appliance Repair</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`font-light tracking-wide text-sm uppercase transition-colors duration-300 hover:text-[#D4AF37] ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 ml-1 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-4 w-64">
                    <div className="bg-white shadow-xl border border-gray-100 py-4">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-6 py-3 text-sm text-gray-700 hover:text-[#D4AF37] hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center px-6 py-3 border border-[#D4AF37] text-[#D4AF37] text-sm uppercase tracking-wider hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <span className="font-serif text-xl">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-6 overflow-y-auto h-full pb-32">
          {navigation.map((item) => (
            <div key={item.label} className="mb-4">
              <a href={item.href} className="block py-3 text-lg font-light border-b border-gray-100 hover:text-[#D4AF37]">{item.label}</a>
              {item.children && (
                <div className="pl-4 mt-2">
                  {item.children.map((child) => (
                    <a key={child.label} href={child.href} className="block py-2 text-sm text-gray-600 hover:text-[#D4AF37]">{child.label}</a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="block w-full mt-8 px-6 py-4 bg-[#D4AF37] text-white text-center uppercase tracking-wider">
            Call {businessInfo.phone}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
