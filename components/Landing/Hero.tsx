import styles from './Hero.module.scss';
import background from '../../assets/bg.svg';
import Image from 'next/image';
import heroImage from '../../assets/hero-image.svg';
import StarIcon from '../Icons/StarIcon';
import sponsor1 from '../../assets/sponsor--1.svg';
import sponsor2 from '../../assets/sponsor--2.svg';
import sponsor3 from '../../assets/sponsor--3.svg';

const Hero = () => {
  return (
    <div className={`${styles.hero} container`}>
      <div className={styles.hero__wrapper}>
        <div className={styles.hero__content}>
          <div className={styles.hero__top}>
            <div className={styles.hero__rating}>
              {Array.from({ length: 4 }).map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <p className={styles.hero__text}>
              Based on <span>10,000+</span> reviews
            </p>
          </div>
          <h1 className={styles.hero__heading}>
            <span>Seamless solution</span>
            <span>with our magic!</span>
          </h1>
          <p className={styles.hero__paragraph}>
            UIFry is the project management platform that aims for teams to
            achieve an efficient dream management.
          </p>
          <div className={styles.hero__cta}>
            <p className={styles['hero__cta-text']}>
              Start work efficiently with UIFry SaaS product
            </p>
            <button className={styles['hero__cta-button']}>
              Get a Free Demo
            </button>
          </div>
          <div className={styles.hero__sponsors}>
            <Image
              src={sponsor1}
              alt='Sponsor 1'
              className={styles.hero__sponsor}
            />
            <Image
              src={sponsor2}
              alt='Sponsor 2'
              className={styles.hero__sponsor}
            />
            <Image
              src={sponsor3}
              alt='Sponsor 3'
              className={styles.hero__sponsor}
            />
          </div>
        </div>
        <div className={styles['hero__image-box']}>
          <Image
            src={heroImage}
            className={styles.hero__image}
            alt='Hero image'
          />
        </div>
      </div>
      {/* <Image src={background} className={styles.hero__bg} alt='bg' /> */}
    </div>
  );
};

export default Hero;
