"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const TransitionContext = createContext(null);

export const useTransition = () => useContext(TransitionContext);

export default function TransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, setIsPending] = useState(false);

  const handleTransitionNavigate = (href) => {
    if (isPending) return;
    setIsPending(true);

    // 1. Add class to trigger CSS curtain closing transition
    document.documentElement.classList.add('is-animating');

    // 2. Wait for transition duration (600ms as per CSS)
    setTimeout(() => {
      // 3. Change path in Next.js
      router.push(href);
      
      // If the pathname is already the same, we manually trigger the animation out
      if (window.location.pathname === href) {
        document.documentElement.classList.remove('is-animating');
        setIsPending(false);
      }
    }, 600);
  };

  // When pathname changes, we animate the curtain open
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Add small delay to ensure page content is rendered before fading in
    const timer = setTimeout(() => {
      document.documentElement.classList.remove('is-animating');
      setIsPending(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleLinkClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Skip external links, hashes, mailto, tel, target _blank, etc.
      if (
        href.startsWith('http') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        anchor.getAttribute('target') === '_blank' ||
        anchor.hasAttribute('data-no-swup')
      ) {
        return;
      }

      // Convert page extensions (like index.html -> / or contact.html -> /contact)
      let targetPath = href;
      if (targetPath.endsWith('.html')) {
        targetPath = targetPath.replace(/\.html$/, '');
        if (targetPath === 'home-1' || targetPath === 'index') {
          targetPath = '/';
        } else {
          targetPath = '/' + targetPath;
        }
      } else if (!targetPath.startsWith('/')) {
        targetPath = '/' + targetPath;
      }

      e.preventDefault();
      handleTransitionNavigate(targetPath);
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, [isPending]);

  return (
    <TransitionContext.Provider value={{ navigate: handleTransitionNavigate }}>
      {children}
    </TransitionContext.Provider>
  );
}
