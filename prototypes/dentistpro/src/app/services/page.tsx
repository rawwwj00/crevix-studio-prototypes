"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const services = [
  {
    title: "Cosmetic Dentistry",
    tagline: "Smile Makeover Experts",
    description:
      "Transform your smile with our premium cosmetic procedures. From porcelain veneers to professional whitening, we use the latest techniques to deliver stunning, natural-looking results.",
    image: "/service-cosmetic.png",
    features: [
      "Porcelain & Composite Veneers",
      "Laser Teeth Whitening",
      "Smile Design & Digital Preview",
      "Full Mouth Rehabilitation",
    ],
    price: "Starting from ₹8,000",
  },
  {
    title: "Preventive Care",
    tagline: "Your Health, Our Priority",
    description:
      "Maintaining your oral health is the foundation of a beautiful smile. Our preventive programmes include thorough exams, digital diagnostics, and professional cleanings.",
    image: "/service-preventive.png",
    features: [
      "Comprehensive Oral Examination",
      "Digital X-Rays & OPG",
      "Professional Scaling & Polishing",
      "Fluoride Treatment & Sealants",
    ],
    price: "Starting from ₹499",
  },
  {
    title: "Dental Implants",
    tagline: "Permanent Solutions, Natural Feel",
    description:
      "Replace missing teeth permanently with our guided implant technology. Our implants integrate seamlessly with your natural teeth for a result that looks and feels completely real.",
    image: "/service-implants.png",
    features: [
      "Single & Multiple Tooth Implants",
      "All-on-4 Full Arch Solutions",
      "3D-Guided Implant Placement",
      "Same-Day Implant Loading",
    ],
    price: "Starting from ₹25,000",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--color-hero-bg)] via-white to-[var(--color-background)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--color-primary)]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Comprehensive Dental{" "}
              <span className="text-gradient-primary italic">Solutions</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
              We offer a wide range of dental treatments tailored to your unique
              needs. Every procedure is performed with precision, care, and
              transparent pricing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <ScrollReveal key={index}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="rounded-3xl overflow-hidden shadow-lg group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={450}
                      className="object-cover w-full group-hover:scale-105 transition-transform duration-700"
                      style={{ height: 'clamp(350px, 30vw, 420px)' }}
                    />
                  </div>
                  {/* Price badge */}
                  <div className="absolute -bottom-4 left-6 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-xl shadow-lg text-sm font-semibold">
                    {service.price}
                  </div>
                  {/* Watermark */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase font-semibold text-[var(--color-primary)]/50">
                    CREVIX STUDIO
                  </div>
                </div>

                {/* Text */}
                <div
                  className={`${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-2">
                    {service.tagline}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, fi) => (
                      <li
                        key={fi}
                        className="flex items-center gap-3 text-[var(--color-foreground)]"
                      >
                        <Check className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/"
                    className="px-7 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-all shadow-md shadow-[var(--color-primary)]/20 inline-flex items-center gap-2 group"
                  >
                    Book This Service
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section className="section-padding bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-sm border border-[var(--color-border)]">
              <h2 className="text-2xl md:text-3xl font-serif mb-4">
                Transparent Pricing, Always
              </h2>
              <p className="text-[var(--color-muted)] text-lg leading-relaxed mb-6">
                All prices shown are starting estimates. After a thorough
                examination, we provide a detailed treatment plan with exact
                costs. EMI options are available on treatments above ₹10,000.
              </p>
              <p className="text-sm text-[var(--color-muted)]">
                Accepted: Cash · UPI · Credit/Debit Cards · Bajaj Finserv EMI ·
                Insurance (select providers)
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
