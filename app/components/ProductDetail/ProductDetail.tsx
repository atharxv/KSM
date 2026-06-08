'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './ProductDetail.module.css';

interface ProductDetailProps {
  handle: string;
}

const PRODUCT_DATA: Record<string, any> = {
  'crown-monogram-tee': {
    name: 'The Crown Monogram Tee',
    price: '€100.00',
    description: 'A definitive essential for the modern wardrobe. Crafted from premium heavy-weight cotton, this tee features our signature KSM script logo and the hallmark crown emblem — a quiet declaration of status and taste. The relaxed yet structured fit makes it a versatile piece for high-end lounging or refined daily wear.',
    images: [
      '/images/Product/product%20image%201.png',
      '/images/Product/product%20image%203.png',
      '/images/Product/product%20image%202.png',
      '/images/Product/product%20image%204.png',
      '/images/Product/KSMshirt4.JPG',
      '/images/Product/madeinitaly.JPG',
      '/images/Product/packaging.png',
      '/images/Bottomline5.webp',
    ],
    sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL'],
  },
};

export default function ProductDetail({ handle }: ProductDetailProps) {
  const product = PRODUCT_DATA[handle] || PRODUCT_DATA['crown-monogram-tee'];
  const [selectedSize, setSelectedSize] = useState('M');
  const [isSizeSelectorOpen, setIsSizeSelectorOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'size' | 'delivery'>('details');
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50) {
      setActiveIndex((prev) => Math.min(prev + 1, product.images.length - 1));
    } else if (deltaX < -50) {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    }
    setTouchStartX(null);
  };

  const openDrawer = (tab: 'details' | 'size' | 'delivery') => {
    setActiveTab(tab);
    setDrawerOpen(true);
  };

  const handleAddToCart = () => {
    const cart = document.getElementById('main-cart') as any;
    if (cart && typeof cart.addItem === 'function') {
      const variantId = "gid://shopify/ProductVariant/123456789"; 
      cart.addItem(variantId, 1);
      cart.showModal();
    } else {
      console.warn("Shopify cart is still initializing. Please try again in a moment.");
    }
  };

  const handleBuyNow = () => {
    const cart = document.getElementById('main-cart') as any;
    if (cart && typeof cart.addItem === 'function') {
      const variantId = "gid://shopify/ProductVariant/123456789";
      cart.addItem(variantId, 1);
      setTimeout(() => {
        const checkoutBtn = cart.querySelector('[slot="checkout-button"]');
        if (checkoutBtn) (checkoutBtn as HTMLElement).click();
      }, 500);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.productMain}>

          {/* Mobile Top Nav */}
          <div className={`${styles.topNav} ${styles.mobileTopNav}`}>
            <Link href="/products" className={styles.backLink} aria-label="Go back">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </Link>
            <div className={styles.topActions}>
              <button aria-label="Add to Wishlist">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </button>
              <button aria-label="Share">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
              </button>
            </div>
          </div>

          {/* Left: Desktop scrolling image stack */}
          <div className={styles.imageStack}>
            {product.images.map((imgSrc: string, i: number) => (
              <div key={i} className={styles.imageBlock}>
                <img src={imgSrc} alt={`${product.name} - Image ${i + 1}`} loading="lazy" decoding="async" width="800" height="1067" />
              </div>
            ))}
          </div>

          {/* Left: Mobile carousel */}
          <div className={styles.carousel}>
            <div
              className={styles.carouselTrack}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {product.images.map((src: string, i: number) => (
                <div className={styles.carouselSlide} key={i}>
                  <img
                    src={src}
                    alt={product.name}
                    role="presentation"
                    className={styles.carouselImage}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="1067"
                  />
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className={styles.carouselDots}>
              {product.images.map((_: any, i: number) => (
                <button
                  key={i}
                  className={`${styles.carouselDot} ${i === activeIndex ? styles.carouselDotActive : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: info panel */}
          <div className={styles.info}>
            <div className={styles.infoInner}>
              {/* Top Nav */}
              <div className={`${styles.topNav} ${styles.desktopTopNav}`}>
                <Link href="/products" className={styles.backLink} aria-label="Go back">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                </Link>
                <div className={styles.topActions}>
                  <button aria-label="Add to Wishlist">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  </button>
                  <button aria-label="Share">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
                  </button>
                </div>
              </div>

              {/* Centered Content Block */}
              <div className={styles.infoContent}>
                {/* Title & Price */}
                <div className={styles.productHeader}>
                  <span className={styles.newInLabel}>New In</span>
                  <h1 className={styles.title}>{product.name}</h1>
                  <span className={styles.price}>{product.price}</span>
                </div>

                {/* Options */}
                <div className={styles.options}>
                  <div className={styles.optionRow}>
                    <span className={styles.optionLabel}>Colour:</span>
                    <span className={styles.optionValue}><span className={styles.colorDot}></span> White</span>
                  </div>
                  <div className={styles.sizeSelectorWrapper}>
                    <button className={styles.sizeTrigger} onClick={() => setIsSizeSelectorOpen(!isSizeSelectorOpen)}>
                      <span className={styles.optionLabel}>Size:</span>
                      <span className={styles.optionValue}>{selectedSize}</span>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isSizeSelectorOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}><polyline points="9 18 15 12 9 6"/></svg>
                    </button>
                    {isSizeSelectorOpen && (
                      <div className={styles.sizeDropdown}>
                        {product.sizes.map((size: string) => (
                          <button
                            key={size}
                            className={`${styles.sizeOption} ${selectedSize === size ? styles.sizeOptionActive : ''}`}
                            onClick={() => {
                              setSelectedSize(size);
                              setIsSizeSelectorOpen(false);
                            }}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className={styles.actionArea}>
                  <button className={styles.addToCart} onClick={handleAddToCart}>Add to Cart</button>
                  <p className={styles.deliveryInfo}>Complimentary delivery usually within 1-3 business days*</p>
                </div>

                {/* Bottom Links */}
                <div className={styles.bottomLinks}>
                  <button onClick={() => openDrawer('details')}>Product details <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
                  <button onClick={() => openDrawer('size')}>Size guide <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
                  <button onClick={() => openDrawer('delivery')}>Delivery &amp; returns <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`${styles.drawerBackdrop} ${drawerOpen ? styles.drawerBackdropOpen : ''}`}
        onClick={() => setDrawerOpen(false)}
      />
      <div className={`${styles.drawer} ${drawerOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>Product Info</span>
          <button className={styles.drawerClose} onClick={() => setDrawerOpen(false)} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div className={styles.drawerTabs}>
          {[
            { key: 'details' as const, label: 'Product Details' },
            { key: 'size' as const, label: 'Size Guide' },
            { key: 'delivery' as const, label: 'Delivery & Returns' },
          ].map(({ key, label }) => (
            <button
              key={key}
              className={`${styles.drawerTab} ${activeTab === key ? styles.drawerTabActive : ''}`}
              onClick={() => setActiveTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.drawerBody}>
          {activeTab === 'details' && (
            <div className={styles.drawerContent}>
              <h4>Composition</h4>
              <p>100% Cotton</p>
              <h4>Details</h4>
              <ul>
                <li>KSM script logo embroidery</li>
                <li>Crown monogram emblem</li>
                <li>Relaxed structured fit</li>
                <li>Ribbed crew neck, cuffs and hem</li>
              </ul>
              <h4>Care Instructions</h4>
              <ul>
                <li>Machine wash at 30°C</li>
                <li>Do not bleach</li>
                <li>Do not tumble dry</li>
                <li>Iron at medium temperature</li>
                <li>Do not dry clean</li>
                <li>Wash with similar colours</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '13px', lineHeight: '1.6' }}>We recommend handling the garment with care and avoiding aggressive washing or treatment processes that could damage it.</p>
            </div>
          )}
          {activeTab === 'size' && (
            <div className={styles.drawerContent}>
              <h4>Size Chart</h4>
              <table className={styles.drawerTable}>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Chest (C)</th>
                    <th>Length (B)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['XS', '45 cm', '67 cm'],
                    ['S', '47 cm', '68 cm'],
                    ['M', '49 cm', '69 cm'],
                    ['L', '51 cm', '70 cm'],
                    ['XL', '53 cm', '71 cm'],
                  ].map(([s, c, l]) => (
                    <tr key={s}>
                      <td>{s}</td><td>{c}</td><td>{l}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h4 style={{ marginTop: '24px' }}>Measurement Notes</h4>
              <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
                <li><strong>C (Chest):</strong> Width measured from armpit to armpit.</li>
                <li><strong>B (Length):</strong> Total length measured from the neck to the bottom hem.</li>
              </ul>
            </div>
          )}
          {activeTab === 'delivery' && (
            <div className={styles.drawerContent}>
              <h4>Shipping</h4>
              <p>Express shipping throughout Italy in 24–48 hours. Delivery to the islands may take up to 5 business days.</p>
              <h4>Shipping Costs</h4>
              <ul>
                <li>€10 within Italy</li>
                <li>€15 for the islands</li>
              </ul>
              <h4>Returns</h4>
              <p>Please use the standard Italy return policy with maximum seller protection (14 days return window).</p>
            </div>
          )}
        </div>
      </div>

      {/* Shopify Integration Placeholder */}
      <div 
        style={{ display: 'none' }}
        dangerouslySetInnerHTML={{
          __html: `
            <shopify-context type="product" handle="${handle}">
              <template>
                <div class="product-data-bridge">
                  <shopify-data query="product.title" id="shopify-title"></shopify-data>
                  <shopify-money query="product.variants.edges[0].node.price" id="shopify-price"></shopify-money>
                  <shopify-data query="product.description" id="shopify-desc"></shopify-data>
                  <shopify-list-context type="variant" query="product.variants">
                    <template>
                      <button data-variant-id="{{variant.id}}">{{variant.title}}</button>
                    </template>
                  </shopify-list-context>
                </div>
              </template>
            </shopify-context>
          `
        }}
      />
    </>
  );
}
