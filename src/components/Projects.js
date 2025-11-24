// src/components/Projects.js
import React, { useState } from 'react';
import { projects as projectsData } from '../data/projectsData';
import styles from './Projects.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

// Cross-entry + brake animation
const cardVariants = {
  hidden: (i) => {
    const isLeftColumn = i % 2 === 0;
    const direction = isLeftColumn ? 1 : -1;

    return {
      opacity: 0,
      x: 80 * direction,
      y: 20,
      scale: 0.96,
      filter: 'blur(4px)',
    };
  },
  visible: (i) => {
    const isLeftColumn = i % 2 === 0;
    const direction = isLeftColumn ? 1 : -1;

    return {
      opacity: 1,
      x: [80 * direction, -10 * direction, 0],
      y: [20, -5, 0],
      scale: [0.96, 1.04, 1],
      filter: ['blur(4px)', 'blur(1px)', 'blur(0px)'],
      transition: {
        duration: 0.7,
        ease: 'easeOut',
        delay: i * 0.08,
      },
    };
  },
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', 'Web', 'AI', 'Automation'];

  const filteredProjects =
    filter === 'All'
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className={styles.projects}>
      {/* floating orbs background */}
      <div className={`${styles.floatingOrb} ${styles.orb1}`} />
      <div className={`${styles.floatingOrb} ${styles.orb2}`} />

      <div className="container">
        <h2 className={styles.title}>My Projects</h2>

        <div className={styles.filterButtons}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterButton} ${
                filter === category ? styles.active : ''
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              onClick={() => setSelectedProject(project)}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              custom={index}
            >
              <div className={styles.glassLayer}></div>

              <img
                src={project.url}
                alt={project.title}
                className={styles.projectImage}
              />

              <div className={styles.projectOverlay}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className={styles.projectTags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.cardGlow}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
