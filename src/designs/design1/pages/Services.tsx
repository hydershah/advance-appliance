'use client';

import React from 'react';
import { Header, Footer, Hero, ServiceCard, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, services as staticServices, brands as staticBrands, images } from '../data/content';
import type { Service, Brand } from '../types';

interface ServicesProps {
  services?: Service[];
  brands?: Brand[];
}

const Services: React.FC<ServicesProps> = ({ services: servicesProp, brands: brandsProp }) => {
  const services = servicesProp || staticServices;
  const brands = brandsProp || staticBrands;
  const breadcrumbs = [{ name: 'Home', url: 'https://advancedappliancerepair.com/' }, { name: 'Services', url: 'https://advancedappliancerepair.com/services' }];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero title="Our Repair Services" subtitle="Professional Solutions" description="Comprehensive repair services for all major appliance brands." image={images.services} showCTA={true} overlay="gradient" height="medium" align="center" />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a><span className="text-gray-300">/</span><span className="text-[#D4AF37]">Services</span>
            </nav>
          </div>
        </div>

        <section className="py-20 lg:py-28 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div>
                  <div className="w-12 h-px bg-[#D4AF37] mb-6" />
                  <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight mb-6 text-gray-900">
                    Expert Repair Services You Can Trust
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    At Advanced Appliance Repair, we diagnose and repair both everyday household appliances and premium brands with precision and care. Our factory-trained technicians bring years of hands-on experience to every service call.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    Whether it&apos;s a Sub-Zero refrigerator, Wolf range, Miele dishwasher, or common brands like GE, Whirlpool, LG, and Samsung, we use genuine manufacturer parts whenever possible and proven repair methods to restore your appliances to reliable performance.
                  </p>
                  <div className="flex flex-wrap gap-x-8 gap-y-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <span className="text-sm text-gray-700">Next Day Service</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <span className="text-sm text-gray-700">OEM Factory Parts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <span className="text-sm text-gray-700">Up to 1-Year Warranty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                      <span className="text-sm text-gray-700">Licensed & Insured</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 border border-gray-100 p-8 lg:p-10">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#D4AF37] text-lg font-serif">1</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-gray-900 mb-1">Schedule Your Visit</h3>
                        <p className="text-sm text-gray-500">Call or book online for a convenient appointment time.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#D4AF37] text-lg font-serif">2</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-gray-900 mb-1">Precision Diagnosis</h3>
                        <p className="text-sm text-gray-500">Our technician identifies the issue with professional-grade tools.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-[#D4AF37] flex items-center justify-center flex-shrink-0">
                        <span className="text-[#D4AF37] text-lg font-serif">3</span>
                      </div>
                      <div>
                        <h3 className="font-serif text-lg text-gray-900 mb-1">Quality Repair</h3>
                        <p className="text-sm text-gray-500">We fix it right the first time with genuine manufacturer parts.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="What We Repair" title="Complete Appliance Repair Solutions" description="From refrigerators to cooktops, we service all major appliances." align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.map((service) => <ServiceCard key={service.id} service={service} variant="default" />)}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Service Timeline" title="How Long Does the Repair Take?" align="center" />
            <div className="max-w-4xl mx-auto mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                <div className="hidden md:block absolute top-10 left-[16.67%] right-[16.67%] h-px bg-[#D4AF37]/30" />
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 bg-white relative z-10">
                    <span className="font-serif text-2xl text-[#D4AF37]">1</span>
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-2">Today</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">Your appliance broke down. No worries — our operators are standing by. Call today for next day service.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 bg-white relative z-10">
                    <span className="font-serif text-2xl text-[#D4AF37]">2</span>
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-2">Tomorrow</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">A technician calls 30 minutes before arrival, provides a detailed estimate, and with your approval completes the repair on-site.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6 bg-white relative z-10">
                    <span className="font-serif text-2xl text-[#D4AF37]">3</span>
                  </div>
                  <h3 className="font-serif text-xl text-gray-900 mb-2">1–3 Days</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">Most repairs are completed same-day. When additional parts are needed, they typically arrive within 1–3 business days — not weeks.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Brands We Service" title="Factory-Trained for Premier Brands" align="center" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-16">
              {brands.map((brand, i) => (
                <div key={i} className="flex items-center justify-center p-6 border border-gray-200 hover:border-[#D4AF37] transition-colors group">
                  <span className="text-gray-500 text-sm font-serif text-center group-hover:text-[#D4AF37]">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Schedule Next Day</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">Ready to Repair Your Appliance?</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">Contact us today for precise diagnosis and quality repair.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">Call {businessInfo.phone}</CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg" icon="arrow">Schedule Online</CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
