'use client';

import React from 'react';

interface IconGridItem {
  icon: string;
  label: string;
}

interface IconGridProps {
  items: IconGridItem[];
}

const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
  const iconClasses = 'w-6 h-6';

  switch (icon) {
    case 'shield':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'checkCircle':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'clock':
      return (
        <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    default:
      return null;
  }
};

export const IconGrid: React.FC<IconGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center justify-center p-8"
        >
          <div className="text-[#722f10] mb-4">
            <IconComponent icon={item.icon} />
          </div>
          <p className="font-sans font-semibold text-[13px] text-black">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
};
