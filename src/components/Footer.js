// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.footerGlass}
        initial={{ opacity: 0, y: 30, scale: 0.96, filter: 'blur(4px)' }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
        }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className={styles.text}>
          © {new Date().getFullYear()} Rama Sai Shashank — Built with ❤️ using React
        </p>

        <div className={styles.socialIcons}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaTwitter />
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
