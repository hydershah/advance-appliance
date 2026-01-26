import React from 'react';
import { Header, Footer, Hero, ServiceCard, TestimonialCarousel, SectionHeading, CTAButton, LocalBusinessSchema } from '../components';
import { businessInfo, services, testimonials, serviceAreas, trustBadges, brands, images } from '../data/content';

const Home: React.FC = () => {
  return (
    <>
      <LocalBusinessSchema page="home" />
      <Header />
      <main>
        <Hero title="Exceptional Care for Your Luxury Appliances" subtitle="Premium Repair Services" description="Factory-certified technicians specializing in Sub-Zero, Viking, Wolf, and Thermador. Same-day service available throughout New Jersey." image={images.hero} showCTA={true} overlay="gradient" height="full" align="left" />

        {/* Trust Badges */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <h3 className="font-serif text-sm md:text-base text-black mb-1">{badge.title}</h3>
                  <p className="text-gray-500 text-xs hidden md:block">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Our Expertise" title="Premium Appliance Repair Services" description="From refrigerators to cooktops, our factory-certified technicians provide expert repair services for all your luxury appliances." align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.slice(0, 6).map((service) => <ServiceCard key={service.id} service={service} variant="default" />)}
            </div>
            <div className="text-center mt-12"><CTAButton href="/services" variant="outline" size="lg" icon="arrow">View All Services</CTAButton></div>
          </div>
        </section>

        {/* About */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden"><img src={images.kitchen} alt="Luxury kitchen" className="w-full h-full object-cover" /></div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#D4AF37] hidden lg:block" />
              </div>
              <div>
                <SectionHeading subtitle="Why Choose Us" title="30+ Years of Excellence in Luxury Appliance Care" align="left" />
                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 leading-relaxed">Advanced Appliance Repair Service has been the trusted choice for discerning homeowners throughout New Jersey since 1992.</p>
                  <ul className="space-y-4">
                    {['Factory-certified on all major luxury brands', 'Same-day emergency service available', 'Genuine OEM parts with 90-180 day warranty', 'Transparent pricing with no hidden fees'].map((item, i) => (
                      <li key={i} className="flex items-start"><svg className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg><span className="text-gray-700">{item}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10"><CTAButton href="/about" variant="primary" size="lg" icon="arrow">Learn More About Us</CTAButton></div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">Authorized Service for Premium Brands</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {brands.slice(0, 8).map((brand, i) => <span key={i} className="text-gray-400 text-lg font-serif hover:text-[#D4AF37] transition-colors cursor-default">{brand.name}</span>)}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Client Testimonials" title="Trusted by Homeowners Across New Jersey" description="Discover why discerning homeowners choose Advanced Appliance for their luxury appliance care." align="center" />
            <div className="mt-16 max-w-4xl mx-auto"><TestimonialCarousel testimonials={testimonials} autoPlay={true} interval={7000} /></div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Service Areas" title="Serving New Jersey's Premier Communities" description="We provide premium appliance repair services throughout Essex, Union, Morris, and Monmouth counties." align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {serviceAreas.map((area) => (
                <a key={area.id} href={`/areas/${area.slug}`} className="group p-8 border border-gray-200 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-serif text-xl text-black group-hover:text-[#D4AF37] transition-colors">{area.name}</h3>
                    <svg className="w-5 h-5 text-[#D4AF37] transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </div>
                  <p className="text-gray-500 text-sm">{area.county} County, {area.state}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${images.living})` }} />
          <div className="absolute inset-0 bg-black/80" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Ready to Get Started?</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">Experience the Difference of Expert Care</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">Join hundreds of satisfied homeowners who trust Advanced Appliance for their luxury appliance needs.</p>
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

export default Home;
