import React from 'react';
import styles from './BlogSection.module.scss';

const blogPosts = [
  {
    img: '/src/assets/ebook.png',
    date: 'Nov 9, 2023',
    title: 'How UX works in web',
    tags: ['UI', 'UX']
  },
  {
    img: '/src/assets/envolope.png',
    date: 'Aug 18, 2023',
    title: 'Case study - Analysis Application.',
    tags: ['DESIGN', 'PRINT']
  },
  {
    img: '/src/assets/logo5-DsxK5_KN.png',
    date: 'Aug 18, 2023',
    title: '3 ways to develop your skill',
    tags: ['FIGMA', 'WEB']
  }
];

const BlogSection = () => {
  return (
    <section className={styles.blogSection}>
      <div className={styles.header}>
        <h2>
          <img src="/src/assets/Star.svg" alt="star icon" /> Works
        </h2>
        <a href="#" className={styles.viewAll}>View All</a>
      </div>

      <div className={styles.blogList}>
        {blogPosts.map((post, index) => (
          <div className={styles.blogCard} key={index}>
            <div className={styles.imageContainer}>
              <img src={post.img} alt={post.title} />
            </div>
            <div className={styles.content}>
              <p className={styles.date}>{post.date}</p>
              <h3 className={styles.title}>{post.title}</h3>
              <div className={styles.tags}>
                {post.tags.map((tag, i) => (
                  <span className={styles.tag} key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <button className={styles.readBtn}>Read</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
