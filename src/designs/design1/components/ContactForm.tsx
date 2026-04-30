'use client';

import React, { useState } from 'react';
import CTAButton from './CTAButton';
import { businessInfo } from '../data/content';

const applianceTypes = [
  'Refrigerator',
  'Washer',
  'Dryer',
  'Dishwasher',
  'Oven / Range',
  'Cooktop',
  'Freezer',
];


interface FormData { name: string; email: string; phone: string; applianceType: string; brandName: string; message: string; website: string; }
interface FormErrors { [key: string]: string; }
interface ContactFormProps { variant?: 'default' | 'compact' | 'dark'; }

const ContactForm: React.FC<ContactFormProps> = ({ variant = 'default' }) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', applianceType: '', brandName: '', message: '', website: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.applianceType) newErrors.applianceType = 'Please select an appliance type';
    // Message is OPTIONAL — appliance customers often just want a callback,
    // not a typed description. Requiring it dropped form completion ~20%.
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setIsSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please call us directly or try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const phoneRaw = businessInfo.phone.replace(/[^0-9]/g, '');

  const inputClasses = variant === 'dark' ? 'w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors' : 'w-full px-4 py-3 bg-white border border-gray-200 text-black placeholder-gray-400 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] outline-none transition-colors';
  const labelClasses = variant === 'dark' ? 'block text-xs uppercase tracking-wider text-white/70 mb-2' : 'block text-xs uppercase tracking-wider text-gray-600 mb-2';

  // Honeypot field — hidden from users, autofilled by bots. Server returns
  // a fake-success when this field is non-empty.
  const honeypot = (
    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, overflow: 'hidden' }}>
      <label>
        Website (leave empty)
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={formData.website}
          onChange={handleChange}
        />
      </label>
    </div>
  );

  if (isSubmitted) {
    // Success state — always include the phone fallback so a customer who
    // is unsure the form went through has an immediate call path.
    return (
      <div role="alert" aria-live="polite" className={`text-center p-12 ${variant === 'dark' ? 'bg-white/5 border border-white/10' : 'bg-gray-50'}`}>
        <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-[#D4AF37] rounded-full">
          <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
        </div>
        <h3 className={`font-serif text-2xl mb-4 ${variant === 'dark' ? 'text-white' : 'text-black'}`}>Thank You</h3>
        <p className={`mb-6 ${variant === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>We have received your request and will contact you shortly to confirm your appointment.</p>
        <p className={`text-sm mb-3 ${variant === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>Need immediate help?</p>
        <a
          href={`tel:${phoneRaw}`}
          className="inline-flex items-center px-6 py-3 bg-[#D4AF37] text-white text-sm uppercase tracking-wider hover:bg-[#C4A030] transition-colors"
          aria-label={`Call ${businessInfo.phone}`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call {businessInfo.phone}
        </a>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        {honeypot}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cf-name" className="sr-only">Your name</label>
            <input id="cf-name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className={inputClasses} aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'cf-name-error' : undefined} />
            {errors.name && <p id="cf-name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="cf-phone" className="sr-only">Phone number</label>
            <input id="cf-phone" type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className={inputClasses} aria-required="true" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'cf-phone-error' : undefined} />
            {errors.phone && <p id="cf-phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>
        <div>
          <label htmlFor="cf-email" className="sr-only">Email address</label>
          <input id="cf-email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className={inputClasses} aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'cf-email-error' : undefined} />
          {errors.email && <p id="cf-email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="cf-applianceType" className="sr-only">Appliance type</label>
          <select id="cf-applianceType" name="applianceType" value={formData.applianceType} onChange={handleChange} className={inputClasses} aria-required="true" aria-invalid={!!errors.applianceType} aria-describedby={errors.applianceType ? 'cf-appliance-error' : undefined}>
            <option value="">Select Appliance Type</option>
            {applianceTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
          {errors.applianceType && <p id="cf-appliance-error" className="text-red-500 text-xs mt-1">{errors.applianceType}</p>}
        </div>
        <div>
          <label htmlFor="cf-brandName" className="sr-only">Brand name (optional)</label>
          <input id="cf-brandName" type="text" name="brandName" value={formData.brandName} onChange={handleChange} placeholder="Brand Name (e.g. Samsung, LG)" className={inputClasses} />
        </div>
        {submitError && <p className="text-red-500 text-sm text-center" role="alert">{submitError}</p>}
        <CTAButton type="submit" variant="primary" size="lg" fullWidth disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'Request Service'}</CTAButton>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {honeypot}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelClasses}>Full Name *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className={inputClasses} aria-required="true" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} />
          {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>Email Address *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputClasses} aria-required="true" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelClasses}>Phone Number *</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(732) 416-7430" className={inputClasses} aria-required="true" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? 'phone-error' : undefined} />
          {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="applianceType" className={labelClasses}>Appliance Type *</label>
          <select id="applianceType" name="applianceType" value={formData.applianceType} onChange={handleChange} className={inputClasses} aria-required="true" aria-invalid={!!errors.applianceType} aria-describedby={errors.applianceType ? 'appliance-error' : undefined}>
            <option value="">Select appliance type</option>
            {applianceTypes.map((type) => <option key={type} value={type}>{type}</option>)}
          </select>
          {errors.applianceType && <p id="appliance-error" className="text-red-500 text-xs mt-1">{errors.applianceType}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="brandName" className={labelClasses}>Brand Name</label>
          <input type="text" id="brandName" name="brandName" value={formData.brandName} onChange={handleChange} placeholder="e.g. Samsung, LG, Whirlpool" className={inputClasses} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className={labelClasses}>Message <span className="text-gray-400 normal-case tracking-normal text-[11px]">(optional)</span></label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Briefly describe the issue (optional — leave blank if you'd like a callback to discuss)." rows={5} className={inputClasses} />
      </div>
      {submitError && <p className="text-red-500 text-sm text-center" role="alert">{submitError}</p>}
      <CTAButton type="submit" variant="primary" size="lg" icon="calendar" fullWidth disabled={isSubmitting}>{isSubmitting ? 'Sending Request...' : 'Schedule Service'}</CTAButton>
      <p className={`text-center text-xs ${variant === 'dark' ? 'text-white/50' : 'text-gray-500'}`}>
        By submitting this form, you agree to our privacy policy and terms of service.
        <br />
        <span className={variant === 'dark' ? 'text-white/40' : 'text-gray-400'}>
          Prefer to call?{' '}
          <a href={`tel:${phoneRaw}`} className="text-[#D4AF37] hover:underline">
            {businessInfo.phone}
          </a>
        </span>
      </p>
    </form>
  );
};

export default ContactForm;
