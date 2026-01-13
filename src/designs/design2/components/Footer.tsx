import React from 'react';
import { businessInfo, services, serviceAreas, brands } from '../data/content';
import CTAButton from './CTAButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-modern-navy-900 text-modern-cream-50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12">
          <div>
            <span className="font-[var(--font-bebas)] text-3xl tracking-[0.2em]">ADVANCED</span>
            <p className="mt-2 text-xs uppercase tracking-[0.4em] text-modern-gold-200 font-[var(--font-poppins)]">Appliance Repair</p>
            <p className="mt-6 text-sm text-modern-cream-100/70 font-[var(--font-poppins)]">
              Premium appliance repair services for discerning homeowners. Factory-certified technicians specializing in luxury brands since 1998.
            </p>
            <div className="mt-6 flex gap-3">
              <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="md" icon="phone">
                Call Now
              </CTAButton>
            </div>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] mb-4">Services</h4>
            <ul className="space-y-3 text-sm font-[var(--font-poppins)] text-modern-cream-100/70">
              {services.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href={`/services/${service.slug}`} className="hover:text-modern-gold-200 transition-colors">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] mb-4">Service Areas</h4>
            <ul className="space-y-3 text-sm font-[var(--font-poppins)] text-modern-cream-100/70">
              {serviceAreas.slice(0, 6).map((area) => (
                <li key={area.id}>
                  <a href={`/areas/${area.slug}`} className="hover:text-modern-gold-200 transition-colors">
                    {area.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] mb-4">Contact</h4>
            <div className="space-y-4 text-sm font-[var(--font-poppins)] text-modern-cream-100/70">
              <p>{businessInfo.address}</p>
              <p>
                <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="hover:text-modern-gold-200 transition-colors">
                  {businessInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${businessInfo.email}`} className="hover:text-modern-gold-200 transition-colors">
                  {businessInfo.email}
                </a>
              </p>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-modern-cream-100/50">Hours</p>
                <p>Mon - Fri: {businessInfo.hours.weekdays}</p>
                <p>Saturday: {businessInfo.hours.saturday}</p>
                <p>Sunday: {businessInfo.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="text-xs uppercase tracking-[0.3em] text-modern-cream-100/60 font-[var(--font-poppins)]">
            Authorized service for premium brands including {brands.slice(0, 5).map((brand) => brand.name).join(', ')}.
          </div>
          <div className="text-xs text-modern-cream-100/50 font-[var(--font-poppins)]">
            {new Date().getFullYear()} Advanced Appliance Repair Service. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
