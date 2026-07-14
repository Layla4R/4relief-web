import React from 'react';
import Link from 'next/link';
import styles from './footer.module.css';

interface FooterProps {
  locale: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ locale }) => {
  const year = new Date().getFullYear();
  const base = `/${locale}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href={base} className={styles.logo}>4Relief</Link>
          <p className={styles.tag}>Supporting communities with transparency and care.</p>
        </div>

        <div className={styles.columns}>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><Link href={`${base}/about`}>About</Link></li>
              <li><Link href={`${base}/projects`}>Projects</Link></li>
              <li><Link href={`${base}/news`}>News</Link></li>
            </ul>
          </div>

          <div>
            <h4>Get Involved</h4>
            <ul>
              <li><Link href={`${base}/volunteer`}>Volunteer</Link></li>
              <li><Link href={`${base}/donate`}>Donate</Link></li>
              <li><Link href={`${base}/contact`}>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href={`${base}/privacy`}>Privacy</Link></li>
              <li><Link href={`${base}/terms`}>Terms</Link></li>
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
