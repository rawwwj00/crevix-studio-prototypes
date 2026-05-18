'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimateIn from '@/components/AnimateIn';
import SectionLoader from '@/components/SectionLoader';
import { IconMapPin, IconPhone, IconMail, IconClock, IconArrowRight, IconCheck } from '@/components/Icons';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <>
      <section className={styles.contactHero}>
        <div className={`container ${styles.contactHeroContent}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              <span>We&apos;d Love to Hear From You</span>
            </div>
            <h1 className={styles.pageTitle}>Get In <span className={styles.accent}>Touch</span></h1>
            <p className={styles.pageSub}>Have questions? Send us a message and we&apos;ll respond within 24 hours.</p>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className={styles.contactGrid}>
            <AnimateIn direction="left">
              <div className={styles.infoSide}>
                <h2 className={styles.infoTitle}>Visit Our Gym</h2>
                <p className={styles.infoText}>Drop by for a free tour and see why APEX is the best fitness destination in the city.</p>
                <div className={styles.infoItems}>
                  {[
                    { icon: <IconMapPin size={18} />, label: 'Location', value: '123 Lajpat Nagar IV\nNew Delhi - 110024' },
                    { icon: <IconPhone size={18} />, label: 'Phone', value: '+91 12345 67890' },
                    { icon: <IconMail size={18} />, label: 'Email', value: 'info@apexfitness.com' },
                    { icon: <IconClock size={18} />, label: 'Hours', value: 'Open 24/7\nStaffed: 6AM – 10PM' },
                  ].map((item, i) => (
                    <div key={i} className={styles.infoItem}>
                      <div className={styles.infoIconWrap}>{item.icon}</div>
                      <div>
                        <span className={styles.infoLabel}>{item.label}</span>
                        <span className={styles.infoValue}>{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Map placeholder */}
                <div className={styles.mapPlaceholder}>
                  <div className={styles.mapGrid}>
                    {Array(16).fill(0).map((_, i) => <div key={i} className={styles.mapDot} />)}
                  </div>
                  <div className={styles.mapInner}>
                    <div className={styles.mapPinIcon}><IconMapPin size={24} color="var(--accent)" /></div>
                    <span className={styles.mapText}>APEX FITNESS</span>
                    <span className={styles.mapAddr}>123 Lajpat Nagar IV, New Delhi - 110024</span>
                  </div>
                </div>
              </div>
            </AnimateIn>

            <AnimateIn direction="right">
              <form className={styles.form} onSubmit={handleSubmit}>
                <h2 className={styles.formTitle}>Send a Message</h2>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="firstName">First Name</label>
                    <input className={styles.input} type="text" id="firstName" placeholder="John" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="lastName">Last Name</label>
                    <input className={styles.input} type="text" id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">Email</label>
                  <input className={styles.input} type="email" id="email" placeholder="[EMAIL_ADDRESS]" required />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="phone">Phone</label>
                  <input className={styles.input} type="tel" id="phone" placeholder="+91 12345 67890" />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="interest">Interest</label>
                  <select className={styles.input} id="interest">
                    <option value="">Select an option</option>
                    <option>General Inquiry</option>
                    <option>Membership</option>
                    <option>Personal Training</option>
                    <option>Group Classes</option>
                    <option>Corporate Wellness</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea className={styles.textarea} id="message" rows={5} placeholder="Tell us about your fitness goals..." required />
                </div>
                <button type="submit" className={styles.submitBtn} id="contact-submit" disabled={sending}>
                  {sending ? (
                    <span className={styles.sendingWrap}>
                      <span className={styles.sendingSpinner} />
                      <span>Sending...</span>
                    </span>
                  ) : submitted ? (
                    <span className={styles.sentWrap}>
                      <IconCheck size={16} color="#0a0a0a" />
                      <span>Message Sent!</span>
                    </span>
                  ) : (
                    <span className={styles.sendWrap}>
                      <span>Send Message</span>
                      <IconArrowRight size={14} />
                    </span>
                  )}
                </button>
                {submitted && (
                  <motion.p
                    className={styles.successMsg}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Thank you! We&apos;ll get back to you within 24 hours.
                  </motion.p>
                )}
              </form>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
