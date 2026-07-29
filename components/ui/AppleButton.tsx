"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AppleButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function AppleButton({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: AppleButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-full",
    md: "px-6 py-3 text-sm rounded-full",
    lg: "px-8 py-4 text-base rounded-full",
  };

  const variantClasses = {
    primary:
      "bg-[#E31E24] hover:bg-red-700 text-white font-bold shadow-md shadow-red-600/20 active:shadow-none border border-red-500/20",
    secondary:
      "bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-100 font-bold shadow-sm",
    outline:
      "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-300 dark:border-neutral-700 hover:border-[#E31E24] text-neutral-900 dark:text-white font-bold shadow-sm",
    ghost:
      "bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800/60 text-neutral-800 dark:text-neutral-200 font-bold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 tracking-tight transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E31E24]",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
