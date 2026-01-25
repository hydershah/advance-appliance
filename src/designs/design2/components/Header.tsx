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
  { label: 'About Us', href: '/about' },
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
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden lg:block bg-modern-navy-900 text-modern-cream-100">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between text-[11px] uppercase tracking-[0.3em] font-[var(--font-poppins)]">
          <span>Luxury Appliance Repair in New Jersey</span>
          <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-modern-gold-200 transition-colors">
            Call {businessInfo.phone}
          </a>
        </div>
      </div>

      <div className={`transition-all duration-500 ${isScrolled ? 'bg-modern-cream-100/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-5">
          <nav className="flex items-center justify-between">
            <a href="/" className="flex items-center flex-shrink-0">
              <img
                src="https://appliancenj.com/wp-content/uploads/2016/05/logo.png"
                alt="Advanced Appliance Repair"
                className={`h-10 md:h-12 w-auto max-w-[180px] md:max-w-[220px] object-contain transition-all duration-300 ${
                  isScrolled ? '' : 'brightness-0 invert'
                }`}
              />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className="text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] text-modern-navy-900 hover:text-modern-navy-600 transition-colors"
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
                      <div className="bg-white shadow-xl border border-modern-navy-900/10 py-4 rounded-2xl">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            className="block px-6 py-3 text-xs uppercase tracking-[0.25em] text-modern-navy-700 hover:text-modern-navy-900 hover:bg-modern-cream-50 transition-colors font-[var(--font-poppins)]"
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

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center px-5 py-3 rounded-full bg-modern-navy-900 text-modern-cream-50 text-[10px] uppercase tracking-[0.3em] font-[var(--font-poppins)] hover:bg-modern-navy-800 transition-colors"
              >
                Call Now
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-5 py-3 rounded-full border border-modern-navy-900 text-modern-navy-900 text-[10px] uppercase tracking-[0.3em] font-[var(--font-poppins)] hover:bg-modern-navy-900 hover:text-modern-cream-50 transition-colors"
              >
                Book Service
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-modern-navy-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-modern-navy-900 text-modern-cream-50 z-50 transition-transform duration-500 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="font-[var(--font-bebas)] text-2xl tracking-[0.2em]">Menu</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-6 overflow-y-auto h-full pb-32">
          {navigation.map((item) => (
            <div key={item.label} className="mb-4">
              <a
                href={item.href}
                className="block py-3 text-sm uppercase tracking-[0.3em] font-[var(--font-poppins)] border-b border-white/10"
              >
                {item.label}
              </a>
              {item.children && (
                <div className="pl-4 mt-2">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block py-2 text-xs uppercase tracking-[0.25em] text-modern-cream-100/70"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
            className="block w-full mt-8 px-6 py-4 rounded-full bg-modern-navy-900 text-white text-center uppercase tracking-[0.3em] text-xs font-[var(--font-poppins)]"
          >
            Call {businessInfo.phone}
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
