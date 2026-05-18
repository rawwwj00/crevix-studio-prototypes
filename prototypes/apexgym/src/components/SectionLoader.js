'use client';
import { motion } from 'framer-motion';
import styles from './SectionLoader.module.css';

export default function SectionLoader({ text = 'Loading...' }) {
  return (
    <div className={styles.loader}>
      <div className={styles.spinnerWrap}>
        <motion.div
          className={styles.ring}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        />
        <svg className={styles.bolt} viewBox="0 0 24 24" fill="var(--accent)" width="18" height="18">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      </div>
      <span className={styles.text}>{text}</span>
    </div>
  );
}
