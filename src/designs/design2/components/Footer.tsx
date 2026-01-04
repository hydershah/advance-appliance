import React from 'react';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '../utils/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-modern-navy-900 text-modern-cream-300 border-t border-white/10">
      <div className="container mx-auto px-6 py-12 space-y-12">
        <div className="bg-modern-blue-500 text-white rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-modern-lg">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] mb-2 font-openSans font-semibold">Here to help</p>
            <h3 className="text-2xl md:text-3xl font-lora font-bold">Need service or have a question?</h3>
            <p className="text-white/90 mt-2 font-openSans">Concierge scheduling, respectful technicians, and clear communication every step of the way.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-modern-blue-500 font-montserrat font-semibold hover:bg-modern-cream-300 transition-colors shadow-md">
              Call {BUSINESS_INFO.phone}
            </a>
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white text-white font-montserrat font-semibold hover:bg-white hover:text-modern-blue-500 transition-colors">
              Schedule a visit
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-modern-cream-300/10 rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-modern-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="font-lora font-bold text-lg text-white">Advanced Appliance</span>
                <span className="block text-xs text-modern-gold-500 uppercase tracking-widest font-openSans">Repair Service</span>
              </div>
            </div>
            <p className="text-modern-cream-300/80 leading-relaxed font-openSans">
              {BUSINESS_INFO.tagline} Factory-certified technicians trusted by New Jersey&apos;s finest homes.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-lora font-semibold text-white mb-4 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-modern-gold-500" />
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href={`/services/${service.id}`} className="text-modern-cream-300/80 hover:text-white transition-colors flex items-center space-x-2 font-openSans">
                    <span className="w-1.5 h-1.5 rounded-full bg-modern-gold-500" />
                    <span>{service.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-lora font-semibold text-white mb-4 relative inline-block">
              Service Areas
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-modern-gold-500" />
            </h4>
            <ul className="space-y-3">
              {SERVICE_AREAS.slice(0, 6).map((area) => (
                <li key={area}>
                  <a href={`/areas/${area.toLowerCase().replace(' ', '-')}`} className="text-modern-cream-300/80 hover:text-white transition-colors flex items-center space-x-2 font-openSans">
                    <span className="w-1.5 h-1.5 rounded-full bg-modern-gold-500" />
                    <span>{area}, NJ</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-lora font-semibold text-white mb-4 relative inline-block">
              Contact
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-modern-gold-500" />
            </h4>
            <ul className="space-y-4 text-modern-cream-300/80 font-openSans">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-modern-cream-300/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-modern-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p>{BUSINESS_INFO.address}</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-modern-cream-300/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-modern-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white font-semibold hover:text-modern-gold-500 transition-colors">
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-sm text-modern-cream-300/70">Concierge line</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-lg bg-modern-cream-300/5 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-modern-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p>Mon-Fri: {BUSINESS_INFO.hours.weekday}</p>
                  <p>Sat-Sun: {BUSINESS_INFO.hours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
          <p className="text-sm text-modern-cream-300/70 text-center md:text-left font-openSans">
            {currentYear} {BUSINESS_INFO.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-openSans">
            <a href="/privacy" className="text-modern-cream-300/70 hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-modern-cream-300/70 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
