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
    price: '$120.00',
    description: 'A definitive essential for the modern wardrobe. Crafted from premium heavy-weight cotton, this tee features our signature KSM script logo and the hallmark crown emblem — a quiet declaration of status and taste. The relaxed yet structured fit makes it a versatile piece for high-end lounging or refined daily wear.',
    images: [
      '/images/image00070.png',
      '/images/image00071.png',
      '/images/image00072.png',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
};

export default function ProductDetail({ handle }: ProductDetailProps) {
  const product = PRODUCT_DATA[handle] || PRODUCT_DATA['crown-monogram-tee'];
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');

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
    <div className={styles.container}>
      {/* Back Link */}
      <nav className={styles.backNav}>
        <Link href="/products" className={styles.backLink}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to collection
        </Link>
      </nav>

      <div className={styles.productMain}>
        {/* Left: Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImage}>
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className={styles.thumbnails}>
            {product.images.map((img: string, idx: number) => (
              <div 
                key={idx} 
                className={`${styles.thumbnail} ${selectedImage === idx ? styles.thumbnailActive : ''}`}
                onClick={() => setSelectedImage(idx)}
              >
                <img src={img} alt={`${product.name} thumbnail ${idx}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className={styles.info}>
          <header className={styles.header}>
            <h1 className={styles.title}>{product.name}</h1>
            <span className={styles.price}>{product.price}</span>
          </header>

          <p className={styles.description}>
            {product.description}
          </p>

          <div className={styles.options}>
            <div>
              <p className={styles.optionLabel}>Select Size</p>
              <div className={styles.sizeList}>
                {product.sizes.map((size: string) => (
                  <button 
                    key={size}
                    className={`${styles.sizeBtn} ${selectedSize === size ? styles.sizeBtnActive : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button className={styles.addToCart} onClick={handleAddToCart}>
                Add to Bag
              </button>
              <button className={styles.buyNow} onClick={handleBuyNow}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Size Chart Section */}
      <section className={styles.sizeChartSection}>
        <h2 className={styles.sizeChartTitle}>The Measurement Guide</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (Inches)</th>
                <th>Waist (Inches)</th>
                <th>Sleeve (Inches)</th>
                <th>International</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td>36 - 38</td>
                <td>30 - 32</td>
                <td>32.5</td>
                <td>S</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>39 - 41</td>
                <td>33 - 35</td>
                <td>33.5</td>
                <td>M</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>42 - 44</td>
                <td>36 - 38</td>
                <td>34.5</td>
                <td>L</td>
              </tr>
              <tr>
                <td>Extra Large</td>
                <td>45 - 47</td>
                <td>39 - 41</td>
                <td>35.5</td>
                <td>XL</td>
              </tr>
              <tr>
                <td>XXL</td>
                <td>48 - 50</td>
                <td>42 - 44</td>
                <td>36.5</td>
                <td>XXL</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

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
    </div>
  );
}
