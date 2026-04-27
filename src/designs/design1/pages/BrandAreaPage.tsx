'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Header,
  Footer,
  Hero,
  SectionHeading,
  CTAButton,
  FAQAccordion,
  TestimonialCard,
  LocalBusinessSchema,
  BreadcrumbSchema,
} from '../components';
import { businessInfo, services, testimonials, images } from '../data/content';
import { areaEnrichment } from '../data/areaContent';
import { brandEnrichment } from '../data/brandContent';
import {
  buildBrandAreaBody,
  buildBrandAreaFaqs,
  brandAreaCombos,
  getBrandForCombo,
  getAreaForCombo,
  type BrandAreaCombo,
} from '../data/brandAreaCombos';

interface BrandAreaPageProps {
  combo: BrandAreaCombo;
}

const BrandAreaPage: React.FC<BrandAreaPageProps> = ({ combo }) => {
  const brand = getBrandForCombo(combo);
  const area = getAreaForCombo(combo);
  const ae = areaEnrichment[combo.areaSlug];
  const be = brandEnrichment[combo.brandSlug];
  const body = buildBrandAreaBody(combo);
  const faqs = buildBrandAreaFaqs(combo);

  if (!brand || !area || !ae || !be || !body) return null;

  // Filter testimonials matching this area + brand mention.
  //
  // Match the area against `t.location` with a trailing comma to avoid
  // false positives where one area name is a substring of another
  // ("Amboy" matching "South Amboy, NJ" or "Perth Amboy, NJ"). The
  // testimonial format is consistently "<City>, NJ".
  //
  // Match the brand by checking if t.service contains the brand name
  // verbatim (lowercased, hyphen preserved) — earlier code stripped
  // non-letters which turned "sub-zero" into "subzero" and never matched
  // any "Sub-Zero ..." testimonial service strings.
  const areaNameLc = area.name.toLowerCase();
  const cityHits = testimonials.filter((t) => {
    const loc = t.location.toLowerCase();
    return loc === `${areaNameLc}, nj` || loc.startsWith(`${areaNameLc},`);
  });
  const brandNameLc = brand.name.toLowerCase();
  const brandHits = cityHits.filter((t) =>
    t.service.toLowerCase().includes(brandNameLc),
  );
  const reviews = brandHits.length > 0 ? brandHits : cityHits.slice(0, 3);

  // Sibling combos = same brand, 3 different nearby areas
  const sameBrandSiblings = brandAreaCombos
    .filter((c) => c.brandSlug === combo.brandSlug && c.slug !== combo.slug)
    .filter((c) => ae.nearbyAreaSlugs.includes(c.areaSlug))
    .slice(0, 3);

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Brands', url: '/our-brands' },
    { name: brand.name, url: `/${brand.slug}` },
    { name: `${area.name}, NJ`, url: `/${combo.slug}` },
  ];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero
          title={`${brand.name} Appliance Repair in ${area.name}, NJ`}
          subtitle={`Factory-Certified Service Since 1992`}
          description={`OEM parts, factory-trained technicians, and 30+ years of ${brand.name} experience across ${area.name} — ${area.zipCodes.join(', ')}.`}
          image={images.hero}
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
                href={`/${brand.slug}`}
                className="text-gray-500 hover:text-[#D4AF37]"
              >
                {brand.name}
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-[#D4AF37]">{area.name}, NJ</span>
            </nav>
          </div>
        </div>

        {/* Intro + local context */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  subtitle={`${area.county} County, ${area.state}`}
                  title={`${brand.name} Repair Specialists in ${area.name}`}
                  align="left"
                />
                <div className="space-y-6 mt-8">
                  {body.introParas.map((p, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-100 mt-8">
                  <div className="text-center">
                    <div className="font-serif text-3xl text-[#D4AF37]">30+</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">
                      Years on {brand.name}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-3xl text-[#D4AF37]">OEM</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">
                      Parts Only
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-3xl text-[#D4AF37]">4.9</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider mt-1">
                      Star Rating
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <CTAButton
                    href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                    variant="primary"
                    size="lg"
                    icon="phone"
                  >
                    Call {businessInfo.phone}
                  </CTAButton>
                  <CTAButton href="/contact" variant="outline" size="lg" icon="arrow">
                    Schedule Online
                  </CTAButton>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={images.kitchen}
                    alt={`${brand.name} appliance repair technician serving ${area.name}, NJ`}
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

        {/* Product lines */}
        {be.productLines && be.productLines.length > 0 && (
          <section className="py-20 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">
              <div className="max-w-5xl mx-auto">
                <SectionHeading
                  subtitle={`${brand.name} Product Lines`}
                  title={`${brand.name} Models We Service in ${area.name}`}
                  align="center"
                />
                <ul className="grid md:grid-cols-2 gap-3 mt-12">
                  {be.productLines.map((line) => (
                    <li
                      key={line}
                      className="flex items-start text-gray-700 bg-white border border-gray-100 p-4"
                    >
                      <span className="w-1.5 h-1.5 bg-[#D4AF37] mr-3 mt-2 flex-shrink-0" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Common failures */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                subtitle="Local Failure Patterns"
                title={`Common ${brand.name} Issues in ${area.name} Homes`}
                align="center"
              />
              <div className="space-y-8 mt-12">
                {body.failureParas.map((f) => (
                  <div key={f.title} className="border-l-2 border-[#D4AF37] pl-6">
                    <h3 className="font-serif text-xl text-black mb-3">{f.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why us for this combo */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <SectionHeading
                subtitle="Why Choose Us"
                title={`Why ${area.name} Homeowners Trust Us With Their ${brand.name}`}
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

        {/* Service coverage */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <SectionHeading
                subtitle="Service Coverage"
                title={`${brand.name} Service Across ${area.name}`}
                align="center"
              />
              <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div>
                  <h3 className="font-serif text-xl text-black mb-4">
                    {area.name} Neighborhoods
                  </h3>
                  <ul className="space-y-2">
                    {ae.neighborhoods.map((n) => (
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
                  <h3 className="font-serif text-xl text-black mt-8 mb-4">
                    Local Landmarks
                  </h3>
                  <ul className="space-y-2">
                    {ae.landmarks.slice(0, 4).map((l) => (
                      <li key={l} className="flex items-center text-gray-700">
                        <span className="w-1 h-1 bg-[#D4AF37] mr-3" />
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews — 4.9 badge + filtered testimonials */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center gap-1 mb-3" aria-label="4.9 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-serif text-2xl md:text-3xl text-black">
                <span className="font-medium">4.9</span>
                <span className="text-gray-400 text-xl"> / 5.0</span>
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Averaged across 127+ verified reviews
              </p>
            </div>
            <SectionHeading
              subtitle="Client Reviews"
              title={
                brandHits.length > 0
                  ? `What ${area.name} ${brand.name} Owners Say`
                  : `What ${area.name} Homeowners Say`
              }
              align="center"
            />
            {reviews.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {reviews.slice(0, 3).map((t) => (
                  <TestimonialCard key={t.id} testimonial={t} variant="default" />
                ))}
              </div>
            )}
            <div className="flex justify-center mt-12">
              <Link
                href="/our-reviews"
                className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#D4AF37] transition-colors"
              >
                View All Customer Reviews
                <svg
                  className="w-4 h-4 ml-2"
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
              </Link>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeading
                  subtitle="Common Questions"
                  title={`${brand.name} Repair in ${area.name} FAQs`}
                  align="left"
                />
                <p className="text-gray-600 mt-6 leading-relaxed">
                  Answers to the questions we hear most from {area.name}{' '}
                  {brand.name} owners.
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

        {/* All services link */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="All Repairs"
              title={`${brand.name} Service Categories We Cover in ${area.name}`}
              align="center"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mt-12 max-w-5xl mx-auto">
              {services.map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.slug}`}
                  className="text-center p-4 border border-gray-200 hover:border-[#D4AF37] transition-colors text-sm text-gray-700 hover:text-[#D4AF37]"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sibling combos: same brand, nearby areas */}
        {sameBrandSiblings.length > 0 && (
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6">
              <SectionHeading
                subtitle="Nearby Service"
                title={`${brand.name} Repair in Nearby Areas`}
                align="center"
              />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
                {sameBrandSiblings.map((c) => {
                  const a = getAreaForCombo(c);
                  if (!a) return null;
                  return (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}`}
                      className="group p-6 bg-white border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-serif text-lg text-black group-hover:text-[#D4AF37] transition-colors">
                            {brand.name} Repair in {a.name}
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
                  );
                })}
              </div>
              <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href={`/${brand.slug}`}
                  className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#D4AF37] transition-colors"
                >
                  All {brand.name} Service
                  <svg
                    className="w-4 h-4 ml-2"
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
                </Link>
                <Link
                  href={`/areas/${area.slug}`}
                  className="inline-flex items-center text-sm uppercase tracking-[0.2em] text-gray-700 hover:text-[#D4AF37] transition-colors"
                >
                  All Service in {area.name}
                  <svg
                    className="w-4 h-4 ml-2"
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
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">
                {brand.name} Repair · {area.name}, NJ
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
                Ready to Schedule Your {brand.name} Service?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Same-day and next-day service available in {area.name} and
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

export default BrandAreaPage;
