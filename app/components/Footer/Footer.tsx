import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="site-footer">
      <div className={styles.gridContainer}>
        {/* Row 1: Columns */}
        <div className={styles.linkColumn}>
          <a href="/products" className={styles.link}>Shop All</a>
          <a href="/atelier" className={styles.link}>Atelier</a>
        </div>

        <div className={styles.linkColumn}>
          <a 
            href="https://www.instagram.com/ksm.atelier?igsh=YXE3Z3hiYWlja3Ns" 
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>

        <div className={styles.linkColumn}>
          <p className={styles.contactInfo}>
            Flagship Studio,<br />
            Milan, Italy
          </p>
          <a href="mailto:hello@ksm.studio" className={styles.link}>hello@ksm.studio</a>
        </div>

        <div className={styles.linkColumn}>
          <a href="#" className={styles.link}>Contact Us</a>
          <a href="#" className={styles.link}>Shipping</a>
          <a href="#" className={styles.link}>Returns</a>
          <a href="#" className={styles.link}>FAQ</a>
        </div>
      </div>

      <div className={styles.bottomGrid}>
        <div className={styles.copyrightCell}>
          <div className={styles.abstractIcon}>
            <svg viewBox="0 0 100 100" className={styles.iconSvg}>
              <path d="M0,100 L50,0 L100,100 Z" fill="none" stroke="currentColor" strokeWidth="1"/>
              <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <p className={styles.copyrightText}>&copy; KSM 2026</p>
        </div>
        <div className={styles.logoCell}>
          <div className={styles.cellBackground}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              alt=""
              className={styles.cellImage}
            />
            <div className={styles.cellOverlay} />
          </div>
          <h2 className={styles.massiveLogo}>KSM</h2>
        </div>
      </div>
    </footer>
  );
}
