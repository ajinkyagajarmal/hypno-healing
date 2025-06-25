import logo from './logo.svg';
import React, { useState } from 'react';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import './App.css';
import AboutMe from './Components/AboutMe.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
