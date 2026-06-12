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
        <h2 className={styles.headline}>Crafted in Italy.<br />Worn Everywhere.</h2>
      </motion.div>
    </section>
  );
}
