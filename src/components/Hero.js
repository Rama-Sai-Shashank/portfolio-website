// src/components/Hero.js
import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import styles from './Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);

  // Parallax for the glow background
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.section
      id="home"
      className={styles.hero}
      ref={heroRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Glass / neon glow behind the hero content */}
      <motion.div
        className={styles.heroGlow}
        style={{ y: glowY, scale: glowScale }}
      />

      <div className={`${styles.heroContainer} container`}>
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.heroText}
        >
          <h1>Hi, I’m Rama Sai Shashank 👋</h1>
          <h2>
            I’m a
            <TypeAnimation
              sequence={[
                'Web Developer', 2000,
                'Automation Enthusiast', 2000,
                'Freelancer', 2000,
                'Learner', 2000,
              ]}
              wrapper="span"
              speed={50}
              className={styles.typedText}
              repeat={Infinity}
            />
          </h2>
          <p>
            I specialize in building exceptional and accessible digital
            experiences. Let&apos;s create something amazing together.
          </p>
          <div className={styles.heroButtons}>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className={styles.ctaButton}
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className={`${styles.ctaButton} ${styles.outline}`}
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Profile image with subtle 3D entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 80, damping: 18 }}
          viewport={{ once: true, amount: 0.5 }}
          className={styles.heroImageContainer}
        >
          <img
            src="/assets/profile.png"
            alt="Rama Sai Shashank"
            className={styles.heroImage}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
