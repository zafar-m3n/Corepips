import { useState } from "react";
import { Icon } from "@iconify/react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-core-line rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-core-soft transition-colors group"
      >
        <span className="text-sm font-semibold text-core-ink group-hover:text-core-blue transition-colors pr-4">
          {question}
        </span>
        <Icon
          icon="ph:caret-down"
          className={`text-core-muted text-base shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 border-t border-core-line bg-core-soft/50">
          <p className="text-sm text-core-muted leading-relaxed pt-4">{answer}</p>
        </div>
      )}
    </div>
  );
}
