"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "5:30 AM", label: "Daily wake-up" },
  { value: "3500+", label: "Daily calories" },
  { value: "6 days", label: "Training per week" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-24 border-t border-slate-800/60 mb-16" />

        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 md:gap-24">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-8">About</p>
            <p className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-slate-100">
              5+ years building bodies and discipline
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              {metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-xl font-bold font-mono text-[#38bdf8]">{m.value}</p>
                  <p className="text-xs text-slate-500 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            className="border-l-2 border-[#38bdf8]/20 pl-6 space-y-5 text-base text-slate-400 leading-relaxed max-w-[65ch]"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p>
              <span className="text-slate-100 font-semibold">It started in a cramped Chandigarh gym with rusted plates and zero air conditioning.</span>{" "}
              Rudra walked in skinny, clueless, and hungry to change. Five years later, the iron shaped more than his physique &mdash; it built a philosophy.
            </p>
            <p>
              <span className="text-slate-100 font-semibold">No shortcuts, no magic supplements.</span>{" "}
              Just progressive overload, proper nutrition rooted in Indian food, and showing up when motivation disappears. That discipline is now the foundation of every client program he writes.
            </p>
            <p>
              <span className="text-slate-100 font-semibold">Today, Rudra coaches people across the Tricity and beyond</span>{" "}
              &mdash; helping them cut fat, build muscle, and develop the consistency that outlasts any 30-day challenge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
