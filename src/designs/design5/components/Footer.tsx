'use client';

import React from 'react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../utils/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E5E5E5]">
      <div className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* About */}
          <div>
            <div className="font-inter text-lg font-semibold text-[#272727] mb-6 tracking-tight">
              {BUSINESS_INFO.name}
            </div>
            <p className="text-[#272727] font-inter text-sm font-normal mb-4 leading-relaxed opacity-70">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs text-[#272727] font-inter font-normal opacity-50">
              Serving New Jersey families since 1992.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-inter text-sm font-semibold text-[#272727] mb-6 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#272727] hover:text-[#2FC4A7] font-inter text-sm font-normal transition-colors opacity-70 hover:opacity-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-inter text-sm font-semibold text-[#272727] mb-6 uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="text-[#272727] hover:text-[#2FC4A7] font-inter text-sm font-normal transition-colors opacity-70 hover:opacity-100 block"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="text-[#272727] hover:text-[#2FC4A7] font-inter text-sm font-normal transition-colors opacity-70 hover:opacity-100 block break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li>
                <div className="text-[#272727] font-inter text-sm font-normal opacity-70 leading-relaxed">
                  {BUSINESS_INFO.address}
                </div>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-inter text-sm font-semibold text-[#272727] mb-6 uppercase tracking-wider">Service Areas</h3>
            <div className="text-[#272727] font-inter text-sm font-normal leading-relaxed opacity-70">
              {SERVICE_AREAS.slice(0, 6).join(', ')}, and more across Central New Jersey.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#E5E5E5]">
        <div className="container mx-auto px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-xs text-[#272727] font-inter font-normal opacity-50">
              &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-8">
              <a href="/privacy" className="text-xs text-[#272727] hover:text-[#2FC4A7] font-inter font-normal transition-colors opacity-50 hover:opacity-100">
                Privacy Policy
              </a>
              <a href="/terms" className="text-xs text-[#272727] hover:text-[#2FC4A7] font-inter font-normal transition-colors opacity-50 hover:opacity-100">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
