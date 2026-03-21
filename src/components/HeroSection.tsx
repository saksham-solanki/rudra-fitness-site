"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#0a0a0a]" />

      {/* Animated red gradient orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(255,77,77,0.4) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content */}
          <div className="order-2 md:order-1">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-xs tracking-wider text-red-400 uppercase">
                Chandigarh&apos;s Iron Culture
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="text-white block">LIFT HEAVY.</span>
              <span className="text-white block mt-1">STAY RAW.</span>
              <span className="gradient-text block mt-1">BE RUDRA.</span>
            </motion.h1>

            <motion.p
              className="mt-6 text-base md:text-lg text-gray-400 max-w-md mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Transforming bodies and minds through raw iron discipline.
              Personalized diet plans, fitness coaching, and the no-BS approach
              to building your strongest self.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 mt-8 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <a
                href="#programs"
                className="w-full sm:w-auto px-8 py-3.5 bg-red-500 text-white font-bold text-sm tracking-wider rounded-full hover:bg-red-600 transition-all hover:shadow-[0_0_30px_rgba(255,77,77,0.3)] active:scale-95 text-center"
              >
                START YOUR JOURNEY
              </a>
              <a
                href="https://www.instagram.com/rudra.lifts.iron"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 border border-white/10 text-white font-medium text-sm tracking-wider rounded-full hover:border-red-500/50 transition-all active:scale-95"
              >
                <Play size={16} className="text-red-500" />
                WATCH REELS
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex items-center gap-8 mt-10 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { number: "5+", label: "Years Training" },
                { number: "100+", label: "Lives Changed" },
                { number: "24/7", label: "Dedication" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-2xl md:text-3xl font-black text-white">
                    {stat.number}
                  </p>
                  <p className="text-xs text-gray-500 tracking-wider uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] mx-auto">
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-red-500/20"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute -top-1.5 left-1/2 w-3 h-3 bg-red-500 rounded-full" />
              </motion.div>

              {/* Inner circle with placeholder */}
              <div className="absolute inset-4 sm:inset-6 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden">
                {/* Placeholder for photo - large dumbbell icon */}
                <div className="text-center">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    className="mx-auto opacity-20"
                  >
                    <circle
                      cx="60"
                      cy="45"
                      r="20"
                      fill="none"
                      stroke="#ff4d4d"
                      strokeWidth="2"
                    />
                    <path
                      d="M40 75 C40 60, 80 60, 80 75 L85 110 L35 110 Z"
                      fill="none"
                      stroke="#ff4d4d"
                      strokeWidth="2"
                    />
                  </svg>
                  <p className="text-xs text-gray-600 mt-2 tracking-wider">
                    YOUR PHOTO HERE
                  </p>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute top-4 right-0 md:top-8 md:-right-4 bg-[#111] border border-white/10 rounded-xl px-3 py-2 shadow-xl"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-xs font-bold text-red-500">IRON CULTURE</p>
                <p className="text-[10px] text-gray-500">Chandigarh</p>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -left-2 md:bottom-12 md:-left-8 bg-[#111] border border-white/10 rounded-xl px-3 py-2 shadow-xl"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <p className="text-xs font-bold text-white">NO SHORTCUTS</p>
                <p className="text-[10px] text-gray-500">Just Hard Work</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} className="text-gray-600" />
      </motion.div>
    </section>
  );
}
