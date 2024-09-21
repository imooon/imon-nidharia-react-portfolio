import React from 'react';
import Navbar from './components/Navbar/Navbar'; // Adjust path as needed
import './components/Navbar/Navbar.css'; // Import Navbar CSS
import Projects from './components/Projects/Projects'; // Import Projects component
import './components/Projects/Projects.css'; // Import Projects CSS
import Contact from './components/Contact/Contact'; // Import Contact component
import './components/Contact/Contact.css'; // Import Contact CSS
import Footer from './components/Footer/Footer'; // Import Footer
import './components/Footer/Footer.css';
import About from './components/About/About';
import Home from './components/Home/Home';


const App = () => {
  return (
    <div>
      <Navbar />
      <section className="section section-home" id="about">
        <About />
      </section>
      <section className="section section-about" id="home">
        <Home />
      </section>
      <section className="section section-projects" id="projects">
        <Projects /> {/* Use the Projects component here */}
      </section>
      <section className="section section-contact" id="contact">
        <Contact />
      </section>
      <Footer /> {/* Add Footer component */}
    </div>
  );
};

export default App;
