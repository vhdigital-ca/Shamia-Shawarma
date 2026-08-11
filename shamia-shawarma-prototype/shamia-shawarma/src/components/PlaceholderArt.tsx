"use client";

import { useLanguage } from "@/context/LanguageContext";

const VARIANTS = [
  "from-paprika to-saffron",
  "from-saffron to-olive",
  "from-charcoal to-paprika",
  "from-olive to-charcoal",
] as const;

export default function PlaceholderArt({
  variant = 0,
  label,
  className = "",
}: {
  variant?: number;
  label?: string;
  className?: string;
}) {
  const { lang } = useLanguage();
  const gradient = VARIANTS[variant % VARIANTS.length];
  const text = label ?? (lang === "fr" ? "Image à venir" : "Photo coming soon");

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} ${className}`}
      role="img"
      aria-label={text}
    >
      {/* skewer motif */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="40" x2="200" y2="10" stroke="var(--color-cream)" strokeWidth="2" />
        <line x1="0" y1="100" x2="200" y2="70" stroke="var(--color-cream)" strokeWidth="2" />
        <line x1="0" y1="160" x2="200" y2="130" stroke="var(--color-cream)" strokeWidth="2" />
      </svg>

      {/* rising smoke wisps */}
      <div className="absolute inset-0 flex items-end justify-center gap-6 pb-2">
        <span className="h-6 w-1.5 rounded-full bg-cream/40 animate-rise" style={{ animationDelay: "0s" }} />
        <span className="h-8 w-1.5 rounded-full bg-cream/30 animate-rise" style={{ animationDelay: "0.8s" }} />
        <span className="h-5 w-1.5 rounded-full bg-cream/40 animate-rise" style={{ animationDelay: "1.6s" }} />
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center px-4">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" className="opacity-90">
          <path
            d="M4 4L20 20M4 4L8 4M4 4L4 8"
            stroke="var(--color-cream)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="9" cy="9" r="1.4" fill="var(--color-cream)" />
          <circle cx="13" cy="13" r="1.4" fill="var(--color-cream)" />
          <circle cx="17" cy="17" r="1.4" fill="var(--color-cream)" />
        </svg>
        <span className="font-ticket text-[10px] uppercase tracking-[0.2em] text-cream/90">
          {text}
        </span>
      </div>
    </div>
  );
}
