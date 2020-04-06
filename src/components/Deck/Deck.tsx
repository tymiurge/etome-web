import React from 'react';
import styles from './Deck.module.scss';

const Deck = () => {
  return <div className={styles.container}>
    <div className={styles.statusBar}></div>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>name</div>
        <div>stats</div>
        <div className={styles.tags}>tags</div>
      </div>
      <div className={styles.operations}></div>
    </div>
  </div>
};

export default Deck;
