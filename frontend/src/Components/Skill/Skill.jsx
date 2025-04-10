import React, { useEffect, useState } from 'react';
import './Skill.css';

const Skill = () => {
  const [animated, setAnimated] = useState(false);
  const [activeTab, setActiveTab] = useState('frontend');

  const skills = {
    frontend: [
      { name: 'HTML5', level: 95, icon: 'fab fa-html5', color: '#e34f26' },
      { name: 'CSS3', level: 90, icon: 'fab fa-css3-alt', color: '#264de4' },
      { name: 'JavaScript', level: 85, icon: 'fab fa-js', color: '#f7df1e' },
      { name: 'React', level: 85, icon: 'fab fa-react', color: '#61dafb' },
      { name: 'TypeScript', level: 75, icon: 'fas fa-code', color: '#3178c6' },
      { name: 'Redux', level: 80, icon: 'fas fa-code-branch', color: '#764abc' }
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: 'fab fa-node-js', color: '#68a063' },
      { name: 'Express', level: 75, icon: 'fas fa-server', color: '#000000' },
      { name: 'MongoDB', level: 70, icon: 'fas fa-database', color: '#47a248' },
      { name: 'Firebase', level: 75, icon: 'fas fa-fire', color: '#ffca28' },
      { name: 'GraphQL', level: 65, icon: 'fas fa-project-diagram', color: '#e535ab' },
      { name: 'REST API', level: 85, icon: 'fas fa-cloud', color: '#0052cc' }
    ],
    tools: [
      { name: 'Git', level: 85, icon: 'fab fa-git-alt', color: '#f05032' },
      { name: 'Webpack', level: 70, icon: 'fas fa-box', color: '#8dd6f9' },
      { name: 'Docker', level: 60, icon: 'fab fa-docker', color: '#2496ed' },
      { name: 'VS Code', level: 90, icon: 'fas fa-code', color: '#007acc' },
      { name: 'Figma', level: 75, icon: 'fab fa-figma', color: '#f24e1e' },
      { name: 'Jest', level: 80, icon: 'fas fa-vial', color: '#c21325' }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">02.</span> My Skills
        </h2>
        
        <div className="skills-tabs">
          {['frontend', 'backend', 'tools'].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="skills-grid">
          {skills[activeTab].map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-header">
                <div className="skill-icon" style={{ color: skill.color }}>
                  <i className={skill.icon}></i>
                </div>
                <h3>{skill.name}</h3>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              
              <div className="skill-bar">
                <div 
                  className={`skill-progress ${animated ? 'animate' : ''}`}
                  style={{ 
                    width: animated ? `${skill.level}%` : '0%',
                    backgroundColor: skill.color
                  }}
                  data-level={skill.level}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;