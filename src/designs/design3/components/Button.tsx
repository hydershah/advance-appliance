import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  loading = false,
  href,
  type = 'button',
  disabled,
  className = '',
  onClick,
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-poppins font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantClasses = {
    primary: 'bg-contemporary-charcoal-900 text-contemporary-white hover:bg-contemporary-slate-900 focus:ring-contemporary-charcoal-900 border border-contemporary-charcoal-900',
    secondary: 'bg-contemporary-gold-500 text-contemporary-white hover:bg-contemporary-gold-500/90 focus:ring-contemporary-gold-500 border border-contemporary-gold-500',
    outline: 'bg-transparent text-contemporary-charcoal-900 border border-contemporary-charcoal-900 hover:bg-contemporary-charcoal-900 hover:text-contemporary-white focus:ring-contemporary-charcoal-900',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled || loading ? 'opacity-60 cursor-not-allowed' : '';

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`;

  const content = loading ? (
    <>
      <svg
        className="animate-spin -ml-1 mr-2 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
      Loading...
    </>
  ) : (
    children
  );

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <a
        href={href}
        className={combinedClassName}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  // Otherwise render as a button
  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
