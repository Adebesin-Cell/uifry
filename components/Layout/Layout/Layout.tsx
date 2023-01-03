import Navbar from '../Navbar/navbar';
import styles from './Layout.module.scss';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Layout;
