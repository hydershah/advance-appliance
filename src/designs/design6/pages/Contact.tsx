'use client';

import React, { useState } from 'react';
import { Navigation, Footer, Button } from '../components';
import { BUSINESS_INFO } from '../utils';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appliance: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#fcfbf8] font-sans">
      <Navigation currentPage="contact" />
      <main className="pt-20">
        <HeroSection />
        <ContactSection formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <section className="py-40 bg-[#fcfbf8]">
    <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
      <h1 className="font-serif font-normal text-[42px] lg:text-[56px] text-black mb-8 tracking-tight leading-tight">
        Contact Us
      </h1>
      <p className="font-sans text-[20px] text-[#6b7280] leading-relaxed">
        We're here to help with all your appliance service needs
      </p>
    </div>
  </section>
);

interface ContactSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    appliance: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ formData, handleChange, handleSubmit }) => (
  <section className="py-40 bg-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Contact Info */}
        <div>
          <h2 className="font-serif font-normal text-[36px] text-black mb-12 tracking-tight leading-tight">
            Get in Touch
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="font-sans font-semibold text-[13px] uppercase tracking-wider text-black mb-4">
                Phone
              </h3>
              <a
                href={`tel:${BUSINESS_INFO.phoneClean}`}
                className="font-serif text-[20px] text-[#722f10] hover:text-black transition-colors"
              >
                {BUSINESS_INFO.phone}
              </a>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-[13px] uppercase tracking-wider text-black mb-4">
                Email
              </h3>
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="font-sans text-[13px] text-[#722f10] hover:text-black transition-colors break-all"
              >
                {BUSINESS_INFO.email}
              </a>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-[13px] uppercase tracking-wider text-black mb-4">
                Location
              </h3>
              <p className="font-sans text-[13px] text-[#6b7280] leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-[13px] uppercase tracking-wider text-black mb-4">
                Service Hours
              </h3>
              <div className="font-sans text-[13px] text-[#6b7280] space-y-2">
                <p>Monday - Friday: 7:00 AM - 9:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#fcfbf8] p-12">
          <h2 className="font-serif font-normal text-[36px] text-black mb-12 tracking-tight leading-tight">
            Request Service
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block font-sans font-semibold text-[13px] text-black mb-3">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-[#E5E5E5] font-sans text-[13px] text-black bg-white focus:outline-none focus:border-[#722f10] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-sans font-semibold text-[13px] text-black mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-[#E5E5E5] font-sans text-[13px] text-black bg-white focus:outline-none focus:border-[#722f10] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block font-sans font-semibold text-[13px] text-black mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-[#E5E5E5] font-sans text-[13px] text-black bg-white focus:outline-none focus:border-[#722f10] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="appliance" className="block font-sans font-semibold text-[13px] text-black mb-3">
                Appliance Type
              </label>
              <select
                id="appliance"
                name="appliance"
                value={formData.appliance}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 border border-[#E5E5E5] font-sans text-[13px] text-black bg-white focus:outline-none focus:border-[#722f10] transition-colors"
              >
                <option value="">Select appliance type</option>
                <option value="refrigerator">Refrigeration</option>
                <option value="washer">Laundry Care</option>
                <option value="dryer">Drying Systems</option>
                <option value="oven">Cooking Suites</option>
                <option value="dishwasher">Dishwasher</option>
                <option value="microwave">Microwave</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-sans font-semibold text-[13px] text-black mb-3">
                Service Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full px-6 py-4 border border-[#E5E5E5] font-sans text-[13px] text-black bg-white focus:outline-none focus:border-[#722f10] transition-colors resize-none"
                placeholder="Please describe the issue or service needed..."
              />
            </div>

            <Button type="submit" variant="primary" size="lg" fullWidth>
              Submit Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  </section>
);
