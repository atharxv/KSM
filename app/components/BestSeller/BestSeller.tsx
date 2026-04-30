import styles from './BestSeller.module.css';

export default function BestSeller() {
  return (
    <section className={styles.section} id="best-seller" aria-label="Best Sellers">
      {/* Left: Text Block */}
      <div className={styles.textBlock}>
        <h2 className={styles.title}>Best seller</h2>
        <p className={styles.description}>
          A curated selection of pieces that quietly stand out
          where modern tailoring meets soft structure, and
          everyday essentials are elevated with a sense of
          artful restraint.
        </p>
        <a href="#" className={styles.discoverLink} id="btn-discover-more">
          Discover more
        </a>
      </div>

      {/* Right: Product Cards via Shopify Web Components */}
      <div className={styles.productGrid}>
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <shopify-context type="collection" handle="summer-collection">
                <template>
                  <shopify-list-context type="product" query="collection.products" first="3">
                    <template>
                      <div class="best-seller-card">
                        <div class="best-seller-card__image-wrap">
                          <span class="best-seller-card__badge">Sale</span>
                          <shopify-media
                            width="360"
                            height="480"
                            query="product.selectedOrFirstAvailableVariant.image"
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
                      </div>
                    </template>
                    <div shopify-loading-placeholder class="best-seller-loading">
                      <div class="skeleton best-seller-skeleton"></div>
                      <div class="skeleton best-seller-skeleton"></div>
                      <div class="skeleton best-seller-skeleton"></div>
                    </div>
                  </shopify-list-context>
                </template>
              </shopify-context>
            `,
          }}
        />
      </div>
    </section>
  );
}
