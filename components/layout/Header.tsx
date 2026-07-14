import React from 'react';
import Link from 'next/link';
import styles from './header.module.css';
import Button from '../ui/Button';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>4Relief</Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/about" className={styles.link}>About</Link>
          <Link href="/projects" className={styles.link}>Projects</Link>
          <Link href="/news" className={styles.link}>News</Link>
          <Link href="/volunteer" className={styles.link}>Volunteer</Link>
          <Link href="/contact" className={styles.link}>Contact</Link>
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" href="/donate">Donate</Button>
          <Button variant="primary" href="/volunteer">Join Us</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
