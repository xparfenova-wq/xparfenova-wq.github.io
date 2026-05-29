"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, Users, Tv, Sparkles } from "lucide-react";
import {
  MEDIA_CHANNELS,
  FILM_GUESTS,
  PARTNERS_FLOATING,
  PREMIERE_GALLERY,
  SITE,
} from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function GuestAvatar({
  name,
  photo,
}: {
  name: string;
  photo?: string;
}) {
  const initials = name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  if (photo) {
    return (
      <div className="relative size-12 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="48px"
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      aria-hidden
      className="size-12 rounded-full flex-shrink-0 inline-flex items-center justify-center bg-white/10 text-canvas-white/80 font-display font-semibold text-[13px] tracking-tight"
    >
      {initials}
    </div>
  );
}

export function Media() {
  return (
    <section
      id="media"
      className="py-16 sm:py-20 lg:py-24 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12"
      >
        <div className="max-w-[720px]">
          <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-4">
            Медиа
          </div>
          <h2
            className="font-display font-semibold text-obsidian-text"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
            }}
          >
            Веду YouTube, Telegram-канал и подкаст. Делюсь тем, что
            происходит в проектах, и как я об этом думаю.
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {PARTNERS_FLOATING.map((p) => (
            <div
              key={p.name}
              className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-alabaster-gray text-obsidian-text"
            >
              <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full overflow-hidden bg-canvas-white flex-shrink-0">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                />
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px] uppercase tracking-[0.18em] text-granite-gray font-medium">
                  {p.note}
                </span>
                <span className="text-[13px] font-display font-semibold">
                  {p.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {MEDIA_CHANNELS.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: EASE }}
          >
            <Link
              href={m.href}
              target={m.href.startsWith("http") ? "_blank" : undefined}
              rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block group h-full bg-canvas-white rounded-[28px] p-6 shadow-humble border border-black/[0.03] hover:border-black/[0.08] transition-colors"
            >
              <div className="text-[11px] uppercase tracking-[0.2em] text-granite-gray font-medium mb-3">
                {m.kind}
              </div>
              <div
                className="font-display font-semibold text-obsidian-text mb-2"
                style={{ fontSize: "22px", lineHeight: 1.2, letterSpacing: "-0.02em" }}
              >
                {m.name}
              </div>
              <div className="text-[14px] text-granite-gray mb-4">{m.handle}</div>
              <div className="flex items-end justify-between mt-auto">
                {m.subs && (
                  <div
                    className="font-display font-semibold text-obsidian-text"
                    style={{ fontSize: "28px", lineHeight: 1, letterSpacing: "-0.025em" }}
                  >
                    {m.subs}
                  </div>
                )}
                <ArrowUpRight className="size-5 text-granite-gray group-hover:text-electric-orange transition-colors ml-auto" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* FILM POSTER */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative rounded-[40px] overflow-hidden bg-ink-black"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[460px]">
            <Image
              src="/photos/film-premiere.jpg"
              alt="Премьера фильма про МФТИ"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent lg:bg-gradient-to-r" />
          </div>

          <div className="p-8 sm:p-10 lg:p-14 text-canvas-white flex flex-col justify-center">
            <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-4">
              Фильм про МФТИ · Oreshkin Media Lab
            </div>
            <h3
              className="font-display font-semibold mb-3"
              style={{
                fontSize: "clamp(26px, 3.2vw, 36px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              Полнометражный фильм с предпринимателями Forbes и нобелевским лауреатом.
            </h3>
            <p className="text-[14px] text-canvas-white/75 mb-5 leading-relaxed">
              «Как учат гениев в МФТИ»: 11 героев, нобелевский лауреат, основатели Hoff и Технониколь, ректор МФТИ.
            </p>

            <Link
              href={SITE.filmFullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-7 self-start inline-flex items-center gap-2 px-5 py-3 rounded-full bg-canvas-white text-obsidian-text text-[14px] font-medium hover:bg-ghost-white transition-colors"
            >
              <Play className="size-4" fill="currentColor" />
              Смотреть фильм
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-2 gap-x-4 gap-y-4">
              {FILM_GUESTS.all.map((g) => (
                <div key={g.name} className="flex items-center gap-3">
                  <GuestAvatar name={g.name} photo={g.photo} />
                  <div className="leading-tight min-w-0">
                    <div className="text-[13px] font-medium truncate">{g.name}</div>
                    {g.role ? (
                      <div className="text-[11px] text-canvas-white/65 truncate">
                        {g.role}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* PREMIERE BLOCK */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="mt-12 sm:mt-16"
      >
        <div className="mb-8">
          <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-4">
            Премьера
          </div>
          <h3
            className="font-display font-semibold text-obsidian-text"
            style={{
              fontSize: "clamp(24px, 3vw, 34px)",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            {FILM_GUESTS.premiere.audience} в технопарке МФТИ.
          </h3>
          <p className="mt-3 text-[15px] text-granite-gray leading-relaxed max-w-[640px]">
            Премьеру в Долгопрудном собрал и провёл лично. Программа: показ
            фильма, панельная дискуссия с участниками, съёмочная группа
            телевидения, нетворкинг.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {[
            {
              icon: Users,
              title: FILM_GUESTS.premiere.audience,
              desc: "Полный зал на премьере",
            },
            {
              icon: Sparkles,
              title: "Панельная дискуссия",
              desc: "Участники фильма на сцене",
            },
            {
              icon: Tv,
              title: "Снимало телевидение",
              desc: "Съёмочная группа на площадке",
            },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
                className="rounded-[24px] bg-canvas-white border border-black/[0.04] p-5 shadow-humble"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-alabaster-gray text-obsidian-text mb-3">
                  <Icon className="size-4" strokeWidth={1.75} />
                </span>
                <div
                  className="font-display font-semibold text-obsidian-text"
                  style={{ fontSize: "17px", letterSpacing: "-0.02em" }}
                >
                  {s.title}
                </div>
                <p className="text-[13px] text-granite-gray mt-1 leading-snug">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {PREMIERE_GALLERY.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: EASE }}
              className={`relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-humble${img.objectFit === "contain" ? " bg-ink-black" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className={img.objectFit === "contain" ? "object-contain p-3" : "object-cover"}
                style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
