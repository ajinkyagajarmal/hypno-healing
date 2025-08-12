// src/hooks/useScrollSync.js

import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

const sectionPaths = {
  '/': 'home',
  '/home': 'home',
  '/why-us': 'why-us',
  '/services': 'services',
  '/gallery': 'gallery',
  '/testimonials': 'testimonials',
  '/contact': 'contact',
};

// The hook now accepts the setState function for the active index
export const useScrollSync = (setActiveIndex) => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTimeout = useRef(null);

  // Effect 1: On initial page load, scroll to the correct section if URL is not "/"
  useEffect(() => {
    const path = location.pathname;
    if (path !== '/') {
        const sectionId = sectionPaths[path];
        if (sectionId) {
            setTimeout(() => {
            scroller.scrollTo(sectionId, {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart',
                offset: -70,
            });
            }, 100);
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run only once on initial load

  // Effect 2: On scroll, find the active section and update state/URL
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = Object.values(sectionPaths);
      let currentSectionId = 'home'; // Default to home
      let currentSectionIndex = 0;

      // Find which section is most visible in the viewport
      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // The section is considered active if its top is within the top 40% of the viewport
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.4) {
            currentSectionId = id;
            currentSectionIndex = i > 4 ? 4 : i > 2 ? i-1 : i; // Adjust index to match featuresList
            break;
          }
        }
      }

      // Update the active index state
      setActiveIndex(currentSectionIndex);
      
      // Update the URL
      const path = Object.keys(sectionPaths).find(key => sectionPaths[key] === currentSectionId);
      if (path && location.pathname !== path) {
         navigate(path, { replace: true });
      }
    };

    const debouncedScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(handleScroll, 100);
    }

    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [location.pathname, navigate, setActiveIndex]);
};