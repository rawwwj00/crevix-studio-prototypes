'use client';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import styles from './services.module.css';

const serviceCategories = [
  {
    category: 'Hair Services',
    icon: '✂️',
    services: [
      { name: 'Classic Haircut', price: '$65', duration: '45 min', desc: 'Precision cut with consultation, shampoo, and blow-dry styling.' },
      { name: 'Creative Cut & Style', price: '$95', duration: '60 min', desc: 'Custom-designed cut with advanced styling techniques.' },
      { name: 'Blowout & Styling', price: '$55', duration: '40 min', desc: 'Professional blowout with heat styling for any occasion.' },
      { name: "Children's Cut", price: '$35', duration: '30 min', desc: 'Gentle haircuts for ages 12 and under in a fun environment.' },
      { name: "Men's Grooming", price: '$50', duration: '40 min', desc: 'Classic men\'s cut with optional beard trim and styling.' },
    ],
  },
  {
    category: 'Color Services',
    icon: '🎨',
    services: [
      { name: 'Full Color', price: '$120', duration: '90 min', desc: 'Root-to-tip single process color application with conditioning.' },
      { name: 'Balayage / Ombré', price: '$200', duration: '150 min', desc: 'Hand-painted highlights for a natural sun-kissed look.' },
      { name: 'Highlights / Lowlights', price: '$160', duration: '120 min', desc: 'Foil or cap highlights for dimensional, vibrant color.' },
      { name: 'Color Correction', price: '$250+', duration: '180+ min', desc: 'Expert correction for uneven or unwanted color results.' },
      { name: 'Gloss & Toner', price: '$60', duration: '30 min', desc: 'Shine-enhancing gloss treatment to refresh existing color.' },
    ],
  },
  {
    category: 'Skin & Facial',
    icon: '🧖‍♀️',
    services: [
      { name: 'Signature Facial', price: '$90', duration: '60 min', desc: 'Deep cleansing, exfoliation, extraction, and hydration treatment.' },
      { name: 'Anti-Aging Treatment', price: '$130', duration: '75 min', desc: 'Advanced facial with collagen boosting and fine line reduction.' },
      { name: 'Hydra Glow Facial', price: '$110', duration: '60 min', desc: 'Intensive hydration with hyaluronic acid and LED therapy.' },
      { name: 'Acne Clear Treatment', price: '$100', duration: '60 min', desc: 'Targeted treatment for breakouts with gentle extraction.' },
      { name: 'Chemical Peel', price: '$120', duration: '45 min', desc: 'Professional-grade peel for skin renewal and brightening.' },
    ],
  },
  {
    category: 'Makeup & Glam',
    icon: '💄',
    services: [
      { name: 'Bridal Makeup', price: '$250', duration: '90 min', desc: 'Full bridal look with trial run and long-lasting finish.' },
      { name: 'Event Makeup', price: '$120', duration: '60 min', desc: 'Glamorous makeup for parties, galas, and special occasions.' },
      { name: 'Everyday Glam', price: '$75', duration: '45 min', desc: 'Enhanced natural look perfect for photoshoots or date night.' },
      { name: 'Lash Extensions', price: '$180', duration: '120 min', desc: 'Full set of individually applied lash extensions.' },
      { name: 'Brow Sculpting', price: '$45', duration: '30 min', desc: 'Shaping, tinting, and defining your perfect brow arch.' },
    ],
  },
  {
    category: 'Spa & Wellness',
    icon: '🌿',
    services: [
      { name: 'Deep Tissue Massage', price: '$110', duration: '60 min', desc: 'Therapeutic massage targeting knots and muscle tension.' },
      { name: 'Hot Stone Therapy', price: '$130', duration: '75 min', desc: 'Heated basalt stones combined with relaxation massage.' },
      { name: 'Manicure & Pedicure', price: '$85', duration: '75 min', desc: 'Luxury nail care with massage, scrub, and polish.' },
      { name: 'Body Wrap', price: '$120', duration: '60 min', desc: 'Detoxifying body wrap with mineral-rich clay treatment.' },
      { name: 'Scalp Treatment', price: '$70', duration: '45 min', desc: 'Rejuvenating scalp massage with essential oil therapy.' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroGlow}
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <div className={`container ${styles.heroContent}`}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our Services
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Beauty Services <span className="text-gradient">Tailored</span> to You
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Discover our comprehensive menu of luxury beauty services,
            each delivered with precision and artistry by our expert team.
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((cat, catIdx) => (
        <section
          key={cat.category}
          className={`section ${styles.categorySection}`}
          style={{
            background: catIdx % 2 === 0 ? 'var(--color-bg-primary)' : 'var(--color-bg-secondary)',
          }}
          id={`service-${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <div className="container">
            <ScrollReveal>
              <div className={styles.categoryHeader}>
                <span className={styles.categoryIcon}>{cat.icon}</span>
                <div>
                  <h2 className={styles.categoryTitle}>{cat.category}</h2>
                  <div className={styles.categoryLine} />
                </div>
              </div>
            </ScrollReveal>

            <StaggerContainer className={styles.servicesList}>
              {cat.services.map((service, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    className={styles.serviceRow}
                    whileHover={{ x: 8, backgroundColor: 'rgba(183, 110, 121, 0.04)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={styles.serviceInfo}>
                      <h3 className={styles.serviceName}>{service.name}</h3>
                      <p className={styles.serviceDesc}>{service.desc}</p>
                    </div>
                    <div className={styles.serviceMeta}>
                      <span className={styles.serviceDuration}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                        {service.duration}
                      </span>
                      <span className={styles.servicePrice}>{service.price}</span>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className={`section ${styles.bottomCta}`}>
        <div className="container" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Ready to <span className="text-gradient">Transform</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="section-subtitle" style={{ margin: '0 auto 32px' }}>
              Book your appointment today and let our experts craft your perfect look.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a href="/contact" className="btn btn-primary">
              Book Appointment
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
