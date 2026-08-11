"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import { reviews, ratingSummary, restaurantInfo } from "@/lib/data";

export default function Reviews() {
  const { lang } = useLanguage();
  const t = dict[lang].reviews;

  return (
    <section id="avis" className="bg-charcoal px-5 py-24 text-cream md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
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
        </div>

        <div className="mx-auto mt-10 flex max-w-lg items-center justify-center gap-12">
          <div className="text-center">
            <div className="font-display text-4xl italic text-saffron">{ratingSummary.average}</div>
            <div className="mt-1 text-saffron">★★★★★</div>
            <div className="mt-1 font-ticket text-xs uppercase tracking-wide text-cream/60">
              {t.avgLabel}
            </div>
          </div>
          <div className="h-12 w-px bg-cream/20" />
          <div className="text-center">
            <div className="font-display text-4xl italic text-saffron">{ratingSummary.count}</div>
            <div className="mt-1 font-ticket text-xs uppercase tracking-wide text-cream/60">
              {t.countLabel}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
          <a href={restaurantInfo.googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="text-saffron hover:underline">
            {t.seeAll}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-cream/10 bg-cream/5 p-6"
            >
              <span className="font-display text-3xl italic text-saffron/70">&ldquo;</span>
              <p className="mt-1 text-saffron text-sm">★★★★★</p>
              <p className="mt-2 text-sm leading-relaxed text-cream/85">{r.quote[lang]}</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-paprika/20 font-ticket text-sm text-saffron">
                  {r.initial}
                </span>
                <div>
                  <div className="text-sm font-medium text-cream">{r.author}</div>
                  <div className="text-xs text-cream/50">{r.source[lang]}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
