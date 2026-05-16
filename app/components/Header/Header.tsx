'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [atBottom, setAtBottom] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const lastScrollY = useRef(0);
  const pathname = usePathname();

  const isLightTheme = pathname?.startsWith('/products') ?? false;

  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');

  const searchProducts = [
    { handle: 'silk-peplum-blouse', title: 'Silk Peplum Blouse' },
    { handle: 'slanted-pocket-trousers', title: 'Slanted Pocket Trousers' },
    { handle: 'beige-wide-leg-trousers', title: 'Beige Wide-Leg Trousers' }
  ];

  const searchResults = searchProducts.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY.current) {
        setHidden(false);
      }

      // Detect if user is at the very bottom
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      setAtBottom(isBottom);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('menu-open');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    }
    return () => { 
      document.body.style.overflow = ''; 
      document.body.classList.remove('menu-open');
    };
  }, [menuOpen]);

  const openCart = () => {
    const cart = document.getElementById('main-cart') as HTMLElement & { showModal: () => void };
    if (cart) cart.showModal();
  };

  const navItems = [
    { label: 'Shop', href: '/products', description: 'Explore our curated collection of pieces across the globe.' },
    { label: 'Atelier', href: '/atelier', description: 'A glimpse into our creative process — where design meets craft.' },
  ];

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${hidden ? styles.hidden : ''} ${isLightTheme ? styles.lightTheme : ''}`}
        id="site-header"
      >
        {/* Left: Mobile Menu & Search */}
        <div className={styles.leftActions}>
          <button
            className={styles.menuBtn}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            id="btn-menu-mobile"
          >
            <div className={`${styles.menuIcon} ${menuOpen ? styles.menuIconActive : ''}`}>
              <span />
              <span />
              <span />
            </div>
          </button>
          
          <button 
            className={styles.iconBtn} 
            aria-label="Search" 
            onClick={() => setMenuOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>

        {/* Center: Logo */}
        <div className={styles.logoArea}>
          <a href="/" className={styles.logo} id="site-logo" aria-label="KSM Home">
            KSM
          </a>
        </div>

        {/* Right: Icon group + Desktop Menu */}
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Account" id="btn-account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          <button className={styles.iconBtn} aria-label="Cart" id="btn-cart" onClick={openCart}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span className={styles.cartBadge}>0</span>
          </button>
        </div>
      </header>

      {/* Full-screen slide-out navigation panel */}
      <div className={`${styles.slidePanel} ${menuOpen ? styles.slidePanelOpen : ''}`}>
        {/* Close button inside panel */}
        <button
          className={styles.panelClose}
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.slidePanelInner}>
          {/* Search Bar at Top */}
        <div className={styles.panelSearch}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className={styles.panelSearchInput}
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Search Results (absolute positioned to overlap nav if needed, or inline) */}
        {searchQuery.length >= 2 && (
          <div className={styles.panelSearchResults}>
            {searchProducts.map(p => {
              const isMatch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
              if (!isMatch) return null;
              return (
                <div key={p.handle} className={styles.panelSearchItem}>
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
            {searchResults.length === 0 && (
              <p className={styles.panelSearchEmpty}>No results found</p>
            )}
          </div>
        )}

        {/* Navigation Links */}
        <nav className={styles.panelNav} aria-label="Main navigation">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              className={styles.panelLink}
              style={{ animationDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
              onClick={() => setMenuOpen(false)}
            >
              <span className={styles.panelLinkLabel}>{item.label}</span>
              <span className={styles.panelLinkDesc}>{item.description}</span>
            </a>
          ))}
        </nav>

        {/* Bottom Section: Locale Controls only now */}
        <div className={styles.panelFooter}>
          {/* Locale Controls */}
          <div className={styles.panelLocale}>
            <div className={styles.panelLocaleGroup}>
              <span className={styles.panelLocaleLabel}>Language</span>
              <div className={styles.panelLocaleBtns}>
                {['English', 'French', 'Italian', 'Spanish'].map(lang => (
                  <button
                    key={lang}
                    className={`${styles.panelLocaleBtn} ${language === lang ? styles.panelLocaleBtnActive : ''}`}
                    onClick={() => setLanguage(lang)}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.panelLocaleGroup}>
              <span className={styles.panelLocaleLabel}>Currency</span>
              <div className={styles.panelLocaleBtns}>
                {[
                  { code: 'USD', country: 'US' },
                  { code: 'EUR', country: 'FR' },
                  { code: 'GBP', country: 'GB' },
                ].map(c => (
                  <button
                    key={c.code}
                    className={`${styles.panelLocaleBtn} ${currency === c.code ? styles.panelLocaleBtnActive : ''}`}
                    onClick={() => changeCurrency(c.code, c.country)}
                  >
                    {c.code}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Overlay backdrop */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Floating Mobile Nav Bar */}
      <div className={`${styles.floatingMobileNav} ${scrolled && !atBottom ? styles.floatingVisible : ''}`}>
        <a href="/" className={styles.floatingIconBtn} aria-label="Home">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </a>
        <button className={styles.floatingIconBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <button
          className={styles.floatingIconBtn}
          aria-label="Search"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <button className={styles.floatingIconBtn} aria-label="Cart" onClick={openCart}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </button>
        <button className={styles.floatingIconBtn} aria-label="Account">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </button>
      </div>
    </>
  );
}
