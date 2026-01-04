import React from 'react';
import { Award } from '../types';

interface AwardBadgeProps {
  award: Award;
  variant?: 'default' | 'compact' | 'ribbon';
  className?: string;
}

const AwardBadge: React.FC<AwardBadgeProps> = ({
  award,
  variant = 'default',
  className = '',
}) => {
  if (variant === 'ribbon') {
    return (
      <div className={`relative ${className}`}>
        <div className="bg-contemporary-slate-900 text-contemporary-white px-6 py-4 rounded-lg shadow-lg">
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-6 bg-contemporary-gold-500 rounded-full border-2 border-contemporary-white flex items-center justify-center">
              <svg className="w-3 h-3 text-contemporary-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
          <h4 className="font-playfair font-bold text-lg text-center mt-2">{award.title}</h4>
          <p className="font-poppins text-contemporary-platinum-400 text-sm text-center">{award.year}</p>
          <p className="font-poppins text-contemporary-gold-500 text-xs text-center mt-1">{award.issuer}</p>
        </div>
        {/* Ribbon tails */}
        <div className="absolute -bottom-3 left-2 w-4 h-6 bg-contemporary-slate-900/80 transform -skew-x-12" />
        <div className="absolute -bottom-3 right-2 w-4 h-6 bg-contemporary-slate-900/80 transform skew-x-12" />
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div
        className={`flex items-center space-x-3 bg-contemporary-white border border-contemporary-platinum-400/30 rounded-lg p-3 hover:border-contemporary-gold-500 transition-colors ${className}`}
      >
        <div className="w-10 h-10 bg-contemporary-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-contemporary-gold-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <div className="min-w-0">
          <h5 className="font-playfair font-bold text-contemporary-charcoal-900 truncate">{award.title}</h5>
          <p className="font-poppins text-xs text-contemporary-charcoal-900/60">{award.issuer} | {award.year}</p>
        </div>
      </div>
    );
  }

  // Default variant - medal style
  return (
    <div className={`text-center ${className}`}>
      <div className="relative inline-block">
        {/* Medal ribbon */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8">
          <div className="w-full h-full bg-contemporary-slate-900 transform rotate-45" />
        </div>

        {/* Medal circle */}
        <div className="relative w-24 h-24 mx-auto">
          <div className="absolute inset-0 bg-gradient-to-br from-contemporary-gold-500 via-contemporary-gold-500 to-contemporary-gold-500/80 rounded-full shadow-xl" />
          <div className="absolute inset-1 bg-gradient-to-br from-contemporary-gold-500/90 to-contemporary-gold-500 rounded-full" />
          <div className="absolute inset-2 bg-contemporary-white rounded-full flex items-center justify-center border-4 border-contemporary-gold-500">
            {award.image ? (
              <img
                src={award.image}
                alt={award.title}
                className="w-12 h-12 object-contain"
              />
            ) : (
              <svg className="w-10 h-10 text-contemporary-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </div>
        </div>
      </div>

      <h4 className="font-playfair font-bold text-lg text-contemporary-charcoal-900 mt-4">{award.title}</h4>
      <p className="font-poppins text-contemporary-charcoal-900/60 text-sm">{award.issuer}</p>
      <p className="font-poppins text-contemporary-gold-500 text-sm font-medium">{award.year}</p>
    </div>
  );
};

export default AwardBadge;
