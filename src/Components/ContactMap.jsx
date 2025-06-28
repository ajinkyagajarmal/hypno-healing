import React from 'react';
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
    </section>
  );
};

export default ContactMap;