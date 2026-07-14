import React from 'react';
import Button from '../ui/Button';
import styles from './hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 className={styles.title}>Together we bring relief and hope</h1>
          <p className={styles.lead}>
            4Relief connects communities with resources, volunteers, and transparent
            support — helping people recover and rebuild faster.
          </p>

          <div className={styles.actions}>
            <Button href="/donate" variant="primary">Donate Now</Button>
            <Button href="/volunteer" variant="outline">Become a Volunteer</Button>
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
