import styles from './ActionBanner.module.css';

export default function ActionBanner() {
  return (
    <section className={styles.banner} id="action-banner" aria-label="Shop call to action">
      {/* Continuation of the dark monochrome background */}
      <div className={styles.background}>
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt=""
          role="presentation"
          className={styles.backgroundImage}
          loading="lazy"
          decoding="async"
          width="1920"
          height="1080"
        />
        <div className={styles.backgroundOverlay} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.headline}>
          KSM 2026
        </h2>
        <a href="/products" className={styles.shopButton} id="btn-shop-now">
          SHOP NOW
        </a>
      </div>
    </section>
  );
}
