'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRestorationManager() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Force the browser to NOT restore scroll position on reload
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const forceScrollToTop = () => {
      const htmlEl = document.documentElement;
      const originalScrollBehavior = htmlEl.style.scrollBehavior;
      
      // Temporarily bypass smooth scrolling
      htmlEl.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);

      // Temporarily bypass scroll snapping if active
      const hasSnap = htmlEl.classList.contains('snap-active');
      if (hasSnap) {
        htmlEl.classList.remove('snap-active');
      }

      setTimeout(() => {
        htmlEl.style.scrollBehavior = originalScrollBehavior;
        if (hasSnap) {
          htmlEl.classList.add('snap-active');
        }
      }, 50);
    };

    forceScrollToTop();
  }, []);

  useEffect(() => {
    // 2. Trigger instant scroll-to-top on every path/route change
    const forceScrollToTop = () => {
      const htmlEl = document.documentElement;
      const originalScrollBehavior = htmlEl.style.scrollBehavior;
      
      htmlEl.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);

      const hasSnap = htmlEl.classList.contains('snap-active');
      if (hasSnap) {
        htmlEl.classList.remove('snap-active');
      }

      setTimeout(() => {
        htmlEl.style.scrollBehavior = originalScrollBehavior;
        if (hasSnap) {
          htmlEl.classList.add('snap-active');
        }
      }, 50);
    };

    forceScrollToTop();
  }, [pathname]);

  return null;
}
