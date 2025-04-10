import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
    setIsVisible(true);
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo animate-up" style={{ animationDelay: '0.1s' }}>
            <h3>YourName</h3>
            <p>Frontend Developer</p>
            <p className="footer-quote">Turning ideas into interactive experiences</p>
          </div>
          
          <div className="footer-links animate-up" style={{ animationDelay: '0.2s' }}>
            <h4>Quick Links</h4>
            <ul>
              {[
                { to: 'home', text: 'Home' },
                { to: 'about', text: 'About' },
                { to: 'skills', text: 'Skills' },
                { to: 'projects', text: 'Projects' },
                { to: 'contact', text: 'Contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    smooth={true} 
                    duration={500}
                    spy={true}
                    activeClass="active"
                    className="footer-link"
                  >
                    <span className="link-hover"></span>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-contact animate-up" style={{ animationDelay: '0.3s' }}>
            <h4>Get In Touch</h4>
            <p>
              <i className="fas fa-envelope"></i> your.email@example.com
            </p>
            <p>
              <i className="fas fa-phone"></i> +1 (123) 456-7890
            </p>
          </div>
          
          <div className="footer-social animate-up" style={{ animationDelay: '0.4s' }}>
            <h4>Connect With Me</h4>
            <div className="social-icons">
              {[
                { icon: 'github', url: 'https://github.com/yourusername' },
                { icon: 'linkedin', url: 'https://linkedin.com/in/yourusername' },
                { icon: 'twitter', url: 'https://twitter.com/yourusername' },
                { icon: 'instagram', url: 'https://instagram.com/yourusername' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.icon}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom animate-up" style={{ animationDelay: '0.5s' }}>
          <p>&copy; {currentYear} <span>YourName</span>. All rights reserved.</p>
          <p className="footer-credit">
            Designed & Built with <i className="fas fa-heart"></i> by YourName
          </p>
        </div>
      </div>
      
      <div className="footer-background">
        <div className="footer-shape-1"></div>
        <div className="footer-shape-2"></div>
      </div>
    </footer>
  );
};

export default Footer;