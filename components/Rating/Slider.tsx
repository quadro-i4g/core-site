import React from 'react';
import styles from './styles/Slider.module.css';

const Slider = ({ score }: { score: number }) => (
  <div className={styles.wrapper}>
    <div className={styles.sliderValue}>
      <span>{Math.floor(score)}</span>
    </div>
    <div className={styles.sliderWrapper}>
      <div className={styles.sliderInside} />
      <div className={styles.sliderBarWrap} style={{ width: `${score}%` }}>
        <div className={styles.sliderBar} />
      </div>
    </div>
  </div>
);

export default Slider;
