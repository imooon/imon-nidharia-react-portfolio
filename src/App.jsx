import React from 'react';
import Navbar from './components/Navbar'; // Adjust the path as needed
import './components/Navbar.css'; // Make sure this path is correct

const App = () => {
  return (
    <div>
      <Navbar />
      <section className="section section-home" id="home">
        <h2>Home</h2>
        <p>Welcome to my portfolio!</p>
      </section>
      <section className="section section-about" id="about">
        <h2>About Me</h2>
        <p>Here’s a little bit about me.</p>
      </section>
      <section className="section" id="projects">
        <h2>Projects</h2>
        <p>Check out my work here.</p>
      </section>
      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Get in touch with me.</p>
      </section>
    </div>
  );
};

export default App;
