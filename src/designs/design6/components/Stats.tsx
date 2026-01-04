'use client';

import React from 'react';
import { Stat } from '../utils/types';

interface StatsProps {
  stats: Stat[];
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="font-serif font-normal text-[42px] lg:text-[56px] text-black mb-3">
                {stat.value}
                <span className="text-[#722f10]">{stat.suffix}</span>
              </div>
              <p className="font-sans text-[13px] text-[#6b7280] uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
