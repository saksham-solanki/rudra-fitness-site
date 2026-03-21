"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Mail } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Transformations", href: "#transformations" },
  { name: "Programs", href: "#programs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("mobile-menu-open");
    } else {
      document.body.classList.remove("mobile-menu-open");
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-1">
              <span className="text-xl md:text-2xl font-black tracking-wider text-white">
                RUDRA
              </span>
              <span className="text-xl md:text-2xl font-black text-red-500">
                .
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors duration-200 uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="https://www.instagram.com/rudra.lifts.iron"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#contact"
                className="px-5 py-2 bg-red-500 text-white text-sm font-semibold rounded-full hover:bg-red-600 transition-all hover:shadow-[0_0_20px_rgba(255,77,77,0.3)]"
              >
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 h-full w-[280px] bg-[#0a0a0a] border-l border-white/5 p-8 pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg tracking-wider text-gray-300 hover:text-red-500 transition-colors uppercase"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="border-t border-white/10 pt-6 mt-4">
                  <a
                    href="https://www.instagram.com/rudra.lifts.iron"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Instagram size={20} />
                    <span className="text-sm">@rudra.lifts.iron</span>
                  </a>
                  <a
                    href="mailto:contact@rudralifts.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-red-500 transition-colors mt-4"
                  >
                    <Mail size={20} />
                    <span className="text-sm">Get in Touch</span>
                  </a>
                </div>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 px-6 py-3 bg-red-500 text-white text-center text-sm font-semibold rounded-full hover:bg-red-600 transition-all"
                >
                  Start Your Transformation
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
