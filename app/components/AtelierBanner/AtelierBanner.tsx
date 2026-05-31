'use client';

import Link from 'next/link';
import styles from './AtelierBanner.module.css';

export default function AtelierBanner() {
  return (
    <section className={styles.section} aria-label="Explore the Atelier">
      <div className={styles.background}>
        <img 
          src="/images/Atelierhome.jpeg" 
          alt="Inside the KSM Atelier" 
          loading="lazy"
          decoding="async"
          width="1200"
          height="675"
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={styles.content}>
        <p className={styles.eyebrow}>The Craftsmanship</p>
        <h2 className={styles.title}>Step Into<br />The Atelier</h2>
        <Link href="/atelier" className={styles.cta}>
          Discover the process
        </Link>
      </div>
    </section>
  );
}
