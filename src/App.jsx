import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Adjust the path as needed
import './components/Navbar/Navbar.css'
import Projects from './components/Projects/Projects';
import './components/Projects/Projects.css'; 

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
      <section className="section section-projects" id="projects">
        <h2>Projects</h2>
        <Projects /> {/* Use the Projects component here */}
      </section>
      <section className="section" id="contact">
        <h2>Contact</h2>
        <p>Get in touch with me.</p>
      </section>
    </div>
  );
};

export default App;
