"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_COMMERCIAL, PROJECTS_SOCIAL, type Project } from "@/lib/content";

const EASE = [0.22, 1, 0.36, 1] as const;

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.05, ease: EASE }}
    >
      <Link
        href={`/${p.slug}`}
        className="block group h-full bg-canvas-white rounded-[28px] overflow-hidden shadow-humble border border-black/[0.03] hover:border-black/[0.08] transition-colors"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={p.cover}
            alt={p.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 380px"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
          />
          {p.badge && (
            <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1 rounded-full bg-canvas-white/95 backdrop-blur-sm text-[11px] uppercase tracking-[0.14em] font-medium text-electric-orange shadow-humble">
              {p.badge}
            </span>
          )}
        </div>
        <div className="p-6 flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <div className="text-[12px] uppercase tracking-[0.16em] text-granite-gray font-medium">
              {p.tag}
            </div>
            {p.hideName && (
              <ArrowUpRight className="size-5 text-granite-gray group-hover:text-electric-orange transition-colors shrink-0" />
            )}
          </div>
          {!p.hideName && (
            <div className="flex items-start justify-between gap-3">
              <h3
                className={
                  p.id === "medialab"
                    ? "font-display font-semibold text-shimmer"
                    : "font-display font-semibold text-obsidian-text"
                }
                style={{ fontSize: "21px", lineHeight: 1.15, letterSpacing: "-0.02em" }}
              >
                {p.name}
              </h3>
              <ArrowUpRight className="size-5 text-granite-gray group-hover:text-electric-orange transition-colors shrink-0 mt-1" />
            </div>
          )}
          <p className="text-[14px] text-granite-gray leading-[1.5]">{p.short}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export function CommercialProjects() {
  return (
    <section
      id="commercial"
      className="py-16 sm:py-20 lg:py-24 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 scroll-mt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: EASE }}
        className="max-w-[720px] mb-12"
      >
        <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-4">
          Коммерческие проекты
        </div>
        <h2
          className="font-display font-semibold text-obsidian-text"
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            lineHeight: 1.08,
            letterSpacing: "-0.035em",
          }}
        >
          Направления, где работаю с клиентами и партнёрами.
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PROJECTS_COMMERCIAL.map((p, i) => (
          <ProjectCard key={p.id} p={p} index={i} />
        ))}
      </div>
    </section>
  );
}

export function SocialProjects() {
  return (
    <section
      id="social"
      className="py-16 sm:py-20 lg:py-24 bg-ghost-white scroll-mt-24"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="max-w-[720px] mb-12"
        >
          <div className="text-[12px] uppercase tracking-[0.22em] text-electric-orange-text font-medium mb-4">
            Социальные проекты
          </div>
          <h2
            className="font-display font-semibold text-obsidian-text"
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              lineHeight: 1.08,
              letterSpacing: "-0.035em",
            }}
          >
            Проекты, где меняю траектории людей.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS_SOCIAL.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
