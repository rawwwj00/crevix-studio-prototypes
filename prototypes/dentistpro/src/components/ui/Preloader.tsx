"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="preloader-wrapper"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0D9488] to-[#06B6D4] flex items-center justify-center shadow-lg"
            >
              <span className="text-white font-serif text-3xl font-bold">D</span>
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h2 className="font-serif text-2xl tracking-tight text-[#1A1A2E]">
                DentCare <span className="text-[#0D9488]">Pro</span>
              </h2>
              <p className="text-xs text-[#64748B] tracking-[0.2em] uppercase mt-2">
                Premium Dental Care
              </p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-[#0D9488] to-[#06B6D4] rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
