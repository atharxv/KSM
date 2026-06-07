import styles from './PhotoGallery.module.css';

export default function PhotoGallery() {
  return (
    <section className={styles.section} id="photo-gallery" aria-label="Lookbook Gallery">


      {/* Photo Strip */}
      <div className={styles.strip}>
        <div className={styles.stripInner}>
          <div className={styles.photoItem}>
            <img
              src="/images/Bottomline1.webp"
              alt="Fashion editorial"
              className={styles.photoImage}
              loading="lazy"
              decoding="async"
              width="800"
              height="1067"
            />
          </div>
          <div className={styles.photoItem}>
            <img
              src="/images/footer/K.png"
              alt="Fashion editorial"
              className={styles.photoImage}
              loading="lazy"
              decoding="async"
              width="800"
              height="1067"
            />
          </div>
          <div className={styles.photoItem}>
            <img
              src="/images/footer/S.png"
              alt="Fashion editorial"
              className={styles.photoImage}
              loading="lazy"
              decoding="async"
              width="800"
              height="1067"
            />
          </div>
          <div className={`${styles.photoItem} ${styles.photoItemWithCard}`}>
            <img
              src="/images/footer/M.png"
              alt="Fashion editorial"
              className={styles.photoImage}
              loading="lazy"
              decoding="async"
              width="800"
              height="1067"
            />
            {/* Product Popover Card */}
            <div className={styles.popoverCard}>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <shopify-context type="product" handle="silk-peplum-blouse">
                      <template>
                        <div class="popover-card__inner">
                          <div class="popover-card__image">
                            <shopify-media
                              width="80"
                              height="100"
                              query="product.selectedOrFirstAvailableVariant.image"
                            ></shopify-media>
                          </div>
                          <div class="popover-card__info">
                            <h4 class="popover-card__name">
                              <shopify-data query="product.title"></shopify-data>
                            </h4>
                            <div class="popover-card__price">
                              <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                              <span class="popover-card__compare">
                              <shopify-money query="product.selectedOrFirstAvailableVariant.compareAtPrice"></shopify-money>
                              </span>
                            </div>
                            <div class="popover-card__actions">
                              <span class="popover-card__view">View detail</span>
                              <button
                                class="popover-card__add"
                                onclick="getElementById('main-cart').addLine(event).showModal();"
                                aria-label="Add to cart"
                              >+</button>
                            </div>
                          </div>
                        </div>
                      </template>
                    </shopify-context>
                  `,
                }}
              />
            </div>
          </div>
          <div className={styles.photoItem}>
            <img
              src="/images/Bottomline5.webp"
              alt="Fashion editorial"
              className={styles.photoImage}
              loading="lazy"
              decoding="async"
              width="800"
              height="1067"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
