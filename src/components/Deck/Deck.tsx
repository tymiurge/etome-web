import React from 'react';
// import { Callout, Code, H5, Intent, Switch } from "@blueprintjs/core";
import MetricBadge from '../MetricBadge'
import styles from './Deck.module.scss';

const Deck = () => {
  return <div className={styles.container}>
    <div className={styles.statusBar}></div>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>name</div>
        <div>
          <div className={styles.stat}>
            <MetricBadge className={styles.statItem} value={150}/>
            <MetricBadge className={styles.statItem} value={449} color="green" />
            <MetricBadge value={449} color="red" />
          </div>
        </div>
        <div className={styles.tags}>tags</div>
      </div>
      <div className={styles.operations}></div>
    </div>
  </div>
};

export default Deck;
