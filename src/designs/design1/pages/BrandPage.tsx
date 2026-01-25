import React from 'react';
import { Header, Footer, Hero, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, services, serviceAreas, testimonials, images, brands } from '../data/content';
import { Brand } from '../types';

interface BrandPageProps {
  brand: Brand;
}

const BrandPage: React.FC<BrandPageProps> = ({ brand }) => {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Our Brands', url: '/our-brands' },
    { name: `${brand.name} Repair`, url: `/${brand.slug}` },
  ];

  // Get relevant testimonials (first 3)
  const brandTestimonials = testimonials.slice(0, 3);

  // Services we offer for this brand
  const brandServices = services.slice(0, 6);

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero
          title={`${brand.name} Appliance Repair Service in NJ`}
          subtitle="Factory Authorized Service"
          description={`Expert ${brand.name} appliance repair throughout Monmouth and Middlesex Counties. Over 30 years of experience with factory-trained technicians.`}
          image={images.kitchen}
          showCTA={true}
          overlay="gradient"
          height="medium"
          align="center"
        />

        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <a href="/" className="text-gray-500 hover:text-[#D4AF37]">Home</a>
              <span className="text-gray-300">/</span>
              <a href="/our-brands" className="text-gray-500 hover:text-[#D4AF37]">Our Brands</a>
              <span className="text-gray-300">/</span>
              <span className="text-[#D4AF37]">{brand.name} Repair</span>
            </nav>
          </div>
        </div>

        {/* Brand Introduction */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                {brand.logo && (
                  <div className="mb-8">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      className="h-20 object-contain"
                    />
                  </div>
                )}
                <SectionHeading
                  subtitle="Expert Service"
                  title={`${brand.name} Repair Specialists`}
                  align="left"
                />
                <div className="space-y-6 mt-8">
                  <p className="text-gray-600 leading-relaxed">
                    Advanced Appliance Repair Service has been providing expert {brand.name} appliance
                    repair throughout Central New Jersey for over 30 years. Our factory-trained
                    technicians have the expertise and genuine parts to service all {brand.name}
                    appliances, ensuring your investment is properly maintained.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Whether you need routine maintenance or emergency repair, our team is ready
                    to help. We offer same-day and next-day appointments, with most repairs
                    completed on the first visit.
                  </p>
                  <ul className="space-y-4">
                    {[
                      `Factory-trained ${brand.name} technicians`,
                      'Genuine OEM replacement parts',
                      '90-day warranty on all repairs',
                      'Same-day service available',
                      'Transparent pricing with no hidden fees',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10">
                  <CTAButton href="/contact" variant="primary" size="lg" icon="arrow">
                    Schedule {brand.name} Repair
                  </CTAButton>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={images.kitchen} alt={`${brand.name} appliance repair`} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-[#D4AF37] hidden lg:block" />
              </div>
            </div>
          </div>
        </section>

        {/* Services for this brand */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle={`${brand.name} Services`}
              title={`${brand.name} Appliances We Repair`}
              description={`Our technicians are trained to service all ${brand.name} kitchen and laundry appliances.`}
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {brandServices.map((service) => (
                <a
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group bg-white p-8 border border-gray-100 hover:border-[#D4AF37] transition-all duration-300"
                >
                  <h3 className="font-serif text-xl text-black mb-4 group-hover:text-[#D4AF37] transition-colors">
                    {brand.name} {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Expert {service.name.toLowerCase()} for {brand.name} appliances. Fast diagnosis and quality repairs.
                  </p>
                  <span className="text-[#D4AF37] text-sm flex items-center">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Why Choose Us"
              title={`Your Trusted ${brand.name} Service Provider`}
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                { title: '$100 Diagnostic', description: 'Clear pricing with no hidden fees' },
                { title: 'Same-Day Service', description: 'Fast response when you need it' },
                { title: '90-Day Warranty', description: 'All repairs guaranteed' },
                { title: '30+ Years', description: 'Experience you can trust' },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-black mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Customer Reviews"
              title="What Our Customers Say"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              {brandTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 border border-gray-100">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-600 leading-relaxed mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="font-serif text-black">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Service Areas"
              title={`${brand.name} Repair Near You`}
              description="We provide service throughout Monmouth and Middlesex Counties."
              align="center"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-16">
              {serviceAreas.slice(0, 18).map((area) => (
                <a
                  key={area.id}
                  href={`/${area.slug}`}
                  className="group bg-gray-50 p-4 text-center hover:bg-[#D4AF37] transition-colors"
                >
                  <span className="text-gray-700 text-sm group-hover:text-white transition-colors">{area.name}</span>
                </a>
              ))}
            </div>
            <div className="text-center mt-8">
              <CTAButton href="/our-service-area" variant="outline" size="md" icon="arrow">
                View All Service Areas
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Other Brands */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">We Also Service</p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {brands.filter(b => b.name !== brand.name).slice(0, 8).map((b, i) => (
                <a
                  key={i}
                  href={`/${b.slug}`}
                  className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors"
                >
                  {b.name}
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
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Get Started</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
                Need {brand.name} Repair?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Schedule your appointment today. Our factory-trained technicians are ready to help.
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

export default BrandPage;
