"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";

const links = [
  { name: "Services", href: "#services" },
  { name: "Results", href: "#results" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#080c18]/80 backdrop-blur-md border-b border-slate-800/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-8 flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="text-xl md:text-2xl font-[800] tracking-tight text-slate-200 cursor-pointer">
            RUDRA<span className="text-[#38bdf8]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-sm tracking-wide text-slate-400 hover:text-slate-200 transition-colors duration-200 cursor-pointer">
                {l.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-5">
            <a href="https://www.instagram.com/rudra.lifts.iron" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-400 hover:text-[#38bdf8] transition-colors cursor-pointer">
              <Instagram size={18} />
            </a>
            <a href="#contact" className="btn-primary px-5 py-2 text-sm cursor-pointer">
              Free consultation
            </a>
          </div>

          <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="md:hidden text-slate-300 p-2 cursor-pointer">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#080c18] flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-semibold tracking-tight text-slate-200 cursor-pointer"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.08 }}
              >
                {l.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary px-8 py-3 text-sm mt-4 cursor-pointer"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.35 }}
            >
              Free consultation
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
