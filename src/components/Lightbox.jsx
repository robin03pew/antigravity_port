import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

const sliderVariants = {
  enter: (direction) => {
    if (direction === 0) return { opacity: 0, scale: 0.95 };
    return { x: direction > 0 ? 800 : -800, opacity: 0 };
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] }
  },
  exit: (direction) => {
    if (direction === 0) return { opacity: 0, scale: 1.05 };
    return { x: direction > 0 ? -800 : 800, opacity: 0, transition: { duration: 0.3, ease: [0.19, 1, 0.22, 1] } };
  }
};

const Lightbox = ({ images, currentIndex, direction, onClose, onNext, onPrev }) => {
  const isOpen = currentIndex !== null;

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Prevent scrolling when lightbox is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [handleKeyDown, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          {/* Controls */}
          <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
            <X size={32} />
          </button>
          
          <button 
            className="lightbox-nav lightbox-prev" 
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous Image"
          >
            <ChevronLeft size={48} />
          </button>
          
          <button 
            className="lightbox-nav lightbox-next" 
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next Image"
          >
            <ChevronRight size={48} />
          </button>

          {/* Image Container */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                alt={`Gallery image ${currentIndex + 1}`}
                className="lightbox-image"
                // Optional swipe navigation for mobile
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    onNext();
                  } else if (swipe > swipeConfidenceThreshold) {
                    onPrev();
                  }
                }}
              />
            </AnimatePresence>
            <div className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Swipe helpers
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default Lightbox;
