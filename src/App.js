import logo from './logo.svg';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './Components/Header.jsx';
import ContactMap from './Components/ContactMap.jsx';
import Services from './Components/Services.jsx';
import Testimonials from './Components/Testimonials.jsx';
import WhatsAppChatWidget from './Components/WhatsAppChatWidget.jsx';
import AnimatedSection from './Components/AnimatedSection.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';
import AboutMe from './Components/AboutMe.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="header-spacer"></div> 
      
        <main>
          <section id="home">
        <AnimatedSection>
          <AboutMe />
        </AnimatedSection>
        </section>

        <section id="services">
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        </section>
        <section id="testimonials">
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        </section>
        <section id="contact">
        <AnimatedSection>
          <ContactMap />
        </AnimatedSection>
        </section>
        </main>
      <Footer />
      <WhatsAppChatWidget 
        phoneNumber="+91 9890467841"
        contactName="Neha Patel"
        headerTitle="Chat with us!"
      />
    </div>
    
  );
}

export default App;
