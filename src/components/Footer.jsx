import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">adamek.media</div>
          <p>Sports & Event Visuals</p>
        </div>
        
        <div className="footer-links">
          <a href="/" className="footer-link">Home</a>
          <a href="/projects" className="footer-link">Projects</a>
          <a href="/about" className="footer-link">About</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>&copy; {year} Robin Adamek. All rights reserved.</p>
        <div className="footer-legal">
          <a href="/imprint" className="legal-link">Impressum</a>
          <a href="/privacy" className="legal-link">Datenschutz</a>
          <a href="/terms" className="legal-link">AGB</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
