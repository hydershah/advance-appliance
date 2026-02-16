'use client';

import React from 'react';
import { Header, Footer, Hero, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, brands, images } from '../data/content';

const Brands: React.FC = () => {
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Our Brands', url: '/our-brands' }];

  // Premium brands with logos
  const premiumBrands = brands.filter(b => b.logo);
  // All other brands
  const allBrands = brands;

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero
          title="Our Brands"
          subtitle="Appliances That We Repair"
          description="At Advanced Appliance Service, we provide professional repair of kitchen and laundry appliances for over 30 years. We service all domestic and foreign makes and models."
          image={images.brands}
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
              <span className="text-[#D4AF37]">Our Brands</span>
            </nav>
          </div>
        </div>

        {/* Premium Brands Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Factory Trained"
              title="Featured Brands We Service"
              description="We are factory-trained service providers for these respected appliance brands."
              align="center"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-16">
              {premiumBrands.map((brand, i) => (
                <a
                  key={i}
                  href={`/${brand.slug}`}
                  className="group bg-white p-8 border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg text-center"
                >
                  {brand.logo && (
                    <div className="h-20 flex items-center justify-center mb-4">
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  )}
                  <h3 className="font-serif text-lg text-black group-hover:text-[#D4AF37] transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-[#D4AF37] text-xs uppercase tracking-wider mt-2">View Services</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* All Brands Grid */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="All Brands"
              title="Complete Brand Directory"
              description="We service all domestic and foreign makes and models of washers, dryers, refrigerators, dishwashers, cooktops, and ovens - gas or electric."
              align="center"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-16">
              {allBrands.map((brand, i) => (
                <a
                  key={i}
                  href={brand.slug ? `/${brand.slug}` : '#'}
                  className="group bg-white p-6 border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 text-center"
                >
                  <h4 className="font-serif text-base text-black group-hover:text-[#D4AF37] transition-colors">
                    {brand.name}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Appliances We Service */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Appliances"
              title="What We Repair"
              align="center"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-16">
              {[
                { name: 'Refrigerators', image: images.refrigerator, link: '/services/refrigerator-repair' },
                { name: 'Washers', image: images.washer, link: '/services/washer-repair' },
                { name: 'Dryers', image: images.dryer, link: '/services/dryer-repair' },
                { name: 'Dishwashers', image: images.dishwasher, link: '/services/dishwasher-repair' },
                { name: 'Ovens', image: images.oven, link: '/services/oven-range-repair' },
                { name: 'Cooktops', image: images.cooktop, link: '/services/cooktop-repair' },
              ].map((appliance, i) => (
                <a
                  key={i}
                  href={appliance.link}
                  className="group text-center"
                >
                  <div className="aspect-square overflow-hidden mb-4 bg-gray-50 border border-gray-100 group-hover:border-[#D4AF37] transition-all duration-300">
                    <img
                      src={appliance.image}
                      alt={appliance.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-serif text-lg text-black group-hover:text-[#D4AF37] transition-colors">
                    {appliance.name}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Need Repair?</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
                Don't See Your Brand Listed?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                We service virtually all major appliance brands. Contact us to confirm we can help with your specific appliance.
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

export default Brands;
