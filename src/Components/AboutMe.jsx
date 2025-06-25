import React from 'react';
import styles from './AboutMe.module.css';

// The image should be placed in your project, e.g., in an 'assets' folder,
// and then imported like this.
import profileImage from '../Assets/sample1.jpg'; // <-- IMPORTANT: Update this path

const AboutMe = () => {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.container}>
        {/* Text Content Container */}
        <div className={styles.textContainer}>
          <h1 className={styles.heading}>Namaste!</h1>
          <p className={styles.description}>
            I’m a professional Tarot Card Reader, Reiki Healer, Astrologer, and Hypnotherapist with 13 years of experience. 
            I am a claircognizant, who is passionate about helping people discover their true potential and live a more fulfilling life. 
            I’ve always been drawn to the spiritual world and spent years studying and practicing different modalities to better understand the mind-body-spirit connection. 
            My extensive training and practical experience have allowed me to develop a unique approach to healing and divination that incorporates the best of 
            these ancient practices with modern techniques and technologies.
          </p>
          <button className={styles.knowMoreButton}>
            Know more
          </button>
        </div>

        {/* Image Container */}
        <div className={styles.imageContainer}>
          <img src={profileImage} alt="A woman with tarot cards" className={styles.profileImage} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;