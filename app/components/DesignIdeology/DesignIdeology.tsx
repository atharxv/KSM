import styles from './DesignIdeology.module.css';

export default function DesignIdeology() {
  return (
    <section className={styles.section} id="design-ideology" aria-label="Design Philosophy">
      {/* Left: Runway Photo */}
      <div className={styles.imageBlock}>
        <img
          src="/images/paul anthony kelly.jpeg"
          alt="Fashion editorial"
          className={styles.image}
          loading="lazy"
        />
      </div>

      {/* Right: Quote */}
      <div className={styles.quoteBlock}>
        <blockquote className={styles.quote}>
          <p>
            &ldquo;This collection is designed to evoke the unmistakable presence
            of legacy and heritage.&rdquo; An exercise in unrivaled distinction, each
            piece is masterfully tailored from the world&apos;s most exclusive materials.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
