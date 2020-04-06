import React, { ReactElement, useState, useEffect, useRef } from 'react';
import styles from './Layout.module.scss';

interface ILayoutProps {
  header: ReactElement,
  body: ReactElement,
  footer: ReactElement,
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const Layout: React.FunctionComponent<ILayoutProps> = ({header, footer, body}) => {

  const headerRef = useRef(null) as unknown as React.MutableRefObject<HTMLDivElement>;
  const footerRef = useRef(null) as unknown as React.MutableRefObject<HTMLDivElement>;
  const [headerHeight, setHeaderHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setHeaderHeight(headerRef.current.clientHeight);
    setFooterHeight(footerRef.current.clientHeight);
  }, [headerRef, footerRef]);

  const bodyHeight: number = windowDimensions.height - headerHeight - footerHeight;

  return (
    
    <div className={styles.container}>
      <div ref={headerRef}>
        {React.cloneElement(header)}
      </div>
      {headerHeight > 0 && footerHeight > 0 && (
        <div
          style={{
            width: '100%',
            height: `${bodyHeight}px`,
          }}
        >
          {React.cloneElement(body, {height: bodyHeight})}
        </div>
      )}
      <div ref={footerRef}>
        {React.cloneElement(footer)}
      </div>
    </div>
  );
};

export default Layout;