import { Icon } from "@iconify/react";

const impactConfig = {
  High: { color: "bg-red-100 text-core-red border-red-200", icon: "ph:fire" },
  Medium: { color: "bg-core-amber text-core-gold border-amber-200", icon: "ph:lightning" },
  Low: { color: "bg-core-mint text-core-green border-green-200", icon: "ph:leaf" },
};

export default function ImpactBadge({ level }) {
  const config = impactConfig[level] || impactConfig.Low;
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold border ${config.color}`}>
      <Icon icon={config.icon} className="text-xs" />
      {level}
    </span>
  );
}
