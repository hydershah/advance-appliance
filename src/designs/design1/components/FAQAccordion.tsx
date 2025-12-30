'use client';

import React, { useState } from 'react';
import { FAQ } from '../types';

interface FAQAccordionProps { faqs: FAQ[]; variant?: 'default' | 'minimal' | 'bordered'; }
interface FAQItemProps { faq: FAQ; isOpen: boolean; onToggle: () => void; variant: 'default' | 'minimal' | 'bordered'; index: number; }

const FAQItem: React.FC<FAQItemProps> = ({ faq, isOpen, onToggle, variant, index }) => {
  const containerClasses = { default: 'border-b border-gray-200', minimal: 'mb-2', bordered: 'border border-gray-200 mb-4' };
  const buttonClasses = { default: 'py-6', minimal: 'py-4', bordered: 'p-6' };
  const contentClasses = { default: 'pb-6', minimal: 'pb-4', bordered: 'px-6 pb-6' };

  return (
    <div className={containerClasses[variant]}>
      <button type="button" onClick={onToggle} className={`w-full flex items-start justify-between text-left ${buttonClasses[variant]} focus:outline-none group`} aria-expanded={isOpen}>
        <span className="flex items-start">
          <span className="text-[#D4AF37] text-sm font-light mr-4 mt-1">{String(index + 1).padStart(2, '0')}</span>
          <span className={`font-serif text-lg transition-colors ${isOpen ? 'text-[#D4AF37]' : 'text-black group-hover:text-[#D4AF37]'}`}>{faq.question}</span>
        </span>
        <span className="ml-6 flex-shrink-0">
          <svg className={`w-5 h-5 text-[#D4AF37] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/></svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className={`${contentClasses[variant]} pl-10`}><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
      </div>
    </div>
  );
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqs, variant = 'default' }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="w-full">
      {faqs.map((faq, index) => <FAQItem key={index} faq={faq} isOpen={openIndex === index} onToggle={() => setOpenIndex(openIndex === index ? null : index)} variant={variant} index={index} />)}
    </div>
  );
};

export default FAQAccordion;
