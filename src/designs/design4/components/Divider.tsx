import React from 'react';

interface DividerProps {
  width?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Divider: React.FC<DividerProps> = ({ width = 'md', className = '' }) => {
  const widthStyles = {
    sm: 'w-12',
    md: 'w-20',
    lg: 'w-32',
  };

  return (
    <div className={`h-px bg-surgical-copper-400 ${widthStyles[width]} ${className}`} />
  );
};
