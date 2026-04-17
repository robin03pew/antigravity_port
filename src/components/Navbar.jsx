import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('en') ? 'de' : 'en';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="logo">
            adamek.media
          </Link>
          
          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink 
                key={link.name} 
                to={link.path}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                {link.name}
              </NavLink>
            ))}
            
            <button 
              onClick={toggleLanguage} 
              className="nav-link lang-toggle"
              style={{ background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600 }}
              aria-label="Toggle language"
            >
              {i18n.language.startsWith('en') ? 'EN' : 'DE'}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-toggle ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <div className="hamburger">
              <motion.span 
                animate={isOpen ? { rotate: 45, y: 9.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                animate={isOpen ? { rotate: -45, y: -9.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="mobile-nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="mobile-nav">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 40, rotateX: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                  transition={{ 
                    duration: 0.6, 
                    delay: i * 0.1, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  <NavLink 
                    to={link.path}
                    className={({ isActive }) => isActive ? 'mobile-link active' : 'mobile-link'}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 40, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.6, 
                  delay: navLinks.length * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <button 
                  onClick={() => { toggleLanguage(); setIsOpen(false); }} 
                  className="mobile-link"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', marginTop: '1rem', display: 'inline-block' }}
                >
                  {i18n.language.startsWith('en') ? 'EN / DE' : 'DE / EN'}
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
