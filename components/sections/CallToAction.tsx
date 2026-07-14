import React from 'react';
import Button from '../ui/Button';
import styles from './cta.module.css';

interface CallToActionProps {
  heading: string;
  text: string;
  volunteerLabel: string;
  donateLabel: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ heading, text, volunteerLabel, donateLabel }) => {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <div>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
        <div className={styles.actions}>
          <Button href="/volunteer" variant="ghost">{volunteerLabel}</Button>
          <Button href="/donate" variant="primary">{donateLabel}</Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
