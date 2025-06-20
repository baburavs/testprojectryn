import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Logo */}
      <img src="/src/assets/logo.svg" alt="logo" />

      {/* Navigation Menu */}
      <nav className={styles.navMenu}>
        <ul>
          <li className={styles.active}>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hire Me Button */}
      <div>
        <button className={styles.hireButton}>HIRE ME</button>
      </div>
    </header>
  );
};

export default Header;
