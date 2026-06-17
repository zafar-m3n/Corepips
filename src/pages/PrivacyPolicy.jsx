import { Icon } from "@iconify/react";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import DisclaimerBanner from "../components/common/DisclaimerBanner";
import CTASection from "../components/common/CTASection";
import BackgroundEffects from "../components/layout/BackgroundEffects";
import { useStaggerReveal } from "../hooks/useAnimation";

const privacySections = [
  {
    number: "01",
    icon: "ph:download-simple",
    title: "Information We Collect",
    description: "We only collect personal information that you knowingly and voluntarily provide to us.",
    items: [
      {
        label: "Voluntary Information",
        text: "When you subscribe to our educational newsletter or request market analysis updates, we collect your email address and your name.",
      },
      {
        label: "Automatically Collected Information",
        text: "We automatically collect certain non-personal information when you visit our site, such as your IP address, browser type, and the pages you visit.",
      },
    ],
  },
  {
    number: "02",
    icon: "ph:cookie",
    title: "Cookies and Web Beacons",
    description:
      'CorePips uses "cookies" to store information including visitors’ preferences and the pages on the website that the visitor accessed or visited.',
    items: [
      {
        label: "Why we use cookies",
        text: "This information is used to optimize the user experience by customizing our web page content based on visitors’ browser type and/or other information.",
      },
    ],
  },
  {
    number: "03",
    icon: "ph:chart-line-up",
    title: "Google Ads and Analytics",
    description: "We use third-party vendors, including Google, to serve ads and analyze traffic on our website.",
    items: [
      {
        label: "Advertising cookies",
        text: "Google uses cookies to serve ads based on a user’s prior visits to our website or other websites.",
      },
      {
        label: "Personalized ads",
        text: "Google’s use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet.",
      },
      {
        label: "Opt-out option",
        text: "You may opt out of personalized advertising by visiting Google Ads Settings.",
      },
    ],
  },
  {
    number: "04",
    icon: "ph:gear-six",
    title: "How We Use Your Information",
    description:
      "We use the information we collect to operate, improve, and personalize the CorePips educational experience.",
    items: [
      {
        label: "Website operation",
        text: "Provide, operate, and maintain our website.",
      },
      {
        label: "Content improvement",
        text: "Improve, personalize, and expand our educational content.",
      },
      {
        label: "Analytics",
        text: "Understand and analyze how you use our website.",
      },
      {
        label: "Educational updates",
        text: "Send you daily or weekly market analysis, newsletter updates, and educational resources.",
      },
    ],
    highlight:
      "We strictly do not sell, rent, or share your personal data with third-party brokers or unlicensed platforms.",
  },
  {
    number: "05",
    icon: "ph:handshake",
    title: "Third-Party Privacy Policies",
    description: "CorePips’ Privacy Policy does not apply to other advertisers, platforms, or websites.",
    items: [
      {
        label: "External services",
        text: "We advise you to consult the respective Privacy Policies of third-party ad servers or email marketing platforms such as Mailchimp or ActiveCampaign for more detailed information.",
      },
    ],
  },
  {
    number: "06",
    icon: "ph:scales",
    title: "Data Protection Rights",
    description: "We want to make sure you are fully aware of your data protection rights.",
    items: [
      {
        label: "Access your data",
        text: "You have the right to request copies of your personal data.",
      },
      {
        label: "Object to processing",
        text: "You have the right to object to our processing of your personal data.",
      },
      {
        label: "Unsubscribe",
        text: 'You can opt out of receiving our educational emails at any time by clicking the "Unsubscribe" link located at the bottom of our newsletters.',
      },
    ],
  },
  {
    number: "07",
    icon: "ph:check-circle",
    title: "Consent",
    description:
      "By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.",
    items: [],
  },
];

const quickSummary = [
  {
    icon: "ph:shield-check",
    title: "Privacy-first",
    text: "We only collect information needed to improve your learning experience.",
  },
  {
    icon: "ph:envelope-simple",
    title: "Email control",
    text: "You can unsubscribe from educational emails whenever you want.",
  },
  {
    icon: "ph:prohibit",
    title: "No broker selling",
    text: "We do not sell your personal data to brokers or unlicensed platforms.",
  },
];

function PrivacyPolicy() {
  const summaryRef = useStaggerReveal(0.08);
  const sectionsRef = useStaggerReveal(0.07);

  return (
    <div>
      <PageHero
        badge="Privacy Policy"
        heading="How CorePips handles"
        headingHighlight="your privacy."
        subtext="This Privacy Policy explains what information CorePips collects, how we use it, and the rights you have when using our educational platform."
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
                <Icon icon="ph:lock-key" className="text-core-blue text-xl" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-core-ink mb-3">Your privacy matters to us.</h2>
                <p className="text-sm text-core-muted leading-relaxed mb-4">
                  At CorePips, accessible from our website, one of our main priorities is the privacy of our visitors.
                  This Privacy Policy document contains types of information that is collected and recorded by CorePips
                  and how we use it.
                </p>
                <p className="text-sm text-core-muted leading-relaxed">
                  If you have additional questions or require more information about our Privacy Policy, please contact
                  us at{" "}
                  <a
                    href="mailto:support@corepips.com"
                    className="font-semibold text-core-blue hover:text-blue-700 transition-colors"
                  >
                    support@corepips.com
                  </a>
                  .
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
            eyebrow="Privacy Summary"
            title="Simple, transparent, and education-first"
            subtitle="CorePips is built as an educational platform, so our privacy approach is focused on clarity, user control, and responsible data use."
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

      {/* Privacy sections */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Full Policy"
            title="Privacy Policy Details"
            subtitle="Read the full breakdown of what information is collected, how it is used, and what rights you have."
          />

          <div ref={sectionsRef} className="space-y-5">
            {privacySections.map((section) => (
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

      {/* Contact notice */}
      <section className="py-16 md:py-20 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="section" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white rounded-2xl border border-core-line p-6 md:p-8 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-core-sky flex items-center justify-center mx-auto mb-4">
              <Icon icon="ph:envelope" className="text-core-blue text-2xl" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-core-ink mb-3">Questions about your privacy?</h2>
            <p className="text-sm text-core-muted leading-relaxed mb-5 max-w-2xl mx-auto">
              If you need clarification about how CorePips handles information, you can contact our support team at any
              time.
            </p>
            <a
              href="mailto:support@corepips.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-core-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm"
            >
              Contact Support
              <Icon icon="ph:arrow-right" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PrivacyPolicy;
