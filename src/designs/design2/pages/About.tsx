import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StatsGrid } from '../components/AnimatedCounter';
import { BUSINESS_INFO, STATS, IMAGES } from '../utils/constants';

export const About: React.FC = () => {
  const timeline = [
    { year: '1994', title: 'Founded', description: 'Started as a small family business with one technician and a dream to provide honest appliance repair services.' },
    { year: '2000', title: 'Factory Authorization', description: 'Became factory-authorized for major brands including Samsung, LG, and Whirlpool.' },
    { year: '2008', title: 'Expansion', description: 'Expanded our team to 10 certified technicians and opened our first dedicated service center.' },
    { year: '2015', title: 'Digital Transformation', description: 'Launched online booking and real-time technician tracking for customer convenience.' },
    { year: '2024', title: '30 Years Strong', description: 'Celebrating 30 years of service with over 100,000 satisfied customers.' },
  ];
  const teamMembers = [
    { name: 'Robert Thompson', role: 'Founder & CEO', experience: '35+ years' },
    { name: 'Maria Garcia', role: 'Operations Manager', experience: '15+ years' },
    { name: 'James Wilson', role: 'Lead Technician', experience: '20+ years' },
    { name: 'Sarah Chen', role: 'Customer Success', experience: '10+ years' },
  ];
  const values = [
    { icon: 'shield', title: 'Integrity', description: 'Honest pricing, genuine parts, and transparent communication.' },
    { icon: 'star', title: 'Excellence', description: 'We strive for perfection in every repair, backed by our 89% first-visit fix rate.' },
    { icon: 'users', title: 'Customer First', description: 'Your satisfaction is our priority. We are not done until you are completely happy.' },
    { icon: 'clock', title: 'Reliability', description: 'On-time arrivals, same-day service, and repairs that stand the test of time.' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="about" />
      <section className="bg-[#0A1628] pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} /></div>
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-[#3B82F6]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Our Story</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">30 Years of<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"> Trusted </span>Service</h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">What started as a one-man operation has grown into Central New Jersey's most trusted appliance repair service.</p>
        </div>
      </section>

      <StatsGrid stats={STATS} />

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">About Us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6">Family-Owned, Customer-Focused</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>Founded in 1994 by Robert Thompson, Advanced Appliance Repair Service began with a simple mission: provide honest, reliable appliance repair at fair prices.</p>
                <p>Today, we are proud to be factory-authorized service providers for all major appliance brands. Our team of over 50 certified technicians undergoes continuous training.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="inline-flex items-center space-x-2 px-6 py-3 bg-[#0A1628] text-white rounded-xl font-bold hover:bg-[#0A1628]/90 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>Contact Us</span></a>
                <a href="/services" className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-[#0A1628] text-[#0A1628] rounded-xl font-bold hover:bg-[#0A1628] hover:text-white transition-colors"><span>View Services</span></a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-3xl opacity-10" />
              <img src={IMAGES.team} alt="Our team" className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Our Journey</span><h2 className="text-4xl md:text-5xl font-bold text-[#0A1628]">30 Years of Excellence</h2></div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3B82F6] to-[#60A5FA] hidden lg:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#3B82F6]">
                      <span className="text-[#3B82F6] font-bold text-lg">{item.year}</span>
                      <h3 className="text-2xl font-bold text-[#0A1628] mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 bg-[#3B82F6] rounded-full border-4 border-white shadow-lg hidden lg:block" />
                  <div className="hidden lg:block w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A1628]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">What We Stand For</span><h2 className="text-4xl md:text-5xl font-bold text-white">Our Core Values</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors group">
                <div className="w-14 h-14 bg-[#3B82F6] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {value.icon === 'shield' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                    {value.icon === 'star' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />}
                    {value.icon === 'users' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />}
                    {value.icon === 'clock' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16"><span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Meet the Team</span><h2 className="text-4xl md:text-5xl font-bold text-[#0A1628]">Our Leadership</h2></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#3B82F6] to-[#60A5FA]">
                  <div className="absolute inset-0 flex items-center justify-center"><span className="text-6xl font-bold text-white/30">{member.name.charAt(0)}</span></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0A1628] mb-1">{member.name}</h3>
                  <p className="text-[#3B82F6] font-medium">{member.role}</p>
                  <p className="text-gray-500 text-sm mt-1">{member.experience} experience</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#3B82F6] to-[#2563EB]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">Join over 100,000 satisfied customers who trust us with their appliance repairs.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center space-x-3 px-8 py-4 bg-white text-[#0A1628] rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>{BUSINESS_INFO.phone}</span></a>
            <a href="/contact" className="flex items-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white hover:text-[#0A1628] transition-colors"><span>Schedule Service</span></a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
