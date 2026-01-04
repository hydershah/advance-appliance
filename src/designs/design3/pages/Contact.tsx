'use client';

import React, { useState } from 'react';
import { Navigation, Footer, OrnamentDivider, Breadcrumb, Button, FormInput, FormTextarea, FormSelect } from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ContactFormData } from '../types';

const applianceOptions = [
  { value: 'refrigerator', label: 'Refrigerator' }, { value: 'freezer', label: 'Freezer' },
  { value: 'washer', label: 'Washer' }, { value: 'dryer', label: 'Dryer' },
  { value: 'dishwasher', label: 'Dishwasher' }, { value: 'oven', label: 'Oven/Range' },
  { value: 'microwave', label: 'Microwave' }, { value: 'wine-cooler', label: 'Wine Cooler' },
  { value: 'ice-maker', label: 'Ice Maker' }, { value: 'other', label: 'Other' },
];

const timeSlots = [
  { value: 'morning', label: 'Morning (8AM - 12PM)' },
  { value: 'afternoon', label: 'Afternoon (12PM - 4PM)' },
  { value: 'evening', label: 'Evening (4PM - 6PM)' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', phone: '', service: '', preferredDate: '', preferredTime: '', message: '', appliance: '', brand: '' });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [heroRef, heroVisible] = useScrollAnimation<HTMLDivElement>();
  const [formRef, formVisible] = useScrollAnimation<HTMLDivElement>();

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone?.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone ?? '')) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.appliance) newErrors.appliance = 'Please select an appliance';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

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
          <Breadcrumb items={[{ label: 'Contact' }]} className="mb-8 text-contemporary-platinum-400/60" />
          <div className={`text-center transform transition-all duration-700 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-contemporary-gold-500 font-montserrat tracking-widest uppercase mb-4">Get in Touch</p>
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-contemporary-white mb-6">Contact Us</h1>
            <OrnamentDivider variant="ornate" color="contemporary-gold-500" className="max-w-md mx-auto" />
            <p className="font-poppins text-contemporary-platinum-400/80 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">Ready to schedule your repair? We are here to help.</p>
          </div>
        </div>
      </section>

      <section ref={formRef} className="py-20 bg-contemporary-platinum-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-3 gap-12 transform transition-all duration-700 ${formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="lg:col-span-1">
              <div className="bg-contemporary-charcoal-900 text-contemporary-white rounded-xl p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-contemporary-gold-500/10 rounded-full transform translate-x-16 -translate-y-16" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="w-14 h-14 bg-contemporary-white rounded-full flex items-center justify-center border-2 border-contemporary-gold-500"><span className="text-contemporary-charcoal-900 font-playfair font-bold text-xl">AA</span></div>
                    <div><h3 className="font-playfair font-bold text-xl text-contemporary-white">Advanced Appliance</h3><p className="text-contemporary-gold-500 text-sm">Repair Service</p></div>
                  </div>
                  <OrnamentDivider variant="simple" color="contemporary-gold-500" className="mb-8" />
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-contemporary-gold-500/20 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-contemporary-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                      <div><p className="font-poppins text-contemporary-platinum-400/60 text-sm">Phone</p><a href="tel:7324167430" className="font-playfair font-bold text-xl text-contemporary-white hover:text-contemporary-gold-500 transition-colors">(732) 416-7430</a></div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-contemporary-gold-500/20 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-contemporary-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                      <div><p className="font-poppins text-contemporary-platinum-400/60 text-sm">Email</p><a href="mailto:info@advancedappliance.com" className="font-poppins text-contemporary-white hover:text-contemporary-gold-500 transition-colors break-all">info@advancedappliance.com</a></div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 rounded-full bg-contemporary-gold-500/20 flex items-center justify-center flex-shrink-0"><svg className="w-5 h-5 text-contemporary-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                      <div><p className="font-poppins text-contemporary-platinum-400/60 text-sm">Hours</p><p className="font-poppins text-contemporary-white">Mon - Sat: 8AM - 6PM</p><p className="font-poppins text-contemporary-platinum-400/60">Sunday: Closed</p></div>
                    </div>
                  </div>
                  <OrnamentDivider variant="simple" color="contemporary-gold-500" className="my-8" />
                  <div className="flex flex-wrap gap-2">
                    {['Licensed', 'Bonded', 'Insured'].map((badge) => (<span key={badge} className="px-3 py-1 text-xs font-poppins bg-contemporary-gold-500/20 text-contemporary-gold-500 rounded-full border border-contemporary-gold-500/30">{badge}</span>))}
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-contemporary-gold-500/10 border-2 border-contemporary-gold-500/30 rounded-xl">
                <div className="flex items-center space-x-3 mb-4"><svg className="w-8 h-8 text-contemporary-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><h3 className="font-playfair font-bold text-xl text-contemporary-gold-500">Emergency Service</h3></div>
                <p className="font-poppins text-contemporary-charcoal-900/70 text-sm mb-4">Appliance emergency? We offer same-day service for urgent repairs.</p>
                <a href="tel:7324167430" className="inline-flex items-center text-contemporary-gold-500 font-poppins font-medium hover:text-contemporary-charcoal-900 transition-colors"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>Call for Emergency Service</a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-contemporary-white border-2 border-contemporary-platinum-400/30 rounded-xl p-8 shadow-lg">
                <h2 className="font-playfair font-bold text-3xl text-contemporary-charcoal-900 mb-2">Schedule Your Service</h2>
                <p className="font-poppins text-contemporary-charcoal-900/60 mb-8">Fill out the form below and we will contact you within 24 hours.</p>

                {submitSuccess ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-contemporary-charcoal-900/10 flex items-center justify-center"><svg className="w-10 h-10 text-contemporary-charcoal-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></div>
                    <h3 className="font-playfair font-bold text-2xl text-contemporary-charcoal-900 mb-4">Thank You!</h3>
                    <p className="font-poppins text-contemporary-charcoal-900/70 mb-6">Your service request has been received. We will contact you shortly.</p>
                    <Button variant="outline" onClick={() => { setSubmitSuccess(false); setFormData({ name: '', email: '', phone: '', service: '', preferredDate: '', preferredTime: '', message: '', appliance: '', brand: '' }); }}>Submit Another Request</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormInput label="Full Name" type="text" placeholder="John Smith" value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} error={errors.name} required />
                      <FormInput label="Email Address" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => handleInputChange('email', e.target.value)} error={errors.email} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormInput label="Phone Number" type="tel" placeholder="(732) 555-0123" value={formData.phone} onChange={(e) => handleInputChange('phone', e.target.value)} error={errors.phone} required />
                      <FormInput label="Brand" type="text" placeholder="e.g., Sub-Zero, Viking" value={formData.brand} onChange={(e) => handleInputChange('brand', e.target.value)} />
                    </div>
                    <FormSelect label="Appliance Type" options={applianceOptions} value={formData.appliance} onChange={(e) => handleInputChange('appliance', e.target.value)} error={errors.appliance} required />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormInput label="Preferred Date" type="date" value={formData.preferredDate} onChange={(e) => handleInputChange('preferredDate', e.target.value)} min={new Date().toISOString().split('T')[0]} />
                      <FormSelect label="Preferred Time" options={timeSlots} value={formData.preferredTime} onChange={(e) => handleInputChange('preferredTime', e.target.value)} />
                    </div>
                    <FormTextarea label="Describe the Issue" placeholder="Please describe the problem you're experiencing..." value={formData.message} onChange={(e) => handleInputChange('message', e.target.value)} rows={4} />
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button type="submit" variant="primary" size="lg" loading={isSubmitting} className="flex-1">{isSubmitting ? 'Submitting...' : 'Schedule Service'}</Button>
                      <Button type="button" variant="outline" size="lg" href="tel:7324167430" className="flex-1 sm:flex-initial">Or Call Now</Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-contemporary-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12"><h2 className="font-playfair font-bold text-3xl text-contemporary-charcoal-900 mb-4">Areas We Serve</h2><OrnamentDivider variant="simple" color="contemporary-charcoal-900" className="max-w-xs mx-auto" /></div>
          <div className="flex flex-wrap justify-center gap-4">
            {['Monmouth County', 'Middlesex County', 'Ocean County', 'Mercer County', 'Somerset County', 'Union County'].map((area) => (<span key={area} className="px-6 py-3 bg-contemporary-platinum-200 border border-contemporary-platinum-400/50 rounded-full font-poppins text-contemporary-charcoal-900 hover:border-contemporary-gold-500 hover:shadow-md transition-all cursor-pointer">{area}</span>))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
