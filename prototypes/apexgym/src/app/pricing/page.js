'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimateIn from '@/components/AnimateIn';
import Link from 'next/link';
import { IconCheck, IconArrowRight, IconZap, IconStar, IconShield } from '@/components/Icons';
import styles from './pricing.module.css';

const PLANS = [
  {
    name: 'Starter', icon: <IconZap size={22} />,
    monthlyPrice: 29, yearlyPrice: 24,
    desc: 'Perfect for getting started on your fitness journey.',
    features: ['Access to gym floor', 'Locker room access', 'Basic fitness assessment', '2 group classes/week', 'Mobile app access'],
    highlighted: false,
  },
  {
    name: 'Pro', icon: <IconStar size={22} />,
    monthlyPrice: 59, yearlyPrice: 49,
    desc: 'Our most popular plan for dedicated fitness enthusiasts.',
    features: ['Full gym access 24/7', 'Unlimited group classes', 'Personal training (2x/month)', 'Nutrition consultation', 'Recovery zone access', 'Towel service', 'Guest passes (2/month)'],
    highlighted: true,
  },
  {
    name: 'Elite', icon: <IconShield size={22} />,
    monthlyPrice: 99, yearlyPrice: 79,
    desc: 'The ultimate package for peak performance seekers.',
    features: ['Everything in Pro', 'Unlimited personal training', 'Custom meal plans', 'Priority class booking', 'Private locker', 'Spa & massage credits', 'VIP lounge access', 'Body composition analysis'],
    highlighted: false,
  },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <section className={styles.pricingHero}>
        <div className={`container ${styles.pricingHeroContent}`}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              <span>7-Day Free Trial Included</span>
            </div>
            <h1 className={styles.pageTitle}>Simple, Transparent <span className={styles.accent}>Pricing</span></h1>
            <p className={styles.pageSub}>Choose the plan that fits your goals. All plans include a 7-day free trial.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <div className={styles.toggle}>
              <span className={!yearly ? styles.toggleActive : ''}>Monthly</span>
              <button className={styles.toggleSwitch} onClick={() => setYearly(v => !v)} id="billing-toggle" aria-label="Toggle billing period">
                <span className={`${styles.toggleKnob} ${yearly ? styles.toggleKnobRight : ''}`} />
              </button>
              <span className={yearly ? styles.toggleActive : ''}>
                Yearly <span className={styles.saveBadge}>Save 20%</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className={styles.planGrid}>
            {PLANS.map((plan, i) => (
              <AnimateIn key={plan.name} delay={i * 0.12}>
                <div className={`${styles.planCard} ${plan.highlighted ? styles.planHighlighted : ''}`}>
                  {plan.highlighted && <div className={styles.popularBadge}>Most Popular</div>}
                  <div className={styles.planHeader}>
                    <div className={styles.planIconWrap}>{plan.icon}</div>
                    <h3 className={styles.planName}>{plan.name}</h3>
                  </div>
                  <p className={styles.planDesc}>{plan.desc}</p>
                  <div className={styles.priceWrap}>
                    <span className={styles.currency}>$</span>
                    <motion.span
                      key={yearly ? 'y' : 'm'}
                      className={styles.price}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {yearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </motion.span>
                    <span className={styles.period}>/month</span>
                  </div>
                  {yearly && <p className={styles.billed}>Billed ${plan.yearlyPrice * 12}/year</p>}
                  <Link href="/contact" className={`${styles.planBtn} ${plan.highlighted ? styles.planBtnPrimary : styles.planBtnOutline}`}>
                    <span>Start Free Trial</span>
                    <IconArrowRight size={14} />
                  </Link>
                  <ul className={styles.featureList}>
                    {plan.features.map(f => (
                      <li key={f} className={styles.featureItem}>
                        <span className={styles.checkMark}><IconCheck size={12} color="var(--accent)" /></span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.cardGlow} />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <AnimateIn className={styles.faqHeader}>
            <span className={styles.faqLabel}>FAQ</span>
            <h2 className={styles.faqTitle}>Common <span className={styles.accent}>Questions</span></h2>
          </AnimateIn>
          <div className={styles.faqGrid}>
            {[
              { q: 'Can I cancel anytime?', a: 'Yes! All plans are month-to-month with no long-term contracts. Cancel anytime from your account dashboard.' },
              { q: 'What\'s included in the free trial?', a: 'Your 7-day free trial includes full access to all facilities and classes matching your chosen plan tier.' },
              { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.' },
              { q: 'Do you offer student discounts?', a: 'Yes! Students with a valid ID receive 15% off any plan. Contact our team for details.' },
            ].map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className={styles.faqCard}>
                  <h4 className={styles.faqQ}>{faq.q}</h4>
                  <p className={styles.faqA}>{faq.a}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
