import React from 'react';

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
}

/**
 * Bamo-style testimonial card
 * - NO borders
 * - NO shadows
 * - Massive padding
 * - Clean typography
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  location,
  text,
}) => {
  return (
    <div className="bg-bamo-white p-10 transition-transform duration-300 ease-in-out hover:-translate-y-1" style={{ borderRadius: '0px' }}>
      {/* Quote */}
      <blockquote className="font-inter text-bamo-md text-bamo-text/80 leading-relaxed mb-8">
        "{text}"
      </blockquote>

      {/* Author */}
      <div className="pt-6 border-t border-bamo-border">
        <p className="font-inter font-semibold text-bamo-text text-bamo-sm">
          {name}
        </p>
        <p className="font-inter text-bamo-text/60 text-bamo-sm mt-1">
          {location}
        </p>
      </div>
    </div>
  );
};
