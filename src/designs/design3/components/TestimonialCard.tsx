import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'compact' | 'featured';
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  variant = 'default',
  className = '',
}) => {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-contemporary-gold-500' : 'text-contemporary-platinum-400/30'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  if (variant === 'featured') {
    return (
      <div
        className={`relative bg-contemporary-white rounded-xl border-2 border-contemporary-gold-500 shadow-2xl p-10 ${className}`}
      >
        {/* Quote icon */}
        <div className="absolute -top-6 left-10">
          <div className="w-12 h-12 bg-contemporary-slate-900 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-contemporary-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
        </div>

        {/* Stars */}
        <div className="flex items-center space-x-1 mb-6 mt-2">
          {renderStars(testimonial.rating)}
        </div>

        {/* Quote */}
        <blockquote className="font-poppins text-xl text-contemporary-charcoal-900 italic leading-relaxed mb-8">
          "{testimonial.text}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-contemporary-gold-500"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-contemporary-charcoal-900 flex items-center justify-center border-2 border-contemporary-gold-500">
              <span className="font-playfair font-bold text-xl text-contemporary-white">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="ml-5">
            <h4 className="font-playfair font-bold text-xl text-contemporary-charcoal-900">
              {testimonial.name}
            </h4>
            <p className="font-poppins text-contemporary-charcoal-900/60">{testimonial.location}</p>
            <p className="font-poppins text-contemporary-gold-500 text-sm">{testimonial.date}</p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        className={`bg-contemporary-white rounded-lg border border-contemporary-platinum-400/30 p-6 hover:border-contemporary-gold-500 transition-colors ${className}`}
      >
        <div className="flex items-center space-x-1 mb-3">
          {renderStars(testimonial.rating)}
        </div>
        <p className="font-poppins text-contemporary-charcoal-900/80 italic text-sm leading-relaxed mb-4 line-clamp-3">
          "{testimonial.text}"
        </p>
        <div className="flex items-center">
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-contemporary-gold-500"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-contemporary-charcoal-900 flex items-center justify-center">
              <span className="font-playfair font-bold text-contemporary-white">
                {testimonial.name.charAt(0)}
              </span>
            </div>
          )}
          <div className="ml-3">
            <h5 className="font-playfair font-semibold text-contemporary-charcoal-900">{testimonial.name}</h5>
            <p className="font-poppins text-xs text-contemporary-charcoal-900/60">{testimonial.location}</p>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div
      className={`bg-contemporary-white rounded-xl border border-contemporary-platinum-400/30 p-8 hover:border-contemporary-gold-500 hover:shadow-xl transition-all ${className}`}
    >
      {/* Quote decoration */}
      <div className="mb-4">
        <svg className="w-8 h-8 text-contemporary-slate-900/30" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Stars */}
      <div className="flex items-center space-x-1 mb-4">
        {renderStars(testimonial.rating)}
      </div>

      {/* Quote */}
      <blockquote className="font-poppins text-contemporary-charcoal-900/80 italic leading-relaxed mb-6">
        "{testimonial.text}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center pt-4 border-t border-contemporary-platinum-400/30">
        {testimonial.image ? (
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-contemporary-gold-500"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-contemporary-charcoal-900 flex items-center justify-center border-2 border-contemporary-gold-500">
            <span className="font-playfair font-bold text-xl text-contemporary-white">
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="ml-4">
          <h4 className="font-playfair font-bold text-lg text-contemporary-charcoal-900">{testimonial.name}</h4>
          <p className="font-poppins text-contemporary-charcoal-900/60 text-sm">{testimonial.location}</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-poppins text-contemporary-gold-500 text-sm">{testimonial.date}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
