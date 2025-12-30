import React from 'react';

interface OrnamentDividerProps {
  variant?: 'simple' | 'ornate' | 'diamond' | 'floral';
  className?: string;
  color?: 'forest' | 'burgundy' | 'copper' | 'ivory';
}

const OrnamentDivider: React.FC<OrnamentDividerProps> = ({
  variant = 'simple',
  className = '',
  color = 'copper',
}) => {
  const colorClasses = {
    forest: 'text-[#1B4332]',
    burgundy: 'text-[#722F37]',
    copper: 'text-[#B87333]',
    ivory: 'text-[#FFFAF5]',
  };

  const baseClasses = `flex items-center justify-center my-8 ${colorClasses[color]} ${className}`;

  if (variant === 'simple') {
    return (
      <div className={baseClasses}>
        <div className="flex-1 h-px bg-current opacity-30" />
        <div className="mx-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="opacity-60"
          >
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <div className="flex-1 h-px bg-current opacity-30" />
      </div>
    );
  }

  if (variant === 'ornate') {
    return (
      <div className={baseClasses}>
        <div className="flex-1 h-px bg-current opacity-30" />
        <div className="mx-4 flex items-center gap-2">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="opacity-40">
            <circle cx="4" cy="4" r="2" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="opacity-60">
            <path d="M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z" />
          </svg>
          <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" className="opacity-40">
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
        <div className="flex-1 h-px bg-current opacity-30" />
      </div>
    );
  }

  if (variant === 'diamond') {
    return (
      <div className={baseClasses}>
        <div className="flex-1 h-px bg-current opacity-30" />
        <div className="mx-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="opacity-60 transform rotate-45"
          >
            <rect x="4" y="4" width="12" height="12" />
          </svg>
        </div>
        <div className="flex-1 h-px bg-current opacity-30" />
      </div>
    );
  }

  if (variant === 'floral') {
    return (
      <div className={baseClasses}>
        <div className="flex-1 h-px bg-current opacity-30" />
        <div className="mx-4 flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="opacity-40">
            <path d="M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z" />
          </svg>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="opacity-60">
            <path d="M10 0C10 5.52 5.52 10 0 10C5.52 10 10 14.48 10 20C10 14.48 14.48 10 20 10C14.48 10 10 5.52 10 0Z" />
          </svg>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" className="opacity-40">
            <path d="M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z" />
          </svg>
        </div>
        <div className="flex-1 h-px bg-current opacity-30" />
      </div>
    );
  }

  return null;
};

export default OrnamentDivider;
