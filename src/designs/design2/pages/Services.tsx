'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ServiceFilterTabs } from '../components/ServiceFilterTabs';
import { useIntersectionObserver } from '../hooks/useAnimatedCounter';
import { SERVICES, BUSINESS_INFO, IMAGES } from '../utils/constants';

type ServiceCategory = 'all' | 'kitchen' | 'laundry' | 'cooling';

const SERVICE_CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'all', label: 'All Services' },
  { id: 'kitchen', label: 'Kitchen Appliances' },
  { id: 'laundry', label: 'Laundry' },
  { id: 'cooling', label: 'Cooling & Freezing' },
];

const serviceCategoryMap: Record<string, ServiceCategory> = {
  refrigerator: 'cooling', freezer: 'cooling', 'ice-maker': 'cooling',
  washer: 'laundry', dryer: 'laundry',
  dishwasher: 'kitchen', oven: 'kitchen', cooktop: 'kitchen', stove: 'kitchen',
};

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const filteredServices = useMemo(() => activeCategory === 'all' ? SERVICES : SERVICES.filter((s) => serviceCategoryMap[s.id] === activeCategory), [activeCategory]);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />
      <section className="bg-[#0A1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} /></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Professional Repair Services</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Expert Appliance<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"> Repair </span>Services</h1>
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">From refrigerators to ovens, we repair all major household appliances. Factory-authorized service with genuine parts and expert technicians.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto"><img src={IMAGES.kitchen} alt="Featured appliance repair" className="absolute inset-0 w-full h-full object-cover" /></div>
              <div className="p-8 lg:p-12">
                <span className="inline-flex items-center px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] rounded-full text-sm font-bold uppercase tracking-wider mb-4">Featured Service</span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">Refrigerator Repair Specialists</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">Your refrigerator is the heart of your kitchen. When it breaks down, you need fast, reliable service. Our certified technicians specialize in all major brands including Sub-Zero, Viking, and Samsung.</p>
                <ul className="space-y-3 mb-8">{['Same-day emergency service', 'Genuine manufacturer parts', '90-day warranty on repairs', 'All major brands serviced'].map((item) => (<li key={item} className="flex items-center space-x-3"><div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center"><svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><span className="text-gray-700">{item}</span></li>))}</ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center justify-center space-x-2 px-6 py-3 bg-[#0A1628] text-white rounded-xl font-bold hover:bg-[#0A1628]/90 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>Call Now</span></a>
                  <a href="/services/refrigerator" className="flex items-center justify-center space-x-2 px-6 py-3 border-2 border-[#0A1628] text-[#0A1628] rounded-xl font-bold hover:bg-[#0A1628] hover:text-white transition-colors"><span>Learn More</span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A1628] mb-4">All Repair Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Select a category to filter our services, or browse all available repair options.</p>
          </div>
          <div className="mb-12"><ServiceFilterTabs tabs={SERVICE_CATEGORIES} activeTab={activeCategory} onTabChange={(tab) => setActiveCategory(tab as ServiceCategory)} /></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{filteredServices.map((service, index) => <ServiceGridCard key={service.id} service={service} index={index} />)}</div>
        </div>
      </section>

      <section className="py-20 bg-[#0A1628]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Not Sure What Service You Need?</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">Our expert technicians can diagnose any appliance problem. Call us now for a free consultation.</p>
          <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="inline-flex items-center space-x-3 px-8 py-4 bg-[#3B82F6] text-white rounded-xl font-bold text-lg hover:bg-[#2563EB] transition-colors shadow-lg shadow-[#3B82F6]/30"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>{BUSINESS_INFO.phone}</span></a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const ServiceGridCard: React.FC<{ service: typeof SERVICES[number]; index: number }> = ({ service, index }) => {
  const { isVisible, elementRef } = useIntersectionObserver();
  const iconMap: Record<string, React.ReactNode> = {
    snowflake: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" /></svg>,
    droplet: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>,
    wind: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    dish: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    flame: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>,
    circle: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={2} /></svg>,
    cube: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  };

  return (
    <a ref={elementRef} href={`/services/${service.id}`} className={`group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#3B82F6] hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 50}ms` }}>
      <div className="h-2 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      <div className="p-8">
        <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-[#0A1628] mb-6 group-hover:bg-[#3B82F6] group-hover:text-white transition-all">{iconMap[service.icon] || iconMap.circle}</div>
        <h3 className="text-xl font-bold text-[#0A1628] mb-3 group-hover:text-[#3B82F6] transition-colors">{service.name}</h3>
        <p className="text-gray-600 mb-6 line-clamp-2">{service.description}</p>
        <div className="space-y-2 mb-6">{service.features.slice(0, 3).map((f) => (<div key={f} className="flex items-center space-x-2 text-sm text-gray-500"><svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span>{f}</span></div>))}</div>
        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
          <span className="text-[#3B82F6] font-bold">{service.price}</span>
          <span className="flex items-center space-x-2 text-[#0A1628] font-medium group-hover:text-[#3B82F6] transition-colors"><span>View Details</span><svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
        </div>
      </div>
    </a>
  );
};
