'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StatsGrid } from '../components/AnimatedCounter';
import { BrandCarousel } from '../components/BrandCarousel';
import { BUSINESS_INFO, STATS, SERVICES, TESTIMONIALS, IMAGES } from '../utils/constants';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-white font-openSans">
    <Header currentPage="home" />
    <HeroSection />
    <TrustBadgesSection />
    <StatsGrid stats={STATS} />
    <ServicesSection />
    <AssuranceSection />
    <TestimonialsSection />
    <BrandCarousel />
    <EmergencySection />
    <Footer />
  </div>
);

const HeroSection: React.FC = () => (
  <section className="relative overflow-hidden bg-modern-navy-900 min-h-[90vh] flex items-center">
    <div className="absolute inset-0">
      <img src={IMAGES.hero} alt="Luxury kitchen interior" className="w-full h-full object-cover opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-modern-navy-900 via-modern-navy-900/95 to-modern-navy-900/80" />
    </div>
    <div className="relative container mx-auto px-6 py-24 lg:py-32">
      <div className="max-w-4xl">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-modern-cream-300/10 border border-modern-gold-500/30 text-modern-gold-500 font-semibold uppercase tracking-[0.2em] text-sm mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span>30+ Years of Excellence</span>
        </div>
        <h1 className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
          Premium Appliance Repair for Discerning Homeowners
        </h1>
        <p className="text-lg text-modern-cream-300/90 max-w-2xl mb-10 leading-relaxed">
          Factory-certified technicians specializing in Sub-Zero, Wolf, Miele, Viking, Thermador, and all luxury appliance brands. Serving New Jersey with professionalism and care since 1992.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-lg bg-modern-blue-500 text-white font-semibold hover:bg-modern-blue-600 transition-all shadow-modern-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{BUSINESS_INFO.phone}</span>
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-lg border-2 border-modern-cream-300/30 text-white font-semibold hover:bg-white hover:text-modern-navy-900 transition-all"
          >
            <span>Schedule Service</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            { icon: 'shield', text: 'Licensed & Insured' },
            { icon: 'certificate', text: 'Factory Certified' },
            { icon: 'clock', text: 'Same-Day Available' },
          ].map((item) => (
            <div key={item.text} className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
              {item.icon === 'shield' && (
                <svg className="w-5 h-5 text-modern-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )}
              {item.icon === 'certificate' && (
                <svg className="w-5 h-5 text-modern-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              )}
              {item.icon === 'clock' && (
                <svg className="w-5 h-5 text-modern-gold-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span className="text-modern-cream-300/90">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TrustBadgesSection: React.FC = () => (
  <section className="py-12 bg-modern-cream-300">
    <div className="container mx-auto px-6">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-modern-navy-700 mb-6 font-semibold">
        Trusted Service Professionals
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: '30+ Years', subtitle: 'Experience' },
          { title: '10,000+', subtitle: 'Repairs' },
          { title: '24/7', subtitle: 'Support' },
          { title: '100%', subtitle: 'Satisfaction' },
        ].map((badge) => (
          <div key={badge.title} className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-modern-navy-900 text-modern-gold-500 mb-3">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-lora text-2xl font-bold text-modern-navy-900">{badge.title}</h3>
            <p className="text-sm text-modern-charcoal/70">{badge.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection: React.FC = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-modern-navy-700 font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">
            Our Expertise
          </span>
          <h2 className="font-lora text-3xl md:text-4xl lg:text-5xl font-bold text-modern-navy-900 mb-4">
            Expert Repair Services
          </h2>
          <p className="text-modern-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            From refrigerators to cooktops, our factory-certified technicians provide professional repair services for all your luxury appliances.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl border-2 border-gray-200 hover:border-modern-navy-700 hover:shadow-modern-lg transition-all duration-300"
            >
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 rounded-lg bg-modern-navy-900 text-white flex items-center justify-center group-hover:bg-modern-blue-500 transition-colors">
                    {iconMap[service.icon] || iconMap.circle}
                  </div>
                  <span className="text-sm font-semibold text-modern-gold-500 bg-modern-gold-500/10 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                <h3 className="font-lora text-2xl font-bold text-modern-navy-900 group-hover:text-modern-blue-500 transition-colors">
                  {service.name}
                </h3>
                <p className="text-modern-charcoal/70 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 text-sm text-modern-charcoal/80">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-modern-blue-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`/services/${service.id}`}
                  className="inline-flex items-center space-x-2 text-modern-navy-900 font-semibold hover:text-modern-blue-500 transition-colors pt-4"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg border-2 border-modern-navy-900 text-modern-navy-900 font-semibold hover:bg-modern-navy-900 hover:text-white transition-all"
          >
            <span>View All Services</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

const AssuranceSection: React.FC = () => (
  <section className="py-20 bg-modern-cream-300">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <span className="text-modern-navy-700 font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">
          Why Choose Us
        </span>
        <h2 className="font-lora text-3xl md:text-4xl font-bold text-modern-navy-900 mb-4">
          The Advanced Appliance Difference
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: 'home',
            title: 'Professional Service',
            description: 'Respectful, uniformed technicians who protect your home with floor coverings and careful handling of custom panels.',
          },
          {
            icon: 'badge',
            title: 'Luxury Brand Specialists',
            description: 'Factory-certified on Sub-Zero, Wolf, Miele, Viking, Thermador, Fisher & Paykel, and all premium brands.',
          },
          {
            icon: 'check',
            title: 'Transparent Process',
            description: 'Clear estimates before work begins, arrival windows with text updates, and genuine OEM parts with warranty.',
          },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-modern-lg transition-all"
          >
            <div className="w-12 h-12 rounded-lg bg-modern-blue-500 text-white flex items-center justify-center mb-6">
              {item.icon === 'home' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              )}
              {item.icon === 'badge' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              )}
              {item.icon === 'check' && (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </div>
            <h3 className="font-lora text-xl font-bold text-modern-navy-900 mb-3">
              {item.title}
            </h3>
            <p className="text-modern-charcoal/70 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-modern-navy-700 font-semibold text-sm uppercase tracking-[0.2em] mb-3 block">
            Client Testimonials
          </span>
          <h2 className="font-lora text-3xl md:text-4xl font-bold text-modern-navy-900 mb-4">
            Trusted by Homeowners Across New Jersey
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-modern-cream-300 rounded-2xl p-10 md:p-12 border border-gray-200">
            {TESTIMONIALS[activeIndex] && (
              <>
                <div className="flex items-center space-x-1 mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-6 h-6 ${star <= (TESTIMONIALS[activeIndex]?.rating ?? 0) ? 'text-modern-gold-500' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="font-lora text-2xl text-modern-navy-900 leading-relaxed mb-8">
                  "{TESTIMONIALS[activeIndex]?.text}"
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 rounded-full bg-modern-navy-900 text-white flex items-center justify-center font-bold text-xl">
                    {TESTIMONIALS[activeIndex]?.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-modern-navy-900 text-lg">
                      {TESTIMONIALS[activeIndex]?.name}
                    </p>
                    <p className="text-modern-charcoal/70">
                      {TESTIMONIALS[activeIndex]?.location}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center justify-center space-x-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-8 bg-modern-blue-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const EmergencySection: React.FC = () => (
  <section className="py-20 bg-modern-navy-900 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-modern-gold-500/20 border border-modern-gold-500/30 text-modern-gold-500 font-semibold uppercase tracking-[0.2em] text-sm mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Fast Response</span>
        </div>
        <h2 className="font-lora text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Need Appliance Repair Today?
        </h2>
        <p className="text-xl text-modern-cream-300/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Same-day and next-day appointments available. Our professional technicians arrive on time, diagnose accurately, and complete repairs efficiently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${BUSINESS_INFO.phoneClean}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-modern-blue-500 text-white font-semibold hover:bg-modern-blue-600 transition-all shadow-lg text-lg"
          >
            <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call {BUSINESS_INFO.phone}
          </a>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-semibold hover:bg-white hover:text-modern-navy-900 transition-all text-lg"
          >
            Request Service Online
            <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);
