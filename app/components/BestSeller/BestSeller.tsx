import styles from './BestSeller.module.css';

export default function BestSeller() {
  return (
    <section className={styles.section} id="best-seller" aria-label="Best Sellers">
      {/* Left: Text Block */}
      <div className={styles.textBlock}>
        <h2 className={styles.title}>Best seller</h2>
        <p className={styles.description}>
          An exclusive selection of pieces that command attention,
          where masterful tailoring meets undeniable presence, and
          everyday essentials are elevated with an aura of
          unrivaled prestige.
        </p>
        <a href="/products" className={styles.discoverLink} id="btn-discover-more">
          Discover more
        </a>
      </div>

      {/* Right: Product Cards via Shopify Web Components */}
      <div className={styles.productGrid}>
        <div
          className="shopify-container hidden-for-now"
          style={{ display: 'none' }}
          dangerouslySetInnerHTML={{
            __html: `
              <shopify-context type="collection" handle="best-sellers">
                <template>
                  <shopify-list-context type="product" query="collection.products" first="3">
                    <template>
                      <a href="/products/{{product.handle}}" class="best-seller-card">
                        <div class="best-seller-card__image-wrap">
                          <span class="best-seller-card__badge">Sale</span>
                          <shopify-media
                            width="360"
                            height="480"
                            query="product.selectedOrFirstAvailableVariant.image"
                            class="primary-image"
                          ></shopify-media>
                          <shopify-media
                            width="360"
                            height="480"
                            query="product.images[1]"
                            class="hover-image"
                          ></shopify-media>
                        </div>
                        <div class="best-seller-card__info">
                          <h3 class="best-seller-card__name">
                            <shopify-data query="product.title"></shopify-data>
                          </h3>
                          <div class="best-seller-card__price">
                            <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                            <span class="best-seller-card__compare-price">
                              <shopify-money query="product.selectedOrFirstAvailableVariant.compareAtPrice"></shopify-money>
                            </span>
                          </div>
                        </div>
                      </a>
                    </template>
                    <div shopify-loading-placeholder class="best-seller-loading">
                        <div class="product-skeleton">
                          <div class="product-skeleton__image"></div>
                          <div class="product-skeleton__text"></div>
                          <div class="product-skeleton__price"></div>
                        </div>
                        <div class="product-skeleton">
                          <div class="product-skeleton__image"></div>
                          <div class="product-skeleton__text"></div>
                          <div class="product-skeleton__price"></div>
                        </div>
                        <div class="product-skeleton">
                          <div class="product-skeleton__image"></div>
                          <div class="product-skeleton__text"></div>
                          <div class="product-skeleton__price"></div>
                        </div>
                    </div>
                  </shopify-list-context>
                </template>
              </shopify-context>
            `,
          }}
        />
        <div className="coming-soon-message" style={{ display: 'flex' }}>Coming Soon</div>
      </div>
    </section>
  );
}
