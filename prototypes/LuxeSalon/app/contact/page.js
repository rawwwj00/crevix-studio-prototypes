'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import styles from './contact.module.css';

const serviceOptions = [
  'Haircut & Styling',
  'Hair Coloring',
  'Facial & Skincare',
  'Bridal Makeup',
  'Event Makeup',
  'Spa Treatment',
  'Manicure & Pedicure',
  'Other',
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroGlow}
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className={`container ${styles.heroContent}`}>
          <motion.span
            className="section-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Book Your <span className="text-gradient">Experience</span>
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Schedule your appointment or reach out with any questions.
            We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`section ${styles.contactSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.contactInfoCol}>
              <ScrollReveal>
                <h2 className={styles.infoTitle}>
                  Visit Our <span className="text-gradient">Salon</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className={styles.infoDesc}>
                  Walk-ins are welcome, but we recommend booking ahead to
                  ensure your preferred stylist and time slot.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className={styles.infoCards}>
                  {[
                    {
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-rose-gold)" strokeWidth="2" strokeLinecap="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      ),
                      title: 'Location',
                      lines: ['123 Beauty Lane', 'Beverly Hills, CA 90210'],
                    },
                    {
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-rose-gold)" strokeWidth="2" strokeLinecap="round">
                          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      ),
                      title: 'Phone',
                      lines: ['+1 (310) 555-0147', '+1 (310) 555-0199'],
                    },
                    {
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-rose-gold)" strokeWidth="2" strokeLinecap="round">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                        </svg>
                      ),
                      title: 'Email',
                      lines: ['hello@luxesalon.com', 'bookings@luxesalon.com'],
                    },
                    {
                      icon: (
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-rose-gold)" strokeWidth="2" strokeLinecap="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                      ),
                      title: 'Hours',
                      lines: ['Mon — Sat: 9AM — 8PM', 'Sunday: 10AM — 6PM'],
                    },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      className={styles.infoCard}
                      whileHover={{ x: 6, borderColor: 'rgba(183, 110, 121, 0.3)' }}
                    >
                      <div className={styles.infoCardIcon}>{card.icon}</div>
                      <div>
                        <h4 className={styles.infoCardTitle}>{card.title}</h4>
                        {card.lines.map((line, j) => (
                          <p key={j} className={styles.infoCardLine}>{line}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Booking Form */}
            <ScrollReveal preset="fadeRight" delay={0.2}>
              <div className={styles.formWrapper}>
                <div className={styles.formHeader}>
                  <h3 className={styles.formTitle}>Book an Appointment</h3>
                  <p className={styles.formSubtitle}>
                    Fill in the details below and we&apos;ll confirm your booking shortly.
                  </p>
                </div>

                {submitted ? (
                  <motion.div
                    className={styles.successMessage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <span className={styles.successIcon}>✨</span>
                    <h4 className={styles.successTitle}>Booking Received!</h4>
                    <p className={styles.successText}>
                      We&apos;ll confirm your appointment via email shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form} id="booking-form">
                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className={styles.formInput}
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="email">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className={styles.formInput}
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="phone">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className={styles.formInput}
                          placeholder="+1 (310) 555-0000"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="service">Service</label>
                        <select
                          id="service"
                          name="service"
                          className={styles.formInput}
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a service</option>
                          {serviceOptions.map((s) => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="date">Preferred Date</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          className={styles.formInput}
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.formLabel} htmlFor="time">Preferred Time</label>
                        <select
                          id="time"
                          name="time"
                          className={styles.formInput}
                          value={formData.time}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel} htmlFor="message">Special Requests</label>
                      <textarea
                        id="message"
                        name="message"
                        className={`${styles.formInput} ${styles.formTextarea}`}
                        placeholder="Any preferences or requests..."
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className={`btn btn-primary ${styles.submitBtn}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Confirm Booking
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className={styles.mapSection}>
        <div className={styles.mapOverlay}>
          <div className={styles.mapContent}>
            <h3>Find Us</h3>
            <p>123 Beauty Lane, Beverly Hills, CA 90210</p>
          </div>
        </div>
        <div className={styles.mapPlaceholder}>
          <div className={styles.mapGrid}>
            {[...Array(20)].map((_, i) => (
              <div key={i} className={styles.mapGridLine} />
            ))}
          </div>
          <div className={styles.mapPin}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--color-rose-gold)" stroke="var(--color-bg-primary)" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
              <circle cx="12" cy="10" r="3" fill="var(--color-bg-primary)" />
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
