import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
        
      <div className={styles.footerContainer}>
        <p className={styles.copyrightText}>
          Copyright © {currentYear} | <span style={{color:'#f8f3eb'}}>Neha Patel.</span> All Rights Reserved.
        </p>
      </div>
                         
                          
    </footer>
  );
};

export default Footer;