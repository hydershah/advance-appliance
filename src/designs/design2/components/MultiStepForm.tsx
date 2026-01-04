'use client';

import React, { useState } from 'react';
import { SERVICES, SERVICE_AREAS, BUSINESS_INFO } from '../utils/constants';

interface FormData {
  serviceType: string;
  applianceBrand: string;
  issueDescription: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  city: string;
  zipCode: string;
  additionalNotes: string;
}

const initialFormData: FormData = {
  serviceType: '', applianceBrand: '', issueDescription: '', firstName: '', lastName: '',
  email: '', phone: '', preferredDate: '', preferredTime: '', address: '', city: '', zipCode: '', additionalNotes: '',
};

interface MultiStepFormProps {
  onSubmit?: (data: FormData) => void;
}

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const totalSteps = 3;
  const steps = [
    { number: 1, title: 'Service', description: 'Select your appliance' },
    { number: 2, title: 'Contact', description: 'Your information' },
    { number: 3, title: 'Schedule', description: 'Pick a time' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (step === 1) {
      if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
      if (!formData.applianceBrand) newErrors.applianceBrand = 'Please enter the brand';
    } else if (step === 2) {
      if (!formData.firstName) newErrors.firstName = 'First name is required';
      if (!formData.lastName) newErrors.lastName = 'Last name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    } else if (step === 3) {
      if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date';
      if (!formData.preferredTime) newErrors.preferredTime = 'Please select a time';
      if (!formData.address) newErrors.address = 'Address is required';
      if (!formData.city) newErrors.city = 'City is required';
      if (!formData.zipCode) newErrors.zipCode = 'Zip code is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => { if (validateStep(currentStep)) setCurrentStep((prev) => Math.min(prev + 1, totalSteps)); };
  const handlePrev = () => { setCurrentStep((prev) => Math.max(prev - 1, 1)); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(currentStep)) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    if (onSubmit) onSubmit(formData);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-lora font-bold text-modern-navy-900 mb-4">Request Submitted!</h3>
        <p className="text-modern-charcoal/70 font-openSans mb-6">Thank you, {formData.firstName}! We have received your service request and will contact you within 30 minutes.</p>
        <p className="text-modern-charcoal/70 font-openSans mb-8">For immediate assistance, call us at <a href={`tel:${BUSINESS_INFO.phoneClean}`} className="text-modern-blue-500 font-bold hover:text-modern-blue-600">{BUSINESS_INFO.phone}</a></p>
        <button onClick={() => { setIsSubmitted(false); setFormData(initialFormData); setCurrentStep(1); }} className="px-8 py-3 bg-modern-navy-900 text-white rounded-lg font-montserrat font-bold hover:bg-modern-navy-800 transition-colors">Submit Another Request</button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10">
        <div className="flex items-center justify-between relative">
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-200">
            <div className="h-full bg-modern-blue-500 transition-all duration-500" style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }} />
          </div>
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-openSans font-bold text-sm transition-all duration-300 ${currentStep >= step.number ? 'bg-modern-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {currentStep > step.number ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg> : step.number}
              </div>
              <div className="mt-2 text-center hidden sm:block">
                <p className={`font-openSans font-bold text-sm ${currentStep >= step.number ? 'text-modern-navy-900' : 'text-gray-400'}`}>{step.title}</p>
                <p className="text-xs text-gray-400 font-openSans">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">What appliance needs repair? *</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {SERVICES.map((service) => (
                  <button key={service.id} type="button" onClick={() => setFormData((prev) => ({ ...prev, serviceType: service.id }))}
                    className={`p-4 rounded-xl border-2 transition-all duration-200 text-left ${formData.serviceType === service.id ? 'border-modern-blue-500 bg-modern-blue-500/5' : 'border-gray-200 hover:border-modern-blue-500/50'}`}>
                    <span className={`font-openSans font-medium text-sm ${formData.serviceType === service.id ? 'text-modern-blue-500' : 'text-modern-navy-900'}`}>{service.name.replace(' Repair', '')}</span>
                  </button>
                ))}
              </div>
              {errors.serviceType && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.serviceType}</p>}
            </div>
            <div>
              <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">Appliance Brand *</label>
              <input type="text" name="applianceBrand" value={formData.applianceBrand} onChange={handleInputChange} placeholder="e.g., Samsung, LG, Whirlpool" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans" />
              {errors.applianceBrand && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.applianceBrand}</p>}
            </div>
            <div>
              <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">Describe the Issue (Optional)</label>
              <textarea name="issueDescription" value={formData.issueDescription} onChange={handleInputChange} rows={3} placeholder="Tell us what's happening..." className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors resize-none font-openSans" />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">First Name *</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans" />
                {errors.firstName && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">Last Name *</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans" />
                {errors.lastName && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">Email Address *</label>
              <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans" />
              {errors.email && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">Phone Number *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="(555) 123-4567" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans" />
              {errors.phone && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.phone}</p>}
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">Preferred Date *</label>
                <input type="date" name="preferredDate" value={formData.preferredDate} onChange={handleInputChange} min={new Date().toISOString().split('T')[0]} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans" />
                {errors.preferredDate && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.preferredDate}</p>}
              </div>
              <div>
                <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">Preferred Time *</label>
                <select name="preferredTime" value={formData.preferredTime} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans">
                  <option value="">Select a time</option>
                  <option value="morning">Morning (8AM - 12PM)</option>
                  <option value="afternoon">Afternoon (12PM - 4PM)</option>
                  <option value="evening">Evening (4PM - 8PM)</option>
                </select>
                {errors.preferredTime && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.preferredTime}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">Street Address *</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans" />
              {errors.address && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.address}</p>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">City *</label>
                <select name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans">
                  <option value="">Select city</option>
                  {SERVICE_AREAS.map((area) => (<option key={area} value={area}>{area}</option>))}
                </select>
                {errors.city && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.city}</p>}
              </div>
              <div>
                <label className="block text-sm font-openSans font-bold text-modern-navy-900 mb-2">Zip Code *</label>
                <input type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange} className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-modern-blue-500 focus:outline-none transition-colors font-openSans" />
                {errors.zipCode && <p className="mt-2 text-red-500 text-sm font-openSans">{errors.zipCode}</p>}
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-between mt-10">
          {currentStep > 1 ? (
            <button type="button" onClick={handlePrev} className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-200 rounded-xl font-montserrat font-bold text-modern-navy-900 hover:border-modern-blue-500 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              <span>Previous</span>
            </button>
          ) : <div />}
          {currentStep < totalSteps ? (
            <button type="button" onClick={handleNext} className="flex items-center space-x-2 px-8 py-3 bg-modern-blue-500 text-white rounded-xl font-montserrat font-bold hover:bg-modern-blue-600 transition-colors">
              <span>Next Step</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          ) : (
            <button type="submit" disabled={isSubmitting} className="flex items-center space-x-2 px-8 py-3 bg-modern-blue-500 text-white rounded-xl font-montserrat font-bold hover:bg-modern-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? (<><svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg><span>Submitting...</span></>) : (<><span>Submit Request</span><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg></>)}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
