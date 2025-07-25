import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Footer from './Footer';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> 🌍 COVID-19</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      
    </nav>
  );
};

export default NavBar;
