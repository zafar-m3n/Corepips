import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function ToolCard({ icon, title, description, to = "/tools", colorClass = "text-core-blue", bgClass = "bg-core-sky" }) {
  return (
    <div className="group bg-core-card rounded-2xl border border-core-line p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200">
      <div className={`w-11 h-11 rounded-xl ${bgClass} flex items-center justify-center mb-4`}>
        <Icon icon={icon} className={`${colorClass} text-2xl`} />
      </div>
      <h3 className="text-base font-bold text-core-ink mb-2 group-hover:text-core-blue transition-colors">{title}</h3>
      <p className="text-sm text-core-muted leading-relaxed mb-5">{description}</p>
      <Link
        to={to}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-core-blue hover:text-blue-700 transition-colors"
      >
        Open Tool
        <Icon icon="ph:arrow-right" className="text-sm" />
      </Link>
    </div>
  );
}
