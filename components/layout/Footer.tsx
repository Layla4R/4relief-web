import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>4Relief</Link>
          <p className={styles.tag}>Supporting communities with transparency and care.</p>
        </div>

        <div className={styles.columns}>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/news">News</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get Involved</h4>
            <ul>
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/donate">Donate</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} 4Relief. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
