import styles from './PhotoGallery.module.css';

export default function PhotoGallery() {
  return (
    <section className={styles.section} id="photo-gallery" aria-label="Lookbook Gallery">
      {/* Top: Dark overlay with text */}
      <div className={styles.banner}>
        <img
          src="/images/Boatpolo.jpeg"
          alt=""
          role="presentation"
          className={styles.bannerImage}
          loading="lazy"
        />
        <div className={styles.bannerOverlay}>
          <p className={styles.bannerText}>
            A quiet harmony of form and texture — KSM&apos;s latest<br />
            pieces in leather, gold, and silk are now in store
          </p>
        </div>
      </div>

      {/* Photo Strip */}
      <div className={styles.strip}>
        <div className={styles.stripInner}>
          <div className={styles.photoItem}>
            <img
              src="/images/Bluepolo.jpeg"
              alt="Fashion editorial — woman in black dress by the sea"
              className={styles.photoImage}
              loading="lazy"
            />
          </div>
          <div className={styles.photoItem}>
            <img
              src="/images/gallery-2.jpg"
              alt="Fashion editorial — close-up with earring detail"
              className={styles.photoImage}
              loading="lazy"
            />
          </div>
          <div className={styles.photoItem}>
            <img
              src="/images/gallery-3.jpg"
              alt="Fashion editorial — woman with canvas tote bag"
              className={styles.photoImage}
              loading="lazy"
            />
          </div>
          <div className={`${styles.photoItem} ${styles.photoItemWithCard}`}>
            <img
              src="/images/gallery-4.jpg"
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
              src="/images/sweatshit.jpeg"
              alt="Fashion editorial — woman relaxing on beach"
              className={styles.photoImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
