import React from 'react';
import styles from './WorkSection.module.scss';
// import starIcon from '/src/assets/star.svg';

const WorkSection = () => {
  return (
    <section className={styles.workSection}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.titleRow}>
          <img src="/src/assets/star.svg" alt="star icon" />
          <h2>Works</h2>
        </div>
        <a href="#" className={styles.viewAll}>View All</a>
      </div>

      {/* Cards Wrapper with spacing */}
      <div className={styles.cardContainer}>
        {/* First Card */}
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/src/assets/envolope.png" alt="Envelope design" />
          </div>
          <div className={styles.cardContent}>
            <h3>Analysis Application</h3>
            <p>
              With a user-centered approach, the goal was to create an intuitive interface
              for enhanced financial intelligence.
            </p>
            <div className={styles.tags}>
              <span>FIGMA</span>
              <span>UX</span>
            </div>
            <button className={styles.cta}>View Case Study</button>
          </div>
        </div>

        {/* Second Card */}
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/src/assets/ebook.png" alt="Fortknox design" />
          </div>
          <div className={styles.cardContent}>
            <h3>Fortknox Application</h3>
            <p>
              With a user-centered approach, the goal was to create an intuitive interface
              for enhanced financial intelligence.
            </p>
            <div className={styles.tags}>
              <span>FIGMA</span>
              <span>UX</span>
            </div>
            <button className={styles.cta}>View Case Study</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImage}>
            <img src="/src/assets/logo5-DsxK5_KN.png" alt="Fortknox design" />
          </div>
          <div className={styles.cardContent}>
            <h3>Zenocide Application</h3>
            <p>
            With a user-centered approach, the goal was to create an intuitive interface for enhanced financial intelligence.
            </p>
            <div className={styles.tags}>
              <span>FIGMA</span>
              <span>UX</span>
            </div>
            <button className={styles.cta}>View Case Study</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
