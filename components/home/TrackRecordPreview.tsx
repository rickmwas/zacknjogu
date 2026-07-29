"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, CheckCircle2, ShieldAlert } from "lucide-react";
import { COMMUNITY_PROJECTS } from "@/lib/data/campaignData";
import { AppleButton } from "@/components/ui/AppleButton";

export function TrackRecordPreview() {
  return (
    <section className="py-20 sm:py-28 bg-[#FAF8F5] dark:bg-neutral-950 text-neutral-950 dark:text-white border-b border-neutral-200 dark:border-neutral-800 editorial-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6 border-b border-neutral-200/80 dark:border-neutral-800 pb-8">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-black uppercase tracking-widest">
              Action Over Words
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight uppercase">
              Proven <span className="text-[#E31E24]">Track Record</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
              Consistently delivering grass-roots impact in water, lighting, and youth safety across Maai Mahiu Ward.
            </p>
          </div>

          <Link href="/community" className="shrink-0">
            <AppleButton variant="outline" size="lg" className="bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-bold text-sm">
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 text-[#E31E24]" />
            </AppleButton>
          </Link>
        </div>

        {/* Photojournalistic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {COMMUNITY_PROJECTS.slice(0, 3).map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200/90 dark:border-neutral-800/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
            >
              <div>
                {/* Photo Treatment */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-900">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 backdrop-blur-md text-[10px] font-extrabold uppercase tracking-widest text-white border border-neutral-700/60">
                    <span>{project.category}</span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{project.status}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#E31E24] dark:text-red-400 font-bold uppercase tracking-wide">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-neutral-950 dark:text-white group-hover:text-[#E31E24] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 font-body leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Verified Impact Footer */}
              <div className="px-6 sm:px-7 py-4 bg-neutral-50 dark:bg-neutral-800/50 border-t border-neutral-200/80 dark:border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-500 dark:text-neutral-400 font-semibold">Verified Impact:</span>
                <span className="text-[#E31E24] dark:text-red-400 font-black tracking-tight">{project.impactMetrics}</span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
