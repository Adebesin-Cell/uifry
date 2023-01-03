import styles from './Products.module.scss';
import background from '../../assets/bg.svg';
import Image from 'next/image';

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
      <div className={styles.products__wrapper}>&nbsp;</div>
      <Image src={background} className={styles.product__bg} alt='bg' />
    </div>
  );
};

export default Products;
