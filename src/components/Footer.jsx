import React from 'react';
import { Link } from "react-router-dom";
import '../assets/css/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: Logo & Copyright */}
        <div className="footer-left">
          <Link to="/" className="footer-logo">
            <span className="logo-accent">ikartandco</span>
          </Link>

          <span className="copyright">
            &copy; {currentYear} ikartandco. All rights reserved.
          </span>
        </div>

        {/* RIGHT: Footer Navigation (Same as Header) */}
        <div className="footer-right">
          <nav className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/startup">Startup</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/procurement">Sourcing</Link>
            <Link to="/supply">Industrial Supply</Link>
            {/* <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link> */}
          </nav>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
