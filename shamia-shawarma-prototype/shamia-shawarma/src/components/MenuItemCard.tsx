"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import { MenuItem } from "@/lib/data";
import PlaceholderArt from "./PlaceholderArt";

export default function MenuItemCard({
  item,
  index = 0,
  variant = "grid",
}: {
  item: MenuItem;
  index?: number;
  variant?: "grid" | "row";
}) {
  const { lang } = useLanguage();
  const t = dict[lang];

  if (variant === "row") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
        className="group flex items-start justify-between gap-4 border-b border-ink/10 py-4"
      >
        <div>
          <h4 className="font-display text-lg text-ink">{item.name[lang]}</h4>
          <p className="mt-1 max-w-md text-sm text-ink/60">{item.description[lang]}</p>
        </div>
        <span className="whitespace-nowrap font-ticket text-sm font-semibold text-paprika">
          {item.price.toFixed(2)} $
        </span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      className="btn-squish group overflow-hidden rounded-2xl border border-ink/10 bg-white/60 shadow-sm"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <PlaceholderArt variant={index} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
        {item.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-charcoal/90 px-3 py-1 font-ticket text-[10px] uppercase tracking-wider text-cream">
            {t.badges[item.badge]}
          </span>
        )}
      </div>
      <div className="p-5">
        <h4 className="font-display text-xl text-ink">{item.name[lang]}</h4>
        <p className="mt-1.5 text-sm text-ink/60">{item.description[lang]}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-ticket text-sm font-semibold text-paprika">
            {item.price.toFixed(2)} $
          </span>
          <span className="font-ticket text-[10px] uppercase tracking-wider text-ink/40">
            {t.menu.imgAlt}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
