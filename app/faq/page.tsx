import type { Metadata } from 'next';
import styles from './faq.module.css';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions — KSM Atelier',
  description: 'Find answers to common questions about orders, shipping, returns, and KSM Atelier products.',
};

export default function FAQPage() {
  return (
    <div className={styles.page}>
      <header>
        <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
        <p className={styles.intro}>
          Find answers to commonly asked questions about our luxury garments, shipping, returns, and more. If you can't find what you're looking for, our customer care team is here to assist.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Orders & Payments</h2>
        
        <div className={styles.faqItem}>
          <h3 className={styles.question}>What payment methods do you accept?</h3>
          <p className={styles.answer}>
            We accept all major credit cards (Visa, Mastercard, American Express), Apple Pay, Google Pay, and selected local payment methods securely processed via Shopify Payments.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>Can I modify or cancel my order?</h3>
          <p className={styles.answer}>
            We process orders very quickly to ensure prompt delivery. If you need to modify or cancel your order, please contact us at <a href="mailto:Info@ksmatelier.com">Info@ksmatelier.com</a> within 1 hour of placing it. Once an order is dispatched, it cannot be modified.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>How do I track my order?</h3>
          <p className={styles.answer}>
            Once your order has been dispatched from our facility, you will receive a shipping confirmation email containing a tracking number and a link to monitor your delivery status in real-time.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shipping & Delivery</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>Where do you ship?</h3>
          <p className={styles.answer}>
            KSM Atelier provides worldwide shipping via trusted luxury courier partners (DHL, FedEx). 
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>How long does shipping take?</h3>
          <p className={styles.answer}>
            Orders are typically processed within 1-2 business days. Express shipping throughout Italy takes 24–48 hours, while delivery to the islands may take up to 5 business days.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>Will I be charged customs duties or taxes?</h3>
          <p className={styles.answer}>
            For orders shipped within the European Union, VAT is included in the final price. For international orders outside the EU, shipments may be subject to import duties and taxes upon arrival. These charges are the responsibility of the recipient.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Returns & Exchanges</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>What is your return policy?</h3>
          <p className={styles.answer}>
            We accept returns within 14 days of delivery. Please use the standard Italy return policy with maximum seller protection. Custom or made-to-measure pieces from the Atelier collection are final sale and cannot be returned.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>How do I initiate a return or exchange?</h3>
          <p className={styles.answer}>
            To start a return or exchange, please email <a href="mailto:Info@ksmatelier.com">Info@ksmatelier.com</a> with your order number and the reason for the return. Our team will provide you with a prepaid return label and instructions.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>When will I receive my refund?</h3>
          <p className={styles.answer}>
            Once our quality control team receives and inspects the returned item, a refund will be issued to your original payment method within 5-7 business days.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Product & Atelier</h2>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>How do I know my size?</h3>
          <p className={styles.answer}>
            Our garments follow luxury European sizing. You can find a detailed size guide and specific garment measurements on every product page. If you need personalized sizing advice, please reach out to our support team.
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>Where are your garments manufactured?</h3>
          <p className={styles.answer}>
            KSM Atelier garments are crafted with meticulous attention to detail using premium textiles sourced from renowned mills across Europe, including Como (Italy), Normandy (France), and Porto (Portugal).
          </p>
        </div>

        <div className={styles.faqItem}>
          <h3 className={styles.question}>How should I care for my KSM pieces?</h3>
          <p className={styles.answer}>
            To maintain the exceptional quality of our fabrics, we strictly recommend professional dry cleaning for tailored garments, heavy outerwear, and delicate knits. Please refer to the specific care label stitched inside each garment for detailed instructions.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Still Need Help?</h2>
        <p className={styles.answer}>
          Our dedicated Customer Care team is available to assist you with styling advice, order inquiries, or any other questions you may have.<br /><br />
          <strong>Email:</strong> <a href="mailto:Info@ksmatelier.com">Info@ksmatelier.com</a><br />
          <strong>Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM (CET)
        </p>
      </section>
    </div>
  );
}
