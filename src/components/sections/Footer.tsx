"use client";

import Link from "next/link";
import { SITE, FOOTER_PERSONAL_MEDIA, FOOTER_PROJECTS } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] mt-10">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-ink-black text-canvas-white font-display font-semibold text-[13px]">
              АО
            </span>
            <span className="font-medium text-[14px] text-obsidian-text">
              {SITE.ownerName}
            </span>
          </div>
          <p className="text-[13px] text-granite-gray leading-relaxed max-w-[260px]">
            Студент МФТИ × Сколково. Продюсер проектов в медиа, IT и образовании.
          </p>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-granite-gray font-medium mb-4">
            Личные медиа
          </div>
          <div className="flex flex-col gap-2">
            {FOOTER_PERSONAL_MEDIA.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-[14px] text-obsidian-text hover:text-electric-orange transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-granite-gray font-medium mb-4">
            Проекты
          </div>
          <div className="flex flex-col gap-2">
            {FOOTER_PROJECTS.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="text-[14px] text-obsidian-text hover:text-electric-orange transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-granite-gray font-medium mb-4">
            Связаться
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href={`https://t.me/${SITE.tg.xenia}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-obsidian-text hover:text-electric-orange transition-colors"
            >
              @{SITE.tg.xenia} · ассистент
            </Link>
            <Link
              href={`https://t.me/${SITE.tg.anton}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-obsidian-text hover:text-electric-orange transition-colors"
            >
              @{SITE.tg.anton}
            </Link>
            <Link
              href="/#contact"
              className="text-[14px] text-granite-gray hover:text-electric-orange transition-colors"
            >
              Сообщить об ошибке
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-black/[0.04]">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-7 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-[12px] text-granite-gray">
          <div>© 2026 {SITE.ownerName}</div>
          <div>Сделано в Oreshkin Media Lab</div>
        </div>
      </div>
    </footer>
  );
}
