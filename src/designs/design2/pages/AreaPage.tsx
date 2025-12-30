import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StatsGrid } from '../components/AnimatedCounter';
import { BUSINESS_INFO, SERVICES, SERVICE_AREAS, STATS, IMAGES } from '../utils/constants';

interface AreaPageProps { areaName?: string; }

export const AreaPage: React.FC<AreaPageProps> = ({ areaName = 'Edison' }) => {
  const formattedAreaName = areaName.charAt(0).toUpperCase() + areaName.slice(1).replace('-', ' ');
  const areaInfo = { description: `For over 30 years, Advanced Appliance Repair Service has been the trusted choice for appliance repair in ${formattedAreaName}, NJ.`, zipCodes: ['08817', '08818', '08820', '08837'], nearbyAreas: SERVICE_AREAS.filter((a) => a.toLowerCase() !== areaName.toLowerCase()).slice(0, 4) };
  const testimonials = [{ name: 'Jennifer M.', text: `The technician arrived on time and fixed my Samsung refrigerator in under an hour. Best appliance repair service in ${formattedAreaName}!`, rating: 5 }, { name: 'David K.', text: 'Called for an emergency dryer repair and they came same day. Professional, knowledgeable, and fairly priced.', rating: 5 }];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="areas" />
      <section className="bg-[#0A1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} /></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-6"><a href="/" className="hover:text-white transition-colors">Home</a><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg><a href="/areas" className="hover:text-white transition-colors">Service Areas</a><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg><span className="text-[#3B82F6]">{formattedAreaName}</span></nav>
          <div className="flex items-center space-x-3 mb-6"><div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest">Serving {formattedAreaName}, NJ</span></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Appliance Repair in<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"> {formattedAreaName} </span></h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">{areaInfo.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center justify-center space-x-2 px-8 py-4 bg-[#3B82F6] text-white rounded-xl font-bold hover:bg-[#2563EB] transition-colors shadow-lg shadow-[#3B82F6]/30"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>Call {BUSINESS_INFO.phone}</span></a>
            <a href="/contact" className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white/20 text-white rounded-xl font-bold hover:bg-white hover:text-[#0A1628] transition-colors"><span>Schedule Service</span></a>
          </div>
        </div>
      </section>

      <StatsGrid stats={STATS} />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Our Services</span><h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">Appliance Repair in {formattedAreaName}</h2><p className="text-gray-600 text-lg max-w-2xl mx-auto">We repair all major household appliances. Our technicians are factory-certified and carry genuine parts.</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{SERVICES.map((service) => (<a key={service.id} href={`/services/${service.id}`} className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#3B82F6] hover:shadow-xl transition-all"><div className="flex items-start space-x-4"><div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center text-[#0A1628] group-hover:bg-[#3B82F6] group-hover:text-white transition-colors flex-shrink-0"><svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div><div><h3 className="text-lg font-bold text-[#0A1628] mb-2 group-hover:text-[#3B82F6] transition-colors">{service.name} in {formattedAreaName}</h3><p className="text-gray-600 text-sm line-clamp-2">{service.description}</p></div></div></a>))}</div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">{formattedAreaName}'s Trusted Appliance Repair Experts</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">When your appliances break down, you need a repair service you can trust. Here is why {formattedAreaName} residents choose Advanced Appliance Repair Service:</p>
              <div className="space-y-6">{[{ title: 'Same-Day Service', description: 'Most repairs completed within 24 hours' }, { title: 'Factory Authorized', description: 'Certified to repair all major brands' }, { title: 'Upfront Pricing', description: 'No hidden fees or surprise charges' }, { title: '90-Day Warranty', description: 'All repairs backed by our warranty' }].map((item) => (<div key={item.title} className="flex items-start space-x-4"><div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div><div><h3 className="font-bold text-[#0A1628]">{item.title}</h3><p className="text-gray-600">{item.description}</p></div></div>))}</div>
            </div>
            <div className="relative"><img src={IMAGES.technician} alt={`Appliance repair technician in ${formattedAreaName}`} className="rounded-2xl shadow-2xl" /><div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl"><div className="flex items-center space-x-4"><div className="text-4xl font-bold text-[#3B82F6]">89%</div><div><p className="font-bold text-[#0A1628]">First-Visit Fix Rate</p><p className="text-gray-500 text-sm">in {formattedAreaName}</p></div></div></div></div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Testimonials</span><h2 className="text-4xl md:text-5xl font-bold text-white">What {formattedAreaName} Residents Say</h2></div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">{testimonials.map((t, i) => (<div key={i} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"><div className="flex items-center space-x-1 mb-4">{[1, 2, 3, 4, 5].map((star) => (<svg key={star} className={`w-5 h-5 ${star <= t.rating ? 'text-yellow-500' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>))}</div><p className="text-white mb-6 leading-relaxed">"{t.text}"</p><div className="flex items-center space-x-3"><div className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center text-white font-bold">{t.name.charAt(0)}</div><div><p className="text-white font-medium">{t.name}</p><p className="text-gray-400 text-sm">{formattedAreaName}, NJ</p></div></div></div>))}</div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div><h3 className="text-2xl font-bold text-[#0A1628] mb-6">Zip Codes We Serve in {formattedAreaName}</h3><div className="flex flex-wrap gap-3">{areaInfo.zipCodes.map((zip) => (<span key={zip} className="px-4 py-2 bg-gray-100 rounded-xl text-[#0A1628] font-medium">{zip}</span>))}</div></div>
            <div><h3 className="text-2xl font-bold text-[#0A1628] mb-6">Nearby Service Areas</h3><div className="grid grid-cols-2 gap-4">{areaInfo.nearbyAreas.map((area) => (<a key={area} href={`/areas/${area.toLowerCase().replace(' ', '-')}`} className="flex items-center space-x-2 text-gray-600 hover:text-[#3B82F6] transition-colors group"><svg className="w-4 h-4 text-[#3B82F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg><span className="group-hover:translate-x-1 transition-transform">{area}, NJ</span></a>))}</div></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#3B82F6] to-[#2563EB]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Schedule Your Repair in {formattedAreaName}?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Our technicians are standing by to help. Call now for same-day service or schedule online.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center space-x-3 px-8 py-4 bg-white text-[#0A1628] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>{BUSINESS_INFO.phone}</span></a>
            <a href="/contact" className="flex items-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#0A1628] transition-colors"><span>Schedule Online</span></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
