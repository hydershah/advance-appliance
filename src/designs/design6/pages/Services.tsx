'use client';

import React from 'react';
import { Navigation, Footer, ServiceCard, Button } from '../components';
import { SERVICES, BUSINESS_INFO } from '../utils';

export const Services: React.FC = () => (
  <div className="min-h-screen bg-[#fcfbf8] font-sans">
    <Navigation currentPage="services" />
    <main className="pt-20">
      <HeroSection />
      <ServicesGrid />
      <ProcessSection />
      <CTASection />
    </main>
    <Footer />
  </div>
);

const HeroSection: React.FC = () => (
  <section className="py-40 bg-[#fcfbf8]">
    <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h1 className="font-serif font-normal text-[42px] lg:text-[56px] text-black mb-8 tracking-tight leading-tight">
        Comprehensive Service
      </h1>
      <p className="font-sans text-[20px] text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
        Factory-trained technicians. Premium parts. Meticulous attention to detail.
      </p>
    </div>
  </section>
);

const ServicesGrid: React.FC = () => (
  <section className="py-40 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {SERVICES.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  </section>
);

const ProcessSection: React.FC = () => {
  const steps = [
    { number: '01', title: 'Consultation', description: 'Schedule your appointment at your convenience' },
    { number: '02', title: 'Diagnostics', description: 'Comprehensive assessment by certified technicians' },
    { number: '03', title: 'Service', description: 'Expert repair using premium OEM components' },
    { number: '04', title: 'Assurance', description: 'Guaranteed workmanship and lasting performance' },
  ];

  return (
    <section className="py-40 bg-[#fcfbf8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="font-serif font-normal text-[36px] lg:text-[42px] text-black mb-6 tracking-tight leading-tight">
            Our Process
          </h2>
          <p className="font-sans text-[20px] text-[#6b7280] leading-relaxed max-w-2xl mx-auto">
            A refined approach to appliance care
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-20 h-20 mx-auto mb-8 rounded-full border border-[#E5E5E5] flex items-center justify-center bg-white">
                <span className="font-serif font-normal text-[20px] text-[#722f10]">
                  {step.number}
                </span>
              </div>
              <h3 className="font-serif font-normal text-[20px] text-black mb-4">
                {step.title}
              </h3>
              <p className="font-sans text-[13px] text-[#6b7280] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection: React.FC = () => (
  <section className="py-40 bg-white">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="font-serif font-normal text-[36px] lg:text-[42px] text-black mb-8 tracking-tight leading-tight">
        Schedule Your Service
      </h2>
      <p className="font-sans text-[20px] text-[#6b7280] mb-16 leading-relaxed">
        Same-day appointments available for your convenience
      </p>
      <Button variant="primary" size="lg" href={`tel:${BUSINESS_INFO.phoneClean}`}>
        {BUSINESS_INFO.phone}
      </Button>
    </div>
  </section>
);
