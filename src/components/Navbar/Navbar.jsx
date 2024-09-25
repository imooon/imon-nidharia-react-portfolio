import React, { useState, useEffect } from 'react';
import '../Navbar/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500); // Delay for the animation to start
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="navbar">
      <div className={`navbar-left ${loaded ? 'fade-in' : ''}`}>
        Imon Nidharia
      </div>
      <div className={`navbar-right ${isOpen ? 'open' : ''} ${loaded ? 'fade-in-links' : ''}`}>
        <a href="#about" className="coolBeans">About</a>
        <a href="#home" className="coolBeans">Home</a>
        <a href="#projects" className="coolBeans">Projects</a>
        <a href="#contact" className="coolBeans">Contact</a>
      </div>
      <div className="hamburger" id="hamburger-menu" onClick={toggleNavbar}>
        &#9776; {/* Hamburger icon */}
      </div>
    </nav>
  );
}

export default Navbar;
