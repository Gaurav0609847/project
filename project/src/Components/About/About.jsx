import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">01.</span> About Me
        </h2>
        <div className="about-content">
          <div className="about-text">
          <p className="animate-text">
  Hello! I'm <span className="highlight">Gaurav Prakash</span>, a passionate third-year Computer Science and Engineering student at 
  <span className="highlight"> Quantum University</span> with strong skills in 
  <span className="highlight"> Java, Data Structures & Algorithms</span>, and the 
  <span className="highlight"> MERN Stack</span>. I'm currently seeking internship opportunities to apply my technical knowledge 
  and contribute to meaningful software solutions.
</p>
<p className="animate-text">
  My journey in technology began when I {`{your story here - e.g., "built my first web application"}`}. Since then, 
  I've developed a deep passion for solving complex problems and creating innovative digital experiences.
</p>
<p className="animate-text">
  Here are the key technologies I've been working with:
</p>
            <ul className="skills-list">
              {['JavaScript (ES6+)', 'React', 'TypeScript', 'Node.js', 'HTML & CSS', 'Git'].map((skill, index) => (
                <li key={index} className="skill-item">
                  <span className="skill-arrow">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="about-image">
            <div className="image-wrapper">
              <div className="image-placeholder"></div>
              <div className="image-border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;