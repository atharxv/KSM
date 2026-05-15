'use client';

import { useState, useEffect } from 'react';
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

  return (
    <div className={`${styles.overlay} ${hidden ? styles.hidden : ''}`}>
      <div className={styles.logoContainer}>
        <div className={styles.revealLine} style={{ width: `${progress}%` }} />
        <h1 className={`${styles.logoText} ${progress === 100 ? styles.logoTextRevealed : ''}`}>
          KSM
        </h1>
      </div>
      
      <div className={styles.statusInfo}>
        <p className={styles.tagline}>The Zenith of Status</p>
        <div className={styles.counter}>
          <span className={styles.digit}>{progress.toString().padStart(3, '0')}</span>
          <span className={styles.unit}>%</span>
        </div>
      </div>
    </div>
  );
}
