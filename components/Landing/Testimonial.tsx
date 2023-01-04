import Image from 'next/image';
import styles from './Testimonial.module.scss';
import clover from '../../assets/clover.png';
import { TestimonialData } from '../../data/TestimonialData';
import TestimonialCard from '../Element/Card/TestimonialCard';

const Testimonial = () => {
  return (
    <div className={`${styles.testimonial} container`}>
      <div className={styles.testimonial__header}>
        <h1 className={styles.testimonial__heading}>
          <span>
            Here&apos;s what our{' '}
            <span className={styles['testimonial__heading-green']}>
              customers
            </span>
          </span>
          <span>have to say</span>
        </h1>
        <div className={styles.testimonial__descriptio}>
          <Image src={clover} alt='Clover' />
        </div>
      </div>
      <div className={styles.testimonial__wrapper}>
        {TestimonialData.map((testimonial, i) => (
          <TestimonialCard
            key={i}
            heading={testimonial.heading}
            name={testimonial.name}
            content={testimonial.content}
            image={testimonial.image}
            title={testimonial.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
