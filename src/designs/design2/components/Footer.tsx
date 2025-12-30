import React from 'react';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS } from '../utils/constants';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* Emergency CTA Section */}
      <div className="bg-gradient-to-r from-[#3B82F6] to-[#2563EB] py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Need Emergency Appliance Repair?</h3>
              <p className="text-white/90">Our technicians are available 24/7 for urgent repairs. Call now!</p>
            </div>
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center space-x-3 bg-white text-[#0A1628] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200 shadow-lg">
              <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-[#3B82F6] rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-xl">Advanced</span>
                <span className="block text-xs text-[#3B82F6] uppercase tracking-widest">Appliance Repair</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {BUSINESS_INFO.tagline} With over 30 years of experience, we provide factory-authorized repairs for all major appliance brands.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#3B82F6]" />
            </h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href={`/services/${service.id}`} className="text-gray-400 hover:text-[#3B82F6] transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Service Areas
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#3B82F6]" />
            </h4>
            <ul className="space-y-3">
              {SERVICE_AREAS.slice(0, 6).map((area) => (
                <li key={area}>
                  <a href={`/areas/${area.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-[#3B82F6] transition-colors flex items-center group">
                    <span className="w-1.5 h-1.5 bg-[#3B82F6] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {area}, NJ
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#3B82F6]" />
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-gray-400">{BUSINESS_INFO.address}</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-white font-bold hover:text-[#3B82F6] transition-colors">{BUSINESS_INFO.phone}</a>
                  <p className="text-gray-400 text-sm">24/7 Emergency Service</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-[#3B82F6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400">Mon-Fri: {BUSINESS_INFO.hours.weekday}</p>
                  <p className="text-gray-400">Sat-Sun: {BUSINESS_INFO.hours.weekend}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-[#3B82F6] transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-[#3B82F6] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
