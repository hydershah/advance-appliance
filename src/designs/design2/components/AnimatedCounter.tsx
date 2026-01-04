'use client';

import React from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2000,
  delay = 0,
}) => {
  const { count, ref } = useAnimatedCounter({ end: value, duration, delay });

  const formatNumber = (num: number): string => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return Math.floor(num / 1000) + 'K';
    return num.toLocaleString();
  };

  return (
    <div ref={ref} className="text-center group">
      <div className="relative inline-block px-4 py-2 rounded-xl bg-modern-navy-900/5 border border-modern-navy-900/10">
        <span className="text-5xl md:text-6xl lg:text-7xl font-lora font-black tracking-tight text-modern-navy-900">
          {prefix}{formatNumber(count)}{suffix}
        </span>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-14 h-0.5 bg-modern-gold-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
      <p className="mt-6 text-modern-charcoal text-sm md:text-base uppercase tracking-[0.2em] font-openSans font-semibold">{label}</p>
    </div>
  );
};

interface StatsGridProps {
  stats: readonly { value: number; suffix: string; label: string }[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="bg-modern-cream-300 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex flex-col items-center text-center gap-2">
          <span className="px-3 py-1 rounded-full bg-modern-navy-900/5 text-modern-navy-700 text-xs font-openSans font-semibold tracking-[0.3em] uppercase">
            Proven Results
          </span>
          <p className="text-modern-charcoal/70 max-w-2xl font-openSans">
            Premium, white-glove appliance care backed by decades of technical expertise and meticulous workmanship.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} delay={index * 150} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
