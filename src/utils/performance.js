// Performance optimization utilities

import { useCallback, useMemo, useRef, useEffect, useState } from 'react';

// Debounce hook for search and input optimization
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Throttle hook for scroll and resize events
export const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, limit]);

  return throttledValue;
};

// Memoized callback hook
export const useMemoizedCallback = (callback, deps) => {
  return useCallback(callback, deps);
};

// Memoized value hook
export const useMemoizedValue = (value, deps) => {
  return useMemo(() => value, deps);
};

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [hasIntersected, options]);

  return [ref, isIntersecting, hasIntersected];
};

// Performance monitoring hook
export const usePerformanceMonitor = (componentName) => {
  const renderStart = useRef();
  const renderCount = useRef(0);

  useEffect(() => {
    renderStart.current = performance.now();
    renderCount.current += 1;

    return () => {
      const renderTime = performance.now() - renderStart.current;
      if (process.env.NODE_ENV === 'development') {
        console.log(`${componentName} render #${renderCount.current}: ${renderTime.toFixed(2)}ms`);
      }
    };
  });

  return renderCount.current;
};

// Bundle size optimization - dynamic imports
export const lazyLoadComponent = (importFunc) => {
  return React.lazy(() => importFunc().catch(() => ({
    default: () => <div>Error loading component</div>
  })));
};

// Preload critical resources
export const preloadResource = (href, as = 'script') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  document.head.appendChild(link);
};

// Web Vitals monitoring
export const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Performance optimization for large lists
export const optimizeListRendering = (items, batchSize = 50) => {
  const [visibleItems, setVisibleItems] = useState(items.slice(0, batchSize));
  const [hasMore, setHasMore] = useState(items.length > batchSize);

  const loadMore = useCallback(() => {
    const currentLength = visibleItems.length;
    const nextBatch = items.slice(currentLength, currentLength + batchSize);
    
    if (nextBatch.length > 0) {
      setVisibleItems(prev => [...prev, ...nextBatch]);
      setHasMore(currentLength + nextBatch.length < items.length);
    }
  }, [items, visibleItems.length, batchSize]);

  return { visibleItems, hasMore, loadMore };
};

// Memoization for expensive calculations
export const createMemoizedSelector = (selector, deps) => {
  return useMemo(() => selector, deps);
};
