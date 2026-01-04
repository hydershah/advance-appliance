'use client';

import React, { useState, useCallback } from 'react';
import { NavItem } from '../types';
import { useClickOutside, useLockBodyScroll } from '../hooks/useScrollAnimation';

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Refrigerator Repair', href: '/services/refrigerator' },
      { label: 'Washer & Dryer', href: '/services/washer-dryer' },
      { label: 'Dishwasher Repair', href: '/services/dishwasher' },
      { label: 'Oven & Range', href: '/services/oven-range' },
      { label: 'Wine Cooler', href: '/services/wine-cooler' },
      { label: 'Ice Maker', href: '/services/ice-maker' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Areas Served', href: '/areas' },
  { label: 'Contact', href: '/contact' },
];

interface DropdownProps {
  items: NavItem[];
  isOpen: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ items, isOpen }) => {
  return (
    <div
      className={`absolute top-full left-0 mt-2 w-64 bg-contemporary-white border border-contemporary-platinum-400/30 shadow-xl rounded-lg overflow-hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
      }`}
    >
      <div className="py-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block px-6 py-3 text-contemporary-charcoal-900 hover:bg-contemporary-charcoal-900 hover:text-contemporary-white transition-colors duration-200 font-poppins"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useLockBodyScroll(mobileMenuOpen);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const mobileMenuRef = useClickOutside<HTMLDivElement>(closeMobileMenu);

  return (
    <header className="bg-contemporary-white/95 backdrop-blur border-b border-contemporary-platinum-400/20 sticky top-0 z-50 shadow-sm">
      {/* Top bar */}
      <div className="bg-contemporary-charcoal-900 text-contemporary-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-contemporary-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              (732) 416-7430
            </span>
            <span className="hidden sm:flex items-center">
              <svg className="w-4 h-4 mr-2 text-contemporary-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Mon-Sat: 8AM - 6PM
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-contemporary-gold-500 font-medium">30+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-contemporary-charcoal-900 rounded-full flex items-center justify-center border border-contemporary-gold-500/30 shadow-sm">
              <span className="text-contemporary-white font-playfair font-bold text-xl">AA</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-xl text-contemporary-charcoal-900 leading-tight">
                Advanced Appliance
              </h1>
              <p className="text-xs text-contemporary-slate-900 font-montserrat tracking-wider uppercase">
                Repair Service
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="font-poppins text-contemporary-charcoal-900 hover:text-contemporary-gold-500 transition-colors duration-200 flex items-center py-2"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {item.children && (
                  <Dropdown items={item.children} isOpen={activeDropdown === item.label} />
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="/contact"
            className="hidden md:inline-flex items-center px-6 py-3 bg-contemporary-charcoal-900 text-contemporary-white font-poppins rounded-lg border border-contemporary-charcoal-900 hover:bg-transparent hover:text-contemporary-charcoal-900 transition-all duration-300 shadow-sm"
          >
            Schedule Service
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-contemporary-charcoal-900 hover:text-contemporary-gold-500 transition-colors"
            aria-label="Open menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-contemporary-charcoal-900/60 z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          ref={mobileMenuRef}
          className={`absolute right-0 top-0 h-full w-80 bg-contemporary-white shadow-2xl transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="font-playfair font-bold text-xl text-contemporary-charcoal-900">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-contemporary-charcoal-900 hover:text-contemporary-gold-500 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="space-y-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  <a
                    href={item.href}
                    className="block py-3 font-poppins text-lg text-contemporary-charcoal-900 hover:text-contemporary-gold-500 border-b border-contemporary-platinum-400/30"
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child: { label: string; href: string }) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block py-2 text-contemporary-charcoal-900/70 hover:text-contemporary-gold-500 text-sm"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-8 pt-8 border-t border-contemporary-platinum-400/30">
              <a
                href="/contact"
                className="block w-full text-center px-6 py-4 bg-contemporary-charcoal-900 text-contemporary-white font-poppins rounded-lg hover:bg-contemporary-slate-900 transition-colors"
              >
                Schedule Service
              </a>
              <div className="mt-6 text-center">
                <a href="tel:7324167430" className="text-contemporary-charcoal-900 font-medium">
                  (732) 416-7430
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
