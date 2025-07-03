// src/hooks/useScrollSync.js

import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';

// This maps your URL paths to the section IDs on your page
const sectionPaths = {
  '/': 'home',
  '/home': 'home',
  '/services': 'services',
  '/testimonials': 'testimonials',
  '/contact': 'contact',
};

export const useScrollSync = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isInitialLoad = useRef(true);
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  // Effect 1: On initial load, read the URL and scroll to the section
  useEffect(() => {
    if (isInitialLoad.current) {
      const path = location.pathname;
      const sectionId = sectionPaths[path];
      
      if (sectionId) {
        // Use a timeout to ensure the component has rendered
        setTimeout(() => {
          scroller.scrollTo(sectionId, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            offset: -70,
          });
        }, 100);
      }
      isInitialLoad.current = false;
    }
  }, [location.pathname]);

  // Effect 2: On scroll, determine the section and update the URL
  useEffect(() => {
    const handleScroll = () => {
      // Set a flag to prevent the scroll listener from firing while react-scroll is animating
      if (isScrolling.current) return;

      const sections = Object.values(sectionPaths);
      let currentSectionId = '';

      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the top half of the viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSectionId = id;
            break;
          }
        }
      }
      
      if (currentSectionId) {
        // Find the corresponding path for the section ID
        const path = Object.keys(sectionPaths).find(key => sectionPaths[key] === currentSectionId);
        // Update the URL without adding to history stack to avoid back-button issues
        if (path && location.pathname !== path) {
           navigate(path, { replace: true });
        }
      }
    };
    
    // Add a debounced scroll listener to avoid performance issues
    const debouncedScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(handleScroll, 150);
    }

    window.addEventListener('scroll', debouncedScroll);
    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(scrollTimeout.current);
    };
  }, [location.pathname, navigate]);
};