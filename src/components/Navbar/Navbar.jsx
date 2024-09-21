import React from 'react';
import './Navbar.css'; // Make sure you have this CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Imon Nidharia</h1>
      </div>
      <div className="navbar-right">
        <a href="#about">About Me</a>       
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
