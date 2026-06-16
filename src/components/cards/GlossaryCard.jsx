import { Icon } from "@iconify/react";

export default function GlossaryCard({ term }) {
  const { term: word, category, definition, example, whyItMatters, related } = term;

  return (
    <div className="bg-core-card rounded-2xl border border-core-line p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-bold text-core-ink">{word}</h3>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-core-sky text-core-blue shrink-0 ml-2">
          {category}
        </span>
      </div>
      <p className="text-sm text-core-muted leading-relaxed mb-3">{definition}</p>
      {example && (
        <div className="bg-core-soft rounded-lg px-3 py-2.5 mb-3">
          <p className="text-xs font-semibold text-core-muted mb-0.5">Example</p>
          <p className="text-xs text-core-ink leading-relaxed">{example}</p>
        </div>
      )}
      {whyItMatters && (
        <div className="flex items-start gap-2 mb-3">
          <Icon icon="ph:lightbulb" className="text-core-gold text-sm mt-0.5 shrink-0" />
          <p className="text-xs text-core-muted leading-relaxed">{whyItMatters}</p>
        </div>
      )}
      {related && related.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-3">
          {related.map((r) => (
            <span key={r} className="text-xs px-2 py-0.5 rounded-full bg-core-soft border border-core-line text-core-muted">
              {r}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
