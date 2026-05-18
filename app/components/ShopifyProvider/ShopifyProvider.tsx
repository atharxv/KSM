'use client';

import { useEffect, useRef } from 'react';

export default function ShopifyProvider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Create shopify-store element
    const store = document.createElement('shopify-store');
    store.setAttribute('store-domain', 'runway-store-newdemo.myshopify.com');
    store.setAttribute('country', 'US');
    store.setAttribute('language', 'en');
    document.body.prepend(store);

    // Create shopify-cart element
    const cart = document.createElement('shopify-cart');
    cart.id = 'main-cart';

    // Empty state slot
    const emptySlot = document.createElement('div');
    emptySlot.setAttribute('slot', 'empty');
    emptySlot.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:3rem 1.5rem;text-align:center;gap:1rem;">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-gray-100)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p style="font-family:var(--font-body);font-size:0.9375rem;color:var(--color-gray-400);">Your cart is empty</p>
        <p style="font-family:var(--font-body);font-size:0.8125rem;color:var(--color-gray-400);">Add items to get started</p>
      </div>
    `;

    // Checkout button slot
    const checkoutSlot = document.createElement('div');
    checkoutSlot.setAttribute('slot', 'checkout-button');
    checkoutSlot.textContent = 'Proceed to Checkout';

    cart.appendChild(emptySlot);
    cart.appendChild(checkoutSlot);
    document.body.appendChild(cart);

    // Load Shopify Web Components script last
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.shopify.com/storefront/web-components.js';
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount (shouldn't happen in production)
      store.remove();
      cart.remove();
      script.remove();
    };
  }, []);

  return <div ref={containerRef} style={{ display: 'none' }} />;
}
