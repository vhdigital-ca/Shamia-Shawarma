"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import { ratingSummary } from "@/lib/data";
import PlaceholderArt from "./PlaceholderArt";

const SLIDES = [
  { fr: "Poulet mariné, grillé à la broche", en: "Marinated chicken, spit-grilled" },
  { fr: "Bœuf tranché fin, sauce à l'ail maison", en: "Thin-sliced beef, house garlic sauce" },
  { fr: "Pita chaud, toujours à la commande", en: "Warm pita, always made to order" },
  { fr: "Assiettes familiales pour toute la tablée", en: "Family platters for the whole table" },
];

export default function Hero() {
  const { lang } = useLanguage();
  const t = dict[lang].hero;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <PlaceholderArt variant={index} label={SLIDES[index][lang]} className="h-full w-full" />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
      </div>

      {/* slide dots */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-2 md:flex">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "bg-saffron scale-125" : "bg-cream/40"
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-ticket text-xs uppercase tracking-[0.25em] text-saffron"
        >
          {t.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 max-w-3xl font-display text-4xl italic leading-[1.08] text-cream sm:text-5xl md:text-6xl"
        >
          {t.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 max-w-xl text-base text-cream/80 md:text-lg"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#menu"
            className="btn-squish rounded-full bg-paprika px-7 py-3.5 text-sm font-semibold text-cream shadow-lg hover:bg-paprika-dark"
          >
            {t.ctaPrimary}
          </a>
          <a
            href="#commander"
            className="btn-squish rounded-full border border-cream/40 px-7 py-3.5 text-sm font-semibold text-cream hover:bg-cream/10"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex items-center gap-3"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border border-saffron/50 text-saffron animate-spin-slow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 4L20 20M4 4L8 4M4 4L4 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <div className="text-cream">
            <span className="text-saffron">★★★★★</span>{" "}
            <span className="font-semibold">{ratingSummary.average}/5</span>{" "}
            <span className="text-cream/70">
              — {ratingSummary.count} {t.ratingLabel}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
