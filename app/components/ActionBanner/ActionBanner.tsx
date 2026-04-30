import styles from './ActionBanner.module.css';

export default function ActionBanner() {
  return (
    <section className={styles.banner} id="action-banner" aria-label="Shop call to action">
      {/* Continuation of the dark monochrome background */}
      <div className={styles.background}>
        <img
          src="/images/Beachfrontpolo.jpeg"
          alt=""
          role="presentation"
          className={styles.backgroundImage}
          loading="lazy"
        />
        <div className={styles.backgroundOverlay} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.headline}>
          Where Timeless Elegance Meets<br />
          Artistic Expression
        </h2>
        <a href="#featured-collection" className={styles.shopButton} id="btn-shop-now">
          SHOP NOW
        </a>
      </div>
    </section>
  );
}
