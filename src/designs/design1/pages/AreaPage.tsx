'use client';

import React from 'react';
import { Header, Footer, Hero, ServiceCard, SectionHeading, CTAButton, FAQAccordion, TestimonialCard, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, services, serviceAreas, testimonials, brands, images } from '../data/content';
import { ServiceArea } from '../types';

interface AreaPageProps {
  areaSlug?: string;
  area?: ServiceArea;
}

const AreaPage: React.FC<AreaPageProps> = ({ areaSlug, area: areaProp }) => {
  const area = areaProp || serviceAreas.find((a) => a.slug === areaSlug) || serviceAreas[0];
  if (!area) return null;
  const otherAreas = serviceAreas.filter((a) => a.id !== area.id);
  const areaTestimonials = testimonials.filter((t) => t.location.toLowerCase().includes(area.name.toLowerCase()));
  const areaFaqs = [
    { question: `Do you offer same-day service in ${area.name}?`, answer: `Yes, we offer same-day service in ${area.name}. Call us before noon for best availability.` },
    { question: `What areas of ${area.name} do you cover?`, answer: `We serve all of ${area.name} including zip codes ${area.zipCodes.join(', ')}.` },
    { question: `How quickly can you respond to emergencies in ${area.name}?`, answer: `For emergencies in ${area.name}, we typically respond within 2-4 hours.` },
    { question: `Do you charge extra for service in ${area.name}?`, answer: `No, there are no additional travel charges for ${area.name}. Our standard $89 diagnostic fee applies.` },
  ];
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Service Areas', url: '/our-service-area' }, { name: area.name, url: `/areas/${area.slug}` }];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero title={`Appliance Repair in ${area.name}, NJ`} subtitle={`Serving ${area.county} County`} description={`Premium appliance repair services for ${area.name} residents.`} image={images.kitchen} showCTA={true} overlay="gradient" height="medium" align="left" />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a><span className="text-gray-300">/</span>
              <a href="/our-service-area" className="text-gray-500 hover:text-[#D4AF37]">Service Areas</a><span className="text-gray-300">/</span>
              <span className="text-[#D4AF37]">{area.name}</span>
            </nav>
          </div>
        </div>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading subtitle={`${area.county} County, ${area.state}`} title={`Trusted Appliance Repair in ${area.name}`} align="left" />
                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  <p className="text-gray-600 leading-relaxed">Our factory-certified technicians have been serving {area.name} homeowners for over 25 years.</p>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 mt-8">
                  <div className="text-center"><div className="font-serif text-3xl text-[#D4AF37]">25+</div><div className="text-gray-500 text-xs uppercase tracking-wider mt-1">Years Serving {area.name}</div></div>
                  <div className="text-center"><div className="font-serif text-3xl text-[#D4AF37]">500+</div><div className="text-gray-500 text-xs uppercase tracking-wider mt-1">Local Customers</div></div>
                  <div className="text-center"><div className="font-serif text-3xl text-[#D4AF37]">4.9</div><div className="text-gray-500 text-xs uppercase tracking-wider mt-1">Star Rating</div></div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden"><img src={images.living} alt={`Luxury home in ${area.name}`} className="w-full h-full object-cover" /></div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-[#D4AF37] hidden lg:block" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Our Services" title={`Appliance Repair Services in ${area.name}`} align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.slice(0, 6).map((service) => <ServiceCard key={service.id} service={service} variant="default" />)}
            </div>
            <div className="text-center mt-12"><CTAButton href="/services" variant="outline" size="lg" icon="arrow">View All Services</CTAButton></div>
          </div>
        </section>

        <section className="py-16 bg-white border-y border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">Brands We Service in {area.name}</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {brands.slice(0, 8).map((brand, i) => <span key={i} className="text-gray-400 text-lg font-serif hover:text-[#D4AF37] transition-colors cursor-default">{brand.name}</span>)}
            </div>
          </div>
        </section>

        {areaTestimonials.length > 0 && (
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6">
              <SectionHeading subtitle="Client Reviews" title={`What ${area.name} Residents Say`} align="center" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {areaTestimonials.map((t) => <TestimonialCard key={t.id} testimonial={t} variant="default" />)}
              </div>
            </div>
          </section>
        )}

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeading subtitle="Common Questions" title={`FAQs for ${area.name} Service`} align="left" />
                <p className="text-gray-600 mt-6 leading-relaxed">Find answers to common questions about our services in {area.name}.</p>
                <div className="mt-8"><CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">Call {businessInfo.phone}</CTAButton></div>
              </div>
              <div><FAQAccordion faqs={areaFaqs} variant="default" /></div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="We Also Serve" title="Other Service Areas" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {otherAreas.slice(0, 8).map((a) => (
                <a key={a.id} href={`/areas/${a.slug}`} className="group p-6 bg-white border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg text-black group-hover:text-[#D4AF37] transition-colors">{a.name}</h3>
                      <p className="text-gray-500 text-sm mt-1">{a.county} County</p>
                    </div>
                    <svg className="w-5 h-5 text-[#D4AF37] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">{area.name} Appliance Repair</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">Ready to Schedule Your Service?</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">Contact us today for expert appliance repair in {area.name}.</p>
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

export default AreaPage;
