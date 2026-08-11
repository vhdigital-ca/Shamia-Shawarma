"use client";

import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const { lang } = useLanguage();
  const t = dict[lang];
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#menu", label: t.nav.menu },
    { href: "#histoire", label: t.nav.histoire },
    { href: "#avis", label: t.nav.avis },
    { href: "#trouver", label: t.nav.trouver },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span
            className={`grid h-9 w-9 place-items-center rounded-full border-[1.5px] animate-spin-slow ${
              scrolled ? "border-paprika" : "border-cream"
            }`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 4L20 20M4 4L8 4M4 4L4 8"
                stroke={scrolled ? "var(--color-paprika)" : "var(--color-cream)"}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="9" cy="9" r="1.6" fill={scrolled ? "var(--color-paprika)" : "var(--color-cream)"} />
              <circle cx="13" cy="13" r="1.6" fill={scrolled ? "var(--color-paprika)" : "var(--color-cream)"} />
              <circle cx="17" cy="17" r="1.6" fill={scrolled ? "var(--color-paprika)" : "var(--color-cream)"} />
            </svg>
          </span>
          <span
            className={`font-display text-lg italic tracking-tight ${
              scrolled ? "text-ink" : "text-cream"
            }`}
          >
            Shamia Shawarma
          </span>
        </a>

        <nav className={`hidden items-center gap-8 md:flex ${scrolled ? "text-ink" : "text-cream"}`}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide hover:text-paprika transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle dark={!scrolled} />
          <a
            href="#commander"
            className="btn-squish rounded-full bg-paprika px-5 py-2.5 text-sm font-semibold text-cream shadow-sm hover:bg-paprika-dark"
          >
            {t.nav.commander}
          </a>
        </div>

        <button
          className={`md:hidden ${scrolled ? "text-ink" : "text-cream"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-cream px-5 py-5 md:hidden">
          <nav className="flex flex-col gap-4 text-ink">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center justify-between">
            <LanguageToggle />
            <a
              href="#commander"
              onClick={() => setOpen(false)}
              className="btn-squish rounded-full bg-paprika px-5 py-2.5 text-sm font-semibold text-cream"
            >
              {t.nav.commander}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
