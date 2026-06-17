import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const footerLinks = {
  Platform: [
    { label: "Home", to: "/" },
    { label: "Academy", to: "/academy" },
    { label: "Markets", to: "/markets" },
    { label: "Analysis", to: "/analysis" },
    { label: "Tools", to: "/tools" },
    { label: "About", to: "/about" },
  ],
  Academy: [
    { label: "Forex 101", to: "/academy" },
    { label: "Chart Reading", to: "/academy" },
    { label: "Risk Management", to: "/academy" },
    { label: "Trading Psychology", to: "/academy" },
    { label: "Glossary", to: "/academy" },
  ],
  Tools: [
    { label: "Pip Calculator", to: "/tools" },
    { label: "Position Size Calculator", to: "/tools" },
    { label: "Risk/Reward Calculator", to: "/tools" },
    { label: "Trading Journal", to: "/tools" },
  ],
};

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms-and-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-core-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-core-blue flex items-center justify-center">
                <Icon icon="ph:chart-line-up-bold" className="text-white text-lg" />
              </div>
              <span className="font-serif text-xl text-white tracking-tight">
                Core<span className="text-sky-400">Pips</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              A beginner-friendly education platform for learning forex, market analysis, risk management, and trading
              fundamentals.
            </p>

            <div className="flex items-center gap-3 mt-5">
              {["ph:twitter-logo", "ph:instagram-logo", "ph:youtube-logo"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <Icon icon={icon} className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-white mb-4">{section}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="bg-white/5 rounded-xl px-5 py-4 mb-6">
            <p className="text-xs text-slate-400 leading-relaxed">
              <span className="text-slate-300 font-medium">Educational Disclaimer:</span> All content on CorePips is for
              educational purposes only and does not constitute financial advice. Trading involves significant risk and
              may not be suitable for all individuals. Always conduct your own research and consult a qualified
              financial advisor before making any investment decisions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} CorePips. All rights reserved.</p>

            <div className="flex items-center gap-3">
              {legalLinks.map((link, index) => (
                <div key={link.label} className="flex items-center gap-3">
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="text-white/20">/</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
