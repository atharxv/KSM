import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.container}>
        {/* Top Section */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="/" className={styles.logo} aria-label="KSM Home">KSM</a>
            <p className={styles.tagline}>KSM 2026</p>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Shop</h3>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.link}>New Arrivals</a></li>
                <li><a href="#" className={styles.link}>Best Sellers</a></li>
                <li><a href="#" className={styles.link}>Collections</a></li>
                <li><a href="#" className={styles.link}>Sale</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Help</h3>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.link}>Contact Us</a></li>
                <li><a href="#" className={styles.link}>Shipping</a></li>
                <li><a href="#" className={styles.link}>Returns</a></li>
                <li><a href="#" className={styles.link}>FAQ</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>About</h3>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.link}>Our Story</a></li>
                <li><a href="#" className={styles.link}>Sustainability</a></li>
                <li><a href="#" className={styles.link}>Careers</a></li>
                <li><a href="#" className={styles.link}>Press</a></li>
              </ul>
            </div>

            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Follow</h3>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.link}>Instagram</a></li>
                <li><a href="#" className={styles.link}>Pinterest</a></li>
                <li><a href="#" className={styles.link}>TikTok</a></li>
                <li><a href="#" className={styles.link}>Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; 2026 KSM. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
            <a href="#" className={styles.legalLink}>Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
