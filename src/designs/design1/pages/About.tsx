'use client';

import React from 'react';
import { Header, Footer, Hero, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, certifications, images } from '../data/content';

const About: React.FC = () => {
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }];
  const stats = [{ value: '25+', label: 'Years of Experience' }, { value: '10,000+', label: 'Repairs Completed' }, { value: '98%', label: 'Customer Satisfaction' }, { value: '24hr', label: 'Response Time' }];
  const values = [
    { title: 'Integrity', description: 'We believe in honest assessments and transparent pricing.' },
    { title: 'Excellence', description: 'We pursue excellence in every repair using genuine parts.' },
    { title: 'Reliability', description: 'When we make an appointment, we keep it.' },
    { title: 'Community', description: 'We are proud to serve families in Monmouth and Middlesex Counties.' },
  ];

  return (
    <>
      <LocalBusinessSchema page="about" />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero title="Our Story" subtitle="About Us" description="For over 25 years, Advanced Appliance Repair Service has been the trusted choice for high-end appliance care." image={images.about} showCTA={false} overlay="gradient" height="medium" align="center" />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a><span className="text-gray-300">/</span><span className="text-[#D4AF37]">About Us</span>
            </nav>
          </div>
        </div>

        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => <div key={i} className="text-center"><div className="font-serif text-4xl lg:text-5xl text-[#D4AF37] mb-2">{stat.value}</div><div className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</div></div>)}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden"><img src={images.kitchen} alt="Modern kitchen" className="w-full h-full object-cover" /></div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#D4AF37] hidden lg:block" />
                <div className="absolute top-8 -left-8 bg-[#D4AF37] text-black p-8 hidden lg:block"><span className="font-serif text-4xl block">1998</span><span className="text-xs uppercase tracking-wider">Est.</span></div>
              </div>
              <div>
                <SectionHeading subtitle="Our Story" title="A Legacy of Excellence" align="left" />
                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 leading-relaxed">Advanced Appliance Repair Service was founded in 1998 by Michael Richardson, a factory-trained technician with a passion for high-end appliances.</p>
                  <p className="text-gray-600 leading-relaxed">From our humble beginnings with a single service van, we have grown into the region's most trusted name in appliance repair.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Our Values" title="What We Stand For" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {values.map((value, i) => (
                <div key={i} className="bg-white p-8 border border-gray-100 hover:border-[#D4AF37] transition-colors text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <h3 className="font-serif text-xl text-black mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Credentials" title="Certifications & Accreditations" align="center" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
              {certifications.map((cert, i) => (
                <div key={i} className="bg-white p-6 border border-gray-100 hover:border-[#D4AF37] transition-colors text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[#D4AF37] text-[#D4AF37]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                  </div>
                  <h4 className="font-serif text-sm text-black mb-1">{cert.name}</h4>
                  <p className="text-gray-500 text-xs">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Get Started</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">Ready to Experience the Difference?</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">Contact us today and discover why discerning homeowners trust Advanced Appliance.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">Call {businessInfo.phone}</CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg" icon="arrow">Contact Us</CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
