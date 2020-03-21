import React, { ReactNode } from 'react';
import './styles.scss';

interface ILayoutProps {
  header: ReactNode,
  body: ReactNode,
  footer?: ReactNode,
};

const Layout: React.FunctionComponent<ILayoutProps> = ({header}) => {
  return (
    <div className="container">
      {React.cloneElement(header)}
    </div>
  );
};

export default Layout;