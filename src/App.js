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

import React, { useState, useEffect, lazy, Suspense } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useScrollSync } from './hooks/useScrollSync'; 

import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import './App.css';
// --- Your Components ---
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Preloader from './Components/Preloader.jsx';
import WhatsAppChatWidget from './Components/WhatsAppChatWidget.jsx';
import AboutMe from './Components/AboutMe.jsx';


// import ContactMap from './Components/ContactMap.jsx';
// import Services from './Components/Services.jsx';
// import Gallery from './Components/Gallery.jsx';
// import Testimonials from './Components/Testimonials.jsx';
// import AnimatedSection from './Components/AnimatedSection.jsx';
// import AboutUs from './Components/AboutUs.jsx'; 
// import WhyChooseUs from './Components/WhyChooseUs.jsx';

// --- LAZY-LOAD ALL "BELOW THE FOLD" COMPONENTS ---
// These components are not visible on initial load, so we defer their code.
const WhyChooseUs = lazy(() => import('./Components/WhyChooseUs.jsx'));
const Services = lazy(() => import('./Components/Services.jsx'));
const Gallery = lazy(() => import('./Components/Gallery.jsx'));
const Testimonials = lazy(() => import('./Components/Testimonials.jsx'));
const ContactMap = lazy(() => import('./Components/ContactMap.jsx'));
const AnimatedSection = lazy(() => import('./Components/AnimatedSection.jsx'));
const AboutUs = lazy(() => import('./Components/AboutUs.jsx'));



const SectionLoader = () => (
  // We reserve space to prevent the page from jumping when the component loads.
  <div style={{ minHeight: '100vh' }} />
);

const MainPage = () => {
  // useScrollSync();

  return (
    <>
      <main>
        <section id="home">
          <AnimatedSection>
            {/* <AboutMe /> */}
          </AnimatedSection>
        </section>
        <Suspense fallback={<SectionLoader />}>
        <section id="services">
          <AnimatedSection>
            {/* <Services /> */}
          </AnimatedSection>
        </section>
        <section id="about-us">
        <AnimatedSection>
          {/* <AboutUs /> */}
        </AnimatedSection>
      </section>
        <section id="gallery">
          <AnimatedSection>
            {/* <Gallery /> */}
          </AnimatedSection>
        </section>
        <section id="why-us">
          <AnimatedSection>
            <WhyChooseUs />
          </AnimatedSection>
        </section>
        <section id="testimonials">
          <AnimatedSection>
            {/* <Testimonials /> */}
          </AnimatedSection>
        </section>
        <section id="contact">
          <AnimatedSection>
            {/* <ContactMap /> */}
          </AnimatedSection>
        </section>
        </Suspense>
      </main>
    </>
  );
};

// function App() {

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // You can adjust this
//       once: true,     // Animation happens only once
//       offset: 100, 
//     });
//   }, []);

//   // 1. Move menuOpen state here from Header.js
//   const [menuOpen, setMenuOpen] = useState(false);

//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Wait for 1500 milliseconds (1.5 seconds) then hide the preloader
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 1500);

//     // Cleanup the timer if the component unmounts
//     return () => clearTimeout(timer);
//   }, []); // The empty array ensures this effect runs only once on mount

//   // 5. Use conditional rendering to show the preloader or the app
//   if (isLoading) {
//     return <Preloader slogan="Hypno Healing - Where Your inner universe awaits." />;
//   }

//   return (
//     <Router>
//       {/* 2. Conditionally apply a class for the blur effect */}
//       <div className={`App ${menuOpen ? 'menu-is-open' : ''}`}>
        
//         {/* 3. Pass the state and setter function down to the Header */}
//         <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

//         <div className="header-spacer"></div> 
        
//         <Routes>
//           {/* <Route path="/" element={<MainPage />} />
//           <Route path="/home" element={<MainPage />} />
//           <Route path="/services" element={<MainPage />} />
//           <Route path="/about-us" element={<MainPage />} />
//           <Route path="/gallery" element={<MainPage />} />
//           <Route path="/testimonials" element={<MainPage />} />
//           <Route path="/contact" element={<MainPage />} /> */}
//           <Route path="*" element={<MainPage />} />
//         </Routes>
        
//         <Footer />
//         <WhatsAppChatWidget 
//           phoneNumber="+91 9890467841"
//           contactName="Neha Patel"
//           headerTitle="Chat with us!"
//         />
//       </div>
//     </Router>
//   );
// }

// src/App.js

function App() {
  // --- State Declarations ---
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // --- Combined useEffect for Initial Setup ---
  useEffect(() => {
    // 1. Initialize the animation library
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100, 
    },100);

    // 2. Set up the timer for the preloader and background image
    const preloaderTimer = setTimeout(() => {
      // Hide the preloader component
      setIsLoading(false);

      // After a short delay, fade in the main background image
      setTimeout(() => {
        document.body.classList.add('background-visible');
      }, 500); // 500ms delay

    }, 1500); // Total preloader duration

    // 3. Cleanup function to clear the timer
    return () => clearTimeout(preloaderTimer);
  }, []); // The empty dependency array [] ensures this runs only once after the component mounts

  // --- Conditional Rendering for Preloader ---
  if (isLoading) {
    return <Preloader slogan="Hypno Healing - Where Your inner universe awaits." />;
  }

  // --- Main App Return Statement ---
  return (
    <Router>
      <div className={`App ${menuOpen ? 'menu-is-open' : ''}`}>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="header-spacer"></div> 
        <Routes>
          <Route path="*" element={<MainPage />} />
        </Routes>
        <Footer />
        <WhatsAppChatWidget 
          phoneNumber="+91 YOUR_NUMBER" // Remember to replace this
          contactName="Neha Patel"
          headerTitle="Chat with us!"
        />
      </div>
    </Router>
  );
}

export default App;