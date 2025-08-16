// import React from 'react';
// import styles from './Footer.module.css';

// const Footer = () => {
//   // Get the current year dynamically
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className={styles.footer}>
        
//       <div className={styles.footerContainer}>
//         <p className={styles.copyrightText}>
//           Copyright © {currentYear} | <span style={{color:'#f8f3eb'}}>Neha Pattel.</span> All Rights Reserved.
//         </p>
//       </div>
                         
                          
//     </footer>
//   );
// };

// export default Footer;







// src/Components/Footer.jsx

// src/Components/Footer.jsx

import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
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
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" aria-label="Whatsapp"><FaWhatsapp /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>

          </div>
        </div>
        
        <div className={styles.footerLinks}>
          <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
          <ScrollLink to="about-us" smooth={true} duration={500}>About</ScrollLink>
          <ScrollLink to="services" smooth={true} duration={500}>Services</ScrollLink>
          <ScrollLink to="gallery" smooth={true} duration={500}>Gallery</ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
        </div>
        
      </div>

      {/* --- NEW CALL TO ACTION SECTION --- */}
      {/* <div className={styles.footerCta}>
        <h3 className={styles.ctaTitle}>
          <span role="img" aria-label="person meditating">🧘‍♂️</span> Let Healing Begin
        </h3>
        <p className={styles.ctaSubtitle}>
          Your mind is powerful. Let’s use it to heal, grow, and thrive.
        </p>
        <ScrollLink to="contact" smooth={true} duration={800} className={styles.ctaButton}>
          Book an Appointment
        </ScrollLink>
      </div> */}
      
      <div className={styles.footerBottom}>
        <p>Copyright © {currentYear} | Neha Pattel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;