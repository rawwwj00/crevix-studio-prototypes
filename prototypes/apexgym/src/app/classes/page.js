'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from '@/components/AnimateIn';
import SectionLoader from '@/components/SectionLoader';
import { IconFlame, IconDumbbell, IconHeart, IconTarget, IconClock, IconCalendar, IconArrowRight, IconYoga, IconGlove } from '@/components/Icons';
import styles from './classes.module.css';

const CATEGORIES = [
  { label: 'All', icon: null },
  { label: 'Strength', icon: <IconDumbbell size={16} /> },
  { label: 'Cardio', icon: <IconFlame size={16} /> },
  { label: 'Mind & Body', icon: <IconHeart size={16} /> },
  { label: 'Combat', icon: <IconTarget size={16} /> },
];

const CLASSES = [
  { title: 'Power Lifting', category: 'Strength', duration: '60 min', level: 'Advanced', time: 'Mon/Wed/Fri 6:00 AM', img: '/images/training-action.png', desc: 'Build raw strength with compound lifts and progressive overload programming.', icon: <IconDumbbell size={22} /> },
  { title: 'HIIT Blast', category: 'Cardio', duration: '45 min', level: 'All Levels', time: 'Daily 7:00 AM', img: '/images/classes-group.png', desc: 'High-intensity intervals to torch calories and boost endurance.', icon: <IconFlame size={22} /> },
  { title: 'Vinyasa Yoga', category: 'Mind & Body', duration: '60 min', level: 'All Levels', time: 'Tue/Thu/Sat 8:00 AM', img: '/images/yoga-class.png', desc: 'Flow through poses to build flexibility, balance, and inner calm.', icon: <IconYoga size={22} /> },
  { title: 'Boxing Fundamentals', category: 'Combat', duration: '50 min', level: 'Beginner', time: 'Mon/Wed 5:30 PM', img: '/images/boxing-class.png', desc: 'Learn boxing technique while getting an incredible full-body workout.', icon: <IconGlove size={22} /> },
  { title: 'CrossFit WOD', category: 'Strength', duration: '50 min', level: 'Intermediate', time: 'Daily 6:30 AM', img: '/images/hero-gym.png', desc: 'Constantly varied functional movements performed at high intensity.', icon: <IconTarget size={22} /> },
  { title: 'Spin Cycle', category: 'Cardio', duration: '45 min', level: 'All Levels', time: 'Mon-Sat 7:30 AM', img: '/images/classes-group.png', desc: 'Rhythmic cycling with energizing music and motivating coaching.', icon: <IconFlame size={22} /> },
];

export default function ClassesPage() {
  const [active, setActive] = useState('All');
  const [loading, setLoading] = useState(false);
  const filtered = active === 'All' ? CLASSES : CLASSES.filter(c => c.category === active);

  const handleFilter = (cat) => {
    if (cat === active) return;
    setLoading(true);
    setActive(cat);
    setTimeout(() => setLoading(false), 400);
  };

  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg}>
          <Image src="/images/classes-group.png" alt="Classes" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
          <div className={styles.pageHeroOverlay} />
        </div>
        <div className={`container ${styles.pageHeroContent}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              <span>120+ Classes Every Week</span>
            </div>
            <h1 className={styles.pageTitle}>Group <span className={styles.accent}>Classes</span></h1>
            <p className={styles.pageSub}>Programs designed for every fitness level and goal, led by expert coaches.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.filters}>
            {CATEGORIES.map(cat => (
              <button
                key={cat.label}
                className={`${styles.filterBtn} ${active === cat.label ? styles.filterActive : ''}`}
                onClick={() => handleFilter(cat.label)}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {loading ? (
            <SectionLoader text="Filtering..." />
          ) : (
            <motion.div
              className={styles.classGrid}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            >
              <AnimatePresence mode="wait">
                {filtered.map((c, i) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                  >
                    <div className={styles.classCard}>
                      <div className={styles.classImgWrap}>
                        <Image src={c.img} alt={c.title} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                        <div className={styles.classImgOverlay} />
                        <span className={styles.badge}>{c.level}</span>
                      </div>
                      <div className={styles.classBody}>
                        <div className={styles.classMeta}>
                          <span className={styles.metaItem}><IconClock size={12} /> {c.duration}</span>
                          <span className={styles.dot}>•</span>
                          <span>{c.category}</span>
                        </div>
                        <h3 className={styles.className}>{c.title}</h3>
                        <p className={styles.classDesc}>{c.desc}</p>
                        <div className={styles.classFooter}>
                          <div className={styles.classTime}><IconCalendar size={13} /> {c.time}</div>
                          <span className={styles.classArrow}><IconArrowRight size={16} /></span>
                        </div>
                      </div>
                      <div className={styles.cardGlow} />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>

      {/* Schedule */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimateIn className={styles.scheduleHeader}>
            <span className={styles.schedLabel}>WEEKLY SCHEDULE</span>
            <h2 className={styles.schedTitle}>Plan Your <span className={styles.accent}>Week</span></h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className={styles.scheduleTable}>
              <table>
                <thead>
                  <tr>
                    <th>Time</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['6:00 AM', 'Power Lifting', 'HIIT Blast', 'Power Lifting', 'HIIT Blast', 'Power Lifting', 'CrossFit'],
                    ['7:30 AM', 'Spin Cycle', 'Yoga', 'Spin Cycle', 'Yoga', 'Spin Cycle', 'Spin Cycle'],
                    ['9:00 AM', 'HIIT Blast', 'CrossFit', 'HIIT Blast', 'CrossFit', 'HIIT Blast', 'Yoga'],
                    ['5:30 PM', 'Boxing', 'Power Lifting', 'Boxing', 'Power Lifting', 'Open Gym', '—'],
                    ['7:00 PM', 'Yoga', 'Spin Cycle', 'CrossFit', 'Spin Cycle', 'Yoga', '—'],
                  ].map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td key={j} className={j === 0 ? styles.timeCell : ''}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
