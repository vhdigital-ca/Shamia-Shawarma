"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import { orderLinks } from "@/lib/data";

const PLATFORMS = [
  { name: "Uber Eats", href: orderLinks.uberEats, bg: "bg-black hover:bg-ink" },
  { name: "DoorDash", href: orderLinks.doorDash, bg: "bg-paprika hover:bg-paprika-dark" },
  { name: "SkipTheDishes", href: orderLinks.skipTheDishes, bg: "bg-olive hover:bg-olive/80" },
];

export default function OrderButtons() {
  const { lang } = useLanguage();
  const t = dict[lang].order;

  return (
    <section id="commander" className="relative overflow-hidden bg-charcoal px-5 py-24 text-cream md:px-8">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 400 200" preserveAspectRatio="none">
          {Array.from({ length: 10 }).map((_, i) => (
            <line key={i} x1={-20 + i * 45} y1="200" x2={40 + i * 45} y2="0" stroke="var(--color-saffron)" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-ticket text-xs uppercase tracking-[0.25em] text-saffron"
        >
          {t.eyebrow}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-3xl italic sm:text-4xl"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-cream/70"
        >
          {t.body}
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {PLATFORMS.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.08 }}
              className={`btn-squish rounded-full px-7 py-3.5 text-sm font-semibold text-cream shadow-lg ${p.bg}`}
            >
              {p.name}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
