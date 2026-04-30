'use client';

import { useRef } from 'react';
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
          src="/images/Brownknitwear.jpeg"
          alt="Canvas of Souls in Motion Collection — editorial fashion photography"
          className={styles.editorialImage}
          loading="lazy"
        />
        <div className={styles.editorialOverlay}>
          <p className={styles.editorialCaption}>Canvas of Souls in Motion Collection</p>
        </div>
      </div>

      {/* Right: Product Grid */}
      <div className={styles.productSide}>
        <div className={styles.productHeader}>
          <h2 className={styles.productTitle}>
            The Featured<br />
            Collection 2026
          </h2>
          <div className={styles.carouselControls}>
            <button
              className={styles.carouselBtn}
              onClick={() => scroll('left')}
              aria-label="Previous products"
              id="featured-prev"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <button
              className={styles.carouselBtn}
              onClick={() => scroll('right')}
              aria-label="Next products"
              id="featured-next"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.productGrid} ref={scrollRef}>
          {/* Product cards rendered via Shopify Web Components */}
          <div
            dangerouslySetInnerHTML={{
              __html: `
                <shopify-context type="collection" handle="summer-collection">
                  <template>
                    <shopify-list-context type="product" query="collection.products" first="6">
                      <template>
                        <div class="featured-card">
                          <div class="featured-card__image-wrap">
                            <span class="featured-card__badge">Sale</span>
                            <shopify-media
                              width="280"
                              height="380"
                              query="product.selectedOrFirstAvailableVariant.image"
                            ></shopify-media>
                          </div>
                          <div class="featured-card__info">
                            <h3 class="featured-card__name">
                              <shopify-data query="product.title"></shopify-data>
                            </h3>
                            <div class="featured-card__price">
                              <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                            </div>
                          </div>
                        </div>
                      </template>
                      <div shopify-loading-placeholder class="featured-loading">
                        <div class="skeleton featured-skeleton"></div>
                        <div class="skeleton featured-skeleton"></div>
                        <div class="skeleton featured-skeleton"></div>
                      </div>
                    </shopify-list-context>
                  </template>
                </shopify-context>
              `,
            }}
          />
        </div>
      </div>
    </section>
  );
}
