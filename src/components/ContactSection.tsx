"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, Clock, Users, ShieldCheck } from "lucide-react";

const trustPoints = [
  { icon: Clock, text: "Reply within 24 hours" },
  { icon: Users, text: "100+ transformations delivered" },
  { icon: ShieldCheck, text: "No commitment required" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", phone: "", goal: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Rudra! I'm ${form.name}. My goal: ${form.goal}.`;
    window.open(`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const fade = (d: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay: d, ease: [0.25, 0.46, 0.45, 0.94] as const },
  });

  const inputClass =
    "w-full bg-transparent border-b border-slate-700 focus:border-[#38bdf8] py-3 text-sm text-slate-200 outline-none transition-colors placeholder:text-slate-600";

  return (
    <>
    <section id="contact" ref={ref} className="bg-[#080c18] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-[1.2fr_1fr] gap-16 md:gap-24 items-start">
        {/* Left column */}
        <motion.div {...fade(0)}>
          <p className="text-sm tracking-[0.2em] uppercase text-slate-500 mb-4">Get in touch</p>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-100">
            Get a free consultation
          </h2>
          <p className="text-base text-slate-400 max-w-[50ch] leading-relaxed mt-6">
            Whether you need a diet plan, training program, or full coaching
            &mdash; send a message and let&apos;s talk about your goals.
          </p>

          <div className="mt-8 space-y-3">
            {trustPoints.map((tp) => (
              <div key={tp.text} className="flex items-center gap-2.5 text-sm text-slate-400">
                <tp.icon size={15} className="text-[#38bdf8] shrink-0" />
                {tp.text}
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-3">
            <a
              href="https://www.instagram.com/rudra.lifts.iron"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-400 hover:text-[#38bdf8] transition-colors inline-flex items-center gap-1.5"
            >
              @rudra.lifts.iron <span aria-hidden="true">&rarr;</span>
            </a>
            <p className="text-sm text-slate-400">
              <MessageCircle size={13} className="inline mr-1.5 text-[#25D366]" />
              +91 XXXXX XXXXX
            </p>
            <p className="text-sm text-slate-500">Chandigarh, India</p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form onSubmit={handleSubmit} className="space-y-8" {...fade(0.15)}>
          <div>
            <label htmlFor="c-name" className="text-xs tracking-[0.15em] uppercase text-slate-500 mb-2 block">Name</label>
            <input id="c-name" type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={inputClass} />
          </div>
          <div>
            <label htmlFor="c-phone" className="text-xs tracking-[0.15em] uppercase text-slate-500 mb-2 block">Phone</label>
            <input id="c-phone" type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className={inputClass} />
          </div>
          <div>
            <label htmlFor="c-goal" className="text-xs tracking-[0.15em] uppercase text-slate-500 mb-2 block">Goal</label>
            <select id="c-goal" required aria-label="Select your fitness goal" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} className={`${inputClass} cursor-pointer appearance-none`}>
              <option value="">Select your goal</option>
              <option value="Fat Loss">Fat Loss</option>
              <option value="Muscle Building">Muscle Building</option>
              <option value="Body Recomposition">Body Recomposition</option>
              <option value="Diet Plan Only">Diet Plan Only</option>
              <option value="Competition Prep">Competition Prep</option>
              <option value="General Fitness">General Fitness</option>
            </select>
          </div>

          <button type="submit" className="btn-primary w-full py-3.5 text-sm tracking-wider cursor-pointer inline-flex items-center justify-center gap-2">
            <MessageCircle size={16} />
            Get free consultation
          </button>
          <p className="text-xs text-slate-600 mt-3">Your information is never shared with third parties.</p>
        </motion.form>
      </div>
    </section>

    {/* WhatsApp floating button */}
    <a
      href="https://wa.me/91XXXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/25 hover:scale-110 transition-transform cursor-pointer"
    >
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
    </>
  );
}
