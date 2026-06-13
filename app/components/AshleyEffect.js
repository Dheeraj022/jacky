"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AshleyEffect() {
  const pathname = usePathname();

  useEffect(() => {
    // Run initialization once DOM elements are ready on route change
    const initTimer = setTimeout(() => {
      if (typeof window !== 'undefined' && typeof window.initAshleyPage === 'function') {
        window.initAshleyPage();
      }
    }, 150); // slight delay to let Next.js finish mounting and updating layout clones

    return () => clearTimeout(initTimer);
  }, [pathname]);

  return null;
}
