import React from 'react';
import { businessInfo, services, serviceAreas } from '../data/content';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <span className="font-serif text-2xl font-light tracking-wide">Advanced</span>
              <span className="block text-xs tracking-[0.3em] uppercase text-[#D4AF37]">Appliance Repair</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Premium appliance repair services for discerning homeowners. Factory-certified technicians specializing in luxury brands since 1998.
            </p>
            <div className="flex space-x-4">
              <a href={businessInfo.socialMedia.facebook} className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </a>
              <a href={businessInfo.socialMedia.instagram} className="w-10 h-10 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}><a href={`/services/${service.slug}`} className="text-gray-400 text-sm hover:text-white transition-colors">{service.name}</a></li>
              ))}
              <li><a href="/services" className="text-[#D4AF37] text-sm hover:text-white transition-colors">View All Services</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area.id}><a href={`/areas/${area.slug}`} className="text-gray-400 text-sm hover:text-white transition-colors">{area.name}, {area.state}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="flex items-start text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span className="text-sm">{businessInfo.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${businessInfo.email}`} className="flex items-start text-gray-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span className="text-sm">{businessInfo.email}</span>
                </a>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <div className="text-sm">
                  <p>Mon-Fri: {businessInfo.hours.weekdays}</p>
                  <p>Sat: {businessInfo.hours.saturday}</p>
                  <p>Sun: {businessInfo.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 mb-4">Authorized Service for Premium Brands</p>
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm">
            <span>Sub-Zero</span><span className="text-[#D4AF37]">|</span>
            <span>Viking</span><span className="text-[#D4AF37]">|</span>
            <span>Wolf</span><span className="text-[#D4AF37]">|</span>
            <span>Thermador</span><span className="text-[#D4AF37]">|</span>
            <span>Miele</span><span className="text-[#D4AF37]">|</span>
            <span>Bosch</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} {businessInfo.name}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="/sitemap" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
