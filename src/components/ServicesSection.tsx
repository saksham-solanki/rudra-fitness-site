"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList,
  Utensils,
  Video,
  Users,
  Zap,
  Trophy,
} from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Custom Diet Charts",
    price: "Starting ₹999/mo",
    features: [
      "Personalized macro breakdown",
      "Indian food focused plans",
      "Veg & Non-veg options",
      "Weekly adjustments",
      "Supplement guidance",
    ],
    popular: false,
  },
  {
    icon: ClipboardList,
    title: "Personal Training",
    price: "Starting ₹2,499/mo",
    features: [
      "Custom workout programs",
      "Form check video reviews",
      "Progressive overload tracking",
      "Weekly check-ins",
      "Diet plan included",
    ],
    popular: true,
  },
  {
    icon: Video,
    title: "1-on-1 Coaching",
    price: "Starting ₹4,999/mo",
    features: [
      "Daily Whatsapp support",
      "Live video training sessions",
      "Complete transformation plan",
      "Posing & physique guidance",
      "Contest prep available",
    ],
    popular: false,
  },
];

const extras = [
  {
    icon: Users,
    title: "Group Challenges",
    desc: "30-day transformation challenges with community support and accountability partners.",
  },
  {
    icon: Zap,
    title: "Quick Consult",
    desc: "One-time 45-min consultation for form checks, diet reviews, or training guidance.",
  },
  {
    icon: Trophy,
    title: "Competition Prep",
    desc: "12-16 week contest preparation for bodybuilding, powerlifting, or physique shows.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
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
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Transform Your
            <span className="gradient-text"> Physique</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm md:text-base">
            No cookie-cutter plans. Every program is built specifically for your
            body, your goals, and your lifestyle.
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className={`relative rounded-2xl p-6 md:p-8 border transition-all ${
                s.popular
                  ? "bg-gradient-to-b from-red-500/10 to-[#111] border-red-500/30 shadow-[0_0_40px_rgba(255,77,77,0.08)]"
                  : "bg-[#111] border-white/5 hover:border-red-500/20"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15 }}
            >
              {s.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-500 text-white text-xs font-bold rounded-full tracking-wider">
                  MOST POPULAR
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                <s.icon size={24} className="text-red-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-red-400 font-semibold text-sm mb-6">
                {s.price}
              </p>
              <ul className="space-y-3">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-gray-400 text-sm"
                  >
                    <span className="text-red-500 mt-0.5">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block w-full mt-6 py-3 text-center text-sm font-bold rounded-full transition-all active:scale-95 ${
                  s.popular
                    ? "bg-red-500 text-white hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,77,77,0.3)]"
                    : "border border-white/10 text-white hover:border-red-500/50"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Extra services */}
        <div className="grid md:grid-cols-3 gap-4">
          {extras.map((e, i) => (
            <motion.div
              key={e.title}
              className="hover-card flex items-start gap-4 bg-[#111] border border-white/5 rounded-xl p-5"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + i * 0.1 }}
            >
              <div className="w-10 h-10 shrink-0 rounded-lg bg-red-500/10 flex items-center justify-center">
                <e.icon size={18} className="text-red-500" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{e.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {e.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
