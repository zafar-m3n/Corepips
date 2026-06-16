import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Academy", to: "/academy" },
  { label: "Markets", to: "/markets" },
  { label: "Analysis", to: "/analysis" },
  { label: "Tools", to: "/tools" },
  { label: "About", to: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-core-line shadow-sm"
            : "bg-white/70 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-core-blue flex items-center justify-center">
                <Icon icon="ph:chart-line-up-bold" className="text-white text-lg" />
              </div>
              <span className="font-serif text-xl text-core-ink tracking-tight">
                Core<span className="text-core-blue">Pips</span>
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? "text-core-blue bg-core-sky/60"
                        : "text-core-muted hover:text-core-ink hover:bg-core-soft"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/academy"
                className="px-4 py-2 rounded-lg bg-core-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors duration-150 shadow-sm"
              >
                Start Learning
              </Link>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-core-muted hover:text-core-ink hover:bg-core-soft transition-colors"
              aria-label="Toggle menu"
            >
              <Icon icon={menuOpen ? "ph:x-bold" : "ph:list-bold"} className="text-xl" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-core-ink/20 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div
          className={`absolute top-0 right-0 w-80 h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-core-line">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-core-blue flex items-center justify-center">
                <Icon icon="ph:chart-line-up-bold" className="text-white text-base" />
              </div>
              <span className="font-serif text-lg text-core-ink">
                Core<span className="text-core-blue">Pips</span>
              </span>
            </Link>
            <button onClick={() => setMenuOpen(false)} className="p-1.5 rounded-lg text-core-muted hover:text-core-ink hover:bg-core-soft">
              <Icon icon="ph:x-bold" className="text-lg" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "text-core-blue bg-core-sky/60"
                      : "text-core-muted hover:text-core-ink hover:bg-core-soft"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="px-4 pb-8">
            <Link
              to="/academy"
              className="block w-full text-center px-4 py-3 rounded-xl bg-core-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
