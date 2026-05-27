"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { SITE, HERO_LOGOS } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-48 -right-40 w-[440px] h-[440px] rounded-full opacity-[0.06] pointer-events-none blur-[140px]"
        style={{ background: "radial-gradient(circle, #ff4000 0%, transparent 70%)" }}
      />
      <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          {/* TEXT */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="font-display font-semibold text-obsidian-text"
              style={{
                fontSize: "clamp(42px, 8vw, 96px)",
                lineHeight: 0.92,
                letterSpacing: "-0.045em",
              }}
            >
              {SITE.ownerName}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
              className="mt-7 max-w-[480px] text-granite-gray"
              style={{ fontSize: "16px", lineHeight: 1.55, fontWeight: 500 }}
            >
              Студент МФТИ × Сколково. Строю проекты в IT, образовании и медиа — стремлюсь быть вкладом в жизни людей и менять их к лучшему.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
              className="mt-9 flex flex-col gap-2 max-w-[280px]"
            >
              <Link
                href="#commercial"
                className="inline-flex items-center justify-between px-5 py-3 rounded-full bg-alabaster-gray text-obsidian-text text-[14px] font-medium hover:bg-ghost-white transition-colors"
              >
                <span>Коммерческие проекты</span>
                <ArrowRight className="size-4 text-granite-gray" />
              </Link>
              <Link
                href="#social"
                className="inline-flex items-center justify-between px-5 py-3 rounded-full bg-alabaster-gray text-obsidian-text text-[14px] font-medium hover:bg-ghost-white transition-colors"
              >
                <span>Социальные проекты</span>
                <ArrowRight className="size-4 text-granite-gray" />
              </Link>
              <Link
                href="#media"
                className="inline-flex items-center justify-between px-5 py-3 rounded-full bg-alabaster-gray text-obsidian-text text-[14px] font-medium hover:bg-ghost-white transition-colors"
              >
                <span>Медиа</span>
                <ArrowRight className="size-4 text-granite-gray" />
              </Link>
              <Link
                href="#about"
                className="inline-flex items-center justify-between px-5 py-3 rounded-full bg-alabaster-gray text-obsidian-text text-[14px] font-medium hover:bg-ghost-white transition-colors"
              >
                <span>Обо мне</span>
                <ArrowRight className="size-4 text-granite-gray" />
              </Link>
              <Link
                href="#contact"
                className="mt-2 inline-flex items-center justify-between px-5 py-3.5 rounded-full bg-ink-black text-canvas-white text-[14px] font-medium hover:bg-obsidian-text transition-colors"
              >
                <span className="inline-flex items-center gap-2">
                  <Calendar className="size-4" />
                  Запланировать звонок
                </span>
                <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="order-1 lg:order-2 relative aspect-[4/5] w-full max-w-[560px] lg:max-w-none lg:ml-auto mx-auto"
          >
            <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-humble">
              <Image
                src="/photos/hero-portrait-1600.jpg"
                alt={`${SITE.ownerName}, портрет`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Floating logos card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
              className="absolute -bottom-5 -left-3 sm:-bottom-7 sm:-left-6 bg-canvas-white rounded-3xl px-5 py-3.5 shadow-humble flex items-center gap-4"
            >
              <div className="text-[10px] uppercase tracking-[0.18em] text-granite-gray font-medium mr-1">
                Учусь
              </div>
              {HERO_LOGOS.map((l) => (
                <div
                  key={l.name}
                  className="flex items-center gap-2"
                  title={l.name}
                >
                  <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full overflow-hidden bg-alabaster-gray flex-shrink-0">
                    <Image
                      src={l.logo}
                      alt={l.name}
                      width={36}
                      height={36}
                      className="object-contain w-full h-full"
                    />
                  </span>
                  <span className="text-[12px] font-display font-semibold text-obsidian-text leading-tight">
                    {l.short}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
