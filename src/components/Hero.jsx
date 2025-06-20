import React from 'react';
import styles from './HeroSection.module.scss';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1>
          I AM A
          <span className={styles.avatar}>
            <img
              src="/src/assets/avtar-1 (1).svg"
              alt="avatar-1"
              width={128}
              height={64}
            />
          </span>
        </h1>

        <h1>
          FREELANCE DESIGNER
          <span className={styles.avatar}>
            <img
              src="/src/assets/avtar-2 (1).svg"
              alt="avatar-2"
              width={128}
              height={64}
            />
          </span>
        </h1>

        <h1>FROM San Francisco</h1>
      </div>

      <ul className={styles.clientRow}>
        <li className={styles.flashBrand}>
          <img
            src="/src/assets/flash.svg"
            alt="flash-icon"
            width={28}
            height={28}
          />
          doradesign
        </li>
        <li>
          <img
            src="/src/assets/wavefun.svg"
            alt="wavefun"
            width={99}
            height={32}
          />
        </li>
        <li>
          <img
            src="/src/assets/susila.svg"
            alt="susila"
            width={99}
            height={32}
          />
        </li>
        <li className={styles.heroDescription}>
          Welcome to my portfolio. Here, artistry meets functionality. Dive into a curated
          showcase of distinctive branding and web designs, each crafted to captivate and inspire.
        </li>
      </ul>
    </section>
  );
};

export default Hero;
