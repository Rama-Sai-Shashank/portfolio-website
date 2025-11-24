import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setNavOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'skills', text: 'Skills' },
    { id: 'projects', text: 'Projects' },
    { id: 'services', text: 'Services' },
    { id: 'contact', text: 'Contact' },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navShell}`}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link to="home" smooth={true} duration={500}>
            RSS
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className={styles.desktopMenu}>
          {navLinks.map(({ id, text }) => (
            <li key={id}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                activeClass={styles.activeLink}
                offset={-80}
                className={styles.navLink}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={handleToggle}
          aria-label="Toggle navigation"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`${styles.mobileOverlay} ${
          navOpen ? styles.showOverlay : ''
        }`}
      >
        <ul className={styles.mobileMenu}>
          {navLinks.map(({ id, text }) => (
            <li key={id} className={styles.mobileItem}>
              <Link
                to={id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={handleToggle}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
