'use client';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 80);
  });

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const mobileMenuVariants = {
    closed: {
      clipPath: 'circle(0% at calc(100% - 40px) 40px)',
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      clipPath: 'circle(150% at calc(100% - 40px) 40px)',
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <>
      <motion.header
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className={`container ${styles.navInner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" className={styles.logoIcon}>
              <path
                d="M20 16C20 20.418 16.418 24 12 24C7.582 24 4 20.418 4 16C4 11.582 7.582 8 12 8C16.418 8 20 11.582 20 16Z"
                stroke="#b76e79"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M20 48C20 43.582 16.418 40 12 40C7.582 40 4 43.582 4 48C4 52.418 7.582 56 12 56C16.418 56 20 52.418 20 48Z"
                stroke="#b76e79"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M20 16L56 40M20 48L56 24"
                stroke="#d4a0a7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className={styles.logoText}>
              LUXE<span className={styles.logoAccent}> SALON</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className={styles.desktopNav} id="main-navigation">
            {navLinks.map((link, i) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  {link.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Book Now CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className={styles.ctaWrapper}
          >
            <Link href="/contact" className={`btn btn-primary ${styles.bookBtn}`}>
              Book Now
            </Link>
          </motion.div>

          {/* Mobile Toggle */}
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <motion.span
              className={styles.toggleLine}
              animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            />
            <motion.span
              className={styles.toggleLine}
              animate={isMobileOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
            />
            <motion.span
              className={styles.toggleLine}
              animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className={styles.mobileNav}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={() => setIsMobileOpen(false)}
                  >
                    <span className={styles.mobileLinkIndex}>0{i + 1}</span>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '2rem' }}
              >
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  onClick={() => setIsMobileOpen(false)}
                >
                  Book Appointment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
