import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">adamek.media</div>
          <p>Sports & Event Visuals</p>
        </div>
        
        <div className="footer-links">
          <a href="/" className="footer-link">{t('nav.home')}</a>
          <a href="/projects" className="footer-link">{t('nav.projects')}</a>
          <a href="/about" className="footer-link">{t('nav.about')}</a>
          <a href="/contact" className="footer-link">{t('nav.contact')}</a>
        </div>
        
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>&copy; {year} Robin Adamek. {t('footer.rights')}</p>
        <div className="footer-legal">
          <a href="/imprint" className="legal-link">{t('footer.imprint')}</a>
          <a href="/privacy" className="legal-link">{t('footer.privacy')}</a>
          <a href="/terms" className="legal-link">{t('footer.terms')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
