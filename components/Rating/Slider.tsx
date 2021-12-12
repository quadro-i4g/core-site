import styles from './styles/Slider.module.css';

const Slider = ({ score }: { score: number }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sliderValue}>
        <span>{score}</span>
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderInside} />
        <div className={styles.sliderBarWrap}>
          <div className={styles.sliderBar} style={{ width: `${score}%` }} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
