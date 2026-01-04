'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceFilterTabs } from '../components/ServiceFilterTabs';
import { BUSINESS_INFO, SERVICES, IMAGES } from '../utils/constants';

type ServiceCategory = 'all' | 'kitchen' | 'laundry' | 'cooling';

const SERVICE_CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'kitchen', label: 'Kitchen Appliances' },
  { id: 'laundry', label: 'Laundry' },
  { id: 'cooling', label: 'Cooling & Freezing' },
];

const serviceCategoryMap: Record<string, ServiceCategory> = {
  refrigerator: 'cooling',
  freezer: 'cooling',
  'ice-maker': 'cooling',
  washer: 'laundry',
  dryer: 'laundry',
  dishwasher: 'kitchen',
  oven: 'kitchen',
  cooktop: 'kitchen',
  stove: 'kitchen',
  microwave: 'kitchen',
};

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const filteredServices = useMemo(
    () => (activeCategory === 'all' ? SERVICES : SERVICES.filter((s) => serviceCategoryMap[s.id] === activeCategory)),
    [activeCategory],
  );

  const featured = SERVICES[0];

  return (
    <div className="min-h-screen bg-white font-openSans">
      <Header currentPage="services" />

      <section className="relative overflow-hidden bg-modern-navy-900">
        <div className="absolute inset-0">
          <img src={IMAGES.kitchen} alt="Luxury kitchen" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-modern-navy-900 via-modern-navy-900/95 to-modern-navy-900/80" />
        </div>
        <div className="relative container mx-auto px-6 py-24 lg:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-modern-cream-300/10 border border-modern-gold-500/30 text-modern-gold-500 font-openSans font-semibold uppercase tracking-[0.3em] mb-4 text-sm">Repair Services</span>
            <h1 className="text-4xl md:text-5xl font-lora font-bold text-white leading-tight mb-4">Precision Repair for Premium Appliances</h1>
            <p className="text-lg text-modern-cream-300/90 max-w-2xl leading-relaxed">
              From refrigeration to cooking suites, our factory-trained team handles complex diagnostics, delicate panels, and high-end finishes with care.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur">
            <h3 className="text-2xl font-lora font-semibold text-white mb-3">{featured.name}</h3>
            <p className="text-modern-cream-300/80 mb-4">{featured.description}</p>
            <ul className="grid grid-cols-2 gap-3 text-sm text-modern-cream-300/90 mb-6">
              {featured.commonIssues?.slice(0, 6).map((issue) => (
                <li key={issue} className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-modern-gold-500" />
                  <span>{issue}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-modern-gold-500 font-openSans font-semibold">Starting</p>
                <p className="text-2xl font-lora font-bold text-white">{featured.price}</p>
              </div>
              <a href={`/services/${featured.id}`} className="inline-flex items-center space-x-2 text-white font-semibold hover:text-modern-gold-500 transition-colors">
                <span>Explore details</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-modern-cream-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-lora font-bold mb-3 text-modern-navy-900">Select a category</h2>
            <p className="text-modern-charcoal/70">Tailored expertise for every appliance in your home.</p>
          </div>
          <div className="mb-10">
            <ServiceFilterTabs tabs={SERVICE_CATEGORIES} activeTab={activeCategory} onTabChange={(tab) => setActiveCategory(tab as ServiceCategory)} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="group bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden hover:-translate-y-1 hover:shadow-modern-lg transition-all duration-200">
                <div className="h-1 bg-gradient-to-r from-modern-blue-500 to-modern-gold-500" />
                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-lora font-bold group-hover:text-modern-blue-500 transition-colors text-modern-navy-900">{service.name}</h3>
                    <span className="text-sm font-openSans font-semibold text-modern-gold-500 uppercase tracking-widest">{service.price}</span>
                  </div>
                  <p className="text-modern-charcoal/70 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 text-sm text-modern-charcoal/80">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-modern-blue-500" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`/services/${service.id}`} className="inline-flex items-center space-x-2 text-modern-navy-900 font-semibold hover:text-modern-blue-500 transition-colors">
                    <span>View details</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-modern-navy-900">
        <div className="container mx-auto px-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-modern-gold-500 mb-2 font-openSans font-semibold">Not sure where to start?</p>
              <h3 className="text-2xl md:text-3xl font-lora font-bold text-white mb-2">We will diagnose and recommend the right fix.</h3>
              <p className="text-modern-cream-300/80 max-w-2xl">Describe the issue and our concierge will match you with the right technician, provide an arrival window, and protect your home while we work.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-modern-blue-500 text-white font-montserrat font-semibold hover:bg-modern-blue-600 transition-colors shadow-md">
                Call {BUSINESS_INFO.phone}
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white/30 text-white font-montserrat font-semibold hover:bg-white hover:text-modern-navy-900 transition-colors">
                Book online
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
