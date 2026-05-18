'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimateIn from '@/components/AnimateIn';
import { IconInstagram, IconTwitter, IconArrowRight, IconUsers, IconTrophy, IconStar } from '@/components/Icons';
import styles from './trainers.module.css';

const TRAINERS = [
  { name: 'Saumay Sharma', role: 'Head Strength Coach', specialties: ['Powerlifting', 'Olympic Lifts', 'Bodybuilding'], bio: '15+ years of coaching experience. Former national powerlifting champion with a passion for helping athletes reach peak performance.', img: '/images/trainer-male.png', exp: '15 yrs' },
  { name: 'Sanya Sharma', role: 'Yoga & Wellness Director', specialties: ['Vinyasa', 'Hot Yoga', 'Meditation'], bio: 'Certified yoga therapist with 10 years of practice. Brings mindfulness and holistic wellness to every session.', img: '/images/trainer-female.png', exp: '10 yrs' },
  { name: 'Yash Pandey', role: 'HIIT & Cardio Lead', specialties: ['HIIT', 'Spin', 'Endurance'], bio: 'High-energy coach known for pushing limits. His classes are consistently rated the most popular at APEX.', img: '/images/trainer-male.png', exp: '8 yrs' },
  { name: 'Tia Kohli', role: 'Boxing & Combat Coach', specialties: ['Boxing', 'Kickboxing', 'Self-Defense'], bio: 'Professional boxing background with a focus on technique and empowerment. Makes combat training accessible to all levels.', img: '/images/trainer-female.png', exp: '12 yrs' },
];

export default function TrainersPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <div className={styles.pageHeroBg}>
          <Image src="/images/training-action.png" alt="Trainers" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
          <div className={styles.pageHeroOverlay} />
        </div>
        <div className={`container ${styles.pageHeroContent}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              <span>50+ Expert Coaches</span>
            </div>
            <h1 className={styles.pageTitle}>Meet Your <span className={styles.accent}>Trainers</span></h1>
            <p className={styles.pageSub}>Elite coaches dedicated to helping you achieve your fitness goals.</p>
          </motion.div>
        </div>
      </section>

      {/* Stats strip */}
      <section className={styles.statsStrip}>
        <div className={`container ${styles.statsInner}`}>
          {[
            { icon: <IconUsers size={20} />, value: '50+', label: 'Certified Trainers' },
            { icon: <IconTrophy size={20} />, value: '200+', label: 'Certifications' },
            { icon: <IconStar size={20} />, value: '4.9', label: 'Average Rating' },
          ].map((s, i) => (
            <AnimateIn key={i} delay={i * 0.1}>
              <div className={styles.statCard}>
                <div className={styles.statIcon}>{s.icon}</div>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.trainerGrid}>
            {TRAINERS.map((t, i) => (
              <AnimateIn key={t.name} delay={i * 0.1}>
                <div className={styles.trainerCard}>
                  <div className={styles.trainerImgWrap}>
                    <Image src={t.img} alt={t.name} fill sizes="(max-width:640px) 100vw, 220px" style={{ objectFit: 'cover' }} />
                    <div className={styles.trainerImgOverlay} />
                    <div className={styles.expTag}>{t.exp}</div>
                  </div>
                  <div className={styles.trainerBody}>
                    <h3 className={styles.trainerName}>{t.name}</h3>
                    <span className={styles.trainerRole}>{t.role}</span>
                    <p className={styles.trainerBio}>{t.bio}</p>
                    <div className={styles.tags}>
                      {t.specialties.map(s => (
                        <span key={s} className={styles.tag}>{s}</span>
                      ))}
                    </div>
                    <div className={styles.trainerSocials}>
                      <a href="#" className={styles.socialBtn}><IconInstagram size={14} /></a>
                      <a href="#" className={styles.socialBtn}><IconTwitter size={14} /></a>
                    </div>
                  </div>
                  <div className={styles.cardGlow} />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <AnimateIn>
            <span className={styles.ctaLabel}>CAREERS</span>
            <h2 className={styles.ctaTitle}>Join the APEX <span className={styles.accent}>Team</span></h2>
            <p className={styles.ctaSub}>We&apos;re always looking for passionate fitness professionals. If you love coaching and inspiring others, we want to hear from you.</p>
            <a href="/contact" className={styles.ctaBtn}>
              <span>Apply Now</span>
              <IconArrowRight size={16} />
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
