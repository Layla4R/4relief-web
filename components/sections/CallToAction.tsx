import React from 'react';
import Button from '../ui/Button';
import styles from './cta.module.css';

const CallToAction: React.FC = () => {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <div>
          <h3>Want to make a tangible difference?</h3>
          <p>Join our network of volunteers or support a program with a donation today.</p>
        </div>
        <div className={styles.actions}>
          <Button href="/volunteer" variant="ghost">Volunteer</Button>
          <Button href="/donate" variant="primary">Donate</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
