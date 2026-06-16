import { Icon } from "@iconify/react";

const categoryColors = {
  "Forex News": "bg-core-sky text-core-blue",
  "Economic News": "bg-core-amber text-core-gold",
  "Central Bank Updates": "bg-purple-100 text-purple-700",
  "Weekly Outlook": "bg-core-mint text-core-green",
};

export default function MarketNewsCard({ item }) {
  const { category, title, summary, beginner, date } = item;
  const colorClass = categoryColors[category] || "bg-core-soft text-core-muted";

  return (
    <div className="group bg-core-card rounded-2xl border border-core-line p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colorClass}`}>
          {category}
        </span>
        <span className="text-xs text-core-subtle">{date}</span>
      </div>
      <h3 className="text-sm font-bold text-core-ink mb-2 leading-snug group-hover:text-core-blue transition-colors">
        {title}
      </h3>
      <p className="text-xs text-core-muted leading-relaxed mb-3">{summary}</p>
      {beginner && (
        <div className="bg-core-sky/40 rounded-lg px-3 py-2.5">
          <div className="flex items-center gap-1.5 mb-1">
            <Icon icon="ph:graduation-cap" className="text-core-blue text-xs" />
            <p className="text-xs font-semibold text-core-blue">Beginner Note</p>
          </div>
          <p className="text-xs text-core-muted leading-relaxed">{beginner}</p>
        </div>
      )}
      <button className="mt-4 text-xs font-semibold text-core-blue hover:text-blue-700 flex items-center gap-1 transition-colors">
        Read More
        <Icon icon="ph:arrow-right" className="text-xs" />
      </button>
    </div>
  );
}
