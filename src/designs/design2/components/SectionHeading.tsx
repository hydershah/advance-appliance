import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  theme = 'light',
  size = 'md',
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right',
  };
  const titleSizes = {
    sm: 'text-3xl md:text-4xl',
    md: 'text-4xl md:text-5xl lg:text-6xl',
    lg: 'text-5xl md:text-6xl lg:text-7xl',
  };

  return (
    <div className={`max-w-3xl ${alignClasses[align]}`}>
      <div className={`h-px w-16 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} ${theme === 'dark' ? 'bg-modern-gold-500' : 'bg-modern-navy-900/40'}`} />
      {subtitle && (
        <span className={`mt-4 block text-xs uppercase tracking-[0.35em] font-[var(--font-poppins)] ${theme === 'dark' ? 'text-modern-gold-500' : 'text-modern-navy-700'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`mt-4 font-[var(--font-bebas)] ${titleSizes[size]} leading-[0.95] tracking-[0.08em] ${theme === 'dark' ? 'text-modern-cream-50' : 'text-modern-navy-900'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg font-[var(--font-poppins)] ${theme === 'dark' ? 'text-modern-cream-100/80' : 'text-modern-charcoal'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
