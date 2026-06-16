export default function SectionHeading({ eyebrow, title, subtitle, center = false, className = "" }) {
  return (
    <div className={`mb-10 md:mb-12 ${center ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p className="text-sm font-semibold text-core-blue uppercase tracking-wider mb-2">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl md:text-4xl text-core-ink leading-tight mb-3">{title}</h2>
      {subtitle && (
        <p className="text-core-muted text-lg leading-relaxed max-w-2xl">{center ? undefined : undefined}{subtitle}</p>
      )}
    </div>
  );
}
