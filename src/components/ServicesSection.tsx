"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Diet Plan",
    price: "₹999",
    tagline: "Eat right for your body",
    features: ["Personalized macros", "Indian food plans", "Veg & non-veg options", "Weekly adjustments", "Supplement guidance"],
    recommended: false,
  },
  {
    name: "Personal Training",
    price: "₹2,499",
    tagline: "Train smarter, grow faster",
    features: ["Everything in Diet Plan", "Custom workout programs", "Form check videos", "Progressive overload tracking", "Weekly check-ins", "Diet plan included"],
    recommended: true,
  },
  {
    name: "1-on-1 Coaching",
    price: "₹4,999",
    tagline: "Your complete transformation",
    features: ["Everything in Training", "Daily WhatsApp support", "Live video sessions", "Posing & physique guidance", "Contest prep available", "Priority response"],
    recommended: false,
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
            Choose your plan
          </h2>
          <p className="text-slate-400 mt-3 max-w-md mx-auto text-sm">
            Flexible options for every goal. Cancel or switch anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              className={`card p-8 flex flex-col h-full relative ${p.recommended ? "border border-[#38bdf8]/30" : ""}`}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
            >
              {p.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#38bdf8] text-[#080c18] text-xs font-bold px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}
              <h3 className="text-xl font-bold text-slate-100">{p.name}</h3>
              <p className="mt-4">
                <span className="text-3xl font-extrabold text-[#38bdf8]">{p.price}</span>
                <span className="text-sm text-slate-500">/mo</span>
              </p>
              <p className="text-sm text-slate-400 mt-2">{p.tagline}</p>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 mt-0.5 text-[#38bdf8] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block text-center py-3 text-sm ${p.recommended ? "btn-primary" : "btn-ghost"}`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center mt-10 text-sm text-slate-400"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Not sure which plan?{" "}
          <a href="#contact" className="text-[#38bdf8] hover:underline underline-offset-4">
            Message me and I&apos;ll help you decide &rarr;
          </a>
        </motion.p>
      </div>
    </section>
  );
}
