'use client';
import Link from 'next/link';
import { IconBolt, IconInstagram, IconTwitter, IconYoutube, IconFacebook, IconMapPin, IconPhone, IconMail, IconArrowRight } from './Icons';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Newsletter strip */}
      <div className={styles.newsletter}>
        <div className={`container ${styles.nlInner}`}>
          <div className={styles.nlText}>
            <h3 className={styles.nlTitle}>Ready to start your journey?</h3>
            <p className={styles.nlSub}>Subscribe for tips, updates, and exclusive member offers.</p>
          </div>
          <form className={styles.nlForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" className={styles.nlInput} />
            <button type="submit" className={styles.nlBtn}>
              <IconArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoIconWrap}>
                <IconBolt size={16} color="var(--accent)" />
              </span>
              <span className={styles.logoText}>APEX</span>
              <span className={styles.logoSub}>FITNESS</span>
            </Link>
            <p className={styles.tagline}>Transform your body. Elevate your mind. Unleash your potential at the premier fitness destination.</p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink} aria-label="Instagram"><IconInstagram size={16} /></a>
              <a href="#" className={styles.socialLink} aria-label="Twitter"><IconTwitter size={16} /></a>
              <a href="#" className={styles.socialLink} aria-label="YouTube"><IconYoutube size={16} /></a>
              <a href="#" className={styles.socialLink} aria-label="Facebook"><IconFacebook size={16} /></a>
            </div>
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            {[['/', 'Home'], ['/classes', 'Classes'], ['/trainers', 'Trainers'], ['/pricing', 'Pricing'], ['/contact', 'Contact']].map(([href, label]) => (
              <Link key={href} href={href} className={styles.link}>{label}</Link>
            ))}
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Programs</h4>
            {['Strength Training', 'HIIT Classes', 'Yoga & Wellness', 'Boxing', 'Personal Training'].map(p => (
              <a key={p} href="#" className={styles.link}>{p}</a>
            ))}
          </div>
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Info</h4>
            <div className={styles.contactItem}>
              <IconMapPin size={14} color="var(--accent)" />
              <span>123 Lajpat Nagar IV, New Delhi - 110024</span>
            </div>
            <div className={styles.contactItem}>
              <IconPhone size={14} color="var(--accent)" />
              <span>+91 12345 67890</span>
            </div>
            <div className={styles.contactItem}>
              <IconMail size={14} color="var(--accent)" />
              <span>info@apexfitness.com</span>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} This product licensed under <a href="https://www.crevix-studio.in/">Crevix Studio</a>. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <a href="https://www.crevix-studio.in/">Privacy Policy</a>
            <span className={styles.bottomDot}>•</span>
            <a href="https://www.crevix-studio.in/">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
