import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

/**
 * Bamo-style pill button - EXACT specifications from Bamo.com
 * - border-radius: 9999px (full pill)
 * - padding: calc(.667em + 2px) calc(1.333em + 2px)
 * - background: #32373c (dark charcoal)
 * - color: white
 * - font-size: 1.125em (18px)
 * - box-shadow: none
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  href,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  // Base: Full pill, no shadows, exact Bamo styling
  const baseStyles = 'font-inter font-semibold inline-block text-center rounded-full transition-all duration-300 ease-in-out shadow-none';

  const variantStyles = {
    primary: 'bg-bamo-accent text-white hover:opacity-90',
    secondary: 'border-2 border-bamo-text text-bamo-text hover:bg-bamo-text hover:text-bamo-bg',
  };

  // EXACT Bamo padding formula: calc(.667em + 2px) calc(1.333em + 2px)
  // Using inline styles for precise calc() values
  const sizeStyles = {
    sm: 'text-bamo-button',
    md: 'text-bamo-button',
    lg: 'text-bamo-button',
  };

  const disabledStyles = disabled
    ? 'opacity-40 cursor-not-allowed'
    : 'cursor-pointer';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();

  // Exact Bamo padding using calc()
  const bamoPadding = {
    paddingTop: 'calc(.667em + 2px)',
    paddingBottom: 'calc(.667em + 2px)',
    paddingLeft: 'calc(1.333em + 2px)',
    paddingRight: 'calc(1.333em + 2px)',
  };

  if (href) {
    return (
      <a href={href} className={combinedClassName} style={bamoPadding}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      style={bamoPadding}
    >
      {children}
    </button>
  );
};
