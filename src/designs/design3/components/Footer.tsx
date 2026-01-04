import React from 'react';
import OrnamentDivider from './OrnamentDivider';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-contemporary-charcoal-900 text-contemporary-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-contemporary-white rounded-full flex items-center justify-center border border-contemporary-gold-500/30 shadow-sm">
                <span className="text-contemporary-charcoal-900 font-playfair font-bold text-xl">AA</span>
              </div>
              <div>
                <h3 className="font-playfair font-bold text-xl text-contemporary-white leading-tight">
                  Advanced Appliance
                </h3>
                <p className="text-xs text-contemporary-gold-500 tracking-wider uppercase">
                  Repair Service
                </p>
              </div>
            </div>
            <p className="text-contemporary-platinum-400 font-poppins leading-relaxed mb-6">
              Courteous, professional, fast, and reliable appliance repair services since 1992.
              Trusted by thousands of homeowners for over 30 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-contemporary-platinum-400/50 flex items-center justify-center hover:bg-contemporary-gold-500 hover:border-contemporary-gold-500 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-contemporary-platinum-400/50 flex items-center justify-center hover:bg-contemporary-gold-500 hover:border-contemporary-gold-500 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-contemporary-platinum-400/50 flex items-center justify-center hover:bg-contemporary-gold-500 hover:border-contemporary-gold-500 transition-colors"
                aria-label="Yelp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 011.596-.206 9.194 9.194 0 012.364 3.252 1.073 1.073 0 01-.694 1.459z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-xl text-contemporary-gold-500 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Services', 'Service Areas', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                    className="font-poppins text-contemporary-platinum-400 hover:text-contemporary-gold-500 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-200 overflow-hidden">
                      <svg className="w-4 h-4 text-contemporary-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-playfair font-bold text-xl text-contemporary-gold-500 mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                'Refrigerator Repair',
                'Washer & Dryer',
                'Dishwasher Repair',
                'Oven & Range',
                'Wine Cooler',
                'Ice Maker',
              ].map((service) => (
                <li key={service}>
                  <a
                    href={`/services/${service.toLowerCase().replace(/\s+&?\s*/g, '-')}`}
                    className="font-poppins text-contemporary-platinum-400 hover:text-contemporary-gold-500 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 transition-all duration-200 overflow-hidden">
                      <svg className="w-4 h-4 text-contemporary-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-xl text-contemporary-gold-500 mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-contemporary-gold-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-poppins text-contemporary-platinum-400">Phone</p>
                  <a href="tel:7324167430" className="font-medium hover:text-contemporary-gold-500 transition-colors">
                    (732) 416-7430
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-contemporary-gold-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-poppins text-contemporary-platinum-400">Email</p>
                  <a href="mailto:info@advancedappliance.com" className="font-medium hover:text-contemporary-gold-500 transition-colors">
                    info@advancedappliance.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-contemporary-gold-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-poppins text-contemporary-platinum-400">Hours</p>
                  <p className="font-medium">Mon - Sat: 8AM - 6PM</p>
                  <p className="font-medium">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Credentials */}
            <div className="mt-8 pt-6 border-t border-contemporary-white/10">
              <div className="flex flex-wrap gap-3">
                {['Licensed', 'Bonded', 'Insured'].map((badge) => (
                  <span
                    key={badge}
                    className="px-3 py-1 text-xs font-poppins bg-contemporary-gold-500/20 text-contemporary-gold-500 rounded-full border border-contemporary-gold-500/40"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <OrnamentDivider variant="simple" color="contemporary-gold-500" className="opacity-30" />

      {/* Bottom Bar */}
      <div className="bg-contemporary-slate-900 py-6 border-t border-contemporary-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-contemporary-platinum-400 text-sm font-poppins">
              {currentYear} Advanced Appliance Repair Service. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-contemporary-platinum-400 hover:text-contemporary-gold-500 text-sm font-poppins transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-contemporary-platinum-400 hover:text-contemporary-gold-500 text-sm font-poppins transition-colors">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-contemporary-platinum-400 hover:text-contemporary-gold-500 text-sm font-poppins transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
