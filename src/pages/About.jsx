import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import { portraitImage } from '../data/projects';
import { useTranslation } from 'react-i18next';
import './About.css';

const About = () => {
  const { t } = useTranslation();
  const equipment = [
    { category: t('about.camera'), items: ['Panasonic Lumix G9'] },
    { category: t('about.lenses'), items: ['Olympus M.Zuiko 40-150mm F2.8 PRO', 'Panasonic Leica 12-60mm 2.8-4.0'] },
    { category: t('about.lighting'), items: ['GODOX TT350O', 'Godox X2T-O'] }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <AnimatedPage>
      <div className="about-page section-padding">
        <div className="container">

          {/* Bio Section */}
          <section className="bio-section">
            <motion.div
              className="bio-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h1>{t('about.title')}</h1>
              <h2>{t('about.name')}</h2>
              <p className="lead-text">
                {t('about.bioLead')}
              </p>
              <p className="about-contact-info">
                <a href="tel:+4367761954000">+43 677 619 54 000</a> | <a href="mailto:hello@adamek.media">hello@adamek.media</a>
              </p>
              <p>
                {t('about.bio1')}
              </p>
              <p>
                {t('about.bio2')}
              </p>
            </motion.div>

            <motion.div
              className="bio-image"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <img src={portraitImage} alt="Robin Adamek" />
            </motion.div>
          </section>

          {/* Equipment Section */}
          <section className="equipment-section">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              {t('about.equipment')}
            </motion.h3>
            <div className="equipment-grid">
              {equipment.map((group, index) => (
                <motion.div
                  key={group.category}
                  className="equipment-group"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4>{group.category}</h4>
                  <ul>
                    {group.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>



        </div>
      </div>
    </AnimatedPage>
  );
};

export default About;
