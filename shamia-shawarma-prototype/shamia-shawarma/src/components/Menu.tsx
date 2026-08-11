"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import { menuCategories } from "@/lib/data";
import MenuItemCard from "./MenuItemCard";

export default function Menu() {
  const { lang } = useLanguage();
  const t = dict[lang].menu;
  const [active, setActive] = useState<string>("all");

  const visibleCategories =
    active === "all" ? menuCategories : menuCategories.filter((c) => c.id === active);

  return (
    <section id="menu" className="bg-cream px-5 py-24 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-ticket text-xs uppercase tracking-[0.25em] text-paprika"
          >
            {t.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="mt-3 font-display text-3xl italic text-ink sm:text-4xl"
          >
            {t.title}
          </motion.h2>
          <p className="mx-auto mt-3 max-w-md text-xs uppercase tracking-wide text-ink/40 font-ticket">
            {t.priceNote}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActive("all")}
            className={`btn-squish relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === "all" ? "bg-paprika text-cream" : "bg-white/70 text-ink/70 hover:text-ink"
            }`}
          >
            {t.all}
          </button>
          {menuCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`btn-squish relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === c.id ? "bg-paprika text-cream" : "bg-white/70 text-ink/70 hover:text-ink"
              }`}
            >
              {c.label[lang]}
            </button>
          ))}
        </div>

        <div className="mt-14 space-y-14">
          {visibleCategories.map((cat) => (
            <div key={cat.id}>
              <h3 className="font-display text-2xl italic text-paprika">{cat.label[lang]}</h3>
              <div className="mt-2 divide-y divide-transparent">
                {cat.items.map((item, i) => (
                  <MenuItemCard key={item.id} item={item} index={i} variant="row" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
