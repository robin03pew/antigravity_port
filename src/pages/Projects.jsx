import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import './Projects.css';

const FILTERS = ['All', 'Sports', 'Events', 'Festivals', 'Wedding'];

const Projects = () => {
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

  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(p => p.tags.includes(activeFilter)));
    }
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
            <h1>Selected Work</h1>
            
            <div className="filter-system">
              {FILTERS.map(filter => (
                <button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => handleFilterClick(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProjects.length > 0 ? (
                <div className="projects-grid">
                  {filteredProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </div>
              ) : (
                <div className="no-results">
                  <p>No projects found in this category.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Projects;
