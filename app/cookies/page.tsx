import styles from './cookies.module.css';
import ManageButton from './ManageButton';

export const metadata = {
  title: 'Cookie Policy — KSM Atelier',
  description: 'A full list of cookies used by KSM Atelier and how to manage them.',
};

export default function CookiePolicyPage() {
  return (
    <div className={styles.page}>
      {/* Page header */}
      <header>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.pageTitle}>Cookie Policy</h1>
        <p className={styles.lastUpdated}>Last updated: May 18, 2026</p>
        <p className={styles.sectionBody} style={{ marginBottom: '40px' }}>
          This Cookie Policy explains what cookies are and how KSM Atelier uses them on our website. 
          We use cookies to ensure our site functions properly, to understand how you interact with our content, 
          and to deliver relevant advertising.
        </p>
      </header>

      {/* CATEGORY 1 — ESSENTIAL COOKIES */}
      <section className={styles.section}>
        <h2 className={styles.categoryLabel}>Category 1</h2>
        <h3 className={styles.sectionTitle}>
          Essential Cookies
          <span className={styles.essentialBadge}>Required</span>
        </h3>
        <p className={styles.sectionBody} style={{ marginBottom: '24px' }}>
          These are required for the site to function. Cannot be disabled.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_shopify_y</td>
                <td>Shopify</td>
                <td>Analytics and reporting</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td>_shopify_s</td>
                <td>Shopify</td>
                <td>Session tracking</td>
                <td>30 mins</td>
              </tr>
              <tr>
                <td>_shopify_tm</td>
                <td>Shopify</td>
                <td>Traffic source tracking</td>
                <td>30 mins</td>
              </tr>
              <tr>
                <td>cart</td>
                <td>Shopify</td>
                <td>Stores shopping cart contents</td>
                <td>Session</td>
              </tr>
              <tr>
                <td>secure_customer</td>
                <td>Shopify</td>
                <td>Customer login session</td>
                <td>Session</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CATEGORY 2 — ANALYTICS COOKIES */}
      <section className={styles.section}>
        <h2 className={styles.categoryLabel}>Category 2</h2>
        <h3 className={styles.sectionTitle}>Analytics Cookies</h3>
        <p className={styles.sectionBody} style={{ marginBottom: '24px' }}>
          These help us understand how visitors use the site. Only set with your consent.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ga</td>
                <td>Google Analytics</td>
                <td>Distinguishes unique users</td>
                <td>2 years</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Google Analytics</td>
                <td>Distinguishes users (24hr)</td>
                <td>24 hrs</td>
              </tr>
              <tr>
                <td>_gat</td>
                <td>Google Analytics</td>
                <td>Throttles request rate</td>
                <td>1 min</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* CATEGORY 3 — MARKETING COOKIES */}
      <section className={styles.section}>
        <h2 className={styles.categoryLabel}>Category 3</h2>
        <h3 className={styles.sectionTitle}>Marketing Cookies</h3>
        <p className={styles.sectionBody} style={{ marginBottom: '24px' }}>
          Used to deliver relevant advertising. Only set with your consent.
        </p>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Provider</th>
                <th>Purpose</th>
                <th>Expiry</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_fbp</td>
                <td>Meta</td>
                <td>Tracks visits for Facebook Ads</td>
                <td>3 months</td>
              </tr>
              <tr>
                <td>_fbc</td>
                <td>Meta</td>
                <td>Stores ad click information</td>
                <td>3 months</td>
              </tr>
              <tr>
                <td>IDE</td>
                <td>Google</td>
                <td>Used by Google DoubleClick for ads</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* MANAGE PREFERENCES SECTION */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Managing Your Preferences</h2>
        <p className={styles.sectionBody}>
          You can update your cookie preferences at any time by clicking the button below. Essential cookies cannot be disabled as they are required for the site to function.
        </p>
        <ManageButton />
      </section>
    </div>
  );
}
