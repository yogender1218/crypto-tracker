import React from 'react';
import styles from './LogoDesign.module.css';

const LogoDesign = () => {
  return (
    <div className={styles.content}>
      <h6 className={styles.title}>
        TradeSense
        <div className={styles.aurora}>
          <div className={styles.aurora__item}></div>
          <div className={styles.aurora__item}></div>
          <div className={styles.aurora__item}></div>
          <div className={styles.aurora__item}></div>
        </div>
      </h6>
    </div>
  );
}

export default LogoDesign;
