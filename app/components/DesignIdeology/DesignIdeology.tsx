'use client';

import { motion } from 'framer-motion';
import styles from './DesignIdeology.module.css';

export default function DesignIdeology() {
  const letterText = "Status is not inherited. It is earned. KSM is for a generation that earns its place, refuses mediocrity, and understands that the right name carries weight in any room.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  } as const;

  const childVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.08,
        ease: "easeOut",
      },
    },
  } as const;

  return (
    <section className={styles.section}>
      <div className={styles.imageBlock}>
        <img 
          src="/images/homepage/homepage%20image%202.png" 
          alt="KSM Heritage" 
          className={styles.image}
          loading="lazy"
          decoding="async"
          width="800"
          height="1067"
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
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <hr className={styles.signatureRule} />
            <p>With unrivaled esteem,</p>
            <p>The House of KSM</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
