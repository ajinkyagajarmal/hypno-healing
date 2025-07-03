import React, { useState } from 'react';
import styles from './Header.module.css';
import facebook from '../Assets/white-facebook.png';
import instagram from '../Assets/white-instagram.png';
import whatsapp from '../Assets/white-whatsapp.png'

// Import react-icons
import { FaFacebookF, FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

// IMPORTANT: Update this path to your logo image
import logoImage from '../Assets/hypnologo.png'; 

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            {/* Top Bar - This will be hidden on mobile */}
            <div className={styles.topBar}>
                {/* ... This section remains unchanged ... */}
                <div className={styles.container}>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" aria-label="Facebook"><img src={facebook} alt="Facebook" /></a>
                        <a href="https://instagram.com" aria-label="Instagram"><img src={instagram} alt="Instagram" /></a>
                        <a href="https://whatsapp.com" aria-label="Instagram"><img src={whatsapp} alt="Whatsapp" /></a>
                    </div>
                    <div className={styles.contactInfo}>
                        <a href="tel:+919871202811"><FaPhoneAlt /><span>+91 9871202811</span></a>
                        <a href="mailto:connect@shwetaranjan.com"><FaEnvelope /><span>connect@shwetaranjan.com</span></a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className={styles.mainNav}>
                {/* ... This section remains unchanged ... */}
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <a href="/" onClick={() => handleLinkClick('Home')}><img src={logoImage} alt="Neha Patel Logo" /></a>
                    </div>
                    {/* <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button> */}

                    <button
    className={`${styles.hamburger} ${menuOpen ? styles.hamburgerActive : ''}`}
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
>
    <span className={styles.hamburgerLine}></span>
    <span className={styles.hamburgerLine}></span>
    <span className={styles.hamburgerLine}></span>
</button>
                    <nav className={`${styles.navLinks} ${menuOpen ? styles.navActive : ''}`}>
                        <ul>
                            {/* ... Navigation links remain unchanged ... */}
                            <li><a href="home" className={activeLink === 'Home' ? styles.active : ''} onClick={() => handleLinkClick('Home')}>Home</a></li>
                            <li><a href="services" className={activeLink === 'Services' ? styles.active : ''} onClick={() => handleLinkClick('Services')}>Services</a></li>
                            {/* <li><a href="#gallery" className={activeLink === 'Gallery' ? styles.active : ''} onClick={() => handleLinkClick('Gallery')}>Gallery</a></li> */}
                            <li><a href="testimonials" className={activeLink === 'Testimonials' ? styles.active : ''} onClick={() => handleLinkClick('Testimonials')}>Testimonials</a></li>
                            {/* <li><a href="#blog" className={activeLink === 'Blog' ? styles.active : ''} onClick={() => handleLinkClick('Blog')}>Blog</a></li> */}
                            <li><a href="contact" className={activeLink === 'Contact' ? styles.active : ''} onClick={() => handleLinkClick('Contact')}>Contact</a></li>
                        </ul>
                        
                        {/* --- UPDATED MOBILE MENU SECTION --- */}
                        <div className={styles.mobileExtras}>
                            {/* 1. Social Icons are now on top */}
                            <div className={styles.mobileSocial}>
                                <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
                                <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                                <a href="https://whatsapp.com" aria-label="Whatsapp"><FaWhatsapp /></a>
                            </div>
                            {/* 2. Contact Info is below social icons */}
                            <div className={styles.mobileContact}>
                                <a href="tel:+919871202811"><FaPhoneAlt /><span>+91 9871202811</span></a>
                                <a href="mailto:connect@shwetaranjan.com"><FaEnvelope /><span>connect@shwetaranjan.com</span></a>
                            </div>
                        </div>
                        {/* --- END OF UPDATE --- */}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;