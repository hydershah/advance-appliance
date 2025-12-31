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
    <div className="min-h-screen bg-white">
      <Header currentPage="services" />
      <section className="bg-[#0A1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} /></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3B82F6]/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
            <div className="max-w-2xl">
              <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6"><a href="/" className="hover:text-white transition-colors">Home</a><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg><a href="/services" className="hover:text-white transition-colors">Services</a><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg><span className="text-[#3B82F6]">{service.name}</span></nav>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{service.name}</h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-4 mb-8">{service.features.map((f) => (<span key={f} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">{f}</span>))}</div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center justify-center space-x-2 px-8 py-4 bg-[#3B82F6] text-white rounded-xl font-bold hover:bg-[#2563EB] transition-colors shadow-lg shadow-[#3B82F6]/30"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>Call for Service</span></a>
                <a href="/contact" className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white hover:text-[#0A1628] transition-colors"><span>Schedule Online</span></a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl w-full lg:w-auto lg:min-w-[320px]">
              <div className="text-center mb-6"><span className="text-gray-500 text-sm uppercase tracking-wider">Starting from</span><div className="text-5xl font-bold text-[#0A1628] mt-2">$89</div><span className="text-gray-500">Service Call + Diagnosis</span></div>
              <div className="space-y-4 mb-6">{['90-Day Warranty', 'Genuine Parts', 'Same-Day Service', 'Licensed Technicians'].map((item) => (<div key={item} className="flex items-center space-x-3"><svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg><span className="text-gray-700">{item}</span></div>))}</div>
              <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="block w-full py-4 bg-[#0A1628] text-white text-center rounded-xl font-bold hover:bg-[#0A1628]/90 transition-colors">{BUSINESS_INFO.phone}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="sticky top-20 bg-white border-b border-gray-100 z-30">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide">{tabs.map((tab) => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-4 font-medium text-sm uppercase tracking-wider whitespace-nowrap border-b-2 transition-colors ${activeTab === tab.id ? 'border-[#3B82F6] text-[#3B82F6]' : 'border-transparent text-gray-500 hover:text-[#0A1628]'}`}>{tab.label}</button>))}</div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-[#0A1628] mb-6">Expert {service.name} Services</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">Our factory-trained technicians specialize in diagnosing and repairing all types of {service.name.toLowerCase().replace(' repair', '')} issues. With over 30 years of experience, we have seen it all and can fix it all.</p>
                <h3 className="text-xl font-bold text-[#0A1628] mt-10 mb-4">Brands We Service</h3>
                <div className="grid grid-cols-3 gap-4">{BRANDS.slice(0, 6).map((brand) => (<div key={brand} className="bg-gray-50 rounded-xl p-4 text-center font-medium text-gray-600 hover:bg-[#0A1628] hover:text-white transition-colors cursor-pointer">{brand}</div>))}</div>
              </div>
              <div><img src={IMAGES.technician} alt="Professional technician" className="rounded-2xl shadow-xl w-full h-[400px] object-cover" /></div>
            </div>
          )}
          {activeTab === 'problems' && (
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Common {service.name.replace(' Repair', '')} Problems</h2>
              <div className="grid md:grid-cols-2 gap-6">{commonProblems.map((item, i) => (<div key={item.problem} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#3B82F6] hover:shadow-lg transition-all"><div className="flex items-start justify-between mb-4"><div className="w-12 h-12 bg-[#3B82F6]/10 rounded-xl flex items-center justify-center text-[#3B82F6] font-bold text-xl">{i + 1}</div><span className="text-[#3B82F6] font-bold">{item.avgCost}</span></div><h3 className="text-xl font-bold text-[#0A1628] mb-2">{item.problem}</h3><p className="text-gray-600">{item.description}</p></div>))}</div>
            </div>
          )}
          {activeTab === 'pricing' && (
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Transparent Pricing</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8"><h3 className="text-xl font-bold text-[#0A1628] mb-2">Diagnostic</h3><div className="text-4xl font-bold text-[#0A1628] mb-4">$79</div><p className="text-gray-600 mb-6">Service call and problem diagnosis</p><p className="text-sm text-[#3B82F6] font-medium">Waived with repair</p></div>
                <div className="bg-[#0A1628] rounded-2xl p-8 relative"><div className="absolute top-4 right-4 px-3 py-1 bg-[#3B82F6] rounded-full text-xs font-bold text-white">Most Popular</div><h3 className="text-xl font-bold text-white mb-2">Standard Repair</h3><div className="text-4xl font-bold text-white mb-4">$149-$299</div><p className="text-gray-400 mb-6">Most common repairs</p><a href={`tel:${BUSINESS_INFO.phoneClean}`} className="block w-full py-3 bg-[#3B82F6] text-white text-center rounded-xl font-bold hover:bg-[#2563EB] transition-colors">Schedule Now</a></div>
                <div className="bg-white border-2 border-gray-200 rounded-2xl p-8"><h3 className="text-xl font-bold text-[#0A1628] mb-2">Major Repair</h3><div className="text-4xl font-bold text-[#0A1628] mb-4">$299+</div><p className="text-gray-600 mb-6">Complex repairs & replacements</p><p className="text-sm text-gray-500">Free estimate provided</p></div>
              </div>
            </div>
          )}
          {activeTab === 'faq' && (
            <div>
              <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Frequently Asked Questions</h2>
              <div className="max-w-3xl space-y-4">{faqs.map((faq, i) => <FAQItem key={i} question={faq.question} answer={faq.answer} />)}</div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A1628] mb-8">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">{SERVICES.filter((s) => s.id !== service.id).slice(0, 3).map((r) => (<a key={r.id} href={`/services/${r.id}`} className="bg-white rounded-xl p-6 hover:shadow-lg border-2 border-transparent hover:border-[#3B82F6] transition-all group"><h3 className="text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#3B82F6] transition-colors">{r.name}</h3><p className="text-gray-600 text-sm mb-4 line-clamp-2">{r.description}</p><span className="text-[#3B82F6] font-medium text-sm flex items-center space-x-1"><span>Learn More</span><svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span></a>))}</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-4 flex items-center justify-between text-left"><span className="font-bold text-[#0A1628]">{question}</span><svg className={`w-5 h-5 text-[#3B82F6] transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
      {isOpen && <div className="px-6 pb-4"><p className="text-gray-600">{answer}</p></div>}
    </div>
  );
};
