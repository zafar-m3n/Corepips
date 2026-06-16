import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const difficultyColors = {
  Beginner: "bg-core-mint text-core-green",
  Intermediate: "bg-core-sky text-core-blue",
  Advanced: "bg-core-amber text-core-gold",
};

export default function CourseCard({ course }) {
  const { icon, title, description, difficulty, time, lessons } = course;

  return (
    <div className="group bg-core-card rounded-2xl border border-core-line p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-core-sky flex items-center justify-center">
          <Icon icon={icon} className="text-core-blue text-xl" />
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${difficultyColors[difficulty] || difficultyColors.Beginner}`}>
          {difficulty}
        </span>
      </div>
      <h3 className="text-sm font-bold text-core-ink mb-1.5 group-hover:text-core-blue transition-colors leading-snug">
        {title}
      </h3>
      <p className="text-xs text-core-muted leading-relaxed mb-4">{description}</p>

      <div className="w-full bg-core-soft rounded-full h-1 mb-4">
        <div className="bg-core-blue/30 h-1 rounded-full w-0" />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-core-subtle">
          <span className="flex items-center gap-1">
            <Icon icon="ph:clock" className="text-xs" />
            {time}
          </span>
          <span className="flex items-center gap-1">
            <Icon icon="ph:books" className="text-xs" />
            {lessons} lessons
          </span>
        </div>
        <Link
          to="/academy"
          className="text-xs font-semibold text-core-blue hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          View Course
          <Icon icon="ph:arrow-right" className="text-xs" />
        </Link>
      </div>
    </div>
  );
}
