import React from 'react';
import classNames from 'classnames';
import styles from './MetricBadge.module.scss';

type MetricValue =  'blue' | 'green' | 'red' | 'yellow';

interface IBadgeProps {
  value: number,
  color?: MetricValue,
};

const Badge: React.FunctionComponent<IBadgeProps> = ({value, color = 'blue'}) => {
  return <div className={classNames([styles.badge, styles[color]])}>
    <div className={styles.text}>{value}</div>
  </div>
};



export default Badge;