import React from 'react';
import { Header, Footer, Hero, ServiceCard, SectionHeading, CTAButton, FAQAccordion, ContactForm, ServiceSchema, BreadcrumbSchema, FAQSchema } from '../components';
import { businessInfo, services, brands } from '../data/content';

interface ServiceDetailProps { serviceSlug?: string; }

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceSlug = 'refrigerator-repair' }) => {
  const service = services.find((s) => s.slug === serviceSlug) ?? services[0];
  if (!service) return null;
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Services', url: '/services' }, { name: service.name, url: `/services/${service.slug}` }];

  return (
    <>
      <ServiceSchema serviceName={service.name} serviceDescription={service.description} serviceUrl={`https://advancedappliancerepair.com/services/${service.slug}`} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={service.faqs} />
      <Header />
      <main>
        <Hero title={service.name} subtitle="Expert Repair Service" description={service.shortDescription} image={service.image} showCTA={true} overlay="gradient" height="medium" align="left" />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a><span className="text-gray-300">/</span>
              <a href="/services" className="text-gray-500 hover:text-[#D4AF37]">Services</a><span className="text-gray-300">/</span>
              <span className="text-[#D4AF37]">{service.name}</span>
            </nav>
          </div>
        </div>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <div className="mb-16">
                  <div className="w-16 h-px bg-[#D4AF37] mb-8" />
                  <h2 className="font-serif text-3xl md:text-4xl text-black font-light mb-8">Expert {service.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                </div>

                <div className="mb-16">
                  <h3 className="font-serif text-2xl text-black mb-8">What We Offer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature: string, i: number) => (
                      <div key={i} className="flex items-start p-4 border border-gray-100 hover:border-[#D4AF37] transition-colors">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-16">
                  <h3 className="font-serif text-2xl text-black mb-8">Brands We Service</h3>
                  <div className="flex flex-wrap gap-4">
                    {brands.slice(0, 8).map((brand, i) => <span key={i} className="px-4 py-2 border border-gray-200 text-gray-600 text-sm hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors">{brand.name}</span>)}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-2xl text-black mb-8">Frequently Asked Questions</h3>
                  <FAQAccordion faqs={service.faqs} variant="default" />
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-gray-50 p-8 border border-gray-100">
                    <h4 className="font-serif text-xl text-black mb-6">Schedule Your Repair</h4>
                    <p className="text-gray-600 text-sm mb-6">Contact us today for expert {service.name.toLowerCase()}.</p>
                    <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="block w-full px-6 py-4 bg-[#D4AF37] text-black text-center text-sm uppercase tracking-wider hover:bg-[#C4A030] transition-colors mb-4">{businessInfo.phone}</a>
                    <a href="/contact" className="block w-full px-6 py-4 border border-black text-black text-center text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors">Book Online</a>
                  </div>

                  <div className="bg-black text-white p-8 text-center">
                    <svg className="w-12 h-12 mx-auto text-[#D4AF37] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    <h4 className="font-serif text-xl mb-2">90-Day Warranty</h4>
                    <p className="text-white/70 text-sm">All repairs backed by our comprehensive warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <SectionHeading subtitle="Get in Touch" title="Request Your Repair" description="Fill out the form below and we will contact you." align="center" />
              <div className="mt-12"><ContactForm variant="default" /></div>
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Related Services" title="Other Services You May Need" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {relatedServices.map((s) => <ServiceCard key={s.id} service={s} variant="default" />)}
            </div>
            <div className="text-center mt-12"><CTAButton href="/services" variant="outline" size="lg" icon="arrow">View All Services</CTAButton></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;
