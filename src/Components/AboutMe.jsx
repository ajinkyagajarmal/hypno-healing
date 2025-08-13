import React from 'react';
import styles from './AboutMe.module.css';

// The image should be placed in your project, e.g., in an 'assets' folder,
// and then imported like this.
import profileImage from '../Assets/nehaimage3.webp'; // <-- IMPORTANT: Update this path

const AboutMe = () => {
    // 1. Set the year the experience started.
  // Let's assume 10 years of experience in 2024 means she started in 2014.
  const experienceStartYear = 2015; 

  // 2. Get the current year.
  const currentYear = new Date().getFullYear();

  // 3. Calculate the years of experience.
  const yearsOfExperience = currentYear - experienceStartYear;
  return (
    <div className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Text Content Container */}
        <div className={styles.textContainer} data-aos='fade-right'>
          <h1 className={styles.heading}>Namaste!</h1>
          <p className={styles.description}>
          Welcome to HypnoHealing – where healing begins within.
At the heart of this space is <strong>Mrs. Neha Pattel</strong>, a compassionate healer and certified hypnotherapist with over <strong>{yearsOfExperience} years of experience</strong>. 
With her calming presence and profound understanding of the mind, we’ve helped <strong>more than 500 individuals</strong> overcome anxiety, trauma, addiction, fear, and emotional distress.
Each session at HypnoHealing with <strong>Mrs. Neha Pattel</strong> is a step toward balance, inner peace, and reconnecting with your true self. <br />
<strong>Because healing isn’t just possible — it’s already waiting for you.</strong>
          </p>
          <button className={styles.knowMoreButton}>
            Know more
          </button>
        </div>

        {/* Image Container */}
        <div className={styles.imageContainer} data-aos='fade-left'>
          <img 
          src={profileImage} 
          alt="Profile Image" 
          className={styles.profileImage} 
          // loading='lazy'
          fetchpriority="high"  />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;