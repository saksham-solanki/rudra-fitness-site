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
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-6">About</p>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight text-slate-100">
              5+ years building bodies and discipline
            </h2>

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
            className="border-l-2 border-[#38bdf8]/20 pl-8 space-y-6 text-base text-slate-400 leading-relaxed max-w-[65ch]"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p>
              <span className="text-slate-200 font-medium">It started in a cramped Chandigarh gym with rusted plates and zero air conditioning.</span>{" "}
              Rudra walked in skinny, clueless, and hungry to change. Five years later, the iron shaped more than his physique — it built a philosophy.
            </p>
            <p>
              <span className="text-slate-200 font-medium">No shortcuts, no magic supplements.</span>{" "}
              Just progressive overload, proper nutrition rooted in Indian food, and showing up when motivation disappears. That discipline is the foundation of every client program.
            </p>
            <p>
              <span className="text-slate-200 font-medium">Today, Rudra coaches people across the Tricity and beyond</span>{" "}
              — helping them cut fat, build muscle, and develop consistency that outlasts any 30-day challenge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
