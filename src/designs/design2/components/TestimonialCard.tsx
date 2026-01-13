import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'featured' | 'compact';
}

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex space-x-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className={`h-4 w-4 ${star <= rating ? 'text-modern-gold-500' : 'text-modern-cream-200'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, variant = 'default' }) => {
  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  if (variant === 'featured') {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-modern-navy-900 p-10 text-modern-cream-50 shadow-2xl">
        <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-modern-navy-500/30 blur-3xl" />
        <div className="relative">
          <div className="mb-6 flex items-center justify-between">
            <StarRating rating={testimonial.rating} />
            <span className="text-xs uppercase tracking-[0.3em] text-modern-gold-200 font-[var(--font-poppins)]">{testimonial.service}</span>
          </div>
          <blockquote className="font-[var(--font-cormorant)] text-2xl leading-relaxed">"{testimonial.text}"</blockquote>
          <div className="mt-8 flex items-center justify-between border-t border-modern-cream-100/20 pt-6">
            <div>
              <p className="font-[var(--font-bebas)] text-2xl tracking-[0.08em]">{testimonial.name}</p>
              <p className="text-sm text-modern-cream-100/70">{testimonial.location}</p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-modern-cream-100/70 font-[var(--font-poppins)]">{formatDate(testimonial.date)}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="rounded-2xl border border-modern-navy-900/10 bg-white p-6 shadow-sm">
        <StarRating rating={testimonial.rating} />
        <p className="mt-4 text-sm text-modern-charcoal font-[var(--font-poppins)] line-clamp-3">"{testimonial.text}"</p>
        <div className="mt-6 flex items-center justify-between">
          <p className="font-[var(--font-bebas)] text-xl tracking-[0.08em] text-modern-navy-900">{testimonial.name}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)]">{testimonial.location}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-modern-navy-900/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>
      <blockquote className="text-base text-modern-charcoal font-[var(--font-poppins)] leading-relaxed">"{testimonial.text}"</blockquote>
      <div className="mt-6 border-t border-modern-navy-900/10 pt-4">
        <p className="font-[var(--font-bebas)] text-xl tracking-[0.08em] text-modern-navy-900">{testimonial.name}</p>
        <p className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)]">{testimonial.location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
