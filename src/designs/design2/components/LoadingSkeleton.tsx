import React from 'react';

interface SkeletonProps { className?: string; }

export const Skeleton: React.FC<SkeletonProps> = ({ className = '' }) => (
  <div className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%] rounded ${className}`} />
);

export const TextSkeleton: React.FC<{ lines?: number; className?: string }> = ({ lines = 3, className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: lines }).map((_, i) => <Skeleton key={i} className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} />)}
  </div>
);

export const CardSkeleton: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`bg-white rounded-2xl p-6 shadow-lg ${className}`}>
    <Skeleton className="h-48 w-full mb-4 rounded-xl" />
    <Skeleton className="h-6 w-3/4 mb-3" />
    <TextSkeleton lines={2} />
    <div className="mt-4 flex items-center justify-between">
      <Skeleton className="h-10 w-24 rounded-lg" />
      <Skeleton className="h-10 w-32 rounded-lg" />
    </div>
  </div>
);

export const ServiceCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
    <Skeleton className="h-48 w-full" />
    <div className="p-6">
      <div className="flex items-center space-x-3 mb-4">
        <Skeleton className="w-12 h-12 rounded-lg" />
        <Skeleton className="h-6 w-32" />
      </div>
      <TextSkeleton lines={2} className="mb-4" />
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  </div>
);

export const BlogPostSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
    <Skeleton className="h-56 w-full" />
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-7 w-full mb-3" />
      <TextSkeleton lines={3} className="mb-4" />
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Skeleton className="w-10 h-10 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  </div>
);

export const TestimonialSkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl p-8 shadow-lg">
    <div className="flex items-center space-x-1 mb-4">{[1, 2, 3, 4, 5].map((i) => <Skeleton key={i} className="w-5 h-5 rounded-full" />)}</div>
    <TextSkeleton lines={3} className="mb-6" />
    <div className="flex items-center space-x-4">
      <Skeleton className="w-14 h-14 rounded-full" />
      <div><Skeleton className="h-5 w-32 mb-2" /><Skeleton className="h-4 w-24" /></div>
    </div>
  </div>
);

export const HeaderSkeleton: React.FC = () => (
  <div className="bg-white shadow-sm">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-3">
          <Skeleton className="w-12 h-12 rounded-lg" />
          <div><Skeleton className="h-5 w-24 mb-1" /><Skeleton className="h-3 w-20" /></div>
        </div>
        <div className="hidden lg:flex items-center space-x-6">{[1, 2, 3, 4, 5].map((i) => <Skeleton key={i} className="h-4 w-16" />)}</div>
        <Skeleton className="h-12 w-36 rounded-lg" />
      </div>
    </div>
  </div>
);

export const HeroSkeleton: React.FC = () => (
  <div className="bg-[#0A1628] min-h-[80vh] flex items-center">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Skeleton className="h-4 w-32 mb-6 bg-gray-700" />
          <Skeleton className="h-14 w-full mb-4 bg-gray-700" />
          <Skeleton className="h-14 w-3/4 mb-6 bg-gray-700" />
          <div className="space-y-2 mb-8"><Skeleton className="h-5 w-full bg-gray-700" /><Skeleton className="h-5 w-4/5 bg-gray-700" /></div>
          <div className="flex space-x-4"><Skeleton className="h-14 w-40 rounded-lg bg-gray-700" /><Skeleton className="h-14 w-40 rounded-lg bg-gray-700" /></div>
        </div>
        <Skeleton className="h-96 rounded-2xl bg-gray-700" />
      </div>
    </div>
  </div>
);

export const PageLoadingSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    <HeaderSkeleton />
    <HeroSkeleton />
    <div className="container mx-auto px-6 py-16">
      <div className="text-center mb-12"><Skeleton className="h-8 w-48 mx-auto mb-4" /><Skeleton className="h-4 w-96 mx-auto" /></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{[1, 2, 3].map((i) => <CardSkeleton key={i} />)}</div>
    </div>
  </div>
);

// Add shimmer animation via style tag
if (typeof document !== 'undefined' && !document.querySelector('[data-design2-skeleton]')) {
  const style = document.createElement('style');
  style.setAttribute('data-design2-skeleton', 'true');
  style.textContent = `@keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } } .animate-shimmer { animation: shimmer 2s infinite linear; }`;
  document.head.appendChild(style);
}
