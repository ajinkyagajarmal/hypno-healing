// src/Components/AboutUs.jsx

import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
        <h2 className={styles.title}>About</h2>
        <p className={styles.subtitle}>Helping you rewrite the stories your subconscious mind tells.</p>
        <div className={styles.aboutColumn} data-aos='fade-down'>
          <h3 className={styles.columnTitle}>
             About Hypnohealing<span role="img" aria-label="leaf">🌿</span>
          </h3>
          <p className={styles.description}>
            At Hypnohealing, we believe that true healing begins from within. Using scientifically backed hypnotherapy techniques and ancient astrological wisdom, we help you overcome emotional, mental, and behavioral challenges.
          </p>
          <p className={styles.description}>
            Whether you're battling stress, insomnia, addiction, or deep-rooted fear, we create a safe, compassionate space to guide you back to peace and clarity.
          </p>
        </div>
      <div className={styles.container}>
        {/* Main Introduction Column */}
        {/* <div className={styles.aboutColumn} data-aos='fade-right'>
          <h3 className={styles.columnTitle}>
             About Hypnohealing<span role="img" aria-label="leaf">🌿</span>
          </h3>
          <p className={styles.description}>
            At Hypnohealing, we believe that true healing begins from within. Using scientifically backed hypnotherapy techniques and ancient astrological wisdom, we help you overcome emotional, mental, and behavioral challenges.
          </p>
          <p className={styles.description}>
            Whether you're battling stress, insomnia, addiction, or deep-rooted fear, we create a safe, compassionate space to guide you back to peace and clarity.
          </p>
        </div> */}

        {/* Hypnotherapy Services Column */}
        <div className={styles.servicesColumn} data-aos='fade-left'>
          <h3 className={styles.columnTitle}>
            What We Help With<span role="img" aria-label="sparkles">💫</span>
          </h3>
          <p className={styles.listIntro}>A calm mind is the first step to peace. Let us help you find relief from:</p>
          <ul className={styles.serviceList}>
            <li>Fear of Success / Failure</li>
            <li>OCD & Obsessive Thoughts</li>
            <li>Alcohol / Mobile / Internet Addiction</li>
            <li>Acidity / Psychosomatic Illness</li>
            <li>Stress, Anxiety & Panic Attacks</li>
            <li>Depression & Suicidal Thoughts</li>
            <li>Exam Fear / Performance Pressure</li>
            <li>Lack of Focus & Poor Concentration</li>
            <li>Insomnia / Sleeplessness</li>
            <li>Anger Management</li>
          </ul>
          <p className={styles.closingStatement}>
            <strong>Therapy is personalized, gentle, and non-invasive</strong> — designed to address the root cause, not just the symptoms.
          </p>
        </div>

        {/* Astrology Services Column */}
        <div className={styles.servicesColumn} data-aos='fade-up'>
          <h3 className={styles.columnTitle}>
            Astrology Consultations <span role="img" aria-label="crystal ball">🔮</span>
          </h3>
          <p className={styles.listIntro}>Sometimes, clarity comes from the cosmos. Ask questions related to:</p>
          <ul className={styles.serviceList}>
            <li>Career, Marriage, Relationships</li>
            <li>Business Growth</li>
            <li>Education, Travel</li>
            <li>Mental Peace & Energy Balance</li>
            <li>Finding Your Life Purpose</li>
            {/* <li>Navigating Personal Strengths & Challenges</li> */}
            <li>Financial Instability & Crisis</li>
            <li>Optimal Timing for Key Decisions</li>
            <li>Family Dynamics & Ancestral Patterns</li>
            <li>Health & Wellness Insights</li>
            <li>Identifying & Releasing Blockages</li>
          </ul>
          <p className={styles.closingStatement}>
            Receive <strong>insightful guidance</strong>, not just generic forecasts.
          </p>
        </div>

        <div className={styles.servicesColumn} data-aos='fade-right'>
          <h3 className={styles.columnTitle}>
            Mental Health Center<span role="img" aria-label="sparkles">🌈</span>
          </h3>
          <p className={styles.listIntro}>A calm mind is the first step to peace. Let us help you find relief from:</p>
          <ul className={styles.serviceList}>
            <li>Clinical Hypnosis</li>
            <li>Graphology</li>
            <li>Family Counselling</li>
            <li>Natural Language Processing (NLP)</li>
            <li>Painless Delivery</li>
            <li>Reiki Healing</li>
            <li>Garbh Sanskar</li>
            <li>De-Addiction Programs</li>
            <li>Mind Programming</li>
            <li>Concentration Power</li>
            
          </ul>
          <p className={styles.closingStatement}>
            Take the first step towards a <strong>clearer, calmer, and more confident you.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;