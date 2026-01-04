import React from 'react';
import { BUSINESS_INFO } from '../utils/constants';

/**
 * Bamo-style footer
 * - Minimal design
 * - Hairline border only
 * - Generous spacing
 */
export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bamo-bg border-t border-bamo-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="font-lora font-semibold text-bamo-md text-bamo-text mb-4">
              {BUSINESS_INFO.name}
            </h3>
            <p className="font-inter text-bamo-text/60 text-bamo-sm leading-relaxed mb-4">
              {BUSINESS_INFO.tagline}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="font-inter text-bamo-sm text-bamo-text hover:text-bamo-accent transition-colors block"
              >
                {BUSINESS_INFO.phone}
              </a>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="font-inter text-bamo-sm text-bamo-text hover:text-bamo-accent transition-colors block"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>

          {/* Service Hours */}
          <div>
            <h4 className="font-inter font-semibold text-bamo-text text-bamo-sm mb-4">
              Hours
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-inter text-bamo-sm text-bamo-text/60">Monday - Friday</p>
                <p className="font-inter text-bamo-sm text-bamo-text">{BUSINESS_INFO.hours.weekday}</p>
              </div>
              <div>
                <p className="font-inter text-bamo-sm text-bamo-text/60">Saturday - Sunday</p>
                <p className="font-inter text-bamo-sm text-bamo-text">{BUSINESS_INFO.hours.weekend}</p>
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-inter font-semibold text-bamo-text text-bamo-sm mb-4">
              Location
            </h4>
            <p className="font-inter text-bamo-sm text-bamo-text/60 leading-relaxed">
              Serving Central New Jersey including Edison, Woodbridge, Metuchen, and surrounding areas.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-bamo-border py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-xs text-bamo-text/40">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                href="/privacy"
                className="font-inter text-xs text-bamo-text/40 hover:text-bamo-accent transition-colors"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="font-inter text-xs text-bamo-text/40 hover:text-bamo-accent transition-colors"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
