import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function CTASection({ heading, subtext, primaryLabel, primaryTo, secondaryLabel, secondaryTo, variant = "blue" }) {
  const isTeal = variant === "teal";
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative overflow-hidden rounded-2xl px-8 py-14 md:px-14 text-center ${
          isTeal ? "bg-core-teal" : "bg-core-navy"
        }`}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
          </div>
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">{heading}</h2>
            {subtext && <p className="text-white/70 text-lg mb-8 leading-relaxed">{subtext}</p>}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {primaryLabel && (
                <Link
                  to={primaryTo || "/academy"}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-core-ink text-sm font-semibold hover:bg-core-soft transition-colors shadow-sm"
                >
                  {primaryLabel}
                  <Icon icon="ph:arrow-right" />
                </Link>
              )}
              {secondaryLabel && (
                <Link
                  to={secondaryTo || "/tools"}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
                >
                  {secondaryLabel}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
