import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import logo from './images/logo.jpg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to="/about">About</Link></li>
          <li className="navbar-item"><Link to="/solutions">Solutions</Link></li>
          <li className="navbar-item"><Link to="/resources">Resources</Link></li>
        </ul>
        <div className="navbar-buttons">
          <button className="btn login">Login</button>
          <button className="btn trial">Start Free Trial</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;