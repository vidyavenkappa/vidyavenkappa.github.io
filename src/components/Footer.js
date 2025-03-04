import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
       
        <div>
          <p>&copy; {currentYear} Vidya Venkappa. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
       
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/vidya-venkappa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/vidyavenkappa" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:vivenkap@uw.edu" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        
      </div>
      
      
    </footer>
  );
};

export default Footer;