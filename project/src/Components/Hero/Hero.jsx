import React from 'react';
import { Link } from 'react-scroll';
import './Hero.css'; // We'll create this CSS file

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Gaurav Prakash</span>
          </h1>
          <p className="hero-subtitle">A passionate Frontend Developer</p>
          <div className="hero-btns">
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
              View My Work
            </Link>
            <Link to="contact" smooth={true} duration={500} className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;