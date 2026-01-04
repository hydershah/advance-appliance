'use client';

import React, { useState, useEffect } from 'react';
import type { Testimonial } from '../utils/types';

export interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  if (!currentTestimonial) return null;

  return (
    <div className="relative">
      {/* Testimonial Card - NO BORDERS, NO SHADOWS */}
      <div className="bg-white p-16 min-h-[300px] flex flex-col justify-between">
        {/* Stars - Teal accent */}
        <div className="flex items-center mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < currentTestimonial.rating ? 'text-[#2FC4A7]' : 'text-[#E5E5E5]'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote - Large, readable */}
        <blockquote className="flex-1">
          <p className="text-[#272727] font-inter text-xl font-light leading-relaxed mb-8">
            "{currentTestimonial.text}"
          </p>
        </blockquote>

        {/* Author - Clean minimal, no top border */}
        <div className="flex items-center justify-between pt-8">
          <div>
            <div className="font-inter text-base font-semibold text-[#272727]">
              {currentTestimonial.name}
            </div>
            <div className="text-sm text-[#272727] font-inter font-normal opacity-60">
              {currentTestimonial.location} • {currentTestimonial.service}
            </div>
          </div>

          {/* Navigation Arrows - Minimal pill buttons */}
          <div className="flex items-center space-x-3">
            <button
              onClick={goToPrevious}
              className="w-10 h-10 rounded-full border border-[#E5E5E5] hover:border-[#2FC4A7] text-[#272727] hover:text-[#2FC4A7] flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full border border-[#E5E5E5] hover:border-[#2FC4A7] text-[#272727] hover:text-[#2FC4A7] flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dots Indicator - Teal accent */}
      <div className="flex items-center justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-[#2FC4A7]'
                : 'w-2 bg-[#E5E5E5] hover:bg-[#2FC4A7]/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
