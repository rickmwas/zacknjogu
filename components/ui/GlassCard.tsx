"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({
  children,
  className,
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 md:p-8 apple-glass",
        hoverEffect && "apple-glass-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
