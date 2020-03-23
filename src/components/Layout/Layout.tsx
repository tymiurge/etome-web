import React, { ReactNode, ReactElement } from 'react';
import styles from './Layout.module.scss';

interface ILayoutProps {
  header: ReactElement,
  body: ReactNode,
  footer?: ReactNode,
};

const Layout: React.FunctionComponent<ILayoutProps> = ({header}) => {
  console.info(styles)
  return (
    <div className={styles.container}>
      {React.cloneElement(header)}
    </div>
  );
};

export default Layout;