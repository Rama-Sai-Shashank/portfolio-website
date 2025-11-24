// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const About = () => {
  return (
    <motion.section
      id="about"
      className={styles.about}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className="container">
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.aboutContent}>
          {/* LEFT – image card with glow + stats */}
          <motion.div
            className={styles.aboutImageWrapper}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className={styles.imageGlow} />

            <div className={styles.imageCard}>
              <div className={styles.aboutImage}>
  <motion.img
    src="/assets/profile.png"
    alt="Rama Sai Shashank"
    initial={{ opacity: 0, y: 40, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: false, amount: 0.6 }}
    transition={{ duration: 0.9, ease: "easeOut" }}
    className={styles.profileImage}
  />
</div>


              <div className={styles.tag}>
                Web Developer &amp; Automation Enthusiast
              </div>

              <div className={styles.statsRow}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>10+</span>
                  <span className={styles.statLabel}>Projects</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>3+ yrs</span>
                  <span className={styles.statLabel}>Coding Journey</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT – text block */}
          <motion.div
            className={styles.aboutText}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h3>
              My Journey
              <motion.span
                className={styles.aboutUnderline}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.8 }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              />
            </h3>

            <p className={styles.paragraph}>
              Hello! I'm <span className={styles.highlight}>Rama Sai Shashank</span>, a
              passionate web developer and automation enthusiast. My journey
              into technology started with a deep curiosity for how things work,
              which led me to the world of coding. I thrive on solving complex
              problems and building applications that are both functional and
              visually appealing. My long-term goal is to leverage technology to
              build solutions that help people and make a positive impact.
            </p>

            <div className={styles.actionsRow}>
              <a
                href="/assets/resume.pdf"
                download
                className={styles.resumeButton}
              >
                Download Resume
              </a>
              <span className={styles.noteText}>
                Always learning, always shipping new ideas.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
