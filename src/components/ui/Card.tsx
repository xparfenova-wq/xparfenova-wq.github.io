"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = false }: CardProps) {
  const base =
    "bg-canvas-white rounded-[30px] p-8 shadow-humble border border-black/[0.03]";

  if (interactive) {
    return (
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className={cn(base, "cursor-default", className)}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={cn(base, className)}>{children}</div>;
}

export function SubtleCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-alabaster-gray rounded-[48px] p-4 text-obsidian-text",
        className
      )}
    >
      {children}
    </div>
  );
}
