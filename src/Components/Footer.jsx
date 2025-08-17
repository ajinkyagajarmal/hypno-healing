// src/Components/Footer.jsx (Simple & Final)

import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';
import logoImage from '../Assets/hypnologo.webp';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        
        <div className={styles.footerLeft}>
          <div className={styles.footerLogo}>
            <img src={logoImage} alt="Hypnohealing Logo" />
          </div>
          <div className={styles.footerSocial}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://wa.me/919764953382" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FaWhatsapp /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
        
        <div className={styles.footerLinks}>
          {/* --- USE STANDARD <a> tags with href --- */}
          {/* The browser will handle the scrolling. */}
          <a href="#home">Home</a>
          <a href="#about-us">About</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        
      </div>
      
      <div className={styles.footerBottom}>
        <p>Copyright © {currentYear} | Neha Pattel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;