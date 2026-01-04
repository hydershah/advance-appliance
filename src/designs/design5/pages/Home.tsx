'use client';

import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { TrustBadges } from '../components/TrustBadges';
import {
  BUSINESS_INFO,
  STATS,
  SERVICES,
  TESTIMONIALS,
  TRUST_BADGES,
  BRANDS,
  IMAGES,
} from '../utils/constants';

export const Home: React.FC = () => (
  <div className="min-h-screen bg-white font-inter">
    <Header currentPage="home" />
    <HeroSection />
    <TrustSection />
    <StatsSection />
    <ServicesSection />
    <AboutSection />
    <TestimonialsSection />
    <BrandsSection />
    <ContactCTASection />
    <Footer />
  </div>
);

const HeroSection: React.FC = () => (
  <section className="min-h-[85vh] flex items-center bg-white px-8 py-40">
    <div className="container mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-[#2FC4A7] uppercase tracking-widest text-xs font-inter font-semibold mb-6">
            Est. 1992
          </p>
          <h1 className="font-inter text-6xl lg:text-7xl font-light text-[#272727] mb-8 leading-tight tracking-tight">
            Your Kitchen. Our Expertise.
          </h1>
          <p className="text-lg text-[#272727] font-inter font-normal mb-12 leading-relaxed max-w-xl opacity-80">
            Factory-certified repair for Sub-Zero, Wolf, and all luxury appliances.
            Same-day service across Central New Jersey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              href={`tel:${BUSINESS_INFO.phoneClean}`}
            >
              Call Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/contact"
            >
              Schedule Service
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={IMAGES.kitchen}
              alt="Modern luxury kitchen"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TrustSection: React.FC = () => (
  <section className="py-24 bg-white border-t border-[#E5E5E5]">
    <div className="container mx-auto px-8 max-w-7xl">
      <TrustBadges badges={TRUST_BADGES} />
    </div>
  </section>
);

const StatsSection: React.FC = () => (
  <section className="py-40 bg-white">
    <div className="container mx-auto px-8 max-w-7xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
        {STATS.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="font-inter text-6xl lg:text-7xl font-light text-[#272727] mb-4">
              {stat.value}
              <span className="text-[#2FC4A7]">{stat.suffix}</span>
            </div>
            <div className="text-[#272727] font-inter text-sm font-normal opacity-70">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection: React.FC = () => (
  <section className="py-40 bg-white border-t border-[#E5E5E5]">
    <div className="container mx-auto px-8 max-w-7xl">
      <div className="text-center mb-24">
        <p className="text-[#2FC4A7] uppercase tracking-widest text-xs font-inter font-semibold mb-6">
          Expert Repair Services
        </p>
        <h2 className="font-inter text-5xl lg:text-6xl font-light text-[#272727] mb-8 tracking-tight">
          We Fix What Matters Most
        </h2>
        <p className="text-lg text-[#272727] font-inter font-normal max-w-2xl mx-auto leading-relaxed opacity-80">
          From refrigerators to ranges, our certified technicians bring your appliances back to life.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  </section>
);

const AboutSection: React.FC = () => (
  <section className="py-40 bg-white border-t border-[#E5E5E5]">
    <div className="container mx-auto px-8 max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={IMAGES.technician}
              alt="Professional technician at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <p className="text-[#2FC4A7] uppercase tracking-widest text-xs font-inter font-semibold mb-6">
            About Us
          </p>
          <h2 className="font-inter text-5xl lg:text-6xl font-light text-[#272727] mb-8 tracking-tight">
            Family-Owned. Locally Trusted.
          </h2>
          <div className="space-y-6 text-[#272727] font-inter font-normal leading-relaxed opacity-80">
            <p>
              Since 1992, we've been the go-to appliance repair experts for families across
              Central New Jersey. What started in a small garage has grown into a team of
              factory-certified technicians serving thousands of homes.
            </p>
            <p>
              We treat your home like our own—with care, respect, and attention to detail.
              Whether it's a luxury Sub-Zero refrigerator or a trusted Whirlpool washer, we
              have the expertise to get it running right.
            </p>
            <p>
              No high-pressure sales. No hidden fees. Just honest, professional service you
              can count on.
            </p>
          </div>
          <div className="mt-10">
            <Button variant="outline" size="md" href="/about">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection: React.FC = () => (
  <section className="py-40 bg-white border-t border-[#E5E5E5]">
    <div className="container mx-auto px-8 max-w-4xl">
      <div className="text-center mb-20">
        <p className="text-[#2FC4A7] uppercase tracking-widest text-xs font-inter font-semibold mb-6">
          Testimonials
        </p>
        <h2 className="font-inter text-5xl lg:text-6xl font-light text-[#272727] tracking-tight">
          What Our Customers Say
        </h2>
      </div>
      <TestimonialCarousel testimonials={TESTIMONIALS} />
    </div>
  </section>
);

const BrandsSection: React.FC = () => (
  <section className="py-32 bg-white border-t border-[#E5E5E5]">
    <div className="container mx-auto px-8 max-w-7xl">
      <div className="text-center mb-16">
        <p className="text-[#272727] uppercase tracking-widest text-xs font-inter font-semibold mb-4 opacity-50">
          We Service All Major Brands
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12">
        {BRANDS.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 text-[#272727] hover:text-[#2FC4A7] font-inter font-normal text-sm transition-colors opacity-40 hover:opacity-100"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactCTASection: React.FC = () => (
  <section className="py-40 bg-[#F8F8F8]">
    <div className="container mx-auto px-8 max-w-4xl text-center">
      <h2 className="font-inter text-5xl lg:text-6xl font-light text-[#272727] mb-8 tracking-tight">
        Ready to Get Your Appliances Fixed?
      </h2>
      <p className="text-lg text-[#272727] font-inter font-normal mb-12 leading-relaxed opacity-80">
        Call us today for same-day service or schedule a convenient appointment online.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          variant="primary"
          size="lg"
          href={`tel:${BUSINESS_INFO.phoneClean}`}
        >
          {BUSINESS_INFO.phone}
        </Button>
        <Button
          variant="outline"
          size="lg"
          href="/contact"
        >
          Schedule Online
        </Button>
      </div>
    </div>
  </section>
);
