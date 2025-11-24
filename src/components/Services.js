// src/components/Services.js
import React from 'react';
import styles from './Services.module.css';
import { FaCode, FaRobot, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaCode size={45} />,
    title: 'Web Development',
    description:
      'Creating responsive, modern, high-performance websites using the latest technologies.',
  },
  {
    icon: <FaRobot size={45} />,
    title: 'Automation',
    description:
      'Custom automation scripts to eliminate repetitive work and boost productivity.',
  },
  {
    icon: <FaChalkboardTeacher size={45} />,
    title: 'Freelancing',
    description:
      'Available for freelance projects with creative solutions and technical expertise.',
  },
];

const cardVariants = {
  hidden: (i) => {
    // center one comes from bottom, sides slide slightly inwards
    if (i === 1) {
      return { opacity: 0, y: 40, scale: 0.9, filter: 'blur(4px)' };
    }
    const fromLeft = i === 0;
    return {
      opacity: 0,
      x: fromLeft ? -60 : 60,
      y: 20,
      scale: 0.92,
      filter: 'blur(4px)',
    };
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: i * 0.12,
    },
  }),
};

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <h2 className={styles.title}>What I Offer</h2>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.diamondWrapper}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              custom={index}
            >
              <div className={styles.diamond}>
                <div className={styles.innerContent}>
                  <div className={styles.icon}>{service.icon}</div>
                  <h3 className={styles.heading}>{service.title}</h3>
                  <p className={styles.description}>{service.description}</p>
                </div>

                {/* Shine effect */}
                <div className={styles.shine}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
