import React, { ReactNode, ReactElement } from 'react';
import styles from './Layout.module.scss';

interface ILayoutProps {
  header: ReactElement,
  body: ReactNode,
  footer: ReactElement,
};

const Layout: React.FunctionComponent<ILayoutProps> = ({header, footer}) => {
  return (
    <div className={styles.container}>
      {React.cloneElement(header)}
      {React.cloneElement(footer)}
    </div>
  );
};

export default Layout;