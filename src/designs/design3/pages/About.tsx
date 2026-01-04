'use client';

import React from 'react';
import { Navigation, Footer, OrnamentDivider, Breadcrumb, Button, AwardBadge } from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, TeamMember } from '../types';

const awards: Award[] = [
  { id: '1', title: 'Best Appliance Repair', year: '2024', issuer: 'NJ Business Excellence' },
  { id: '2', title: 'Customer Choice Award', year: '2023', issuer: 'HomeAdvisor' },
  { id: '3', title: 'Top Service Provider', year: '2023', issuer: 'Angies List' },
  { id: '4', title: 'Excellence in Service', year: '2022', issuer: 'Better Business Bureau' },
  { id: '5', title: '25 Years of Service', year: '2017', issuer: 'Industry Recognition' },
  { id: '6', title: 'Factory Authorized', year: '2024', issuer: 'Sub-Zero/Wolf' },
];

const teamMembers: TeamMember[] = [
  { id: '1', name: 'Robert Mitchell', role: 'Founder & Master Technician', bio: 'With over 35 years in appliance repair, Robert founded Advanced Appliance in 1992.', image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?w=400' },
  { id: '2', name: 'Michael Chen', role: 'Senior Service Manager', bio: '20+ years of experience managing service operations.', image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?w=400' },
  { id: '3', name: 'Sarah Thompson', role: 'Customer Relations Director', bio: 'Dedicated to ensuring every client interaction reflects our commitment to excellence.', image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?w=400' },
];

const values = [
  { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Integrity', description: 'Honest assessments, fair pricing, and transparent communication.' },
  { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>, title: 'Excellence', description: 'Mastery in our craft using the finest parts and proven techniques.' },
  { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Reliability', description: 'On-time arrivals and lasting repairs are our standard.' },
  { icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>, title: 'Care', description: 'We treat every home with respect and every customer like family.' },
];

const About: React.FC = () => {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();
  const [storyRef, storyVisible] = useScrollAnimation<HTMLDivElement>();
  const [valuesRef, valuesVisible] = useScrollAnimation<HTMLDivElement>();
  const [teamRef, teamVisible] = useScrollAnimation<HTMLDivElement>();
  const [awardsRef, awardsVisible] = useScrollAnimation<HTMLDivElement>();

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
          <Breadcrumb items={[{ label: 'About Us' }]} className="mb-8 text-contemporary-platinum-400/60" />
          <div className={`text-center transform transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">Established 1992</p>
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-contemporary-white mb-6">Our Story</h1>
            <OrnamentDivider variant="ornate" color="contemporary-gold-500" className="max-w-md mx-auto" />
            <p className="font-poppins text-contemporary-platinum-400/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">For over three decades, Advanced Appliance Repair Service has been the trusted choice for discerning New Jersey homeowners.</p>
          </div>
        </div>
      </section>

      <section ref={storyRef} className="py-20 bg-contemporary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transform transition-all duration-700 ${storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-4 border-2 border-contemporary-gold-500/30" />
                <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" alt="Robert Mitchell, Founder" className="relative z-10 w-full h-full object-cover rounded-lg shadow-2xl" />
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-contemporary-gold-500 z-20" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-contemporary-gold-500 z-20" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-contemporary-gold-500 z-20" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-contemporary-gold-500 z-20" />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-contemporary-slate-900 text-contemporary-white px-6 py-2 rounded-full shadow-lg z-30"><p className="font-poppins text-sm">Founder & Master Technician</p></div>
            </div>
            <div>
              <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">The Founder's Vision</p>
              <h2 className="font-playfair font-bold text-4xl text-contemporary-charcoal-900 mb-6">A Legacy of Excellence</h2>
              <OrnamentDivider variant="simple" color="contemporary-charcoal-900" className="max-w-xs mb-8" />
              <div className="space-y-6 font-poppins text-contemporary-charcoal-900/80 leading-relaxed">
                <p>In 1992, Robert Mitchell founded Advanced Appliance Repair Service with a simple but powerful vision: to provide homeowners with the same level of courteous, professional service he would expect in his own home.</p>
                <p>Today, that founding vision continues. Every technician we employ shares Robert's dedication to excellence.</p>
              </div>
              <blockquote className="mt-8 pl-6 border-l-4 border-contemporary-gold-500"><p className="font-playfair text-2xl text-contemporary-charcoal-900 italic">"Every repair is an opportunity to earn a customer for life."</p><cite className="font-poppins text-contemporary-slate-900 mt-2 block">- Robert Mitchell, Founder</cite></blockquote>
            </div>
          </div>
        </div>
      </section>

      <section ref={valuesRef} className="py-20 bg-contemporary-platinum-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">What Guides Us</p>
            <h2 className="font-playfair font-bold text-4xl text-contemporary-charcoal-900 mb-4">Our Core Values</h2>
            <OrnamentDivider variant="diamond" color="contemporary-charcoal-900" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-700 delay-200 ${valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {values.map((value, index) => (
              <div key={value.title} className="bg-contemporary-white rounded-xl p-8 border-2 border-contemporary-platinum-400/30 hover:border-contemporary-gold-500 hover:shadow-xl transition-all text-center group" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-contemporary-slate-900/10 flex items-center justify-center text-contemporary-slate-900 group-hover:bg-contemporary-gold-500 group-hover:text-contemporary-white transition-colors">{value.icon}</div>
                <h3 className="font-playfair font-bold text-xl text-contemporary-charcoal-900 mb-3">{value.title}</h3>
                <p className="font-poppins text-contemporary-charcoal-900/70 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={teamRef} className="py-20 bg-contemporary-charcoal-900 text-contemporary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">Meet the Team</p>
            <h2 className="font-playfair font-bold text-4xl text-contemporary-white mb-4">Our Leadership</h2>
            <OrnamentDivider variant="floral" color="contemporary-gold-500" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transform transition-all duration-700 delay-200 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {teamMembers.map((member, index) => (
              <div key={member.id} className="text-center group" style={{ transitionDelay: `${index * 150}ms` }}>
                <div className="relative mb-6 inline-block">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-contemporary-gold-500 shadow-xl">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="font-playfair font-bold text-2xl text-contemporary-white mb-1">{member.name}</h3>
                <p className="text-contemporary-gold-500 font-poppins mb-4">{member.role}</p>
                <p className="font-poppins text-contemporary-platinum-400/70 text-sm leading-relaxed max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={awardsRef} className="py-20 bg-contemporary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transform transition-all duration-700 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">Recognition</p>
            <h2 className="font-playfair font-bold text-4xl text-contemporary-charcoal-900 mb-4">Awards & Certifications</h2>
            <OrnamentDivider variant="ornate" color="contemporary-gold-500" className="max-w-md mx-auto" />
          </div>
          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 transform transition-all duration-700 delay-200 ${awardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {awards.map((award) => (<AwardBadge key={award.id} award={award} />))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-contemporary-slate-900 text-contemporary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8"><svg className="w-16 h-16 mx-auto text-contemporary-gold-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg></div>
          <h2 className="font-playfair font-bold text-4xl sm:text-5xl text-contemporary-white mb-6">Our Commitment</h2>
          <p className="font-poppins text-contemporary-platinum-400 text-xl leading-relaxed mb-8 max-w-3xl mx-auto">We pledge to provide courteous, professional, fast, and reliable appliance repair services.</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Licensed', 'Bonded', 'Insured', 'Factory Authorized'].map((item) => (<span key={item} className="px-6 py-2 bg-contemporary-white/10 border border-contemporary-gold-500 rounded-full font-poppins">{item}</span>))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-contemporary-charcoal-900 text-contemporary-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair font-bold text-4xl text-contemporary-white mb-6">Experience the Difference</h2>
          <p className="font-poppins text-contemporary-platinum-400 text-lg mb-8">Join thousands of satisfied customers who trust Advanced Appliance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-contemporary-gold-500 text-contemporary-charcoal-900 hover:bg-contemporary-gold-500/80 border-contemporary-gold-500" href="/contact">Schedule Service</Button>
            <Button variant="outline" size="lg" className="border-contemporary-white text-contemporary-white hover:bg-contemporary-white hover:text-contemporary-charcoal-900" href="tel:7324167430">(732) 416-7430</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
