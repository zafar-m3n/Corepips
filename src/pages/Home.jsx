import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BackgroundEffects from "../components/layout/BackgroundEffects";
import LearningPathCard from "../components/cards/LearningPathCard";
import ToolCard from "../components/cards/ToolCard";
import MarketNewsCard from "../components/cards/MarketNewsCard";
import DisclaimerBanner from "../components/common/DisclaimerBanner";
import CTASection from "../components/common/CTASection";
import SectionHeading from "../components/common/SectionHeading";
import ContactForm from "../components/common/ContactForm";
import { learningPaths } from "../data/academy";
import { marketNews } from "../data/markets";
import { useHeroAnimation, useStaggerReveal } from "../hooks/useAnimation";

gsap.registerPlugin(ScrollTrigger);

const roadmapSteps = [
  {
    step: "01",
    title: "Learn Forex Basics",
    desc: "Understand what forex is, how currency pairs work, and basic market mechanics.",
    icon: "ph:currency-circle-dollar",
  },
  {
    step: "02",
    title: "Understand Risk",
    desc: "Learn why protecting capital is the foundation of every successful trading approach.",
    icon: "ph:shield-check",
  },
  {
    step: "03",
    title: "Read Candlestick Charts",
    desc: "Discover how to interpret price action and spot patterns on any chart.",
    icon: "ph:chart-bar",
  },
  {
    step: "04",
    title: "Follow Market News",
    desc: "Understand how economic events and central bank decisions move currency prices.",
    icon: "ph:newspaper",
  },
  {
    step: "05",
    title: "Build a Trading Plan",
    desc: "Create structured rules for entries, exits, risk limits, and goals before trading.",
    icon: "ph:clipboard-text",
  },
];

const benefits = [
  {
    icon: "ph:graduation-cap",
    title: "Structured Lessons",
    desc: "Follow a logical learning path from complete beginner to confident analyst.",
  },
  {
    icon: "ph:chat-centered-text",
    title: "Simple Explanations",
    desc: "Complex market concepts broken down into plain, beginner-friendly language.",
  },
  {
    icon: "ph:calculator",
    title: "Practical Tools",
    desc: "Use pip calculators, position size tools, and a trading journal to learn by doing.",
  },
  {
    icon: "ph:shield-check",
    title: "Risk-First Education",
    desc: "We teach risk management early — because protecting capital matters more than profits.",
  },
  {
    icon: "ph:newspaper",
    title: "Market News Explained",
    desc: "Understand what economic events mean for currency markets without the jargon.",
  },
  {
    icon: "ph:book-open",
    title: "Beginner-Friendly Glossary",
    desc: "Every trading term explained simply with examples and real-world context.",
  },
];

const glossaryChips = ["Pip", "Leverage", "Margin", "Spread", "Support", "Resistance", "CPI", "Interest Rate"];

const tools = [
  {
    icon: "ph:calculator",
    title: "Pip Calculator",
    description: "Calculate the pip value of any currency pair based on your lot size.",
    colorClass: "text-core-blue",
    bgClass: "bg-core-sky",
  },
  {
    icon: "ph:scales",
    title: "Position Size Calculator",
    description: "Find the right trade size based on your account balance and risk tolerance.",
    colorClass: "text-core-teal",
    bgClass: "bg-teal-50",
  },
  {
    icon: "ph:trend-up",
    title: "Risk/Reward Calculator",
    description: "Visualize your risk-to-reward ratio before entering any trade.",
    colorClass: "text-core-green",
    bgClass: "bg-core-mint",
  },
  {
    icon: "ph:notebook",
    title: "Trading Journal",
    description: "Track your practice trades and review your decision-making over time.",
    colorClass: "text-core-gold",
    bgClass: "bg-core-amber",
  },
];

export default function Home() {
  const heroRef = useHeroAnimation();
  const pathsRef = useStaggerReveal(0.1);
  const benefitsRef = useStaggerReveal(0.08);
  const roadmapRef = useStaggerReveal(0.12);
  const toolsRef = useStaggerReveal(0.1);

  const insightsRef = useRef(null);
  useEffect(() => {
    if (!insightsRef.current) return;
    gsap.fromTo(
      insightsRef.current.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: insightsRef.current, start: "top 85%", once: true },
      },
    );
  }, []);

  return (
    <div>
      {/* Hero */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-linear-to-br from-white via-core-bg to-core-sky/30"
      >
        <BackgroundEffects variant="hero" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div>
              <div data-hero-heading>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-core-sky border border-blue-100 text-core-blue text-xs font-semibold mb-6">
                  <Icon icon="ph:graduation-cap" className="text-sm" />
                  Free Trading Education Platform
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.25rem] text-core-ink leading-[1.12] mb-5">
                  Learn Forex, Trading & <span className="text-core-blue">Market Analysis</span> the Simple Way
                </h1>
              </div>
              <p data-hero-sub className="text-lg text-core-muted leading-relaxed mb-8 max-w-lg">
                CorePips helps beginners understand forex, chart reading, market news, and risk management through
                structured lessons, simple explanations, and practical tools.
              </p>
              <div className="flex items-center gap-6 mt-8">
                {[
                  ["6+", "Learning Paths"],
                  ["50+", "Lessons"],
                  ["4", "Free Tools"],
                ].map(([val, label]) => (
                  <div key={label}>
                    <p className="text-xl font-bold text-core-ink">{val}</p>
                    <p className="text-xs text-core-muted">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-hero-visual className="relative">
              <ContactForm buttonText="Start Learning For Free" />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Start Here"
            title="Featured Learning Paths"
            subtitle="Structured paths that take you from complete beginner to confident market analyst."
          />
          <div ref={pathsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {learningPaths.map((path) => (
              <LearningPathCard key={path.id} path={path} />
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 md:py-24 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Your Path Forward"
            title="The Beginner Roadmap"
            subtitle="Follow these five steps to build a strong trading foundation before ever risking real capital."
            center
          />
          <div ref={roadmapRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
            {roadmapSteps.map((s, i) => (
              <div
                key={s.step}
                className="relative bg-white rounded-2xl border border-core-line p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                {i < roadmapSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-0.5 bg-core-line z-10" />
                )}
                <span className="text-xs font-bold text-core-blue/40 mb-3 block">{s.step}</span>
                <div className="w-10 h-10 rounded-xl bg-core-sky flex items-center justify-center mb-3">
                  <Icon icon={s.icon} className="text-core-blue text-xl" />
                </div>
                <h3 className="text-sm font-bold text-core-ink mb-1.5">{s.title}</h3>
                <p className="text-xs text-core-muted leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why CorePips */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why CorePips"
            title="Learn the Right Way"
            subtitle="CorePips puts education, discipline, and risk awareness before profit promises."
          />
          <div ref={benefitsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 p-5 bg-core-soft rounded-2xl border border-core-line hover:border-blue-200 hover:bg-white transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-core-sky flex items-center justify-center shrink-0">
                  <Icon icon={b.icon} className="text-core-blue text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-core-ink mb-1">{b.title}</h3>
                  <p className="text-xs text-core-muted leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 md:py-24 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="section" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Market Education"
              title="Latest Market Insights"
              subtitle="Understand what's moving the markets — explained for beginners."
            />
            <Link
              to="/markets"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-core-blue hover:text-blue-700 transition-colors shrink-0 mb-12"
            >
              View All <Icon icon="ph:arrow-right" className="text-sm" />
            </Link>
          </div>
          <div ref={insightsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {marketNews.slice(0, 3).map((item) => (
              <MarketNewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Tools Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Free Tools"
            title="Practice with Simple Tools"
            subtitle="Calculator and journal tools designed to help beginners understand risk and trade planning."
          />
          <div ref={toolsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {tools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Preview */}
      <section className="py-16 md:py-24 bg-core-soft relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Glossary"
                title="Learn the Language of Trading"
                subtitle="Every trading term explained simply. Find definitions, examples, and context for the words traders use every day."
              />
              <Link
                to="/academy"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-core-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Full Glossary
                <Icon icon="ph:arrow-right" />
              </Link>
            </div>
            <div>
              <div className="bg-white rounded-2xl border border-core-line p-5 shadow-sm mb-4">
                <div className="flex items-center gap-3 px-4 py-2.5 bg-core-soft rounded-xl border border-core-line mb-4">
                  <Icon icon="ph:magnifying-glass" className="text-core-subtle text-base" />
                  <span className="text-sm text-core-subtle">Search trading terms...</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {glossaryChips.map((chip) => (
                    <span
                      key={chip}
                      className="px-3 py-1.5 rounded-full bg-core-soft border border-core-line text-xs font-medium text-core-muted hover:bg-core-sky hover:text-core-blue hover:border-blue-200 transition-colors cursor-pointer"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-core-line p-5 shadow-sm">
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-bold text-core-ink">Pip</p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-core-sky text-core-blue font-semibold">
                    Forex Basics
                  </span>
                </div>
                <p className="text-xs text-core-muted leading-relaxed mb-2">
                  The smallest standard price movement in a currency pair, typically 0.0001.
                </p>
                <div className="bg-core-soft rounded-lg px-3 py-2">
                  <p className="text-xs text-core-ink">
                    <span className="font-semibold">Example:</span> If EUR/USD moves from 1.1000 to 1.1001, that's a
                    1-pip move.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DisclaimerBanner />

      <CTASection
        heading="Start learning before you start trading."
        subtext="Build your foundation with structured lessons, simple explanations, and practical tools."
        primaryLabel="Go to Academy"
        primaryTo="/academy"
        secondaryLabel="Explore Tools"
        secondaryTo="/tools"
      />
    </div>
  );
}
