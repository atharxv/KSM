'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, {
    once: true,
    margin: "0px 0px -80px 0px"
  });

  return (
    <footer className={styles.footer} id="site-footer" ref={footerRef}>
      <div className={styles.gridContainer}>
        {/* Row 1: Columns */}
        <motion.div
          className={styles.linkColumn}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0 * 0.08 }}
        >
          <a href="/products" className={styles.link}>Shop All</a>
          <a href="/atelier" className={styles.link}>Atelier</a>
        </motion.div>

        <motion.div
          className={styles.linkColumn}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 1 * 0.08 }}
        >
          <a
            href="https://www.instagram.com/ksm.atelier?igsh=YXE3Z3hiYWlja3Ns"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </motion.div>

        <motion.div
          className={styles.linkColumn}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 2 * 0.08 }}
        >
          <p className={styles.contactInfo}>
            Crafted by <a href="https://www.luxury-method.com/" target="_blank" rel="noopener noreferrer" className={styles.link} style={{ display: 'inline', padding: 0 }}>Luxury Method</a>
          </p>
        </motion.div>

        <motion.div
          className={styles.linkColumn}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 3 * 0.08 }}
        >
          <span className={styles.columnEyebrow}>Customer Care</span>
          <a href="/contact" className={styles.link}>Contact Us</a>
          <a href="/shipping" className={styles.link}>Shipping</a>
          <a href="/returns" className={styles.link}>Returns</a>
          <a href="/faq" className={styles.link}>FAQ</a>
          <a href="/privacy" className={styles.link}>Privacy Policy</a>
          <a href="/cookies" className={styles.link}>Cookie Policy</a>
        </motion.div>
      </div>

      <div className={styles.bottomGrid}>
        <motion.div
          className={styles.copyrightCell}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 4 * 0.08 }}
        >
          <div className={styles.scriptLogoContainer}>
            <img 
              src="/images/ksm-script-logo.png" 
              alt="KSM Logo" 
              className={styles.copyrightLogoImg} 
              loading="lazy" 
            />
            <sup className={styles.scriptLogoReg}>&reg;</sup>
          </div>
          <p className={styles.copyrightText}>&copy; KSM&reg; 2026</p>
        </motion.div>
        <motion.div
          className={styles.logoCell}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 5 * 0.08 }}
        >
          <div className={styles.cellBackground}>
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
              alt=""
              className={styles.cellImage}
              loading="lazy"
              decoding="async"
              width="800"
              height="800"
            />
            <div className={styles.cellOverlay} />
          </div>
          <img src="/images/ksm-script-logo.png" alt="KSM Logo" className={styles.massiveLogoImg} />
        </motion.div>
      </div>
    </footer>
  );
}
