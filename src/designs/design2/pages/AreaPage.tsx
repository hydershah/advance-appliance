import React from 'react';
import {
  Header,
  Footer,
  Hero,
  ServiceCard,
  SectionHeading,
  CTAButton,
  FAQAccordion,
  TestimonialCard,
  LocalBusinessSchema,
  BreadcrumbSchema,
} from '../components';
import { businessInfo, services, serviceAreas, testimonials, brands, images } from '../data/content';

interface AreaPageProps {
  areaSlug?: string;
}

const AreaPage: React.FC<AreaPageProps> = ({ areaSlug = 'short-hills' }) => {
  const area = serviceAreas.find((a) => a.slug === areaSlug) ?? serviceAreas[0];
  if (!area) return null;
  const otherAreas = serviceAreas.filter((a) => a.id !== area.id);
  const areaTestimonials = testimonials.filter((t) => t.location.toLowerCase().includes(area.name.toLowerCase()));
  const areaFaqs = [
    { question: `Do you offer same-day service in ${area.name}?`, answer: `Yes, we offer same-day service in ${area.name}. Call us before noon for best availability.` },
    { question: `What areas of ${area.name} do you cover?`, answer: `We serve all of ${area.name} including zip codes ${area.zipCodes.join(', ')}.` },
    { question: `How quickly can you respond to emergencies in ${area.name}?`, answer: `For emergencies in ${area.name}, we typically respond within 2-4 hours.` },
    { question: `Do you charge extra for service in ${area.name}?`, answer: `No, there are no additional travel charges for ${area.name}. Our standard $89 diagnostic fee applies.` },
  ];
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/areas' },
    { name: area.name, url: `/areas/${area.slug}` },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main className="bg-modern-cream-50 text-modern-navy-900">
        <Hero
          title={`Appliance Repair in ${area.name}, NJ`}
          subtitle={`Serving ${area.county} County`}
          description={`Premium appliance repair services for ${area.name} residents.`}
          image={images.kitchen}
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
              <a href="/areas" className="text-modern-navy-700 hover:text-modern-navy-900">Service Areas</a>
              <span className="text-modern-navy-400">/</span>
              <span className="text-modern-navy-900">{area.name}</span>
            </nav>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading subtitle={`${area.county} County, ${area.state}`} title={`Trusted Appliance Repair in ${area.name}`} align="left" />
                <div className="space-y-6 mt-8 text-modern-charcoal font-[var(--font-poppins)]">
                  <p>{area.description}</p>
                  <p>Our factory-certified technicians have been serving {area.name} homeowners for over 25 years.</p>
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-modern-navy-900/10 mt-8">
                  <div className="text-center">
                    <div className="font-[var(--font-bebas)] text-3xl tracking-[0.08em] text-modern-navy-900">25+</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mt-1">Years Serving {area.name}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-[var(--font-bebas)] text-3xl tracking-[0.08em] text-modern-navy-900">500+</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mt-1">Local Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-[var(--font-bebas)] text-3xl tracking-[0.08em] text-modern-navy-900">4.9</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mt-1">Star Rating</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -bottom-6 -left-6 h-full w-full border border-modern-navy-900/20" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={images.living} alt={`Luxury home in ${area.name}`} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Our Services" title={`Appliance Repair Services in ${area.name}`} align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.slice(0, 6).map((service) => (
                <ServiceCard key={service.id} service={service} variant="default" />
              ))}
            </div>
            <div className="text-center mt-12">
              <CTAButton href="/services" variant="outline" size="lg" icon="arrow">
                View All Services
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="py-16 bg-modern-navy-900 text-modern-cream-50">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-[0.4em] text-modern-gold-200 font-[var(--font-poppins)] mb-8">
              Brands We Service in {area.name}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
              {brands.slice(0, 8).map((brand) => (
                <span key={brand.name} className="text-modern-cream-100/70 text-sm uppercase tracking-[0.3em] font-[var(--font-poppins)]">
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {areaTestimonials.length > 0 && (
          <section className="py-24">
            <div className="container mx-auto px-6">
              <SectionHeading subtitle="Client Reviews" title={`What ${area.name} Residents Say`} align="center" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {areaTestimonials.map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} variant="default" />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeading subtitle="Common Questions" title={`FAQs for ${area.name} Service`} align="left" />
                <p className="text-modern-charcoal mt-6 leading-relaxed font-[var(--font-poppins)]">Find answers to common questions about our services in {area.name}.</p>
                <div className="mt-8">
                  <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">
                    Call {businessInfo.phone}
                  </CTAButton>
                </div>
              </div>
              <div>
                <FAQAccordion faqs={areaFaqs} variant="bordered" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="We Also Serve" title="Other Service Areas" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {otherAreas.map((a) => (
                <a key={a.id} href={`/areas/${a.slug}`} className="group rounded-2xl border border-modern-navy-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] text-modern-navy-900 group-hover:text-modern-navy-900 transition-colors">{a.name}</h3>
                      <p className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mt-2">{a.county} County</p>
                    </div>
                    <svg className="w-5 h-5 text-modern-navy-900 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-navy-900 text-modern-cream-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase tracking-[0.4em] text-modern-gold-200 font-[var(--font-poppins)]">{area.name} Appliance Repair</span>
              <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-5xl tracking-[0.08em]">Ready to Schedule Your Service?</h2>
              <p className="mt-6 text-modern-cream-100/80 font-[var(--font-poppins)]">Contact us today for expert appliance repair in {area.name}.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">
                  Call {businessInfo.phone}
                </CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg" icon="arrow">
                  Schedule Online
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

export default AreaPage;
