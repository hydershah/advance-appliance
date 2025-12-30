import React from 'react';
import { Header, Footer, Hero, ServiceCard, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, services, brands, images } from '../data/content';

const Services: React.FC = () => {
  const breadcrumbs = [{ name: 'Home', url: 'https://advancedappliancerepair.com/' }, { name: 'Services', url: 'https://advancedappliancerepair.com/services' }];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero title="Our Repair Services" subtitle="Expert Solutions" description="Comprehensive repair services for all premium appliance brands." image={images.kitchen} showCTA={true} overlay="gradient" height="medium" align="center" />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a><span className="text-gray-300">/</span><span className="text-[#D4AF37]">Services</span>
            </nav>
          </div>
        </div>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="What We Repair" title="Complete Appliance Repair Solutions" description="From refrigerators to cooktops, we service all major appliances." align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.map((service) => <ServiceCard key={service.id} service={service} variant="default" />)}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Featured Services" title="Specialized in High-End Appliances" align="center" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
              {services.slice(0, 4).map((service) => <ServiceCard key={service.id} service={service} variant="featured" />)}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Brands We Service" title="Factory-Certified for Premium Brands" align="center" />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mt-16">
              {brands.map((brand, i) => (
                <div key={i} className="flex items-center justify-center p-6 border border-gray-200 hover:border-[#D4AF37] transition-colors group">
                  <span className="text-gray-500 text-sm font-serif text-center group-hover:text-[#D4AF37]">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Schedule Today</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">Ready to Restore Your Appliance?</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">Contact us today for expert diagnosis and repair.</p>
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

export default Services;
