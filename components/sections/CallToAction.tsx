import React from 'react';
import DonateForm from '../forms/DonateForm';
import styles from './cta.module.css';

type DonateFormMessages = {
  heading: string;
  lead: string;
  oneTime: string;
  monthly: string;
  customAmount: string;
  donateButton: string;
  featureSecure: string;
  featureDirect: string;
  featureReports: string;
  featureCertified: string;
};

type CallToActionProps = {
  heading: string;
  text: string;
  donateFormMessages: DonateFormMessages;
};

const CallToAction: React.FC<CallToActionProps> = ({ heading, text, donateFormMessages }) => {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <div className={styles.formWrapper}>
          <DonateForm messages={donateFormMessages} />
        </div>

        <div className={styles.copy}>
          <div className={styles.copyInner}>
            <p className={styles.kicker}>{donateFormMessages.heading}</p>
            <h1>{heading}</h1>
            <p className={styles.lead}>{text}</p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>📌 {donateFormMessages.featureSecure}</div>
              <div className={styles.featureItem}>✨ {donateFormMessages.featureDirect}</div>
              <div className={styles.featureItem}>📄 {donateFormMessages.featureReports}</div>
              <div className={styles.featureItem}>🌍 {donateFormMessages.featureCertified}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
