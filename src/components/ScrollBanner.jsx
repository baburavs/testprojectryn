import React from "react";
import styles from "./ScrollBanner.module.scss";

const ScrollBanner = () => {
  const items = [
    "src/assets/Star-2.svg",
    "src/assets/DESIGNER.svg",
    "src/assets/Star-2.svg",
    "src/assets/FIGMA.svg",
  ];

  // Render multiple sets for seamless loop
  const renderItems = () => {
    return Array.from({ length: 4 }).map((_, groupIndex) => (
      <div className={styles.iconGroup} key={groupIndex}>
        {items.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="icon"
            loading="lazy"
            className={styles.icon}
          />
        ))}
      </div>
    ));
  };

  return (
    <div className={styles.scrollWrapper}>
      <div className={styles.scroller}>{renderItems()}</div>
    </div>
  );
};

export default ScrollBanner;
