import styles from './PhotoGallery.module.css';

export default function PhotoGallery() {
  return (
    <section className={styles.section} id="photo-gallery" aria-label="Lookbook Gallery">


      {/* Photo Strip */}
      <div className={styles.strip}>
        <div className={styles.stripInner}>
          <div className={styles.photoItem}>
            <img
              src="/images/yachtplaya.jpeg"
              alt="Fashion editorial"
              className={styles.photoImage}
              loading="lazy"
            />
          </div>
          <div className={styles.photoItem}>
            <img
              src="/images/TMG.jpeg"
              alt="Fashion editorial — close-up with earring detail"
              className={styles.photoImage}
              loading="lazy"
            />
          </div>
          <div className={styles.photoItem}>
            <img
              src="/images/Old money.jpeg"
              alt="Fashion editorial — woman with canvas tote bag"
              className={styles.photoImage}
              loading="lazy"
            />
          </div>
          <div className={`${styles.photoItem} ${styles.photoItemWithCard}`}>
            <img
              src="/images/cafeoldmoney.jpeg"
              alt="Fashion editorial — model in black coat"
              className={styles.photoImage}
              loading="lazy"
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
              src="/images/Outfit Playa Hombre.jpeg"
              alt="Fashion editorial"
              className={styles.photoImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
