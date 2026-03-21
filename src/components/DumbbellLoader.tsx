"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function DumbbellLoader({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"lifting" | "done">("lifting");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase("done");
          setTimeout(onComplete, 600);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" || progress < 100 ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-red-500/20"
                initial={{
                  x: Math.random() * (typeof window !== "undefined" ? window.innerWidth : 400),
                  y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
                }}
                animate={{
                  y: [null, Math.random() * -200],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Dumbbell SVG */}
          <motion.div
            className="relative mb-8"
            animate={{
              y: [0, -25, 0, -15, 0],
              rotate: [0, -3, 0, 3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="180"
              height="80"
              viewBox="0 0 180 80"
              className="drop-shadow-[0_0_20px_rgba(255,77,77,0.4)]"
            >
              {/* Left outer plate */}
              <motion.rect
                x="10"
                y="15"
                width="16"
                height="50"
                rx="4"
                fill="#ff4d4d"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              {/* Left inner plate */}
              <rect
                x="30"
                y="20"
                width="12"
                height="40"
                rx="3"
                fill="#cc3333"
              />
              {/* Bar */}
              <rect x="42" y="35" width="96" height="10" rx="5" fill="#666" />
              {/* Center grip marks */}
              <rect x="72" y="35" width="2" height="10" fill="#888" />
              <rect x="78" y="35" width="2" height="10" fill="#888" />
              <rect x="84" y="35" width="2" height="10" fill="#888" />
              <rect x="90" y="35" width="2" height="10" fill="#888" />
              <rect x="96" y="35" width="2" height="10" fill="#888" />
              <rect x="102" y="35" width="2" height="10" fill="#888" />
              {/* Right inner plate */}
              <rect
                x="138"
                y="20"
                width="12"
                height="40"
                rx="3"
                fill="#cc3333"
              />
              {/* Right outer plate */}
              <motion.rect
                x="154"
                y="15"
                width="16"
                height="50"
                rx="4"
                fill="#ff4d4d"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.2,
                }}
              />
              {/* Left collar */}
              <rect x="26" y="32" width="4" height="16" rx="1" fill="#999" />
              {/* Right collar */}
              <rect x="150" y="32" width="4" height="16" rx="1" fill="#999" />
            </svg>

            {/* Shadow under dumbbell */}
            <motion.div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-3 bg-red-500/10 rounded-full blur-md"
              animate={{
                width: [120, 100, 120, 110, 120],
                opacity: [0.3, 0.5, 0.3, 0.4, 0.3],
              }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Brand name */}
          <motion.h1
            className="text-3xl md:text-4xl font-black tracking-wider mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-white">RUDRA</span>
            <span className="text-red-500">.</span>
          </motion.h1>
          <motion.p
            className="text-sm tracking-[0.3em] text-gray-500 uppercase mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Lifts Iron
          </motion.p>

          {/* Progress bar */}
          <div className="w-48 md:w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #ff4d4d, #ff8c00)",
                width: `${progress}%`,
              }}
              transition={{ ease: "linear" }}
            />
          </div>

          {/* Progress text */}
          <motion.p
            className="mt-3 text-xs text-gray-600 font-mono tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            LOADING {progress}%
          </motion.p>

          {/* Motivational text */}
          <motion.p
            className="mt-6 text-xs text-gray-700 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          >
            &quot;Iron sharpens iron&quot;
          </motion.p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
