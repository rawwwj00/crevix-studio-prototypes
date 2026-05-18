'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../components/ScrollReveal';
import styles from './gallery.module.css';

const galleryItems = [
  { src: '/images/gallery-1.png', alt: 'Hair Transformation', category: 'Hair', title: 'Stunning Transformation', desc: 'From dull to dazzling — a complete hair revival.' },
  { src: '/images/gallery-2.png', alt: 'Balayage Styling', category: 'Color', title: 'Golden Balayage', desc: 'Sun-kissed balayage with warm honey tones.' },
  { src: '/images/gallery-3.png', alt: 'Men\'s Grooming', category: 'Grooming', title: 'Modern Gentleman', desc: 'Sharp cut with precision beard grooming.' },
  { src: '/images/service-haircut.png', alt: 'Precision Haircut', category: 'Hair', title: 'Precision Cut', desc: 'Expert cutting technique for volume and movement.' },
  { src: '/images/service-coloring.png', alt: 'Hair Coloring', category: 'Color', title: 'Vivid Color Art', desc: 'Rich, dimensional color that turns heads.' },
  { src: '/images/service-facial.png', alt: 'Luxury Facial', category: 'Skin', title: 'Glow Up Facial', desc: 'Rejuvenating treatment for radiant skin.' },
  { src: '/images/service-makeup.png', alt: 'Bridal Makeup', category: 'Makeup', title: 'Bridal Perfection', desc: 'Flawless bridal beauty for the perfect day.' },
  { src: '/images/interior.png', alt: 'Salon Interior', category: 'Salon', title: 'Our Space', desc: 'Luxury meets comfort in our premier salon.' },
  { src: '/images/hero.png', alt: 'Salon Ambiance', category: 'Salon', title: 'The Atmosphere', desc: 'Designed for relaxation and transformation.' },
];

const categories = ['All', 'Hair', 'Color', 'Grooming', 'Skin', 'Makeup', 'Salon'];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

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
            Our Portfolio
          </motion.span>
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Gallery of <span className="text-gradient">Artistry</span>
          </motion.h1>
          <motion.p
            className={styles.heroSubtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            A curated collection of our finest work — every image tells a story
            of transformation and beauty.
          </motion.p>
        </div>
      </section>

      {/* Gallery */}
      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          {/* Filter Tabs */}
          <ScrollReveal>
            <div className={styles.filterTabs}>
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  className={`${styles.filterTab} ${activeCategory === cat ? styles.filterTabActive : ''}`}
                  onClick={() => setActiveCategory(cat)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>

          {/* Masonry Grid */}
          <motion.div className={styles.galleryGrid} layout>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={item.src}
                  className={styles.galleryItem}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setSelectedImage(item)}
                  whileHover={{ y: -6 }}
                >
                  <div className={styles.galleryImageWrapper}>
                    <img src={item.src} alt={item.alt} className={styles.galleryImage} />
                    <div className={styles.galleryOverlay}>
                      <span className={styles.galleryCat}>{item.category}</span>
                      <h3 className={styles.galleryTitle}>{item.title}</h3>
                      <p className={styles.galleryDesc}>{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.lightboxClose} onClick={() => setSelectedImage(null)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <img src={selectedImage.src} alt={selectedImage.alt} className={styles.lightboxImage} />
              <div className={styles.lightboxInfo}>
                <span className={styles.lightboxCat}>{selectedImage.category}</span>
                <h3 className={styles.lightboxTitle}>{selectedImage.title}</h3>
                <p className={styles.lightboxDesc}>{selectedImage.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}
