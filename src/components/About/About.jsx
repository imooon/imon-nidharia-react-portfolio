import React from 'react';
import '../About/About.css';

const About = () => {
  return (
    <section id="about" className="about-container">
      <div className="container">
        <p>Hello 👋 I'm</p>
        <section className="animation">
          <div className="first"><div>Imon Nidharia</div></div>
          <div className="second"><div>Web Developer</div></div>
          <div className="third"><div>Software Engineer</div></div>
        </section>
      </div>
    </section>
  );
}

export default About;
