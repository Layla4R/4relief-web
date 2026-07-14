import React from 'react';
import Button from '../ui/Button';
import styles from './hero.module.css';

interface HeroProps {
  title: string;
  lead: string;
  primaryLabel: string;
  secondaryLabel: string;
}

const Hero: React.FC<HeroProps> = ({ title, lead, primaryLabel, secondaryLabel }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.lead}>{lead}</p>

          <div className={styles.actions}>
            <Button href="/donate" variant="primary">{primaryLabel}</Button>
            <Button href="/volunteer" variant="outline">{secondaryLabel}</Button>
          </div>
        </div>

        <div className={styles.visual} aria-hidden>
          <div className={styles.card}>Image/visual placeholder</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
