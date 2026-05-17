"use client";

import { type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export type ProjectFeatureItem = {
  title: string;
  description: string;
  /** Lucide icon component, например `import { Sparkles } from "lucide-react"`. */
  icon?: LucideIcon;
};

type ProjectFeaturesProps = {
  items: ProjectFeatureItem[];
  /** 2 или 3 колонки на десктопе. По умолчанию 3. */
  desktopColumns?: 2 | 3;
  className?: string;
};

export function ProjectFeatures({
  items,
  desktopColumns = 3,
  className,
}: ProjectFeaturesProps) {
  if (items.length === 0) return null;

  const gridClass =
    desktopColumns === 2
      ? "grid gap-5 sm:gap-6 sm:grid-cols-2"
      : "grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={cn(gridClass, className)}>
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <Reveal
            key={`${item.title}-${index}`}
            delay={Math.min(index * 0.05, 0.25)}
            className="h-full"
          >
            <div className="h-full rounded-[30px] bg-canvas-white border border-black/[0.04] shadow-humble p-7 sm:p-8 flex flex-col gap-4">
              {Icon ? (
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-alabaster-gray text-obsidian-text">
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
              ) : null}
              <h3
                className="font-display font-semibold text-obsidian-text"
                style={{
                  fontSize: "clamp(18px, 1.8vw, 22px)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                {item.title}
              </h3>
              <p className="text-[15px] text-granite-gray leading-relaxed">
                {item.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
