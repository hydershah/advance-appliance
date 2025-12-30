'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Testimonial } from '../types';
import TestimonialCard from './TestimonialCard';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials, autoPlay = true, interval = 6000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => setCurrentIndex((prev) => (prev + 1) % testimonials.length), [testimonials.length]);
  const prevSlide = useCallback(() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length), [testimonials.length]);
  const goToSlide = (index: number) => { setCurrentIndex(index); setIsAutoPlaying(false); };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isAutoPlaying, interval, nextSlide]);

  return (
    <div className="relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(autoPlay)}>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4"><TestimonialCard testimonial={testimonial} variant="featured" /></div>
          ))}
        </div>
      </div>

      <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-12 h-12 flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] bg-white hover:bg-[#D4AF37] hover:text-white transition-colors" aria-label="Previous testimonial">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-12 h-12 flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] bg-white hover:bg-[#D4AF37] hover:text-white transition-colors" aria-label="Next testimonial">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7"/></svg>
      </button>

      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)} className={`w-2 h-2 transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#D4AF37]' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Go to testimonial ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
