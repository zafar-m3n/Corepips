import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import PageHero from "../components/common/PageHero";
import BackgroundEffects from "../components/layout/BackgroundEffects";
import { trackLeadFormConversion } from "@/lib/googleAds";

const REDIRECT_DELAY_MS = 4000;

export default function ThankYou() {
  const location = useLocation();
  const navigate = useNavigate();

  const hasFiredRef = useRef(false);
  const [isVerified] = useState(Boolean(location.state?.fromContactForm));

  useEffect(() => {
    if (!isVerified) {
      const timer = setTimeout(() => {
        navigate("/", { replace: true });
      }, REDIRECT_DELAY_MS);

      return () => clearTimeout(timer);
    }

    if (!hasFiredRef.current) {
      hasFiredRef.current = true;
      trackLeadFormConversion();
    }
  }, [isVerified, navigate]);

  if (!isVerified) {
    return (
      <div>
        <PageHero
          badge="CorePips"
          heading="This page isn't meant to be"
          headingHighlight="visited directly."
          subtext="Looks like you landed here without submitting the form. We'll take you back to the homepage in a moment."
        />

        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-14 h-14 rounded-2xl bg-core-sky flex items-center justify-center mx-auto mb-5">
              <Icon icon="ph:arrow-counter-clockwise" className="text-core-blue text-2xl" />
            </div>
            <p className="text-sm text-core-muted leading-relaxed mb-6">
              If you meant to reach us, head back and use the contact form on the homepage or About page.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-core-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Go to Homepage
              <Icon icon="ph:arrow-right" />
            </Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      <PageHero
        badge="Message Sent"
        heading="Thanks for reaching out —"
        headingHighlight="we've got your message."
        subtext="A member of the CorePips team will get back to you within 48 hours. In the meantime, feel free to keep exploring."
      />

      <section className="py-16 md:py-20 bg-white relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-core-soft rounded-3xl border border-core-line p-8 sm:p-10 text-center shadow-sm">
            <div className="w-16 h-16 rounded-2xl bg-core-mint flex items-center justify-center mx-auto mb-6">
              <Icon icon="ph:check-circle-fill" className="text-core-green text-3xl" />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl text-core-ink mb-3">You're all set.</h2>

            <p className="text-sm text-core-muted leading-relaxed max-w-md mx-auto mb-8">
              We've received your submission and someone from our team will follow up soon. While you wait, here's where
              you can pick back up.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <Link
                to="/academy"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-core-line hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-core-sky flex items-center justify-center shrink-0">
                  <Icon icon="ph:graduation-cap" className="text-core-blue text-xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-core-ink mb-0.5">Visit the Academy</p>
                  <p className="text-xs text-core-muted">Start with beginner-friendly lessons</p>
                </div>
              </Link>

              <Link
                to="/tools"
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-core-line hover:border-blue-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-core-mint flex items-center justify-center shrink-0">
                  <Icon icon="ph:calculator" className="text-core-green text-xl" />
                </div>
                <div>
                  <p className="text-sm font-bold text-core-ink mb-0.5">Explore Free Tools</p>
                  <p className="text-xs text-core-muted">Try the pip and risk calculators</p>
                </div>
              </Link>
            </div>

            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-core-blue hover:text-blue-700 transition-colors"
            >
              <Icon icon="ph:arrow-left" className="text-sm" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
