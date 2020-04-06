import React from 'react';
import { Button, Card, Elevation } from "@blueprintjs/core";
import Deck from '../../../components/Deck';
import styles from './Body.module.scss';

interface IDecksBody {
  height?: number,
};

const Footer: React.FunctionComponent<IDecksBody> = ({height}) => {
  return (
    <div className={styles.container} style={{height:`${height}px`}}>
      <div className={styles.flexSection}>
      <Deck />
      <Card interactive={true} elevation={Elevation.ZERO}>
        <div><a href="#">Card heading</a></div>
        <p>Card content</p>
        <Button>Submit</Button>
      </Card>
      </div>
      <div className={styles.flexSection}>A</div>
    </div>
  );
};

export default Footer;