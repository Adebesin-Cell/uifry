import styles from './Products.module.scss';
import background from '../../assets/bg.svg';
import Image from 'next/image';
import { ProductData } from '../../data/ProductData';
import ProductCard from '../Element/Card/ProductCard';
import PrevIcon from '../Icons/PrevIcon';
import NextIcon from '../Icons/NextIcon';

const Products = () => {
  return (
    <div className={`${styles.product} container`}>
      <div className={styles.product__header}>
        <h1 className={styles.product__heading}>
          <span>Choose from over 10+</span>
          <span>cutting—edge products</span>
        </h1>
        <button className={styles.product__button}>See all products</button>
      </div>
      <div className={styles.product__wrapper}>
        <div className={styles.product__inner}>
          {ProductData.map((product, i) => (
            <ProductCard
              key={i}
              title={product.title}
              image={product.image}
              summary={product.summary}
            />
          ))}
        </div>
        <div className={styles.controls}>
          <button className={styles.controls__prev}>
            <PrevIcon />
          </button>
          <button className={styles.controls__next}>
            <NextIcon />
          </button>
        </div>
      </div>
      <Image src={background} className={styles.product__bg} alt='bg' />
    </div>
  );
};

export default Products;
