import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-primary)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center text-white font-bold font-serif shadow-md">
                D
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight">
                DentCare <span className="text-[var(--color-primary)]">Pro</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Elevating the standard of dental care through artistry,
              technology, and genuine compassion in the heart of Bengaluru.
            </p>
            <div className="flex gap-4 text-white/50 text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-white transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/specialists"
                  className="hover:text-white transition-colors"
                >
                  Our Specialists
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-5">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-[var(--color-primary)] shrink-0 mt-0.5"
                />
                <span>
                  #42, 3rd Cross Road,
                  <br />
                  Koramangala 5th Block,
                  <br />
                  Bengaluru — 560 095
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-[var(--color-primary)] shrink-0"
                />
                <span>+91 80-1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-[var(--color-primary)] shrink-0"
                />
                <span>care@dentcarepro.in</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg mb-5">Clinic Hours</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-3">
                <Clock
                  size={18}
                  className="text-[var(--color-primary)] shrink-0"
                />
                <div>
                  <p className="text-white/80">Mon – Sat</p>
                  <p>9:00 AM – 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock
                  size={18}
                  className="text-[var(--color-primary)] shrink-0"
                />
                <div>
                  <p className="text-white/80">Sunday</p>
                  <p>10:00 AM – 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
          <p>
            &copy; {new Date().getFullYear()} DentCare Pro. All rights reserved.
          </p>
          <p className="tracking-[0.15em] uppercase font-semibold text-[var(--color-primary)]/40">
            Designed by CREVIX STUDIO
          </p>
        </div>
      </div>
    </footer>
  );
}
