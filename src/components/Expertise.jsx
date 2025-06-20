import React from 'react';
import styles from './Expertise.module.scss';
// import starIcon from '/src/assets/star.svg'; // Make sure this path is correct

const data = [
  'Branding',
  'UI Design',
  'UX Design',
  'Development',
];

const Expertise = () => {
  return (
    <section className={styles.expertiseSection}>
      <div className={styles.innerContainer}>
        <div className={styles.titleRow}>
          <img src="/src/assets/star.svg" alt="Star" />
          <h2>Expertise</h2>
        </div>

        <div className={styles.grid}>
          {data.map((title, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.heading}>
                <span className={styles.square}></span>
                {title}
              </div>
              <p>
                I create efficient, adaptable, and engaging websites. No predefined patterns.
                No sluggish, complex code. Webflow forms the foundation of my web development
                approach. I employ it to provide safe, top-notch bespoke websites.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
