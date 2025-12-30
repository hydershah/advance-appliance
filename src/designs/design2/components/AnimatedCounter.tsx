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
      <div className="relative inline-block">
        <span className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-white via-white to-[#60A5FA] bg-clip-text text-transparent drop-shadow-lg">
            {prefix}{formatNumber(count)}{suffix}
          </span>
        </span>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>
      <p className="mt-6 text-gray-300 text-sm md:text-base uppercase tracking-[0.2em] font-semibold">{label}</p>
    </div>
  );
};

interface StatsGridProps {
  stats: readonly { value: number; suffix: string; label: string }[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="bg-gradient-to-b from-[#0A1628] via-[#0D1E33] to-[#0A1628] py-24 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '32px 32px' }} />
      </div>
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#3B82F6] rounded-full filter blur-[150px] opacity-15 -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-[#60A5FA] rounded-full filter blur-[120px] opacity-10 -translate-y-1/2" />
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative">
              {/* Vertical divider between stats */}
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gradient-to-b from-transparent via-[#3B82F6]/30 to-transparent hidden lg:block" />
              )}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} delay={index * 150} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
