import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import './App.css';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
