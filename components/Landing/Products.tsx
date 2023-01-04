import styles from './Products.module.scss';
import background from '../../assets/bg.svg';
import Image from 'next/image';
import { ProductData } from '../../data/ProductData';
import ProductCard from '../Element/Card/ProductCard';
import PrevIcon from '../Icons/PrevIcon';
import NextIcon from '../Icons/NextIcon';
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const Products = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= ProductData.length) {
      newIndex = ProductData.length - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateIndex(activeIndex + 1);
    },
    onSwipedRight: () => {
      updateIndex(activeIndex - 1);
    }
  });

  return (
    <section className={`${styles.product} container`}>
      <div className={styles.product__header}>
        <h1 className={styles.product__heading}>
          <span>Choose from over 10+</span>
          <span>cutting—edge products</span>
        </h1>
        <button className={styles.product__button}>See all products</button>
      </div>
      <div className={styles.product__wrapper} {...handlers}>
        <div
          className={styles.product__inner}
          style={{ transform: `translateX(-${activeIndex * 25}%)` }}
        >
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
          <button
            className={styles.controls__prev}
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <PrevIcon />
          </button>
          <button
            className={styles.controls__next}
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      <Image src={background} className={styles.product__bg} alt='bg' />
    </section>
  );
};

export default Products;
