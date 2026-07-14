"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.css';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const pathname = usePathname() || '/';
  const parts = pathname.split('/');
  const maybeLocale = parts[1];
  const rest = parts.length > 2 ? '/' + parts.slice(2).join('/') : '/';

  const enHref = isLocale(maybeLocale) ? `/en${rest === '/' ? '' : rest}` : `/en${pathname}`;
  const arHref = isLocale(maybeLocale) ? `/ar${rest === '/' ? '' : rest}` : `/ar${pathname}`;

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
          <Link href={arHref} className={styles.langBtn} aria-label="Arabic">
            <span className={styles.flag}>🇸🇦</span>
            <span className={styles.langCode}>AR</span>
          </Link>

          <Link href={enHref} className={styles.langBtn} aria-label="English">
            <span className={styles.flag}>🇺🇸</span>
            <span className={styles.langCode}>EN</span>
          </Link>

          <Button variant="ghost" href="/donate">Donate</Button>
          <Button variant="primary" href="/volunteer">Join Us</Button>
        </div>
      </div>
    </header>
  );
};

function isLocale(x?: string) {
  return x === 'en' || x === 'ar';
}

export default Header;
