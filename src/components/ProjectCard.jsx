import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

const ProjectCard = ({ project, index }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
    >
      <Link to={`/projects/${project.id}`} className="project-card-link">
        <div className="project-card-image-wrapper">
          <img src={project.coverImage} className="project-card-bg" alt={project.title} loading="lazy" />
          <div className="project-card-overlay"></div>
          {project.logoImage && (
            <div className="project-card-logo-container">
              <img src={project.logoImage} alt={`${project.title} logo`} className="project-card-logo" />
            </div>
          )}
        </div>
        <div className="project-card-content">
          <h3>{t(`data.projects.${project.id}.title`, project.title)}</h3>
          <p className="project-card-meta">
            {project.tags && project.tags.map(tag => t(`projects.filter${tag}`, tag)).join(' \u2022 ')}
            {project.location && ` \u2014 ${project.location}`}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
