// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaServer,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiMongodb,
  SiFastapi,
  SiMysql,
  SiTailwindcss,
  SiJsonwebtokens,
  SiVscodium,
  SiFirebase,
  SiPostman,
  SiVercel,
} from 'react-icons/si';

import { TbApi } from 'react-icons/tb';

// groups
const outerOrbitSkills = [
  { name: 'ReactJS', Icon: FaReact },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Python', Icon: FaPython },
  { name: 'FastAPI', Icon: SiFastapi },
  { name: 'MongoDB', Icon: SiMongodb },
];

const coreStackSkills = [
  { name: 'HTML', Icon: FaHtml5 },
  { name: 'CSS', Icon: FaCss3Alt },
  { name: 'Bootstrap', Icon: FaBootstrap },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'Git', Icon: FaGitAlt },
  { name: 'GitHub', Icon: FaGithub },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'JWT', Icon: SiJsonwebtokens },
  { name: 'REST API', Icon: TbApi },
];

const toolsAndExtras = [
  { name: 'VS Code', Icon: SiVscodium, color: '#22a6f2' },
  { name: 'Firebase', Icon: SiFirebase, color: '#ffca28' },
  { name: 'Postman', Icon: SiPostman, color: '#ff6c37' },
  { name: 'Render', Icon: FaServer, color: '#38bdf8' },
  { name: 'Vercel', Icon: SiVercel, color: '#ffffff' },
];

// animation variants
const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const gridVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: 'easeOut' },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className={styles.skills}
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container">
        <h2 className={styles.title}>My Skills</h2>
        <p className={styles.subtitle}>
          A focused stack around modern web development, backend APIs and the
          tools I actually use in my day-to-day projects.
        </p>

        <motion.div
          className={styles.grid}
          variants={gridVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {/* LEFT CARD – Languages & Frameworks */}
          <motion.div className={styles.card} variants={cardVariant}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>Layer 01</span>
              <h3 className={styles.cardTitle}>Languages & Frameworks</h3>
              <p className={styles.cardDesc}>
                The core technologies I use to build frontends and backends.
              </p>
            </div>

            <p className={styles.smallHeading}>Core Tech</p>
            <div className={styles.iconGrid}>
              {outerOrbitSkills.map((skill) => {
                const Icon = skill.Icon;
                return (
                  <motion.div
                    key={skill.name}
                    className={styles.skillItem}
                    variants={itemVariant}
                  >
                    <div className={styles.iconWrapper}>
                      <Icon className={styles.icon} />
                    </div>
                    <span className={styles.label}>{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CENTER CARD – Core Web Stack */}
          <motion.div
            className={`${styles.card} ${styles.cardCenter}`}
            variants={cardVariant}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>Layer 02</span>
              <h3 className={styles.cardTitle}>Core Web Stack</h3>
              <p className={styles.cardDesc}>
                Everything from structure and styling to auth, APIs and data.
              </p>
            </div>

            <div className={styles.coreGlowRing} />
            <div className={styles.coreBadge}>Core Stack</div>

            <div className={styles.coreStackGrid}>
              {coreStackSkills.map((skill) => {
                const Icon = skill.Icon;
                return (
                  <motion.div
                    key={skill.name}
                    className={styles.coreItem}
                    variants={itemVariant}
                  >
                    <Icon className={styles.coreIcon} />
                    <span className={styles.coreLabel}>{skill.name}</span>
                  </motion.div>
                );
              })}
            </div>

            <p className={styles.centerNote}>
              This stack powers projects like my social app, automation tools
              and AI-integrated web apps.
            </p>
          </motion.div>

          {/* RIGHT CARD – Tools & Platforms */}
          <motion.div className={styles.card} variants={cardVariant}>
            <div className={styles.cardHeader}>
              <span className={styles.cardTag}>Layer 03</span>
              <h3 className={styles.cardTitle}>Tools & Platforms</h3>
              <p className={styles.cardDesc}>
                Editors, services and platforms that support my workflow.
              </p>
            </div>

            <p className={`${styles.smallHeading} ${styles.toolsHeading}`}>
              Daily Drivers
            </p>
            <div className={styles.iconGrid}>
              {toolsAndExtras.map((tool) => {
                const Icon = tool.Icon;
                return (
                  <motion.div
                    key={tool.name}
                    className={styles.skillItem}
                    variants={itemVariant}
                  >
                    <div className={styles.iconWrapper}>
                      <Icon
                        className={styles.icon}
                        style={{ color: tool.color }}
                      />
                    </div>
                    <span className={styles.label}>{tool.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
