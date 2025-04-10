import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Skill from './Components/Skill/Skill';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

// Remove these imports if you're not using these components
// import Loader from './Components/Loader';
// import ThemeToggle from './Components/ThemeToggle';
// import ScrollToTop from './Components/ScrollToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Check for saved theme preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuint'
    });
  };

  // Comment out the Loader for now if you haven't created it
  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <Router>
      <div className="App">
        {/* Comment out until you create these components */}
        {/* <ScrollToTop /> */}
        {/* <ThemeToggle theme={theme} toggleTheme={toggleTheme} /> */}
        
        <Header />
        <main>
          <Hero />
          <About />
          <Skill />
          <Projects />
          <Contact />
        </main>
        <Footer />

        {showScrollToTop && (
          <button 
            onClick={scrollToTop} 
            className="scroll-to-top"
            aria-label="Scroll to top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;