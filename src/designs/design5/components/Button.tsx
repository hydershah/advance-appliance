'use client';

import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
}) => {
  // PILL SHAPED - rounded-full for perfect pill shape
  // NO SHADOWS - clean minimal aesthetic
  const baseStyles = 'inline-flex items-center justify-center font-inter font-semibold rounded-full transition-colors';

  const variantStyles = {
    // Dark charcoal background, no shadow
    primary: 'bg-[#32373C] text-white hover:bg-[#272B2E]',
    // Outline with teal accent
    outline: 'border-2 border-[#E5E5E5] text-[#272727] hover:border-[#2FC4A7] hover:text-[#2FC4A7]',
  };

  const sizeStyles = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-base',
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2.5">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2.5">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};
