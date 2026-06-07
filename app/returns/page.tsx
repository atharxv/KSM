import type { Metadata } from 'next';
import styles from './returns.module.css';

export const metadata: Metadata = {
  title: 'Returns & Exchanges — KSM Atelier',
  description: 'Learn about KSM Atelier’s 14-day return and exchange policy, eligibility requirements, and the simple step-by-step return process.',
};

export default function ReturnsPage() {
  return (
    <div className={styles.page}>
      <header>
        <h1 className={styles.pageTitle}>Returns & Exchanges</h1>
        <p className={styles.intro}>
          We want you to be completely satisfied with your KSM Atelier purchase. If a garment does not meet your expectations, we offer a straightforward returns and exchange process within 14 days of delivery.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>The Return Process</h2>
        
        <div className={styles.processGrid}>
          <div className={styles.processCard}>
            <div className={styles.processStep}>1</div>
            <h3 className={styles.processTitle}>Request Return</h3>
            <p className={styles.processText}>
              Email our support team with your order number and the reason for your return.
            </p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processStep}>2</div>
            <h3 className={styles.processTitle}>Pack Your Item</h3>
            <p className={styles.processText}>
              Place the garment back into its original KSM packaging, ensuring all tags remain attached.
            </p>
          </div>
          <div className={styles.processCard}>
            <div className={styles.processStep}>3</div>
            <h3 className={styles.processTitle}>Ship & Refund</h3>
            <p className={styles.processText}>
              Drop off the package using the provided shipping label. Once inspected, your refund will be issued.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Return Eligibility & Conditions</h2>
        
        <div className={styles.contentBlock}>
          <p className={styles.text}>
            To be eligible for a return or exchange, your item must meet the following strict conditions:
          </p>
          <ul style={{ paddingLeft: '20px', marginTop: '12px', listStyleType: 'disc' }} className={styles.text}>
            <li>The return must be requested and dispatched within <strong>14 days</strong> of the original delivery date.</li>
            <li>The garment must be unworn, unwashed, and entirely free of any signs of wear, fragrance, or makeup.</li>
            <li>All original KSM Atelier tags, care labels, and authenticity cards must remain attached to the garment.</li>
            <li>The item must be returned in its original luxury packaging to prevent damage during transit.</li>
          </ul>
        </div>

        <div className={styles.callout}>
          <p className={styles.calloutText}>
            <strong>Non-Returnable Items:</strong> Please note that all customized, altered, or made-to-measure garments from the <em>Atelier Collection</em> are final sale and cannot be returned or exchanged due to their bespoke nature.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Refunds & Processing</h2>
        
        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>Quality Inspection</h3>
          <p className={styles.text}>
            Upon receiving your return at our facility, our quality control team will inspect the garment to ensure it meets our eligibility criteria. This process typically takes 2 to 3 business days.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>Refund Timelines</h3>
          <p className={styles.text}>
            If the return is approved, a refund will be issued to your original method of payment. Please allow 5 to 7 business days for the funds to appear in your account, depending on your bank's processing times. Original shipping costs are non-refundable.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Shipping Costs & International Returns</h2>
        
        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>European Union</h3>
          <p className={styles.text}>
            We offer complimentary return shipping for all orders delivered within the EU. A prepaid DHL/FedEx return label will be provided to you by our customer care team upon requesting the return.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>International Returns</h3>
          <p className={styles.text}>
            For international orders outside the EU, the customer is responsible for the cost of return shipping. We strongly recommend using a trackable and insured courier service, as we cannot be held liable for return packages lost in transit. Furthermore, any original customs duties and import taxes paid upon delivery are strictly non-refundable by KSM Atelier.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Damaged or Incorrect Items</h2>
        
        <div className={styles.contentBlock}>
          <p className={styles.text}>
            Our garments undergo rigorous quality control prior to dispatch. However, if you receive a damaged, defective, or incorrect item, please contact us within 48 hours of delivery. Include your order number and detailed photographs of the issue. We will arrange a complimentary expedited replacement or full refund immediately.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Need Assistance?</h2>
        <p className={styles.text}>
          To initiate a return or exchange, or if you have any questions regarding our policy, please reach out to our Customer Care team:<br /><br />
          <strong>Email:</strong> <a href="mailto:support@ksmatelier.com">support@ksmatelier.com</a><br />
          <strong>Include:</strong> Your Order Number (#KSM-...)
        </p>
      </section>
    </div>
  );
}
