"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#080c18] py-12">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-xl font-[800] tracking-tight text-slate-200">
            RUDRA<span className="text-[#38bdf8]">.</span>
          </span>

          <nav aria-label="Quick links" className="flex items-center gap-8">
            <a href="#services" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">Services</a>
            <a href="#results" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">Results</a>
            <a href="#about" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">About</a>
            <a href="#contact" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">Contact</a>
          </nav>

          <nav aria-label="Social links" className="flex items-center gap-6">
            <a href="https://www.instagram.com/rudra.lifts.iron" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Instagram</a>
            <a href="#" aria-label="YouTube" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">YouTube</a>
            <a href="mailto:contact@rudralifts.com" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">Email</a>
          </nav>
        </div>

        <div className="border-t border-slate-800/40 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Rudra Fitness. All rights reserved.</span>
          <p className="text-xs text-slate-600 flex items-center gap-1">
            Built with <Heart size={10} className="text-[#f472b6]" /> and iron
          </p>
        </div>
      </div>
    </footer>
  );
}
