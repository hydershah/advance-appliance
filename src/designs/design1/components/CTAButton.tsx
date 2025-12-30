import React from 'react';

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'phone' | 'arrow' | 'calendar' | 'none';
  fullWidth?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ href, onClick, children, variant = 'primary', size = 'md', icon = 'none', fullWidth = false, className = '', type = 'button', disabled = false }) => {
  const baseClasses = 'inline-flex items-center justify-center uppercase tracking-wider font-light transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2';
  const variantClasses = {
    primary: 'bg-[#D4AF37] text-black hover:bg-[#C4A030] disabled:bg-gray-300 disabled:text-gray-500',
    secondary: 'bg-black text-white hover:bg-gray-800 disabled:bg-gray-300 disabled:text-gray-500',
    outline: 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white disabled:border-gray-300 disabled:text-gray-400',
    ghost: 'text-[#D4AF37] hover:text-[#C4A030] hover:underline underline-offset-4 disabled:text-gray-400',
  };
  const sizeClasses = { sm: 'px-4 py-2 text-xs', md: 'px-6 py-3 text-sm', lg: 'px-8 py-4 text-base' };
  const widthClass = fullWidth ? 'w-full' : '';

  const IconComponent = () => {
    if (icon === 'phone') return <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;
    if (icon === 'arrow') return <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>;
    if (icon === 'calendar') return <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>;
    return null;
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  if (href) return <a href={href} className={combinedClasses}>{(icon === 'phone' || icon === 'calendar') && <IconComponent />}{children}{icon === 'arrow' && <IconComponent />}</a>;
  return <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>{(icon === 'phone' || icon === 'calendar') && <IconComponent />}{children}{icon === 'arrow' && <IconComponent />}</button>;
};

export default CTAButton;
