import React from 'react';
import styles from './AboutMe.module.css';

// The image should be placed in your project, e.g., in an 'assets' folder,
// and then imported like this.
import profileImage from '../Assets/sample1.webp'; // <-- IMPORTANT: Update this path

const AboutMe = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Text Content Container */}
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Namaste!</h1>
          <p className={styles.description}>
          Welcome to HypnoHealing – where healing begins within.
At the heart of this space is Mrs. Neha Pattel, a compassionate healer and certified hypnotherapist with over 10 years of experience. 
With her calming presence and profound understanding of the mind, we’ve helped more than 500 individuals overcome anxiety, trauma, addiction, fear, and emotional distress.
Each session at HypnoHealing with Mrs. Neha Pattel is a step toward balance, inner peace, and reconnecting with your true self. 
Because healing isn’t just possible — it’s already waiting for you.
          </p>
          <button className={styles.knowMoreButton}>
            Know more
          </button>
        </div>

        {/* Image Container */}
        <div className={styles.imageContainer}>
          <img src={profileImage} alt="A woman with tarot cards" className={styles.profileImage} loading='lazy' />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;