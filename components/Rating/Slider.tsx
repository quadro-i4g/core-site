import styles from './styles/Slider.module.css';

const Slider = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderValue}>
        <span>92</span>
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInside} />
        <div className={styles.sliderBarWrap}>
          <div className={styles.sliderBar} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
