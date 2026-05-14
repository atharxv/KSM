'use client';

import { useRef } from 'react';
import styles from './CoOrderSets.module.css';

export default function CoOrderSets() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className={styles.section} id="co-order-sets" aria-label="Co-order Sets">
      {/* Left: Product Carousel */}
      <div className={styles.carouselSide}>
        <h2 className={styles.title}>Co-order sets</h2>
        <p className={styles.subtitle}>
          Explore our thoughtfully curated co-order sets —
          designed for effortless harmony.
        </p>

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel} ref={scrollRef}>
            <div
              className="shopify-container hidden-for-now"
              style={{ display: 'none' }}
              dangerouslySetInnerHTML={{
                __html: `
                  <shopify-context type="collection" handle="co-order-sets">
                    <template>
                      <shopify-list-context type="product" query="collection.products" first="4">
                        <template>
                          <a href="/products/{{product.handle}}" class="co-order-card">
                            <div class="co-order-card__image-wrap">
                              <span class="co-order-card__badge">Sale</span>
                              <shopify-media
                                width="320"
                                height="450"
                                query="product.selectedOrFirstAvailableVariant.image"
                                class="primary-image"
                              ></shopify-media>
                              <shopify-media
                                width="320"
                                height="450"
                                query="product.images[1]"
                                class="hover-image"
                              ></shopify-media>
                            </div>
                          </a>
                        </template>
                        <div shopify-loading-placeholder class="co-order-loading">
                          <div class="skeleton co-order-skeleton"></div>
                          <div class="skeleton co-order-skeleton"></div>
                        </div>
                      </shopify-list-context>
                    </template>
                  </shopify-context>
                `,
              }}
            />
            <div className="coming-soon-message" style={{ display: 'flex' }}>Coming Soon</div>
          </div>

          <div className={styles.carouselControls}>
            <button
              className={styles.carouselBtn}
              onClick={() => scroll('left')}
              aria-label="Previous"
              id="coorder-prev"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              className={styles.carouselBtn}
              onClick={() => scroll('right')}
              aria-label="Next"
              id="coorder-next"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Right: Lookbook Image with Hotspots */}
      <div className={styles.lookbook}>
        <img
          src="/images/Old money.jpeg"
          alt="Man in polo shirt"
          className={styles.lookbookImage}
          loading="lazy"
        />
        {/* Hotspot dots */}
        <a href="/products/vertical-textured-polo" className={styles.hotspot} style={{ top: '35%', left: '65%' }} aria-label="View product detail">
          <span className={styles.hotspotDot} />
        </a>
        <a href="/products/vertical-textured-polo" className={styles.hotspot} style={{ top: '72%', left: '40%' }} aria-label="View product detail">
          <span className={styles.hotspotDot} />
        </a>
      </div>
    </section>
  );
}
