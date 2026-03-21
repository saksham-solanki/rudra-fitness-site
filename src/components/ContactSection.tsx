"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Instagram,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
} from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    goal: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi Rudra! I'm ${formData.name}. My fitness goal is: ${formData.goal}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[#050505] relative"
      ref={ref}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
          >
            <p className="text-red-500 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Let&apos;s Build
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
              Your Strongest
              <br />
              <span className="gradient-text">Chapter Starts Here</span>
            </h2>
            <div className="red-line mt-4 mb-6" />

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
              Ready to stop making excuses and start making gains? Whether you
              need a diet chart, training program, or full transformation
              coaching — let&apos;s talk.
            </p>

            {/* Contact info */}
            <div className="space-y-4">
              <a
                href="https://www.instagram.com/rudra.lifts.iron"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#111] border border-white/5 rounded-xl hover:border-red-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center">
                  <Instagram size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-red-400 transition-colors">
                    @rudra.lifts.iron
                  </p>
                  <p className="text-gray-600 text-xs">DM for inquiries</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-[#111] border border-white/5 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <MessageCircle size={18} className="text-green-500" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">WhatsApp</p>
                  <p className="text-gray-600 text-xs">
                    Quick response guaranteed
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[#111] border border-white/5 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <MapPin size={18} className="text-red-500" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">
                    Chandigarh, India
                  </p>
                  <p className="text-gray-600 text-xs">
                    Available for online coaching worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-white font-bold text-lg mb-6">
                Start Your Transformation
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="text-gray-500 text-xs tracking-wider uppercase block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:border-red-500/50 focus:outline-none transition-colors placeholder:text-gray-700"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label className="text-gray-500 text-xs tracking-wider uppercase block mb-1.5">
                    Phone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:border-red-500/50 focus:outline-none transition-colors placeholder:text-gray-700"
                    placeholder="+91 XXXXX XXXXX"
                    required
                  />
                </div>

                <div>
                  <label className="text-gray-500 text-xs tracking-wider uppercase block mb-1.5">
                    Your Goal
                  </label>
                  <select
                    value={formData.goal}
                    onChange={(e) =>
                      setFormData({ ...formData, goal: e.target.value })
                    }
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:border-red-500/50 focus:outline-none transition-colors appearance-none"
                    required
                  >
                    <option value="" className="text-gray-700">
                      Select your goal
                    </option>
                    <option value="Fat Loss">Fat Loss</option>
                    <option value="Muscle Building">Muscle Building</option>
                    <option value="Body Recomposition">
                      Body Recomposition
                    </option>
                    <option value="Diet Plan Only">Diet Plan Only</option>
                    <option value="Competition Prep">Competition Prep</option>
                    <option value="General Fitness">General Fitness</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-500 text-xs tracking-wider uppercase block mb-1.5">
                    Tell Me About Yourself
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl px-4 py-3 text-white text-sm focus:border-red-500/50 focus:outline-none transition-colors placeholder:text-gray-700 min-h-[100px] resize-none"
                    placeholder="Your current situation, training experience, any injuries..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-red-500 text-white font-bold text-sm tracking-wider rounded-full hover:bg-red-600 transition-all hover:shadow-[0_0_30px_rgba(255,77,77,0.3)] active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  SEND VIA WHATSAPP
                </button>
              </div>

              <p className="text-gray-600 text-[10px] text-center mt-4">
                Your data is safe. We never share your information.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
