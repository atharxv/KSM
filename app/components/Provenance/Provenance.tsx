'use client';

import { motion } from 'framer-motion';
import styles from './Provenance.module.css';

export default function Provenance() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.section} aria-label="The Provenance">
      <motion.div 
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className={styles.eyebrow}>The Provenance</span>
        <h2 className={styles.headline}>Crafted in Italy.<br />Worn Everywhere.</h2>
        <p className={styles.body}>
          Every piece begins in a small atelier in Piedmont, where pattern, cloth, and hand meet — far from mass production, close to mastery. KSM is not made for everyone. It is made for those who recognize the difference the moment they put it on.
        </p>
      </motion.div>
    </section>
  );
}
