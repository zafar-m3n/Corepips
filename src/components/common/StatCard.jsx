export default function StatCard({ label, value, sub, colorClass = "text-core-blue" }) {
  return (
    <div className="bg-core-card rounded-xl border border-core-line p-4 shadow-sm">
      <p className={`text-2xl font-bold ${colorClass} mb-0.5`}>{value}</p>
      <p className="text-xs font-semibold text-core-ink">{label}</p>
      {sub && <p className="text-xs text-core-subtle mt-0.5">{sub}</p>}
    </div>
  );
}
