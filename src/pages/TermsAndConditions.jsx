import { Icon } from "@iconify/react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import DisclaimerBanner from "../components/common/DisclaimerBanner";
import CTASection from "../components/common/CTASection";
import BackgroundEffects from "../components/layout/BackgroundEffects";
import { useStaggerReveal } from "../hooks/useAnimation";

const termsSections = [
  {
    number: "01",
    icon: "ph:book-open",
    title: "Educational Purposes Only",
    description:
      "All content, charts, analysis, and data provided on CorePips are for educational and informational purposes only.",
    items: [
      {
        label: "No financial advice",
        text: "Nothing on this site constitutes investment, financial, legal, or tax advice.",
      },
      {
        label: "No trading signals",
        text: "We do not provide specific buy or sell recommendations, trading signals, or investment advisory services.",
      },
    ],
  },
  {
    number: "02",
    icon: "ph:warning",
    title: "Risk Warning",
    description:
      "Financial trading, including stocks and foreign exchange, carries a high level of risk and may not be suitable for all investors.",
    items: [
      {
        label: "Trading risk",
        text: "Financial trading, including stocks and forex, may result in financial loss and should only be approached with proper education and risk awareness.",
      },
      {
        label: "Past performance",
        text: "Past performance is not indicative of future results.",
      },
      {
        label: "User responsibility",
        text: "You assume full responsibility for any trading decisions you make.",
      },
    ],
    highlight:
      "CorePips is not liable for any financial losses incurred based on the information provided on this website.",
  },
  {
    number: "03",
    icon: "ph:handshake",
    title: "User Conduct",
    description: "By using this site, you agree to use the content only for personal, non-commercial learning.",
    items: [
      {
        label: "Personal use only",
        text: "The educational content on CorePips is intended for personal learning and beginner-friendly market education.",
      },
      {
        label: "No unauthorized reproduction",
        text: "You may not reproduce, distribute, or modify our chart analyses or educational materials without prior written consent.",
      },
    ],
  },
  {
    number: "04",
    icon: "ph:prohibit",
    title: "Limitation of Liability",
    description:
      "CorePips and its operators shall not be held liable for any direct, indirect, or consequential damages resulting from the use of our website.",
    items: [
      {
        label: "Website use",
        text: "You use CorePips and its educational materials at your own discretion and responsibility.",
      },
      {
        label: "No liability for damages",
        text: "CorePips and its operators are not responsible for losses or damages caused by the use or inability to use our website or educational resources.",
      },
    ],
  },
  {
    number: "05",
    icon: "ph:gear-six",
    title: "Modifications to Service",
    description:
      "We reserve the right to modify or discontinue any part of our website or newsletter at any time without notice.",
    items: [
      {
        label: "Service updates",
        text: "CorePips may update, change, remove, or improve sections of the website, tools, lessons, newsletters, or educational resources at any time.",
      },
      {
        label: "No prior notice required",
        text: "Some changes may be made without prior notice to users.",
      },
    ],
  },
];

const quickSummary = [
  {
    icon: "ph:graduation-cap",
    title: "Education only",
    text: "CorePips provides educational content, not financial advice or trading signals.",
  },
  {
    icon: "ph:shield-warning",
    title: "Risk awareness",
    text: "Trading involves risk, and users are responsible for their own decisions.",
  },
  {
    icon: "ph:lock-key",
    title: "Protected content",
    text: "Our educational materials cannot be copied or redistributed without permission.",
  },
];

function TermsAndConditions() {
  const summaryRef = useStaggerReveal(0.08);
  const sectionsRef = useStaggerReveal(0.07);

  return (
    <div>
      <PageHero
        badge="Terms of Service"
        heading="Terms and conditions for"
        headingHighlight="using CorePips."
        subtext="These Terms of Service explain the rules, responsibilities, and limitations that apply when accessing or using the CorePips educational platform."
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-core-line text-core-muted text-xs font-semibold shadow-sm">
          <Icon icon="ph:calendar-blank" className="text-core-blue text-sm" />
          Last Updated: June 2026
        </div>
      </PageHero>

      {/* Intro */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-core-soft rounded-2xl border border-core-line p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-core-sky flex items-center justify-center shrink-0">
                <Icon icon="ph:file-text" className="text-core-blue text-xl" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-core-ink mb-3">Welcome to CorePips.</h2>
                <p className="text-sm text-core-muted leading-relaxed mb-4">
                  By accessing or using our website, you agree to comply with and be bound by the following Terms of
                  Service. Please read them carefully before using CorePips.
                </p>
                <p className="text-sm text-core-muted leading-relaxed">
                  CorePips is an educational platform designed to help users understand trading concepts, market
                  analysis, risk management, and financial market education in a beginner-friendly way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick summary */}
      <section className="py-16 md:py-20 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Terms Summary"
            title="Use CorePips responsibly"
            subtitle="CorePips is built for education, not investment advice, financial recommendations, or guaranteed trading outcomes."
            center
          />

          <div ref={summaryRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {quickSummary.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-core-line p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-core-sky flex items-center justify-center mb-3">
                  <Icon icon={item.icon} className="text-core-blue text-xl" />
                </div>
                <h3 className="text-sm font-bold text-core-ink mb-1.5">{item.title}</h3>
                <p className="text-xs text-core-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Full Terms"
            title="Terms of Service Details"
            subtitle="Please review these terms carefully before using CorePips or relying on any educational material published on the website."
          />

          <div ref={sectionsRef} className="space-y-5">
            {termsSections.map((section) => (
              <div
                key={section.number}
                className="bg-core-card rounded-2xl border border-core-line p-5 md:p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex sm:flex-col items-center sm:items-start gap-3 shrink-0">
                    <span className="text-xs font-bold text-core-blue/50">{section.number}</span>
                    <div className="w-10 h-10 rounded-xl bg-core-sky flex items-center justify-center">
                      <Icon icon={section.icon} className="text-core-blue text-xl" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-serif text-2xl text-core-ink mb-2">{section.title}</h3>
                    <p className="text-sm text-core-muted leading-relaxed mb-4">{section.description}</p>

                    {section.items.length > 0 && (
                      <div className="space-y-3">
                        {section.items.map((item) => (
                          <div key={item.label} className="bg-core-soft rounded-xl border border-core-line p-4">
                            <div className="flex items-start gap-3">
                              <Icon icon="ph:check-circle" className="text-core-green text-lg mt-0.5 shrink-0" />
                              <div>
                                <p className="text-sm font-bold text-core-ink mb-1">{item.label}</p>
                                <p className="text-xs text-core-muted leading-relaxed">{item.text}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.highlight && (
                      <div className="mt-4 bg-red-50 rounded-xl border border-red-100 p-4">
                        <div className="flex items-start gap-3">
                          <Icon icon="ph:warning-circle" className="text-core-red text-lg mt-0.5 shrink-0" />
                          <p className="text-xs font-semibold text-core-red leading-relaxed">{section.highlight}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final notice */}
      <section className="py-16 md:py-20 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="section" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white rounded-2xl border border-core-line p-6 md:p-8 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-core-sky flex items-center justify-center mx-auto mb-4">
              <Icon icon="ph:shield-warning" className="text-core-blue text-2xl" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-core-ink mb-3">Learn carefully. Trade responsibly.</h2>
            <p className="text-sm text-core-muted leading-relaxed max-w-2xl mx-auto">
              CorePips is designed to help users understand financial markets through education. Any trading or
              investment decision you make is your own responsibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TermsAndConditions;
