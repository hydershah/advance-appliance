'use client';

import React from 'react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  fullWidth = false,
  className = '',
  ...props
}) => {
  // Villa Vista pill buttons - fully rounded
  const baseClasses = 'font-sans font-semibold rounded-full transition-all duration-200 inline-flex items-center justify-center';

  const variantClasses = {
    // Villa Vista EXACT spec: Buttons are DARK CHARCOAL, not terracotta
    // Terracotta (#722f10) is ONLY for headings/accents
    primary: 'bg-[#32373c] text-white hover:bg-[#1f2327] shadow-none',
    secondary: 'bg-transparent text-[#32373c] border border-[#32373c] hover:bg-[#32373c] hover:text-white shadow-none',
  };

  const sizeClasses = {
    // Villa Vista EXACT spec: calc(0.667em + 2px) horizontal, calc(1.333em + 2px) vertical
    // At font-size: 1.125em (18px equivalent), this calculates to roughly px-6 py-3
    sm: 'px-5 py-2.5 text-[18px] font-medium',
    md: 'px-6 py-3 text-[18px] font-medium',
    lg: 'px-8 py-4 text-[18px] font-medium',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
