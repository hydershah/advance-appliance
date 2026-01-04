'use client';

import React from 'react';
import { Service } from '../utils/types';

interface ServiceCardProps {
  service: Service;
}

const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
  const iconClasses = 'w-10 h-10 stroke-current';

  switch (icon) {
    case 'snowflake':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2v20M17 7l-5 5-5-5M17 17l-5-5-5 5" />
        </svg>
      );
    case 'droplet':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
        </svg>
      );
    case 'wind':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
        </svg>
      );
    case 'flame':
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2c-1.5 4-3 5.5-3 8.5 0 3 2 5.5 5 5.5s5-2.5 5-5.5c0-3-1.5-4.5-3-8.5z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClasses} fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} />
        </svg>
      );
  }
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white p-12 transition-all duration-300 hover:translate-y-[-4px] rounded-none border-none">
      {/* Icon - Terracotta color per Villa Vista */}
      <div className="w-12 h-12 mb-8 text-[#722f10]">
        <IconComponent icon={service.icon} />
      </div>

      {/* Title - Villa Vista EXACT: 20px Medium serif */}
      <h3 className="font-serif font-normal text-[20px] text-[#722f10] mb-4 leading-tight">
        {service.name}
      </h3>

      {/* Description - Villa Vista EXACT: 13px Small body text */}
      <p className="font-sans text-[13px] text-[#332C27] mb-8 leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, idx) => (
          <li key={idx} className="flex items-start space-x-3">
            <svg className="w-4 h-4 text-[#722f10] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-sans text-[13px] text-[#332C27]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Price - Villa Vista EXACT: 13px Small */}
      {service.price && (
        <p className="font-sans font-semibold text-[13px] text-[#722f10] tracking-wide">
          {service.price}
        </p>
      )}
    </div>
  );
};
