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
      <h1 className={styles.logoText}>KSM</h1>
      <p className={styles.tagline}>Crafted Elegance</p>
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
