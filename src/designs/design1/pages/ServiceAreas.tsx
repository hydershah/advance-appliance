'use client';

import React from 'react';
import { Header, Footer, Hero, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, serviceAreas, images } from '../data/content';

const ServiceAreas: React.FC = () => {
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Our Service Area', url: '/our-service-area' }];

  // Group areas by county
  const monmouthAreas = serviceAreas.filter(a => a.county === 'Monmouth');
  const middlesexAreas = serviceAreas.filter(a => a.county === 'Middlesex');

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero
          title="Our Service Area"
          subtitle="Serving Central New Jersey"
          description="We provide professional appliance repair services throughout Monmouth and Middlesex Counties. Same-day service available."
          image={images.serviceAreas}
          showCTA={false}
          overlay="gradient"
          height="medium"
          align="center"
        />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a>
              <span className="text-gray-300">/</span>
              <span className="text-[#D4AF37]">Our Service Area</span>
            </nav>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                Advanced Appliance Repair Service is headquartered in Morganville, NJ and proudly
                serves the communities of Monmouth and Middlesex Counties in Central New Jersey.
                With over 30 years of experience, we provide fast, reliable appliance repair services
                to residential customers throughout the region.
              </p>
            </div>
          </div>
        </section>

        {/* Monmouth County */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Monmouth County"
              title="Monmouth County Service Areas"
              description={`We serve ${monmouthAreas.length} communities throughout Monmouth County.`}
              align="center"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-16">
              {monmouthAreas.map((area) => (
                <a
                  key={area.id}
                  href={`/areas/${area.slug}`}
                  className="group bg-white p-6 border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 text-center"
                >
                  <h4 className="font-serif text-base text-black group-hover:text-[#D4AF37] transition-colors">
                    {area.name}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">{area.zipCodes[0]}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Middlesex County */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Middlesex County"
              title="Middlesex County Service Areas"
              description={`We serve ${middlesexAreas.length} communities throughout Middlesex County.`}
              align="center"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-16">
              {middlesexAreas.map((area) => (
                <a
                  key={area.id}
                  href={`/areas/${area.slug}`}
                  className="group bg-white p-6 border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 text-center"
                >
                  <h4 className="font-serif text-base text-black group-hover:text-[#D4AF37] transition-colors">
                    {area.name}
                  </h4>
                  <p className="text-gray-400 text-xs mt-1">{area.zipCodes[0]}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Service Info */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  subtitle="Local Service"
                  title="Your Neighborhood Appliance Experts"
                  align="left"
                />
                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 leading-relaxed">
                    As a locally-owned and operated business based in Morganville, we understand
                    the needs of Central New Jersey homeowners. Our technicians live and work in
                    the communities we serve, allowing us to provide fast response times and
                    personalized service.
                  </p>
                  <ul className="space-y-4">
                    {[
                      'Same-day and next-day appointments available',
                      'No extra charge for evening or weekend service',
                      'Factory-trained technicians for all major brands',
                      'Local office with 24/7 live operators',
                      'Over 30 years serving Monmouth & Middlesex Counties',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-white p-8 border border-gray-100">
                <h3 className="font-serif text-2xl text-black mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#D4AF37] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600">{businessInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#D4AF37] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-gray-600">Local: {businessInfo.phone}</p>
                      <p className="text-gray-600">Toll-Free: {businessInfo.tollFree}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-[#D4AF37] mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-600">Monday - Sunday: {businessInfo.hours.weekdays}</p>
                      <p className="text-gray-600">Live Operators: {businessInfo.hours.liveOperators}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Schedule Today</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
                Need Appliance Repair in Your Area?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Schedule your appointment today for service tomorrow. Our technicians are ready to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">
                  Call {businessInfo.phone}
                </CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg" icon="arrow">
                  Request Service
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceAreas;
