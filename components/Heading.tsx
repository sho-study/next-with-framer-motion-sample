import { FC, ReactNode } from 'react';
import styles from '../styles/Heading.module.css';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return <h1 className={styles.Heading}>{children}</h1>;
};

export default Layout;
