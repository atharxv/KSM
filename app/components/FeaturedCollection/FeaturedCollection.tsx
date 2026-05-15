'use client';

import { useRef } from 'react';
import Link from 'next/link';
import styles from './FeaturedCollection.module.css';

export default function FeaturedCollection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

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

      {/* Right: Product Grid */}
      <div className={styles.productSide}>
        <div className={styles.productHeader}>
          <h2 className={styles.productTitle}>
            The Featured<br />
            Collection 2026
          </h2>
        </div>

        <div className={styles.singleProductContainer}>
          <Link href="/products/vertical-textured-polo" className={styles.featuredCardLarge}>
            <div className={styles.imageWrapLarge}>
              <span className={styles.badgeLarge}>Featured</span>
              <img 
                src="/images/whitepolo.jpeg" 
                alt="Classic Piece" 
                className={styles.primaryImage}
              />
              <img 
                src="/images/VERTICAL TEXTURED POLO.jpeg" 
                alt="Classic Piece Detail" 
                className={styles.hoverImage}
              />
            </div>
            <div className={styles.infoLarge}>
              <h3 className={styles.nameLarge}>
                Vertical Textured Polo
              </h3>
              <div className={styles.priceLarge}>
                $145.00
              </div>
            </div>
          </Link>
          
          <Link href="/products/vertical-textured-polo" className={styles.statusButton}>
            <span>SHOP PIECE</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
