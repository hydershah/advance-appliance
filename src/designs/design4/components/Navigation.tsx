import React, { useState } from 'react';
import { Button } from './Button';
import { BUSINESS_INFO } from '../utils/constants';

interface NavigationProps {
  currentPath?: string;
}

/**
 * Bamo-style navigation
 * - Height: 80px
 * - Background: #fffaf2 (warm off-white)
 * - Border: 1px solid #E5E5E5 (hairline only)
 * - NO shadows
 */
export const Navigation: React.FC<NavigationProps> = ({ currentPath = '/' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bamo-bg border-b border-bamo-border h-20">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo - Lora serif */}
        <a href="/" className="flex items-center">
          <span className="font-lora font-semibold text-2xl text-bamo-text">
            {BUSINESS_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-inter text-bamo-sm transition-colors duration-300 ${
                currentPath === link.href
                  ? 'text-bamo-accent'
                  : 'text-bamo-text hover:text-bamo-accent'
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="sm" href={`tel:${BUSINESS_INFO.phoneClean}`}>
            {BUSINESS_INFO.phone}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-bamo-text"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bamo-bg border-b border-bamo-border">
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-inter text-bamo-sm transition-colors duration-300 ${
                  currentPath === link.href
                    ? 'text-bamo-accent'
                    : 'text-bamo-text hover:text-bamo-accent'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="sm" href={`tel:${BUSINESS_INFO.phoneClean}`}>
              {BUSINESS_INFO.phone}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
