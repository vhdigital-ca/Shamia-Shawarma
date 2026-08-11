"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { dict } from "@/lib/dictionary";
import { restaurantInfo } from "@/lib/data";

export default function WhereWeAre() {
  const { lang } = useLanguage();
  const t = dict[lang].where;

  return (
    <section id="trouver" className="bg-cream-dim px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
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

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-paprika" size={20} />
              <div>
                <div className="text-xs uppercase tracking-wide text-ink/40 font-ticket">
                  {t.address}
                </div>
                <div className="mt-1 text-ink">{restaurantInfo.addressLine}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="mt-1 shrink-0 text-paprika" size={20} />
              <div>
                <div className="text-xs uppercase tracking-wide text-ink/40 font-ticket">
                  {t.hours}
                </div>
                <div className="mt-1 text-ink">{t.hoursValue}</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 shrink-0 text-paprika" size={20} />
              <div>
                <div className="text-xs uppercase tracking-wide text-ink/40 font-ticket">
                  {t.phone}
                </div>
                <div className="mt-1 text-ink/50">{t.phonePlaceholder}</div>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#commander"
              className="btn-squish rounded-full bg-paprika px-6 py-3 text-sm font-semibold text-cream hover:bg-paprika-dark"
            >
              {t.order}
            </a>
            <a
              href={restaurantInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-squish rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-paprika hover:text-paprika"
            >
              {t.directions}
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-ink/10 shadow-sm"
        >
          <iframe
            title="Shamia Shawarma — carte"
            src={restaurantInfo.mapEmbedSrc}
            className="h-80 w-full lg:h-full lg:min-h-[360px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
