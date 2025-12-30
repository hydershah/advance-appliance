import React from 'react';

interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
}

interface MegaMenuProps {
  services: readonly Service[];
  isScrolled: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  snowflake: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18m0-18l-3 3m3-3l3 3m-3 15l-3-3m3 3l3-3M3 12h18M3 12l3-3m-3 3l3 3m15-3l-3-3m3 3l-3 3" />
    </svg>
  ),
  droplet: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
    </svg>
  ),
  wind: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  dish: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  flame: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
    </svg>
  ),
  circle: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" strokeWidth={2} />
      <circle cx="12" cy="12" r="3" strokeWidth={2} />
    </svg>
  ),
  cube: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
};

export const MegaMenu: React.FC<MegaMenuProps> = ({ services, isScrolled }) => {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[800px]">
      <div className={`rounded-2xl shadow-2xl p-8 grid grid-cols-3 gap-4 ${isScrolled ? 'bg-[#0A1628] border border-white/10' : 'bg-white border border-gray-100'}`}>
        {services.slice(0, 9).map((service) => (
          <a
            key={service.id}
            href={`/services/${service.id}`}
            className={`flex items-start space-x-3 p-3 rounded-xl transition-all duration-200 group ${isScrolled ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}
          >
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110 ${isScrolled ? 'bg-[#3B82F6]/20 text-[#3B82F6]' : 'bg-[#0A1628]/5 text-[#0A1628] group-hover:bg-[#3B82F6] group-hover:text-white'}`}>
              {iconMap[service.icon] || iconMap.circle}
            </div>
            <div>
              <h4 className={`font-bold text-sm transition-colors ${isScrolled ? 'text-white group-hover:text-[#3B82F6]' : 'text-[#0A1628] group-hover:text-[#3B82F6]'}`}>
                {service.name}
              </h4>
              <p className={`text-xs mt-1 line-clamp-2 ${isScrolled ? 'text-gray-400' : 'text-gray-500'}`}>
                {service.description.substring(0, 60)}...
              </p>
            </div>
          </a>
        ))}
        <div className="col-span-3 mt-4 pt-4 border-t border-gray-200/20">
          <a
            href="/services"
            className={`flex items-center justify-center space-x-2 py-3 rounded-lg font-bold text-sm transition-all duration-200 group ${isScrolled ? 'bg-[#3B82F6] text-white hover:bg-[#2563EB]' : 'bg-[#0A1628] text-white hover:bg-[#0A1628]/90'}`}
          >
            <span>View All Services</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
