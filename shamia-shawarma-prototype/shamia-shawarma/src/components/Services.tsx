"use client";

import { motion } from "framer-motion";
import { Flame, Users, Timer } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import PlaceholderArt from "./PlaceholderArt";

export default function Services() {
  const { lang } = useLanguage();
  const t = dict[lang].services;

  const features = [
    { icon: Flame, title: t.feature1title, body: t.feature1body },
    { icon: Users, title: t.feature2title, body: t.feature2body },
    { icon: Timer, title: t.feature3title, body: t.feature3body },
  ];

  return (
    <section id="histoire" className="bg-cream-dim px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2">
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
            className="mt-3 font-display text-3xl italic text-ink sm:text-4xl"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 max-w-xl text-ink/70 leading-relaxed"
          >
            {t.body}
          </motion.p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                <f.icon className="text-paprika" size={22} />
                <h4 className="mt-3 font-display text-base text-ink">{f.title}</h4>
                <p className="mt-1 text-sm text-ink/60">{f.body}</p>
              </motion.div>
            ))}
          </div>

          <a
            href="#menu"
            className="btn-squish mt-10 inline-block rounded-full bg-charcoal px-6 py-3 text-sm font-semibold text-cream hover:bg-ink"
          >
            {t.discover}
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <PlaceholderArt variant={0} className="col-span-2 h-56 rounded-2xl" />
          <PlaceholderArt variant={2} className="h-40 rounded-2xl" />
          <PlaceholderArt variant={3} className="h-40 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
