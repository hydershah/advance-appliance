'use client';

import React, { useState } from 'react';
import { Navigation, Footer, OrnamentDivider, Breadcrumb, Button } from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const serviceCategories = [
  {
    id: 'refrigeration', name: 'Refrigeration', description: 'Expert repair for all cooling appliances',
    services: [
      { id: 'refrigerator', title: 'Refrigerator Repair', description: 'Complete diagnosis and repair for all refrigerator types.', image: 'https://images.pexels.com/photos/6636288/pexels-photo-6636288.jpeg', features: ['Cooling issues', 'Ice maker repair', 'Water dispenser', 'Compressor service'] },
      { id: 'wine-cooler', title: 'Wine Cooler Repair', description: 'Specialized service for luxury wine coolers.', image: 'https://images.pexels.com/photos/2912108/pexels-photo-2912108.jpeg', features: ['Temperature zones', 'Humidity control', 'Vibration issues', 'Door seals'] },
    ],
  },
  {
    id: 'cooking', name: 'Cooking Appliances', description: 'Professional repair for all cooking equipment',
    services: [
      { id: 'oven', title: 'Oven Repair', description: 'Expert oven repair for conventional, convection, and steam ovens.', image: 'https://images.pexels.com/photos/4397899/pexels-photo-4397899.jpeg', features: ['Heating elements', 'Temperature calibration', 'Self-cleaning issues', 'Control panels'] },
      { id: 'range', title: 'Range & Cooktop', description: 'Professional repair for gas, electric, and induction cooktops.', image: 'https://images.pexels.com/photos/6489117/pexels-photo-6489117.jpeg', features: ['Burner issues', 'Igniter repair', 'Surface elements', 'Control knobs'] },
    ],
  },
  {
    id: 'laundry', name: 'Laundry Appliances', description: 'Complete laundry appliance repair services',
    services: [
      { id: 'washer', title: 'Washer Repair', description: 'Expert washing machine repair for all unit types.', image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg', features: ['Drain issues', 'Spin cycle', 'Water inlet', 'Motor repair'] },
      { id: 'dryer', title: 'Dryer Repair', description: 'Professional dryer repair for gas and electric models.', image: 'https://images.pexels.com/photos/5591466/pexels-photo-5591466.jpeg', features: ['Heating issues', 'Drum problems', 'Vent cleaning', 'Timer repair'] },
    ],
  },
  {
    id: 'kitchen', name: 'Kitchen Appliances', description: 'Comprehensive kitchen appliance services',
    services: [
      { id: 'dishwasher', title: 'Dishwasher Repair', description: 'Complete dishwasher repair for all brands.', image: 'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg', features: ['Cleaning issues', 'Drain problems', 'Spray arms', 'Door latch'] },
    ],
  },
];

const premiumBrands = ['Sub-Zero', 'Wolf', 'Viking', 'Thermador', 'Miele', 'Bosch', 'KitchenAid', 'Jenn-Air', 'Gaggenau', 'Dacor', 'LG', 'Samsung'];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();
  const [categoriesRef, categoriesVisible] = useScrollAnimation<HTMLDivElement>();

  const filteredCategories = activeCategory === 'all' ? serviceCategories : serviceCategories.filter(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-ivory">
      <Navigation />

      <section ref={heroRef} className="relative py-24 bg-forest overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFFAF5 1px, transparent 0)', backgroundSize: '40px 40px' }} /></div>
        <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-copper" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-copper" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-copper" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-copper" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumb items={[{ label: 'Services' }]} className="mb-8 text-ivory/60" />
          <div className={`text-center transform transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-copper font-serif tracking-widest uppercase mb-4">Expert Appliance Care</p>
            <h1 className="font-cormorant font-bold text-4xl sm:text-5xl md:text-6xl text-ivory mb-6">Our Premium Services</h1>
            <OrnamentDivider variant="ornate" color="copper" className="max-w-md mx-auto" />
            <p className="font-serif text-ivory/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">With over 30 years of experience, we provide exceptional repair services for all major appliances and luxury brands.</p>
          </div>
        </div>
      </section>

      <section className="py-8 bg-ivory border-b border-forest/10 sticky top-[88px] z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={() => setActiveCategory('all')} className={`px-6 py-2 rounded-full font-serif text-sm transition-all ${activeCategory === 'all' ? 'bg-forest text-ivory' : 'bg-forest/10 text-forest hover:bg-forest/20'}`}>All Services</button>
            {serviceCategories.map((category) => (
              <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-2 rounded-full font-serif text-sm transition-all ${activeCategory === category.id ? 'bg-forest text-ivory' : 'bg-forest/10 text-forest hover:bg-forest/20'}`}>{category.name}</button>
            ))}
          </div>
        </div>
      </section>

      <section ref={categoriesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.map((category, catIndex) => (
            <div key={category.id} className={`mb-20 last:mb-0 transform transition-all duration-700 ${categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${catIndex * 150}ms` }}>
              <div className="text-center mb-12">
                <h2 className="font-cormorant font-bold text-3xl sm:text-4xl text-forest mb-3">{category.name}</h2>
                <p className="font-serif text-forest/60">{category.description}</p>
                <OrnamentDivider variant="simple" color="copper" className="max-w-xs mx-auto mt-4" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, index) => (
                  <a key={service.id} href={`/services/${service.id}`} className="group bg-ivory border-2 border-forest/20 rounded-xl overflow-hidden hover:border-copper hover:shadow-xl transition-all duration-300" style={{ transitionDelay: `${(catIndex * 150) + (index * 100)}ms` }}>
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-2/5 relative overflow-hidden">
                        <div className="aspect-[4/3] lg:aspect-auto lg:absolute lg:inset-0"><img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /></div>
                      </div>
                      <div className="lg:w-3/5 p-6 lg:p-8">
                        <h3 className="font-cormorant font-bold text-2xl text-forest mb-3 group-hover:text-copper transition-colors">{service.title}</h3>
                        <p className="font-serif text-forest/70 mb-4 leading-relaxed">{service.description}</p>
                        <div className="grid grid-cols-2 gap-2 mb-4">
                          {service.features.map((feature) => (
                            <div key={feature} className="flex items-center text-sm"><svg className="w-4 h-4 text-copper mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg><span className="font-serif text-forest/70">{feature}</span></div>
                          ))}
                        </div>
                        <span className="inline-flex items-center text-burgundy font-serif group-hover:text-copper transition-colors">Learn More<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-forest/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><p className="text-burgundy font-serif tracking-widest uppercase mb-4">Factory Authorized</p><h2 className="font-cormorant font-bold text-3xl sm:text-4xl text-forest mb-4">Premium Brands We Service</h2><OrnamentDivider variant="diamond" color="forest" className="max-w-xs mx-auto" /></div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {premiumBrands.map((brand) => (<div key={brand} className="aspect-[3/2] bg-ivory border border-forest/20 rounded-lg flex items-center justify-center p-4 hover:border-copper hover:shadow-md transition-all group"><span className="font-cormorant font-bold text-forest/70 group-hover:text-forest text-center">{brand}</span></div>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-burgundy text-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cormorant font-bold text-4xl sm:text-5xl text-ivory mb-6">Need Appliance Repair?</h2>
          <p className="font-serif text-ivory/90 text-lg mb-8 max-w-2xl mx-auto">Our expert technicians are ready to help. Schedule your service today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-ivory text-burgundy hover:bg-transparent hover:text-ivory border-ivory" href="/contact">Schedule Service</Button>
            <Button variant="outline" size="lg" className="border-ivory text-ivory hover:bg-ivory hover:text-burgundy" href="tel:7324167430">(732) 416-7430</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
