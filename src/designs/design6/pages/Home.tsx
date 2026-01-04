'use client';

import React from 'react';
import { Navigation, Footer, Button, ServiceCard, IconGrid, Stats } from '../components';
import { BUSINESS_INFO, SERVICES, STATS, TRUST_ITEMS, TESTIMONIALS, BRANDS, IMAGES } from '../utils';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-[#fcfbf8] font-sans">
    <Navigation currentPage="home" />
    <HeroSection />
    <Stats stats={STATS} />
    <AboutSection />
    <ServicesSection />
    <TestimonialsSection />
    <BrandsSection />
    <CTASection />
    <Footer />
  </div>
);

const HeroSection: React.FC = () => (
  <section className="relative min-h-screen flex items-center bg-[#fcfbf8] px-6 pt-20 pb-40">
    {/* Background Image - NO OVERLAY per Villa Vista spec */}
    <div className="absolute inset-0 z-0">
      <img
        src={IMAGES.hero}
        alt="Luxury kitchen"
        className="w-full h-full object-cover opacity-15"
      />
    </div>

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      {/* Headline - EXACT Villa Vista: 42px */}
      <h1 className="font-serif font-normal text-[42px] lg:text-[56px] text-[#722f10] mb-8 tracking-tight leading-tight">
        Luxury Appliance Care
        <br />
        for Discerning Homes
      </h1>

      {/* Subheadline - EXACT Villa Vista: 20px medium */}
      <p className="font-sans text-[20px] text-[#332C27] mb-16 leading-relaxed max-w-2xl mx-auto">
        {BUSINESS_INFO.tagline}
      </p>

      {/* Trust Icons - Minimal, no borders */}
      <div className="mb-16">
        <IconGrid items={TRUST_ITEMS} />
      </div>

      {/* CTA Button - DARK CHARCOAL per Villa Vista spec (NOT terracotta) */}
      <Button variant="primary" size="lg" href={`tel:${BUSINESS_INFO.phoneClean}`}>
        Schedule Service
      </Button>

      {/* Secondary Info - EXACT Villa Vista: 13px small */}
      <p className="font-sans text-[13px] text-[#332C27] mt-8">
        Same-day appointments available · Certified technicians
      </p>
    </div>
  </section>
);

const AboutSection: React.FC = () => (
  <section className="py-40 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Asymmetric Grid - Villa Vista 60/40 split, NOT 50/50 */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 lg:gap-32 items-center">
        {/* Image Column - 60% (3 cols) */}
        <div className="order-2 lg:order-1 lg:col-span-3">
          <div className="relative">
            <img
              src={IMAGES.kitchen}
              alt="Luxury kitchen appliances"
              className="w-full h-[600px] object-cover rounded-none"
            />
            {/* NO OVERLAY per Villa Vista spec */}
          </div>
        </div>

        {/* Content Column - 40% (2 cols) */}
        <div className="order-1 lg:order-2 lg:col-span-2">
          <h2 className="font-serif font-normal text-[36px] text-[#722f10] mb-8 tracking-tight leading-tight">
            Craftmanship
            <br />
            Meets Excellence
          </h2>

          <div className="space-y-6">
            <p className="font-sans text-[20px] text-[#332C27] leading-relaxed">
              For over three decades, Advanced Appliance has been the trusted choice for homeowners who demand nothing but the best for their luxury appliances.
            </p>

            <p className="font-sans text-[20px] text-[#332C27] leading-relaxed">
              Our certified technicians combine traditional craftsmanship with cutting-edge diagnostic technology, ensuring every repair meets the exacting standards your premium appliances deserve.
            </p>

            <p className="font-sans text-[20px] text-[#332C27] leading-relaxed">
              From Sub-Zero refrigeration to Wolf cooking systems, we treat each appliance with the meticulous care it was designed to receive.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-[#E5E5E5]">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="font-serif text-[36px] text-[#722f10] mb-2">30+</p>
                <p className="font-sans text-[13px] text-[#332C27] uppercase tracking-wider">Years</p>
              </div>
              <div>
                <p className="font-serif text-[36px] text-[#722f10] mb-2">100K+</p>
                <p className="font-sans text-[13px] text-[#332C27] uppercase tracking-wider">Repairs</p>
              </div>
              <div>
                <p className="font-serif text-[36px] text-[#722f10] mb-2">89%</p>
                <p className="font-sans text-[13px] text-[#332C27] uppercase tracking-wider">Same Day</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section className="py-40 bg-[#fcfbf8]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section Header - Asymmetric layout, left-aligned per Villa Vista */}
      <div className="mb-24 max-w-3xl">
        <h2 className="font-serif font-normal text-[36px] lg:text-[42px] text-[#722f10] mb-6 tracking-tight leading-tight">
          Expert Services
        </h2>
        <p className="font-sans text-[20px] text-[#332C27] leading-relaxed">
          Specialized care for the world's finest appliances
        </p>
      </div>

      {/* Services Grid - Villa Vista asymmetric: stagger cards with offset */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {SERVICES.map((service, idx) => (
          <div key={service.id} className={idx % 2 === 1 ? 'md:mt-16' : ''}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TestimonialsSection: React.FC = () => (
  <section className="py-40 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section Header */}
      <div className="mb-24 text-center">
        <h2 className="font-serif font-normal text-[36px] lg:text-[42px] text-[#722f10] mb-6 tracking-tight leading-tight">
          Client Testimonials
        </h2>
        <p className="font-sans text-[20px] text-[#332C27] leading-relaxed max-w-2xl mx-auto">
          What our clients say about their experience
        </p>
      </div>

      {/* Testimonials Grid - NO borders, whitespace separation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-[#fcfbf8] p-12"
          >
            {/* Stars - Terracotta */}
            <div className="flex space-x-1 mb-8">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-[#722f10]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Text */}
            <p className="font-sans text-[13px] text-[#6b7280] mb-8 leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="pt-6 border-t border-[#E5E5E5]">
              <p className="font-serif font-normal text-[20px] text-[#722f10] mb-1">
                {testimonial.name}
              </p>
              <p className="font-sans text-[13px] text-[#332C27]">
                {testimonial.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BrandsSection: React.FC = () => (
  <section className="py-32 bg-[#fcfbf8]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <p className="font-sans text-[13px] uppercase tracking-wider text-[#332C27] text-center mb-16">
        Authorized Service For
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12">
        {BRANDS.map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-center p-6 text-[#332C27] font-serif text-[20px]"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection: React.FC = () => (
  <section className="py-40 bg-white">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="font-serif font-normal text-[36px] lg:text-[42px] text-[#722f10] mb-8 tracking-tight leading-tight">
        Ready to Schedule?
      </h2>
      <p className="font-sans text-[20px] text-[#332C27] mb-16 leading-relaxed">
        Experience the difference of professional, certified service
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <Button variant="primary" size="lg" href={`tel:${BUSINESS_INFO.phoneClean}`}>
          {BUSINESS_INFO.phone}
        </Button>
        <Button variant="secondary" size="lg" href="/contact">
          Request Appointment
        </Button>
      </div>
    </div>
  </section>
);
