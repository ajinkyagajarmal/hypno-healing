// src/Components/Preloader.jsx
import React from 'react';
import styles from './Preloader.module.css';

const Preloader = ({ slogan }) => {
  return (
    <div className={styles.preloaderScreen}>
      <div className={styles.loader}></div>
      {slogan && <h1 className={styles.loadingText}>{slogan}</h1>}
    </div>
  );
};

export default Preloader;