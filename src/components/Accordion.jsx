import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Accordion.css';

const AccordionItem = ({ item, isExpanded, onToggle, index }) => {
  return (
    <motion.div
      className={`accordion-item ${isExpanded ? 'expanded' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button className="accordion-header" onClick={onToggle}>
        <h3>{item.title}</h3>
        <motion.span
          className="accordion-icon"
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Plus size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginTop: 24, marginBottom: 24 },
              collapsed: { opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="accordion-content"
          >
            <div className="accordion-content-inner">
              <img src={item.image} alt={item.title} className="accordion-image" loading="lazy" />
              <div className="accordion-details">
                <p>Premium {item.title.toLowerCase()} tailored to your vision. Authentic, cinematic, and professional coverage for your next project.</p>
                <Link to={`/projects?filter=${item.id}`} className="btn-outline mt-4 inline-block">View Examples</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null); // All closed by default

  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          index={index}
          item={item}
          isExpanded={expandedIndex === index}
          onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
