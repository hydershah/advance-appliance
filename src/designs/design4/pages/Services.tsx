import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { BUSINESS_INFO, SERVICES } from '../utils/constants';

/**
 * Bamo-style services page
 * - Massive whitespace
 * - Clean layout
 * - Generous spacing
 */
export const Services: React.FC = () => {
  return (
    <div className="bg-bamo-bg min-h-screen">
      <Navigation currentPath="/services" />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-20">
        <h1 className="font-lora font-semibold text-5xl lg:text-6xl text-bamo-text text-center mb-6 max-w-4xl">
          Our Services
        </h1>
        <p className="font-inter text-lg text-bamo-text/70 text-center max-w-2xl leading-relaxed">
          Comprehensive repair solutions for luxury appliances
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto">
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
        </div>
      </section>

      {/* Service Process */}
      <section className="py-40 px-6 bg-bamo-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-lora font-semibold text-4xl lg:text-5xl text-bamo-text mb-6">
              Our Process
            </h2>
          </div>

          <div className="space-y-16">
            {[
              {
                number: '01',
                title: 'Contact',
                description: 'Call or schedule online. Same-day service available.',
              },
              {
                number: '02',
                title: 'Diagnosis',
                description: 'Expert technician arrives with professional equipment.',
              },
              {
                number: '03',
                title: 'Repair',
                description: 'Precision work with genuine OEM parts.',
              },
              {
                number: '04',
                title: 'Verification',
                description: 'Complete testing and quality assurance.',
              },
            ].map((step) => (
              <div key={step.number} className="flex gap-8 items-start">
                <div className="font-lora font-semibold text-4xl text-bamo-accent min-w-[80px]">
                  {step.number}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-lora font-semibold text-2xl text-bamo-text mb-3">
                    {step.title}
                  </h3>
                  <p className="font-inter text-base text-bamo-text/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-lora font-semibold text-4xl lg:text-5xl text-bamo-text mb-8">
            Schedule Service
          </h2>
          <p className="font-inter text-lg text-bamo-text/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Expert technicians ready to help
          </p>
          <Button variant="primary" size="lg" href={`tel:${BUSINESS_INFO.phoneClean}`}>
            {BUSINESS_INFO.phone}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
