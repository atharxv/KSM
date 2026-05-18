"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './CookieConsent.module.css';

const CONSENT_KEY = 'ksm-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showCustomise, setShowCustomise] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true,      // always true, cannot be toggled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (!saved) {
        setVisible(true);
      }
    }
  }, []);

  const acceptAll = () => {
    if (typeof window !== 'undefined') {
      const consent = {
        essential: true,
        analytics: true,
        marketing: true,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
      setVisible(false);
    }
  };

  const rejectAll = () => {
    if (typeof window !== 'undefined') {
      const consent = {
        essential: true,
        analytics: false,
        marketing: false,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
      setVisible(false);
    }
  };

  const savePreferences = () => {
    if (typeof window !== 'undefined') {
      const consent = {
        ...preferences,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
      setVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.banner}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.linen} aria-hidden="true" />

          {!showCustomise ? (
            <div className={styles.bannerInner}>
              <div className={styles.bannerText}>
                <p className={styles.bannerTitle}>We value your privacy</p>
                <p className={styles.bannerBody}>
                  We use cookies to personalise your experience,
                  analyse site traffic, and support our marketing.
                  You can choose which cookies you allow.{' '}
                  <a href="/cookies" className={styles.bannerLink}>
                    Cookie Policy
                  </a>
                </p>
              </div>

              <div className={styles.bannerActions}>
                <button
                  onClick={() => setShowCustomise(true)}
                  className={styles.btnGhost}
                >
                  Customise
                </button>
                <button
                  onClick={rejectAll}
                  className={styles.btnGhost}
                >
                  Reject All
                </button>
                <button
                  onClick={acceptAll}
                  className={styles.btnPrimary}
                >
                  Accept All
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.customiseWrap}>
              <p className={styles.bannerTitle}>Cookie Preferences</p>

              {[
                {
                  key: 'essential',
                  label: 'Essential',
                  description: 'Required for the site to function. Cannot be disabled.',
                  locked: true,
                },
                {
                  key: 'analytics',
                  label: 'Analytics',
                  description: 'Help us understand how visitors interact with the site.',
                  locked: false,
                },
                {
                  key: 'marketing',
                  label: 'Marketing',
                  description: 'Used to deliver relevant ads and track campaigns.',
                  locked: false,
                },
              ].map(({ key, label, description, locked }) => (
                <div key={key} className={styles.prefRow}>
                  <div className={styles.prefText}>
                    <span className={styles.prefLabel}>{label}</span>
                    <span className={styles.prefDesc}>{description}</span>
                  </div>
                  <button
                    role="switch"
                    aria-checked={preferences[key as keyof typeof preferences]}
                    aria-label={`Toggle ${label} cookies`}
                    disabled={locked}
                    onClick={() =>
                      !locked &&
                      setPreferences(p => ({ ...p, [key]: !p[key as keyof typeof preferences] }))
                    }
                    className={`${styles.toggle} ${
                      preferences[key as keyof typeof preferences] ? styles.toggleOn : ''
                    } ${locked ? styles.toggleLocked : ''}`}
                  >
                    <span className={styles.toggleThumb} />
                  </button>
                </div>
              ))}

              <div className={styles.bannerActions}>
                <button
                  onClick={() => setShowCustomise(false)}
                  className={styles.btnGhost}
                >
                  Back
                </button>
                <button
                  onClick={savePreferences}
                  className={styles.btnPrimary}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
