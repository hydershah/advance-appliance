'use client';

import React from 'react';
import { Navigation, Footer, OrnamentDivider, Breadcrumb, Button, ImageGallery, TestimonialCard } from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Testimonial } from '../types';

const serviceData = {
  id: 'refrigerator', title: 'Refrigerator Repair', tagline: 'Expert Care for Your Cooling Appliances',
  description: 'From minor repairs to major overhauls, our certified technicians have the expertise to handle all refrigerator issues.',
  image: 'https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg',
  features: [
    { title: 'Cooling System Repair', description: 'Diagnosis and repair of compressor, condenser, and evaporator issues.' },
    { title: 'Ice Maker Service', description: 'Complete ice maker repair and replacement for all brands.' },
    { title: 'Thermostat Calibration', description: 'Precise temperature control for optimal food preservation.' },
    { title: 'Door Seal Replacement', description: 'Prevent energy loss with proper gasket installation.' },
  ],
  commonIssues: ['Refrigerator not cooling properly', 'Ice maker not producing ice', 'Water dispenser not working', 'Strange noises from the unit', 'Frost buildup in freezer', 'Water leaking under refrigerator'],
  brands: ['Sub-Zero', 'Wolf', 'Viking', 'Thermador', 'KitchenAid', 'Jenn-Air', 'Bosch', 'Miele', 'Samsung', 'LG'],
  galleryImages: [
    { src: 'https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg', alt: 'Luxury refrigerator', caption: 'Premium Sub-Zero repair' },
    { src: 'https://images.pexels.com/photos/5824883/pexels-photo-5824883.jpeg', alt: 'Refrigerator interior', caption: 'Complete interior restoration' },
    { src: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg', alt: 'Modern kitchen', caption: 'Built-in unit service' },
    { src: 'https://images.pexels.com/photos/3316922/pexels-photo-3316922.jpeg', alt: 'Kitchen setup', caption: 'Integrated appliance care' },
  ],
};

const testimonials: Testimonial[] = [
  { id: '1', name: 'Patricia Williams', location: 'Rumson, NJ', rating: 5, text: 'My Sub-Zero stopped cooling right before a holiday gathering. They came same day and had it working perfectly!', date: 'December 2024' },
  { id: '2', name: 'James Mitchell', location: 'Holmdel, NJ', rating: 5, text: 'The technician was incredibly knowledgeable about our Viking refrigerator. Professional, punctual, and courteous.', date: 'November 2024' },
];

const ServiceDetail: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();
  const [featuresRef, featuresVisible] = useScrollAnimation<HTMLDivElement>();
  const [galleryRef, galleryVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={serviceData.image} alt={serviceData.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-forest/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Breadcrumb items={[{ label: 'Services', href: '/services' }, { label: serviceData.title }]} className="mb-8 text-ivory/60" />
          <div className={`max-w-2xl transform transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-copper font-serif tracking-widest uppercase mb-4">Expert Service</p>
            <h1 className="font-cormorant font-bold text-4xl sm:text-5xl md:text-6xl text-ivory mb-6">{serviceData.title}</h1>
            <p className="font-serif text-ivory/80 text-xl mb-8 leading-relaxed">{serviceData.tagline}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href="/contact">Schedule Repair</Button>
              <Button variant="outline" size="lg" className="border-ivory text-ivory hover:bg-ivory hover:text-forest" href="tel:7324167430">(732) 416-7430</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-cormorant font-bold text-3xl sm:text-4xl text-forest mb-6">Professional {serviceData.title} Services</h2>
              <OrnamentDivider variant="simple" color="copper" className="max-w-xs mb-8" />
              <p className="font-serif text-forest/80 text-lg leading-relaxed mb-6">{serviceData.description}</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-forest/5 rounded-lg"><p className="font-cormorant font-bold text-3xl text-copper">30+</p><p className="font-serif text-forest/60 text-sm">Years Experience</p></div>
                <div className="text-center p-4 bg-forest/5 rounded-lg"><p className="font-cormorant font-bold text-3xl text-copper">24hr</p><p className="font-serif text-forest/60 text-sm">Response Time</p></div>
                <div className="text-center p-4 bg-forest/5 rounded-lg"><p className="font-cormorant font-bold text-3xl text-copper">100%</p><p className="font-serif text-forest/60 text-sm">Satisfaction</p></div>
              </div>
            </div>
            <div className="bg-forest/5 rounded-xl p-8 border-2 border-forest/10">
              <h3 className="font-cormorant font-bold text-2xl text-forest mb-6">Common Issues We Fix</h3>
              <div className="space-y-3">
                {serviceData.commonIssues.map((issue, index) => (
                  <div key={issue} className="flex items-center p-3 bg-ivory rounded-lg border border-forest/10">
                    <span className="w-8 h-8 rounded-full bg-copper/20 flex items-center justify-center text-copper font-cormorant font-bold mr-4">{index + 1}</span>
                    <span className="font-serif text-forest">{issue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="py-20 bg-forest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-copper font-serif tracking-widest uppercase mb-4">Comprehensive Care</p>
            <h2 className="font-cormorant font-bold text-4xl text-ivory mb-4">Our Service Capabilities</h2>
            <OrnamentDivider variant="ornate" color="copper" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-700 delay-200 ${featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {serviceData.features.map((feature, index) => (
              <div key={feature.title} className="bg-ivory/10 backdrop-blur-sm rounded-xl p-8 border border-ivory/20 hover:border-copper transition-colors" style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="font-cormorant font-bold text-xl text-ivory mb-3">{feature.title}</h3>
                <p className="font-serif text-ivory/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-burgundy font-serif tracking-widest uppercase mb-4">Our Work</p>
            <h2 className="font-cormorant font-bold text-4xl text-forest mb-4">Project Gallery</h2>
            <OrnamentDivider variant="floral" color="burgundy" className="max-w-md mx-auto" />
          </div>
          <div className={`transform transition-all duration-700 delay-200 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <ImageGallery images={serviceData.galleryImages} columns={4} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-forest/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-cormorant font-bold text-2xl text-forest mb-4">Brands We Service</h2><OrnamentDivider variant="simple" color="forest" className="max-w-xs mx-auto" /></div>
          <div className="flex flex-wrap justify-center gap-4">
            {serviceData.brands.map((brand) => (<span key={brand} className="px-6 py-3 bg-ivory border border-forest/20 rounded-full font-serif text-forest hover:border-copper hover:shadow-md transition-all">{brand}</span>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><p className="text-burgundy font-serif tracking-widest uppercase mb-4">Customer Stories</p><h2 className="font-cormorant font-bold text-4xl text-forest mb-4">What Our Clients Say</h2><OrnamentDivider variant="diamond" color="burgundy" className="max-w-md mx-auto" /></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (<TestimonialCard key={testimonial.id} testimonial={testimonial} />))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-forest text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-ivory mb-6">Ready to Schedule Your Repair?</h2>
          <p className="font-serif text-ivory/90 text-lg mb-8 max-w-2xl mx-auto">Our expert technicians are standing by. Contact us today for professional {serviceData.title.toLowerCase()} service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-copper text-ivory hover:bg-copper/80 border-copper" href="/contact">Schedule Service Online</Button>
            <Button variant="outline" size="lg" className="border-ivory text-ivory hover:bg-ivory hover:text-forest" href="tel:7324167430">Call (732) 416-7430</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
