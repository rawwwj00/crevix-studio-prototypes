"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function HomePage() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[var(--color-hero-bg)] via-white to-[var(--color-background)] pt-24 pb-16">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-primary-light)] border border-[var(--color-primary)]/20 text-sm text-[var(--color-primary)] font-medium mb-8"
              >
                <Star size={14} fill="currentColor" />
                Rated 4.9 by 2,000+ patients in Bengaluru
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.15] mb-6"
              >
                Your Smile Deserves{" "}
                <span className="text-gradient-primary italic">
                  Premium Care
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-[var(--color-muted)] max-w-lg mb-10 leading-relaxed"
              >
                Experience world-class cosmetic dentistry and compassionate care
                at our state-of-the-art clinic in Koramangala, Bengaluru.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-all shadow-lg shadow-[var(--color-primary)]/20 hover:shadow-xl inline-flex items-center justify-center gap-2 group"
                >
                  Book Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/specialists"
                  className="px-8 py-4 rounded-full border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-medium hover:bg-[var(--color-primary)] hover:text-white transition-all inline-flex items-center justify-center"
                >
                  Meet Our Specialists
                </Link>
              </motion.div>
            </div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/hero-clinic.png"
                  alt="DentCare Pro modern clinic interior"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                  style={{ height: '500px' }}
                  priority
                />
                {/* Overlay watermark */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase font-semibold text-[var(--color-primary)]/60">
                  CREVIX STUDIO
                </div>
              </div>

              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl border border-[var(--color-border)]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary-light)] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <p className="text-2xl font-serif font-bold">15+</p>
                    <p className="text-xs text-[var(--color-muted)]">
                      Years of Excellence
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-white rounded-2xl p-8 shadow-sm border border-[var(--color-border)]"
          >
            {[
              { value: "15+", label: "Years Experience" },
              { value: "10K+", label: "Happy Patients" },
              { value: "₹499", label: "Checkup Starts At" },
              { value: "24/7", label: "Emergency Care" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl md:text-3xl font-serif font-bold text-[var(--color-primary)]">
                  {stat.value}
                </p>
                <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===================== SERVICES PREVIEW ===================== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-3">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Premium Dental Services
              </h2>
              <p className="text-[var(--color-muted)] text-lg">
                From routine cleanings to complete smile makeovers — we bring
                artistry and precision to every treatment.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cosmetic Dentistry",
                desc: "Veneers, whitening & full-mouth restorations starting at ₹8,000.",
                img: "/service-cosmetic.png",
                href: "/services",
              },
              {
                title: "Preventive Care",
                desc: "Comprehensive exams, digital X-rays & professional cleanings from ₹499.",
                img: "/service-preventive.png",
                href: "/services",
              },
              {
                title: "Dental Implants",
                desc: "Permanent, natural-looking replacements with guided technology from ₹25,000.",
                img: "/service-implants.png",
                href: "/services",
              },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <Link href={service.href} className="group block">
                  <div className="bg-[var(--color-background)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={service.img}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl mb-2">
                        {service.title}
                      </h3>
                      <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <span className="text-[var(--color-primary)] text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn more <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="section-padding bg-[var(--color-background)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src="/hero-clinic.png"
                    alt="Our modern dental facility"
                    width={600}
                    height={450}
                    className="object-cover w-full"
                    style={{ height: '400px' }}
                  />
                </div>
                {/* Small watermark overlay */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase font-semibold text-[var(--color-primary)]/50">
                  CREVIX STUDIO
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-3">
                Why DentCare Pro
              </p>
              <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                Where Technology Meets{" "}
                <span className="text-gradient-primary italic">
                  Compassionate Care
                </span>
              </h2>
              <p className="text-[var(--color-muted)] text-lg mb-8 leading-relaxed">
                Our Koramangala clinic combines cutting-edge dental technology
                with a warm, welcoming environment so you always feel at ease.
              </p>

              <ul className="space-y-4">
                {[
                  "Painless treatments with advanced anaesthesia",
                  "NABH-accredited sterilisation protocols",
                  "Same-day emergency appointments",
                  "Transparent pricing — no hidden charges",
                  "EMI options available on treatments above ₹10,000",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--color-foreground)]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-3">
                Patient Stories
              </p>
              <h2 className="text-3xl md:text-4xl font-serif mb-4">
                Trusted by Thousands
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Ananya Sharma",
                location: "Indiranagar, Bengaluru",
                text: "The entire experience was painless and luxurious. Dr. Priya explained every step patiently. My veneers look incredibly natural!",
              },
              {
                name: "Rahul Deshmukh",
                location: "HSR Layout, Bengaluru",
                text: "I had severe dental anxiety for years. The team here completely changed my perspective. Highly recommend DentCare Pro to everyone.",
              },
              {
                name: "Meera Krishnan",
                location: "Whitefield, Bengaluru",
                text: "Got my Invisalign done here. The pricing was transparent — ₹85,000 all-inclusive. Dr. Arjun is a magician with aligners!",
              },
            ].map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-[var(--color-background)] rounded-2xl p-8 border border-[var(--color-border)] h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="flex gap-1 text-[var(--color-primary)] mb-5">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-[var(--color-foreground)] leading-relaxed italic flex-grow mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-serif font-semibold">{t.name}</p>
                    <p className="text-sm text-[var(--color-muted)]">
                      {t.location}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="section-padding bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-serif mb-6">
              Ready to Transform Your Smile?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Book your free consultation today and take the first step towards
              the smile you&apos;ve always wanted. Starts at just ₹499.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="px-9 py-4 rounded-full bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                Book Appointment
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+918012345678"
                className="px-9 py-4 rounded-full border-2 border-white/40 text-white font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
              >
                Call +91 80-1234-5678
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
