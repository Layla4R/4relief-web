import React from 'react';
import Link from 'next/link';
import styles from './featured.module.css';

const programs = [
  { title: 'Emergency Kits', desc: 'Rapid distribution of essential supplies.' },
  { title: 'Water & Sanitation', desc: 'Clean water projects for affected communities.' },
  { title: 'Community Gardens', desc: 'Local food resilience programs.' },
];

const FeaturedPrograms: React.FC = () => {
  return (
    <section className={styles.featured}>
      <div className={styles.inner}>
        <h2>Featured Programs</h2>
        <div className={styles.grid}>
          {programs.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.media} aria-hidden>Img</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <Link href="/projects" className={styles.link}>Learn more</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
