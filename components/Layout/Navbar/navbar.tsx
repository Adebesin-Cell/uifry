import Image from 'next/image';
import Link from 'next/link';
import styles from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <Link href='/' passHref legacyBehavior>
          <Image
            src='/uifry.svg'
            alt='UIFry logo'
            className={styles.nav__image}
            width={0}
            height={0}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
