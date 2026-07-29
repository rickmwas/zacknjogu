"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const FILTERS = ["All", "Events", "Community", "Meetings"];

  const GALLERY_IMAGES = [
    { id: 1, title: "Karunge Market Baraza", category: "Events", image: "/images/baraza.png" },
    { id: 2, title: "Youth Innovation Forum", category: "Community", image: "/images/candidate.png" },
    { id: 3, title: "Sub-Location Elders Consultative Meeting", category: "Meetings", image: "/images/baraza.png" },
    { id: 4, title: "Boda Boda Safety Gear Distribution", category: "Community", image: "/images/candidate.png" },
    { id: 5, title: "Munyu Water Pump Solarization Site Inspection", category: "Events", image: "/images/baraza.png" },
    { id: 6, title: "Women Market Leaders Dialogue", category: "Meetings", image: "/images/baraza.png" },
  ];

  const filteredImages = activeFilter === "All"
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <div className="py-10 md:py-16 space-y-10">
      {/* Screen 06 Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="space-y-2 text-left">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-50 text-[#E31E24] dark:bg-red-950 dark:text-red-400 border border-red-200 dark:border-red-900">
            Media Archive
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-950 dark:text-white font-heading">
            Gallery
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed max-w-3xl">
            A visual record of Zack Njogu&apos;s ground activities, community barazas, and development project inspections across Maai Mahiu Ward.
          </p>
        </div>

        {/* Screen 06: Filter Chips */}
        <div className="flex items-center gap-2 pt-2 overflow-x-auto pb-2">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              type="button"
              className={cn(
                "px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0",
                activeFilter === filter
                  ? "bg-[#E31E24] text-white shadow-md"
                  : "bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Screen 06: 6 Grid Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 shadow-md group"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#E31E24]">
                  {item.category}
                </span>
                <h3 className="text-sm font-bold font-heading">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white font-bold text-xs hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors shadow-sm"
          >
            <ImageIcon className="w-4 h-4 text-[#E31E24]" />
            <span>View All Photos & Videos</span>
          </button>
        </div>
      </section>
    </div>
  );
}
