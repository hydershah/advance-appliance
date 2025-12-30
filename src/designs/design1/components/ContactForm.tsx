'use client';

import React, { useState } from 'react';
import { services } from '../data/content';
import CTAButton from './CTAButton';

interface FormData { name: string; email: string; phone: string; service: string; message: string; preferredDate: string; preferredTime: string; }
interface FormErrors { [key: string]: string; }
interface ContactFormProps { variant?: 'default' | 'compact' | 'dark'; }

const ContactForm: React.FC<ContactFormProps> = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', service: '', message: '', preferredDate: '', preferredTime: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputClasses = variant === 'dark' ? 'w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors' : 'w-full px-4 py-3 bg-white border border-gray-200 text-black placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors';
  const labelClasses = variant === 'dark' ? 'block text-xs uppercase tracking-wider text-white/70 mb-2' : 'block text-xs uppercase tracking-wider text-gray-600 mb-2';

  if (isSubmitted) {
    return (
      <div className={`text-center p-12 ${variant === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-gray-50'}`}>
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-[#D4AF37] rounded-full">
          <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 className={`font-serif text-2xl mb-4 ${variant === 'dark' ? 'text-white' : 'text-black'}`}>Thank You</h3>
        <p className={variant === 'dark' ? 'text-white/70' : 'text-gray-600'}>We have received your request and will contact you shortly to confirm your appointment.</p>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={inputClasses} />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}</div>
          <div><input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClasses} />{errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}</div>
        </div>
        <div><select name="service" value={formData.service} onChange={handleChange} className={inputClasses}><option value="">Select Service</option>{services.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}</select>{errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}</div>
        <CTAButton type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Request Service'}</CTAButton>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><label htmlFor="name" className={labelClasses}>Full Name *</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className={inputClasses} />{errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}</div>
        <div><label htmlFor="email" className={labelClasses}>Email Address *</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className={inputClasses} />{errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><label htmlFor="phone" className={labelClasses}>Phone Number *</label><input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(732) 416-7430" className={inputClasses} />{errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}</div>
        <div><label htmlFor="service" className={labelClasses}>Service Needed *</label><select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClasses}><option value="">Select a service</option>{services.map((s) => <option key={s.id} value={s.name}>{s.name}</option>)}</select>{errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div><label htmlFor="preferredDate" className={labelClasses}>Preferred Date</label><input type="date" id="preferredDate" name="preferredDate" value={formData.preferredDate} onChange={handleChange} className={inputClasses} /></div>
        <div><label htmlFor="preferredTime" className={labelClasses}>Preferred Time</label><select id="preferredTime" name="preferredTime" value={formData.preferredTime} onChange={handleChange} className={inputClasses}><option value="">Select a time</option><option value="morning">Morning (8AM - 12PM)</option><option value="afternoon">Afternoon (12PM - 4PM)</option><option value="evening">Evening (4PM - 8PM)</option></select></div>
      </div>
      <div><label htmlFor="message" className={labelClasses}>Message *</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Please describe the issue with your appliance..." rows={5} className={inputClasses} />{errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}</div>
      <CTAButton type="submit" variant="primary" size="lg" icon="calendar" fullWidth disabled={isSubmitting}>{isSubmitting ? 'Sending Request...' : 'Schedule Service'}</CTAButton>
      <p className={`text-center text-xs ${variant === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>By submitting this form, you agree to our privacy policy and terms of service.</p>
    </form>
  );
};

export default ContactForm;
