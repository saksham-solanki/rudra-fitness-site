"use client";

import { motion } from "framer-motion";
import { Play, Instagram } from "lucide-react";

const reels = [
  { caption: "225kg Deadlift PR", gradient: "from-red-900/40 to-[#0f1729]" },
  { caption: "Full Day of Eating", gradient: "from-emerald-900/40 to-[#0f1729]" },
  { caption: "12 Week Transformation", gradient: "from-sky-900/40 to-[#0f1729]" },
];

export default function InstagramSection() {
  return (
    <section className="section-alt py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-slate-100 text-lg font-semibold">
            <Instagram size={20} className="text-[#38bdf8]" />
            @rudra.lifts.iron
          </div>
          <p className="text-sm text-slate-500 mt-2">Follow the grind</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {reels.map((r, i) => (
            <motion.a
              key={r.caption}
              href="https://www.instagram.com/rudra.lifts.iron"
              target="_blank"
              rel="noopener noreferrer"
              className="card aspect-[3/4] relative overflow-hidden flex items-center justify-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${r.gradient}`} />
              <Play size={28} className="relative z-10 text-slate-500 group-hover:text-[#38bdf8] group-hover:scale-110 transition-all duration-300" />
              <p className="absolute bottom-0 inset-x-0 p-4 text-xs md:text-sm font-medium text-slate-300 bg-gradient-to-t from-[#0f1729] to-transparent">
                {r.caption}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/rudra.lifts.iron"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2"
          >
            <Instagram size={16} /> Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
