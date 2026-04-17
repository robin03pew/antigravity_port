import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import ProjectCard from '../components/ProjectCard';
import Accordion from '../components/Accordion';
import { useTranslation } from 'react-i18next';
import { projects, services, portraitImage } from '../data/projects';
import './Home.css';

const Home = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const yParallaxText = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yParallaxImage = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const featuredProjects = projects.slice(0, 3); // Void Festival, 3x3, Blumenball

  // Fade in animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <motion.div
            className="hero-content"
            style={{ y: yParallaxText }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              adamek.media
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('home.subtitle')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="location"
            >
              {t('home.basedIn')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button
                className="btn-primary mt-4 inline-block"
                onClick={() => {
                  const el = document.getElementById('featured');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t('home.viewWork')}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image-wrapper"
            style={{ y: yParallaxImage }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img src={portraitImage} alt="Robin Adamek Portrait" className="hero-portrait" />
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured" className="section-padding featured-section">
        <div className="container">
          <motion.div
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="section-title">{t('home.selectedWork')}</h2>
            <Link to="/projects" className="link-arrow">{t('home.viewAll')}</Link>
          </motion.div>

          <div className="projects-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding services-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="section-title">{t('home.expertise')}</h2>
          </motion.div>

          <Accordion items={services.map(s => ({...s, title: t(`data.services.${s.id}`, s.title)}))} />
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding clients-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h2 className="section-title">{t('home.trustedBy')}</h2>
          </motion.div>

          <motion.div
            className="clients-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            {/* Dummy Client Logos replaced with Text for now */}
            {['VOID Festival', 'SKN St. Pölten', 'Z-Fitness', 'Skischule Exklusiv', 'BBC Tulln'].map((client, i) => (
              <div key={i} className="client-logo-placeholder">
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding cta-section">
        <div className="container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="cta-title">{t('home.ctaTitle')}</h2>
            <Link to="/contact" className="btn-primary cta-btn">{t('home.contactBtn')}</Link>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
