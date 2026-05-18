'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ],
  Services: [
    { label: 'Haircuts & Styling', href: '/services' },
    { label: 'Hair Coloring', href: '/services' },
    { label: 'Facials & Skincare', href: '/services' },
    { label: 'Bridal Makeup', href: '/services' },
    { label: 'Spa Treatments', href: '/services' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top Marquee */}
      <div className="marquee-wrapper" style={{ borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="marquee-track">
          {[...Array(6)].map((_, i) => (
            <span className="marquee-item" key={i}>
              LUXE SALON <span className="dot" /> BEAUTY <span className="dot" /> STYLE
            </span>
          ))}
        </div>
      </div>

      <div className={`container ${styles.footerInner}`}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <motion.div
            className={styles.brandCol}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.footerLogo}>
              <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
                <path d="M20 16C20 20.418 16.418 24 12 24C7.582 24 4 20.418 4 16C4 11.582 7.582 8 12 8C16.418 8 20 11.582 20 16Z" stroke="#b76e79" strokeWidth="2" fill="none" />
                <path d="M20 48C20 43.582 16.418 40 12 40C7.582 40 4 43.582 4 48C4 52.418 7.582 56 12 56C16.418 56 20 52.418 20 48Z" stroke="#b76e79" strokeWidth="2" fill="none" />
                <path d="M20 16L56 40M20 48L56 24" stroke="#d4a0a7" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span>LUXE <span style={{ color: 'var(--color-rose-gold)' }}>SALON</span></span>
            </div>
            <p className={styles.brandDescription}>
              Where beauty meets artistry. Experience premium salon services
              in an atmosphere of pure luxury and sophistication.
            </p>
            <div className={styles.socialLinks}>
              {['Instagram', 'Facebook', 'Pinterest', 'TikTok'].map((social) => (
                <a key={social} href="#" className={styles.socialLink} aria-label={social}>
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], colIdx) => (
            <motion.div
              key={title}
              className={styles.linkCol}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + colIdx * 0.1 }}
            >
              <h4 className={styles.colTitle}>{title}</h4>
              <ul className={styles.linkList}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div
            className={styles.linkCol}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className={styles.colTitle}>Visit Us</h4>
            <ul className={styles.linkList}>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>Address</span>
                <span>123 Beauty Lane, Beverly Hills, CA 90210</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>Phone</span>
                <span>+1 (310) 555-0147</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>Email</span>
                <span>hello@luxesalon.com</span>
              </li>
              <li className={styles.contactItem}>
                <span className={styles.contactLabel}>Hours</span>
                <span>Mon - Sat: 9AM - 8PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Luxe Salon & Spa. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
