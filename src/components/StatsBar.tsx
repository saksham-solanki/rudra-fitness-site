const stats = [
  { value: "100+", label: "Clients coached" },
  { value: "5+", label: "Years experience" },
  { value: "4.9", label: "Star rating" },
  { value: "Chandigarh", label: "Based in" },
];

export default function StatsBar() {
  return (
    <section className="section-alt border-y border-slate-800/40 py-10 md:py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-bold text-slate-100 font-mono tracking-tight">{s.value}</p>
            <p className="text-xs text-slate-500 uppercase tracking-wider mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
