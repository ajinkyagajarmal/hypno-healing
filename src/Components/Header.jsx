import React, { useState } from 'react';
import styles from './Header.module.css';
import facebook from '../Assets/white-facebook.png';
import instagram from '../Assets/white-instagram.png';
import whatsapp from '../Assets/white-whatsapp.png'

// Import react-icons
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

// IMPORTANT: Update this path to your logo image
import logoImage from '../Assets/samplelogo.png'; 

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
                <div className={styles.container}>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" aria-label="Facebook">
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram">
                        <img src={instagram} alt="Instagram" />
                        </a>
                        <a href="https://whatsapp.com" aria-label="Instagram">
                        <img src={whatsapp} alt="Whatsapp" />
                        </a>
                    </div>
                    <div className={styles.contactInfo}>
                        <a href="tel:+919871202811">
                            <FaPhoneAlt />
                            <span>+91 9871202811</span>
                        </a>
                        <a href="mailto:connect@shwetaranjan.com">
                            <FaEnvelope />
                            <span>connect@shwetaranjan.com</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className={styles.mainNav}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <a href="/" onClick={() => handleLinkClick('Home')}>
                            <img src={logoImage} alt="Shweta Ranjan Logo" />
                        </a>
                    </div>

                    <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <nav className={`${styles.navLinks} ${menuOpen ? styles.navActive : ''}`}>
                        <ul>
                            <li>
                                <a href="#home" className={activeLink === 'Home' ? styles.active : ''} onClick={() => handleLinkClick('Home')}>Home</a>
                            </li>
                            <li className={styles.dropdown}>
                                <a href="#services" className={activeLink === 'Services' ? styles.active : ''} onClick={() => setActiveLink('Services')}>
                                    Services{/*  <FaChevronDown className={styles.chevron} /> */}
                                </a>
                                {/* <ul className={styles.dropdownMenu}>
                                    <li><a href="#service1">Tarot Reading</a></li>
                                    <li><a href="#service2">Reiki Healing</a></li>
                                    <li><a href="#service3">Astrology</a></li>
                                </ul> */}
                            </li>
                            <li>
                                <a href="#videos" className={activeLink === 'Videos' ? styles.active : ''} onClick={() => handleLinkClick('Videos')}>Videos</a>
                            </li>
                            <li>
                                <a href="#pricing" className={activeLink === 'Pricing' ? styles.active : ''} onClick={() => handleLinkClick('Pricing')}>Pricing</a>
                            </li>
                            <li>
                                <a href="#blog" className={activeLink === 'Blog' ? styles.active : ''} onClick={() => handleLinkClick('Blog')}>Blog</a>
                            </li>
                            <li>
                                <a href="#contact" className={activeLink === 'Contact' ? styles.active : ''} onClick={() => handleLinkClick('Contact')}>Contact</a>
                            </li>
                        </ul>
                        
                        {/* --- NEW: CONTACT/SOCIAL INFO FOR MOBILE MENU --- */}
                        <div className={styles.mobileExtras}>
                            <div className={styles.mobileContact}>
                                <a href="tel:+919871202811">
                                    <FaPhoneAlt />
                                    <span>+91 9871202811</span>
                                </a>
                                <a href="mailto:connect@shwetaranjan.com">
                                    <FaEnvelope />
                                    <span>connect@shwetaranjan.com</span>
                                </a>
                            </div>
                            <div className={styles.mobileSocial}>
                                <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a>
                                <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                            </div>
                        </div>
                        {/* --- END OF NEW CONTENT --- */}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;