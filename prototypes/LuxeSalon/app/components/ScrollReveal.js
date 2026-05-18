'use client';
import { motion } from 'framer-motion';

const presets = {
  fadeUp: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeDown: {
    initial: { opacity: 0, y: -60 },
    whileInView: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
  },
  fadeRight: {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
  },
  scaleUp: {
    initial: { opacity: 0, scale: 0.85 },
    whileInView: { opacity: 1, scale: 1 },
  },
  clipReveal: {
    initial: { clipPath: 'inset(100% 0 0 0)' },
    whileInView: { clipPath: 'inset(0% 0 0 0)' },
  },
  rotateIn: {
    initial: { opacity: 0, rotate: -5, y: 40 },
    whileInView: { opacity: 1, rotate: 0, y: 0 },
  },
};

export default function ScrollReveal({
  children,
  preset = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  style = {},
  once = true,
  amount = 0.3,
  as = 'div',
}) {
  const animation = presets[preset] || presets.fadeUp;
  const Component = motion[as] || motion.div;

  return (
    <Component
      className={className}
      style={style}
      initial={animation.initial}
      whileInView={animation.whileInView}
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </Component>
  );
}

export function StaggerContainer({ children, className = '', style = {}, staggerDelay = 0.1 }) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', style = {} }) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function TextReveal({ children, className = '', delay = 0 }) {
  return (
    <span style={{ display: 'inline-block', overflow: 'hidden' }}>
      <motion.span
        className={className}
        style={{ display: 'inline-block' }}
        initial={{ y: '110%', rotate: 3 }}
        whileInView={{ y: '0%', rotate: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function ParallaxImage({ src, alt, className = '', speed = 0.3, style = {} }) {
  return (
    <motion.div
      className={className}
      style={{ overflow: 'hidden', ...style }}
      initial={{ opacity: 0, scale: 1.1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </motion.div>
  );
}
