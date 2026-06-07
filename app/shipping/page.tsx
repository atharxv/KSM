import type { Metadata } from 'next';
import styles from './shipping.module.css';

export const metadata: Metadata = {
  title: 'Shipping Information — KSM Atelier',
  description: 'Details regarding KSM Atelier order processing, international shipping, delivery timelines, and customs duties.',
};

export default function ShippingPage() {
  return (
    <div className={styles.page}>
      <header>
        <h1 className={styles.pageTitle}>Shipping & Delivery</h1>
        <p className={styles.intro}>
          KSM Atelier provides a seamless global delivery experience. We partner with the world's most trusted luxury logistics providers to ensure your garments arrive swiftly and securely.
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>1. Order Processing</h2>
        
        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>Processing Timelines</h3>
          <p className={styles.text}>
            All orders placed through ksmatelier.com are processed and dispatched from our European fulfillment facilities within 1 to 2 business days. Orders placed on weekends or European public holidays will be processed on the following business day.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>Made-to-Measure & Atelier</h3>
          <p className={styles.text}>
            Garments purchased from our bespoke Atelier collection require additional lead time due to the meticulous craftsmanship involved. Please refer to the specific product page for estimated tailoring and dispatch timelines.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>2. Shipping Regions & Delivery Times</h2>
        
        <div className={styles.contentBlock}>
          <p className={styles.text} style={{ marginBottom: '16px' }}>
            We ship worldwide using express courier services (DHL, FedEx). Once dispatched, estimated delivery timelines and costs are as follows:
          </p>
          
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Destination</th>
                  <th>Service Level</th>
                  <th>Estimated Delivery</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Italy & European Union</td>
                  <td>Express Courier</td>
                  <td>1 - 3 Business Days</td>
                  <td>Complimentary on orders over €300</td>
                </tr>
                <tr>
                  <td>United Kingdom</td>
                  <td>Express International</td>
                  <td>2 - 4 Business Days</td>
                  <td>Calculated at checkout</td>
                </tr>
                <tr>
                  <td>United States & Canada</td>
                  <td>Express International</td>
                  <td>3 - 5 Business Days</td>
                  <td>Calculated at checkout</td>
                </tr>
                <tr>
                  <td>Rest of World</td>
                  <td>Express International</td>
                  <td>4 - 7 Business Days</td>
                  <td>Calculated at checkout</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className={styles.text}>
            <em>Note: Delivery times are estimates provided by our shipping partners and commence from the date of dispatch, rather than the date of order.</em>
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>3. Customs, Duties, & Taxes</h2>
        
        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>European Union</h3>
          <p className={styles.text}>
            For orders delivered within the EU, Value Added Tax (VAT) is calculated and included in the final checkout price. No additional customs duties will be charged upon delivery.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>International Destinations</h3>
          <p className={styles.text}>
            Orders shipped outside the European Union are dispatched on a Delivery Duty Unpaid (DDU) basis. This means the final price at checkout does not include any import duties, customs taxes, or local clearance fees. 
          </p>
          <p className={styles.text} style={{ marginTop: '12px' }}>
            As the recipient, you are liable for all import duties, customs, and local sales taxes levied by the destination country. Payment of these is necessary to release your order from customs upon arrival. We cannot estimate these exact charges, so we recommend contacting your local customs office for current rates before ordering.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>4. Tracking Your Order</h2>
        
        <div className={styles.contentBlock}>
          <p className={styles.text}>
            Once your order has been dispatched, you will receive an email confirmation containing your shipping details and a tracking number. You can use this link to monitor the progress of your delivery in real-time. If you have registered a KSM Atelier account, you can also view your order status by logging into your dashboard.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>5. Delivery Issues & Delays</h2>
        
        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>Unforeseen Delays</h3>
          <p className={styles.text}>
            While we strive to ensure prompt delivery, external factors such as extreme weather conditions, customs delays, or courier disruptions may occasionally extend delivery times. We appreciate your patience in these rare circumstances.
          </p>
        </div>

        <div className={styles.contentBlock}>
          <h3 className={styles.subHeading}>Lost or Damaged Packages</h3>
          <p className={styles.text}>
            Every KSM Atelier shipment is fully insured until it is signed for at the delivery address. If your package arrives damaged, or if tracking indicates it has been delivered but you have not received it, please contact us immediately. We require all delivery disputes to be reported within 48 hours of the delivery date.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>6. Contact Support</h2>
        <p className={styles.text}>
          If you have any further questions regarding shipping, tracking, or delivery, our dedicated Customer Care team is ready to assist you.<br /><br />
          <strong>Email:</strong> <a href="mailto:support@ksmatelier.com">support@ksmatelier.com</a><br />
          <strong>Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM (CET)
        </p>
      </section>
    </div>
  );
}
