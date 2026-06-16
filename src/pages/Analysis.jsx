import { Icon } from "@iconify/react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import DisclaimerBanner from "../components/common/DisclaimerBanner";
import CTASection from "../components/common/CTASection";
import BackgroundEffects from "../components/layout/BackgroundEffects";
import MockChart from "../components/common/MockChart";
import { candlestickPatterns, technicalIndicators, chartPatterns, chartExamples } from "../data/analysis";
import { useStaggerReveal } from "../hooks/useAnimation";

const signalColors = {
  "Bullish Reversal": "bg-core-mint text-core-green border-green-100",
  "Bearish Reversal": "bg-red-50 text-core-red border-red-100",
  "Strong Reversal": "bg-purple-50 text-purple-700 border-purple-100",
  "Reversal / Caution": "bg-core-amber text-core-gold border-amber-100",
  Bullish: "bg-core-mint text-core-green border-green-100",
  Bearish: "bg-red-50 text-core-red border-red-100",
  Continuation: "bg-core-sky text-core-blue border-blue-100",
};

const readingTopics = [
  { icon: "ph:chart-bar", title: "Candlesticks", desc: "Learn the open, high, low, and close of every candle and what they mean." },
  { icon: "ph:trend-up", title: "Trends", desc: "Identify uptrends, downtrends, and sideways markets with confidence." },
  { icon: "ph:arrows-vertical", title: "Support & Resistance", desc: "Spot key price levels where buying and selling pressure tends to cluster." },
  { icon: "ph:clock", title: "Timeframes", desc: "Understand the difference between short-term and long-term chart views." },
];

export default function Analysis() {
  const indicatorsRef = useStaggerReveal(0.1);
  const candlesRef = useStaggerReveal(0.1);
  const patternsRef = useStaggerReveal(0.1);
  const examplesRef = useStaggerReveal(0.1);
  const topicsRef = useStaggerReveal(0.1);

  return (
    <div>
      <PageHero
        badge="Technical Analysis"
        heading="Learn to read charts"
        headingHighlight="with confidence."
        subtext="Understand candlesticks, support and resistance, trends, indicators, and chart patterns with beginner-friendly explanations."
      />

      {/* Chart Dashboard Mockup */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-core-soft rounded-2xl border border-core-line p-4 md:p-6 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="lg:col-span-3 bg-white rounded-xl border border-core-line p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-core-subtle mb-0.5">GBP / USD</p>
                    <p className="text-xl font-bold text-core-ink">1.2685 <span className="text-sm font-normal text-core-red">-0.18%</span></p>
                  </div>
                  <div className="flex items-center gap-2">
                    {["1H", "4H", "1D", "1W"].map((tf) => (
                      <button key={tf} className={`text-xs px-2.5 py-1.5 rounded-lg ${tf === "4H" ? "bg-core-blue text-white" : "bg-core-soft text-core-muted hover:text-core-ink"}`}>
                        {tf}
                      </button>
                    ))}
                  </div>
                </div>
                <MockChart />
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-core-line">
                  <div className="flex items-center gap-4 text-xs">
                    <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-core-blue rounded block" /> MA(20)</span>
                    <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-core-teal rounded block" style={{ borderStyle: "dashed" }} /> MA(50)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-core-muted">
                    <span className="px-2 py-0.5 rounded bg-red-50 border border-red-100 text-core-red font-semibold text-xs">R: 1.2720</span>
                    <span className="px-2 py-0.5 rounded bg-core-mint border border-green-100 text-core-green font-semibold text-xs">S: 1.2640</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-xl border border-core-line p-3">
                  <p className="text-xs font-semibold text-core-muted mb-1">RSI (14)</p>
                  <p className="text-lg font-bold text-core-ink">43.2</p>
                  <div className="w-full bg-core-soft rounded-full h-1.5 mt-2">
                    <div className="bg-core-blue h-1.5 rounded-full" style={{ width: "43%" }} />
                  </div>
                  <div className="flex justify-between text-xs text-core-subtle mt-1">
                    <span>0</span><span>70</span><span>100</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-core-line p-3">
                  <p className="text-xs font-semibold text-core-muted mb-2">Key Levels</p>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs">
                      <span className="text-core-muted">Resistance</span>
                      <span className="font-bold text-core-red">1.2720</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-core-muted">Support</span>
                      <span className="font-bold text-core-green">1.2640</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-core-muted">Daily High</span>
                      <span className="font-bold text-core-ink">1.2710</span>
                    </div>
                  </div>
                </div>
                <div className="bg-core-sky/50 rounded-xl border border-blue-100 p-3">
                  <p className="text-xs font-semibold text-core-blue mb-1.5">Reading this chart</p>
                  <p className="text-xs text-core-muted leading-relaxed">Price is between S/R levels. RSI near 43 suggests neutral momentum — not overbought or oversold.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart reading basics */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Chart Basics"
            title="Start With the Fundamentals"
            subtitle="Before studying patterns and indicators, understand these four core concepts."
          />
          <div ref={topicsRef} className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {readingTopics.map((t) => (
              <div key={t.title} className="bg-core-soft rounded-2xl border border-core-line p-5 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-core-sky flex items-center justify-center mb-3">
                  <Icon icon={t.icon} className="text-core-blue text-xl" />
                </div>
                <h3 className="text-sm font-bold text-core-ink mb-1.5">{t.title}</h3>
                <p className="text-xs text-core-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candlestick Patterns */}
      <section className="py-16 md:py-20 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Candlestick Patterns"
            title="Common Reversal Signals"
            subtitle="Learn to recognize the most important candlestick patterns and what they suggest."
          />
          <div ref={candlesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candlestickPatterns.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-core-line p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-core-soft flex items-center justify-center mb-3">
                  <Icon icon={p.icon} className="text-core-ink text-xl" />
                </div>
                <h3 className="text-sm font-bold text-core-ink mb-1.5">{p.name}</h3>
                <p className="text-xs text-core-muted leading-relaxed mb-3">{p.description}</p>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${signalColors[p.signal] || "bg-core-soft text-core-muted border-core-line"}`}>
                  {p.signal}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Indicators */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Indicators"
            title="Technical Indicators Explained"
            subtitle="Tools that help traders measure momentum, trend, and volatility on any chart."
          />
          <div ref={indicatorsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {technicalIndicators.map((ind) => (
              <div key={ind.name} className="bg-core-soft rounded-2xl border border-core-line p-5 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-core-sky flex items-center justify-center mb-3">
                  <Icon icon={ind.icon} className="text-core-blue text-xl" />
                </div>
                <h3 className="text-sm font-bold text-core-ink mb-1.5">{ind.name}</h3>
                <p className="text-xs text-core-muted leading-relaxed mb-3">{ind.description}</p>
                <div className="pt-2 border-t border-core-line">
                  <p className="text-xs font-semibold text-core-blue">How to use it</p>
                  <p className="text-xs text-core-muted mt-0.5 leading-relaxed">{ind.use}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Patterns */}
      <section className="py-16 md:py-20 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Chart Patterns"
            title="Recognizing Chart Formations"
            subtitle="Chart patterns help traders anticipate potential price moves based on historical behavior."
          />
          <div ref={patternsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {chartPatterns.map((p) => (
              <div key={p.name} className="bg-white rounded-2xl border border-core-line p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-bold text-core-ink">{p.name}</h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${signalColors[p.signal] || "bg-core-soft text-core-muted border-core-line"}`}>
                    {p.signal}
                  </span>
                </div>
                <p className="text-xs text-core-muted leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Breakdowns */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Analysis Examples"
            title="Chart Breakdown Examples"
            subtitle="See how to apply what you've learned to read a real chart scenario."
          />
          <div ref={examplesRef} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {chartExamples.map((ex) => (
              <div key={ex.title} className="bg-core-soft rounded-2xl border border-core-line p-5 hover:bg-white hover:shadow-md hover:border-blue-200 transition-all">
                <h3 className="text-sm font-bold text-core-ink mb-3 flex items-center gap-2">
                  <Icon icon="ph:chart-line-up" className="text-core-blue text-base shrink-0" />
                  {ex.title}
                </h3>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-core-muted mb-1">Scenario</p>
                  <p className="text-xs text-core-ink leading-relaxed">{ex.scenario}</p>
                </div>
                <div className="mb-3">
                  <p className="text-xs font-semibold text-core-muted mb-1">Analysis</p>
                  <p className="text-xs text-core-ink leading-relaxed">{ex.analysis}</p>
                </div>
                <div className="bg-core-sky/40 rounded-xl px-3 py-2.5">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon icon="ph:lightbulb" className="text-core-gold text-xs" />
                    <p className="text-xs font-semibold text-core-gold">Key Lesson</p>
                  </div>
                  <p className="text-xs text-core-muted leading-relaxed">{ex.lesson}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DisclaimerBanner />
      <CTASection
        heading="Learn chart reading from scratch."
        subtext="Our Academy covers everything from candlestick basics to full technical analysis frameworks."
        primaryLabel="Go to Academy"
        primaryTo="/academy"
        variant="teal"
      />
    </div>
  );
}
