const stats = [
  { value: "100+", label: "Clients coached" },
  { value: "5+", label: "Years experience" },
  { value: "4.9", label: "Star rating" },
  { value: "Chandigarh", label: "Based in" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#0f1729]/50 border-y border-slate-800/40 py-6">
      <div className="grid grid-cols-2 md:flex md:items-center md:justify-between max-w-4xl mx-auto px-6 gap-6 md:gap-0">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-bold text-slate-100 font-mono">{s.value}</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
