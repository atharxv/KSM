import styles from './DesignIdeology.module.css';

export default function DesignIdeology() {
  return (
    <section className={styles.section} id="design-ideology" aria-label="Design Philosophy">
      {/* Left: Runway Photo */}
      <div className={styles.imageBlock}>
        <img
          src="/images/Boatpolo.jpeg"
          alt="Man in polo shirt"
          className={styles.image}
          loading="lazy"
        />
      </div>

      {/* Right: Quote */}
      <div className={styles.quoteBlock}>
        <blockquote className={styles.quote}>
          <p>
            &ldquo;This collection is designed to evoke the sense of having the
            holiday of a lifetime.&rdquo; An exercise in luxurious simplicity, each
            design is cut to maximise the relaxed drape of silks and satins
          </p>
        </blockquote>
      </div>
    </section>
  );
}
