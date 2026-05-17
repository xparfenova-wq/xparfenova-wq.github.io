"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MessageCircle, ArrowUpRight } from "lucide-react";
import { SITE } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-28 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="rounded-[48px] bg-ink-black text-canvas-white p-8 sm:p-12 lg:p-16 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,64,0,0.18),transparent_60%)] pointer-events-none" />

        <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-start">
          <div>
            <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-5">
              Связаться
            </div>
            <h2
              className="font-display font-semibold"
              style={{
                fontSize: "clamp(30px, 4.4vw, 52px)",
                lineHeight: 0.98,
                letterSpacing: "-0.04em",
              }}
            >
              Запланируйте звонок или напишите в Telegram
            </h2>
            <p
              className="mt-5 text-canvas-white/70 max-w-[460px]"
              style={{ fontSize: "16px", lineHeight: 1.55 }}
            >
              Беру в работу проекты в медиа, IT-разработке, подборе сотрудников и менторском сопровождении. Ответ через Ксению обычно быстрее.
            </p>

            <div className="mt-8">
              <div className="text-[11px] uppercase tracking-[0.2em] text-canvas-white/60 font-medium mb-4">
                Забронировать звонок
              </div>
              <div className="flex flex-col gap-2.5">
                {SITE.cal.types.map((t) => (
                  <Link
                    key={t.slug}
                    href={`${SITE.cal.base}/${t.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-white/8 hover:bg-white/15 transition-colors backdrop-blur-sm"
                  >
                    <span className="flex items-center gap-4 min-w-0">
                      <Calendar className="size-5 text-electric-orange flex-shrink-0" />
                      <span className="flex flex-col leading-tight min-w-0">
                        <span className="text-[15px] font-medium">
                          {t.title}
                        </span>
                        <span className="text-[12px] text-canvas-white/60">
                          {t.length} · {t.description}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 text-canvas-white/60 group-hover:text-canvas-white transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-[11px] uppercase tracking-[0.2em] text-canvas-white/60 font-medium mb-1">
              Написать в Telegram
            </div>
            <Link
              href={`https://t.me/${SITE.tg.xenia}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-6 py-5 rounded-3xl bg-canvas-white text-obsidian-text hover:bg-ghost-white transition-colors"
            >
              <span className="inline-flex items-center gap-3">
                <MessageCircle className="size-5 text-electric-orange" />
                <div>
                  <div className="text-[15px] font-medium">Написать Ксении</div>
                  <div className="text-[12px] text-granite-gray">
                    @{SITE.tg.xenia} · ассистент, отвечает быстрее
                  </div>
                </div>
              </span>
              <ArrowUpRight className="size-5" />
            </Link>

            <Link
              href={`https://t.me/${SITE.tg.anton}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between gap-3 px-6 py-5 rounded-3xl bg-white/10 hover:bg-white/15 transition-colors backdrop-blur-sm"
            >
              <span className="inline-flex items-center gap-3">
                <MessageCircle className="size-5" />
                <div>
                  <div className="text-[15px] font-medium">Написать Антону</div>
                  <div className="text-[12px] text-canvas-white/60">
                    @{SITE.tg.anton}
                  </div>
                </div>
              </span>
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
