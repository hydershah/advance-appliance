import React from 'react';
import {
  Header,
  Footer,
  Hero,
  ServiceCard,
  SectionHeading,
  CTAButton,
  LocalBusinessSchema,
  BreadcrumbSchema,
} from '../components';
import { businessInfo, services, brands, trustBadges, images } from '../data/content';

const Services: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: 'https://advancedappliancerepair.com/' },
    { name: 'Services', url: 'https://advancedappliancerepair.com/services' },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main className="bg-modern-cream-50 text-modern-navy-900">
        <Hero
          title="Our Repair Services"
          subtitle="Expert Solutions"
          description="Comprehensive repair services for all premium appliance brands."
          image={images.kitchen}
          showCTA={true}
          overlay="gradient"
          height="medium"
          align="center"
        />

        <section className="bg-modern-cream-100 py-4">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
              <a href="/" className="text-modern-navy-700 hover:text-modern-navy-900">Home</a>
              <span className="text-modern-navy-400">/</span>
              <span className="text-modern-navy-900">Services</span>
            </nav>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="What We Repair"
              title="Complete Appliance Repair Solutions"
              description="From refrigerators to cooktops, we service all major appliances."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {services.map((service, index) => (
                <div key={service.id} className="animate-fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                  <ServiceCard service={service} variant="minimal" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Signature Services"
              title="Specialized in High-End Appliances"
              align="center"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
              {services.slice(0, 4).map((service) => (
                <ServiceCard key={service.id} service={service} variant="featured" />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Brands We Service"
              title="Factory-Certified for Premium Brands"
              align="center"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-16">
              {brands.map((brand) => (
                <div key={brand.name} className="flex items-center justify-center rounded-2xl border border-modern-navy-900/10 bg-white p-6 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] text-modern-navy-700">
                  {brand.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-modern-navy-900 text-modern-cream-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustBadges.map((badge) => (
                <div key={badge.title} className="rounded-2xl border border-white/10 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-modern-gold-200 font-[var(--font-poppins)]">{badge.title}</p>
                  <p className="mt-3 text-sm text-modern-cream-100/70 font-[var(--font-poppins)]">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase tracking-[0.4em] text-modern-navy-700 font-[var(--font-poppins)]">Schedule Today</span>
              <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-5xl tracking-[0.08em]">Ready to Restore Your Appliance?</h2>
              <p className="mt-6 text-modern-charcoal font-[var(--font-poppins)]">Contact us today for expert diagnosis and repair.</p>
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

export default Services;
