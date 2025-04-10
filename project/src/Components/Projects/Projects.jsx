import React, { useState } from 'react';
import './Project.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with product listings, cart functionality, and secure checkout process.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A Kanban-style productivity app with drag-and-drop functionality and real-time updates.',
      technologies: ['React', 'Firebase', 'Material UI'],
      link: '#',
      github: '#',
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting application with location detection and 5-day outlook.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js'],
      link: '#',
      github: '#',
      category: 'API Integration'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with smooth animations and dark/light mode toggle.',
      technologies: ['React', 'GSAP', 'SCSS'],
      link: '#',
      github: '#',
      category: 'Web Design'
    },
    {
      id: 5,
      title: 'AI Image Generator',
      description: 'Web application that generates AI artwork based on user prompts using machine learning.',
      technologies: ['React', 'Python', 'TensorFlow'],
      link: '#',
      github: '#',
      category: 'Machine Learning'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'Mobile-friendly application for tracking workouts and visualizing progress over time.',
      technologies: ['React Native', 'Firebase', 'D3.js'],
      link: '#',
      github: '#',
      category: 'Mobile'
    }
  ];

  const filters = ['All', 'Full Stack', 'Web App', 'API Integration', 'Web Design', 'Mobile'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span> My Projects
        </h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="image-placeholder"></div>
                <div className="project-overlay">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    aria-label="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-link"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-sm btn-outline"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="more-projects">
          <a 
            href="https://github.com/yourusername" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn"
          >
            View More Projects
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;