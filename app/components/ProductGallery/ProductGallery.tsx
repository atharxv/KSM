'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './ProductGallery.module.css';

const MOCK_PRODUCTS = [
  {
    id: 1,
    handle: 'vertical-textured-polo',
    name: 'Vertical Textured Polo',
    price: '$145.00',
    primaryImage: '/images/whitepolo.jpeg',
    hoverImage: '/images/VERTICAL TEXTURED POLO.jpeg',
  },
];

export default function ProductGallery() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOption, setSortOption] = useState('Featured');
  const [showFilters, setShowFilters] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const filteredProducts = MOCK_PRODUCTS
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || product.name.includes(activeCategory);
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOption === 'Price: Low to High') {
        return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      }
      if (sortOption === 'Price: High to Low') {
        return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
      }
      return 0; // Featured/Default
    });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleArea}>
          <h1 className={styles.title}>{activeCategory === 'All' ? 'Shop All' : activeCategory}</h1>
          <span className={styles.count}>{filteredProducts.length} Products</span>
        </div>

        <div className={styles.controls}>
          <div className={styles.searchWrapper}>
            <input 
              type="text" 
              placeholder="Search our collection..." 
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.filterSort}>
            <div className={styles.dropdownWrapper}>
              <button 
                className={styles.controlBtn}
                onClick={() => { setShowFilters(!showFilters); setShowSort(false); }}
              >
                Filter: {activeCategory}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeLinecap="round"/>
                </svg>
              </button>
              {showFilters && (
                <div className={styles.dropdown}>
                  {['All', 'Polo', 'Shirt', 'Trousers'].map(cat => (
                    <button 
                      key={cat}
                      className={`${styles.dropdownItem} ${activeCategory === cat ? styles.dropdownItemActive : ''}`}
                      onClick={() => { setActiveCategory(cat); setShowFilters(false); }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.dropdownWrapper}>
              <button 
                className={styles.controlBtn}
                onClick={() => { setShowSort(!showSort); setShowFilters(false); }}
              >
                Sort: {sortOption}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeLinecap="round"/>
                </svg>
              </button>
              {showSort && (
                <div className={styles.dropdown}>
                  {['Featured', 'Price: Low to High', 'Price: High to Low'].map(option => (
                    <button 
                      key={option}
                      className={`${styles.dropdownItem} ${sortOption === option ? styles.dropdownItemActive : ''}`}
                      onClick={() => { setSortOption(option); setShowSort(false); }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <Link 
            key={product.id} 
            href={`/products/${product.handle}`}
            className={styles.card}
          >
            <div className={styles.imageWrap}>
              <img 
                src={product.primaryImage} 
                alt={product.name} 
                className={styles.primaryImage}
              />
              <img 
                src={product.hoverImage} 
                alt={`${product.name} Detail`} 
                className={styles.hoverImage}
              />
            </div>
            <div className={styles.info}>
              <h3 className={styles.productName}>{product.name}</h3>
              <span className={styles.price}>{product.price}</span>
            </div>
          </Link>
        ))}
        {filteredProducts.length === 0 && (
          <p className={styles.noResults}>No pieces found matching your criteria.</p>
        )}
      </div>

      {/* Shopify Integration Placeholder */}
      <div 
        style={{ display: 'none' }}
        dangerouslySetInnerHTML={{
          __html: `
            <shopify-context type="collection" handle="all">
              <template>
                <shopify-list-context type="product" query="collection.products">
                  <template>
                    <div class="product-card">
                      <a href="/products/{{product.handle}}">
                        <shopify-media width="400" height="533" query="product.selectedOrFirstAvailableVariant.image" class="primary-image"></shopify-media>
                        <shopify-media width="400" height="533" query="product.images[1]" class="hover-image"></shopify-media>
                        <shopify-data query="product.title"></shopify-data>
                        <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                      </a>
                    </div>
                  </template>
                </shopify-list-context>
              </template>
            </shopify-context>
          `
        }}
      />
    </div>
  );
}
