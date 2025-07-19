import React from 'react';
import ContactCard from './ContactCard';
import styles from './ContactMap.module.css';

const ContactMap = () => {
  // You can get this src by going to Google Maps, finding your location,
  // and clicking "Share" -> "Embed a map".
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.2058013886826!2d73.85951317496269!3d18.510566482581087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06baea456fb%3A0x8b69d7e98a0d77cb!2sKasturi%20Chowk%2C%20Raviwar%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e1!3m2!1sen!2sin!4v1750936657917!5m2!1sen!2sin";

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.subtitle}>For In-person or Online Appointments.</p>
        <div className={styles.mapContainer}>
          <iframe
            src={mapSrc}
            className={styles.mapFrame}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Neha Patel's location"
          ></iframe>
        </div> 
      </div>
      <ContactCard />
    </section>
  );
};

export default ContactMap;






// src/Components/ContactMap.jsx (Enhanced Version)

// import React, { useState } from 'react';
// import ContactCard from './ContactCard';
// import styles from './ContactMap.module.css';

// // 1. Import the map preview image you just created
// import mapPreviewImage from '../Assets/imagemap.webp'; // Adjust the path if necessary

// const ContactMap = () => {
//   // 2. Add state to track if the map should be loaded. It starts as 'false'.
//   const [loadMap, setLoadMap] = useState(false);

//   // Your original Google Maps embed source URL
//   const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.2058013886826!2d73.85951317496269!3d18.510566482581087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06baea456fb%3A0x8b69d7e98a0d77cb!2sKasturi%20Chowk%2C%20Raviwar%20Peth%2C%20Pune%2C%20Maharashtra%20411002!5e1!3m2!1sen!2sin!4v1750936657917!5m2!1sen!2sin";

//   // --- Internal Components for cleaner JSX ---

//   // This is the heavy interactive map. It will only be rendered when loadMap is true.
//   const InteractiveMap = () => (
//     <iframe
//       src={mapSrc}
//       className={styles.mapFrame}
//       allowFullScreen=""
//       loading="lazy" // This is still good practice
//       referrerPolicy="no-referrer-when-downgrade"
//       title="Google Map of location"
//     ></iframe>
//   );

//   // This is the lightweight placeholder with your screenshot.
//   const MapPlaceholder = () => (
//     <div
//       className={styles.mapPlaceholder}
//       onClick={() => setLoadMap(true)} // When clicked, set loadMap to true
//       role="button"
//       tabIndex="0"
//       onKeyDown={(e) => e.key === 'Enter' && setLoadMap(true)} // For accessibility
//     >
//       <img
//         src={mapPreviewImage}
//         alt="Map preview of location"
//         className={styles.mapImage}
//       />
//       <div className={styles.playButtonOverlay}>
//         <div className={styles.playButton}></div>
//         <span>Click to load interactive map</span>
//       </div>
//     </div>
//   );

//   return (
//     <section id="contact" className={styles.contactSection}>
//       <div className={styles.container}>
//         <h2 className={styles.title}>Contact</h2>
//         <p className={styles.subtitle}>For In-person or Online Appointments.</p>
//         <div className={styles.mapContainer}>
//           {/* 3. Conditional Rendering: Show the real map OR the placeholder */}
//           {loadMap ? <InteractiveMap /> : <MapPlaceholder />}
//         </div>
//       </div>
//       <ContactCard />
//     </section>
//   );
// };

// export default ContactMap;