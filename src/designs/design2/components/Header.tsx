'use client';

import React, { useState, useEffect } from 'react';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { MegaMenu } from './MegaMenu';
import { BUSINESS_INFO, SERVICES } from '../utils/constants';

interface HeaderProps {
  currentPage?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const { isScrolled, scrollDirection } = useScrollEffect(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'services', label: 'Services', href: '/services', hasDropdown: true },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'areas', label: 'Service Areas', href: '/areas' },
    { id: 'blog', label: 'Blog', href: '/blog' },
    { id: 'contact', label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0A1628] text-white py-2 text-sm hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Mon-Fri: 8AM-8PM | Sat-Sun: 9AM-5PM
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-2 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Serving Central New Jersey
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[#3B82F6] transition-colors">
              {BUSINESS_INFO.email}
            </a>
            <div className="flex items-center space-x-3">
              <a href="#" className="hover:text-[#3B82F6] transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#3B82F6] transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`
          sticky top-0 z-50 transition-all duration-300
          ${isScrolled ? 'bg-[#0A1628]/95 backdrop-blur-lg shadow-xl shadow-[#3B82F6]/10' : 'bg-white'}
          ${scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0'}
        `}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-3 group">
              <div className={`
                w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300
                ${isScrolled ? 'bg-[#3B82F6]' : 'bg-[#0A1628]'}
                group-hover:scale-110
              `}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="hidden sm:block">
                <span className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-white' : 'text-[#0A1628]'}`}>
                  Advanced
                </span>
                <span className="block text-xs text-[#3B82F6] uppercase tracking-widest">
                  Appliance Repair
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={item.href}
                    className={`
                      relative px-4 py-2 font-medium text-sm uppercase tracking-wider transition-colors duration-200 group
                      ${currentPage === item.id
                        ? 'text-[#3B82F6]'
                        : isScrolled ? 'text-white hover:text-[#3B82F6]' : 'text-[#0A1628] hover:text-[#3B82F6]'
                      }
                    `}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-[#3B82F6] transform origin-left transition-transform duration-300 ${currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
                  </a>
                  {item.hasDropdown && activeDropdown === item.id && (
                    <MegaMenu services={SERVICES} isScrolled={isScrolled} />
                  )}
                </div>
              ))}
            </nav>

            {/* Phone CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-bold text-sm transition-all duration-300 transform hover:scale-105 ${isScrolled ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB] shadow-lg shadow-[#3B82F6]/30' : 'bg-[#0A1628] text-white hover:bg-[#0A1628]/90'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 transition-all duration-300 transform origin-center ${isScrolled ? 'bg-white' : 'bg-[#0A1628]'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-[#0A1628]'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 transition-all duration-300 transform origin-center ${isScrolled ? 'bg-white' : 'bg-[#0A1628]'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#0A1628] transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="container mx-auto px-6 py-8">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`block py-3 text-lg font-medium uppercase tracking-wider border-b border-white/10 transition-colors ${currentPage === item.id ? 'text-[#3B82F6]' : 'text-white hover:text-[#3B82F6]'}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="flex items-center justify-center space-x-3 w-full py-4 bg-[#3B82F6] text-white rounded-lg font-bold text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
