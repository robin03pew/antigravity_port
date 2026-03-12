import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Instagram } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import './Contact.css';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <AnimatedPage>
      <div className="contact-page">
        <div className="container contact-container">
          <motion.div 
            className="contact-content text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants}>Hello.</motion.h1>
            <motion.p variants={itemVariants} className="contact-subtitle">
              Available for bookings worldwide. <br /> Let's create something extraordinary.
            </motion.p>
            
            <motion.div className="contact-links" variants={itemVariants}>
              <a href="mailto:hello@adamek.media" className="contact-item">
                <Mail size={24} />
                <span>hello@adamek.media</span>
              </a>
              
              <a href="tel:+43600000000" className="contact-item">
                <Phone size={24} />
                <span>+43 600 000 000 (Call / WhatsApp)</span>
              </a>
              
              <a href="https://instagram.com/adamek.media" target="_blank" rel="noopener noreferrer" className="contact-item">
                <Instagram size={24} />
                <span>@adamek.media</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Contact;
