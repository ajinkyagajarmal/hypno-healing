import logo from './logo.svg';
import React, { useState, useEffect, Suspense, lazy } from 'react';
import Header from './Components/Header.jsx';
import ContactMap from './Components/ContactMap.jsx';
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
        <AnimatedSection>
          <AboutMe />
        </AnimatedSection>
        
        <AnimatedSection>
          <Testimonials />
        </AnimatedSection>
        
        <AnimatedSection>
          <ContactMap />
        </AnimatedSection>
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
