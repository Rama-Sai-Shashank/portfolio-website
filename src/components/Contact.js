import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -60 : 60,
    y: 20,
    scale: 0.96,
    filter: 'blur(4px)',
  }),
  visible: (direction) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_vej5f8b',
        'template_u4f5a5x',
        form.current,
        'GnVq1L0vT20n6j2jR'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset();
        },
        () => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>

        <div className={styles.cardsWrapper}>
          {/* LEFT CARD - Info */}
          <motion.div
            className={styles.infoCard}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            custom="left"
          >
            <h3>Let’s Work Together 🚀</h3>
            <p>
              I’m open to freelance projects, collaborations, internships,
              or anything exciting.
              <br />
              Drop me a message and I’ll respond as soon as possible!
            </p>

            <div className={styles.socialIcons}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          {/* RIGHT CARD - Form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className={styles.formCard}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            custom="right"
          >
            <div className={styles.field}>
              <input type="text" name="user_name" required />
              <label>Your Name</label>
            </div>

            <div className={styles.field}>
              <input type="email" name="user_email" required />
              <label>Your Email</label>
            </div>

            <div className={styles.field}>
              <textarea name="message" rows="5" required></textarea>
              <label>Your Message</label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
