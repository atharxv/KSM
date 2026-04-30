import styles from './ProductModal.module.css';

export default function ProductModal() {
  return (
    <dialog id="product-modal" className={styles.modal}>
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <shopify-context id="product-modal-context" type="product" wait-for-update>
              <template>
                <div class="product-modal__container">
                  <div class="product-modal__close-row">
                    <button class="product-modal__close-btn" onclick="getElementById('product-modal').close();" aria-label="Close product details">
                      &#10005;
                    </button>
                  </div>
                  <div class="product-modal__content">
                    <div class="product-modal__layout">
                      <div class="product-modal__media">
                        <shopify-media
                          width="420"
                          height="520"
                          query="product.selectedOrFirstAvailableVariant.image"
                        ></shopify-media>
                      </div>
                      <div class="product-modal__details">
                        <div class="product-modal__header">
                          <span class="product-modal__vendor">
                            <shopify-data query="product.vendor"></shopify-data>
                          </span>
                          <h1 class="product-modal__title">
                            <shopify-data query="product.title"></shopify-data>
                          </h1>
                          <div class="product-modal__price-row">
                            <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                          </div>
                        </div>

                        <shopify-variant-selector></shopify-variant-selector>

                        <div class="product-modal__btn-group">
                          <button
                            class="product-modal__add-to-cart"
                            onclick="getElementById('main-cart').addLine(event).showModal();"
                            shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                          >
                            Add to cart
                          </button>
                          <button
                            class="product-modal__buy-now"
                            onclick="document.querySelector('shopify-store').buyNow(event)"
                            shopify-attr--disabled="!product.selectedOrFirstAvailableVariant.availableForSale"
                          >
                            Buy now
                          </button>
                        </div>

                        <div class="product-modal__description">
                          <shopify-data query="product.descriptionHtml"></shopify-data>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </template>
              <div shopify-loading-placeholder class="product-modal__loading">
                <div class="skeleton" style="width: 100%; height: 400px;"></div>
              </div>
            </shopify-context>
          `,
        }}
      />
    </dialog>
  );
}
