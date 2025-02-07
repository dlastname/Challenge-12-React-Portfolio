// No bootstrap for custom CSS
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/dlastname" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/dllorens" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
          Stack Overflow
        </a>
      </div>
    </footer>
  );
};

export default Footer;