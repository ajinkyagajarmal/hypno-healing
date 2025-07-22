// src/Components/Preloader.jsx
import React from 'react';
import styles from './Preloader.module.css';
import logoImage from '../Assets/hypnologo.webp';

const Preloader = ({ slogan }) => {
  return (
    <div className={styles.preloaderScreen}>
      <img 
        src={logoImage} 
        alt="Company Logo" 
        className={styles.logo} 
      />
      <div className={styles.loader}></div>
      {slogan && <h1 className={styles.loadingText}>{slogan}</h1>}
    </div>
  );
};

export default Preloader;