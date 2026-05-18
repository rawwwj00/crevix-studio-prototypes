'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onComplete?.(), 600);
          }, 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  const scissorsVariants = {
    animate: {
      rotate: [0, -15, 15, -15, 0],
      scale: [1, 1.1, 1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const cutLineVariants = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const letterVariants = {
    initial: { y: 80, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.06,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const brandName = 'LUXE SALON';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="preloader"
          exit={{
            clipPath: 'circle(0% at 50% 50%)',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Background orbs */}
          <motion.div
            style={{
              position: 'absolute',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(183,110,121,0.08) 0%, transparent 70%)',
              filter: 'blur(60px)',
              top: '20%',
              left: '30%',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            style={{
              position: 'absolute',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(247,231,206,0.06) 0%, transparent 70%)',
              filter: 'blur(60px)',
              bottom: '20%',
              right: '30%',
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />

          <div className="preloader-content">
            {/* Scissors Icon */}
            <motion.div
              className="preloader-scissors"
              variants={scissorsVariants}
              animate="animate"
            >
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <motion.path
                  d="M20 16C20 20.418 16.418 24 12 24C7.582 24 4 20.418 4 16C4 11.582 7.582 8 12 8C16.418 8 20 11.582 20 16Z"
                  stroke="#b76e79"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
                <motion.path
                  d="M20 48C20 43.582 16.418 40 12 40C7.582 40 4 43.582 4 48C4 52.418 7.582 56 12 56C16.418 56 20 52.418 20 48Z"
                  stroke="#b76e79"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
                <motion.path
                  d="M20 16L56 40M20 48L56 24"
                  stroke="#d4a0a7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </svg>
            </motion.div>

            {/* Cut line effect */}
            <motion.div
              variants={cutLineVariants}
              initial="initial"
              animate="animate"
              style={{
                width: '120px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #b76e79, transparent)',
                transformOrigin: 'center',
              }}
            />

            {/* Brand Name */}
            <div className="preloader-brand" style={{ overflow: 'hidden' }}>
              {brandName.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="initial"
                  animate="animate"
                  style={{
                    display: 'inline-block',
                    background: letter === ' ' ? 'none' : 'linear-gradient(135deg, #b76e79, #f7e7ce)',
                    WebkitBackgroundClip: letter === ' ' ? 'unset' : 'text',
                    WebkitTextFillColor: letter === ' ' ? 'transparent' : 'transparent',
                    backgroundClip: letter === ' ' ? 'unset' : 'text',
                    minWidth: letter === ' ' ? '0.3em' : 'auto',
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              className="preloader-tagline"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Where beauty meets artistry
            </motion.p>

            {/* Progress Bar */}
            <motion.div
              className="preloader-bar-wrapper"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="preloader-bar"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Progress Percentage */}
            <motion.span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--color-text-tertiary)',
                letterSpacing: '0.2em',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {Math.min(Math.round(progress), 100)}%
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
