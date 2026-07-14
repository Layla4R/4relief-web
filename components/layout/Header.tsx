"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import styles from './header.module.css';
import Button from '../ui/Button';

interface HeaderProps {
  locale: 'en' | 'ar';
}

const navLabels = {
  en: {
    about: 'About',
    projects: 'Projects',
    news: 'News',
    volunteer: 'Volunteer',
    contact: 'Contact',
  },
  ar: {
    about: 'معلومات عنا',
    projects: 'المشاريع',
    news: 'أخبار',
    volunteer: 'التطوع',
    contact: 'اتصل بنا',
  },
};

const langLabels = {
  en: { code: 'EN', label: 'English', flag: '🇺🇸' },
  ar: { code: 'AR', label: 'Arabic', flag: '🇸🇦' },
};

const Header: React.FC<HeaderProps> = ({ locale }) => {
  const pathname = usePathname() || '/';
  const parts = pathname.split('/');
  const maybeLocale = parts[1];
  const rest = parts.length > 2 ? '/' + parts.slice(2).join('/') : '/';
  const base = `/${locale}`;
  const labels = navLabels[locale];
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const enHref = isLocale(maybeLocale) ? `/en${rest === '/' ? '' : rest}` : `/en${pathname}`;
  const arHref = isLocale(maybeLocale) ? `/ar${rest === '/' ? '' : rest}` : `/ar${pathname}`;

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={base} className={styles.logo}>4Relief</Link>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <Menu size={22} aria-hidden="true" />
        </button>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link href={`${base}/about`} className={styles.link}>{labels.about}</Link>
          <Link href={`${base}/projects`} className={styles.link}>{labels.projects}</Link>
          <Link href={`${base}/news`} className={styles.link}>{labels.news}</Link>
          <Link href={`${base}/volunteer`} className={styles.link}>{labels.volunteer}</Link>
          <Link href={`${base}/contact`} className={styles.link}>{labels.contact}</Link>
        </nav>

        <div className={styles.actions}>
          <div className={styles.langDropdown} ref={dropdownRef}>
            <button
              type="button"
              className={styles.langToggle}
              onClick={() => setOpen((prev) => !prev)}
              aria-expanded={open}
              aria-haspopup="menu"
            >
              <span className={styles.flag}>{langLabels[locale].flag}</span>
              <span>{langLabels[locale].label}</span>
              <span className={`${styles.langCaret} ${open ? styles.open : ''}`}>▾</span>
            </button>

            {open && (
              <div className={styles.langMenu} role="menu">
                <Link href={enHref} className={styles.langItem} role="menuitem" onClick={() => setOpen(false)}>
                  <span className={styles.flag}>🇺🇸</span>
                  <span>English</span>
                </Link>
                <Link href={arHref} className={styles.langItem} role="menuitem" onClick={() => setOpen(false)}>
                  <span className={styles.flag}>🇸🇦</span>
                  <span>Arabic</span>
                </Link>
              </div>
            )}
          </div>

          <Button variant="ghost" href={`${base}/donate`}>Donate</Button>
          <Button variant="primary" href={`${base}/volunteer`}>Join Us</Button>
        </div>
      </div>

      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileLangRow}>
            <Link href={enHref} className={styles.mobileLangButton} onClick={() => setMobileOpen(false)}>EN</Link>
            <Link href={arHref} className={styles.mobileLangButton} onClick={() => setMobileOpen(false)}>AR</Link>
          </div>
          <Link href={`${base}/about`} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{labels.about}</Link>
          <Link href={`${base}/projects`} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{labels.projects}</Link>
          <Link href={`${base}/news`} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{labels.news}</Link>
          <Link href={`${base}/volunteer`} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{labels.volunteer}</Link>
          <Link href={`${base}/contact`} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{labels.contact}</Link>
          <div className={styles.mobileActions}>
            <Button variant="ghost" href={`${base}/donate`} className={styles.mobileButton} onClick={() => setMobileOpen(false)}>Donate</Button>
            <Button variant="primary" href={`${base}/volunteer`} className={styles.mobileButton} onClick={() => setMobileOpen(false)}>Join Us</Button>
          </div>
        </div>
      )}
    </header>
  );
};

function isLocale(x?: string) {
  return x === 'en' || x === 'ar';
}

export default Header;
