"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

type ProjectCallToActionProps = {
  title: string;
  description?: string;
  buttonLabel: string;
  buttonHref: string;
  external?: boolean;
  className?: string;
};

export function ProjectCallToAction({
  title,
  description,
  buttonLabel,
  buttonHref,
  external,
  className,
}: ProjectCallToActionProps) {
  return (
    <Reveal>
      <div
        className={cn(
          "rounded-[30px] bg-canvas-white border border-black/[0.04] shadow-humble p-8 sm:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between",
          className
        )}
      >
        <div className="max-w-[640px]">
          <h3
            className="font-display font-semibold text-obsidian-text"
            style={{
              fontSize: "clamp(22px, 2.6vw, 30px)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
            }}
          >
            {title}
          </h3>
          {description ? (
            <p className="mt-3 text-[15px] sm:text-[16px] text-granite-gray leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
        <Link
          href={buttonHref}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-2 self-start md:self-auto px-5 py-3.5 rounded-full bg-ink-black text-canvas-white text-[15px] font-medium hover:bg-obsidian-text transition-colors whitespace-nowrap"
        >
          {buttonLabel}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </Reveal>
  );
}
