"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ArrowRight } from "lucide-react";

const transformations = [
  {
    name: "Rahul S.",
    age: 24,
    location: "Chandigarh",
    duration: "12 Weeks",
    before: "78 kg / 28% BF",
    after: "72 kg / 16% BF",
    quote:
      "Rudra didn't just give me a diet plan. He taught me discipline. Lost 12% body fat and gained more confidence than I ever had.",
    rating: 5,
  },
  {
    name: "Priya M.",
    age: 22,
    location: "Mohali",
    duration: "8 Weeks",
    before: "65 kg / Beginner",
    after: "60 kg / Toned",
    quote:
      "As a vegetarian, I thought I couldn't build muscle. Rudra proved me wrong with an incredible veg diet plan. Down 5 kg of pure fat!",
    rating: 5,
  },
  {
    name: "Vikram T.",
    age: 28,
    location: "Panchkula",
    duration: "16 Weeks",
    before: "62 kg / Skinny",
    after: "74 kg / Muscular",
    quote:
      "Went from skinny to strong. Rudra's bulking plan was perfect for a hard gainer like me. 12 kg of quality mass gained.",
    rating: 5,
  },
  {
    name: "Ankit D.",
    age: 21,
    location: "Chandigarh",
    duration: "12 Weeks",
    before: "85 kg / Overweight",
    after: "73 kg / Athletic",
    quote:
      "The accountability and daily check-ins made all the difference. Rudra doesn't let you slack. Lost 12 kg and feel like a new person.",
    rating: 5,
  },
];

export default function TransformationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="transformations" className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Real People, Real Results
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Client
            <span className="gradient-text"> Transformations</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm md:text-base">
            These aren&apos;t stock photos. These are real people from
            Chandigarh and the Tricity area who trusted the process.
          </p>
        </motion.div>

        {/* Transformation cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {transformations.map((t, i) => (
            <motion.div
              key={t.name}
              className="hover-card bg-[#111] border border-white/5 rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12 }}
            >
              {/* Before/After header */}
              <div className="grid grid-cols-2">
                <div className="bg-[#0d0d0d] p-4 text-center border-r border-b border-white/5">
                  <p className="text-[10px] tracking-wider text-gray-600 uppercase mb-1">
                    Before
                  </p>
                  <div className="w-full aspect-[4/3] bg-[#1a1a1a] rounded-lg flex items-center justify-center">
                    <p className="text-xs text-gray-600">Photo</p>
                  </div>
                  <p className="text-sm font-bold text-gray-400 mt-2">
                    {t.before}
                  </p>
                </div>
                <div className="bg-[#0d0d0d] p-4 text-center border-b border-white/5">
                  <p className="text-[10px] tracking-wider text-red-500 uppercase mb-1">
                    After
                  </p>
                  <div className="w-full aspect-[4/3] bg-gradient-to-br from-red-500/5 to-[#1a1a1a] rounded-lg flex items-center justify-center border border-red-500/10">
                    <p className="text-xs text-red-500/50">Photo</p>
                  </div>
                  <p className="text-sm font-bold text-red-400 mt-2">
                    {t.after}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-white font-bold text-sm">{t.name}</p>
                    <p className="text-gray-600 text-xs">
                      {t.age}y • {t.location}
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-red-500/10 rounded-full">
                    <p className="text-red-400 text-xs font-semibold">
                      {t.duration}
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      size={12}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>

                <p className="text-gray-400 text-xs leading-relaxed italic">
                  &quot;{t.quote}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-red-500/30 text-red-400 text-sm font-semibold rounded-full hover:bg-red-500/10 transition-all active:scale-95"
          >
            Be The Next Transformation
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
