import React, { useState } from 'react';
import styles from './TestimonialSection.module.scss';

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(1);
  };

  const handlePrev = () => {
    setCurrentIndex(0);
  };

  return (
    <section className={styles.testimonialSection}>
      {/* Header */}
      <div className={styles.headingRow}>
        <img src="/src/assets/star.svg" alt="star icon" />
        <h2>What they say</h2>
      </div>

      {/* Slider */}
      <div className={styles.sliderWrapper}>
        <div
          className={styles.sliderTrack}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {/* Slide 1 */}
          <div className={styles.testimonialContent}>
            <div className={styles.left}>
              <div className={styles.profile}>
                <img src="/src/assets/man.png" alt="man" className={styles.avatar} />
                <div className={styles.profileInfo}>
                  <h3>Floyd Miles</h3>
                  <p>eBay</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.quoteWrapper}>
                <img src="/src/assets/quote.svg" alt="quote" className={styles.quoteIcon} />
                <p className={styles.testimonialText}>
                  <span className={styles.emphasis}>Synergy’s</span> resume builder is fantastic.
                  It helped me create a professional resume that stood out to employers.
                </p>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className={styles.testimonialContent}>
            <div className={styles.left}>
              <div className={styles.profile}>
                <img src="/src/assets/man.png" alt="man" className={styles.avatar} />
                <div className={styles.profileInfo}>
                  <h3>Floyd Miles</h3>
                  <p>eBay</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.quoteWrapper}>
                <img src="/src/assets/quote.svg" alt="quote" className={styles.quoteIcon} />
                <p className={styles.testimonialText}>
                  <span className={styles.emphasis}>Synergy’s</span> resume builder is fantastic.
                  It helped me create a professional resume that stood out to employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className={styles.navigation}>
        <button
          onClick={handlePrev}
          className={currentIndex === 0 ? styles.navButtonActive : styles.navButton}
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className={currentIndex === 1 ? styles.navButtonActive : styles.navButton}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default TestimonialSection;
