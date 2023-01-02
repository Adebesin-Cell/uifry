import Navbar from '../Navbar/navbar';
import styles from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>&nbsp;</div>
    </>
  );
};

export default Layout;
