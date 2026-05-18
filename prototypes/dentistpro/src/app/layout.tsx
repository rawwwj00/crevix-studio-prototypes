import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { Watermark } from "@/components/ui/Watermark";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentCare Pro | Premium Dental Clinic — Koramangala, Bengaluru",
  description:
    "Experience world-class dental care at DentCare Pro. Our specialists offer cosmetic dentistry, implants, orthodontics and preventive care in Koramangala, Bengaluru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Preloader />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Watermark />
      </body>
    </html>
  );
}
