'use client';

import React, { useState, useEffect } from 'react';
import { businessInfo } from '../data/content';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

// Navigation matching live site (appliancenj.com)
const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Cooktop Repair', href: '/services/cooktop-repair' },
      { label: 'Dryer Repair', href: '/services/dryer-repair' },
      { label: 'Dishwasher Repair', href: '/services/dishwasher-repair' },
      { label: 'Freezer Repair', href: '/services/freezer-repair' },
      { label: 'Oven Repair', href: '/services/oven-repair' },
      { label: 'Range Repair', href: '/services/range-repair' },
      { label: 'Refrigerator Repair', href: '/services/refrigerator-repair' },
      { label: 'Stove Repair', href: '/services/stove-repair' },
      { label: 'Washer Repair', href: '/services/washer-repair' },
    ],
  },
  { label: 'Our Brands', href: '/our-brands' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
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
          <a href="/" className="flex items-center flex-shrink-0">
            <img
              src="https://appliancenj.com/wp-content/uploads/2016/05/logo.png"
              alt="Advanced Appliance Repair"
              className={`h-10 md:h-12 w-auto max-w-[180px] md:max-w-[220px] object-contain transition-all duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </a>

          <div className="hidden xl:flex items-center space-x-6">
            {navigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`font-medium text-xs uppercase tracking-wider transition-colors duration-300 hover:text-[#D4AF37] whitespace-nowrap ${
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
                  <div className="absolute top-full left-0 pt-4 w-56">
                    <div className="bg-white shadow-xl border border-gray-100 py-2">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-5 py-2.5 text-sm text-gray-700 hover:text-[#D4AF37] hover:bg-gray-50 transition-colors"
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

          <div className="hidden xl:block">
            <a
              href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center px-5 py-2.5 border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-wider hover:bg-[#D4AF37] hover:text-white transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
          </div>

          <button
            className={`xl:hidden p-2 transition-colors ${isScrolled ? 'text-black' : 'text-white'}`}
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
      <div className={`xl:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
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
