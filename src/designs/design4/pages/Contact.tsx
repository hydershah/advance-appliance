import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Button } from '../components/Button';
import { BUSINESS_INFO } from '../utils/constants';

/**
 * Bamo-style contact page
 * - Clean form design
 * - Minimal styling
 * - Generous spacing
 */
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-bamo-bg min-h-screen">
      <Navigation currentPath="/contact" />

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 pt-20">
        <h1 className="font-lora font-semibold text-5xl lg:text-6xl text-bamo-text text-center mb-6 max-w-4xl">
          Get in Touch
        </h1>
        <p className="font-inter text-lg text-bamo-text/70 text-center max-w-2xl leading-relaxed">
          Reach out for service inquiries
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-40 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div>
            <h2 className="font-lora font-semibold text-3xl text-bamo-text mb-12">
              Contact Information
            </h2>

            <div className="space-y-10">
              {/* Phone */}
              <div>
                <h3 className="font-inter font-semibold text-sm text-bamo-text mb-3">
                  Phone
                </h3>
                <a
                  href={`tel:${BUSINESS_INFO.phoneClean}`}
                  className="font-inter text-xl text-bamo-text hover:text-bamo-accent transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-inter font-semibold text-sm text-bamo-text mb-3">
                  Email
                </h3>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="font-inter text-base text-bamo-text hover:text-bamo-accent transition-colors break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>

              {/* Hours */}
              <div>
                <h3 className="font-inter font-semibold text-sm text-bamo-text mb-3">
                  Hours
                </h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-inter text-bamo-text/60 text-sm">Monday - Friday</p>
                    <p className="font-inter text-base text-bamo-text">{BUSINESS_INFO.hours.weekday}</p>
                  </div>
                  <div>
                    <p className="font-inter text-bamo-text/60 text-sm">Saturday - Sunday</p>
                    <p className="font-inter text-base text-bamo-text">{BUSINESS_INFO.hours.weekend}</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="font-inter font-semibold text-sm text-bamo-text mb-3">
                  Service Areas
                </h3>
                <p className="font-inter text-bamo-text/60 leading-relaxed">
                  Serving Central New Jersey including Edison, Woodbridge, Metuchen, and surrounding areas.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-lora font-semibold text-3xl text-bamo-text mb-12">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-inter font-semibold text-sm text-bamo-text mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-bamo-border focus:border-bamo-accent focus:outline-none transition-colors font-inter text-bamo-text bg-bamo-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-inter font-semibold text-sm text-bamo-text mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-bamo-border focus:border-bamo-accent focus:outline-none transition-colors font-inter text-bamo-text bg-bamo-white"
                />
              </div>

              <div>
                <label htmlFor="phone" className="font-inter font-semibold text-sm text-bamo-text mb-2 block">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-bamo-border focus:border-bamo-accent focus:outline-none transition-colors font-inter text-bamo-text bg-bamo-white"
                />
              </div>

              <div>
                <label htmlFor="service" className="font-inter font-semibold text-sm text-bamo-text mb-2 block">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-bamo-border focus:border-bamo-accent focus:outline-none transition-colors font-inter text-bamo-text bg-bamo-white"
                >
                  <option value="">Select a service</option>
                  <option value="refrigerator">Refrigeration</option>
                  <option value="washer">Laundry</option>
                  <option value="dishwasher">Dishwashers</option>
                  <option value="oven">Cooking</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="font-inter font-semibold text-sm text-bamo-text mb-2 block">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-bamo-border focus:border-bamo-accent focus:outline-none transition-colors font-inter text-bamo-text bg-bamo-white resize-none"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
