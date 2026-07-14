import React from 'react';
import styles from './stats.module.css';

const data = [
  { label: 'People Helped', value: '12,450' },
  { label: 'Volunteers', value: '1,230' },
  { label: 'Projects Completed', value: '96' },
];

const Stats: React.FC = () => {
  return (
    <section className={styles.stats}>
      <div className={styles.inner}>
        {data.map((s) => (
          <div key={s.label} className={styles.card}>
            <div className={styles.value}>{s.value}</div>
            <div className={styles.label}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
