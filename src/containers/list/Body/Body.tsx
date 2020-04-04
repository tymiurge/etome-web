import React from 'react';
import styles from './Body.module.scss';

interface IDecksBody {
  height?: number,
};

const Footer: React.FunctionComponent<IDecksBody> = ({height}) => {
  return (
    <div className={styles.container} style={{height:`${height}px`}}>
      body
    </div>
  );
};

export default Footer;