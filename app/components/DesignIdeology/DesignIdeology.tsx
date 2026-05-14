'use client';

import { motion } from 'framer-motion';
import styles from './DesignIdeology.module.css';

export default function DesignIdeology() {
  const letterText = "True distinction is never shouted; it is whispered in the weight of a linen fold and the precision of a hand-turned seam. This collection is not merely an assemblage of garments, but a parchment of legacy—a heritage woven for those who understand that status is an art form, not an acquisition. We invite you to carry this story forward.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.imageBlock}>
        <img 
          src="/images/paul anthony kelly.jpeg" 
          alt="KSM Heritage" 
          className={styles.image}
        />
      </div>
      <div className={styles.quoteBlock}>
        <span className={styles.eyebrow}>Parchment of Heritage</span>
        <motion.div 
          className={styles.letter}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {letterText.split(" ").map((word, index) => (
            <motion.span 
              key={index} 
              variants={childVariants}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
          
          <motion.div 
            className={styles.signature}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 1.5 }}
          >
            <p>With unrivaled esteem,</p>
            <p>The House of KSM</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
