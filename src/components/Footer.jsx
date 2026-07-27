import React from 'react';
import AcademicBar from './AcademicBar';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <p className="footer-copy">&copy; 2026 Tamás Bukits<br />
          </p>
        </div>
        <div className="footer-column">
          <AcademicBar />
        </div>
        <div className="footer-column">
          <p className="footer-updated">Last updated: July, 2026</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
