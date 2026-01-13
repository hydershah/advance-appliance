import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'minimal' | 'featured';
}

const ServiceIcons: Record<string, React.FC<{ className?: string }>> = {
  refrigerator: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="1.5" />
      <line x1="4" y1="10" x2="20" y2="10" strokeWidth="1.5" />
      <line x1="10" y1="5" x2="10" y2="8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="14" x2="10" y2="18" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  washer: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="2" width="18" height="20" rx="2" strokeWidth="1.5" />
      <circle cx="12" cy="13" r="5" strokeWidth="1.5" />
      <circle cx="12" cy="13" r="2" strokeWidth="1.5" />
      <circle cx="7" cy="5" r="1" fill="currentColor" />
      <circle cx="17" cy="5" r="1" fill="currentColor" />
    </svg>
  ),
  dryer: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="2" width="18" height="20" rx="2" strokeWidth="1.5" />
      <circle cx="12" cy="13" r="5" strokeWidth="1.5" />
      <path d="M10 11c1-1.5 3-1.5 4 0" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 14c1-1.5 3-1.5 4 0" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="7" cy="5" r="1" fill="currentColor" />
    </svg>
  ),
  dishwasher: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="2" width="18" height="20" rx="2" strokeWidth="1.5" />
      <line x1="3" y1="6" x2="21" y2="6" strokeWidth="1.5" />
      <path d="M8 12h8M8 15h8M8 18h8" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="4" r="0.5" fill="currentColor" />
    </svg>
  ),
  oven: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="2" width="18" height="20" rx="2" strokeWidth="1.5" />
      <line x1="3" y1="8" x2="21" y2="8" strokeWidth="1.5" />
      <rect x="6" y="11" width="12" height="8" rx="1" strokeWidth="1.5" />
      <circle cx="7" cy="5" r="1" strokeWidth="1.5" />
      <circle cx="12" cy="5" r="1" strokeWidth="1.5" />
      <circle cx="17" cy="5" r="1" strokeWidth="1.5" />
    </svg>
  ),
  cooktop: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="2" y="8" width="20" height="8" rx="1" strokeWidth="1.5" />
      <circle cx="7" cy="12" r="2" strokeWidth="1.5" />
      <circle cx="17" cy="12" r="2" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" strokeWidth="1.5" />
    </svg>
  ),
  freezer: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="1.5" />
      <line x1="12" y1="6" x2="12" y2="18" strokeWidth="1.5" />
      <line x1="8" y1="9" x2="16" y2="9" strokeWidth="1.5" />
      <line x1="8" y1="15" x2="16" y2="15" strokeWidth="1.5" />
      <path d="M9 6l3 3 3-3" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 18l3-3 3 3" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  iceMaker: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5" />
      <rect x="7" y="7" width="4" height="4" rx="0.5" strokeWidth="1.5" />
      <rect x="13" y="7" width="4" height="4" rx="0.5" strokeWidth="1.5" />
      <rect x="7" y="13" width="4" height="4" rx="0.5" strokeWidth="1.5" />
      <rect x="13" y="13" width="4" height="4" rx="0.5" strokeWidth="1.5" />
    </svg>
  ),
  stove: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5" />
      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5" />
      <circle cx="8" cy="7" r="1.5" strokeWidth="1.5" />
      <circle cx="16" cy="7" r="1.5" strokeWidth="1.5" />
      <rect x="6" y="13" width="12" height="4" rx="0.5" strokeWidth="1.5" />
    </svg>
  ),
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'default' }) => {
  const IconComponent = ServiceIcons[service.icon] ?? ServiceIcons.oven ?? ServiceIcons.refrigerator;

  if (variant === 'minimal') {
    return (
      <a href={`/services/${service.slug}`} className="group flex items-center justify-between gap-4 rounded-2xl border border-modern-navy-900/10 bg-white/80 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-modern-navy-900 text-modern-cream-50">
            {IconComponent && <IconComponent className="h-6 w-6" />}
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-modern-navy-700 font-[var(--font-poppins)]">Service</p>
            <h3 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] text-modern-navy-900">{service.name}</h3>
          </div>
        </div>
        <span className="text-modern-navy-900 font-[var(--font-poppins)] text-xs uppercase tracking-[0.3em]">Explore</span>
      </a>
    );
  }

  if (variant === 'featured') {
    return (
      <a href={`/services/${service.slug}`} className="group relative overflow-hidden rounded-2xl border border-modern-navy-900/10 bg-modern-navy-900 text-modern-cream-50">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={service.image} alt={service.name} className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-modern-navy-900 via-modern-navy-900/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-modern-gold-200 text-modern-gold-200">
              {IconComponent && <IconComponent className="h-5 w-5" />}
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-modern-gold-200 font-[var(--font-poppins)]">Signature</p>
              <h3 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em]">{service.name}</h3>
            </div>
          </div>
          <p className="mt-3 text-sm text-modern-cream-100/80 font-[var(--font-poppins)] line-clamp-2">{service.shortDescription}</p>
        </div>
      </a>
    );
  }

  return (
    <a href={`/services/${service.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-modern-navy-900/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={service.image} alt={service.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </div>
        <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-modern-cream-50 text-modern-navy-900 shadow-lg">
          {IconComponent && <IconComponent className="h-6 w-6" />}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-[var(--font-bebas)] text-2xl tracking-[0.08em] text-modern-navy-900">{service.name}</h3>
        <p className="mt-3 text-sm text-modern-charcoal font-[var(--font-poppins)]">{service.shortDescription}</p>
        <span className="mt-6 inline-flex items-center text-modern-navy-900 text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)]">
          View Details
          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </a>
  );
};

export default ServiceCard;
