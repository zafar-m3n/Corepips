import { Icon } from "@iconify/react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import DisclaimerBanner from "../components/common/DisclaimerBanner";
import CTASection from "../components/common/CTASection";
import MarketNewsCard from "../components/cards/MarketNewsCard";
import ImpactBadge from "../components/common/ImpactBadge";
import BackgroundEffects from "../components/layout/BackgroundEffects";
import { marketNews, weeklyOutlook, currencyWatchlist, economicEvents } from "../data/markets";
import { useStaggerReveal } from "../hooks/useAnimation";

const biasColors = {
  "Cautious Bearish": "text-core-red bg-red-50 border-red-100",
  "Cautious Bullish": "text-core-green bg-core-mint border-green-100",
  Neutral: "text-core-muted bg-core-soft border-core-line",
};

export default function Markets() {
  const newsRef = useStaggerReveal(0.08);
  const watchlistRef = useStaggerReveal(0.1);

  return (
    <div>
      <PageHero
        badge="Market Education"
        heading="Understand what"
        headingHighlight="moves the markets."
        subtext="Learn how economic news, central bank decisions, and market sentiment affect currencies, commodities, and price movement."
      />

      {/* Weekly Outlook */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-br from-core-navy to-blue-900 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/15 text-white">
                  Weekly Outlook
                </span>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-3">This Week in the Markets</h2>
              <p className="text-white/75 text-sm leading-relaxed mb-6 max-w-2xl">{weeklyOutlook.summary}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <p className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">Key Events</p>
                  <ul className="space-y-1.5">
                    {weeklyOutlook.keyEvents.map((ev) => (
                      <li key={ev} className="flex items-center gap-2 text-sm text-white/80">
                        <Icon icon="ph:calendar-blank" className="text-sky-400 text-xs shrink-0" />
                        {ev}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-wider">
                    Currencies to Watch
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {weeklyOutlook.currenciesToWatch.map((c) => (
                      <span key={c} className="text-xs px-3 py-1 rounded-full bg-white/15 text-white font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon icon="ph:graduation-cap" className="text-sky-400 text-sm" />
                    <p className="text-xs font-semibold text-sky-300">Beginner Note</p>
                  </div>
                  <p className="text-xs text-white/75 leading-relaxed">{weeklyOutlook.beginnerNote}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market News */}
      <section className="py-16 md:py-20 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Market News"
            title="Latest Educational Market Updates"
            subtitle="Stay informed about key market events — explained in plain English for beginners."
          />
          <div ref={newsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {marketNews.map((item) => (
              <MarketNewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Currency Watchlist */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Currency Watchlist"
            title="Pairs to Watch This Week"
            subtitle="An educational overview of key currency pairs and what traders are watching."
          />
          <div ref={watchlistRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {currencyWatchlist.map((item) => (
              <div
                key={item.pair}
                className="bg-white rounded-2xl border border-core-line p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <p className="text-lg font-bold text-core-ink mb-2">{item.pair}</p>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${biasColors[item.bias] || biasColors.Neutral}`}
                >
                  {item.bias}
                </span>
                <div className="mt-3 pt-3 border-t border-core-line">
                  <p className="text-xs font-semibold text-core-muted mb-0.5">Key Level</p>
                  <p className="text-sm font-bold text-core-ink mb-2">{item.keyLevel}</p>
                  <p className="text-xs text-core-muted leading-relaxed">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Calendar */}
      <section className="py-16 md:py-24 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Economic Calendar"
            title="Key Economic Events"
            subtitle="Track the data releases and decisions that most commonly move currency markets."
          />

          {/* Calendar explanation cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              {
                icon: "ph:calendar-blank",
                title: "What is it?",
                desc: "A schedule of economic data releases and central bank events.",
              },
              {
                icon: "ph:eye",
                title: "Why traders watch it",
                desc: "Economic events can cause sudden volatility in currency prices.",
              },
              {
                icon: "ph:chart-line-up",
                title: "Forecast vs Actual",
                desc: "When actual data beats forecasts, currencies often react strongly.",
              },
              {
                icon: "ph:warning",
                title: "High-impact events",
                desc: "High-impact events like NFP or rate decisions create the biggest moves.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-core-line p-4 shadow-sm">
                <Icon icon={item.icon} className="text-core-blue text-xl mb-2" />
                <p className="text-xs font-bold text-core-ink mb-1">{item.title}</p>
                <p className="text-xs text-core-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Calendar table */}
          <div className="bg-white rounded-2xl border border-core-line shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-core-line bg-core-soft">
                    {["Time", "Currency", "Event", "Impact", "Previous", "Forecast", "Actual"].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-xs font-semibold text-core-muted whitespace-nowrap"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {economicEvents.map((ev, i) => (
                    <>
                      <tr key={i} className="border-b border-core-line hover:bg-core-soft/50 transition-colors">
                        <td className="px-4 py-3 text-xs text-core-muted whitespace-nowrap">{ev.time}</td>
                        <td className="px-4 py-3">
                          <span className="text-xs font-bold text-core-ink">{ev.currency}</span>
                        </td>
                        <td className="px-4 py-3">
                          <p className="text-xs font-medium text-core-ink leading-snug max-w-50">{ev.event}</p>
                        </td>
                        <td className="px-4 py-3">
                          <ImpactBadge level={ev.impact} />
                        </td>
                        <td className="px-4 py-3 text-xs text-core-muted">{ev.previous || "—"}</td>
                        <td className="px-4 py-3 text-xs text-core-muted">{ev.forecast || "—"}</td>
                        <td className="px-4 py-3">
                          {ev.actual ? (
                            <span className="text-xs font-bold text-core-green">{ev.actual}</span>
                          ) : (
                            <span className="text-xs text-core-subtle">Pending</span>
                          )}
                        </td>
                      </tr>
                      <tr key={`${i}-exp`} className="border-b border-core-line bg-core-sky/20">
                        <td colSpan={7} className="px-4 py-2">
                          <div className="flex items-start gap-2">
                            <Icon icon="ph:graduation-cap" className="text-core-blue text-xs mt-0.5 shrink-0" />
                            <p className="text-xs text-core-muted leading-relaxed">{ev.explanation}</p>
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerBanner />
      <CTASection
        heading="Learn what the news means before markets open."
        subtext="Understanding economic events is a core skill. Start with our Fundamental Analysis lessons."
        primaryLabel="Go to Academy"
        primaryTo="/academy"
      />
    </div>
  );
}
