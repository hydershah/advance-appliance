'use client';

import React, { useState } from 'react';
import { BUSINESS_INFO } from '../utils/constants';
import { Button } from './Button';

export interface HeaderProps {
  currentPage?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/', id: 'home' },
    { label: 'Services', href: '/services', id: 'services' },
    { label: 'About', href: '/about', id: 'about' },
    { label: 'Contact', href: '/contact', id: 'contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5]">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Clean minimal text */}
          <a href="/" className="flex items-center">
            <div className="font-inter text-xl font-semibold text-[#272727] tracking-tight">
              {BUSINESS_INFO.name}
            </div>
          </a>

          {/* Desktop Navigation - Simple horizontal */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`font-inter text-sm font-normal transition-colors ${
                  currentPage === item.id
                    ? 'text-[#2FC4A7]'
                    : 'text-[#272727] hover:text-[#2FC4A7]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA - Pill button */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              size="sm"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
            >
              {BUSINESS_INFO.phone}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#272727]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-[#E5E5E5]">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`font-inter text-base font-normal py-2 ${
                    currentPage === item.id
                      ? 'text-[#2FC4A7]'
                      : 'text-[#272727]'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <Button
                  variant="primary"
                  size="md"
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="w-full"
                >
                  {BUSINESS_INFO.phone}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
