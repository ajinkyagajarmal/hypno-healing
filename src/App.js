// import logo from './logo.svg';
// import React, { useState, useEffect, Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Components/Header.jsx';
// import ContactMap from './Components/ContactMap.jsx';
// import Services from './Components/Services.jsx';
// import Testimonials from './Components/Testimonials.jsx';
// import WhatsAppChatWidget from './Components/WhatsAppChatWidget.jsx';
// import AnimatedSection from './Components/AnimatedSection.jsx';
// import Footer from './Components/Footer.jsx';
// import './App.css';
// import AboutMe from './Components/AboutMe.jsx';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <div className="header-spacer"></div> 
      
//         <main>
//           <section id="home">
//         <AnimatedSection>
//           <AboutMe />
//         </AnimatedSection>
//         </section>

//         <section id="services">
//         <AnimatedSection>
//           <Services />
//         </AnimatedSection>
//         </section>
//         <section id="testimonials">
//         <AnimatedSection>
//           <Testimonials />
//         </AnimatedSection>
//         </section>
//         <section id="contact">
//         <AnimatedSection>
//           <ContactMap />
//         </AnimatedSection>
//         </section>
//         </main>
//       <Footer />
//       <WhatsAppChatWidget 
//         phoneNumber="+91 9890467841"
//         contactName="Neha Patel"
//         headerTitle="Chat with us!"
//       />
//     </div>
    
//   );
// }

// export default App;













// src/App.js

import React, { useState, useEffect } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollSync } from './hooks/useScrollSync'; 

import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Your Components ---
import Header from './Components/Header.jsx';
import Preloader from './Components/Preloader.jsx';
import ContactMap from './Components/ContactMap.jsx';
import Services from './Components/Services.jsx';
import Gallery from './Components/Gallery.jsx';
import Testimonials from './Components/Testimonials.jsx';
import WhatsAppChatWidget from './Components/WhatsAppChatWidget.jsx';
import AnimatedSection from './Components/AnimatedSection.jsx';
import Footer from './Components/Footer.jsx';
import AboutMe from './Components/AboutMe.jsx';
import AboutUs from './Components/AboutUs.jsx'; 
import WhyChooseUs from './Components/WhyChooseUs.jsx';

import './App.css';

const MainPage = () => {
  // useScrollSync();

  return (
    <>
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
        <section id="about-us">
        <AnimatedSection>
          <AboutUs />
        </AnimatedSection>
      </section>
        <section id="gallery">
          <AnimatedSection>
            <Gallery />
          </AnimatedSection>
        </section>
        <section id="why-us">
          <AnimatedSection>
            <WhyChooseUs />
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
    </>
  );
};

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // You can adjust this
      once: true,     // Animation happens only once
      offset: 100, 
    });
  }, []);

  // 1. Move menuOpen state here from Header.js
  const [menuOpen, setMenuOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 1500 milliseconds (1.5 seconds) then hide the preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, []); // The empty array ensures this effect runs only once on mount

  // 5. Use conditional rendering to show the preloader or the app
  if (isLoading) {
    return <Preloader slogan="Hypno Healing - Where Your inner universe awaits." />;
  }

  return (
    <Router>
      {/* 2. Conditionally apply a class for the blur effect */}
      <div className={`App ${menuOpen ? 'menu-is-open' : ''}`}>
        
        {/* 3. Pass the state and setter function down to the Header */}
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="header-spacer"></div> 
        
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<MainPage />} />
          <Route path="/services" element={<MainPage />} />
          <Route path="/gallery" element={<MainPage />} />
          <Route path="/testimonials" element={<MainPage />} />
          <Route path="/contact" element={<MainPage />} />
        </Routes>
        
        <Footer />
        <WhatsAppChatWidget 
          phoneNumber="+91 9890467841"
          contactName="Neha Patel"
          headerTitle="Chat with us!"
        />
      </div>
    </Router>
  );
}

export default App;