"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { COMMUNITY, PARTNER_HIGHLIGHT } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Community() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-8"
          >
            <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-4">
              Социальный капитал
            </div>
            <h2
              className="font-display font-semibold text-obsidian-text"
              style={{
                fontSize: "clamp(26px, 3.4vw, 38px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Участвую в бизнес-сообществах.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-3">
            {COMMUNITY.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-canvas-white border border-black/[0.03] hover:border-electric-orange/30 transition-colors"
              >
                <div
                  className="size-11 rounded-full bg-ink-black inline-flex items-center justify-center font-display font-semibold text-[14px] text-canvas-white flex-shrink-0 tracking-tight"
                  aria-hidden
                >
                  {c.name === "AGORA"
                    ? "A"
                    : c.name === "X Forum"
                    ? "X"
                    : "П"}
                </div>
                <div>
                  <div
                    className="font-display font-semibold text-obsidian-text"
                    style={{ fontSize: "17px", letterSpacing: "-0.02em" }}
                  >
                    {c.name}
                  </div>
                  <div className="text-[13px] text-granite-gray mt-0.5 leading-relaxed">
                    {c.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-8"
          >
            <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-4">
              {PARTNER_HIGHLIGHT.role}
            </div>
            <h2
              className="font-display font-semibold text-obsidian-text"
              style={{
                fontSize: "clamp(26px, 3.4vw, 38px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Ассоциированный партнёр Физтех Союза.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="rounded-[28px] bg-canvas-white p-7 shadow-humble border border-black/[0.03]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="size-12 rounded-full bg-electric-orange inline-flex items-center justify-center font-display font-semibold text-[15px] text-canvas-white flex-shrink-0 tracking-tight"
                aria-hidden
              >
                Ф
              </div>
              <div
                className="font-display font-semibold text-obsidian-text"
                style={{ fontSize: "22px", letterSpacing: "-0.02em", lineHeight: 1.2 }}
              >
                {PARTNER_HIGHLIGHT.name}
              </div>
            </div>
            <p className="text-[14px] text-granite-gray leading-[1.55] mb-5">
              Сообщество выпускников МФТИ. Поддерживает студентов и
              преподавателей института. Подробности моего участия открыты
              по ссылке.
            </p>
            <Link
              href={PARTNER_HIGHLIGHT.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-ink-black text-canvas-white text-[14px] font-medium hover:bg-obsidian-text transition-colors"
            >
              Открыть профиль
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
