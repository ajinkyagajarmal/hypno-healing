// src/Components/WhyChooseUs.jsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './WhyChooseUs.module.css';
import innerPeaceImage from '../Assets/inner-peace.webp';

// The core list of features
const featuresList = [
  { icon: '✅', title: 'Certified Expertise', description: 'Trust in our certified and experienced hypnotherapists.' },
  { icon: '🛡️', title: 'Safe & Judgment-Free', description: 'A welcoming environment where you can feel secure and understood.' },
  { icon: '✨', title: 'Personalized Plans', description: 'Therapy tailored specifically to your unique journey and goals.' },
  { icon: '🔒', title: 'Absolute Confidentiality', description: 'Your privacy is our utmost priority, guaranteed.' },
  { icon: '🌿', title: 'Integrative Approach', description: 'A holistic method that nurtures your mind, body, and spirit.' },
];

// We add the first few items to the end to create a seamless loop
const extendedFeatures = [...featuresList, ...featuresList.slice(0, 3)];

const WhyChooseUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isResettingRef = useRef(false); // Use ref to prevent re-renders

  useEffect(() => {
    const interval = setInterval(() => {
      // If we are at the "end" (the start of the duplicated items)
      if (currentIndex === featuresList.length) {
        // Prepare for a silent, non-animated jump back to the start
        isResettingRef.current = true;
        setCurrentIndex(prev => prev + 1); // Move one step further to show the first duplicated item
        
        // After a very short delay, jump back to the real start without animation
        setTimeout(() => {
          isResettingRef.current = false;
          setCurrentIndex(0);
        }, 500); // This should match the CSS transition duration
      } else {
        // Normal scroll to the next item
        setCurrentIndex(prev => prev + 1);
      }
    }, 2500); // Scroll every 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Calculate the style for the scrolling container
  const scrollWrapperStyle = {
    // We use CSS variables to define item height and gap for responsiveness
    // The calculation moves the container up by the height of one item plus its gap
    transform: `translateY(calc(-${currentIndex} * (var(--item-height) + var(--item-gap))))`,
    // If we are resetting, disable the transition for an instant jump
    transition: isResettingRef.current ? 'none' : 'transform 0.5s ease-in-out',
  };

  return (
    <div className={styles.whyChooseUsContainer}>
      <div className={styles.container}>
        <div className={styles.introText}>
            <div className={styles.introImageContainer} data-aos='fade-right'>
            <img 
             src={innerPeaceImage} 
               alt="A symbol of inner peace and healing" 
               className={styles.introImage} 
             />
          </div>
          <h2 className={styles.title} data-aos='fade-right'>A Path to Inner Peace!💫</h2>
          <p className={styles.subtitle} data-aos='fade-right'>
            We believe in a healing process built on trust, expertise, and genuine care. Here’s why clients choose Hypnohealing.
          </p>
        </div>

        <div className={styles.featuresCarousel} data-aos='fade-left'>
          <div style={scrollWrapperStyle} className={styles.scrollWrapper}>
            {extendedFeatures.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <span role="img" aria-label="feature icon">{feature.icon}</span>
                </div>
                <div className={styles.textWrapper}>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;