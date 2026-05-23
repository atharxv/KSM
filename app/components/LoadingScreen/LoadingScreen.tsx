'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './LoadingScreen.module.css';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Simulate progressive loading tied to actual resource loading
    let frame: number;
    let start: number | null = null;
    const duration = 2400; // minimum display time in ms

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Ease-out curve for natural feeling
      const eased = 1 - Math.pow(1 - rawProgress, 3);
      setProgress(Math.round(eased * 100));

      if (rawProgress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        // Give a brief pause at 100% before fading
        setTimeout(() => setHidden(true), 300);
      }
    };

    // Wait for fonts and initial paint
    if (document.fonts) {
      document.fonts.ready.then(() => {
        frame = requestAnimationFrame(animate);
      });
    } else {
      frame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(frame);
  }, []);

  const displayNum = String(Math.floor(progress)).padStart(3, '0');

  return (
    <div className={`${styles.overlay} ${hidden ? styles.hidden : ''}`}>
      {/* Background Layers */}
      <div className={styles.loaderBg} />
      <div className={styles.loaderLinen} />
      <div className={styles.loaderOverlay} />
      <div className={styles.loaderVignette} />
      <div className={styles.loaderBottomFade} />

      {/* Content Wrapper */}
      <div className={styles.loaderContent}>
        {/* 1. Animated Title */}
        <div className={styles.titleContainer}>
          <motion.h2 
            className={styles.titleText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <span className={styles.srOnly}>KSM</span>
            {"KSM".split("").map((char, index) => (
              <span key={index} style={{ display: "inline-block" }}>{char}</span>
            ))}
          </motion.h2>
          <motion.h2 
            className={styles.titleText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <span className={styles.srOnly}>ATELIER</span>
            {"ATELIER".split("").map((char, index) => (
              <span key={index} style={{ display: "inline-block" }}>{char}</span>
            ))}
          </motion.h2>
        </div>
      </div>

      {/* Bottom Loading Stats */}
      <div className={styles.loaderBottomStats}>
        {/* 2. Progress bar */}
        <div className={styles.progressTrack}>
          <div
            className={styles.progressFill}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* 3. Tagline */}
        <p className={styles.loaderTagline}>THE ZENITH OF STATUS</p>

        {/* 4. Counter */}
        <div className={styles.loaderCounter}>
          <span className={styles.loaderCounterNum}>{displayNum}</span>
          <span className={styles.loaderCounterPct}>%</span>
        </div>
      </div>
    </div>
  );
}
