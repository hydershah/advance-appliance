import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured' | 'compact';
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className={`w-4 h-4 ${star <= rating ? 'text-[#D4AF37]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, variant = 'default' }) => {
  const formatDate = (dateString: string) => new Date(dateString).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  if (variant === 'featured') {
    return (
      <div className="bg-white p-10 lg:p-16 border border-gray-100 shadow-lg">
        <div className="mb-8"><svg className="w-12 h-12 text-[#D4AF37] opacity-30" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg></div>
        <blockquote className="font-serif text-2xl lg:text-3xl text-black leading-relaxed mb-8">"{testimonial.text}"</blockquote>
        <div className="mb-6"><StarRating rating={testimonial.rating} /></div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-8">
          <div><p className="font-serif text-lg text-black">{testimonial.name}</p><p className="text-gray-500 text-sm">{testimonial.location}</p></div>
          <div className="text-right"><p className="text-[#D4AF37] text-sm uppercase tracking-wider">{testimonial.service}</p><p className="text-gray-400 text-xs">{formatDate(testimonial.date)}</p></div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="bg-white p-6 border border-gray-100 hover:border-[#D4AF37]/30 transition-colors">
        <StarRating rating={testimonial.rating} />
        <p className="text-gray-700 text-sm leading-relaxed mt-4 mb-4 line-clamp-3">"{testimonial.text}"</p>
        <div className="flex items-center justify-between">
          <p className="font-serif text-sm text-black">{testimonial.name}</p>
          <p className="text-gray-400 text-xs">{testimonial.location}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-6"><svg className="w-8 h-8 text-[#D4AF37] opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg></div>
      <div className="mb-4"><StarRating rating={testimonial.rating} /></div>
      <blockquote className="text-gray-700 leading-relaxed mb-6">"{testimonial.text}"</blockquote>
      <div className="border-t border-gray-100 pt-6">
        <p className="font-serif text-lg text-black">{testimonial.name}</p>
        <p className="text-gray-500 text-sm">{testimonial.location}</p>
        <p className="text-[#D4AF37] text-xs uppercase tracking-wider mt-2">{testimonial.service}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
