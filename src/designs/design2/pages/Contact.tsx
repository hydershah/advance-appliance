'use client';

import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MultiStepForm } from '../components/MultiStepForm';
import { BUSINESS_INFO, SERVICE_AREAS, IMAGES } from '../utils/constants';

export const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-openSans">
      <Header currentPage="contact" />

      <section className="relative overflow-hidden bg-modern-navy-900">
        <div className="absolute inset-0">
          <img src={IMAGES.kitchen} alt="Modern kitchen" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-modern-navy-900 via-modern-navy-900/95 to-modern-navy-900/80" />
        </div>
        <div className="relative container mx-auto px-6 py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-modern-cream-300/10 border border-modern-gold-500/30 text-modern-gold-500 font-openSans font-semibold uppercase tracking-[0.3em] mb-4 text-sm">Contact</span>
            <h1 className="text-4xl md:text-5xl font-lora font-bold text-white mb-4">Let us take care of your appliances</h1>
            <p className="text-lg text-modern-cream-300/90 max-w-2xl">Tell us what you are experiencing. Our concierge team will schedule a certified technician, provide arrival windows, and respect your home with white-glove service.</p>
          </div>
        </div>
      </section>

      <section className="py-12 -mt-10 relative z-10">
        <div className="container mx-auto px-6 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 md:p-10">
            <h2 className="text-2xl font-lora font-bold mb-2 text-modern-navy-900">Request Service</h2>
            <p className="text-modern-charcoal/70 mb-8">Share the details and we will confirm your preferred time.</p>
            <MultiStepForm />
          </div>
          <div className="space-y-6">
            <div className="bg-modern-navy-900 border border-modern-navy-900 rounded-2xl p-6">
              <h3 className="text-lg font-lora font-semibold text-white mb-4">Concierge Line</h3>
              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-2xl font-lora font-bold text-modern-gold-500 hover:text-white transition-colors">
                {BUSINESS_INFO.phone}
              </a>
              <p className="text-sm text-modern-cream-300/70 mt-2">Same-week appointments available</p>
            </div>
            <div className="bg-modern-cream-300 border border-gray-200 rounded-2xl p-6 space-y-3">
              <h3 className="text-lg font-lora font-semibold text-modern-navy-900">Visit Us</h3>
              <p className="text-modern-charcoal/80">{BUSINESS_INFO.address}</p>
              <div className="text-sm text-modern-charcoal/70">
                <p>Mon-Fri: {BUSINESS_INFO.hours.weekday}</p>
                <p>Sat-Sun: {BUSINESS_INFO.hours.weekend}</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-lora font-semibold text-modern-navy-900 mb-4">Service Areas</h3>
              <div className="flex flex-wrap gap-2">
                {SERVICE_AREAS.slice(0, 10).map((area) => (
                  <a key={area} href={`/areas/${area.toLowerCase().replace(' ', '-')}`} className="px-3 py-1 rounded-full bg-modern-cream-300 text-modern-charcoal text-sm hover:bg-modern-blue-500 hover:text-white transition-colors">
                    {area}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-modern-cream-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-lora font-bold mb-2 text-modern-navy-900">Find our office</h2>
            <p className="text-modern-charcoal/70">Central to Monmouth and Middlesex counties</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl h-96 flex items-center justify-center shadow-sm">
            <div className="text-center">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8c0 7.5-7.5 13.5-7.5 13.5S4.5 15.5 4.5 8a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-modern-charcoal/70">Interactive map placeholder</p>
              <p className="text-modern-charcoal/50 text-sm mt-1">{BUSINESS_INFO.address}</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
