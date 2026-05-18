"use client";

import styles from './cookies.module.css';

export default function ManageButton() {
  return (
    <button
      className={styles.manageBtn}
      onClick={() => {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('ksm-cookie-consent');
          window.location.reload();
        }
      }}
    >
      Update Cookie Preferences
    </button>
  );
}
