'use client';

import React from 'react';
import { Navigation, Footer, OrnamentDivider, Breadcrumb, Button, TestimonialCard } from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ServiceArea, Testimonial, Service } from '../types';

const areaData: ServiceArea = { id: 'monmouth-county', name: 'Monmouth County', description: 'Serving the beautiful communities of Monmouth County with premium appliance repair services since 1992.', zipCodes: ['07701', '07702', '07703', '07704', '07711', '07712', '07716', '07717', '07718', '07719', '07720', '07721', '07722', '07723', '07724', '07726', '07727', '07728', '07730', '07731'] };

const localCities = [
  { name: 'Red Bank', description: 'Historic downtown with premium homes' },
  { name: 'Rumson', description: 'Luxury estates and waterfront properties' },
  { name: 'Holmdel', description: 'Upscale residential community' },
  { name: 'Colts Neck', description: 'Horse country elegance' },
  { name: 'Little Silver', description: 'Charming suburban living' },
  { name: 'Fair Haven', description: 'Waterfront community charm' },
  { name: 'Shrewsbury', description: 'Historic borough appeal' },
  { name: 'Middletown', description: 'Diverse neighborhoods' },
];

const services: Service[] = [
  { id: '1', title: 'Refrigerator Repair', description: 'Expert repair for all refrigerator brands.', icon: 'refrigerator', category: 'cooling' },
  { id: '2', title: 'Washer & Dryer', description: 'Professional laundry appliance services.', icon: 'washer', category: 'laundry' },
  { id: '3', title: 'Dishwasher Repair', description: 'Restore your dishwasher to peak performance.', icon: 'dishwasher', category: 'kitchen' },
  { id: '4', title: 'Oven & Range', description: 'All cooking appliance repairs.', icon: 'oven', category: 'cooking' },
];

const testimonials: Testimonial[] = [
  { id: '1', name: 'Catherine Reynolds', location: 'Rumson, NJ', rating: 5, text: 'Living in Rumson, I need technicians who understand luxury appliances. Advanced Appliance has serviced our Sub-Zero and Wolf equipment for years.', date: 'December 2024' },
  { id: '2', name: 'David Harrison', location: 'Holmdel, NJ', rating: 5, text: 'Quick response time and professional service. They repaired our Thermador range and it works better than ever.', date: 'November 2024' },
];

const nearbyAreas = [
  { name: 'Middlesex County', href: '/areas/middlesex-county' },
  { name: 'Ocean County', href: '/areas/ocean-county' },
  { name: 'Mercer County', href: '/areas/mercer-county' },
  { name: 'Somerset County', href: '/areas/somerset-county' },
];

const AreaPage: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();
  const [servicesRef, servicesVisible] = useScrollAnimation<HTMLDivElement>();
  const [citiesRef, citiesVisible] = useScrollAnimation<HTMLDivElement>();
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-contemporary-platinum-200">
      <Navigation />

      <section ref={heroRef} className="relative py-24 bg-contemporary-charcoal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #ecf0f1 1px, transparent 0)', backgroundSize: '40px 40px' }} /></div>
        <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-contemporary-gold-500" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-contemporary-gold-500" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-contemporary-gold-500" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-contemporary-gold-500" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Areas', href: '/areas' }, { label: areaData.name }]} className="mb-8 text-contemporary-platinum-400/60" />
          <div className={`text-center transform transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">Service Area</p>
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-contemporary-white mb-6">{areaData.name}</h1>
            <OrnamentDivider variant="ornate" color="contemporary-gold-500" className="max-w-md mx-auto" />
            <p className="font-poppins text-contemporary-platinum-400/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">{areaData.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="primary" size="lg" href="/contact">Schedule Service</Button>
              <Button variant="outline" size="lg" className="border-contemporary-white text-contemporary-white hover:bg-contemporary-white hover:text-contemporary-charcoal-900" href="tel:7324167430">(732) 416-7430</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-contemporary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] bg-contemporary-platinum-200 rounded-xl border-2 border-contemporary-platinum-400/50 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="w-20 h-20 mx-auto text-contemporary-charcoal-900/30 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  <h3 className="font-playfair font-bold text-2xl text-contemporary-charcoal-900 mb-2">{areaData.name}</h3>
                  <p className="font-poppins text-contemporary-charcoal-900/60">Interactive map coming soon</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-contemporary-gold-500" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-contemporary-gold-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-contemporary-gold-500" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-contemporary-gold-500" />
            </div>
            <div>
              <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">Premium Service</p>
              <h2 className="font-playfair font-bold text-4xl text-contemporary-charcoal-900 mb-6">Trusted by {areaData.name} Homeowners</h2>
              <OrnamentDivider variant="simple" color="contemporary-gold-500" className="max-w-xs mb-8" />
              <p className="font-poppins text-contemporary-charcoal-900/80 leading-relaxed mb-6">For over 30 years, Advanced Appliance Repair Service has been the preferred choice for {areaData.name} residents who demand excellence.</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-contemporary-platinum-200 rounded-lg"><p className="font-playfair font-bold text-2xl text-contemporary-gold-500">30+</p><p className="font-poppins text-contemporary-charcoal-900/60 text-sm">Years Serving</p></div>
                <div className="text-center p-4 bg-contemporary-platinum-200 rounded-lg"><p className="font-playfair font-bold text-2xl text-contemporary-gold-500">5K+</p><p className="font-poppins text-contemporary-charcoal-900/60 text-sm">Local Clients</p></div>
                <div className="text-center p-4 bg-contemporary-platinum-200 rounded-lg"><p className="font-playfair font-bold text-2xl text-contemporary-gold-500">4.9</p><p className="font-poppins text-contemporary-charcoal-900/60 text-sm">Star Rating</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-20 bg-contemporary-platinum-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">What We Offer</p>
            <h2 className="font-playfair font-bold text-4xl text-contemporary-charcoal-900 mb-4">Services in {areaData.name}</h2>
            <OrnamentDivider variant="diamond" color="contemporary-charcoal-900" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transform transition-all duration-700 delay-200 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {services.map((service, index) => (
              <a key={service.id} href={`/services/${(service.title ?? '').toLowerCase().replace(/\s+&?\s*/g, '-')}`} className="group bg-contemporary-white border-2 border-contemporary-platinum-400/30 rounded-xl p-6 hover:border-contemporary-gold-500 hover:shadow-lg transition-all text-center" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-contemporary-charcoal-900/10 flex items-center justify-center text-contemporary-charcoal-900 group-hover:bg-contemporary-gold-500 group-hover:text-contemporary-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h3 className="font-playfair font-bold text-xl text-contemporary-charcoal-900 mb-2 group-hover:text-contemporary-gold-500 transition-colors">{service.title}</h3>
                <p className="font-poppins text-contemporary-charcoal-900/70 text-sm">{service.description}</p>
              </a>
            ))}
          </div>
          <div className="text-center mt-12"><Button variant="secondary" href="/services">View All Services</Button></div>
        </div>
      </section>

      <section ref={citiesRef} className="py-20 bg-contemporary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${citiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">Communities We Serve</p>
            <h2 className="font-playfair font-bold text-4xl text-contemporary-charcoal-900 mb-4">Cities in {areaData.name}</h2>
            <OrnamentDivider variant="ornate" color="contemporary-gold-500" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-700 delay-200 ${citiesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {localCities.map((city, index) => (
              <div key={city.name} className="bg-contemporary-platinum-200 border-2 border-contemporary-platinum-400/50 rounded-xl p-6 hover:border-contemporary-gold-500 hover:shadow-lg transition-all" style={{ transitionDelay: `${index * 50}ms` }}>
                <div className="flex items-center space-x-3 mb-2"><svg className="w-5 h-5 text-contemporary-gold-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg><h3 className="font-playfair font-bold text-lg text-contemporary-charcoal-900">{city.name}</h3></div>
                <p className="font-poppins text-contemporary-charcoal-900/60 text-sm">{city.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={testimonialsRef} className="py-20 bg-contemporary-charcoal-900 text-contemporary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">Local Reviews</p>
            <h2 className="font-playfair font-bold text-4xl text-contemporary-white mb-4">What {areaData.name} Residents Say</h2>
            <OrnamentDivider variant="floral" color="contemporary-gold-500" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto transform transition-all duration-700 delay-200 ${testimonialsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {testimonials.map((testimonial) => (<TestimonialCard key={testimonial.id} testimonial={testimonial} variant="featured" />))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-contemporary-platinum-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8"><h2 className="font-playfair font-bold text-2xl text-contemporary-charcoal-900 mb-4">Zip Codes We Serve in {areaData.name}</h2><OrnamentDivider variant="simple" color="contemporary-charcoal-900" className="max-w-xs mx-auto" /></div>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {(areaData.zipCodes ?? []).map((zip) => (<span key={zip} className="px-3 py-1 bg-contemporary-white border border-contemporary-platinum-400/50 rounded text-sm font-mono text-contemporary-charcoal-900">{zip}</span>))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-contemporary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8"><h2 className="font-playfair font-bold text-2xl text-contemporary-charcoal-900 mb-4">Nearby Service Areas</h2><OrnamentDivider variant="simple" color="contemporary-gold-500" className="max-w-xs mx-auto" /></div>
          <div className="flex flex-wrap justify-center gap-4">
            {nearbyAreas.map((area) => (<a key={area.name} href={area.href} className="px-6 py-3 bg-contemporary-platinum-200 border-2 border-contemporary-platinum-400/50 rounded-full font-poppins text-contemporary-charcoal-900 hover:border-contemporary-gold-500 hover:shadow-md transition-all">{area.name}</a>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-contemporary-slate-900 text-contemporary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-contemporary-white mb-6">Need Appliance Repair in {areaData.name}?</h2>
          <p className="font-poppins text-contemporary-platinum-400 text-lg mb-8 max-w-2xl mx-auto">Our expert technicians are ready to serve you. Contact us today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-contemporary-white text-contemporary-slate-900 hover:bg-contemporary-gold-500 hover:text-contemporary-charcoal-900 border-contemporary-white" href="/contact">Schedule Service</Button>
            <Button variant="outline" size="lg" className="border-contemporary-white text-contemporary-white hover:bg-contemporary-white hover:text-contemporary-slate-900" href="tel:7324167430">(732) 416-7430</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AreaPage;
