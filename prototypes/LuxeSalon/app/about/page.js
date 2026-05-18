'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import styles from './about.module.css';

const timeline = [
  { year: '2009', title: 'The Beginning', desc: 'Founded with a single chair and a dream to redefine beauty experiences.' },
  { year: '2012', title: 'First Expansion', desc: 'Grew to a full team of 10 stylists and opened our first premium location.' },
  { year: '2015', title: 'Award Recognition', desc: 'Named "Best Luxury Salon" by Vogue Beauty Awards three years running.' },
  { year: '2018', title: 'Spa & Wellness', desc: 'Expanded into full spa services with world-class wellness treatments.' },
  { year: '2022', title: 'Going Green', desc: 'Launched our sustainable beauty initiative with eco-friendly products.' },
  { year: '2025', title: 'Today', desc: '50+ stylists, 12K+ happy clients, and still growing with passion.' },
];

const team = [
  { name: 'Isabella Rossi', role: 'Creative Director', specialty: 'Color artistry & editorial styling', initials: 'IR' },
  { name: 'Marcus Chen', role: 'Master Stylist', specialty: 'Precision cuts & modern techniques', initials: 'MC' },
  { name: 'Sophia Laurent', role: 'Skin Specialist', specialty: 'Advanced facials & anti-aging', initials: 'SL' },
  { name: 'James Park', role: 'Makeup Artist', specialty: 'Bridal & editorial glam', initials: 'JP' },
  { name: 'Amara Williams', role: 'Spa Director', specialty: 'Holistic wellness & therapy', initials: 'AW' },
  { name: 'Luca Martinez', role: 'Color Technician', specialty: 'Balayage & vivid color', initials: 'LM' },
];

const values = [
  { icon: '💎', title: 'Excellence', desc: 'We pursue perfection in every strand, every stroke, every service.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Eco-conscious products and practices for a healthier planet.' },
  { icon: '🤝', title: 'Community', desc: 'Building relationships that go beyond the salon chair.' },
  { icon: '💡', title: 'Innovation', desc: 'Staying ahead with the latest techniques and trends.' },
];

export default function AboutPage() {
  const parallaxRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroGlow}
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className={`container ${styles.heroContent}`}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Crafting Beauty <span className="text-gradient">Since 2009</span>
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            More than a salon — we are a sanctuary where artistry, passion, and
            beauty converge to create unforgettable experiences.
          </motion.p>
        </div>
      </section>

      {/* Story Section with Parallax */}
      <section className={`section ${styles.storySection}`} ref={parallaxRef}>
        <div className="container">
          <div className="golden-grid">
            <div className={styles.storyImageWrapper}>
              <motion.div className={styles.storyImage} style={{ y: imageY }}>
                <img src="/images/interior.png" alt="Luxe Salon Interior" />
              </motion.div>
            </div>
            <div className={styles.storyText}>
              <ScrollReveal>
                <span className="section-label">Our Story</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="section-title">
                  A Passion for <span className="text-gradient">Perfection</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className={styles.storyParagraph}>
                  What began as a small studio with a single styling chair has blossomed
                  into Beverly Hills&apos; most sought-after beauty destination. Our founder,
                  Isabella Rossi, envisioned a place where clients wouldn&apos;t just get a
                  haircut — they&apos;d get an experience.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className={styles.storyParagraph}>
                  Today, Luxe Salon is home to over 50 talented stylists, each bringing
                  their unique artistry and passion. From subtle enhancements to
                  dramatic transformations, we believe beauty is personal — and so is
                  every service we provide.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <div className={styles.storyStats}>
                  <div className={styles.storyStat}>
                    <span className={styles.storyStatNum}>50+</span>
                    <span className={styles.storyStatLabel}>Expert Stylists</span>
                  </div>
                  <div className={styles.storyStat}>
                    <span className={styles.storyStatNum}>12K+</span>
                    <span className={styles.storyStatLabel}>Happy Clients</span>
                  </div>
                  <div className={styles.storyStat}>
                    <span className={styles.storyStatNum}>8</span>
                    <span className={styles.storyStatLabel}>Industry Awards</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <ScrollReveal>
              <span className="section-label" style={{ justifyContent: 'center' }}>Our Values</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title">What <span className="text-gradient">Drives</span> Us</h2>
            </ScrollReveal>
          </div>
          <StaggerContainer className={styles.valuesGrid}>
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className={styles.valueCard}
                  whileHover={{ y: -6, borderColor: 'rgba(183, 110, 121, 0.3)' }}
                >
                  <span className={styles.valueIcon}>{v.icon}</span>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <ScrollReveal>
              <span className="section-label" style={{ justifyContent: 'center' }}>Our Journey</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title">The <span className="text-gradient">Luxe</span> Timeline</h2>
            </ScrollReveal>
          </div>
          <div className={styles.timeline}>
            {timeline.map((item, i) => (
              <ScrollReveal
                key={i}
                preset={i % 2 === 0 ? 'fadeLeft' : 'fadeRight'}
                delay={i * 0.1}
              >
                <div className={`${styles.timelineItem} ${i % 2 !== 0 ? styles.timelineItemRight : ''}`}>
                  <div className={styles.timelineDot} />
                  <div className={styles.timelineCard}>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                    <p className={styles.timelineDesc}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <ScrollReveal>
              <span className="section-label" style={{ justifyContent: 'center' }}>Meet The Team</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title">Our <span className="text-gradient">Artists</span></h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Each stylist brings their unique flair, trained by the best and passionate about their craft.
              </p>
            </ScrollReveal>
          </div>
          <StaggerContainer className={styles.teamGrid}>
            {team.map((member, i) => (
              <StaggerItem key={i}>
                <motion.div
                  className={styles.teamCard}
                  whileHover={{ y: -8 }}
                >
                  <div className={styles.teamAvatar}>
                    <span>{member.initials}</span>
                  </div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamSpecialty}>{member.specialty}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <Footer />
    </>
  );
}
