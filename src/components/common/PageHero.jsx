export default function PageHero({ badge, heading, headingHighlight, subtext, children, className = "" }) {
  return (
    <section className={`relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-core-sky border border-blue-100 text-core-blue text-xs font-semibold mb-5">
              {badge}
            </div>
          )}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-core-ink leading-[1.15] mb-5">
            {heading}
            {headingHighlight && (
              <span className="text-core-blue"> {headingHighlight}</span>
            )}
          </h1>
          {subtext && (
            <p className="text-lg text-core-muted leading-relaxed max-w-2xl">{subtext}</p>
          )}
          {children && <div className="mt-7">{children}</div>}
        </div>
      </div>
    </section>
  );
}
