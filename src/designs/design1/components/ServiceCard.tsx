import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  variant?: 'default' | 'minimal' | 'featured';
}

const ServiceIcons: Record<string, React.FC<{ className?: string }>> = {
  refrigerator: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="1.5"/><line x1="4" y1="10" x2="20" y2="10" strokeWidth="1.5"/><line x1="10" y1="5" x2="10" y2="8" strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="14" x2="10" y2="18" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  washer: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="20" rx="2" strokeWidth="1.5"/><circle cx="12" cy="13" r="5" strokeWidth="1.5"/><circle cx="12" cy="13" r="2" strokeWidth="1.5"/><circle cx="7" cy="5" r="1" fill="currentColor"/><circle cx="17" cy="5" r="1" fill="currentColor"/></svg>,
  dryer: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="20" rx="2" strokeWidth="1.5"/><circle cx="12" cy="13" r="5" strokeWidth="1.5"/><path d="M10 11c1-1.5 3-1.5 4 0" strokeWidth="1.5" strokeLinecap="round"/><path d="M10 14c1-1.5 3-1.5 4 0" strokeWidth="1.5" strokeLinecap="round"/><circle cx="7" cy="5" r="1" fill="currentColor"/></svg>,
  dishwasher: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="20" rx="2" strokeWidth="1.5"/><line x1="3" y1="6" x2="21" y2="6" strokeWidth="1.5"/><path d="M8 12h8M8 15h8M8 18h8" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="4" r="0.5" fill="currentColor"/></svg>,
  oven: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="2" width="18" height="20" rx="2" strokeWidth="1.5"/><line x1="3" y1="8" x2="21" y2="8" strokeWidth="1.5"/><rect x="6" y="11" width="12" height="8" rx="1" strokeWidth="1.5"/><circle cx="7" cy="5" r="1" strokeWidth="1.5"/><circle cx="12" cy="5" r="1" strokeWidth="1.5"/><circle cx="17" cy="5" r="1" strokeWidth="1.5"/></svg>,
  cooktop: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="2" y="8" width="20" height="8" rx="1" strokeWidth="1.5"/><circle cx="7" cy="12" r="2" strokeWidth="1.5"/><circle cx="17" cy="12" r="2" strokeWidth="1.5"/><circle cx="12" cy="12" r="1.5" strokeWidth="1.5"/></svg>,
  freezer: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2" strokeWidth="1.5"/><line x1="12" y1="6" x2="12" y2="18" strokeWidth="1.5"/><line x1="8" y1="9" x2="16" y2="9" strokeWidth="1.5"/><line x1="8" y1="15" x2="16" y2="15" strokeWidth="1.5"/><path d="M9 6l3 3 3-3" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 18l3-3 3 3" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  iceMaker: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="1.5"/><rect x="7" y="7" width="4" height="4" rx="0.5" strokeWidth="1.5"/><rect x="13" y="7" width="4" height="4" rx="0.5" strokeWidth="1.5"/><rect x="7" y="13" width="4" height="4" rx="0.5" strokeWidth="1.5"/><rect x="13" y="13" width="4" height="4" rx="0.5" strokeWidth="1.5"/></svg>,
  stove: ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2" strokeWidth="1.5"/><line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.5"/><circle cx="8" cy="7" r="1.5" strokeWidth="1.5"/><circle cx="16" cy="7" r="1.5" strokeWidth="1.5"/><rect x="6" y="13" width="12" height="4" rx="0.5" strokeWidth="1.5"/></svg>,
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'default' }) => {
  const IconComponent = ServiceIcons[service.icon] ?? ServiceIcons.oven ?? ServiceIcons.refrigerator;

  if (variant === 'minimal') {
    return (
      <a href={`/services/${service.slug}`} className="group block p-6 border border-gray-200 hover:border-[#D4AF37] transition-all duration-300">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">{IconComponent && <IconComponent className="w-6 h-6" />}</div>
          <span className="font-serif text-lg text-black group-hover:text-[#D4AF37] transition-colors">{service.name}</span>
        </div>
      </a>
    );
  }

  if (variant === 'featured') {
    return (
      <a href={`/services/${service.slug}`} className="group relative block overflow-hidden">
        <div className="aspect-[4/3] overflow-hidden">
          <img src={service.image} alt={service.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="w-12 h-12 flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] mb-4 group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">{IconComponent && <IconComponent className="w-6 h-6" />}</div>
          <h3 className="font-serif text-2xl text-white mb-2">{service.name}</h3>
          <p className="text-white/70 text-sm line-clamp-2">{service.shortDescription}</p>
          <div className="mt-4 flex items-center text-[#D4AF37] text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            Learn More<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </div>
        </div>
      </a>
    );
  }

  return (
    <a href={`/services/${service.slug}`} className="group block bg-white border border-gray-100 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl">
      <div className="p-8 border-b border-gray-100 group-hover:border-[#D4AF37]/30 transition-colors">
        <div className="w-16 h-16 mx-auto flex items-center justify-center border border-[#D4AF37] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-300">{IconComponent && <IconComponent className="w-8 h-8" />}</div>
      </div>
      <div className="p-8 text-center">
        <h3 className="font-serif text-xl text-black mb-3 group-hover:text-[#D4AF37] transition-colors">{service.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">{service.shortDescription}</p>
        <span className="inline-flex items-center text-[#D4AF37] text-sm uppercase tracking-wider group-hover:tracking-widest transition-all duration-300">
          View Details<svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </span>
      </div>
    </a>
  );
};

export default ServiceCard;
