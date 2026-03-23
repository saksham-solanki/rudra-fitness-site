"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "Rahul S.",
    badge: "Lost 12% body fat",
    quote: "Rudra didn't just give me a diet plan. He taught me discipline. Lost 12% body fat and gained more confidence than I ever had.",
  },
  {
    name: "Priya M.",
    badge: "Lost 5 kg fat",
    quote: "As a vegetarian, I thought I couldn't build muscle. Rudra proved me wrong with an incredible veg diet plan.",
  },
  {
    name: "Vikram T.",
    badge: "Gained 12 kg muscle",
    quote: "Went from skinny to strong. Rudra's bulking plan was perfect for a hard gainer like me.",
  },
  {
    name: "Ankit D.",
    badge: "Lost 12 kg",
    quote: "The accountability and daily check-ins made all the difference. Rudra doesn't let you slack. I feel like a new person.",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="results" className="py-20 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
            Real people, real results
          </h2>
          <p className="text-slate-400 mt-3 max-w-lg mx-auto text-sm">
            Don&apos;t take my word for it — here&apos;s what clients say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="card p-6"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
            >
              <p className="text-sm text-slate-300 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="w-8 h-px bg-slate-700 my-4" />
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold text-slate-200">{t.name}</span>
                <span className="bg-[#38bdf8]/10 text-[#38bdf8] text-xs px-2 py-0.5 rounded-full">
                  {t.badge}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="#contact" className="btn-primary inline-block px-8 py-3.5 text-sm">
            Start your transformation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
