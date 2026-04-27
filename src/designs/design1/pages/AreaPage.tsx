'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import {
  businessInfo,
  services,
  serviceAreas,
  testimonials,
  brands,
  images,
} from '../data/content';
import { areaEnrichment, buildAreaBody, buildAreaFaqs } from '../data/areaContent';
import { brandAreaCombos } from '../data/brandAreaCombos';
import { serviceAreaCombos } from '../data/serviceAreaCombos';
import { ServiceArea } from '../types';

interface AreaPageProps {
  areaSlug?: string;
  area?: ServiceArea;
}

const AreaPage: React.FC<AreaPageProps> = ({ areaSlug, area: areaProp }) => {
  const area =
    areaProp || serviceAreas.find((a) => a.slug === areaSlug) || serviceAreas[0];
  if (!area) return null;

  const enrichment = areaEnrichment[area.slug];
  const otherAreas = serviceAreas
    .filter((a) => a.id !== area.id)
    .sort((a, b) => a.name.localeCompare(b.name));
  // Anchored area match (testimonial format: "<City>, NJ").
  // Prevents short names like "Ocean" from accidentally matching another
  // area, and prevents "Amboy" matching "South Amboy" / "Perth Amboy".
  const areaNameLc = area.name.toLowerCase();
  const areaTestimonials = testimonials.filter((t) => {
    const loc = t.location.toLowerCase();
    return loc === `${areaNameLc}, nj` || loc.startsWith(`${areaNameLc},`);
  });

  const body = enrichment ? buildAreaBody(area, enrichment) : null;
  const faqs = enrichment
    ? buildAreaFaqs(area, enrichment)
    : [
        {
          question: `How quickly can you schedule service in ${area.name}?`,
          answer: `We typically offer next-day service in ${area.name}. Call us for best availability.`,
        },
        {
          question: `What areas of ${area.name} do you cover?`,
          answer: `We serve all of ${area.name} including zip codes ${area.zipCodes.join(', ')}.`,
        },
        {
          question: `Do you charge extra for service in ${area.name}?`,
          answer: `No. Our standard diagnostic fee applies, credited toward any approved repair.`,
        },
        {
          question: `What brands do you service in ${area.name}?`,
          answer: `All major brands including Sub-Zero, Wolf, Thermador, Miele, Bosch, GE, LG, Samsung, Whirlpool, Maytag, and more.`,
        },
      ];

  const nearbyAreas = enrichment
    ? enrichment.nearbyAreaSlugs
        .map((slug) => serviceAreas.find((a) => a.slug === slug))
        .filter((a): a is ServiceArea => !!a)
    : otherAreas.slice(0, 3);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Service Areas', url: '/our-service-area' },
    { name: area.name, url: `/areas/${area.slug}` },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero
          title={`Appliance Repair in ${area.name}, NJ`}
          subtitle={`Serving ${area.county} County Since 1993`}
          description={`Factory-trained technicians, OEM parts, and 30+ years of local experience across ${area.name} — including ${area.zipCodes.join(', ')}.`}
          image={images.serviceAreas}
          showCTA={true}
          overlay="gradient"
          height="medium"
          align="left"
        />

        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4 border-b border-gray-100">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#D4AF37]">
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <Link
                href="/our-service-area"
                className="text-gray-500 hover:text-[#D4AF37]"
              >
                Service Areas
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-[#D4AF37]">{area.name}</span>
            </nav>
          </div>
        </div>

        {/* About section — intro + coverage */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  subtitle={`${area.county} County, ${area.state}`}
                  title={`Trusted Appliance Repair in ${area.name}`}
                  align="left"
                />
                <div className="space-y-6 mt-8">
                  {(body?.aboutParas ?? [area.description]).map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 mt-8">
                  <div className="text-center">
                    <div className="font-serif text-3xl text-[#D4AF37]">30+</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">
                      Years Serving {area.county} County
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-3xl text-[#D4AF37]">500+</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">
                      {area.name} Customers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-3xl text-[#D4AF37]">4.9</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">
                      Star Rating
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={images.living}
                    alt={`Appliance repair technician serving homes in ${area.name}, NJ`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-[#D4AF37] hidden lg:block" />
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods & Zip Codes */}
        {enrichment && (
          <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <SectionHeading
                  subtitle="Service Coverage"
                  title={`Neighborhoods & Zip Codes We Cover in ${area.name}`}
                  align="center"
                />
                <div className="grid md:grid-cols-2 gap-12 mt-12">
                  <div>
                    <h3 className="font-serif text-xl text-black mb-4">
                      {area.name} Neighborhoods
                    </h3>
                    <ul className="space-y-2">
                      {enrichment.neighborhoods.map((n) => (
                        <li key={n} className="flex items-center text-gray-700">
                          <span className="w-1 h-1 bg-[#D4AF37] mr-3" />
                          {n}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-black mb-4">
                      Zip Codes Served
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {area.zipCodes.map((z) => (
                        <span
                          key={z}
                          className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-sm font-mono"
                        >
                          {z}
                        </span>
                      ))}
                    </div>
                    {enrichment.landmarks.length > 0 && (
                      <>
                        <h3 className="font-serif text-xl text-black mt-8 mb-4">
                          Local Landmarks
                        </h3>
                        <ul className="space-y-2">
                          {enrichment.landmarks.map((l) => (
                            <li
                              key={l}
                              className="flex items-center text-gray-700"
                            >
                              <span className="w-1 h-1 bg-[#D4AF37] mr-3" />
                              {l}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Common Appliance Issues */}
        {body && (
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <SectionHeading
                  subtitle="Local Expertise"
                  title={`Common Appliance Issues in ${area.name} Homes`}
                  align="center"
                />
                <div className="space-y-6 mt-12">
                  {body.issuesParas.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Our Services"
              title={`Appliance Repair Services in ${area.name}`}
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {services.slice(0, 6).map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  variant="default"
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <CTAButton href="/services" variant="outline" size="lg" icon="arrow">
                View All Services
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Why Us */}
        {body && (
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <SectionHeading
                  subtitle="Why Advanced Appliance"
                  title={`Why ${area.name} Chooses Us for Appliance Repair`}
                  align="center"
                />
                <div className="space-y-6 mt-12">
                  {body.whyUsParas.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Brands */}
        <section className="py-16 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-500 mb-8">
              Brands We Service in {area.name}
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {brands.slice(0, 10).map((brand, i) => (
                <span
                  key={i}
                  className="text-gray-400 text-lg font-serif hover:text-[#D4AF37] transition-colors cursor-default"
                >
                  {brand.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Premium-brand combo links + service combo links for this area.
            Surfaces the combo landing pages from this area-parent so
            crawlers (and users) reach combo pages without sitemap-only
            discovery. Renders only when the area has combo coverage. */}
        {(() => {
          const brandCombosForArea = brandAreaCombos.filter(
            (c) => c.areaSlug === area.slug,
          );
          const serviceCombosForArea = serviceAreaCombos.filter(
            (c) => c.areaSlug === area.slug,
          );
          if (brandCombosForArea.length === 0 && serviceCombosForArea.length === 0) {
            return null;
          }
          return (
            <section className="py-24 lg:py-32 bg-white">
              <div className="container mx-auto px-6">
                {brandCombosForArea.length > 0 && (
                  <>
                    <SectionHeading
                      subtitle="Premium Brand Specialty"
                      title={`Premium Brand Repair in ${area.name}`}
                      description="Factory-certified service pages with brand-specific failure patterns and FAQs for your address."
                      align="center"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-12 max-w-5xl mx-auto">
                      {brandCombosForArea.map((c) => {
                        const b = brands.find((br) => br.slug === c.brandSlug);
                        if (!b) return null;
                        return (
                          <Link
                            key={c.slug}
                            href={`/${c.slug}`}
                            className="group p-4 text-center bg-gray-50 hover:bg-[#D4AF37] transition-colors"
                          >
                            <span className="block text-gray-800 text-sm font-medium group-hover:text-white transition-colors">
                              {b.name}
                            </span>
                            <span className="block text-gray-500 text-xs mt-1 group-hover:text-white/80 transition-colors">
                              in {area.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </>
                )}
                {serviceCombosForArea.length > 0 && (
                  <div className="mt-16">
                    <SectionHeading
                      subtitle="By Appliance"
                      title={`${area.name} Repair By Appliance Type`}
                      description="Specialty pages for the most common service categories in your zip."
                      align="center"
                    />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12 max-w-4xl mx-auto">
                      {serviceCombosForArea.map((c) => {
                        const svc = services.find((s) => s.slug === c.serviceSlug);
                        if (!svc) return null;
                        return (
                          <Link
                            key={c.slug}
                            href={`/${c.slug}`}
                            className="group p-4 text-center bg-gray-50 hover:bg-[#D4AF37] transition-colors"
                          >
                            <span className="block text-gray-800 text-sm font-medium group-hover:text-white transition-colors">
                              {svc.name}
                            </span>
                            <span className="block text-gray-500 text-xs mt-1 group-hover:text-white/80 transition-colors">
                              in {area.name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </section>
          );
        })()}

        {/* Testimonials + 4.9 rating proof */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-1 mb-3" aria-label="4.9 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif text-2xl md:text-3xl text-black">
                <span className="font-medium">4.9</span>
                <span className="text-gray-400 text-xl"> / 5.0</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Averaged across 127+ verified reviews from Monmouth &amp; Middlesex County homeowners
              </p>
            </div>
            <SectionHeading
              subtitle="Client Reviews"
              title={
                areaTestimonials.length > 0
                  ? `What ${area.name} Residents Say`
                  : `What Homeowners Across ${area.county} County Say`
              }
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {(areaTestimonials.length > 0
                ? areaTestimonials
                : testimonials.slice(0, 3)
              ).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} variant="default" />
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
              <Link
                href="/our-reviews"
                className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#D4AF37] transition-colors"
              >
                View All Customer Reviews
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeading
                  subtitle="Common Questions"
                  title={`${area.name} Appliance Repair FAQs`}
                  align="left"
                />
                <p className="text-gray-600 mt-6 leading-relaxed">
                  Answers to the questions we hear most from {area.name} homeowners
                  and property managers.
                </p>
                <div className="mt-8">
                  <CTAButton
                    href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                    variant="primary"
                    size="lg"
                    icon="phone"
                  >
                    Call {businessInfo.phone}
                  </CTAButton>
                </div>
              </div>
              <div>
                <FAQAccordion faqs={faqs} variant="default" />
              </div>
            </div>
          </div>
        </section>

        {/* Nearby areas */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Nearby Service Areas"
              title={`Also Serving Near ${area.name}`}
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
              {nearbyAreas.map((a) => (
                <Link
                  key={a.id}
                  href={`/areas/${a.slug}`}
                  className="group p-6 bg-white border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-lg text-black group-hover:text-[#D4AF37] transition-colors">
                        Appliance Repair in {a.name}
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">
                        {a.county} County · {a.zipCodes[0]}
                      </p>
                    </div>
                    <svg
                      className="w-5 h-5 text-[#D4AF37] transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <CTAButton
                href="/our-service-area"
                variant="outline"
                size="lg"
                icon="arrow"
              >
                View All Service Areas
              </CTAButton>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">
                {area.name} Appliance Repair
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
                Ready to Schedule Your Service?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Same-day and next-day service available across {area.name} and
                surrounding {area.county} County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton
                  href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                  variant="primary"
                  size="lg"
                  icon="phone"
                >
                  Call {businessInfo.phone}
                </CTAButton>
                <CTAButton
                  href="/contact"
                  variant="outline"
                  size="lg"
                  icon="arrow"
                >
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
