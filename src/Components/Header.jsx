// src/Components/Header.jsx

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Header.module.css';

// --- Icon Imports ---
// Make sure you have all the icons you need
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

// --- Asset Imports (for desktop top bar) ---
import facebook from '../Assets/white-facebook.webp';
import instagram from '../Assets/white-instagram.webp';
import whatsapp from '../Assets/white-whatsapp.webp';
import logoImage from '../Assets/hypnologo.webp'; 

const Header = ({ menuOpen, setMenuOpen }) => {

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                {/* This section uses images and remains unchanged */}
                <div className={styles.container}>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><img src={facebook} alt="Facebook" /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src={instagram} alt="Instagram" /></a>
                        <a href="https://wa.me/919764953382" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><img src={whatsapp} alt="Whatsapp" /></a>
                    </div>
                    <div className={styles.contactInfo}>
                        <a href="tel:+919764953382"><FaPhoneAlt /><span>+91 9764953382</span></a>
                        <a href="mailto:hypnohealling1@gmail.com"><FaEnvelope /><span>hypnohealling1@gmail.com</span></a>
                    </div>
                </div>
            </div>

            <div className={styles.mainNav}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <ScrollLink to="home" smooth={true} duration={500} onClick={handleMenuClose} className={styles.logoLink}>
                            <img src={logoImage} alt="Hypno Healing Logo" />
                        </ScrollLink>
                    </div>

                    <button className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                        <span className={styles.hamburgerLine}></span>
                    </button>

                    <nav className={`${styles.navLinks} ${menuOpen ? styles.navActive : ''}`}>
                        <ul>
                            {/* Navigation links remain the same */}
                            <li><ScrollLink activeClass={styles.active} to="home" spy={true} smooth={true} offset={-80} duration={500} onClick={handleMenuClose}>Home</ScrollLink></li>
                            <li><ScrollLink activeClass={styles.active} to="services" spy={true} smooth={true} offset={-80} duration={500} onClick={handleMenuClose}>Services</ScrollLink></li>
                            <li><ScrollLink activeClass={styles.active} to="gallery" spy={true} smooth={true} offset={-80} duration={500} onClick={handleMenuClose}>Gallery</ScrollLink></li>
                            <li><ScrollLink activeClass={styles.active} to="testimonials" spy={true} smooth={true} offset={-80} duration={500} onClick={handleMenuClose}>Testimonials</ScrollLink></li>
                            <li><ScrollLink activeClass={styles.active} to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={handleMenuClose}>Contact</ScrollLink></li>
                        </ul>
                        
                        {/* --- UPDATED MOBILE MENU SECTION --- */}
                        <div className={styles.mobileExtras}>
                            {/* This section now uses react-icons */}
                            {/* <div className={styles.mobileSocial}>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FaWhatsapp /></a>
                            </div> */}
                            <div className={styles.mobileContact}>
                                <a href="tel:+919764953382"><FaPhoneAlt /><span>+91 9764953382</span></a>
                                <a href="mailto:hypnohealling1@gmail.com"><FaEnvelope /><span>hypnohealling1@gmail.com</span></a>
                            </div>
                            <div className={styles.mobileSocial}>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://wa.me/919764953382" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FaWhatsapp /></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;