import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../assets/css/Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">

        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <span className="logo-accent">ikartandco</span>
        </NavLink>

        {/* Navigation */}
        <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/startup" onClick={closeMenu}>
            Startup
          </NavLink>

          <NavLink to="/aboutus" onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/procurement" onClick={closeMenu}>
            Sourcing
          </NavLink>

          <NavLink to="/supply" onClick={closeMenu}>
            Industrial Supply
          </NavLink>
        </nav>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
        </div>

      </div>
    </header>
  );
};

export default Header;
