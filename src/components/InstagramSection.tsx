"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Heart, MessageCircle, Play } from "lucide-react";

const reelPreviews = [
  {
    caption: "225 kg Deadlift PR",
    likes: "2.4K",
    comments: "156",
    type: "reel",
  },
  {
    caption: "Full Day of Eating | 3500 Calories",
    likes: "1.8K",
    comments: "92",
    type: "reel",
  },
  {
    caption: "Push Day Workout | Raw Footage",
    likes: "3.1K",
    comments: "201",
    type: "reel",
  },
  {
    caption: "12 Week Transformation",
    likes: "5.2K",
    comments: "312",
    type: "reel",
  },
  {
    caption: "Leg Day at 5:30 AM",
    likes: "1.5K",
    comments: "87",
    type: "reel",
  },
  {
    caption: "Client Reaction | 15kg Lost",
    likes: "4.7K",
    comments: "289",
    type: "reel",
  },
];

export default function InstagramSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram size={20} className="text-red-500" />
            <p className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase">
              @rudra.lifts.iron
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Follow The
            <span className="gradient-text"> Journey</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm md:text-base">
            Raw lifting footage, diet tips, transformation stories, and the
            daily grind. No filters, no fake weights.
          </p>
        </motion.div>

        {/* Reel grid - mobile scroll, desktop grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {reelPreviews.map((reel, i) => (
            <motion.a
              key={reel.caption}
              href="https://www.instagram.com/rudra.lifts.iron"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] bg-[#111] rounded-xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              {/* Placeholder gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-500/20 group-hover:scale-110 transition-all">
                  <Play size={20} className="text-white ml-1" />
                </div>
              </div>

              {/* Bottom gradient */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-white text-xs font-medium line-clamp-2">
                  {reel.caption}
                </p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="flex items-center gap-1 text-gray-400 text-[10px]">
                    <Heart size={10} />
                    {reel.likes}
                  </span>
                  <span className="flex items-center gap-1 text-gray-400 text-[10px]">
                    <MessageCircle size={10} />
                    {reel.comments}
                  </span>
                </div>
              </div>

              {/* Reel indicator */}
              <div className="absolute top-3 right-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="white"
                  opacity="0.5"
                >
                  <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.042-.379 3.408 3.408 0 0 1-1.265-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1z" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <a
            href="https://www.instagram.com/rudra.lifts.iron"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white font-bold text-sm rounded-full hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-all active:scale-95"
          >
            <Instagram size={18} />
            Follow @rudra.lifts.iron
          </a>
        </motion.div>
      </div>
    </section>
  );
}
