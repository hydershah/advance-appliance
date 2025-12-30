'use client';

import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MultiStepForm } from '../components/MultiStepForm';
import { BUSINESS_INFO, SERVICE_AREAS } from '../utils/constants';

export const Contact: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage="contact" />
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-4">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center animate-pulse"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div>
              <div><p className="font-bold">Emergency Appliance Repair</p><p className="text-white/90 text-sm">24/7 same-day service available</p></div>
            </div>
            <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-center space-x-2 px-6 py-3 bg-white text-red-600 rounded-lg font-bold hover:bg-gray-100 transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg><span>{BUSINESS_INFO.phone}</span></a>
          </div>
        </div>
      </div>

      <section className="bg-[#0A1628] pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }} /></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
          <span className="text-[#3B82F6] font-bold text-sm uppercase tracking-widest mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Schedule Your<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]"> Repair </span></h1>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">Fill out our quick form and we will contact you within 30 minutes to schedule your service appointment.</p>
        </div>
      </section>

      <section className="py-16 -mt-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#0A1628] mb-2">Request Service</h2>
              <p className="text-gray-600 mb-8">Complete the form below and we will get back to you shortly.</p>
              <MultiStepForm />
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-[#0A1628] mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-[#3B82F6] group transition-colors">
                    <div className="w-12 h-12 bg-[#3B82F6] group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"><svg className="w-6 h-6 text-white group-hover:text-[#3B82F6] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                    <div><p className="font-bold text-[#0A1628] group-hover:text-white transition-colors">{BUSINESS_INFO.phone}</p><p className="text-gray-500 text-sm group-hover:text-white/80 transition-colors">24/7 Emergency Line</p></div>
                  </a>
                  <div className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                    <div className="w-12 h-12 bg-[#0A1628] rounded-xl flex items-center justify-center flex-shrink-0"><svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                    <div><p className="font-bold text-[#0A1628]">{BUSINESS_INFO.address}</p><p className="text-gray-500 text-sm">Service Center</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#0A1628] rounded-2xl shadow-lg p-6 text-white">
                <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/10"><span className="text-gray-400">Monday - Friday</span><span className="font-medium">{BUSINESS_INFO.hours.weekday}</span></div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10"><span className="text-gray-400">Saturday - Sunday</span><span className="font-medium">{BUSINESS_INFO.hours.weekend}</span></div>
                  <div className="flex justify-between items-center py-2"><span className="text-gray-400">Emergency</span><span className="text-[#3B82F6] font-bold">24/7</span></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-[#0A1628] mb-4">Service Areas</h3>
                <div className="flex flex-wrap gap-2">{SERVICE_AREAS.map((area) => (<a key={area} href={`/areas/${area.toLowerCase().replace(' ', '-')}`} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-[#3B82F6] hover:text-white transition-colors">{area}</a>))}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-[#0A1628] mb-4">Find Us</h2><p className="text-gray-600">Conveniently located to serve Central New Jersey</p></div>
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center overflow-hidden">
            <div className="text-center"><svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg><p className="text-gray-500">Interactive Map Would Appear Here</p><p className="text-gray-400 text-sm mt-2">{BUSINESS_INFO.address}</p></div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50">
        <button onClick={() => setIsChatOpen(!isChatOpen)} className="w-16 h-16 bg-[#3B82F6] rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-[#2563EB] transition-colors group" aria-label="Open chat">
          {isChatOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
        </button>
        {isChatOpen && (
          <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-[#0A1628] p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#3B82F6] rounded-full flex items-center justify-center"><svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg></div>
                <div><p className="text-white font-bold">Live Support</p><p className="text-gray-400 text-sm flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2" />Online now</p></div>
              </div>
            </div>
            <div className="h-64 p-4 overflow-y-auto bg-gray-50">
              <div className="flex items-start space-x-3 mb-4">
                <div className="w-8 h-8 bg-[#3B82F6] rounded-full flex items-center justify-center flex-shrink-0"><span className="text-white text-sm font-bold">S</span></div>
                <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm max-w-[80%]"><p className="text-gray-700 text-sm">Hi there! How can I help you with your appliance repair needs today?</p><span className="text-gray-400 text-xs mt-2 block">Just now</span></div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-100">
              <div className="flex items-center space-x-3">
                <input type="text" placeholder="Type your message..." className="flex-1 px-4 py-3 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#3B82F6]" />
                <button className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center text-white hover:bg-[#2563EB] transition-colors"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
