'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SERVICES, BUSINESS_INFO, BRANDS, IMAGES } from '../utils/constants';

interface ServiceDetailProps { serviceId?: string; }

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId = 'refrigerator' }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const service = SERVICES.find((s) => s.id === serviceId) ?? SERVICES[0];
  if (!service) return null;
  const tabs = [{ id: 'overview', label: 'Overview' }, { id: 'problems', label: 'Common Problems' }, { id: 'pricing', label: 'Pricing' }, { id: 'faq', label: 'FAQ' }];
  const commonProblems = [
    { problem: 'Not Cooling Properly', description: 'Thermostat, compressor, or condenser coil issues', avgCost: '$150 - $400' },
    { problem: 'Making Strange Noises', description: 'Fan motor, compressor, or evaporator fan problems', avgCost: '$100 - $350' },
    { problem: 'Leaking Water', description: 'Drain line clog, water inlet valve, or door seal issues', avgCost: '$75 - $200' },
    { problem: 'Ice Maker Not Working', description: 'Water line, inlet valve, or ice maker module failure', avgCost: '$100 - $300' },
  ];
  const faqs = [
    { question: `How long does a typical ${service.name.toLowerCase()} take?`, answer: 'Most repairs are completed within 1-2 hours. Complex repairs like compressor replacement may take longer.' },
    { question: 'Do you offer warranties on repairs?', answer: 'Yes! All our repairs come with a 90-day parts and labor warranty for your peace of mind.' },
    { question: 'What brands do you service?', answer: 'We are factory-authorized to repair all major brands including Samsung, LG, Whirlpool, GE, Sub-Zero, Viking, and more.' },
  ];

  return (
    <div className="min-h-screen bg-white font-openSans">
      <Header currentPage="services" />
      <section className="bg-modern-navy-900 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="max-w-2xl">
              <nav className="flex items-center space-x-2 text-sm text-modern-cream-300/60 mb-6"><a href="/" className="hover:text-white transition-colors">Home</a><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg><a href="/services" className="hover:text-white transition-colors">Services</a><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg><span className="text-modern-gold-500">{service.name}</span></nav>
              <h1 className="font-lora text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{service.name}</h1>
              <p className="text-modern-cream-300/90 text-lg md:text-xl leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">{service.features.map((f) => (<span key={f} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-modern-cream-300/90">{f}</span>))}</div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center justify-center space-x-2 px-8 py-4 bg-modern-blue-500 text-white rounded-lg font-semibold hover:bg-modern-blue-600 transition-colors shadow-lg"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>Call for Service</span></a>
                <a href="/contact" className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-modern-cream-300/30 text-white rounded-lg font-semibold hover:bg-white hover:text-modern-navy-900 transition-colors"><span>Schedule Online</span></a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg w-full lg:w-auto lg:min-w-[320px]">
              <div className="text-center mb-6"><span className="text-modern-charcoal/60 text-sm uppercase tracking-wider">Starting from</span><div className="font-lora text-4xl font-bold text-modern-navy-900 mt-2">{service.price}</div><span className="text-modern-charcoal/60">Concierge visit + diagnosis</span></div>
              <div className="space-y-4 mb-6">{['90-Day Warranty', 'Genuine Parts', 'Same-Day Service', 'Licensed Technicians'].map((item) => (<div key={item} className="flex items-center space-x-3"><svg className="w-5 h-5 text-modern-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-modern-charcoal">{item}</span></div>))}</div>
              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="block w-full py-4 bg-modern-navy-900 text-white text-center rounded-lg font-semibold hover:bg-modern-navy-900/90 transition-colors">{BUSINESS_INFO.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 bg-modern-cream-300 border-b border-gray-200 z-30">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-4 font-medium text-sm uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id ? 'border-modern-blue-500 text-modern-blue-500' : 'border-transparent text-modern-charcoal/70 hover:text-modern-navy-900'}`}>{tab.label}</button>))}</div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-lora text-3xl font-bold text-modern-navy-900 mb-6">Expert {service.name} Services</h2>
                <p className="text-modern-charcoal/70 mb-6 leading-relaxed">Our factory-trained technicians specialize in diagnosing and repairing all types of {service.name.toLowerCase().replace(' repair', '')} issues. With over 30 years of experience, we have seen it all and can fix it all.</p>
                <h3 className="font-lora text-xl font-bold text-modern-navy-900 mt-10 mb-4">Brands We Service</h3>
                <div className="grid grid-cols-3 gap-4">{BRANDS.slice(0, 6).map((brand) => (<div key={brand} className="bg-modern-cream-300 rounded-lg p-4 text-center font-medium text-modern-navy-900 hover:bg-modern-navy-900 hover:text-white transition-colors cursor-pointer">{brand}</div>))}</div>
              </div>
              <div><img src={IMAGES.technician} alt="Professional technician" className="rounded-2xl shadow-lg w-full h-[400px] object-cover" /></div>
            </div>
          )}
          {activeTab === 'problems' && (
            <div>
              <h2 className="font-lora text-3xl font-bold text-modern-navy-900 mb-8">Common {service.name.replace(' Repair', '')} Problems</h2>
              <div className="grid md:grid-cols-2 gap-6">{commonProblems.map((item, i) => (<div key={item.problem} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-modern-blue-500 hover:shadow-lg transition-all"><div className="flex items-start justify-between mb-4"><div className="w-12 h-12 bg-modern-blue-500/10 rounded-lg flex items-center justify-center text-modern-blue-500 font-bold text-xl">{i + 1}</div><span className="text-modern-gold-500 font-bold">{item.avgCost}</span></div><h3 className="font-lora text-xl font-bold text-modern-navy-900 mb-2">{item.problem}</h3><p className="text-modern-charcoal/70">{item.description}</p></div>))}</div>
            </div>
          )}
          {activeTab === 'pricing' && (
            <div>
              <h2 className="font-lora text-3xl font-bold text-modern-navy-900 mb-8">Transparent Pricing</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white border border-gray-200 rounded-2xl p-8"><h3 className="font-lora text-xl font-bold text-modern-navy-900 mb-2">Diagnostic</h3><div className="font-lora text-4xl font-bold text-modern-navy-900 mb-4">$165</div><p className="text-modern-charcoal/70 mb-6">Concierge visit, protection, and diagnosis</p><p className="text-sm text-modern-gold-500 font-medium">Waived with approved repair</p></div>
                <div className="bg-modern-navy-900 rounded-2xl p-8 relative"><div className="absolute top-4 right-4 px-3 py-1 bg-modern-blue-500 rounded-full text-xs font-bold text-white">Most Popular</div><h3 className="font-lora text-xl font-bold text-white mb-2">Standard Repair</h3><div className="font-lora text-4xl font-bold text-white mb-4">$295-$495</div><p className="text-modern-cream-300/80 mb-6">Most common premium appliance repairs</p><a href={`tel:${BUSINESS_INFO.phoneClean}`} className="block w-full py-3 bg-modern-blue-500 text-white text-center rounded-lg font-semibold hover:bg-modern-blue-600 transition-colors">Schedule Now</a></div>
                <div className="bg-white border border-gray-200 rounded-2xl p-8"><h3 className="font-lora text-xl font-bold text-modern-navy-900 mb-2">Major Repair</h3><div className="font-lora text-4xl font-bold text-modern-navy-900 mb-4">$495+</div><p className="text-modern-charcoal/70 mb-6">Complex systems, sealed systems, or specialty units</p><p className="text-sm text-modern-charcoal/60">Detailed estimate provided</p></div>
              </div>
            </div>
          )}
          {activeTab === 'faq' && (
            <div>
              <h2 className="font-lora text-3xl font-bold text-modern-navy-900 mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl space-y-4">{faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}</div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-modern-cream-300">
        <div className="container mx-auto px-6">
          <h2 className="font-lora text-3xl font-bold text-modern-navy-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">{SERVICES.filter((s) => s.id !== service.id).slice(0, 3).map((r) => (<a key={r.id} href={`/services/${r.id}`} className="bg-white rounded-xl p-6 hover:shadow-lg border border-transparent hover:border-modern-blue-500 transition-all group"><h3 className="font-lora text-lg font-bold text-modern-navy-900 mb-2 group-hover:text-modern-blue-500 transition-colors">{r.name}</h3><p className="text-modern-charcoal/70 text-sm mb-4 line-clamp-2">{r.description}</p><span className="text-modern-blue-500 font-medium text-sm flex items-center space-x-1"><span>Learn More</span><svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span></a>))}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-4 flex items-center justify-between text-left"><span className="font-lora font-bold text-modern-navy-900">{question}</span><svg className={`w-5 h-5 text-modern-blue-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
      {isOpen && <div className="px-6 pb-4"><p className="text-modern-charcoal/70">{answer}</p></div>}
    </div>
  );
};
