import React from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './MasonryGrid.css';

const MasonryGrid = ({ items, breakpointCols }) => {
  const defaultBreakpoints = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointCols || defaultBreakpoints}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="masonry-item-container"
        >
          <Link to={`/projects/${item.id}`} className="masonry-item">
            <div className="masonry-image-wrapper">
              <img src={item.coverImage} alt={item.title} loading="lazy" />
              <div className="masonry-overlay">
                <h3>{item.title}</h3>
                {item.tags && <p>{item.tags.join(' \u2022 ')}</p>}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </Masonry>
  );
};

export default MasonryGrid;
