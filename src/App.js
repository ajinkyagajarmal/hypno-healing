import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './Components/Header.jsx';
import ContactMap from './Components/ContactMap.jsx';
import ContactCard from './Components/ContactCard.jsx';
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
        <AboutMe />
        <ContactMap />
        <ContactCard />
        </main>
      <Footer />
    </div>
  );
}

export default App;
