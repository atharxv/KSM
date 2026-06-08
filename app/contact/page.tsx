import type { Metadata } from 'next';
import styles from './contact.module.css';

export const metadata: Metadata = {
  title: 'Contact Us — KSM Atelier',
  description: 'Get in touch with KSM Atelier customer care. We are here to assist with your orders, sizing, and any other enquiries.',
};

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <header>
        <h1 className={styles.pageTitle}>Contact Us</h1>
        <p className={styles.intro}>
          Our dedicated Customer Care team is here to provide personalized assistance with your styling needs, order tracking, and any other enquiries. Please browse our <a href="/faq">Frequently Asked Questions</a> before reaching out, as your answer may already be available.
        </p>
      </header>

      <div className={styles.layoutGrid}>
        
        {/* Left Column: Form */}
        <div>
          <div className={styles.formContainer}>
            <form action="#" method="POST">
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" name="name" className={styles.input} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email Address</label>
                <input type="email" id="email" name="email" className={styles.input} required />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Enquiry Type</label>
                <select id="subject" name="subject" className={styles.select} required>
                  <option value="">Select a topic...</option>
                  <option value="order">Order Tracking & Updates</option>
                  <option value="shipping">Shipping Information</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="product">Product & Sizing Advice</option>
                  <option value="partnerships">Partnerships & Press</option>
                  <option value="other">General Enquiry</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="orderNumber" className={styles.label}>Order Number (Optional)</label>
                <input type="text" id="orderNumber" name="orderNumber" className={styles.input} placeholder="#KSM-" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea id="message" name="message" className={styles.textarea} required></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Right Column: Information */}
        <div className={styles.infoContainer}>
          
          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Email Support</h3>
            <p className={styles.infoText}>
              For all general enquiries, please reach out to our support team at:<br />
              <a href="mailto:Info@ksmatelier.com">Info@ksmatelier.com</a>
            </p>
            <p className={styles.infoText} style={{ marginTop: '12px' }}>
              <em>Expected Response Time:</em> We aim to reply to all emails within 24 hours during standard business days. During peak collection launches, please allow up to 48 hours.
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Operating Hours</h3>
            <p className={styles.infoText}>
              Monday – Friday<br />
              9:00 AM – 6:00 PM (Central European Time)
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Social & Live Support</h3>
            <p className={styles.infoText}>
              Connect with us on Instagram for styling inspiration and direct messaging support. For immediate assistance during business hours, direct messages are often the fastest channel.<br />
              <a href="https://www.instagram.com/ksm.atelier?igsh=YXE3Z3hiYWlja3Ns" target="_blank" rel="noopener noreferrer">@ksm.atelier</a>
            </p>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoTitle}>Business Headquarters</h3>
            <p className={styles.infoText}>
              KSM Atelier<br />
              Via Stefano Viale 50A<br />
              Roccasparvera 12010 (CN), Italy
            </p>
            <p className={styles.infoText} style={{ marginTop: '8px', fontSize: '12px' }}>
              <em>*Please note: This address is our corporate headquarters. We do not accept unsolicited returns to this location. Please initiate a return via email to receive the correct fulfillment center address.</em>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
