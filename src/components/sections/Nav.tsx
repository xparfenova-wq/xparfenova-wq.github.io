"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV, SITE } from "@/lib/content";
import { cn } from "@/lib/cn";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 16);
  });

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled
          ? "bg-canvas-white/85 backdrop-blur-md border-b border-black/[0.04]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="relative inline-flex items-center justify-center w-9 h-9 rounded-full overflow-hidden bg-alabaster-gray group-hover:ring-1 group-hover:ring-electric-orange/30 transition-all"
          >
            <Image
              src="/photos/hero-portrait-1600.jpg"
              alt=""
              fill
              sizes="36px"
              className="object-cover object-top scale-110"
            />
          </span>
          <span className="font-medium text-[14px] tracking-[-0.01em] text-obsidian-text">
            {SITE.ownerName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="px-3 py-1.5 rounded-md text-[14px] font-medium text-granite-gray hover:text-obsidian-text hover:bg-black/[0.04] transition-colors"
            >
              {n.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-ink-black text-canvas-white text-[14px] font-medium hover:bg-obsidian-text transition-colors"
          >
            Запланировать звонок
          </Link>
        </nav>

        <button
          aria-label="Меню"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 rounded-md hover:bg-black/[0.04] transition-colors"
        >
          {open ? (
            <X className="size-5 text-obsidian-text" />
          ) : (
            <Menu className="size-5 text-obsidian-text" />
          )}
        </button>
      </div>

      {open && (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden bg-canvas-white border-t border-black/[0.04]"
        >
          <div className="max-w-[1280px] mx-auto px-5 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-[16px] font-medium text-obsidian-text hover:bg-black/[0.04]"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
