import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Adjust path as needed
import './components/Navbar/Navbar.css'; // Import Navbar CSS
import Projects from './components/Projects/Projects'; // Import Projects component
import './components/Projects/Projects.css'; // Import Projects CSS
import Contact from './components/Contact/Contact'; // Import Contact component
import './components/Contact/Contact.css'; // Import Contact CSS

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
      <Contact /> {/* Include the Contact component here */}
    </div>
  );
};

export default App;
