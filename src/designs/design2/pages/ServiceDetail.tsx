import React from 'react';
import {
  Header,
  Footer,
  Hero,
  ServiceCard,
  SectionHeading,
  CTAButton,
  FAQAccordion,
  ContactForm,
  ServiceSchema,
  BreadcrumbSchema,
  FAQSchema,
} from '../components';
import { businessInfo, services, brands } from '../data/content';

interface ServiceDetailProps {
  serviceSlug?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceSlug = 'refrigerator-repair' }) => {
  const service = services.find((s) => s.slug === serviceSlug) ?? services[0];
  if (!service) return null;
  const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3);
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.name, url: `/services/${service.slug}` },
  ];

  return (
    <>
      <ServiceSchema serviceName={service.name} serviceDescription={service.description} serviceUrl={`https://advancedappliancerepair.com/services/${service.slug}`} />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={service.faqs} />
      <Header />
      <main className="bg-modern-cream-50 text-modern-navy-900">
        <Hero
          title={service.name}
          subtitle="Expert Repair Service"
          description={service.shortDescription}
          image={service.image}
          showCTA={true}
          overlay="gradient"
          height="medium"
          align="left"
        />

        <section className="bg-modern-cream-100 py-4">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
              <a href="/" className="text-modern-navy-700 hover:text-modern-navy-900">Home</a>
              <span className="text-modern-navy-400">/</span>
              <a href="/services" className="text-modern-navy-700 hover:text-modern-navy-900">Services</a>
              <span className="text-modern-navy-400">/</span>
              <span className="text-modern-navy-900">{service.name}</span>
            </nav>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2">
                <div className="mb-16">
                  <SectionHeading subtitle="Service Overview" title={`Expert ${service.name}`} align="left" />
                  <p className="mt-6 text-modern-charcoal font-[var(--font-poppins)] leading-relaxed">{service.description}</p>
                </div>

                <div className="mb-16">
                  <h3 className="font-[var(--font-bebas)] text-3xl tracking-[0.08em] mb-8">What We Offer</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature: string) => (
                      <div key={feature} className="flex items-start p-4 rounded-2xl border border-modern-navy-900/10 bg-white">
                        <svg className="w-5 h-5 text-modern-navy-900 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-modern-charcoal font-[var(--font-poppins)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-16">
                  <h3 className="font-[var(--font-bebas)] text-3xl tracking-[0.08em] mb-8">Brands We Service</h3>
                  <div className="flex flex-wrap gap-3">
                    {brands.slice(0, 8).map((brand) => (
                      <span key={brand.name} className="px-4 py-2 rounded-full border border-modern-navy-900/10 text-modern-navy-700 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
                        {brand.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-[var(--font-bebas)] text-3xl tracking-[0.08em] mb-8">Frequently Asked Questions</h3>
                  <FAQAccordion faqs={service.faqs} variant="bordered" />
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-32 space-y-8">
                  <div className="bg-white p-8 border border-modern-navy-900/10 rounded-2xl">
                    <h4 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] mb-4">Schedule Your Repair</h4>
                    <p className="text-modern-charcoal text-sm mb-6 font-[var(--font-poppins)]">Contact us today for expert {service.name.toLowerCase()}.</p>
                    <a
                      href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                      className="block w-full px-6 py-4 rounded-full bg-modern-navy-900 text-white text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] text-center mb-4"
                    >
                      {businessInfo.phone}
                    </a>
                    <a
                      href="/contact"
                      className="block w-full px-6 py-4 rounded-full border border-modern-navy-900 text-modern-navy-900 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] text-center"
                    >
                      Book Online
                    </a>
                  </div>

                  <div className="bg-modern-navy-900 text-modern-cream-50 p-8 text-center rounded-2xl">
                    <svg className="w-12 h-12 mx-auto text-modern-gold-200 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <h4 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em]">90-Day Warranty</h4>
                    <p className="mt-2 text-modern-cream-100/70 text-sm font-[var(--font-poppins)]">All repairs backed by our comprehensive warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <SectionHeading subtitle="Get in Touch" title="Request Your Repair" description="Fill out the form below and we will contact you." align="center" />
              <div className="mt-12">
                <ContactForm variant="default" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Related Services" title="Other Services You May Need" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {relatedServices.map((s) => (
                <ServiceCard key={s.id} service={s} variant="default" />
              ))}
            </div>
            <div className="text-center mt-12">
              <CTAButton href="/services" variant="outline" size="lg" icon="arrow">
                View All Services
              </CTAButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServiceDetail;
