'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './FeaturedCollection.module.css';

export default function FeaturedCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.section} id="featured-collection" aria-label="Featured Collection 2026">
      {/* Left: Editorial Image */}
      <div className={styles.editorial}>
        <img
          src="/images/Outfit Playa Hombre.jpeg"
          alt="Legacy Collection — editorial fashion photography"
          className={styles.editorialImage}
          loading="lazy"
        />
        <div className={styles.editorialOverlay}>
          <p className={styles.editorialCaption}>The Legacy Collection</p>
        </div>
      </div>

      {/* Right: Editorial Product Showcase */}
      <div className={styles.productSide}>
        <div className={styles.eyebrowRow}>
          <span className={styles.eyebrow}>Featured Collection 2026</span>
          <span className={styles.eyebrowLine}></span>
        </div>

        <div className={styles.productShowcase}>
          <Link href="/products/crown-monogram-tee" className={styles.showcaseLink}>
            <div className={styles.showcaseImageWrap}>
              <img 
                src="/images/image00070.png" 
                alt="The Crown Monogram Tee" 
                className={styles.showcaseImage}
              />
              <img 
                src="/images/KSMshirt4.JPG" 
                alt="The Crown Monogram Tee - Lifestyle" 
                className={styles.showcaseImageHover}
              />
            </div>
          </Link>

          <div className={styles.productMeta}>
            <h2 className={styles.productName}>The Crown<br />Monogram Tee</h2>
            <span className={styles.productPrice}>€100.00</span>
            <span className={styles.metaDivider}></span>
            <Link href="/products/crown-monogram-tee" className={styles.shopPieceBtn}>
              <span>Shop Piece</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
