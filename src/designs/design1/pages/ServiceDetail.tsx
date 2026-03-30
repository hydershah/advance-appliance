'use client';

import React from 'react';
import Link from 'next/link';
import { Header, Footer, Hero, SectionHeading, FAQAccordion, ContactForm, ServiceSchema, BreadcrumbSchema, FAQSchema } from '../components';
import { businessInfo, services as staticServices, brands } from '../data/content';
import type { Service } from '../types';

interface ServiceDetailProps { serviceSlug?: string; service?: Service; }

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceSlug = 'refrigerator-repair', service: serviceProp }) => {
  const service = serviceProp || staticServices.find((s) => s.slug === serviceSlug) || staticServices[0];
  if (!service) return null;
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: service.name, url: `/services/${service.slug}` }];

  return (
    <>
      <ServiceSchema serviceName={service.name} serviceDescription={service.description} serviceUrl={`https://advancedappliancerepair.com/services/${service.slug}`} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={service.faqs} />
      <Header />
      <main>
        <Hero title={service.name} subtitle="Certified Repair Service" description={service.shortDescription} image={service.image} showCTA={true} overlay="gradient" height="medium" align="left" />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</Link><span className="text-gray-300">/</span>
              <Link href="/services" className="text-gray-500 hover:text-[#D4AF37]">Services</Link><span className="text-gray-300">/</span>
              <span className="text-[#D4AF37]">{service.name}</span>
            </nav>
          </div>
        </div>

        {/* Main Content Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              <div className="lg:col-span-2">
                {/* Introduction */}
                <div className="mb-12">
                  <div className="w-16 h-px bg-[#D4AF37] mb-8" />
                  <h2 className="font-serif text-3xl md:text-4xl text-black font-light mb-6">Professional {service.name} in Monmouth & Middlesex Counties</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  {service.longDescription && (
                    <div className="prose prose-gray max-w-none">
                      {service.longDescription.split('\n\n').map((paragraph, i) => (
                        <p key={i} className="text-gray-600 leading-relaxed mb-4">{paragraph}</p>
                      ))}
                    </div>
                  )}
                </div>

                {/* What We Offer */}
                <div className="mb-12">
                  <h3 className="font-serif text-2xl text-black mb-6">What We Offer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start p-4 border border-gray-100 hover:border-[#D4AF37] transition-colors">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Our Repair Process */}
                {service.repairProcess && service.repairProcess.length > 0 && (
                  <div className="mb-12">
                    <h3 className="font-serif text-2xl text-black mb-6">Our Repair Process</h3>
                    <div className="space-y-4">
                      {service.repairProcess.map((step, i) => (
                        <div key={i} className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-[#D4AF37] text-black rounded-full flex items-center justify-center font-semibold text-sm mr-4">
                            {i + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Brands We Service */}
                <div className="mb-12">
                  <h3 className="font-serif text-2xl text-black mb-6">Brands We Service</h3>
                  <div className="flex flex-wrap gap-3">
                    {(service.brandNames || brands.slice(0, 12).map(b => b.name)).map((name, i) => (
                      <span key={i} className="px-4 py-2 border border-gray-200 text-gray-600 text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm mt-4">Plus many more brands - call us to confirm we service your appliance.</p>
                </div>

                {/* FAQs */}
                <div className="mb-12">
                  <h3 className="font-serif text-2xl text-black mb-6">Frequently Asked Questions</h3>
                  <FAQAccordion faqs={service.faqs} variant="default" />
                </div>

                {/* Prevention Tips */}
                {service.preventionTips && service.preventionTips.length > 0 && (
                  <div className="bg-green-50 border border-green-100 p-6 rounded-lg">
                    <h3 className="font-serif text-2xl text-black mb-4 flex items-center">
                      <svg className="w-6 h-6 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                      </svg>
                      Maintenance Tips to Prevent Problems
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.preventionTips.map((tip, i) => (
                        <li key={i} className="flex items-start text-gray-700">
                          <svg className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                          </svg>
                          <span className="text-sm">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-6">
                  <div className="bg-gray-50 p-6 border border-gray-100">
                    <h4 className="font-serif text-xl text-black mb-4">Schedule Your Repair</h4>
                    <p className="text-gray-600 text-sm mb-4">Contact us today for professional {service.name.toLowerCase()} in Monmouth and Middlesex Counties.</p>
                    <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="block w-full px-6 py-4 bg-[#D4AF37] text-black text-center text-sm uppercase tracking-wider hover:bg-[#C4A030] transition-colors mb-3">{businessInfo.phone}</a>
                    <a href="/contact" className="block w-full px-6 py-4 border border-black text-black text-center text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors">Book Online</a>
                  </div>

                  <div className="bg-black text-white p-6 text-center">
                    <svg className="w-10 h-10 mx-auto text-[#D4AF37] mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    <h4 className="font-serif text-lg mb-2">Up to 1-Year Warranty</h4>
                    <p className="text-white/70 text-sm">All repairs backed by our comprehensive parts and labor warranty</p>
                  </div>

                  <div className="bg-white p-6 border border-gray-100">
                    <h4 className="font-serif text-lg text-black mb-4">Why Choose Us?</h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-gray-700">30+ years of experience since 1992</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-gray-700">Factory-trained certified technicians</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-gray-700">Genuine OEM replacement parts</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-gray-700">Flexible scheduling availability</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-gray-700">$100 diagnostic fee</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="w-4 h-4 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-gray-700">24/7 live operators available</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#D4AF37]/10 p-6 border border-[#D4AF37]/30">
                    <h4 className="font-serif text-lg text-black mb-3">Service Areas</h4>
                    <p className="text-gray-600 text-sm mb-2">Proudly serving Monmouth and Middlesex Counties including:</p>
                    <p className="text-gray-700 text-sm">Morganville, Marlboro, Holmdel, Red Bank, Freehold, Old Bridge, Edison, Woodbridge, and 30+ more communities.</p>
                    <a href="/our-service-area" className="text-[#D4AF37] text-sm font-medium mt-3 inline-block hover:underline">View all service areas →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <SectionHeading subtitle="Get in Touch" title={`Request ${service.name}`} description="Fill out the form below and we will contact you to schedule your repair appointment." align="center" />
              <div className="mt-10"><ContactForm variant="default" /></div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Related Services" title="Other Services You May Need" align="center" />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12 max-w-4xl mx-auto">
              {(serviceProp ? staticServices : staticServices).filter((s) => s.slug !== service.slug).map((s) => (
                <Link key={s.id} href={`/services/${s.slug}`} className="group flex flex-col items-center text-center p-4 border border-gray-100 hover:border-[#D4AF37] transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center mb-3 text-gray-400 group-hover:text-[#D4AF37] transition-colors">
                    {s.icon === 'refrigerator' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" strokeWidth={1.5}/><line x1="5" y1="10" x2="19" y2="10" strokeWidth={1.5}/><line x1="10" y1="6" x2="10" y2="6.01" strokeWidth={2} strokeLinecap="round"/><line x1="10" y1="14" x2="10" y2="14.01" strokeWidth={2} strokeLinecap="round"/></svg>}
                    {s.icon === 'washer' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" strokeWidth={1.5}/><circle cx="12" cy="14" r="4" strokeWidth={1.5}/><circle cx="12" cy="14" r="1.5" strokeWidth={1.5}/><line x1="8" y1="6" x2="8" y2="6.01" strokeWidth={2} strokeLinecap="round"/><line x1="11" y1="6" x2="11" y2="6.01" strokeWidth={2} strokeLinecap="round"/></svg>}
                    {s.icon === 'dryer' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" strokeWidth={1.5}/><circle cx="12" cy="14" r="4" strokeWidth={1.5}/><path d="M10 13c1-1 2 1 3 0s2 1 3 0" strokeWidth={1.5} strokeLinecap="round"/><line x1="8" y1="6" x2="8" y2="6.01" strokeWidth={2} strokeLinecap="round"/></svg>}
                    {s.icon === 'dishwasher' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" strokeWidth={1.5}/><line x1="4" y1="7" x2="20" y2="7" strokeWidth={1.5}/><path d="M9 12h6M9 15h6M9 18h6" strokeWidth={1} strokeLinecap="round"/><line x1="8" y1="4.5" x2="8" y2="4.51" strokeWidth={2} strokeLinecap="round"/></svg>}
                    {s.icon === 'oven' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" strokeWidth={1.5}/><rect x="7" y="10" width="10" height="9" rx="1" strokeWidth={1.5}/><line x1="8" y1="6" x2="8" y2="6.01" strokeWidth={2} strokeLinecap="round"/><line x1="12" y1="6" x2="12" y2="6.01" strokeWidth={2} strokeLinecap="round"/><line x1="16" y1="6" x2="16" y2="6.01" strokeWidth={2} strokeLinecap="round"/></svg>}
                    {s.icon === 'cooktop' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="2" strokeWidth={1.5}/><circle cx="8" cy="12" r="2" strokeWidth={1.5}/><circle cx="16" cy="12" r="2" strokeWidth={1.5}/></svg>}
                    {s.icon === 'range' && <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" strokeWidth={1.5}/><rect x="7" y="11" width="10" height="8" rx="1" strokeWidth={1.5}/><circle cx="8" cy="6" r="1.5" strokeWidth={1.5}/><circle cx="16" cy="6" r="1.5" strokeWidth={1.5}/></svg>}
                  </div>
                  <span className="text-xs text-gray-600 group-hover:text-[#D4AF37] transition-colors font-medium">{s.name.replace(' Repair', '')}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;
