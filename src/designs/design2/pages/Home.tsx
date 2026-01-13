import React from 'react';
import {
  Header,
  Footer,
  Hero,
  ServiceCard,
  TestimonialCarousel,
  SectionHeading,
  CTAButton,
  LocalBusinessSchema,
} from '../components';
import { businessInfo, services, testimonials, serviceAreas, trustBadges, brands, images } from '../data/content';

const Home: React.FC = () => {
  const highlights = [
    'Factory-certified on all major luxury brands',
    'Same-day emergency service available',
    'Genuine OEM parts with 90-day warranty',
    'Transparent pricing with no hidden fees',
  ];

  return (
    <>
      <LocalBusinessSchema page="home" />
      <Header />
      <main className="bg-modern-cream-50 text-modern-navy-900">
        <Hero
          title="Exceptional Care for Luxury Appliances"
          subtitle="Premium Repair Services"
          description="Factory-certified technicians specializing in Sub-Zero, Viking, Wolf, and Thermador. Same-day service available throughout New Jersey."
          image={images.hero}
          showCTA={true}
          overlay="gradient"
          height="full"
          align="left"
        />

        <section className="relative py-16">
          <div className="absolute inset-0 bg-modern-cream-100" />
          <div className="container mx-auto px-6 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.title}
                  className="rounded-2xl border border-modern-navy-900/10 bg-white/80 p-6 text-center shadow-sm animate-fade-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-modern-navy-900 text-modern-cream-50 flex items-center justify-center">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-[var(--font-bebas)] text-xl tracking-[0.08em]">{badge.title}</h3>
                  <p className="mt-2 text-xs text-modern-navy-700 font-[var(--font-poppins)]">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-modern-navy-900 text-modern-cream-50">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-[0.4em] text-modern-gold-200 font-[var(--font-poppins)] mb-6">
              Authorized Service for Premium Brands
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
              {brands.slice(0, 10).map((brand) => (
                <span key={brand.name} className="text-modern-cream-100/70 text-sm uppercase tracking-[0.3em] font-[var(--font-poppins)]">
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Our Expertise"
              title="Premium Appliance Repair Services"
              description="From refrigerators to cooktops, our factory-certified technicians provide expert repair services for all your luxury appliances."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.slice(0, 6).map((service, index) => (
                <div key={service.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.08}s` }}>
                  <ServiceCard service={service} variant="default" />
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <CTAButton href="/services" variant="outline" size="lg" icon="arrow">
                View All Services
              </CTAButton>
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-6 -left-6 h-full w-full border border-modern-navy-900/20" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={images.kitchen} alt="Luxury kitchen" className="w-full h-full object-cover" />
                </div>
              </div>
              <div>
                <SectionHeading subtitle="Why Choose Us" title="25+ Years of Excellence in Luxury Appliance Care" align="left" />
                <div className="mt-8 space-y-4 text-modern-charcoal font-[var(--font-poppins)]">
                  <p>
                    Advanced Appliance Repair Service has been the trusted choice for discerning homeowners throughout New Jersey since 1998.
                  </p>
                  <ul className="space-y-3">
                    {highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-modern-navy-900" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <CTAButton href="/about" variant="secondary" size="lg" icon="arrow">
                    Learn More About Us
                  </CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Client Testimonials"
              title="Trusted by Homeowners Across New Jersey"
              description="Discover why discerning homeowners choose Advanced Appliance for their luxury appliance care."
              align="center"
            />
            <div className="mt-16 max-w-5xl mx-auto">
              <TestimonialCarousel testimonials={testimonials} autoPlay={true} interval={7000} />
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Service Areas"
              title="Serving New Jersey's Premier Communities"
              description="We provide premium appliance repair services throughout Essex, Union, Morris, and Monmouth counties."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {serviceAreas.map((area) => (
                <a
                  key={area.id}
                  href={`/areas/${area.slug}`}
                  className="group rounded-2xl border border-modern-navy-900/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] text-modern-navy-900">
                        {area.name}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mt-2">
                        {area.county} County, {area.state}
                      </p>
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

        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${images.living})` }} />
          <div className="absolute inset-0 bg-modern-navy-900/80" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-modern-cream-50">
              <span className="text-xs uppercase tracking-[0.4em] text-modern-gold-200 font-[var(--font-poppins)]">Ready to Get Started?</span>
              <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-5xl tracking-[0.08em]">
                Experience the Difference of Expert Care
              </h2>
              <p className="mt-6 text-modern-cream-100/80 font-[var(--font-poppins)]">
                Join hundreds of satisfied homeowners who trust Advanced Appliance for their luxury appliance needs.
              </p>
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

export default Home;
