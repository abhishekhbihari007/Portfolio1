"use client";

import { useEffect, useState } from "react";
import { NavBarDemo } from "@/components/ui/navbar-demo";
import { initGA, trackPageView } from "@/lib/analytics";

export function ClientWrapper() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    // Initialize analytics
    initGA();
    trackPageView(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    const checkNavbarVisibility = () => {
      const portfolioCover = document.querySelector('section:first-of-type');
      const currentHash = window.location.hash;
      const hasHash = Boolean(currentHash && currentHash !== '#' && currentHash !== '');
      
      if (hasHash) {
        setShowNavbar(true);
        return;
      }

      if (portfolioCover) {
        const rect = portfolioCover.getBoundingClientRect();
        const isPastCover = window.scrollY > rect.height + 50;
        setShowNavbar(isPastCover);
      } else {
        setShowNavbar(true);
      }
    };

    const handleScroll = () => {
      checkNavbarVisibility();
    };

    const handleHashChange = () => {
      setShowNavbar(true);
      setTimeout(checkNavbarVisibility, 200);
    };

    if (window.location.hash && window.location.hash !== '#') {
      setShowNavbar(true);
    } else {
      checkNavbarVisibility();
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    
    const timeoutId = setTimeout(checkNavbarVisibility, 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
      clearTimeout(timeoutId);
    };
  }, []);

  if (!showNavbar) return null;

  return <NavBarDemo />;
}
