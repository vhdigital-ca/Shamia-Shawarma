"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import { featuredItems } from "@/lib/data";
import MenuItemCard from "./MenuItemCard";

export default function FeaturedDropdown() {
  const { lang } = useLanguage();
  const t = dict[lang].featured;

  return (
    <section className="bg-cream px-5 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
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
              className="mt-3 max-w-xl font-display text-3xl italic text-ink sm:text-4xl"
            >
              {t.title}
            </motion.h2>
          </div>
          <a
            href="#menu"
            className="btn-squish shrink-0 rounded-full border border-ink/20 px-5 py-2.5 text-sm font-semibold text-ink hover:border-paprika hover:text-paprika"
          >
            {t.viewAll}
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredItems.map((item, i) => (
            <MenuItemCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
