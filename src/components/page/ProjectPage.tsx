"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, ArrowLeft } from "lucide-react";
import { type ReactNode } from "react";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/motion/Reveal";
import {
  ApplicationForm,
  type ApplicationFormIntent,
} from "@/components/forms/ApplicationForm";

export type ProjectCategory = "Коммерческий проект" | "Социальный проект";

type ProjectPageProps = {
  category: ProjectCategory;
  title: string;
  lead: string;
  heroImage?: string;
  heroBadge?: string;
  ctaLabel?: string;
  ctaHref?: string;
  /** Куда ведёт кнопка «На главную» — якорь блока, откуда пришёл пользователь */
  backHref?: string;
  formIntent: ApplicationFormIntent;
  formTitle: string;
  formSubtitle?: string;
  /** Дополнительный слот для блока «Кейсы» или «Что входит» */
  secondary?: ReactNode;
  children: ReactNode;
};

export function ProjectPage({
  category,
  title,
  lead,
  heroImage,
  heroBadge,
  ctaLabel = "Запланировать звонок",
  ctaHref = "/#contact",
  backHref = "/",
  formIntent,
  formTitle,
  formSubtitle,
  secondary,
  children,
}: ProjectPageProps) {
  return (
    <>
      <Nav />
      <main className="pt-24 sm:pt-28">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-40 -right-40 w-[420px] h-[420px] rounded-full opacity-[0.05] pointer-events-none blur-[140px]"
            style={{
              background:
                "radial-gradient(circle, #ff4000 0%, transparent 70%)",
            }}
          />
          <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-6 pb-16 sm:pb-20">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link
                  href={backHref}
                  className="group inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-alabaster-gray hover:bg-ghost-white transition-colors text-[13px] font-medium text-obsidian-text"
                >
                  <ArrowLeft className="size-4 group-hover:-translate-x-0.5 transition-transform" />
                  К проектам
                </Link>
                <nav
                  aria-label="Хлебные крошки"
                  className="hidden sm:flex flex-wrap items-center gap-1.5 text-[12px] text-granite-gray font-medium"
                >
                  <span>{category}</span>
                  <ChevronRight className="size-3.5 text-granite-gray/60" />
                  <span className="text-obsidian-text">{title}</span>
                </nav>
              </div>
            </Reveal>

            <div className="mt-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-16 items-end">
              <div>
                {heroBadge ? (
                  <Reveal>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-alabaster-gray text-[12px] uppercase tracking-[0.18em] text-obsidian-text font-medium mb-6">
                      <span className="size-1.5 rounded-full bg-electric-orange" />
                      {heroBadge}
                    </div>
                  </Reveal>
                ) : null}

                <Reveal delay={0.04}>
                  <h1
                    className="font-display font-semibold text-obsidian-text"
                    style={{
                      fontSize: "clamp(36px, 6vw, 72px)",
                      lineHeight: 1.02,
                      letterSpacing: "-0.035em",
                      fontWeight: 600,
                    }}
                  >
                    {title}
                  </h1>
                </Reveal>

                <Reveal delay={0.08}>
                  <p
                    className="mt-6 max-w-[640px] text-obsidian-text"
                    style={{
                      fontSize: "clamp(18px, 1.5vw, 20px)",
                      lineHeight: 1.5,
                      letterSpacing: "-0.015em",
                      fontWeight: 500,
                    }}
                  >
                    {lead}
                  </p>
                </Reveal>

                <Reveal delay={0.12}>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <Link
                      href={ctaHref}
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-ink-black text-canvas-white text-[15px] font-medium hover:bg-obsidian-text transition-colors"
                    >
                      <Calendar className="size-4" />
                      {ctaLabel}
                    </Link>
                  </div>
                </Reveal>
              </div>

              {heroImage ? (
                <Reveal delay={0.1}>
                  <div className="relative aspect-[4/5] w-full max-w-[460px] lg:max-w-none lg:ml-auto">
                    <div className="relative w-full h-full rounded-[40px] overflow-hidden shadow-humble">
                      <Image
                        src={heroImage}
                        alt={title}
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </Reveal>
              ) : null}
            </div>
          </div>
        </section>

        {/* Основной контент */}
        <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
          {children}
        </section>

        {/* Опциональный слот: «Кейсы» или «Что входит» */}
        {secondary ? (
          <section className="bg-alabaster-gray">
            <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
              {secondary}
            </div>
          </section>
        ) : null}

        {/* Форма заявки */}
        <ApplicationForm
          intent={formIntent}
          title={formTitle}
          subtitle={formSubtitle}
        />
      </main>
      <Footer />
    </>
  );
}
