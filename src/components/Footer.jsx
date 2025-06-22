import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      {/* Header + Email */}
      <div className={styles.contactSection}>
        <h1 className={styles.title}>LET’S TALK!</h1>
        <p className={styles.email}>rehanurraihan@gmail.com</p>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomRow}>
        <div className={styles.copyright}>© Rehan Raihan - 2023</div>
        <ul className={styles.socialLinks}>
          <li>Dribbble</li>
          <li>Behance</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
