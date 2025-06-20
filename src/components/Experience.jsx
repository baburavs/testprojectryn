import React from 'react';
import styles from './Experience.module.scss';

const Experience = () => {
  const experiences = [
    {
      role: 'Lead Product Designer',
      company: 'Fortnox',
      period: 'Mar 2022 - Oct 2023'
    },
    {
      role: 'Intern Designer',
      company: 'OmniSafe',
      period: 'Mar 2021 - Dec 2021'
    },
    {
      role: 'UI Designer',
      company: 'Doradesign',
      period: 'Mar 2022 - Oct 2023'
    },
    {
      role: 'Frontend Developer',
      company: 'OpacityAuthor',
      period: 'Mar 2022 - Oct 2023'
    }
  ];

  return (
    <section className={styles.experienceSection}>
      {/* Header */}
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>
          <img src="/src/assets/Star.svg" alt="Star" width="32" height="32" />
          Experience
        </h2>
      </div>

      {/* Experience List */}
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <div>
              <h3 className={styles.role}>{exp.role}</h3>
            </div>
            <div className={styles.rightBlock}>
              <p className={styles.companyName}>{exp.company}</p>
              <p className={styles.period}>{exp.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
