import Image from 'next/image';
import { TestimonialDataProps } from '../../../data/TestimonialData';
import styles from './TestimonialCard.module.scss';

const TestimonialCard = ({
  content,
  title,
  image,
  name,
  heading
}: TestimonialDataProps) => {
  return (
    <div className={styles.card}>
      <h1 className={styles.card__heading}>{heading}</h1>
      <p className={styles.card__paragraph}>{content}</p>
      <div className={styles.card__footer}>
        <div className={styles['card__image-box']}>
          <Image
            src={image}
            alt={title}
            className={styles.card__image}
            width={48}
            height={48}
          />
        </div>
        <div className={styles.card__info}>
          <h1 className={styles.card__name}>{name}</h1>
          <p className={styles.card__title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
