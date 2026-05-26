"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { STORY_SHORT } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 scroll-mt-24"
    >
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="relative aspect-[4/5] w-full max-w-[480px] lg:max-w-none rounded-[40px] overflow-hidden shadow-humble"
        >
          <Image
            src="/photos/about-waterfall.jpg"
            alt="Карелия, водопад Кивач"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/55 via-black/15 to-transparent">
            <div className="text-canvas-white text-[12px] uppercase tracking-[0.16em] font-medium opacity-90">
              Карелия, водопад Кивач
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        >
          <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-5">
            Обо мне
          </div>
          <h2
            className="font-display font-semibold text-obsidian-text mb-6"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
            }}
          >
            {STORY_SHORT.title}
          </h2>
          <p
            className="text-granite-gray"
            style={{
              fontSize: "clamp(16px, 1.4vw, 18px)",
              lineHeight: 1.55,
              letterSpacing: "-0.015em",
              fontWeight: 500,
            }}
          >
            {STORY_SHORT.body}
          </p>

          <div className="mt-9 grid grid-cols-3 gap-x-5 gap-y-5">
            {[
              { value: "21", label: "год" },
              { value: "3 курс", label: "МФТИ × Сколково" },
              { value: "8 млн ₽", label: "грант на обучение" },
            ].map((m) => (
              <div key={m.label} className="flex flex-col gap-1">
                <div
                  className="font-display font-semibold text-electric-orange"
                  style={{
                    fontSize: "clamp(36px, 4vw, 52px)",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {m.value}
                </div>
                <div className="text-[12px] text-granite-gray font-medium leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
