'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Preloader.module.css';

export default function Preloader() {
  const [phase, setPhase] = useState(0); // 0=loading, 1=reveal, 2=done

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 1600);
    const t2 = setTimeout(() => setPhase(2), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <AnimatePresence>
      {phase < 2 && (
        <motion.div
          className={styles.preloader}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Progress bar */}
          <motion.div
            className={styles.progressBar}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 1 ? 1 : 0.7 }}
            transition={{ duration: phase >= 1 ? 0.4 : 1.6, ease: 'easeInOut' }}
          />

          {/* Brand text */}
          <div className={styles.brandWrap}>
            <motion.div
              className={styles.brandLine}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <svg className={styles.boltIcon} viewBox="0 0 24 24" fill="var(--accent)">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </motion.div>
            <motion.h1
              className={styles.brandText}
              initial={{ opacity: 0, y: 50, letterSpacing: '20px' }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                letterSpacing: phase >= 1 ? '16px' : '8px'
              }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              APEX
            </motion.h1>
            <motion.p
              className={styles.brandSub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: phase >= 1 ? 1 : 0.6, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              FITNESS
            </motion.p>
          </div>

          {/* Spinner dots */}
          <div className={styles.dotsWrap}>
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className={styles.dot}
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
