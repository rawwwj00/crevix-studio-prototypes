'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimateIn from '@/components/AnimateIn';
import CountUp from '@/components/CountUp';
import Marquee from '@/components/Marquee';
import { IconDumbbell, IconUsers, IconCalendar, IconFlame, IconHeart, IconTarget, IconCheck, IconArrowRight, IconStar, IconShield, IconZap, IconTrophy } from '@/components/Icons';
import styles from './page.module.css';

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image src="/images/hero-gym.png" alt="APEX Fitness Gym" fill priority sizes="100vw" style={{ objectFit: 'cover' }} />
          <div className={styles.heroOverlay} />
          <div className={styles.heroGlow} />
        </div>
        <div className={`container ${styles.heroContent}`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 2.8, ease: [0.25, 0.1, 0.25, 1] }}
            className={styles.heroInner}
          >
            {/* Pill badge */}
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              <span>Premium Fitness Experience</span>
            </div>

            <h1 className={styles.heroTitle}>
              Forge Your<br />
              <span className={styles.heroAccent}>Strongest</span> Self.
            </h1>
            <p className={styles.heroSub}>
              World-class equipment, elite trainers, and a community that pushes you beyond limits. Your transformation starts here.
            </p>
            <div className={styles.heroBtns}>
              <Link href="/pricing" className={styles.heroPrimary}>
                <span>Start Free Trial</span>
                <IconArrowRight size={16} />
              </Link>
              <Link href="/classes" className={styles.heroOutline}>
                Explore Classes
              </Link>
            </div>
            {/* Pill tags */}
            <motion.div
              className={styles.heroTags}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.4 }}
            >
              {['24/7 Access', 'Expert Trainers', 'Premium Equipment'].map(tag => (
                <span key={tag} className={styles.heroTag}>{tag}</span>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating stat cards */}
          <motion.div
            className={styles.floatingStats}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <div className={styles.floatCard}>
              <div className={styles.floatIcon}><IconUsers size={20} color="var(--accent)" /></div>
              <div>
                <span className={styles.floatValue}><CountUp end={5000} />+</span>
                <span className={styles.floatLabel}>Active Members</span>
              </div>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.floatIcon}><IconTrophy size={20} color="var(--accent)" /></div>
              <div>
                <span className={styles.floatValue}><CountUp end={15} /></span>
                <span className={styles.floatLabel}>Years Experience</span>
              </div>
            </div>
            <div className={styles.floatCard}>
              <div className={styles.floatIcon}><IconCalendar size={20} color="var(--accent)" /></div>
              <div>
                <span className={styles.floatValue}><CountUp end={120} />+</span>
                <span className={styles.floatLabel}>Weekly Classes</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.heroScroll}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </motion.div>
      </section>

      {/* ─── Marquee ─── */}
      <Marquee items={['Strength Training', 'HIIT Classes', 'Yoga Flow', 'Boxing', 'CrossFit', 'Personal Training', 'Recovery Zone', 'Spin Cycle']} />

      {/* ─── Process Strip ─── */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.processStrip}>
            {[
              { icon: <IconTarget size={20} />, step: '01', label: 'Set Your Goals' },
              { icon: <IconUsers size={20} />, step: '02', label: 'Meet Your Trainer' },
              { icon: <IconFlame size={20} />, step: '03', label: 'Train Hard' },
              { icon: <IconTrophy size={20} />, step: '04', label: 'See Results' },
            ].map((s, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className={styles.processItem}>
                  <div className={styles.processIcon}>{s.icon}</div>
                  <span className={styles.processStep}>{s.step}</span>
                  <span className={styles.processLabel}>{s.label}</span>
                  {i < 3 && <div className={styles.processLine} />}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="section">
        <div className="container">
          <AnimateIn className={styles.sectionHeader}>
            <span className={styles.label}>WHY CHOOSE US</span>
            <h2 className={styles.sectionTitle}>Everything You Need to <span className={styles.accent}>Succeed</span></h2>
            <p className={styles.sectionSub}>Our premium facilities and expert guidance create the perfect environment for achieving your fitness goals.</p>
          </AnimateIn>
          <div className={styles.featureGrid}>
            {[
              { icon: <IconDumbbell size={26} />, title: 'Premium Equipment', desc: 'State-of-the-art machines and free weights from top brands, maintained to the highest standards.' },
              { icon: <IconUsers size={26} />, title: 'Expert Coaching', desc: 'Certified trainers with years of experience to guide your journey and maximize results.' },
              { icon: <IconCalendar size={26} />, title: '120+ Classes Weekly', desc: 'From yoga to HIIT, find the perfect class that fits your schedule and fitness level.' },
              { icon: <IconShield size={26} />, title: 'Recovery Zone', desc: 'Sauna, cold plunge, and recovery tools to help your body heal and come back stronger.' },
              { icon: <IconHeart size={26} />, title: 'Nutrition Support', desc: 'Personalized meal plans and nutrition coaching to fuel your workouts and recovery.' },
              { icon: <IconZap size={26} />, title: 'Smart Tracking', desc: 'Track your progress with our app — workouts, body metrics, and goals all in one place.' },
            ].map((f, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIconWrap}>{f.icon}</div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.desc}</p>
                  <div className={styles.featureGlow} />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── About / Split ─── */}
      <section className={`section ${styles.aboutSection}`}>
        <div className={`container ${styles.split}`}>
          <AnimateIn direction="left" className={styles.splitImg}>
            <div className={styles.imgFrame}>
              <Image src="/images/training-action.png" alt="Training at APEX" width={600} height={520} style={{ objectFit: 'cover', borderRadius: 'var(--radius-lg)' }} />
              {/* Experience badge floating on image */}
              <div className={styles.expBadge}>
                <span className={styles.expValue}>15+</span>
                <span className={styles.expLabel}>Years of<br/>Excellence</span>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn direction="right" className={styles.splitContent}>
            <span className={styles.label}>ABOUT APEX</span>
            <h2 className={styles.sectionTitle}>More Than a Gym —<br/>A <span className={styles.accent}>Movement</span></h2>
            <p className={styles.splitText}>
              Founded in 2011, APEX FITNESS has grown from a single studio to a premium fitness destination. We believe in pushing boundaries and creating a community where every member feels empowered to reach their full potential.
            </p>
            <ul className={styles.checkList}>
              {['Open 24/7 — train on your schedule', 'Personalized workout & meal plans', 'Nutrition coaching included', 'State-of-the-art locker rooms & spa'].map((item, i) => (
                <li key={i} className={styles.checkItem}>
                  <span className={styles.checkIcon}><IconCheck size={14} color="var(--accent)" /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className={styles.heroPrimary} style={{ marginTop: '24px', display: 'inline-flex' }}>
              <span>Learn More</span>
              <IconArrowRight size={16} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Classes Preview ─── */}
      <section className="section">
        <div className="container">
          <AnimateIn className={styles.sectionHeader}>
            <span className={styles.label}>OUR PROGRAMS</span>
            <h2 className={styles.sectionTitle}>Find Your <span className={styles.accent}>Perfect</span> Class</h2>
            <p className={styles.sectionSub}>Whether you prefer high-intensity workouts or mindful movement, we have a class for you.</p>
          </AnimateIn>
          <div className={styles.classesGrid}>
            {[
              { img: '/images/classes-group.png', title: 'HIIT Training', level: 'Advanced', duration: '45 min', icon: <IconFlame size={18} /> },
              { img: '/images/yoga-class.png', title: 'Yoga Flow', level: 'All Levels', duration: '60 min', icon: <IconHeart size={18} /> },
              { img: '/images/boxing-class.png', title: 'Boxing Bootcamp', level: 'Intermediate', duration: '50 min', icon: <IconTarget size={18} /> },
            ].map((c, i) => (
              <AnimateIn key={i} delay={i * 0.15}>
                <div className={styles.classCard}>
                  <div className={styles.classImg}>
                    <Image src={c.img} alt={c.title} fill sizes="(max-width:768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
                    <div className={styles.classOverlay} />
                  </div>
                  <div className={styles.classInfo}>
                    <div className={styles.classTop}>
                      <span className={styles.classBadge}>{c.level}</span>
                      <span className={styles.classDur}>{c.duration}</span>
                    </div>
                    <h3 className={styles.classTitle}>{c.title}</h3>
                    <div className={styles.classBtn}>
                      <span>View Class</span>
                      <IconArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn className="text-center" style={{ marginTop: '48px' }}>
            <Link href="/classes" className={styles.heroOutline} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              View All Classes <IconArrowRight size={16} />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className={`section ${styles.aboutSection}`}>
        <div className="container">
          <AnimateIn className={styles.sectionHeader}>
            <span className={styles.label}>TESTIMONIALS</span>
            <h2 className={styles.sectionTitle}>What Our Members <span className={styles.accent}>Say</span></h2>
          </AnimateIn>
          <div className={styles.testimonialGrid}>
            {[
              { name: 'Alex Rivera', role: 'Member since 2022', text: 'APEX completely transformed my fitness journey. The trainers are world-class and the facilities are unmatched. I\'ve never felt more motivated.', rating: 5 },
              { name: 'Sarah Kim', role: 'Member since 2021', text: 'The yoga and recovery programs are incredible. After years of gym-hopping, APEX feels like home. The community here is truly special.', rating: 5 },
              { name: 'Marcus Chen', role: 'Member since 2023', text: 'Best investment I\'ve made in myself. The personal training program helped me lose 30 pounds and build confidence I never had before.', rating: 5 },
            ].map((t, i) => (
              <AnimateIn key={i} delay={i * 0.12}>
                <div className={styles.testimonialCard}>
                  <div className={styles.stars}>
                    {Array(t.rating).fill(0).map((_, j) => (
                      <IconStar key={j} size={14} color="var(--accent)" filled />
                    ))}
                  </div>
                  <p className={styles.testimonialText}>&ldquo;{t.text}&rdquo;</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorAvatar}>{t.name[0]}</div>
                    <div>
                      <span className={styles.authorName}>{t.name}</span>
                      <span className={styles.authorRole}>{t.role}</span>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={styles.cta}>
        <div className={styles.ctaBg}>
          <Image src="/images/hero-gym.png" alt="" fill style={{ objectFit: 'cover' }} />
          <div className={styles.ctaOverlay} />
        </div>
        <div className={`container ${styles.ctaContent}`}>
          <AnimateIn>
            <span className={styles.label}>START TODAY</span>
            <h2 className={styles.ctaTitle}>Ready to Transform<br/>Your Life?</h2>
            <p className={styles.ctaSub}>Join APEX FITNESS today and get your first week completely free. No commitment, no hidden fees.</p>
            <div className={styles.heroBtns}>
              <Link href="/pricing" className={styles.heroPrimary}>
                <span>Get Started Free</span>
                <IconArrowRight size={16} />
              </Link>
              <Link href="/contact" className={styles.heroOutline}>Contact Us</Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
