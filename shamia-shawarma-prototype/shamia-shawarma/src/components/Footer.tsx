"use client";

import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import { restaurantInfo } from "@/lib/data";

export default function Footer() {
  const { lang } = useLanguage();
  const t = dict[lang];

  const links = [
    { href: "#menu", label: t.nav.menu },
    { href: "#avis", label: t.nav.avis },
    { href: "#trouver", label: t.nav.trouver },
    { href: "#commander", label: t.nav.commander },
  ];

  return (
    <footer className="bg-ink px-5 py-14 text-cream/80 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <span className="font-display text-xl italic text-cream">Shamia Shawarma</span>
            <p className="mt-2 max-w-sm text-sm text-cream/50">{t.footer.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-saffron transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-cream/10 pt-6 text-xs text-cream/40 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} Shamia Shawarma — {restaurantInfo.addressLine} · {t.footer.rights}
          </span>
          <span className="font-ticket uppercase tracking-wide text-saffron/70">
            {t.footer.placeholder}
          </span>
        </div>
      </div>
    </footer>
  );
}
