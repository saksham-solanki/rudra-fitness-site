"use client";

import { motion } from "framer-motion";
import { Utensils, Video, TrendingUp, Star } from "lucide-react";

const spring = (d: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { type: "spring" as const, stiffness: 80, damping: 18, delay: d },
});

const features = [
  { icon: Utensils, text: "Custom Indian diet plans" },
  { icon: Video, text: "Weekly video check-ins" },
  { icon: TrendingUp, text: "Results in 8-12 weeks" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#080c18]">
      {/* Ambient radial gradient */}
      <div
        className="absolute top-1/4 left-1/3 w-[900px] h-[900px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left column — ~58% (7/12) */}
        <div className="lg:col-span-7 py-28 md:py-0">
          {/* Social proof pill */}
          <motion.div {...spring(0.05)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              100+ clients coached in Chandigarh
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 className="mt-7 text-4xl md:text-6xl font-extrabold tracking-tighter leading-[0.92]" {...spring(0.12)}>
            <span className="block text-slate-100">Build your strongest body</span>
            <span className="block text-slate-100 font-semibold mt-2">with Chandigarh&apos;s top coach</span>
          </motion.h1>

          {/* Subtext with price anchor */}
          <motion.p className="mt-7 text-base text-slate-400 max-w-[52ch] leading-relaxed" {...spring(0.2)}>
            Custom diet plans and training programs built for your body, your goals, your schedule. Starting at just <span className="text-[#38bdf8] font-medium">&nbsp;&#8377;999/month</span>.
          </motion.p>

          {/* CTA row */}
          <motion.div className="mt-9 flex flex-wrap gap-4" {...spring(0.28)}>
            <a href="#contact" className="btn-primary px-8 py-4 text-sm cursor-pointer">
              Get your free plan
            </a>
            <a href="#results" className="btn-ghost px-8 py-4 text-sm cursor-pointer">
              See transformations
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-500" {...spring(0.35)}>
            <span className="flex items-center gap-1.5">
              Trusted by 100+ clients
              <span className="flex gap-0.5 ml-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </span>
            </span>
            <span className="w-px h-4 bg-slate-700" />
            <span className="px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-400">Veg &amp; Non-veg plans</span>
          </motion.div>
        </div>

        {/* Right column — ~42% (5/12) */}
        <motion.div className="hidden lg:block lg:col-span-5" {...spring(0.3)}>
          <div className="bg-[#0f1729] rounded-3xl p-8 border border-slate-800/50">
            <p className="text-xs uppercase tracking-widest text-slate-500 mb-6">Why clients stay</p>
            <div className="flex flex-col gap-4">
              {features.map((f) => (
                <div key={f.text} className="flex items-center gap-4 p-4 rounded-2xl bg-[#080c18]/60 border border-slate-800/40">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#38bdf8]/10">
                    <f.icon size={18} className="text-[#38bdf8]" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">{f.text}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-4 text-center text-[#38bdf8] font-mono text-sm">Starting from &#8377;999/mo</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-12 bg-slate-700" />
      </motion.div>
    </section>
  );
}
