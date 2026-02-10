import React from 'react';
import Image from 'next/image';
import { businessInfo } from '../data/content';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  showCTA?: boolean;
  overlay?: 'dark' | 'light' | 'gradient';
  height?: 'full' | 'large' | 'medium' | 'small';
  align?: 'left' | 'center' | 'right';
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  image,
  showCTA = true,
  overlay = 'gradient',
  height = 'full',
  align = 'left',
}) => {
  const heightClasses = { full: 'min-h-screen', large: 'min-h-[85vh]', medium: 'min-h-[65vh]', small: 'min-h-[45vh]' };
  const overlayClasses = { dark: 'bg-black/60', light: 'bg-black/30', gradient: 'bg-gradient-to-r from-black/80 via-black/50 to-transparent' };
  const alignClasses = { left: 'text-left items-start', center: 'text-center items-center', right: 'text-right items-end' };
  const containerAlign = { left: 'justify-start', center: 'justify-center', right: 'justify-end' };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center overflow-hidden`}>
      {image.startsWith('/') ? (
        <Image src={image} alt={title} fill className="object-cover object-[center_60%]" priority sizes="100vw" quality={80} />
      ) : (
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />
      )}
      <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[#D4AF37]/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`flex ${containerAlign[align]}`}>
          <div className={`flex flex-col ${alignClasses[align]} max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`}>
            <div className={`w-16 h-px bg-[#D4AF37] mb-8 ${align === 'center' ? 'mx-auto' : ''}`} />
            {subtitle && <span className="text-[#D4AF37] text-xs md:text-sm uppercase tracking-[0.3em] mb-4 font-light">{subtitle}</span>}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light leading-tight mb-6">
              {title.split('\n').map((line, i) => <React.Fragment key={i}>{line}{i < title.split('\n').length - 1 && <br />}</React.Fragment>)}
            </h1>
            {description && <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">{description}</p>}
            {showCTA && (
              <div className={`flex flex-col sm:flex-row gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
                <a href={`tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center px-8 py-4 bg-[#D4AF37] text-black text-sm uppercase tracking-wider hover:bg-[#C4A030] transition-all duration-300 group">
                  <svg className="w-5 h-5 mr-3 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  Call {businessInfo.phone}
                </a>
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-white text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300">
                  Schedule Service
                  <svg className="w-4 h-4 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      {height === 'full' && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-white/60 animate-bounce">
            <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
