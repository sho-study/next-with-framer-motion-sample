import { FC, Fragment, ReactNode } from 'react';
import styles from '../styles/Layout.module.css';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Fragment>
      <header className={styles.Header}>Next Framer Motion Sample</header>
      <div className={styles.Container}>{children}</div>
      <footer className={styles.Footer}>
        <a className={styles.Footer__Text} href="https://github.com/sho-ts">
          sho-ts
        </a>
      </footer>
    </Fragment>
  );
};

export default Layout;
