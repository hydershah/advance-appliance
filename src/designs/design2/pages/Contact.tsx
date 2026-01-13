import React from 'react';
import {
  Header,
  Footer,
  Hero,
  SectionHeading,
  ContactForm,
  FAQAccordion,
  LocalBusinessSchema,
  BreadcrumbSchema,
  FAQSchema,
} from '../components';
import { businessInfo, generalFaqs, serviceAreas, images } from '../data/content';

const Contact: React.FC = () => {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <>
      <LocalBusinessSchema page="contact" />
      <BreadcrumbSchema items={breadcrumbs} />
      <FAQSchema faqs={generalFaqs} />
      <Header />
      <main className="bg-modern-cream-50 text-modern-navy-900">
        <Hero
          title="Get in Touch"
          subtitle="Contact Us"
          description="We are here to help with all your luxury appliance repair needs."
          image={images.contact}
          showCTA={false}
          overlay="gradient"
          height="small"
          align="center"
        />

        <section className="bg-modern-cream-100 py-4">
          <div className="container mx-auto px-6">
            <nav className="flex items-center space-x-2 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
              <a href="/" className="text-modern-navy-700 hover:text-modern-navy-900">Home</a>
              <span className="text-modern-navy-400">/</span>
              <span className="text-modern-navy-900">Contact</span>
            </nav>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-1">
                <SectionHeading subtitle="Contact Information" title="We Are Here to Help" align="left" size="sm" />
                <div className="space-y-8 mt-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mb-3">Phone</h4>
                    <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="flex items-center text-modern-navy-900 hover:text-modern-navy-900 transition-colors">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-modern-navy-900 text-modern-cream-50 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <span className="font-[var(--font-bebas)] text-2xl tracking-[0.08em]">{businessInfo.phone}</span>
                    </a>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mb-3">Email</h4>
                    <a href={`mailto:${businessInfo.email}`} className="flex items-center text-modern-navy-900 hover:text-modern-navy-900 transition-colors">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-modern-navy-900 text-modern-cream-50 mr-4">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="text-sm font-[var(--font-poppins)]">{businessInfo.email}</span>
                    </a>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mb-3">Business Hours</h4>
                    <div className="flex items-start">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-modern-navy-900 text-modern-cream-50 mr-4 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-sm text-modern-charcoal font-[var(--font-poppins)]">
                        <p>Mon - Fri: {businessInfo.hours.weekdays}</p>
                        <p>Saturday: {businessInfo.hours.saturday}</p>
                        <p>Sunday: {businessInfo.hours.sunday}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-modern-navy-900/10">
                  <h4 className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)] mb-4">Service Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {serviceAreas.map((area) => (
                      <a key={area.id} href={`/areas/${area.slug}`} className="px-3 py-1 rounded-full border border-modern-navy-900/10 text-modern-navy-700 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] hover:border-modern-navy-900 hover:text-modern-navy-900 transition-colors">
                        {area.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white p-8 lg:p-12 border border-modern-navy-900/10 rounded-2xl shadow-sm">
                  <SectionHeading subtitle="Schedule Service" title="Request an Appointment" description="Fill out the form below and we will contact you." align="left" size="sm" />
                  <div className="mt-8">
                    <ContactForm variant="default" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-0">
          <div className="relative h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25280949928!2d-74.31899037223515!3d40.69701929411892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e65e00000001%3A0x7ead5d9a9ec2f3e7!2sNew%20Jersey!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Our Service Area"
              className="grayscale"
            />
            <div className="absolute top-8 left-8 lg:left-16 bg-white p-8 shadow-xl max-w-sm rounded-2xl">
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] mb-4">Our Service Area</h3>
              <p className="text-modern-charcoal text-sm mb-6 font-[var(--font-poppins)]">We proudly serve Essex, Union, Morris, and Monmouth counties in New Jersey.</p>
              <ul className="space-y-2 text-sm font-[var(--font-poppins)]">
                {serviceAreas.map((area) => (
                  <li key={area.id} className="flex items-center text-modern-navy-700">
                    <svg className="w-4 h-4 text-modern-navy-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {area.name}, {area.state}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <SectionHeading subtitle="Common Questions" title="Frequently Asked Questions" align="left" />
                <p className="text-modern-charcoal mt-6 leading-relaxed font-[var(--font-poppins)]">Find answers to our most commonly asked questions below.</p>
              </div>
              <div>
                <FAQAccordion faqs={generalFaqs} variant="bordered" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-modern-navy-900">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-modern-cream-50">
              <div>
                <h3 className="font-[var(--font-bebas)] text-3xl tracking-[0.08em]">Need Emergency Service?</h3>
                <p className="mt-2 text-modern-cream-100/70 font-[var(--font-poppins)]">We offer same-day emergency service for urgent appliance issues.</p>
              </div>
              <a
                href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`}
                className="inline-flex items-center px-8 py-4 rounded-full bg-modern-navy-900 text-white text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]"
              >
                Call Now: {businessInfo.phone}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
