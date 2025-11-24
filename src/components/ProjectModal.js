// src/components/ProjectModal.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import styles from './ProjectModal.module.css';

const tagVariants = {
  hidden: { opacity: 0, y: 8, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.1 + i * 0.05, duration: 0.25 },
  }),
};

const ProjectModal = ({ project, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () =>
    setCurrentIndex(
      currentIndex === 0 ? project.images.length - 1 : currentIndex - 1
    );

  const nextSlide = () =>
    setCurrentIndex(
      currentIndex === project.images.length - 1 ? 0 : currentIndex + 1
    );

  return (
    <motion.div
      className={styles.backdrop}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1, transition: { duration: 0.25 } }}
        exit={{ scale: 0.7, opacity: 0 }}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <FaTimes />
        </button>

        <div className={styles.body}>
          {/* LEFT — GLASS IMAGE SLIDER */}
          <div className={styles.sliderGlass}>
            <div className={styles.sliderViewport}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={project.images[currentIndex].url}
                  alt={project.images[currentIndex].description}
                  className={styles.sliderImage}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </AnimatePresence>
            </div>

            <button
              className={`${styles.nav} ${styles.left}`}
              onClick={prevSlide}
            >
              <FaChevronLeft />
            </button>

            <button
              className={`${styles.nav} ${styles.right}`}
              onClick={nextSlide}
            >
              <FaChevronRight />
            </button>

            <div className={styles.indicator}>
              {currentIndex + 1} / {project.images.length}
            </div>
          </div>

          {/* RIGHT — DARK DETAILS (SCROLLABLE) */}
          <div className={styles.details}>
            <h2>{project.title}</h2>

            <div className={styles.tags}>
              {project.tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  custom={i}
                  variants={tagVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            <p className={styles.desc}>
              {project.images[currentIndex].description}
            </p>

            <div className={styles.links}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
