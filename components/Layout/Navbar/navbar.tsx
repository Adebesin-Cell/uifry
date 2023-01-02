import { link } from 'fs';
import Image from 'next/image';
import Link from 'next/link';
import { NavbarData, NavbarDataContact } from '../../../data/NavbarData';
import DropdownIcon from '../../Icons/DropdownIcon';
import SearchIcon from '../../Icons/SearchIcon';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href='/' passHref legacyBehavior>
          <a className={styles['nav__logo-link']}>
            <Image
              src='/uifry.svg'
              alt='UIFry logo'
              className={styles.nav__image}
              width={0}
              height={0}
            />
          </a>
        </Link>
      </div>
      <ul className={styles.nav__list}>
        {NavbarData.map((nav, i) => (
          <li key={i} className={styles.nav__item}>
            <Link href={nav.href} passHref legacyBehavior>
              <a className={styles['nav__link']}>
                <span className={styles.nav__text}>{nav.label}</span>
                {nav.hasIcon && (
                  <span className={styles.nav__icon}>
                    <DropdownIcon />
                  </span>
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.nav__extra}>
        <button className={styles.nav__button}>Get Demo</button>
        {NavbarDataContact.map((nav, i) => (
          <li key={i} className={styles.nav__item}>
            <Link href={nav.href} passHref legacyBehavior>
              <a className={styles['nav__link']}>
                <span className={styles.nav__text}>{nav.label}</span>
                <span className={styles.nav__icon}>
                  {nav.hasIcon && (
                    <span className={styles.nav__icon}>
                      <DropdownIcon />
                    </span>
                  )}
                </span>
              </a>
            </Link>
          </li>
        ))}
        <div className={styles.nav__search}>
          <SearchIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
