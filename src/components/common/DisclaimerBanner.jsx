import { Icon } from "@iconify/react";

export default function DisclaimerBanner({ compact = false }) {
  if (compact) {
    return (
      <div className="bg-core-amber/60 border border-amber-200 rounded-xl px-4 py-3 flex items-start gap-3">
        <Icon icon="ph:info" className="text-core-gold text-lg mt-0.5 shrink-0" />
        <p className="text-xs text-amber-800 leading-relaxed">
          All content on CorePips is for <strong>educational purposes only</strong> and should not be considered financial advice. Trading involves risk.
        </p>
      </div>
    );
  }

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-core-amber/50 border border-amber-200 rounded-xl px-5 py-4 md:px-6 flex items-start gap-4">
          <div className="w-8 h-8 rounded-lg bg-core-gold/15 flex items-center justify-center shrink-0 mt-0.5">
            <Icon icon="ph:warning" className="text-core-gold text-base" />
          </div>
          <div>
            <p className="text-sm font-semibold text-amber-900 mb-0.5">Educational Disclaimer</p>
            <p className="text-sm text-amber-800 leading-relaxed">
              All content on CorePips is for educational purposes only and should not be considered financial advice. Trading involves risk, and you should always do your own research before making any financial decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
