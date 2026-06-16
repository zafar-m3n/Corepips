import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const colorMap = {
  blue: { bg: "bg-core-sky", icon: "text-core-blue", badge: "bg-core-blue/10 text-core-blue", border: "hover:border-blue-200" },
  teal: { bg: "bg-teal-50", icon: "text-core-teal", badge: "bg-teal-100 text-core-teal", border: "hover:border-teal-200" },
  green: { bg: "bg-core-mint", icon: "text-core-green", badge: "bg-green-100 text-core-green", border: "hover:border-green-200" },
  gold: { bg: "bg-core-amber", icon: "text-core-gold", badge: "bg-amber-100 text-core-gold", border: "hover:border-amber-200" },
};

const difficultyColors = {
  Beginner: "bg-core-mint text-core-green",
  Intermediate: "bg-core-sky text-core-blue",
  Advanced: "bg-core-amber text-core-gold",
};

export default function LearningPathCard({ path }) {
  const { icon, title, description, difficulty, lessons, color = "blue" } = path;
  const c = colorMap[color] || colorMap.blue;

  return (
    <div className={`group bg-core-card rounded-2xl border border-core-line p-6 shadow-sm hover:shadow-md ${c.border} transition-all duration-200`}>
      <div className={`w-12 h-12 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
        <Icon icon={icon} className={`${c.icon} text-2xl`} />
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${difficultyColors[difficulty] || difficultyColors.Beginner}`}>
          {difficulty}
        </span>
        <span className="text-xs text-core-subtle">{lessons} lessons</span>
      </div>
      <h3 className="text-base font-bold text-core-ink mb-2 group-hover:text-core-blue transition-colors">{title}</h3>
      <p className="text-sm text-core-muted leading-relaxed mb-5">{description}</p>
      <Link
        to="/academy"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-core-blue hover:text-blue-700 transition-colors"
      >
        Start Path
        <Icon icon="ph:arrow-right" className="text-sm" />
      </Link>
    </div>
  );
}
