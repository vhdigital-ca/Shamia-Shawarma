"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle({ dark = false }: { dark?: boolean }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      aria-label="Switch language / Changer de langue"
      className={`btn-squish relative flex items-center rounded-full border px-1 py-1 text-xs font-semibold font-ticket uppercase tracking-wide ${
        dark ? "border-cream/30 text-cream" : "border-ink/20 text-ink"
      }`}
    >
      <span
        className={`flex h-6 w-8 items-center justify-center rounded-full transition-colors ${
          lang === "fr" ? "bg-paprika text-cream" : "opacity-50"
        }`}
      >
        FR
      </span>
      <span
        className={`flex h-6 w-8 items-center justify-center rounded-full transition-colors ${
          lang === "en" ? "bg-paprika text-cream" : "opacity-50"
        }`}
      >
        EN
      </span>
    </button>
  );
}
