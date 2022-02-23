import React, { useContext } from 'react';
import styles from '@styles/ProductItem.module.scss';
import AppContext from '@context/AppContext';
import addToCartImg from '@icons/bt_add_to_cart.svg';
import addedToCartImg from '@icons/bt_added_to_cart.svg';
import Image from 'next/image';

const ProductItem = ({ product }) => {
  const { addToCart, state } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className={styles.ProductItem}>
      <Image src={product.images[0]} alt={product.title} width={240} height={240} />
      <div className={styles['product-info']}>
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          {state.cart.includes(product) ? <Image className={styles.added} width={50} height={50} src={addedToCartImg} alt="" /> : <Image src={addToCartImg} alt="" />}
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
