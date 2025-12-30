import { useState, useEffect, useCallback } from 'react';

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
  isScrolled: boolean;
}

export const useScrollEffect = (threshold: number = 50): ScrollState => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: null,
    isScrolled: false,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      const isScrolled = scrollY > threshold;

      setScrollState({
        scrollY,
        scrollDirection,
        isScrolled,
      });

      lastScrollY = scrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
};

interface ParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

export const useParallax = (options: ParallaxOptions = {}): number => {
  const { speed = 0.5, direction = 'up' } = options;
  const [offset, setOffset] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const multiplier = direction === 'up' ? -1 : 1;
    setOffset(scrollY * speed * multiplier);
  }, [speed, direction]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return offset;
};

export const useSmoothScroll = (): ((elementId: string) => void) => {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return scrollToElement;
};
