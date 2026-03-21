"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Clock, TrendingUp, Shield } from "lucide-react";

const programs = [
  {
    icon: Flame,
    tag: "Fat Loss",
    title: "Shred Program",
    duration: "8-12 Weeks",
    desc: "Science-based cutting protocol. Custom calorie deficits, macro cycling, and progressive training to strip body fat while preserving lean muscle mass.",
    highlights: [
      "Weekly body composition tracking",
      "Indian food-based meal plans",
      "Cardio & resistance protocol",
      "Supplement stack guidance",
    ],
    color: "from-red-500/20 to-orange-500/5",
    borderColor: "border-red-500/20",
  },
  {
    icon: TrendingUp,
    tag: "Muscle Building",
    title: "Mass Gain Protocol",
    duration: "12-16 Weeks",
    desc: "Strategic caloric surplus with periodized training. Perfect for hard gainers and anyone looking to add quality muscle without excessive fat gain.",
    highlights: [
      "Progressive overload programming",
      "High-calorie Indian diet plans",
      "Strength benchmarks tracking",
      "Recovery optimization",
    ],
    color: "from-blue-500/20 to-purple-500/5",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Shield,
    tag: "Body Recomp",
    title: "Lean Transformation",
    duration: "12 Weeks",
    desc: "The best of both worlds. Simultaneously build muscle and lose fat with precision nutrition timing and smart training splits.",
    highlights: [
      "Nutrient timing strategy",
      "Custom macro cycling",
      "Body recomposition tracking",
      "Lifestyle integration",
    ],
    color: "from-green-500/20 to-emerald-500/5",
    borderColor: "border-green-500/20",
  },
];

const process = [
  {
    step: "01",
    title: "Assessment",
    desc: "Complete body analysis, goal setting, and lifestyle evaluation to build your baseline.",
  },
  {
    step: "02",
    title: "Custom Plan",
    desc: "Personalized training program and diet chart built specifically for your body and goals.",
  },
  {
    step: "03",
    title: "Execute",
    desc: "Daily guidance, form checks, accountability, and real-time adjustments as you progress.",
  },
  {
    step: "04",
    title: "Transform",
    desc: "Track measurable results week by week. Celebrate wins. Set new goals. Never stop growing.",
  },
];

export default function ProgramsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="programs"
      className="py-20 md:py-32 bg-[#050505] relative"
      ref={ref}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Choose Your Path
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Training
            <span className="gradient-text"> Programs</span>
          </h2>
        </motion.div>

        {/* Program cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              className={`hover-card bg-gradient-to-b ${p.color} border ${p.borderColor} rounded-2xl p-6 md:p-8`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                  <p.icon size={20} className="text-red-500" />
                </div>
                <div>
                  <span className="text-[10px] tracking-wider text-gray-500 uppercase">
                    {p.tag}
                  </span>
                  <div className="flex items-center gap-2">
                    <Clock size={12} className="text-gray-600" />
                    <span className="text-xs text-gray-600">{p.duration}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-white font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-5">
                {p.desc}
              </p>

              <ul className="space-y-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2 text-gray-400 text-xs"
                  >
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="block w-full mt-6 py-3 text-center text-sm font-bold text-white border border-white/10 rounded-full hover:border-red-500/50 hover:bg-red-500/5 transition-all active:scale-95"
              >
                Enroll Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-black">
            How It <span className="gradient-text">Works</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full bg-[#111] border border-white/5 flex items-center justify-center mb-3">
                <span className="text-red-500 font-black text-lg">
                  {p.step}
                </span>
              </div>
              <h4 className="text-white font-bold text-sm mb-1">{p.title}</h4>
              <p className="text-gray-600 text-xs leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
