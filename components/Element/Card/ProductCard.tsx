import { ProductDataProps } from '../../../data/ProductData';
import styles from './ProductCard.module.scss';

const ProductCard = ({ title, image, summary }: ProductDataProps) => {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.card__content}>
        <h1 className={styles.card__heading}>{title}</h1>
        <p className={styles.card__paragraph}>{summary}</p>
      </div>
    </div>
  );
};

export default ProductCard;
