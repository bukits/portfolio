import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faKaggle,
  faOrcid,
  faGoogleScholar
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/academicbar.css';

const AcademicBar = () => {
  return (
    <div className="academic-bar">
      <a href="mailto:tbukits@vicomtech.org" target="_blank" rel="noopener noreferrer" className='email'>
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://linkedin.com/in/bukitst/" target="_blank" rel="noopener noreferrer" className='linkedin'>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/bukits" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://scholar.google.com/citations?user=RGrb9jQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className='google-scholar'>
        <FontAwesomeIcon icon={faGoogleScholar} />
      </a>
      <a href="https://orcid.org/0009-0009-7308-6427" target="_blank" rel="noopener noreferrer" className='orcid'>
        <FontAwesomeIcon icon={faOrcid} />
      </a>
    </div>
  );
};

export default AcademicBar;
