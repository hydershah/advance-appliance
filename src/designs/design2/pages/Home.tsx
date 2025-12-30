'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StatsGrid } from '../components/AnimatedCounter';
import { BrandCarousel } from '../components/BrandCarousel';
import { useIntersectionObserver } from '../hooks/useAnimatedCounter';
import { BUSINESS_INFO, STATS, SERVICES, TESTIMONIALS, IMAGES } from '../utils/constants';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="home" />
      <HeroSection />
      <StatsGrid stats={STATS} />
      <ServicesSection />
      <TestimonialsSection />
      <BrandCarousel />
      <EmergencySection />
      <Footer />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <section className="bg-[#0A1628] min-h-[90vh] flex items-center relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
    </div>
    <div className="absolute top-20 left-20 w-72 h-72 bg-[#3B82F6]/20 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-40 w-96 h-96 bg-[#60A5FA]/10 rounded-full blur-3xl" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center px-4 py-2 bg-[#3B82F6]/20 rounded-full text-[#3B82F6] text-sm font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-[#3B82F6] rounded-full mr-2 animate-pulse" />Factory Authorized Service
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Expert <span className="relative inline-block"><span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">Appliance</span><span className="absolute bottom-2 left-0 w-full h-3 bg-[#3B82F6]/30 -z-0" /></span><br />Repair Service
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl leading-relaxed">Fast, reliable appliance repair you can count on. Trusted by over 100,000 customers across Central New Jersey for 30+ years.</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="group flex items-center justify-center space-x-3 px-8 py-4 bg-[#3B82F6] text-white rounded-xl font-bold text-lg hover:bg-[#2563EB] transition-all transform hover:scale-105 shadow-lg shadow-[#3B82F6]/30">
              <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
            <a href="/contact" className="group flex items-center justify-center space-x-3 px-8 py-4 border-2 border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#0A1628] transition-all">
              <span>Book Online</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            {[{ icon: 'check', label: 'Licensed & Insured', color: 'green-500' }, { icon: 'star', label: '5-Star Rated', color: 'yellow-500' }, { icon: 'clock', label: 'Same-Day Service', color: '[#3B82F6]' }].map((item) => (
              <div key={item.label} className="flex items-center space-x-2">
                <div className={`w-10 h-10 bg-${item.color}/20 rounded-full flex items-center justify-center`}>
                  <svg className={`w-5 h-5 text-${item.color}`} fill={item.icon === 'star' ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    {item.icon === 'check' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />}
                    {item.icon === 'star' && <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />}
                    {item.icon === 'clock' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  </svg>
                </div>
                <span className="text-gray-400 text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 to-transparent rounded-3xl transform rotate-3" />
          <img src={IMAGES.hero} alt="Professional appliance repair technician" className="relative rounded-3xl shadow-2xl shadow-[#3B82F6]/20 object-cover h-[600px] w-full" />
          <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div><p className="font-bold text-[#0A1628]">89% First-Visit Fix</p><p className="text-gray-500 text-sm">Most repairs done same day</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
      <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
    </div>
  </section>
);

const ServicesSection: React.FC = () => {
  const { isVisible, ref: elementRef } = useIntersectionObserver();
  const iconMap: Record<string, React.ReactNode> = {
    snowflake: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" /></svg>,
    droplet: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" /></svg>,
    wind: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
    dish: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    flame: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" /></svg>,
    circle: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" strokeWidth={2} /><circle cx="12" cy="12" r="3" strokeWidth={2} /></svg>,
    cube: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  };

  return (
    <section className="py-24 bg-gray-50" ref={elementRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16">
          <div>
            <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">What We Fix</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628]">Professional Repair<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]">Services</span></h2>
          </div>
          <a href="/services" className="group flex items-center space-x-2 text-[#0A1628] font-bold hover:text-[#3B82F6] transition-colors mt-6 lg:mt-0">
            <span>View All Services</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.slice(0, 6).map((service, index) => (
            <a key={service.id} href={`/services/${service.id}`} className={`group relative bg-white rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#3B82F6] transition-all duration-500 shadow-lg hover:shadow-2xl ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className={`p-8 ${index === 0 ? 'md:p-12' : ''}`}>
                <div className="w-16 h-16 bg-[#0A1628] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-[#3B82F6] transition-colors">{iconMap[service.icon] || iconMap.circle}</div>
                <h3 className={`font-bold text-[#0A1628] mb-3 group-hover:text-[#3B82F6] transition-colors ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{service.name}</h3>
                <p className={`text-gray-600 mb-6 leading-relaxed ${index === 0 ? 'text-lg' : ''}`}>{service.description}</p>
                {index === 0 && service.commonIssues && <div className="grid grid-cols-2 gap-3 mb-6">{service.commonIssues.slice(0, 4).map((issue) => (<div key={issue} className="flex items-center space-x-2 text-gray-600"><svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-sm">{issue}</span></div>))}</div>}
                <div className="flex items-center justify-between">
                  <span className="text-[#3B82F6] font-bold">From $89</span>
                  <span className="flex items-center space-x-2 text-[#0A1628] font-medium group-hover:text-[#3B82F6] transition-colors"><span>Learn More</span><svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-24 bg-[#0A1628] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#60A5FA]/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Customers Say</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 mb-8">
            {TESTIMONIALS[activeIndex].hasVideo && (
              <div className="aspect-video bg-gray-800 rounded-2xl mb-8 flex items-center justify-center overflow-hidden relative group cursor-pointer">
                <img src={IMAGES.kitchen} alt="Video thumbnail" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity" />
                <div className="w-20 h-20 bg-[#3B82F6] rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>
            )}
            <div className="flex items-center space-x-1 mb-6">{[1, 2, 3, 4, 5].map((star) => (<svg key={star} className={`w-6 h-6 ${star <= TESTIMONIALS[activeIndex].rating ? 'text-yellow-500' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div>
            <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8">"{TESTIMONIALS[activeIndex].text}"</blockquote>
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold text-xl">{TESTIMONIALS[activeIndex].name.charAt(0)}</div>
              <div><p className="text-white font-bold text-lg">{TESTIMONIALS[activeIndex].name}</p><p className="text-gray-400">{TESTIMONIALS[activeIndex].location}</p></div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">{TESTIMONIALS.map((_, index) => (<button key={index} onClick={() => setActiveIndex(index)} className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-8 bg-[#3B82F6]' : 'w-2 bg-gray-600 hover:bg-gray-500'}`} aria-label={`Go to testimonial ${index + 1}`} />))}</div>
        </div>
      </div>
    </section>
  );
};

const EmergencySection: React.FC = () => (
  <section className="py-20 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '30px 30px' }} />
    </div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            <span className="text-white font-medium text-sm">24/7 Emergency Service Available</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Appliance Emergency?</h2>
          <p className="text-white/90 text-lg max-w-xl">Do not wait! Our expert technicians are ready to help. We offer same-day service for most repairs.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center space-x-3 px-8 py-5 bg-white text-[#0A1628] rounded-xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
            <svg className="w-7 h-7 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span>{BUSINESS_INFO.phone}</span>
          </a>
          <a href="/contact" className="flex items-center space-x-3 px-8 py-5 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#0A1628] transition-all">
            <span>Schedule Online</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);
