"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Heart, Brain, Target } from "lucide-react";

const values = [
  {
    icon: Dumbbell,
    title: "Raw Strength",
    desc: "No machines, no gimmicks. Just iron, sweat, and compound movements that build real-world power.",
  },
  {
    icon: Heart,
    title: "Discipline Over Motivation",
    desc: "Motivation fades. Discipline stays. Every rep, every meal, every day — consistency is the real flex.",
  },
  {
    icon: Brain,
    title: "Smart Training",
    desc: "Science-backed programming. Progressive overload. Periodization. Training hard AND training smart.",
  },
  {
    icon: Target,
    title: "Results Focused",
    desc: "No fluff, no fads. Clear goals, structured plans, and measurable progress every single week.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative" ref={ref}>
      {/* Subtle red accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              The Story
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              From Chandigarh&apos;s
              <br />
              <span className="gradient-text">Iron Playgrounds</span>
            </h2>
            <div className="red-line mt-4 mb-6" />

            <div className="space-y-4 text-gray-400 text-sm md:text-base leading-relaxed">
              <p>
                What started as a skinny kid stepping into a local gym in
                Chandigarh has evolved into a relentless pursuit of iron
                discipline. Every plate loaded, every PR crushed, every meal
                prepped — it all tells the same story: <strong className="text-white">no shortcuts.</strong>
              </p>
              <p>
                Rudra doesn&apos;t just lift weights. He builds character through
                the barbell. The gym isn&apos;t just a place — it&apos;s a
                temple where excuses die and warriors are forged.
              </p>
              <p>
                Based in the fitness capital of North India, Rudra brings the
                raw Chandigarh gym culture to your screen — unfiltered,
                authentic, and always pushing limits.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { num: "5:30 AM", label: "Daily Wake-Up" },
                { num: "6x", label: "Training/Week" },
                { num: "3500+", label: "Calories/Day" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[#111] border border-white/5 rounded-xl p-3 text-center"
                >
                  <p className="text-lg md:text-xl font-black text-red-500">
                    {s.num}
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Values grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="hover-card bg-[#111] border border-white/5 rounded-2xl p-5 md:p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-3">
                  <v.icon size={20} className="text-red-500" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{v.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {v.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
