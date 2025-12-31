'use client';

import React from 'react';
import {
  Navigation,
  Footer,
  OrnamentDivider,
  ClassicCard,
  TestimonialCard,
  Button,
} from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Testimonial, Award, Service } from '../types';

const services: Service[] = [
  { id: '1', title: 'Refrigerator Repair', description: 'Expert diagnosis and repair for all refrigerator brands, from cooling issues to ice maker problems.', icon: 'refrigerator', category: 'cooling' },
  { id: '2', title: 'Washer & Dryer', description: 'Professional repair services for washers and dryers of every make and model.', icon: 'washer', category: 'laundry' },
  { id: '3', title: 'Dishwasher Repair', description: 'Restore your dishwasher to peak performance with our expert repair services.', icon: 'dishwasher', category: 'kitchen' },
  { id: '4', title: 'Oven & Range', description: 'From burner issues to electronic controls, we handle all oven and range repairs.', icon: 'oven', category: 'cooking' },
  { id: '5', title: 'Wine Cooler', description: 'Specialized repair for luxury wine coolers and beverage centers.', icon: 'wine', category: 'specialty' },
  { id: '6', title: 'Ice Maker', description: 'Prompt repair for built-in and standalone ice makers.', icon: 'ice', category: 'specialty' },
];

const testimonials: Testimonial[] = [
  { id: '1', name: 'Margaret Thompson', location: 'Princeton, NJ', rating: 5, text: 'After 30 years of homeownership, I have never encountered such professional and courteous service. They repaired my Sub-Zero refrigerator with remarkable expertise.', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150', date: 'December 2024' },
  { id: '2', name: 'Robert Harrison', location: 'Short Hills, NJ', rating: 5, text: 'The technician arrived precisely on time and diagnosed my Viking range issue within minutes. True professionals who respect your home and time.', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=150', date: 'November 2024' },
  { id: '3', name: 'Elizabeth Chen', location: 'Morristown, NJ', rating: 5, text: 'When my Miele dishwasher stopped working before a dinner party, they came same-day and resolved the issue. Exceptional service!', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=150', date: 'November 2024' },
];

const awards: Award[] = [
  { id: '1', title: 'Best Appliance Repair', year: '2024', issuer: 'NJ Business Excellence' },
  { id: '2', title: 'Customer Choice Award', year: '2023', issuer: 'HomeAdvisor' },
  { id: '3', title: '30 Years of Excellence', year: '1992-2024', issuer: 'Industry Recognition' },
  { id: '4', title: 'Factory Authorized', year: '2024', issuer: 'Premium Brands' },
];

const serviceAreas = ['Monmouth County', 'Middlesex County', 'Ocean County', 'Mercer County', 'Somerset County', 'Union County'];

const ServiceIcon: React.FC = () => {
  return (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
};

const Home: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();
  const [promiseRef, promiseVisible] = useScrollAnimation<HTMLDivElement>();
  const [servicesRef, servicesVisible] = useScrollAnimation<HTMLDivElement>();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation<HTMLDivElement>();
  const [awardsRef, awardsVisible] = useScrollAnimation<HTMLDivElement>();
  const [areasRef, areasVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/18285887/pexels-photo-18285887.jpeg" alt="Elegant kitchen interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-forest/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-transparent to-forest/60" />
        </div>

        <div className="absolute inset-8 sm:inset-16 border-2 border-copper/30 pointer-events-none" />
        <div className="absolute top-6 left-6 sm:top-14 sm:left-14 w-8 h-8 border-t-4 border-l-4 border-copper" />
        <div className="absolute top-6 right-6 sm:top-14 sm:right-14 w-8 h-8 border-t-4 border-r-4 border-copper" />
        <div className="absolute bottom-6 left-6 sm:bottom-14 sm:left-14 w-8 h-8 border-b-4 border-l-4 border-copper" />
        <div className="absolute bottom-6 right-6 sm:bottom-14 sm:right-14 w-8 h-8 border-b-4 border-r-4 border-copper" />

        <div className={`relative z-10 text-center px-4 max-w-4xl mx-auto transform transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-copper font-serif tracking-widest uppercase mb-4 text-sm sm:text-base">Established 1992 | 30+ Years of Excellence</p>
          <h1 className="font-cormorant font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory mb-6 leading-tight">
            Advanced Appliance<span className="block text-copper">Repair Service</span>
          </h1>
          <p className="font-serif text-ivory/90 text-lg sm:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Courteous, professional, fast, and reliable appliance repair services for discerning homeowners across New Jersey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" href="/contact">Schedule Service</Button>
            <Button variant="outline" size="lg" href="tel:7324167430" className="border-ivory text-ivory hover:bg-ivory hover:text-forest">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              (732) 416-7430
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {['Licensed', 'Bonded', 'Insured', 'Factory Authorized'].map((badge) => (
              <span key={badge} className="px-4 py-2 bg-ivory/10 border border-copper/50 rounded-full text-ivory/90 font-serif text-sm backdrop-blur-sm">{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section ref={promiseRef} className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${promiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-burgundy font-serif tracking-widest uppercase mb-4">Why Choose Us</p>
            <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-forest mb-6">Our Promise to You</h2>
            <OrnamentDivider variant="ornate" color="copper" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-700 delay-200 ${promiseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Same-Day Service', description: 'We understand urgency. Most repairs completed within 24 hours.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>, title: 'Factory Authorized', description: 'Certified to repair all major luxury appliance brands.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: 'Expert Technicians', description: 'Our team has decades of combined experience and ongoing training.' },
              { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Guaranteed Work', description: 'All repairs backed by our comprehensive warranty.' },
            ].map((item, index) => (
              <div key={item.title} className="text-center p-6 bg-ivory border-2 border-forest/10 rounded-xl hover:border-copper hover:shadow-lg transition-all duration-300 group" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-forest/10 flex items-center justify-center text-forest group-hover:bg-copper group-hover:text-ivory transition-all duration-300">{item.icon}</div>
                <h3 className="font-cormorant font-bold text-xl text-forest mb-3">{item.title}</h3>
                <p className="font-serif text-forest/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-forest/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-burgundy font-serif tracking-widest uppercase mb-4">What We Do</p>
            <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-forest mb-6">Our Premium Services</h2>
            <OrnamentDivider variant="diamond" color="forest" className="max-w-md mx-auto" />
            <p className="font-serif text-forest/70 max-w-2xl mx-auto mt-6 text-lg">From everyday appliances to luxury brands, we provide expert repair services with the care and attention your home deserves.</p>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-700 delay-200 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {services.map((service, index) => (
              <ClassicCard key={service.id} variant="service" title={service.title ?? ''} description={service.description ?? ''} icon={<ServiceIcon />} href={`/services/${(service.title ?? '').toLowerCase().replace(/\s+&?\s*/g, '-')}`} style={{ transitionDelay: `${index * 100}ms` }} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" href="/services">View All Services<svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-burgundy font-serif tracking-widest uppercase mb-4">Testimonials</p>
            <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-forest mb-6">Stories from Our Clients</h2>
            <OrnamentDivider variant="floral" color="burgundy" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transform transition-all duration-700 delay-200 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {testimonials.map((testimonial) => (<TestimonialCard key={testimonial.id} testimonial={testimonial} />))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section ref={awardsRef} className="py-20 bg-forest text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-copper font-serif tracking-widest uppercase mb-4">Recognition</p>
            <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-ivory mb-6">Awards & Certifications</h2>
            <OrnamentDivider variant="ornate" color="copper" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transform transition-all duration-700 delay-200 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {awards.map((award) => (
              <div key={award.id} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-copper/20 flex items-center justify-center border-2 border-copper">
                  <svg className="w-10 h-10 text-copper" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                </div>
                <h4 className="font-cormorant font-bold text-lg text-ivory mb-1">{award.title}</h4>
                <p className="font-serif text-ivory/60 text-sm">{award.issuer}</p>
                <p className="font-serif text-copper text-sm mt-1">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas We Serve Section */}
      <section ref={areasRef} className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-burgundy font-serif tracking-widest uppercase mb-4">Service Areas</p>
            <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-forest mb-6">Areas We Serve</h2>
            <OrnamentDivider variant="simple" color="forest" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-700 delay-200 ${areasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative aspect-[4/3] bg-forest/10 rounded-xl border-2 border-forest/20 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-16 h-16 mx-auto text-forest/40 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  <p className="font-serif text-forest/60">Interactive Map Coming Soon</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-copper" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-copper" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-copper" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-copper" />
            </div>
            <div>
              <h3 className="font-cormorant font-bold text-2xl text-forest mb-6">Proudly Serving New Jersey</h3>
              <p className="font-serif text-forest/70 mb-8 leading-relaxed">Our expert technicians provide reliable appliance repair services throughout Central New Jersey.</p>
              <div className="grid grid-cols-2 gap-4">
                {serviceAreas.map((area) => (
                  <a key={area} href={`/areas/${area.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center p-4 bg-forest/5 rounded-lg border border-forest/10 hover:border-copper hover:shadow-md transition-all group">
                    <svg className="w-5 h-5 text-copper mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                    <span className="font-serif text-forest group-hover:text-copper transition-colors">{area}</span>
                  </a>
                ))}
              </div>
              <div className="mt-8"><Button variant="outline" href="/areas">View All Service Areas<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></Button></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-burgundy text-ivory relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 border-2 border-ivory rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-ivory rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-ivory mb-6">Ready to Schedule Your Repair?</h2>
          <p className="font-serif text-ivory/90 text-lg mb-8 max-w-2xl mx-auto">Our experienced technicians are standing by to help. Contact us today for fast, reliable appliance repair service.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory text-burgundy hover:bg-transparent hover:text-ivory border-ivory" href="/contact">Schedule Service Online</Button>
            <Button variant="outline" size="lg" className="border-ivory text-ivory hover:bg-ivory hover:text-burgundy" href="tel:7324167430">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              (732) 416-7430
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
