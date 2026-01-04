import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { BUSINESS_INFO, SERVICES, TESTIMONIALS, STATS, BRANDS, IMAGES } from '../utils/constants';

/**
 * Bamo-style home page
 * - Background: #fffaf2 (warm off-white)
 * - Massive whitespace (py-40 = 10rem = 160px)
 * - Max-width: max-w-6xl
 * - Grid gaps: gap-12 (3rem)
 * - Line-height: 1.6
 */
export const Home: React.FC = () => {
  return (
    <div className="bg-bamo-bg min-h-screen">
      <Navigation currentPath="/" />

      {/* Hero Section - Full screen, centered with pure photography (NO overlay) */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden">
        {/* Background image - pure photography, no filters or overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Luxury kitchen appliances"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="font-lora font-semibold text-5xl md:text-6xl lg:text-7xl text-white text-center mb-6 max-w-4xl leading-tight drop-shadow-lg">
            {BUSINESS_INFO.name}
          </h1>
          <p className="font-inter text-lg md:text-xl text-white/90 text-center max-w-2xl mb-12 leading-relaxed drop-shadow-md">
            {BUSINESS_INFO.tagline}
          </p>
          <div className="flex justify-center">
            <Button variant="primary" size="lg" href={`tel:${BUSINESS_INFO.phoneClean}`}>
              Schedule Service
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
            {STATS.map((stat, index) => (
              <div key={index}>
                <p className="font-lora font-semibold text-bamo-xl md:text-6xl text-bamo-text mb-3">
                  {stat.value}
                </p>
                <p className="font-inter text-bamo-sm text-bamo-text/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-40 px-6 bg-bamo-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image - sharp corners, no filters */}
            <div className="order-2 lg:order-1">
              <img
                src={IMAGES.technician}
                alt="Professional technician at work"
                className="w-full h-[500px] object-cover"
                style={{ borderRadius: '0px' }}
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-lora font-semibold text-bamo-lg md:text-bamo-xl text-bamo-text mb-8 leading-tight">
                Three Decades of Excellence
              </h2>
              <div className="space-y-6 font-inter text-bamo-md text-bamo-text/70 leading-relaxed">
                <p>
                  Founded in 1994, Advanced Appliance has been the trusted choice for luxury appliance repair across New Jersey. Our expertise spans the full spectrum of high-end brands, from Sub-Zero refrigeration to Wolf cooking systems.
                </p>
                <p>
                  We understand that your appliances are an investment in your lifestyle. That's why we approach every service call with the precision and care your home deserves. Our certified technicians arrive equipped with genuine parts and the expertise to diagnose and resolve issues efficiently.
                </p>
                <p>
                  Whether it's a routine maintenance visit or an emergency repair, we're committed to restoring your appliances to peak performance with minimal disruption to your daily life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-lora font-semibold text-bamo-lg md:text-bamo-xl text-bamo-text mb-6">
              Our Services
            </h2>
            <p className="font-inter text-bamo-md text-bamo-text/70 max-w-2xl mx-auto leading-relaxed">
              Expert repair for all major luxury brands
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                name={service.name}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="secondary" size="md" href="/services">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Kitchen Lifestyle Section - pure photography, no overlay */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.kitchen}
            alt="Modern luxury kitchen"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-lora font-semibold text-4xl md:text-5xl text-white mb-8 leading-tight drop-shadow-lg">
            Your Kitchen, Our Priority
          </h2>
          <p className="font-inter text-lg text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            We know that when an appliance stops working, it disrupts your entire household. That's why we offer same-day emergency service and flexible scheduling to fit your busy life.
          </p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-40 px-6 bg-bamo-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-inter text-bamo-sm text-bamo-text/60 mb-8">
              Authorized Service Provider
            </h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {BRANDS.map((brand, index) => (
              <div key={index} className="font-inter text-bamo-md text-bamo-text/50">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-lora font-semibold text-bamo-lg md:text-bamo-xl text-bamo-text mb-6">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                text={testimonial.text}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-lora font-semibold text-bamo-lg md:text-bamo-xl text-bamo-text mb-8 leading-tight">
            Ready to Schedule?
          </h2>
          <p className="font-inter text-bamo-md text-bamo-text/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Same-day service available. Call now or schedule online.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="primary" size="lg" href={`tel:${BUSINESS_INFO.phoneClean}`}>
              {BUSINESS_INFO.phone}
            </Button>
            <Button variant="secondary" size="lg" href="/contact">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
