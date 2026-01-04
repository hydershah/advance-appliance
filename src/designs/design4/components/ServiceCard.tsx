import React from 'react';

interface ServiceCardProps {
  name: string;
  description: string;
  icon: string;
}

const iconMap: Record<string, React.JSX.Element> = {
  snowflake: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20M2 12h20M6.34 6.34l11.32 11.32M6.34 17.66L17.66 6.34" />
    </svg>
  ),
  droplet: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 20.7C5 19.1 4 16 4 12c0-2.5.8-4.8 1.6-6.4l5-7.1c.4-.6 1.4-.6 1.8 0l5 7.1c.8 1.6 1.6 3.9 1.6 6.4 0 4-1 7.1-3 8.7-1.3.9-2.7 1.3-4 1.3s-2.7-.4-4-1.3z" />
    </svg>
  ),
  dish: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h18v18H3z M3 9h18" />
    </svg>
  ),
  flame: (
    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2s-3 3-3 8c0 2.8 2.2 5 5 5s5-2.2 5-5c0-5-3-8-3-8zM8.5 15c-1 1-1.5 2-1.5 3 0 1.7 1.3 3 3 3s3-1.3 3-3" />
    </svg>
  ),
};

/**
 * Bamo-style service card
 * - NO borders
 * - NO shadows (flat design)
 * - Sharp corners (border-radius: 0)
 * - Massive padding (3rem)
 * - White background on warm off-white page
 * - Hover: subtle lift only
 */
export const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, icon }) => {
  return (
    <div className="group bg-bamo-white p-12 transition-transform duration-300 ease-in-out hover:-translate-y-1" style={{ borderRadius: '0px' }}>
      <div className="text-bamo-text mb-6">
        {iconMap[icon] || iconMap.flame}
      </div>
      <h3 className="font-lora font-semibold text-bamo-md text-bamo-text mb-4 leading-tight">
        {name}
      </h3>
      <p className="font-inter text-bamo-md text-bamo-text/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
