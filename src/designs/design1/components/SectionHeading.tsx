import React from 'react';

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, description, align = 'center', theme = 'light', size = 'md' }) => {
  const alignClasses = { left: 'text-left', center: 'text-center mx-auto', right: 'text-right' };
  const titleSizes = { sm: 'text-2xl md:text-3xl', md: 'text-3xl md:text-4xl lg:text-5xl', lg: 'text-4xl md:text-5xl lg:text-6xl' };
  const linePosition = { left: 'mr-auto', center: 'mx-auto', right: 'ml-auto' };

  return (
    <div className={`max-w-3xl ${alignClasses[align]}`}>
      <div className={`w-16 h-px bg-[#D4AF37] mb-6 ${linePosition[align]}`} />
      {subtitle && <span className="text-[#D4AF37] text-xs md:text-sm uppercase tracking-[0.3em] font-light mb-4 block">{subtitle}</span>}
      <h2 className={`font-serif ${titleSizes[size]} font-light leading-tight mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>{title}</h2>
      {description && <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-white/70' : 'text-gray-600'}`}>{description}</p>}
    </div>
  );
};

export default SectionHeading;
