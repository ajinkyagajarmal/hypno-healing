// src/Components/Services.jsx

import React from 'react';
import styles from './Services.module.css'; // <-- 1. Import the modular CSS file
import tarot from '../Assets/tarot.jpg'; // <-- Import your service images
import reiki from '../Assets/reiki.jpg'; // <-- Import your service images

// ==================================================================
//   CUSTOMIZE YOUR CONTENT HERE
// ==================================================================
const servicesData = [
  {
    number: '1',
    title: 'Hypno Healing Therapy',
    description: "As a professional hypnotherapist, I have helped countless individuals just like you tap into the power of their subconscious mind to make positive changes in their lives. From managing anxiety to eliminating phobias to addiction cessations to reducing stress, hypnotherapy is the ultimate tool for breaking free from the limiting beliefs and habits that have been holding you back. My approach to hypnotherapy is grounded in the latest research and techniques, and I tailor each session to meet your specific needs and goals. Through a combination of relaxation, visualization, and suggestion, I'll guide you into a state of heightened awareness where you can access your subconscious mind and make positive changes from within. Don't wait another day to start living the life you deserve. Contact me now to schedule a consultation and discover how hypnotherapy can transform your life.",
    imageSrc: tarot, // Path from your `public/images` folder
    phoneNumber: '+91 9890467841' // Replace with your WhatsApp number
  },
  {
    number: '2',
    title: 'Astrology & Tarot Reading',
    description: "This ancient Indian knowledge system reveals how cosmic manifestation of Planets, Sun, Moon, Constellations & other heavenly bodies interact with each other and influence our lives. This impact can be in the form of opportunities, challenges, obstacles or facilitations depending on one’s karma & destiny. Being a Vedic Astrologer, I formulate and analyze the astrological charts of my clients & help them resolve their personal or professional problems, such as career planning, professional growth, relationship advice, spiritual guidance, health advice, interpersonal advice, and parenting matters.",
    imageSrc: reiki, // Path from your `public/images` folder
    phoneNumber: '+91 9890467841' // Replace with your WhatsApp number
  },
  // Add more services here
];


// --- The Main Component ---
const Services = () => {
  return (
    // 2. Use the 'styles' object for class names
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Services</h2>
      <div className={styles.serviceList}>
        {servicesData.map((service, index) => (
          <ServiceItem 
            key={index} 
            service={service} 
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};


// --- The Reusable Item Sub-Component ---
const ServiceItem = ({ service, isReversed }) => {
  const { number, title, description, imageSrc, phoneNumber } = service;

  const handleBookAppointment = () => {
    const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    const message = `Hello! I would like to book an appointment for the "${title}" service.`;
    const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // 3. Use template literals for dynamic class names
  const itemClassName = `${styles.serviceItem} ${isReversed ? styles.reverse : ''}`;

  return (
    <div className={itemClassName}>
      <div className={styles.serviceContent}>
        {/* <div className={styles.serviceNumber}>
          <span>{number}</span>
        </div> */}
        <h3 className={styles.serviceTitle}>{title}</h3>
        <p className={styles.serviceDescription}>{description}</p>
        <button onClick={handleBookAppointment} className={styles.bookButton}>
          <span>BOOK APPOINTMENT</span>
          {/* <span style={{ fontSize: '1.2rem' }}>→</span> */}
        </button>
      </div>
      <div className={styles.serviceImageWrapper}>
        <img src={imageSrc} alt={title} className={styles.serviceImage} />
      </div>
    </div>
  );
};

export default Services;