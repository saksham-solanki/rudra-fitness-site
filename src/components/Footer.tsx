"use client";

import { Instagram, Youtube, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-3">
              <span className="text-xl font-black tracking-wider text-white">
                RUDRA
              </span>
              <span className="text-xl font-black text-red-500">.</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Transforming bodies and minds through iron discipline. Based in
              Chandigarh, coaching worldwide.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="https://www.instagram.com/rudra.lifts.iron"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500/20 transition-colors"
              >
                <Instagram size={16} className="text-gray-400" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500/20 transition-colors"
              >
                <Youtube size={16} className="text-gray-400" />
              </a>
              <a
                href="mailto:contact@rudralifts.com"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-500/20 transition-colors"
              >
                <Mail size={16} className="text-gray-400" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Programs", href: "#programs" },
                { name: "Transformations", href: "#transformations" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-red-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Custom Diet Charts",
                "Personal Training",
                "1-on-1 Coaching",
                "Group Challenges",
                "Competition Prep",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-gray-500 text-sm hover:text-red-400 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Rudra Lifts Iron. All rights
            reserved.
          </p>
          <p className="text-gray-700 text-xs flex items-center gap-1">
            Built with <Heart size={10} className="text-red-500" /> and Iron
          </p>
        </div>
      </div>
    </footer>
  );
}
