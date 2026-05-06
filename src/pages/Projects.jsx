import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedPage from '../components/AnimatedPage';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

const FILTERS = ['All', 'Sports', 'Events', 'Festivals', 'Wedding', 'Commercial'];

const Projects = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParam = searchParams.get('filter');

  // Set initial filter based on URL, or default to 'All'
  const [activeFilter, setActiveFilter] = useState(() => {
    if (filterParam) {
      const match = FILTERS.find(f => f.toLowerCase() === filterParam.toLowerCase());
      return match || 'All';
    }
    return 'All';
  });

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter(p => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    if (filter === 'All') {
      searchParams.delete('filter');
    } else {
      searchParams.set('filter', filter.toLowerCase());
    }
    setSearchParams(searchParams);
  };

  return (
    <AnimatedPage>
      <div className="projects-page">
        <div className="container">
          <motion.div
            className="projects-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>{t('projects.title')}</h1>

            <div className="filter-system">
              {FILTERS.map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => handleFilterClick(filter)}
                >
                  {t(`projects.filter${filter}`, filter)}
                </button>
              ))}
            </div>
          </motion.div>

          {filteredProjects.length > 0 ? (
            <LayoutGroup>
              <motion.div className="projects-grid" layout>
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{
                        opacity: { duration: 0.25 },
                        scale: { duration: 0.25 },
                        layout: { type: 'spring', stiffness: 400, damping: 32 }
                      }}
                    >
                      <ProjectCard project={project} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </LayoutGroup>
          ) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p>{t('projects.notFound')}</p>
            </motion.div>
          )}
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
