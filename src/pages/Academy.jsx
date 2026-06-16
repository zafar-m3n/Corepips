import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PageHero from "../components/common/PageHero";
import SectionHeading from "../components/common/SectionHeading";
import CTASection from "../components/common/CTASection";
import CourseCard from "../components/cards/CourseCard";
import GlossaryCard from "../components/cards/GlossaryCard";
import DisclaimerBanner from "../components/common/DisclaimerBanner";
import BackgroundEffects from "../components/layout/BackgroundEffects";
import { courses, learningPaths, glossaryTerms } from "../data/academy";
import { useStaggerReveal } from "../hooks/useAnimation";

gsap.registerPlugin(ScrollTrigger);

const levels = ["Beginner", "Intermediate", "Advanced"];
const glossaryCategories = ["All", "Forex Basics", "Technical Analysis", "Fundamental Analysis", "Risk Management", "Market Terms"];

export default function Academy() {
  const [activeLevel, setActiveLevel] = useState("Beginner");
  const [glossarySearch, setGlossarySearch] = useState("");
  const [glossaryCategory, setGlossaryCategory] = useState("All");

  const coursesRef = useStaggerReveal(0.08);

  const filteredGlossary = glossaryTerms.filter((t) => {
    const matchSearch = t.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
      t.definition.toLowerCase().includes(glossarySearch.toLowerCase());
    const matchCat = glossaryCategory === "All" || t.category === glossaryCategory;
    return matchSearch && matchCat;
  });

  const levelKey = activeLevel.toLowerCase();
  const activeCourses = courses[levelKey] || [];

  return (
    <div>
      <PageHero
        badge="Learning Platform"
        heading="Build your trading knowledge"
        headingHighlight="step by step."
        subtext="Follow beginner-friendly learning paths that explain forex, market analysis, risk management, and trading psychology in simple language."
      >
        <div className="flex flex-wrap gap-3">
          <a href="#courses" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-core-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
            Browse Courses <Icon icon="ph:arrow-right" />
          </a>
          <a href="#glossary" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-core-line bg-white text-core-ink text-sm font-semibold hover:bg-core-soft transition-colors">
            <Icon icon="ph:book-open" /> View Glossary
          </a>
        </div>
      </PageHero>

      {/* Level selector */}
      <section id="courses" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Curriculum"
            title="Choose Your Level"
            subtitle="Whether you're just starting out or building on existing knowledge, we have a path for you."
          />
          <div className="flex gap-2 mb-8 flex-wrap">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                  activeLevel === lvl
                    ? "bg-core-blue text-white border-core-blue shadow-sm"
                    : "bg-white text-core-muted border-core-line hover:border-blue-200 hover:text-core-ink"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
          <div key={activeLevel} ref={coursesRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {activeCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Quiz banner */}
      <section className="py-10 bg-core-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-core-line p-6 md:p-8 flex flex-col md:flex-row items-center gap-5 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-core-sky flex items-center justify-center shrink-0">
              <Icon icon="ph:question" className="text-core-blue text-2xl" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-base font-bold text-core-ink mb-1">Test your knowledge after each learning path.</p>
              <p className="text-sm text-core-muted">Short quizzes help reinforce what you've learned and highlight areas to revisit.</p>
            </div>
            <button className="shrink-0 px-5 py-2.5 rounded-xl bg-core-blue text-white text-sm font-semibold hover:bg-blue-700 transition-colors">
              Coming Soon
            </button>
          </div>
        </div>
      </section>

      {/* Glossary */}
      <section id="glossary" className="py-16 md:py-24 bg-core-bg relative overflow-hidden">
        <BackgroundEffects variant="soft" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            eyebrow="Glossary"
            title="Trading Terms Explained Simply"
            subtitle="Find plain-English definitions for every trading term you'll encounter."
          />

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 bg-white rounded-xl border border-core-line shadow-sm">
              <Icon icon="ph:magnifying-glass" className="text-core-subtle text-base shrink-0" />
              <input
                type="text"
                placeholder="Search terms..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="flex-1 text-sm text-core-ink placeholder:text-core-subtle bg-transparent outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {glossaryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setGlossaryCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  glossaryCategory === cat
                    ? "bg-core-blue text-white border-core-blue"
                    : "bg-white text-core-muted border-core-line hover:border-blue-200 hover:text-core-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {filteredGlossary.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredGlossary.map((term) => (
                <GlossaryCard key={term.term} term={term} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icon icon="ph:magnifying-glass" className="text-core-subtle text-3xl mx-auto mb-3" />
              <p className="text-sm text-core-muted">No terms found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>

      <DisclaimerBanner />
      <CTASection
        heading="Start with Forex 101"
        subtext="It only takes a few minutes to begin. Build the foundation that every good trader needs."
        primaryLabel="Start Learning"
        primaryTo="/academy"
      />
    </div>
  );
}
