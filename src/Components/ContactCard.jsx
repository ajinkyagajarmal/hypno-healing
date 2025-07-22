// import React from 'react';
// import styles from './ContactCard.module.css';
// import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

// const ContactCard = () => {
//   return (
//     <section className={styles.contactCardSection}>
//       <div className={styles.contactCardWrapper}>
        
//         {/* Card 1: Location */}
//         <div className={styles.infoCard}>
//           <h3 className={styles.cardTitle}>Location:</h3>
//           <p className={styles.cardText}>
//             862, Saraswati Vihar, M.G.Road, Gurugram - 122002, Haryana, India.
//           </p>
//         </div>

//         {/* Card 2: Contact */}
//         <div className={`${styles.infoCard} ${styles.middleCard}`}>
//           <h3 className={styles.cardTitle}>Contact:</h3>
//           <p className={styles.cardText}>
//             <span className={styles.contactLabel}>T:</span>
//             <a href="tel:+919871202811" className={styles.contactLink}>+91 9871202811</a>
//           </p>
//           <p className={styles.cardText}>
//             <span className={styles.contactLabel}>E:</span>
//             <a href="mailto:connect@nehapatel.com" className={styles.contactLink}>connect@nehapatel.com</a>
//           </p>
//         </div>

//         {/* Card 3: Follow Us */}
//         <div className={styles.infoCard}>
//           <h3 className={styles.cardTitle}>Follow Us On:</h3>
//           <div className={styles.socialIcons}>
//             <a href="https://facebook.com" className={styles.iconLink} aria-label="Facebook">
//               <FaFacebookF />
//             </a>
//             <a href="https://instagram.com" className={styles.iconLink} aria-label="Instagram">
//               <FaInstagram />
//             </a>
//             <a href="https://whatsapp.com" className={styles.iconLink} aria-label="Whatsapp">
//               <FaWhatsapp />
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default ContactCard;








import React from 'react';
import styles from './ContactCard.module.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const ContactCard = () => {
  return (
    // This section provides vertical spacing for the component
    <section className={styles.contactSection}>
      
      {/* This is the main container that will be centered and styled */}
      <div className={styles.cardContainer}>
        
        {/* Card 1: Location */}
        <div className={styles.infoCard}>
          <h3 className={styles.cardTitle1}>Location:</h3>
          <p className={styles.cardText}>
            862, Saraswati Vihar, M.G.Road, Gurugram - 122002, Haryana, India.
          </p>
        </div>

        {/* Card 2: Contact */}
        <div className={`${styles.infoCard} ${styles.middleCard}`}>
          <h3 className={styles.cardTitle}>Contact:</h3>
          <p className={styles.cardText}>
            <span className={styles.contactLabel1}>Phone:</span>
            <a href="tel:+919764953382" className={styles.contactLink}>+91 9764953382</a>
          </p>
          <p className={styles.cardText}>
            <span className={styles.contactLabel1}>Email:</span>
            <a href="mailto:hypnohealling1@gmail.com" className={styles.contactLink}>hypnohealling1@gmail.com</a>
          </p>
        </div>

        {/* Card 3: Follow Us */}
        <div className={styles.infoCard}>
          <h3 className={styles.cardTitle1}>Follow Us On:</h3>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" className={styles.iconLink} aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className={styles.iconLink} aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://whatsapp.com" className={styles.iconLink} aria-label="Whatsapp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactCard;