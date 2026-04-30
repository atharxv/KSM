'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');

  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const searchProducts = [
    { handle: 'silk-peplum-blouse', title: 'Silk Peplum Blouse' },
    { handle: 'slanted-pocket-trousers', title: 'Slanted Pocket Trousers' },
    { handle: 'beige-wide-leg-trousers', title: 'Beige Wide-Leg Trousers' }
  ];

  const searchResults = searchProducts.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  const changeCurrency = (code: string, country: string) => {
    setCurrency(code);
    const store = document.querySelector('shopify-store');
    if (store) {
      store.setAttribute('country', country);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setScrolled(currentScrollY > 60);

      // Hide header when scrolling down past 100px, show when scrolling up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openCart = () => {
    const cart = document.getElementById('main-cart') as HTMLElement & { showModal: () => void };
    if (cart) cart.showModal();
  };

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''}`} id="site-header">
        {/* Left Navigation */}
      <nav className={styles.navLeft} aria-label="Main navigation">
        <button
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerActive : ''}`} />
        </button>

        <ul className={`${styles.navList} ${mobileMenuOpen ? styles.navListOpen : ''}`}>
          <li className={styles.navItem}>
            <button className={styles.navLink} id="nav-shops">
              Shops
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </li>
          <li className={`${styles.navItem} ${styles.hasDropdown}`}>
            <button className={styles.navLink} id="nav-products">
              Products
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.dropdownMenu}>
              <a href="#new-arrivals" className={styles.dropdownItem}>New Arrivals</a>
              <a href="#ready-to-wear" className={styles.dropdownItem}>Ready To Wear</a>
              <a href="#knitwear" className={styles.dropdownItem}>Knitwear</a>
              <a href="#all-products" className={styles.dropdownItem}>All products</a>
              <a href="#sale" className={styles.dropdownItem}>Sale</a>
            </div>
          </li>
          <li className={styles.navItem}>
            <button className={styles.navLink} id="nav-blog">
              Blog
            </button>
          </li>
          <li className={styles.navItem}>
            <button className={styles.navLink} id="nav-atelier">
              Atelier
            </button>
          </li>
        </ul>
      </nav>

      {/* Center Logo */}
      <div className={styles.logo}>
        <a href="/" id="site-logo" aria-label="KSM Home">
          KSM
        </a>
      </div>

      {/* Right Actions */}
      <div className={styles.navRight}>
        <div className={styles.localeGroup}>
          {/* Language Dropdown (Static functionality) */}
          <div className={`${styles.navItem} ${styles.hasDropdown}`}>
            <button className={styles.localeBtn} id="locale-language">
              {language}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.dropdownMenu} style={{ minWidth: '140px' }}>
              <button className={styles.dropdownItem} onClick={() => setLanguage('English')}>English</button>
              <button className={styles.dropdownItem} onClick={() => setLanguage('French')}>French</button>
              <button className={styles.dropdownItem} onClick={() => setLanguage('Italian')}>Italian</button>
              <button className={styles.dropdownItem} onClick={() => setLanguage('Spanish')}>Spanish</button>
            </div>
          </div>

          {/* Currency Dropdown (Functional) */}
          <div className={`${styles.navItem} ${styles.hasDropdown}`}>
            <button className={styles.localeBtn} id="locale-currency">
              {currency}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.dropdownMenu} style={{ minWidth: '100px' }}>
              <button className={styles.dropdownItem} onClick={() => changeCurrency('USD', 'US')}>USD</button>
              <button className={styles.dropdownItem} onClick={() => changeCurrency('EUR', 'FR')}>EUR</button>
              <button className={styles.dropdownItem} onClick={() => changeCurrency('GBP', 'GB')}>GBP</button>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.iconGroup}>
          <div className={`${styles.searchContainer} ${searchExpanded ? styles.searchExpanded : ''}`}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className={styles.iconBtn} 
              aria-label="Search" 
              id="btn-search"
              onClick={() => {
                if (searchExpanded) {
                  setSearchExpanded(false);
                  setSearchQuery('');
                } else {
                  setSearchExpanded(true);
                }
              }}
            >
              {searchExpanded ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              )}
            </button>

            {/* Search Results Dropdown (Always in DOM to prevent Shopify Web Component unmount errors) */}
            <div 
              className={styles.searchResults}
              style={{ display: searchExpanded && searchQuery.length >= 2 ? 'flex' : 'none' }}
            >
              {searchProducts.map(p => {
                const isMatch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
                return (
                  <div 
                    key={p.handle} 
                    className={styles.searchResultItem}
                    style={{ display: isMatch ? 'block' : 'none' }}
                  >
                    <div dangerouslySetInnerHTML={{ __html: `
                      <shopify-context type="product" handle="${p.handle}">
                        <template>
                          <a href="/products/${p.handle}" class="search-result-link">
                            <div class="search-result-image">
                              <shopify-media query="product.selectedOrFirstAvailableVariant.image" width="50" height="65"></shopify-media>
                            </div>
                            <div class="search-result-info">
                              <h4 class="search-result-title"><shopify-data query="product.title"></shopify-data></h4>
                              <p class="search-result-price"><shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money></p>
                            </div>
                          </a>
                        </template>
                      </shopify-context>
                    ` }} />
                  </div>
                );
              })}
              {searchQuery.length >= 2 && searchResults.length === 0 && (
                <div className={styles.searchEmpty}>No results found for "{searchQuery}"</div>
              )}
            </div>
          </div>

          <button className={styles.iconBtn} aria-label="Account" id="btn-account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>

          <button className={styles.iconBtn} aria-label="Cart" id="btn-cart" onClick={openCart}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <span className={styles.cartBadge}>0</span>
          </button>
        </div>
      </div>
    </header>

      {/* Floating Mobile Nav Bar */}
      <div className={`${styles.floatingMobileNav} ${scrolled ? styles.floatingVisible : ''}`}>
        <a href="/" className={styles.floatingIconBtn} aria-label="Home">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </a>
        <button className={styles.floatingIconBtn} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <button 
          className={styles.floatingIconBtn} 
          aria-label="Search" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setSearchExpanded(true);
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
        <button className={styles.floatingIconBtn} aria-label="Cart" onClick={openCart}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 01-8 0"/>
          </svg>
        </button>
        <button className={styles.floatingIconBtn} aria-label="Account">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </div>
    </>
  );
}
