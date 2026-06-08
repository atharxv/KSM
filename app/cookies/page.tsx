import type { Metadata } from 'next';
import styles from './cookies.module.css';
import ManageButton from './ManageButton';

export const metadata: Metadata = {
  title: 'Cookie Policy — KSM Atelier',
  description: 'How KSM Atelier uses cookies and tracking technologies to improve your experience.',
};

export default function CookiePolicyPage() {
  return (
    <div className={styles.page}>
      <header>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.pageTitle}>Cookie Policy</h1>
        <p className={styles.lastUpdated}>Last updated: June 7, 2026</p>
        <p className={styles.sectionBody} style={{ marginBottom: '40px', marginTop: '20px' }}>
          This Cookie Policy explains what cookies are, how KSM Atelier ("we", "our", or "us") uses them on our website (ksmatelier.com), and your rights to control their use. This policy is designed to comply with the General Data Protection Regulation (GDPR), the ePrivacy Directive, and the guidelines of the Italian Data Protection Authority (Garante per la protezione dei dati personali).
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. What Are Cookies?</h2>
        <div className={styles.sectionBody}>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information and personalized experiences.
          </p>
          <p style={{ marginTop: '1rem' }}>
            Cookies set by the website owner (in this case, KSM Atelier) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., advertising, interactive content, and analytics).
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Why We Use Cookies</h2>
        <div className={styles.sectionBody}>
          <p>We use first-party and third-party cookies for several reasons:</p>
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
            <li>To enable essential ecommerce functionality, such as maintaining your shopping cart securely.</li>
            <li>To understand how you interact with our website, allowing us to improve navigation and design.</li>
            <li>To remember your preferences, such as language or location settings.</li>
            <li>To deliver relevant advertising and marketing campaigns tailored to your interests.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Categories of Cookies We Use</h2>
        <div className={styles.sectionBody}>
          <p style={{ marginBottom: '24px' }}>
            The cookies used on our site are categorized based on their purpose and regulatory requirements. Below is a detailed breakdown of each category.
          </p>
        </div>

        <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem', marginTop: '2rem' }}>
          3.1 Strictly Necessary Cookies
          <span className={styles.essentialBadge}>Required</span>
        </h3>
        <p className={styles.sectionBody} style={{ marginBottom: '24px' }}>
          <strong>Purpose:</strong> These cookies are essential for the website to function properly. They enable basic functions like page navigation, accessing secure areas (like your account), and adding items to your shopping cart.<br />
          <strong>Data Collected:</strong> Session identifiers, cart contents, and authentication tokens.<br />
          <strong>Consent Requirement:</strong> No consent is required for these cookies under the GDPR as they are strictly necessary to provide the service you requested.<br />
          <strong>Retention:</strong> Typically session-based or up to 1 year.
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
                <td>cart</td>
                <td>Shopify</td>
                <td>Stores shopping cart contents securely</td>
                <td>14 days</td>
              </tr>
              <tr>
                <td>secure_customer_sig</td>
                <td>Shopify</td>
                <td>Customer login session tracking</td>
                <td>1 year</td>
              </tr>
              <tr>
                <td>ksm-cookie-consent</td>
                <td>KSM Atelier</td>
                <td>Stores your cookie consent preferences</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem', marginTop: '2rem' }}>
          3.2 Functional Cookies
        </h3>
        <p className={styles.sectionBody} style={{ marginBottom: '24px' }}>
          <strong>Purpose:</strong> These cookies allow the website to remember choices you make (such as your user name, language, or region) and provide enhanced, more personal features.<br />
          <strong>Data Collected:</strong> User preferences and customized UI settings.<br />
          <strong>Consent Requirement:</strong> Consent is required before these cookies are placed.<br />
          <strong>Retention:</strong> Up to 1 year.
        </p>

        <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem', marginTop: '2rem' }}>
          3.3 Analytics Cookies
        </h3>
        <p className={styles.sectionBody} style={{ marginBottom: '24px' }}>
          <strong>Purpose:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve the site’s performance.<br />
          <strong>Data Collected:</strong> Pages visited, time on site, clicks, and anonymized IP addresses.<br />
          <strong>Consent Requirement:</strong> Explicit consent is required before placement.<br />
          <strong>Retention:</strong> Ranges from session duration up to 2 years.
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
                <td>_shopify_y</td>
                <td>Shopify</td>
                <td>Analytics and reporting</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem', marginTop: '2rem' }}>
          3.4 Advertising and Marketing Cookies
        </h3>
        <p className={styles.sectionBody} style={{ marginBottom: '24px' }}>
          <strong>Purpose:</strong> These cookies are used to track visitors across websites to display ads that are relevant and engaging for the individual user.<br />
          <strong>Data Collected:</strong> Browsing habits, ad interactions, and demographic estimations.<br />
          <strong>Consent Requirement:</strong> Explicit consent is strictly required.<br />
          <strong>Retention:</strong> Up to 1 year.
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
                <td>IDE</td>
                <td>Google</td>
                <td>Used by Google DoubleClick for ads</td>
                <td>1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem', marginTop: '2rem' }}>
          3.5 Social Media and Third-Party Cookies
        </h3>
        <p className={styles.sectionBody} style={{ marginBottom: '24px' }}>
          <strong>Purpose:</strong> Set by social media services (e.g., Instagram) that we have added to the site to enable you to share our content. They are capable of tracking your browser across other sites.<br />
          <strong>Consent Requirement:</strong> Explicit consent is required.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Third-Party Providers</h2>
        <div className={styles.sectionBody}>
          <p>We partner with selected third parties who may place cookies on your device:</p>
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
            <li><strong>Shopify:</strong> Provides our ecommerce platform infrastructure, handling carts, checkout, and storefront analytics.</li>
            <li><strong>Google Analytics:</strong> Provides statistical analysis of website traffic to help us optimize user experience.</li>
            <li><strong>Meta (Facebook/Instagram):</strong> Used for retargeting campaigns and measuring the effectiveness of our social media advertisements.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. How to Manage and Withdraw Consent</h2>
        <div className={styles.sectionBody}>
          <p>
            <strong>Cookie Consent Banner:</strong> When you first visit our site, you will be presented with a cookie banner allowing you to accept all cookies, reject non-essential cookies, or customize your preferences. 
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Modifying Preferences:</strong> You can change your preferences or withdraw your consent at any time by clicking the "Manage Preferences" button below. This will reopen the consent interface.
          </p>
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <ManageButton />
          </div>
          <p style={{ marginTop: '1rem' }}>
            <strong>Browser Settings:</strong> You can also set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website, such as the checkout process, may become inaccessible or not function properly. To learn how to manage cookies on popular browsers, visit the browser developer's help pages.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Your GDPR Rights</h2>
        <div className={styles.sectionBody}>
          <p>
            Under the GDPR and Italian data protection laws, you have rights relating to your personal data, including data collected via cookies. These include the right to access, rectify, or erase your data, and the right to restrict or object to processing. 
          </p>
          <p style={{ marginTop: '1rem' }}>
            For more details on your rights and how we process personal data beyond cookies, please review our <a href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. Contact Us</h2>
        <p className={styles.sectionBody}>
          If you have any questions about our use of cookies or other technologies, please email us at:<br /><br />
          <strong>Email:</strong> Info@ksmatelier.com<br />
          <strong>Address:</strong> KSM Atelier, Via Stefano Viale 50A, Roccasparvera 12010 (CN), Italy
        </p>
      </section>
    </div>
  );
}
