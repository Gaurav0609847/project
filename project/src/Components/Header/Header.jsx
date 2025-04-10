import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'mobile-open' : ''}`}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">Gaurav Prakash</div>
          
          <div 
            className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                onClick={() => setMobileMenuOpen(false)}
                spy={true}
                activeClass="active"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="about" 
                smooth={true} 
                duration={500} 
                onClick={() => setMobileMenuOpen(false)}
                spy={true}
                activeClass="active"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="skills" 
                smooth={true} 
                duration={500} 
                onClick={() => setMobileMenuOpen(false)}
                spy={true}
                activeClass="active"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link 
                to="projects" 
                smooth={true} 
                duration={500} 
                onClick={() => setMobileMenuOpen(false)}
                spy={true}
                activeClass="active"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                to="contact" 
                smooth={true} 
                duration={500} 
                onClick={() => setMobileMenuOpen(false)}
                spy={true}
                activeClass="active"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;