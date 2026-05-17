"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/cn";

export type ProjectGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

type ProjectGalleryProps = {
  images: ProjectGalleryImage[];
  /** Количество колонок на десктопе. По умолчанию 3. */
  desktopColumns?: 2 | 3;
  className?: string;
};

export function ProjectGallery({
  images,
  desktopColumns = 3,
  className,
}: ProjectGalleryProps) {
  if (images.length === 0) return null;

  const columnsClass =
    desktopColumns === 2
      ? "sm:columns-2 lg:columns-2"
      : "sm:columns-2 lg:columns-3";

  return (
    <div
      className={cn(
        "[column-gap:16px] sm:[column-gap:20px] lg:[column-gap:24px]",
        columnsClass,
        className
      )}
    >
      {images.map((image, index) => (
        <Reveal
          key={`${image.src}-${index}`}
          delay={Math.min(index * 0.04, 0.24)}
          className="mb-4 sm:mb-5 lg:mb-6 break-inside-avoid"
        >
          <figure className="rounded-[30px] overflow-hidden bg-alabaster-gray shadow-humble">
            <div className="relative w-full">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={1500}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-auto object-cover"
              />
            </div>
            {image.caption ? (
              <figcaption className="px-5 py-3 text-[13px] text-granite-gray border-t border-black/[0.04] bg-canvas-white">
                {image.caption}
              </figcaption>
            ) : null}
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
