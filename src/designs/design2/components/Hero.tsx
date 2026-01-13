import React from 'react';
import CTAButton from './CTAButton';
import { businessInfo, images } from '../data/content';

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  showCTA?: boolean;
  overlay?: 'dark' | 'light' | 'gradient';
  height?: 'full' | 'large' | 'medium' | 'small';
  align?: 'left' | 'center' | 'right';
  heading?: string;
  subheading?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  image,
  showCTA = true,
  overlay = 'gradient',
  height = 'large',
  align = 'left',
  heading,
  subheading,
  backgroundImage,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  const resolvedTitle = title || heading || 'Luxury Appliance Repair';
  const resolvedSubtitle = subtitle || subheading;
  const resolvedDescription = description || 'Premium care for high-end appliances with factory-certified technicians.';
  const resolvedImage = image || backgroundImage || images.hero;

  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[85vh]',
    medium: 'min-h-[65vh]',
    small: 'min-h-[45vh]',
  };

  const alignment = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  };

  const overlayClasses = {
    dark: 'bg-modern-navy-900/70',
    light: 'bg-modern-cream-50/70',
    gradient: 'bg-gradient-to-br from-modern-navy-900/80 via-modern-navy-800/60 to-transparent',
  };

  const shouldShowCTA = showCTA || Boolean(ctaText || secondaryCtaText || secondaryCtaLink);
  const defaultPrimaryText = `Call ${businessInfo.phone}`;
  const defaultPrimaryLink = `tel:${businessInfo.phone.replace(/[^0-9]/g, '')}`;
  const primaryCtaText = ctaText || defaultPrimaryText;
  const primaryCtaLink = ctaLink || defaultPrimaryLink;
  const secondaryText = secondaryCtaText || 'Schedule Service';
  const secondaryLink = secondaryCtaLink || '/contact';
  const showSecondary = Boolean(secondaryCtaText || secondaryCtaLink) || (!ctaText && showCTA);

  return (
    <section className={`relative ${heightClasses[height]} overflow-hidden bg-modern-cream-50`}>
      <div className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-modern-navy-200/40 blur-3xl" />
        <div className="absolute -bottom-32 right-10 h-96 w-96 rounded-full bg-modern-gold-200/50 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.8),_rgba(250,248,245,0.9)_65%,_rgba(235,222,212,1)_100%)]" />

      <div className="container mx-auto px-6 relative z-10 h-full flex items-center pt-24 lg:pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center w-full">
          <div className={`flex flex-col ${alignment[align]} max-w-2xl`}
            style={{ animationDelay: '0.1s' }}
          >
            {resolvedSubtitle && (
              <span className="text-xs uppercase tracking-[0.4em] text-modern-navy-700 font-[var(--font-poppins)]">
                {resolvedSubtitle}
              </span>
            )}
            <h1 className="mt-4 font-[var(--font-bebas)] text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[0.08em] text-modern-navy-900 animate-fade-up">
              {resolvedTitle.split('\n').map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < resolvedTitle.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h1>
            <p className="mt-6 text-base md:text-lg text-modern-charcoal font-[var(--font-poppins)] animate-fade-up">
              {resolvedDescription}
            </p>
            {shouldShowCTA && (
              <div className={`mt-8 flex flex-col sm:flex-row gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
                <CTAButton href={primaryCtaLink} variant="primary" size="lg" icon="phone">
                  {primaryCtaText}
                </CTAButton>
                {showSecondary && (
                  <CTAButton href={secondaryLink} variant="outline" size="lg" icon="arrow">
                    {secondaryText}
                  </CTAButton>
                )}
              </div>
            )}
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 h-full w-full border border-modern-navy-900/20" />
            <div className="relative overflow-hidden rounded-2xl border border-modern-navy-900/10 shadow-2xl">
              <img src={resolvedImage} alt="Luxury appliance" className="w-full h-[420px] md:h-[520px] object-cover" />
              <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
            </div>
            <div className="absolute -bottom-6 left-6 bg-modern-navy-900 text-modern-cream-50 px-6 py-4 rounded-xl shadow-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="text-xs uppercase tracking-[0.3em] font-[var(--font-poppins)] text-modern-gold-200">Trusted Since 1998</p>
              <p className="mt-2 font-[var(--font-cormorant)] text-xl">White-glove appliance care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
