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
        />
      </div>
      
      <div className={styles.content}>
        <p className={styles.eyebrow}>The Craftsmanship</p>
        <h2 className={styles.title}>Step Into<br />The Atelier</h2>
        <p className={styles.description}>
          Discover the philosophy, the materials, and the meticulous 
          craftsmanship behind every piece. A world where tradition 
          meets the avant-garde.
        </p>
        <Link href="/atelier" className={styles.cta}>
          Discover the process
        </Link>
      </div>
    </section>
  );
}
