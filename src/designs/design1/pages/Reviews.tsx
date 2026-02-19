'use client';

import React from 'react';
import { Header, Footer, Hero, SectionHeading, CTAButton, LocalBusinessSchema, BreadcrumbSchema } from '../components';
import { businessInfo, testimonials as staticTestimonials, images } from '../data/content';
import type { Testimonial } from '../types';

interface ReviewsProps {
  testimonials?: Testimonial[];
}

const Reviews: React.FC<ReviewsProps> = ({ testimonials: testimonialsProp }) => {
  const testimonials = testimonialsProp || staticTestimonials;
  const breadcrumbs = [{ name: 'Home', url: '/' }, { name: 'Our Reviews', url: '/our-reviews' }];

  return (
    <>
      <LocalBusinessSchema />
      <BreadcrumbSchema items={breadcrumbs} />
      <Header />
      <main>
        <Hero
          title="Our Reviews"
          subtitle="Customer Testimonials"
          description="We have a lot of happy & satisfied local customers. We are overwhelmed with grateful reviews from your family, friends, and neighbors that were serviced over the years."
          image={images.reviews}
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
              <span className="text-[#D4AF37]">Our Reviews</span>
            </nav>
          </div>
        </div>

        {/* Introduction */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600 text-lg leading-relaxed">
                At Advanced Appliance Repair Service, customer satisfaction is our top priority.
                We take pride in delivering exceptional service that saves you time, money, and
                eliminates appliance worries. Here's what our customers have to say about their
                experience with us.
              </p>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-6">
            <SectionHeading
              subtitle="Testimonials"
              title="What Our Customers Say"
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-white p-8 border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg"
                >
                  {/* Star Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#D4AF37]' : 'text-gray-200'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-600 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-serif text-lg text-black">{testimonial.name}</p>
                    <p className="text-[#D4AF37] text-sm">{testimonial.service}</p>
                    <p className="text-gray-400 text-xs mt-1">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leave a Review CTA */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <SectionHeading
                subtitle="Share Your Experience"
                title="Leave Us a Review"
                description="Had a great experience with Advanced Appliance? We'd love to hear from you! Your feedback helps us continue to improve our service."
                align="center"
              />
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <a
                  href="https://www.google.com/search?q=advanced+appliance+repair+service+morganville+nj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors text-sm uppercase tracking-wider"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  Review on Google
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61555650040922"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 text-gray-600 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-wider"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Review on Facebook
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-6">
                Leave a Google review and receive 10% off your next service appointment!
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-black">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-px bg-[#D4AF37] mx-auto mb-8" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.3em] font-light mb-4 block">Ready to Get Started?</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
                Experience the Service That Earns 5-Star Reviews
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Join thousands of satisfied customers throughout Monmouth and Middlesex counties.
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

export default Reviews;
