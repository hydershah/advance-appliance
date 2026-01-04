'use client';

import React from 'react';
import type { Service } from '../utils/types';

export interface ServiceCardProps {
  service: Service;
}

const getIcon = (iconName: string) => {
  const icons: Record<string, React.JSX.Element> = {
    snowflake: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    droplet: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    flame: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
    wind: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    sun: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    zap: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  };

  return icons[iconName] || icons.zap;
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    // NO BORDERS, NO SHADOWS - use whitespace for separation
    // Sharp corners (no border-radius)
    <div className="group bg-white p-12">
      {/* Icon - minimal, no background circle */}
      <div className="mb-8 text-[#272727]">
        {getIcon(service.icon)}
      </div>

      {/* Title - Inter font, clean typography */}
      <h3 className="font-inter text-2xl font-light text-[#272727] mb-4 leading-tight">
        {service.name}
      </h3>

      {/* Description - lots of line-height for readability */}
      <p className="text-[#272727] font-inter text-base font-normal mb-6 leading-relaxed opacity-80">
        {service.description}
      </p>

      {/* Price & Link */}
      {service.price && (
        <div className="flex items-center justify-between pt-6">
          <span className="text-sm text-[#272727] font-inter font-normal opacity-60">
            {service.price}
          </span>
          <a
            href={`/services#${service.id}`}
            className="text-[#2FC4A7] hover:text-[#24A88F] font-inter text-sm font-normal inline-flex items-center gap-1 transition-colors"
          >
            Learn More
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
};
