'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header, Footer, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, certifications as staticCertifications, images } from '../data/content';
import type { Certification } from '../types';

interface ExpertRepairsSection {
  subtitle?: string;
  title?: string;
  paragraphs?: string[];
}

interface AboutProps {
  certifications?: Certification[];
  expertRepairs?: ExpertRepairsSection;
}

const defaultExpertRepairs: ExpertRepairsSection = {
  subtitle: 'What We Do',
  title: 'Expert Repairs for Every Brand',
  paragraphs: [
    "At Advanced Appliance, we've been professionally repairing kitchen and laundry appliances for over 30 years. Our technicians are trained to service all major domestic and international brands, and we're experienced with virtually every model on the market.",
    "From washers and dryers to refrigerators, dishwashers, cooktops, and ovens\u2014gas or electric\u2014we've seen it all and fixed it all.",
    "And it doesn't matter where you purchased your appliance. If it's in your home, we can repair it.",
    "Every repair we perform uses new, genuine manufacturer parts whenever possible. These original components are backed by the manufacturer's warranty, giving you confidence that your appliance is being repaired with the same quality parts it was built with. In addition, our repairs include a matching labor warranty, so you know the job is done right.",
    "To keep your downtime to a minimum, we partner with the nation's leading appliance parts suppliers, allowing us to source most parts quickly\u2014often within just a few days, not weeks.",
    "No matter the brand in your home, you can count on fast, reliable, professional repairs from technicians who know appliances inside and out.",
  ],
};

const About: React.FC<AboutProps> = ({ certifications: certificationsProp, expertRepairs: expertRepairsProp }) => {
  const certifications = certificationsProp || staticCertifications;
  const expertRepairs = expertRepairsProp || defaultExpertRepairs;
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }];
  const stats = [{ value: '30+', label: 'Years of Experience' }, { value: '250,000+', label: 'Repairs Completed' }, { value: '98%', label: 'Customer Satisfaction' }, { value: '24hr', label: 'Response Time' }];
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
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <iframe src="https://www.google.com/maps?q=23+Reids+Hill+Rd,+Morganville,+NJ+07751&z=10&output=embed" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Our Service Area" className="grayscale opacity-30" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex justify-between items-center">
              <div className="w-64 lg:w-80 aspect-[3/4] overflow-hidden rounded shadow-lg shrink-0 relative"><Image src="/images/founder-1.webp" alt="Advanced Appliance Repair Service founder" fill className="object-cover object-top" sizes="(max-width: 1024px) 256px, 320px" /></div>
              <div className="w-64 lg:w-80 aspect-[3/4] overflow-hidden rounded shadow-lg shrink-0 relative"><Image src="/team/technician-doorstep.webp" alt="Advanced Appliance technician providing doorstep service" fill className="object-cover object-top" sizes="(max-width: 1024px) 256px, 320px" /></div>
            </div>
          </div>
        </section>

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</Link><span className="text-gray-300">/</span><span className="text-[#D4AF37]">About Us</span>
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
                <div className="aspect-[4/5] overflow-hidden relative"><Image src={images.kitchen} alt="Modern kitchen" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#D4AF37] hidden lg:block" />
                <div className="absolute top-8 -left-8 bg-[#D4AF37] text-black p-8 hidden lg:block"><span className="font-serif text-4xl block">1992</span><span className="text-xs uppercase tracking-wider">Est.</span></div>
              </div>
              <div>
                <SectionHeading subtitle="Our Story" title="A Legacy of Excellence" align="left" />
                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 leading-relaxed">For over 30 years, homeowners throughout Central New Jersey have trusted us to keep their kitchens and laundry rooms running smoothly. Based in Morganville in Marlboro Township, we&apos;re proud to be a local company that believes great service is built on experience, precision, and treating customers the right way.</p>
                  <p className="text-gray-600 leading-relaxed">Our company was founded in 1992 by mechanical and electrical engineers who recognized the need for a higher level of professionalism in appliance repair. Their vision was simple: bring real technical expertise to the service industry and repair appliances the way manufacturers intended.</p>
                  <p className="text-gray-600 leading-relaxed">Today, that same standard guides everything we do.</p>
                  <p className="text-gray-600 leading-relaxed">We are not a franchise and not a referral service. When you call us, you&apos;re getting experienced professionals who specialize in appliance diagnostics and repair—not general handymen. As a factory-authorized service provider, our technicians meet strict manufacturer standards and are trained to get the job done right the first time.</p>
                  <p className="text-gray-600 leading-relaxed">We believe details matter. From careful diagnostics to a clean, professional repair, our goal is simple: fix the problem properly and leave your home exactly the way we found it.</p>
                  <p className="text-gray-600 leading-relaxed">Customers choose us because we offer reliable next-day in-home service, manufacturer-authorized repairs, and work that is fully warranted for your peace of mind.</p>
                  <p className="text-gray-600 leading-relaxed">And of course, we are licensed, bonded, and insured—because your home deserves nothing less.</p>
                  <p className="text-gray-600 leading-relaxed">For three decades and counting, we&apos;ve built our reputation one satisfied customer at a time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-3">
            <div className="aspect-square overflow-hidden rounded"><img src="/team/technician-oven-repair.webp" alt="Oven repair in progress" className="w-full h-full object-cover object-center" /></div>
            <div className="aspect-square overflow-hidden rounded"><img src="/team/technician-doorstep.webp" alt="Technician arriving for service" className="w-full h-full object-cover object-top" /></div>
            <div className="aspect-square overflow-hidden rounded"><img src="/team/technician-dishwasher-action.webp" alt="Dishwasher repair in progress" className="w-full h-full object-cover object-center" /></div>
          </div>
        </div>

        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle={expertRepairs.subtitle || 'What We Do'} title={expertRepairs.title || 'Expert Repairs for Every Brand'} align="center" />
            <div className="max-w-4xl mx-auto mt-12 space-y-6">
              {(expertRepairs.paragraphs || []).map((text, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{text}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Appliances" title="What We Repair" align="center" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
              {[
                { name: 'Refrigerators', image: images.refrigerator, link: '/services/refrigerator-repair' },
                { name: 'Washers', image: images.washer, link: '/services/washer-repair' },
                { name: 'Dryers', image: images.dryer, link: '/services/dryer-repair' },
                { name: 'Dishwashers', image: images.dishwasher, link: '/services/dishwasher-repair' },
                { name: 'Ovens', image: images.oven, link: '/services/oven-repair' },
                { name: 'Cooktops', image: images.cooktop, link: '/services/cooktop-repair' },
              ].map((appliance, i) => (
                <Link key={i} href={appliance.link} className="group text-center">
                  <div className="aspect-[4/3] overflow-hidden mb-4 bg-white border border-gray-100 group-hover:border-[#D4AF37] transition-all duration-300 flex items-center justify-center">
                    <img src={appliance.image} alt={appliance.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <h4 className="font-serif text-lg text-black group-hover:text-[#D4AF37] transition-colors">{appliance.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-md mx-auto">
              <div className="aspect-video overflow-hidden rounded shadow-lg"><img src="/Advanced-Appliance-Repair-Service.webp" alt="Advanced Appliance service fleet" className="w-full h-full object-cover" /></div>
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
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">Experience the Difference?</h2>
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
