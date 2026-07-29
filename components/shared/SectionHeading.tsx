import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-3.5 mb-10 md:mb-14",
        centered ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-red-500/10 text-[#E31E24] dark:text-red-400 border border-red-500/20 backdrop-blur-md shadow-sm",
            centered && "mx-auto"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E31E24] animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.035em] text-neutral-950 dark:text-white font-heading leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
