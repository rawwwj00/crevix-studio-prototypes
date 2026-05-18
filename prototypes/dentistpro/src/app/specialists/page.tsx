"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Award, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const specialists = [
  {
    name: "Dr. Priya Sharma",
    title: "Chief Dental Surgeon",
    specialisation: "Cosmetic & Restorative Dentistry",
    image: "/specialist-priya.png",
    experience: "12+ years",
    education: "BDS, MDS (Prosthodontics) — MAHE, Manipal",
    bio: "Dr. Priya leads our cosmetic dentistry department with a passion for creating natural, lasting smiles. She has performed over 3,000 veneer placements and is a certified Invisalign provider.",
    languages: "English, Hindi, Kannada",
  },
  {
    name: "Dr. Arjun Mehta",
    title: "Lead Implantologist",
    specialisation: "Implantology & Oral Surgery",
    image: "/specialist-arjun.png",
    experience: "10+ years",
    education: "BDS, MDS (Oral Surgery) — AIIMS, New Delhi",
    bio: "Dr. Arjun specialises in guided dental implant surgery and complex extractions. Trained at AIIMS and with fellowship experience in Seoul, he brings global expertise to every procedure.",
    languages: "English, Hindi, Tamil",
  },
  {
    name: "Dr. Neha Kapoor",
    title: "Senior Orthodontist",
    specialisation: "Orthodontics & Dentofacial Orthopaedics",
    image: "/specialist-neha.png",
    experience: "8+ years",
    education: "BDS, MDS (Orthodontics) — KLE VK, Belgaum",
    bio: "Dr. Neha is our aligner and braces specialist. She combines digital treatment planning with a gentle approach, making orthodontic journeys comfortable for both children and adults.",
    languages: "English, Hindi, Marathi",
  },
];

export default function SpecialistsPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[var(--color-hero-bg)] via-white to-[var(--color-background)] relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-3">
              Our Team
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Meet Our{" "}
              <span className="text-gradient-primary italic">Specialists</span>
            </h1>
            <p className="text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed">
              Our team of experienced, compassionate dentists brings together
              diverse specialisations to provide you the best care under one
              roof.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialists Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-20">
          {specialists.map((doc, index) => (
            <ScrollReveal key={index}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-5 gap-10 items-start bg-[var(--color-background)] rounded-3xl p-6 md:p-10 border border-[var(--color-border)] hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 !== 0 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Photo */}
                <div
                  className={`lg:col-span-2 ${
                    index % 2 !== 0 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                    <Image
                      src={doc.image}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top"
                    />
                    {/* Watermark */}
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm text-[10px] tracking-[0.15em] uppercase font-semibold text-[var(--color-primary)]/50">
                      CREVIX STUDIO
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div
                  className={`lg:col-span-3 ${
                    index % 2 !== 0 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-widest mb-2">
                    {doc.specialisation}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-serif mb-1">
                    {doc.name}
                  </h2>
                  <p className="text-[var(--color-muted)] text-lg mb-6">
                    {doc.title}
                  </p>

                  <p className="text-[var(--color-foreground)] leading-relaxed mb-8">
                    {doc.bio}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--color-border)]">
                      <Clock className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider">
                          Experience
                        </p>
                        <p className="font-semibold text-sm mt-0.5">
                          {doc.experience}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--color-border)]">
                      <GraduationCap className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider">
                          Education
                        </p>
                        <p className="font-semibold text-sm mt-0.5">
                          {doc.education}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[var(--color-border)]">
                      <Award className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider">
                          Languages
                        </p>
                        <p className="font-semibold text-sm mt-0.5">
                          {doc.languages}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Link
                    href="/services"
                    className="px-7 py-3 rounded-full bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-all shadow-md shadow-[var(--color-primary)]/20 inline-flex items-center gap-2 group"
                  >
                    Book with {doc.name.split(" ")[1]}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}
