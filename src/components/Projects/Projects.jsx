import React from 'react';
import './Projects.css'; 

const projects = [
  {
    name: 'Code Collab',
    description: 'A platform for collaborating on coding projects.',
    link: 'https://github.com/imooon/Code-Collab',
  },
  {
    name: 'Harmony Hub',
    description: 'A music playlist sharing app.',
    link: 'https://github.com/imooon/Harmony-Hub-App',
  },
  {
    name: 'Motor Matcher',
    description: 'An application to help find the perfect vehicle.',
    link: 'https://github.com/imooon/motormatcher-app',
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
