import React from 'react';
import {
  Header,
  Footer,
  Hero,
  SectionHeading,
  CTAButton,
  LocalBusinessSchema,
  BreadcrumbSchema,
} from '../components';
import { businessInfo, teamMembers, certifications, images } from '../data/content';

const About: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ];
  const stats = [
    { value: '25+', label: 'Years of Experience' },
    { value: '10,000+', label: 'Repairs Completed' },
    { value: '98%', label: 'Customer Satisfaction' },
    { value: '24hr', label: 'Response Time' },
  ];
  const values = [
    { title: 'Integrity', description: 'We believe in honest assessments and transparent pricing.' },
    { title: 'Excellence', description: 'We pursue excellence in every repair using genuine parts.' },
    { title: 'Reliability', description: 'When we make an appointment, we keep it.' },
    { title: 'Community', description: 'We are proud to serve New Jersey families.' },
  ];

  return (
    <>
      <LocalBusinessSchema page="about" />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main className="bg-modern-cream-50 text-modern-navy-900">
        <Hero
          title="Our Story"
          subtitle="About Us"
          description="For over 25 years, Advanced Appliance Repair Service has been the trusted choice for luxury appliance care."
          image={images.about}
          showCTA={false}
          overlay="gradient"
          height="medium"
          align="center"
        />

        <section className="bg-modern-cream-100 py-4">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
              <a href="/" className="text-modern-navy-700 hover:text-modern-navy-900">Home</a>
              <span className="text-modern-navy-400">/</span>
              <span className="text-modern-navy-900">About Us</span>
            </nav>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-6 text-center shadow-sm border border-modern-navy-900/10">
                  <div className="font-[var(--font-bebas)] text-4xl tracking-[0.08em] text-modern-navy-900">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading subtitle="Our Story" title="A Legacy of Excellence" align="left" />
                <div className="space-y-6 mt-8 text-modern-charcoal font-[var(--font-poppins)]">
                  <p>
                    Advanced Appliance Repair Service was founded in 1998 by Michael Richardson, a factory-trained technician with a passion for luxury appliances.
                  </p>
                  <p>
                    From our humble beginnings with a single service van, we have grown into the region&apos;s most trusted name in luxury appliance repair.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -bottom-6 -right-6 h-full w-full border border-modern-navy-900/20" />
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={images.kitchen} alt="Luxury kitchen" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-6 left-6 bg-modern-navy-900 text-modern-cream-50 px-6 py-4 rounded-xl">
                  <span className="font-[var(--font-bebas)] text-3xl tracking-[0.08em]">1998</span>
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-modern-gold-200 font-[var(--font-poppins)]">Est.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Our Values" title="What We Stand For" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {values.map((value) => (
                <div key={value.title} className="rounded-2xl border border-modern-navy-900/10 bg-white p-8 text-center shadow-sm">
                  <div className="mx-auto h-12 w-12 rounded-full bg-modern-navy-900 text-modern-cream-50 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-[var(--font-bebas)] text-2xl tracking-[0.08em]">{value.title}</h3>
                  <p className="mt-3 text-sm text-modern-charcoal font-[var(--font-poppins)]">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-cream-100">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Our Team" title="Meet the Experts" align="center" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {teamMembers.map((member) => (
                <div key={member.id} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em]">{member.name}</h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-modern-navy-900 font-[var(--font-poppins)] mt-2">{member.role}</p>
                  <p className="mt-3 text-sm text-modern-charcoal font-[var(--font-poppins)]">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <SectionHeading subtitle="Credentials" title="Certifications & Accreditations" align="center" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">
              {certifications.map((cert) => (
                <div key={cert.name} className="rounded-2xl border border-modern-navy-900/10 bg-white p-6 text-center">
                  <div className="mx-auto mb-4 h-10 w-10 rounded-full border border-modern-navy-900/20 flex items-center justify-center text-modern-navy-900">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h4 className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)]">{cert.name}</h4>
                  <p className="mt-2 text-[11px] text-modern-navy-500 font-[var(--font-poppins)]">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-modern-navy-900 text-modern-cream-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs uppercase tracking-[0.4em] text-modern-gold-200 font-[var(--font-poppins)]">Get Started</span>
              <h2 className="mt-4 font-[var(--font-bebas)] text-4xl md:text-5xl tracking-[0.08em]">Ready to Experience the Difference?</h2>
              <p className="mt-6 text-modern-cream-100/80 font-[var(--font-poppins)]">
                Contact us today and discover why discerning homeowners trust Advanced Appliance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} variant="primary" size="lg" icon="phone">
                  Call {businessInfo.phone}
                </CTAButton>
                <CTAButton href="/contact" variant="outline" size="lg" icon="arrow">
                  Contact Us
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

export default About;
