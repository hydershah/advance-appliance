'use client';

import React from 'react';
import { BUSINESS_INFO } from '../utils';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fcfbf8] border-t border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif font-normal text-[20px] text-[#722f10] mb-6">
              {BUSINESS_INFO.name}
            </h3>
            <p className="font-sans text-[13px] text-[#332C27] leading-relaxed">
              {BUSINESS_INFO.tagline}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#722f10] mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {['Refrigeration', 'Laundry Care', 'Drying Systems', 'Cooking Suites'].map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="font-sans text-[13px] text-[#332C27] hover:text-[#722f10] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#722f10] mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Service Areas', href: '/areas' },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-sans text-[13px] text-[#332C27] hover:text-[#722f10] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-[13px] uppercase tracking-wider text-[#722f10] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="font-sans text-[13px] text-[#332C27] hover:text-[#722f10] transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="font-sans text-[13px] text-[#332C27] hover:text-[#722f10] transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="font-sans text-[13px] text-[#332C27] leading-relaxed">
                {BUSINESS_INFO.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-[#E5E5E5]">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-sans text-[13px] text-[#332C27]">
              &copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="/privacy" className="font-sans text-[13px] text-[#332C27] hover:text-[#722f10] transition-colors">
                Privacy
              </a>
              <a href="/terms" className="font-sans text-[13px] text-[#332C27] hover:text-[#722f10] transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
