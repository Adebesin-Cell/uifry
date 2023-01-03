import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={`${styles.hero} container`}>
      <div className={styles.hero__content}>
        <h1 className={styles.hero__heading}>
          <span>Seamless solution</span>
          <span>with our magic!</span>
        </h1>
        <p className={styles.hero__paragraph}>
          UIFry is the project management platform that aims for teams to
          achieve an efficient dream management.
        </p>
      </div>
    </div>
  );
};

export default Hero;
