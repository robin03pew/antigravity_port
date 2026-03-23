import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { MapPin, ArrowLeft } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import Lightbox from '../components/Lightbox';
import { projects } from '../data/projects';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [lightboxState, setLightboxState] = useState({ index: null, direction: 0 });

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
    const found = projects.find(p => p.id === id);
    setProject(found);
  }, [id]);

  if (!project) {
    return (
      <AnimatedPage>
        <div className="container" style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
          <h2>Project not found</h2>
          <Link to="/projects" className="btn-outline mt-4 inline-block">Back to Projects</Link>
        </div>
      </AnimatedPage>
    );
  }

  // Gallery breakpoint cols based on masonry
  const galleryBreakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  const allImages = project?.gallery || [];

  const openLightbox = (index) => setLightboxState({ index, direction: 0 }); // 0 for zoom/fade (initial open)
  const closeLightbox = () => setLightboxState({ index: null, direction: 0 });
  const goToNext = () => setLightboxState((prev) => ({ index: (prev.index + 1) % allImages.length, direction: 1 }));
  const goToPrev = () => setLightboxState((prev) => ({ index: (prev.index - 1 + allImages.length) % allImages.length, direction: -1 }));

  return (
    <>
    <AnimatedPage>
      <article className="project-detail-page">
        {/* Header Section */}
        <div className="container project-header-container">
          <Link to="/projects" className="back-link">
            <ArrowLeft size={18} /> Back to Projects
          </Link>
          
          <motion.div 
            className="project-meta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>{project.title}</h1>
            
            <div className="project-tags-location">
              {project.tags && (
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              )}
              {project.location && (
                <div className="project-location">
                  <MapPin size={16} /> {project.location}
                </div>
              )}
            </div>

            <p className="project-description">
              {project.description}
            </p>
          </motion.div>
        </div>

        {/* Dynamic Gallery */}
        <section className="project-gallery section-padding pt-0">
          <div className="container">
            <Masonry
              breakpointCols={galleryBreakpoints}
              className="my-masonry-grid gallery-masonry"
              columnClassName="my-masonry-grid_column"
            >
              {allImages.map((img, index) => (
                <motion.div
                  key={index}
                  className="gallery-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                  onClick={() => openLightbox(index)}
                >
                  <img src={img} alt={`${project.title} - ${index}`} loading="lazy" />
                </motion.div>
              ))}
            </Masonry>
          </div>
        </section>
      </article>
    </AnimatedPage>
    
    <Lightbox
      images={allImages}
      currentIndex={lightboxState.index}
      direction={lightboxState.direction}
      onClose={closeLightbox}
      onNext={goToNext}
      onPrev={goToPrev}
    />
    </>
  );
};

export default ProjectDetail;
