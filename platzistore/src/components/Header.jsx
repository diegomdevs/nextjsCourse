import React, { useContext } from 'react';
import Image from 'next/image';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';
import Link from 'next/link';

const Header = () => {
  const { state, toggleMenu, toggleOrder, toggleMenuMobile } = useContext(AppContext);

  return (
    <div className="Header">
      <nav className={styles.Nav}>
        <Image src={menu} alt="menu" className={styles.menu} onClick={() => toggleMenuMobile()} />
        <div className={styles['navbar-left']}>
          <Link href="/">
            <Image src={logo} alt="logo" className={styles['nav-logo']} />
          </Link>
          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>
        <div className={styles['navbar-right']}>
          <ul>
            <li className={styles['navbar-email']} onClick={() => toggleMenu()}>
              platzi@example.com
            </li>
            <li className={styles['navbar-shopping-cart']} onClick={() => toggleOrder()}>
              <Image src={shoppingCart} alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
        </div>
        {state.isMenuOpen && <Menu />}
        {state.isOrderOpen && <MyOrder />}
      </nav>
    </div>
  );
};

export default Header;
