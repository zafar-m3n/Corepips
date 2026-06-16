import { Icon } from "@iconify/react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import DisclaimerBanner from "../components/common/DisclaimerBanner";
import CTASection from "../components/common/CTASection";
import BackgroundEffects from "../components/layout/BackgroundEffects";
import FAQItem from "../components/common/FAQItem";
import ContactForm from "../components/common/ContactForm";
import { faqs } from "../data/about";
import { useStaggerReveal } from "../hooks/useAnimation";

const teaches = [
  { icon: "ph:currency-circle-dollar", title: "Forex Basics", desc: "How currency markets work and why exchange rates move." },
  { icon: "ph:chart-bar", title: "Chart Reading", desc: "Candlestick charts, trends, and pattern recognition." },
  { icon: "ph:newspaper", title: "Market News", desc: "Understanding economic events and how they move markets." },
  { icon: "ph:shield-check", title: "Risk Management", desc: "Stop losses, position sizing, and protecting your capital." },
  { icon: "ph:brain", title: "Trading Psychology", desc: "Discipline, patience, and emotional control in trading." },
  { icon: "ph:calculator", title: "Practical Tools", desc: "Calculators and journals to support structured learning." },
];

const whoFor = [
  { icon: "ph:student", label: "Beginners learning forex" },
  { icon: "ph:graduation-cap", label: "Students interested in markets" },
  { icon: "ph:trend-up", label: "New traders learning risk management" },
  { icon: "ph:newspaper", label: "People wanting to understand financial news" },
];

export default function About() {
  const teachesRef = useStaggerReveal(0.08);
  const faqsRef = useStaggerReveal(0.07);

  return (
    <div>
      <PageHero
        badge="About CorePips"
        heading="Making market education"
        headingHighlight="easier to understand."
        subtext="CorePips exists to help beginners build a strong foundation before engaging with financial markets — through structured lessons, simple explanations, and practical tools."
      />

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-core-blue uppercase tracking-wider mb-3">Our Mission</p>
              <h2 className="font-serif text-3xl md:text-4xl text-core-ink mb-5 leading-tight">
                Education first. Always.
              </h2>
              <p className="text-core-muted leading-relaxed mb-4">
                CorePips exists to make trading and market education easier to understand for beginners. We believe that every person who wants to learn about financial markets deserves access to clear, honest, and structured educational content.
              </p>
              <p className="text-core-muted leading-relaxed mb-4">
                We don't sell signals. We don't make profit promises. We don't hype trading as a quick path to wealth. Instead, we focus on what actually matters: understanding how markets work, how to manage risk responsibly, and how to develop the discipline that any good market participant needs.
              </p>
              <p className="text-core-muted leading-relaxed">
                Our core belief: <span className="font-semibold text-core-ink">learn the basics, understand the markets, manage your risk.</span>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "ph:book-open", val: "50+", label: "Lessons Available", color: "text-core-blue", bg: "bg-core-sky" },
                { icon: "ph:graduation-cap", val: "6+", label: "Learning Paths", color: "text-core-teal", bg: "bg-teal-50" },
                { icon: "ph:calculator", val: "4", label: "Free Tools", color: "text-core-green", bg: "bg-core-mint" },
                { icon: "ph:shield-check", val: "100%", label: "Free to Access", color: "text-core-gold", bg: "bg-core-amber" },
              ].map((s) => (
                <div key={s.label} className="bg-core-soft rounded-2xl border border-core-line p-5">
                  <div className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-3`}>
                    <Icon icon={s.icon} className={`${s.color} text-xl`} />
                  </div>
                  <p className={`text-2xl font-bold ${s.color} mb-0.5`}>{s.val}</p>
                  <p className="text-xs font-semibold text-core-muted">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What CorePips Teaches */}
      <section className="py-16 md:py-20 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Curriculum"
            title="What CorePips Teaches"
            subtitle="A comprehensive educational curriculum covering every dimension of forex and market understanding."
          />
          <div ref={teachesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {teaches.map((t) => (
              <div key={t.title} className="flex gap-4 bg-white rounded-2xl border border-core-line p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                <div className="w-10 h-10 rounded-xl bg-core-sky flex items-center justify-center shrink-0">
                  <Icon icon={t.icon} className="text-core-blue text-xl" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-core-ink mb-1">{t.title}</h3>
                  <p className="text-xs text-core-muted leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for + Education-first approach */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <SectionHeading
                eyebrow="Who It's For"
                title="Built for Beginners"
                subtitle="CorePips is designed for anyone starting from zero."
              />
              <div className="space-y-3">
                {whoFor.map((w) => (
                  <div key={w.label} className="flex items-center gap-3 p-4 bg-core-soft rounded-xl border border-core-line hover:bg-white hover:border-blue-200 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-core-sky flex items-center justify-center shrink-0">
                      <Icon icon={w.icon} className="text-core-blue text-base" />
                    </div>
                    <p className="text-sm font-medium text-core-ink">{w.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Approach"
                title="Education Over Hype"
                subtitle="We focus on what builds long-term understanding."
              />
              <div className="space-y-4">
                {[
                  { icon: "ph:check-circle", title: "Structured learning paths", desc: "Content is organized from beginner to advanced so knowledge builds logically." },
                  { icon: "ph:check-circle", title: "Risk awareness from day one", desc: "We introduce risk management early — before strategy, patterns, or indicators." },
                  { icon: "ph:check-circle", title: "No signal selling or profit promises", desc: "CorePips never claims you'll make money or provides trading signals of any kind." },
                  { icon: "ph:check-circle", title: "Plain language throughout", desc: "Every concept is explained in simple terms without unnecessary financial jargon." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <Icon icon={item.icon} className="text-core-green text-xl mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-core-ink mb-0.5">{item.title}</p>
                      <p className="text-xs text-core-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            subtitle="Answers to the most common questions about CorePips."
            center
          />
          <div ref={faqsRef} className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Get in Touch"
                subtitle="Have a question about the platform? We'd love to hear from you."
              />
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-core-soft rounded-xl border border-core-line">
                  <div className="w-9 h-9 rounded-lg bg-core-sky flex items-center justify-center">
                    <Icon icon="ph:envelope" className="text-core-blue text-base" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-core-muted">Email</p>
                    <p className="text-sm font-medium text-core-ink">hello@corepips.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-core-soft rounded-xl border border-core-line">
                  <div className="w-9 h-9 rounded-lg bg-core-sky flex items-center justify-center">
                    <Icon icon="ph:chat-circle-dots" className="text-core-blue text-base" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-core-muted">Response Time</p>
                    <p className="text-sm font-medium text-core-ink">Within 48 hours</p>
                  </div>
                </div>
                <div className="p-4 bg-core-soft rounded-xl border border-core-line">
                  <p className="text-xs font-semibold text-core-muted mb-2">Follow CorePips</p>
                  <div className="flex items-center gap-2">
                    {["ph:twitter-logo", "ph:instagram-logo", "ph:youtube-logo"].map((icon) => (
                      <a key={icon} href="#" className="w-9 h-9 rounded-lg bg-white border border-core-line flex items-center justify-center text-core-muted hover:text-core-blue hover:border-blue-200 transition-colors">
                        <Icon icon={icon} className="text-base" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <DisclaimerBanner />
      <CTASection
        heading="Ready to start learning?"
        subtext="Build your market education from the ground up with structured, beginner-friendly lessons."
        primaryLabel="Go to Academy"
        primaryTo="/academy"
        secondaryLabel="Explore Tools"
        secondaryTo="/tools"
      />
    </div>
  );
}
