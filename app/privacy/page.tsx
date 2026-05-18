import type { Metadata } from 'next';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — KSM Atelier',
  description: 'How KSM Atelier collects, uses, and protects your personal data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      {/* 1. Page header */}
      <header>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.pageTitle}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: May 18, 2026</p>
      </header>

      {/* 2. Sections */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Who We Are</h2>
        <p className={styles.sectionBody}>
          KSM Atelier is a luxury fashion brand operating at [your business address]. We are the data controller for personal data collected through this website. Contact: <a href="mailto:privacy@ksmatelier.com">privacy@ksmatelier.com</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>What Data We Collect</h2>
        <div className={styles.sectionBody}>
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc' }}>
            <li>Name, email, and shipping address when you place an order</li>
            <li>Browsing behaviour and pages visited (analytics cookies)</li>
            <li>Device type, browser, and IP address</li>
            <li>Payment information (processed securely by Shopify — we never store card details)</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>How We Use Your Data</h2>
        <div className={styles.sectionBody}>
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc' }}>
            <li>To process and fulfil your orders</li>
            <li>To send order confirmations and shipping updates</li>
            <li>To improve our website and product offerings</li>
            <li>To send marketing emails (only with your consent)</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Cookies</h2>
        <p className={styles.sectionBody}>
          We use essential, analytics, and marketing cookies. You can manage your preferences at any time via our cookie consent banner. See our full Cookie Policy at <a href="/cookies">/cookies</a> for details.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Third Parties</h2>
        <div className={styles.sectionBody}>
          We share data with the following third parties:
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
            <li>Shopify (order processing and payments)</li>
            <li>Shipping carriers (order fulfilment)</li>
            <li>Analytics providers (with your consent only)</li>
          </ul>
          We never sell your personal data.
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Data Retention</h2>
        <p className={styles.sectionBody}>
          We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Order data is retained for 7 years for accounting purposes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Your Rights</h2>
        <div className={styles.sectionBody}>
          Under GDPR you have the right to:
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing</li>
            <li>Data portability</li>
          </ul>
          To exercise any of these rights, contact us at <a href="mailto:privacy@ksmatelier.com">privacy@ksmatelier.com</a>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contact Us</h2>
        <p className={styles.sectionBody}>
          KSM Atelier<br />
          [Business Address]<br />
          <a href="mailto:privacy@ksmatelier.com">privacy@ksmatelier.com</a>
        </p>
      </section>
    </div>
  );
}
