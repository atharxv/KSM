import type { Metadata } from 'next';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — KSM Atelier',
  description: 'How KSM Atelier collects, uses, and protects your personal data in accordance with the GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <header>
        <p className={styles.eyebrow}>Legal</p>
        <h1 className={styles.pageTitle}>Privacy Policy</h1>
        <p className={styles.lastUpdated}>Last updated: June 7, 2026</p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Introduction and Who We Are</h2>
        <div className={styles.sectionBody}>
          <p>
            Welcome to KSM Atelier ("we", "our", or "us"). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website (ksmatelier.com), purchase our luxury garments, or interact with us.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Data Controller:</strong><br />
            KSM Atelier<br />
            Via Stefano Viale 50A, Roccasparvera 12010 (CN), Italy<br />
            Email: Info@ksmatelier.com
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. The Personal Data We Collect</h2>
        <div className={styles.sectionBody}>
          <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
            <li><strong>Identity Data:</strong> First name, last name, and title (if provided during account creation or checkout).</li>
            <li><strong>Contact Data:</strong> Billing address, delivery address, email address, and telephone numbers.</li>
            <li><strong>Financial Data:</strong> Payment card details. <em>Note: We do not store your credit card information. All transactions are securely processed by our payment gateway, Shopify Payments.</em></li>
            <li><strong>Transaction Data:</strong> Details about payments to and from you, and other details of products you have purchased from us.</li>
            <li><strong>Technical Data:</strong> Internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system, and platform.</li>
            <li><strong>Profile Data:</strong> Your email and password (if you create an account), purchases or orders made by you, preferences, and feedback.</li>
            <li><strong>Marketing and Communications Data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. How We Collect Your Data</h2>
        <div className={styles.sectionBody}>
          <p>We use different methods to collect data from and about you, including:</p>
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
            <li><strong>Direct Interactions:</strong> You may give us your Identity, Contact, and Financial Data by filling in forms or corresponding with us by post, phone, email, or otherwise. This includes when you purchase our products, create an account, subscribe to our newsletter, or request support.</li>
            <li><strong>Automated Technologies:</strong> As you interact with our website, we automatically collect Technical Data about your equipment, browsing actions, and patterns using cookies and similar technologies.</li>
            <li><strong>Third Parties:</strong> We may receive personal data about you from analytics providers, advertising networks, and payment processors.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. How and Why We Process Your Data</h2>
        <div className={styles.sectionBody}>
          <p>Under the General Data Protection Regulation (GDPR), we must have a lawful basis to process your personal data. We use your data in the following ways:</p>
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
            <li><strong>To fulfil a contract:</strong> Processing your order, managing payments, and arranging shipping and delivery.</li>
            <li><strong>Legitimate interests:</strong> Studying how customers use our products/services, developing our business, and informing our marketing strategy.</li>
            <li><strong>Legal obligation:</strong> Retaining records for tax and accounting purposes.</li>
            <li><strong>Consent:</strong> Sending you direct marketing communications via email. You have the right to withdraw consent at any time.</li>
          </ul>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Cookies and Tracking Technologies</h2>
        <div className={styles.sectionBody}>
          <p>
            We use cookies to distinguish you from other users of our website, providing a seamless luxury shopping experience. This includes essential cookies for shopping cart functionality, as well as analytics cookies to help us improve our site. You can set your browser to refuse all or some browser cookies, or manage your preferences via our cookie consent banner.
          </p>
          <p style={{ marginTop: '1rem' }}>For more detailed information, please see our <a href="/cookies" style={{ textDecoration: 'underline' }}>Cookie Policy</a>.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Third-Party Service Providers</h2>
        <div className={styles.sectionBody}>
          <p>To provide our services, we may share your personal data with trusted third parties, including:</p>
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
            <li><strong>Shopify:</strong> Powers our online store and processes payments securely.</li>
            <li><strong>Logistics Partners:</strong> International and domestic couriers (e.g., DHL, FedEx) to deliver your garments.</li>
            <li><strong>Marketing Platforms:</strong> Email service providers to deliver our newsletters, subject to your consent.</li>
            <li><strong>Analytics Providers:</strong> Such as Google Analytics, to help us understand website traffic.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>We require all third parties to respect the security of your personal data and treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>7. International Data Transfers</h2>
        <div className={styles.sectionBody}>
          <p>
            As a global luxury brand, we may share your personal data within our corporate group or with external third parties based outside the European Economic Area (EEA). Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring appropriate safeguards are implemented, such as utilizing the European Commission's Standard Contractual Clauses.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>8. Data Retention</h2>
        <div className={styles.sectionBody}>
          <p>
            We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. By default, order and transaction data is securely stored for up to 10 years to comply with Italian and EU tax legislation.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>9. Your Rights Under the GDPR</h2>
        <div className={styles.sectionBody}>
          <p>If you are a resident of the European Union, you have the following rights regarding your personal data:</p>
          <ul style={{ paddingLeft: '1.2rem', listStyleType: 'disc', marginTop: '8px', marginBottom: '8px' }}>
            <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Right to Rectification:</strong> Request correction of incomplete or inaccurate data.</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data when there is no good reason for us to continue processing it.</li>
            <li><strong>Right to Object:</strong> Object to processing where we are relying on a legitimate interest or for direct marketing purposes.</li>
            <li><strong>Right to Restriction:</strong> Request the suspension of processing of your personal data.</li>
            <li><strong>Right to Portability:</strong> Request the transfer of your personal data to you or a third party.</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where we are relying on consent to process your data.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            To exercise any of these rights, please email us at <a href="mailto:Info@ksmatelier.com" style={{ textDecoration: 'underline' }}>Info@ksmatelier.com</a>. We try to respond to all legitimate requests within one month.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>10. Contact Us</h2>
        <p className={styles.sectionBody}>
          If you have any questions about this Privacy Policy or our privacy practices, please contact our Data Protection Officer at:<br /><br />
          <strong>Email:</strong> Info@ksmatelier.com<br />
          <strong>Postal Address:</strong> KSM Atelier, Via Stefano Viale 50A, Roccasparvera 12010 (CN), Italy<br />
          <br />
          You have the right to make a complaint at any time to the Garante per la protezione dei dati personali (the Italian Data Protection Authority) or your local supervisory authority. We would, however, appreciate the chance to deal with your concerns before you approach the authority.
        </p>
      </section>
    </div>
  );
}
