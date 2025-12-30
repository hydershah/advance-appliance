import React from 'react';

interface ClassicCardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
  href?: string;
  variant?: 'default' | 'featured' | 'testimonial' | 'service';
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const ClassicCard: React.FC<ClassicCardProps> = ({
  title,
  description,
  icon,
  image,
  imageAlt,
  href,
  variant = 'default',
  className = '',
  children,
  style,
}) => {
  const baseClasses = 'bg-ivory rounded-lg overflow-hidden transition-all duration-300';

  const variantClasses = {
    default: 'border-2 border-forest/20 hover:border-forest hover:shadow-xl',
    featured: 'border-4 border-copper shadow-xl hover:shadow-2xl',
    testimonial: 'border-2 border-burgundy/20 hover:border-burgundy',
    service: 'border-2 border-forest/30 hover:border-copper hover:shadow-lg group',
  };

  const CardWrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href } : {};

  if (variant === 'service') {
    return (
      <CardWrapper
        {...wrapperProps}
        className={`${baseClasses} ${variantClasses[variant]} ${className} block`}
        style={style}
      >
        {image && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={imageAlt || title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-cormorant font-bold text-xl text-ivory">{title}</h3>
            </div>
          </div>
        )}
        <div className="p-6">
          {!image && icon && (
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-forest/10 flex items-center justify-center text-forest group-hover:bg-copper group-hover:text-ivory transition-colors">
              {icon}
            </div>
          )}
          {!image && (
            <h3 className="font-cormorant font-bold text-xl text-forest text-center mb-3">{title}</h3>
          )}
          {description && (
            <p className="font-serif text-forest/70 text-center leading-relaxed">{description}</p>
          )}
          {children}
          {href && (
            <div className="mt-4 text-center">
              <span className="inline-flex items-center text-burgundy font-serif group-hover:text-copper transition-colors">
                Learn More
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          )}
        </div>
      </CardWrapper>
    );
  }

  if (variant === 'testimonial') {
    return (
      <div className={`${baseClasses} ${variantClasses[variant]} ${className} p-8`} style={style}>
        <div className="flex items-start space-x-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-copper" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <blockquote className="font-serif text-forest/80 italic leading-relaxed mb-6">
          "{description}"
        </blockquote>
        <div className="flex items-center">
          {image && (
            <img
              src={image}
              alt={imageAlt || title}
              className="w-14 h-14 rounded-full object-cover border-2 border-copper mr-4"
            />
          )}
          <div>
            <h4 className="font-cormorant font-bold text-lg text-forest">{title}</h4>
            {children}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'featured') {
    return (
      <CardWrapper
        {...wrapperProps}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        style={style}
      >
        <div className="relative">
          {image && (
            <div className="relative h-64 overflow-hidden">
              <img
                src={image}
                alt={imageAlt || title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-8 border-ivory/20 pointer-events-none" />
            </div>
          )}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-copper rounded-full flex items-center justify-center shadow-lg">
              {icon || (
                <svg className="w-6 h-6 text-ivory" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              )}
            </div>
          </div>
        </div>
        <div className="p-8 pt-10 text-center">
          <h3 className="font-cormorant font-bold text-2xl text-forest mb-3">{title}</h3>
          {description && (
            <p className="font-serif text-forest/70 leading-relaxed">{description}</p>
          )}
          {children}
        </div>
      </CardWrapper>
    );
  }

  // Default variant
  return (
    <CardWrapper
      {...wrapperProps}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
    >
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="p-6">
        {icon && !image && (
          <div className="w-14 h-14 mb-4 rounded-lg bg-forest/10 flex items-center justify-center text-forest">
            {icon}
          </div>
        )}
        <h3 className="font-cormorant font-bold text-xl text-forest mb-2">{title}</h3>
        {description && (
          <p className="font-serif text-forest/70 leading-relaxed">{description}</p>
        )}
        {children}
      </div>
    </CardWrapper>
  );
};

export default ClassicCard;
