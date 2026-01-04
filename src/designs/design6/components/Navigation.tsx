'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO } from '../utils';
import { Button } from './Button';

interface NavigationProps {
  currentPage?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fcfbf8] border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Villa Vista EXACT: 20px Medium serif */}
          <a href="/" className="font-serif font-normal text-[20px] text-[#722f10] tracking-tight">
            {BUSINESS_INFO.name}
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-sans text-[13px] ${
                  currentPage === item.label.toLowerCase()
                    ? 'text-[#722f10] font-semibold'
                    : 'text-[#332C27] hover:text-[#722f10]'
                } transition-colors`}
              >
                {item.label}
              </a>
            ))}
            <a href={`tel:${BUSINESS_INFO.phoneClean}`}>
              <Button variant="primary" size="sm">
                Book Service
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#722f10]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-[#E5E5E5]">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`block py-3 font-sans text-[13px] ${
                  currentPage === item.label.toLowerCase()
                    ? 'text-[#722f10] font-semibold'
                    : 'text-[#332C27]'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <Button variant="primary" size="md" fullWidth href={`tel:${BUSINESS_INFO.phoneClean}`}>
                Book Service
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
