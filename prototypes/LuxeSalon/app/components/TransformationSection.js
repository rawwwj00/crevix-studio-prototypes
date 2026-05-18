'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './TransformationSection.module.css';

export default function TransformationSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  /*
   * 600vh section → 500vh of scroll range (sticky panel = 100vh).
   * Each 10% of scrollYProgress ≈ 50vh of real scroll.
   *
   *  0.00–0.05   title fades in
   *  0.04–0.44   SAD person fully visible         (~200vh comfortable dwell)
   *  0.38–0.52   scissors sweep, particles fall   (~70vh action zone)
   *  0.48–0.60   crossfade sad → happy            (~60vh smooth overlap)
   *  0.58–0.88   HAPPY person fully visible       (~150vh comfortable dwell)
   *  0.72–0.88   CTA visible while happy holds
   *  0.90–0.99   everything fades out             (~45vh quick exit)
   */

  // Title — stays visible the whole time
  const titleOpacity = useTransform(scrollYProgress, [0, 0.05, 0.92, 0.98], [0, 1, 1, 0]);
  const titleY       = useTransform(scrollYProgress, [0, 0.05], [30, 0]);

  // SAD person — long hold, exits during crossfade
  const sadOpacity = useTransform(scrollYProgress, [0.03, 0.10, 0.46, 0.58], [0, 1, 1, 0]);
  const sadScale   = useTransform(scrollYProgress, [0.03, 0.10, 0.46, 0.58], [0.88, 1, 1, 0.84]);

  // HAPPY person — arrives at crossfade, holds all the way to near-end
  const happyOpacity = useTransform(scrollYProgress, [0.52, 0.62, 0.88, 0.97], [0, 1, 1, 0]);
  const happyScale   = useTransform(scrollYProgress, [0.52, 0.62], [0.86, 1]);

  // Scissors sweep — mid section action
  const scissorsX       = useTransform(scrollYProgress, [0.35, 0.58], ['-200%', '200%']);
  const scissorsRotate  = useTransform(scrollYProgress, [0.35, 0.58], [-25, 25]);
  const scissorsOpacity = useTransform(scrollYProgress, [0.34, 0.40, 0.54, 0.60], [0, 1, 1, 0]);
  const scissorsScale   = useTransform(scrollYProgress, [0.34, 0.46, 0.58], [0.6, 1.3, 0.6]);

  // Hair particles — fall during scissors cross
  const particlesOpacity = useTransform(scrollYProgress, [0.39, 0.45, 0.56, 0.62], [0, 1, 1, 0]);

  // Glow bloom — lights up when happy arrives
  const glowScale   = useTransform(scrollYProgress, [0.52, 0.68], [0.3, 2.2]);
  const glowOpacity = useTransform(scrollYProgress, [0.52, 0.65, 0.84, 0.95], [0, 0.5, 0.5, 0]);

  // BEFORE label — shows while sad person is up
  const beforeLabelOpacity = useTransform(scrollYProgress, [0.09, 0.16, 0.40, 0.50], [0, 1, 1, 0]);

  // AFTER label — shows as soon as happy arrives, holds to end
  const afterLabelOpacity = useTransform(scrollYProgress, [0.63, 0.70, 0.88, 0.97], [0, 1, 1, 0]);

  // CTA — appears mid-happy-dwell, holds to end
  const ctaOpacity = useTransform(scrollYProgress, [0.74, 0.82, 0.88, 0.97], [0, 1, 1, 0]);


  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyWrapper}>
        <div className={`container ${styles.content}`}>
          {/* Title — always visible while in section */}
          <motion.div className={styles.titleArea} style={{ y: titleY, opacity: titleOpacity }}>
            <span className="section-label">The Transformation</span>
            <h2 className={styles.title}>
              From <span className={styles.titleSad}>Dull</span> to{' '}
              <span className="text-gradient">Dazzling</span>
            </h2>
          </motion.div>

          {/* Visual area */}
          <div className={styles.visualArea}>
            {/* Glow */}
            <motion.div
              className={styles.glowEffect}
              style={{ scale: glowScale, opacity: glowOpacity }}
            />

            {/* Sad person */}
            <motion.div
              className={styles.personCard}
              style={{ opacity: sadOpacity, scale: sadScale }}
            >
              <div className={styles.personImageWrapper}>
                <img src="/images/person-sad.png" alt="Before salon visit" className={styles.personImage} />
              </div>
              <motion.div className={styles.personLabel} style={{ opacity: beforeLabelOpacity }}>
                <span className={styles.labelTag}>BEFORE</span>
                <span className={styles.labelEmoji}>😔</span>
                <p className={styles.labelText}>Bad hair day, every day...</p>
              </motion.div>
            </motion.div>

            {/* Scissors */}
            <motion.div
              className={styles.scissorsWrapper}
              style={{
                x: scissorsX,
                rotate: scissorsRotate,
                opacity: scissorsOpacity,
                scale: scissorsScale,
              }}
            >
              <svg width="80" height="80" viewBox="0 0 64 64" fill="none" className={styles.scissorsSvg}>
                <path d="M20 16C20 20.418 16.418 24 12 24C7.582 24 4 20.418 4 16C4 11.582 7.582 8 12 8C16.418 8 20 11.582 20 16Z" stroke="#b76e79" strokeWidth="2.5" fill="none" />
                <path d="M20 48C20 43.582 16.418 40 12 40C7.582 40 4 43.582 4 48C4 52.418 7.582 56 12 56C16.418 56 20 52.418 20 48Z" stroke="#b76e79" strokeWidth="2.5" fill="none" />
                <path d="M20 16L56 40M20 48L56 24" stroke="#d4a0a7" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              <motion.div
                className={styles.snipLine}
                animate={{ scaleX: [0, 1, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.2 }}
              />
            </motion.div>

            {/* Hair particles */}
            <motion.div
              className={styles.particlesContainer}
              style={{ opacity: particlesOpacity }}
            >
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className={styles.hairParticle}
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${10 + Math.random() * 50}%`,
                    width: `${3 + Math.random() * 6}px`,
                    height: `${10 + Math.random() * 18}px`,
                    rotate: `${Math.random() * 360}deg`,
                    opacity: 0.4 + Math.random() * 0.4,
                  }}
                  animate={{
                    y: [0, 40 + Math.random() * 60],
                    rotate: [0, 180 + Math.random() * 360],
                    opacity: [0.7, 0],
                  }}
                  transition={{
                    duration: 1.2 + Math.random() * 0.8,
                    repeat: Infinity,
                    delay: Math.random() * 0.8,
                  }}
                />
              ))}
            </motion.div>

            {/* Happy person */}
            <motion.div
              className={`${styles.personCard} ${styles.personCardHappy}`}
              style={{ opacity: happyOpacity, scale: happyScale }}
            >
              <div className={styles.personImageWrapper}>
                <img src="/images/person-happy.png" alt="After salon visit" className={styles.personImage} />
              </div>
              <motion.div className={styles.personLabel} style={{ opacity: afterLabelOpacity }}>
                <span className={`${styles.labelTag} ${styles.labelTagAfter}`}>AFTER</span>
                <span className={styles.labelEmoji}>✨</span>
                <p className={styles.labelText}>Confidence unlocked!</p>
              </motion.div>
            </motion.div>

            {/* Sparkles */}
            {[
              { top: '15%', left: '62%' },
              { top: '25%', left: '72%' },
              { top: '35%', left: '56%' },
              { top: '20%', left: '78%' },
              { top: '45%', left: '68%' },
              { top: '30%', left: '82%' },
              { top: '50%', left: '58%' },
              { top: '18%', left: '50%' },
            ].map((sparkle, i) => (
              <motion.div
                key={i}
                className={styles.sparkle}
                style={{
                  top: sparkle.top,
                  left: sparkle.left,
                  opacity: happyOpacity,
                }}
                animate={{
                  scale: [0, 1.2, 0],
                  rotate: [0, 180],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  repeatDelay: 0.5,
                }}
              />
            ))}
          </div>

          {/* CTA */}
          <motion.div className={styles.ctaArea} style={{ opacity: ctaOpacity }}>
            <p className={styles.ctaText}>
              Every great transformation begins with a single appointment
            </p>
            <a href="/contact" className="btn btn-primary">
              Start Your Transformation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
