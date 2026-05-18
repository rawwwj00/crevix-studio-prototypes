'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TransformationSection from './components/TransformationSection';
import ScrollReveal, { StaggerContainer, StaggerItem, TextReveal } from './components/ScrollReveal';
import styles from './page.module.css';

const services = [
  {
    tag: 'Signature',
    title: 'Haircuts & Styling',
    desc: 'Precision cuts and expert styling tailored to your unique features and lifestyle.',
    price: '$65',
    priceLabel: 'starting from',
    image: '/images/service-haircut.png',
  },
  {
    tag: 'Premium',
    title: 'Hair Coloring',
    desc: 'From subtle highlights to bold transformations — artistry in every strand.',
    price: '$120',
    priceLabel: 'starting from',
    image: '/images/service-coloring.png',
  },
  {
    tag: 'Luxury',
    title: 'Facials & Skincare',
    desc: 'Rejuvenating treatments that leave your skin glowing and refreshed.',
    price: '$90',
    priceLabel: 'starting from',
    image: '/images/service-facial.png',
  },
  {
    tag: 'Glam',
    title: 'Bridal Makeup',
    desc: 'Your special day deserves a flawless, radiant look that lasts all day.',
    price: '$200',
    priceLabel: 'starting from',
    image: '/images/service-makeup.png',
  },
];

const testimonials = [
  {
    stars: 5,
    text: '"The moment I walked in, I felt like royalty. My stylist understood exactly what I wanted and delivered beyond my expectations."',
    name: 'Sarah Mitchell',
    role: 'Regular Client',
    initials: 'SM',
  },
  {
    stars: 5,
    text: '"Best coloring I\'ve ever had. The balayage is stunning and so natural-looking. I get compliments everywhere I go."',
    name: 'Emily Chen',
    role: '3 Year Client',
    initials: 'EC',
  },
  {
    stars: 5,
    text: '"My bridal makeup was absolute perfection. The team went above and beyond to make my special day even more beautiful."',
    name: 'Jessica Park',
    role: 'Bridal Client',
    initials: 'JP',
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        style={{ overflowX: 'clip' }}
      >
        <Navbar />

        {/* ========== HERO ========== */}
        <section className={styles.hero} id="hero">
          <div className={styles.heroBg}>
            <motion.img
              src="/images/hero.png"
              alt="Luxe Salon Interior"
              className={styles.heroBgImage}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            <div className={styles.heroOverlay} />
          </div>

          <div className={`container ${styles.heroContent}`}>
            <motion.div
              className={styles.heroTag}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Premium Beauty Experience
            </motion.div>

            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleLine}>
                <TextReveal delay={0.4}>Where Beauty</TextReveal>
              </span>
              <span className={styles.heroTitleLine}>
                <TextReveal delay={0.5}>
                  Meets <span className="text-gradient">Artistry</span>
                </TextReveal>
              </span>
            </h1>

            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Step into a world of luxury and transformation. Our master stylists
              craft looks that reflect your unique beauty and confidence.
            </motion.p>

            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <a href="/contact" className="btn btn-primary">
                Book Appointment
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="/services" className="btn btn-outline">
                Explore Services
              </a>
            </motion.div>

            <motion.div
              className={styles.heroStats}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>15+</span>
                <span className={styles.heroStatLabel}>Years Experience</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>12K+</span>
                <span className={styles.heroStatLabel}>Happy Clients</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>50+</span>
                <span className={styles.heroStatLabel}>Expert Stylists</span>
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className={styles.heroScrollIndicator}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <span className={styles.scrollText}>Scroll</span>
            <div className={styles.scrollLine} />
          </motion.div>
        </section>

        {/* ========== SERVICES PREVIEW ========== */}
        <section className={`section ${styles.servicesPreview}`} id="services-preview">
          <div className="container">
            <ScrollReveal>
              <span className="section-label">Our Expertise</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="section-title">
                Services Crafted for <span className="text-gradient">You</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="section-subtitle">
                Every service is a masterpiece. From subtle enhancements to dramatic
                transformations, we bring your vision to life.
              </p>
            </ScrollReveal>

            <StaggerContainer className={styles.servicesGrid}>
              {services.map((service, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    className={styles.serviceCard}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className={styles.serviceCardImage}
                      />
                    </div>
                    <div className={styles.serviceCardBody}>
                      <span className={styles.serviceCardTag}>{service.tag}</span>
                      <h3 className={styles.serviceCardTitle}>{service.title}</h3>
                      <p className={styles.serviceCardDesc}>{service.desc}</p>
                      <div className={styles.serviceCardPrice}>
                        {service.price} <span>/ {service.priceLabel}</span>
                      </div>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ========== TRANSFORMATION SECTION ========== */}
        <TransformationSection />

        {/* ========== ABOUT PREVIEW ========== */}
        <section className={`section ${styles.aboutPreview}`} id="about-preview">
          <div className="container">
            <div className="golden-grid">
              <ScrollReveal preset="fadeLeft">
                <div className={styles.aboutImageCol}>
                  <img
                    src="/images/about.png"
                    alt="Our team of expert stylists"
                    className={styles.aboutImage}
                  />
                  <motion.div
                    className={styles.aboutFloatingCard}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <div className={styles.aboutFloatingNumber}>15+</div>
                    <div className={styles.aboutFloatingLabel}>Years of Excellence</div>
                  </motion.div>
                </div>
              </ScrollReveal>

              <div className={styles.aboutTextCol}>
                <ScrollReveal>
                  <span className="section-label">Our Story</span>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                  <h2 className="section-title">
                    The Art of <span className="text-gradient">Beauty</span>
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p className="section-subtitle">
                    Founded in 2009, Luxe Salon has been the go-to destination for
                    those seeking unparalleled beauty experiences. Our team of master
                    stylists brings passion, precision, and creativity to every service.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className={styles.aboutFeatures}>
                    {[
                      { icon: '✂️', title: 'Master Stylists', desc: 'Internationally trained professionals' },
                      { icon: '🌿', title: 'Premium Products', desc: 'Only the finest salon-grade brands' },
                      { icon: '✨', title: 'Luxury Experience', desc: 'Every visit feels like a retreat' },
                    ].map((feature, i) => (
                      <div className={styles.aboutFeature} key={i}>
                        <div className={styles.aboutFeatureIcon}>{feature.icon}</div>
                        <div className={styles.aboutFeatureText}>
                          <h4>{feature.title}</h4>
                          <p>{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <a href="/about" className="btn btn-outline" style={{ alignSelf: 'flex-start' }}>
                    Learn More About Us
                  </a>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section className={`section ${styles.testimonials}`} id="testimonials">
          <div className="container">
            <div className={styles.testimonialsHeader}>
              <ScrollReveal>
                <span className="section-label" style={{ justifyContent: 'center' }}>Testimonials</span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="section-title">
                  What Our Clients <span className="text-gradient">Say</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="section-subtitle">
                  Don&apos;t just take our word for it — hear from the thousands who&apos;ve
                  experienced the Luxe difference.
                </p>
              </ScrollReveal>
            </div>

            <StaggerContainer className={styles.testimonialsGrid}>
              {testimonials.map((t, i) => (
                <StaggerItem key={i}>
                  <div className={styles.testimonialCard}>
                    <div className={styles.testimonialStars}>
                      {'★'.repeat(t.stars)}
                    </div>
                    <p className={styles.testimonialText}>{t.text}</p>
                    <div className={styles.testimonialAuthor}>
                      <div className={styles.testimonialAvatar}>{t.initials}</div>
                      <div>
                        <div className={styles.testimonialName}>{t.name}</div>
                        <div className={styles.testimonialRole}>{t.role}</div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* ========== CTA ========== */}
        <section className={`section ${styles.ctaSection}`} id="cta">
          <div className={styles.ctaGlow} />
          <div className={`container ${styles.ctaInner}`}>
            <ScrollReveal>
              <span className="section-label" style={{ justifyContent: 'center' }}>Ready?</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className={styles.ctaTitle}>
                Your Best Look <span className="text-gradient">Awaits</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className={styles.ctaSubtitle}>
                Book your appointment today and discover why thousands choose Luxe Salon
                for their beauty transformations.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a href="/contact" className="btn btn-primary">
                Book Your Visit
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </motion.div>
    </>
  );
}
