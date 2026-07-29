import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../styles/header.css'; 
import resume from '../assets/Tamas_Bukits_CV.pdf';

const Header = () => {
 const [scrolling, setScrolling] = useState(false);
 const logo = `${process.env.PUBLIC_URL}/logo192.png`;

 useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
 }, []);

 const handleScrollToSection = (sectionId) => (e) => {
    e.preventDefault();
  
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = section.getBoundingClientRect().top;
      const headerHeight = document.querySelector('.header').offsetHeight;
      const totalOffset = offset - headerHeight;
  
      window.scrollBy({
        top: totalOffset,
        behavior: 'smooth',
      });
    }
 };

 const handleScrollToTopClick = () => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
 };

 return (   
    <header id='header' className={`header ${scrolling ? 'scrolled' : ''}`}>
      <Link 
        to='/' 
        className={`header-link ${scrolling ? 'scrolled-text' : ''}`}
        onClick={handleScrollToTopClick}>
        <img src={logo} alt="" className="header-logo" aria-hidden="true" />
        <h2>Tamas Bukits</h2>
      </Link>
      <nav className="nav">
        <a href="#about" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('about')}>
          About
        </a>
        <a href="#skills" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('skills')}>
          Skills
        </a>
        <a href="#timeline" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('timeline')}>
          Timeline
        </a>
        <a href="#projects" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('projects')}>
          Projects
        </a>
        <a href="#awards" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('awards')}>
          Awards
        </a>
        <a href="#contact" className={`a ${scrolling ? 'scrolled-a' : ''}`} onClick={handleScrollToSection('contact')}>
          Contact
        </a>
        <Link to={resume} target="_blank" className={`header-button ${scrolling ? 'header-button-scrolled' : ''}`}>
          Resume
        </Link>
      </nav>

      <Link
        to={resume}
        target="_blank"
        className={`mobile-resume-button ${scrolling ? 'mobile-resume-button-scrolled' : ''}`}
      >
        Resume
      </Link>

    </header>
 );
};

export default Header;
