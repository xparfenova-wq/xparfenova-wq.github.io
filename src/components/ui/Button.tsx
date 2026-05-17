"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "secondary";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium select-none transition-colors";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink-black text-canvas-white px-5 py-3.5 text-[16px] hover:bg-obsidian-text",
  ghost:
    "bg-white/8 text-ink-black px-5 py-3.5 text-[16px] hover:bg-white/15 ring-1 ring-ink-black/10",
  secondary:
    "bg-alabaster-gray text-obsidian-text px-5 py-3.5 text-[16px] hover:bg-ghost-white",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  const Inner = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ y: 0, scale: 0.99 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="inline-flex items-center gap-2"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {Inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {Inner}
    </button>
  );
}
